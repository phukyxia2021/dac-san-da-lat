// Lớp truy cập dữ liệu (Data Service Layer)
// Toàn bộ UI chỉ gọi qua module này, sẵn sàng chuyển đổi sang Supabase mà không cần sửa giao diện

import { CONFIG } from "../config.js";
import { CATEGORIES, PRODUCTS, BLOG_POSTS } from "../data/products.js";

// Chuẩn hóa tiếng Việt không dấu, chữ thường phục vụ tìm kiếm thông minh
export function normalizeVietnamese(str = "") {
  return String(str)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .trim();
}

// Escape HTML để chống XSS tuyệt đối với dữ liệu người dùng nhập
export function escapeHtml(str = "") {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  };
  return String(str).replace(/[&<>"']/g, (m) => map[m]);
}

// Định dạng tiền tệ chuẩn tiếng Việt: 120.000₫
const vndFormatter = new Intl.NumberFormat("vi-VN");
export function formatCurrency(amount) {
  if (amount === null || amount === undefined || Number.isNaN(Number(amount))) {
    return "Liên hệ";
  }
  return `${vndFormatter.format(Math.round(Number(amount)))}₫`;
}

// Tính phần trăm giảm giá: round((originalPrice - price) / originalPrice * 100)
export function calcDiscountPercent(price, originalPrice) {
  if (!originalPrice || !price || originalPrice <= price) return 0;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}

// Định dạng số lượng đã bán (vd: 1250 -> 1,2k)
export function formatSoldCount(count = 0) {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1).replace(".", ",")}k`;
  }
  return String(count);
}

// Đảm bảo thời gian kết thúc Flash Sale luôn ở tương lai (+2 ngày kể từ phiên truy cập)
function getFlashSaleEndsAt() {
  const key = "dld_flash_sale_ends_at";
  try {
    const saved = sessionStorage.getItem(key);
    if (saved && new Date(saved).getTime() > Date.now() + 3600 * 1000) {
      return saved;
    }
    const target = new Date(Date.now() + 2 * 24 * 3600 * 1000 + 5 * 3600 * 1000 + 28 * 60 * 1000).toISOString();
    sessionStorage.setItem(key, target);
    return target;
  } catch {
    return new Date(Date.now() + 2 * 24 * 3600 * 1000).toISOString();
  }
}

// Chuẩn hóa đối tượng sản phẩm (gắn flashSale.endsAt động)
function hydrateProduct(p) {
  if (!p) return null;
  if (p.isFlashSale) {
    return {
      ...p,
      flashSale: {
        endsAt: getFlashSaleEndsAt()
      }
    };
  }
  return p;
}

// Bộ nhớ fallback khi trình duyệt chặn LocalStorage
const memoryFallback = new Map();

export function safeGetStorage(key, defaultValue = null) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return defaultValue;
    return JSON.parse(raw);
  } catch {
    return memoryFallback.has(key) ? memoryFallback.get(key) : defaultValue;
  }
}

export function safeSetStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    memoryFallback.set(key, value);
  }
}

// Khởi tạo và kiểm tra phiên bản schema LocalStorage
export function initStorageSchema() {
  const currentVersion = safeGetStorage(CONFIG.STORAGE_KEYS.SCHEMA_VERSION);
  if (currentVersion !== CONFIG.SCHEMA_VERSION) {
    safeSetStorage(CONFIG.STORAGE_KEYS.SCHEMA_VERSION, CONFIG.SCHEMA_VERSION);
  }
}

/**
 * 1. Lấy danh sách 6 danh mục chuẩn
 */
export async function getCategories() {
  if (CONFIG.DATA_SOURCE === "supabase" && CONFIG.SUPABASE_URL) {
    // TODO: Tích hợp Supabase bảng `categories`
    // const res = await fetch(`${CONFIG.SUPABASE_URL}/rest/v1/categories?select=*&order=order.asc`, {
    //   headers: { apikey: CONFIG.SUPABASE_ANON_KEY, Authorization: `Bearer ${CONFIG.SUPABASE_ANON_KEY}` }
    // });
    // return await res.json();
  }
  return [...CATEGORIES].sort((a, b) => a.order - b.order);
}

/**
 * Lấy thông tin 1 danh mục theo slug hoặc alias (tương thích cả categories.csv)
 */
export async function getCategoryBySlug(slug) {
  if (!slug) return null;
  const categories = await getCategories();
  return (
    categories.find(
      (c) => c.slug === slug || c.id === slug || (c.aliases && c.aliases.includes(slug))
    ) || null
  );
}

/**
 * 2. Truy vấn danh sách sản phẩm có lọc, tìm kiếm, sắp xếp và phân trang
 * @param {Object} params
 * @param {string} [params.categorySlug] - Slug danh mục (hoặc mảng slugs)
 * @param {string} [params.q] - Từ khóa tìm kiếm
 * @param {Object} [params.filters] - { priceRange, needs: [], weights: [], categories: [] }
 * @param {string} [params.sort] - "bestseller" | "price-asc" | "price-desc" | "newest"
 * @param {number} [params.page] - Trang hiện tại (bắt đầu từ 1)
 * @param {number} [params.pageSize] - Số sản phẩm mỗi trang
 */
export async function getProducts({
  categorySlug = "",
  q = "",
  filters = {},
  sort = "bestseller",
  page = 1,
  pageSize = 1000
} = {}) {
  if (CONFIG.DATA_SOURCE === "supabase" && CONFIG.SUPABASE_URL) {
    // TODO: Truy vấn bảng `products` và `product_variants` từ Supabase REST / SDK
  }

  let list = PRODUCTS.map(hydrateProduct);

  // Lọc theo categorySlug đơn lẻ hoặc danh sách categories trong filters
  const activeCatSlugs = new Set();
  if (categorySlug && categorySlug !== "all") {
    activeCatSlugs.add(categorySlug);
  }
  if (Array.isArray(filters.categories)) {
    filters.categories.forEach((s) => s && activeCatSlugs.add(s));
  }

  if (activeCatSlugs.size > 0) {
    const matchedCatIds = new Set();
    CATEGORIES.forEach((c) => {
      if (
        activeCatSlugs.has(c.slug) ||
        activeCatSlugs.has(c.id) ||
        (c.aliases && c.aliases.some((a) => activeCatSlugs.has(a)))
      ) {
        matchedCatIds.add(c.id);
      }
    });
    list = list.filter((p) => matchedCatIds.has(p.categoryId));
  }

  // Tìm kiếm theo từ khóa không dấu, không phân biệt hoa thường
  if (q && q.trim().length > 0) {
    const normQ = normalizeVietnamese(q);
    const tokens = normQ.split(/\s+/).filter(Boolean);
    list = list.filter((p) => {
      const hay = normalizeVietnamese(`${p.name} ${p.shortDescription} ${p.slug.replace(/-/g, " ")}`);
      return tokens.every((tk) => hay.includes(tk));
    });
  }

  // Lọc theo Trọng lượng (OR trong nhóm: 250 | 500 | 1000)
  const selectedWeights = Array.isArray(filters.weights)
    ? filters.weights.map((w) => Number(w)).filter(Boolean)
    : [];

  if (selectedWeights.length > 0) {
    list = list.filter((p) =>
      p.variants.some((v) => selectedWeights.includes(Number(v.weightG)))
    );
  }

  // Lọc theo Khoảng giá dựa trên giá thấp nhất (hoặc giá variant khớp trọng lượng đang chọn)
  if (filters.priceRange) {
    list = list.filter((p) => {
      const candidateVariants =
        selectedWeights.length > 0
          ? p.variants.filter((v) => selectedWeights.includes(Number(v.weightG)))
          : p.variants;
      const checkPrice =
        candidateVariants.length > 0
          ? Math.min(...candidateVariants.map((v) => v.price))
          : p.variants[0]?.price || 0;

      if (filters.priceRange === "under-100k") return checkPrice < 100000;
      if (filters.priceRange === "100k-300k") return checkPrice >= 100000 && checkPrice <= 300000;
      if (filters.priceRange === "over-300k") return checkPrice > 300000;
      return true;
    });
  }

  // Lọc theo Nhu cầu (OR trong nhóm: an-vat | tot-suc-khoe | qua-bieu)
  if (Array.isArray(filters.needs) && filters.needs.length > 0) {
    list = list.filter((p) =>
      filters.needs.some((need) => p.needs && p.needs.includes(need))
    );
  }

  // Lọc chỉ khuyến mãi (nếu có cờ onlySale)
  if (filters.onlySale) {
    list = list.filter(
      (p) => p.isFlashSale || p.variants.some((v) => v.originalPrice > v.price)
    );
  }

  // Sắp xếp
  list.sort((a, b) => {
    const priceA = a.variants[0]?.price || 0;
    const priceB = b.variants[0]?.price || 0;
    if (sort === "price-asc") return priceA - priceB;
    if (sort === "price-desc") return priceB - priceA;
    if (sort === "newest") return new Date(b.createdAt) - new Date(a.createdAt);
    // Mặc định: Bán chạy nhất (soldCount giảm dần)
    return (b.soldCount || 0) - (a.soldCount || 0);
  });

  const total = list.length;
  const start = (Math.max(1, page) - 1) * pageSize;
  const items = list.slice(start, start + pageSize);

  return {
    items,
    total,
    page,
    pageSize,
    hasMore: start + pageSize < total
  };
}

/**
 * 3. Lấy chi tiết 1 sản phẩm theo slug
 */
export async function getProductBySlug(slug) {
  if (!slug) return null;
  if (CONFIG.DATA_SOURCE === "supabase" && CONFIG.SUPABASE_URL) {
    // TODO: Truy vấn Supabase theo slug
  }
  const found = PRODUCTS.find((p) => p.slug === slug || p.id === slug);
  return hydrateProduct(found);
}

/**
 * Lấy sản phẩm theo ID (phục vụ giỏ hàng lấy giá mới nhất)
 */
export function getProductByIdSync(productId) {
  const found = PRODUCTS.find((p) => p.id === productId || p.slug === productId);
  return hydrateProduct(found);
}

/**
 * 4. Lấy danh sách sản phẩm Flash Sale
 */
export async function getFlashSaleProducts() {
  const items = PRODUCTS.filter((p) => p.isFlashSale).map(hydrateProduct);
  return {
    endsAt: getFlashSaleEndsAt(),
    items
  };
}

/**
 * Lấy sản phẩm liên quan cùng danh mục
 */
export async function getRelatedProducts(product, limit = 4) {
  if (!product) return [];
  return PRODUCTS.filter(
    (p) => p.categoryId === product.categoryId && p.id !== product.id
  )
    .slice(0, limit)
    .map(hydrateProduct);
}

/**
 * Lấy 3 Set Quà Biếu tiêu biểu theo 3 mức ngân sách
 */
export async function getGiftHighlightSets() {
  const targetSlugs = [
    "hop-qua-tet-dac-san-da-lat-04-mon",
    "hop-qua-tet-cao-cap-06-mon",
    "qua-tet-xuan-binh-an"
  ];
  return targetSlugs
    .map((slug) => PRODUCTS.find((p) => p.slug === slug))
    .filter(Boolean)
    .map(hydrateProduct);
}

/**
 * 5. Lấy danh sách bài viết Cẩm nang (Blog)
 */
export async function getBlogPosts({ limit = 10 } = {}) {
  if (CONFIG.DATA_SOURCE === "supabase" && CONFIG.SUPABASE_URL) {
    // TODO: Truy vấn bảng `blog_posts` từ Supabase
  }
  return BLOG_POSTS.slice(0, limit);
}

export async function getBlogPostBySlug(slug) {
  if (!slug) return BLOG_POSTS[0] || null;
  return BLOG_POSTS.find((b) => b.slug === slug || b.id === slug) || null;
}

/**
 * 6. Tạo đơn hàng thử nghiệm (lưu vào LocalStorage `dld_orders`)
 */
export async function createOrder(orderPayload) {
  const now = new Date();
  const yy = String(now.getFullYear()).slice(-2);
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const rand = String(Math.floor(1000 + Math.random() * 9000));
  const code = `DLD-${yy}${mm}${dd}-${rand}`;

  const newOrder = {
    code,
    createdAt: now.toISOString(),
    status: "pending",
    isTestOrder: true,
    ...orderPayload
  };

  if (CONFIG.DATA_SOURCE === "supabase" && CONFIG.SUPABASE_URL) {
    // TODO: Gửi đơn hàng lên bảng `orders` và `order_items` của Supabase
  }

  const orders = safeGetStorage(CONFIG.STORAGE_KEYS.ORDERS, []);
  orders.unshift(newOrder);
  safeSetStorage(CONFIG.STORAGE_KEYS.ORDERS, orders);
  return newOrder;
}

export async function getOrderByCode(code) {
  const orders = safeGetStorage(CONFIG.STORAGE_KEYS.ORDERS, []);
  if (!code) return orders[0] || null;
  return orders.find((o) => o.code === code) || null;
}

/**
 * Lưu đăng ký nhận ưu đãi (`dld_subscribers`)
 */
export async function saveSubscriber(contactValue) {
  const list = safeGetStorage(CONFIG.STORAGE_KEYS.SUBSCRIBERS, []);
  const entry = {
    id: `sub-${Date.now()}`,
    contact: contactValue.trim(),
    createdAt: new Date().toISOString()
  };
  list.unshift(entry);
  safeSetStorage(CONFIG.STORAGE_KEYS.SUBSCRIBERS, list);
  return entry;
}

/**
 * Lưu yêu cầu báo giá Quà Doanh Nghiệp (`dld_b2b_leads`)
 */
export async function saveB2BLead(leadData) {
  const list = safeGetStorage(CONFIG.STORAGE_KEYS.B2B_LEADS, []);
  const entry = {
    id: `b2b-${Date.now()}`,
    ...leadData,
    createdAt: new Date().toISOString()
  };
  list.unshift(entry);
  safeSetStorage(CONFIG.STORAGE_KEYS.B2B_LEADS, list);
  return entry;
}
