// Quản lý trạng thái Giỏ hàng & Lưu trữ bền vững trong LocalStorage (`dld_cart`)
// Chỉ lưu [{ productId, variantId, qty }], tự động lấy giá mới nhất từ dataService

import { CONFIG } from "../config.js";
import {
  getProductByIdSync,
  safeGetStorage,
  safeSetStorage,
  initStorageSchema
} from "../services/dataService.js";

const CART_KEY = CONFIG.STORAGE_KEYS.CART;

// Làm sạch dữ liệu giỏ hàng: loại bỏ sản phẩm/variant không tồn tại hoặc số lượng <= 0
function sanitizeCartItems(rawItems) {
  if (!Array.isArray(rawItems)) return [];
  const mergedMap = new Map();

  rawItems.forEach((entry) => {
    if (!entry || !entry.productId || !entry.variantId) return;
    const qty = parseInt(entry.qty, 10);
    if (!Number.isFinite(qty) || qty <= 0) return;

    const product = getProductByIdSync(entry.productId);
    if (!product) return;
    const variant = product.variants.find((v) => v.id === entry.variantId);
    if (!variant) return;

    const maxStock = variant.stock || 99;
    const key = `${product.id}__${variant.id}`;
    const existing = mergedMap.get(key);
    const nextQty = Math.min(maxStock, (existing ? existing.qty : 0) + qty);

    mergedMap.set(key, {
      productId: product.id,
      variantId: variant.id,
      qty: nextQty
    });
  });

  return Array.from(mergedMap.values());
}

// Đọc danh sách rút gọn từ LocalStorage
export function getRawCart() {
  initStorageSchema();
  const raw = safeGetStorage(CART_KEY, []);
  const cleaned = sanitizeCartItems(raw);
  if (JSON.stringify(raw) !== JSON.stringify(cleaned)) {
    safeSetStorage(CART_KEY, cleaned);
  }
  return cleaned;
}

// Lưu và phát sự kiện cập nhật giỏ hàng
function saveRawCart(items) {
  const cleaned = sanitizeCartItems(items);
  safeSetStorage(CART_KEY, cleaned);
  window.dispatchEvent(
    new CustomEvent("dld:cart-updated", {
      detail: getCartSummary()
    })
  );
}

// Lấy chi tiết đầy đủ từng dòng trong giỏ hàng (kèm giá, tên, ảnh từ dữ liệu sản phẩm)
export function getDetailedCartItems() {
  const raw = getRawCart();
  return raw
    .map((item) => {
      const product = getProductByIdSync(item.productId);
      if (!product) return null;
      const variant =
        product.variants.find((v) => v.id === item.variantId) ||
        product.variants[0];
      if (!variant) return null;

      return {
        productId: product.id,
        variantId: variant.id,
        slug: product.slug,
        name: product.name,
        image: product.images[0],
        variantLabel: variant.label,
        weightG: variant.weightG || 250,
        price: variant.price,
        originalPrice: variant.originalPrice || variant.price,
        stock: variant.stock || 99,
        qty: item.qty,
        lineTotal: variant.price * item.qty
      };
    })
    .filter(Boolean);
}

// Tính tổng quan giỏ hàng (Tạm tính, tiến độ Freeship, tổng số lượng, tổng trọng lượng)
export function getCartSummary() {
  const items = getDetailedCartItems();
  const totalCount = items.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = items.reduce((sum, i) => sum + i.lineTotal, 0);
  const totalSavings = items.reduce(
    (sum, i) => sum + Math.max(0, (i.originalPrice - i.price) * i.qty),
    0
  );
  const totalWeightG = items.reduce((sum, i) => sum + i.weightG * i.qty, 0);

  const freeshipThreshold = CONFIG.SHIPPING.FREESHIP_THRESHOLD;
  const amountToFreeship = Math.max(0, freeshipThreshold - subtotal);
  const freeshipProgress = Math.min(
    100,
    Math.round((subtotal / freeshipThreshold) * 100)
  );
  const isFreeship = subtotal >= freeshipThreshold && subtotal > 0;

  return {
    items,
    totalCount,
    subtotal,
    totalSavings,
    totalWeightG,
    freeshipThreshold,
    amountToFreeship,
    freeshipProgress,
    isFreeship
  };
}

// Thêm sản phẩm vào giỏ (cộng dồn nếu trùng productId + variantId)
export function addToCart(productId, variantId, qty = 1) {
  const product = getProductByIdSync(productId);
  if (!product) return null;
  const variant =
    product.variants.find((v) => v.id === variantId) || product.variants[0];
  if (!variant || variant.stock <= 0) return null;

  const raw = getRawCart();
  const idx = raw.findIndex(
    (i) => i.productId === product.id && i.variantId === variant.id
  );
  const addQty = Math.max(1, parseInt(qty, 10) || 1);

  if (idx > -1) {
    raw[idx].qty = Math.min(variant.stock || 99, raw[idx].qty + addQty);
  } else {
    raw.push({
      productId: product.id,
      variantId: variant.id,
      qty: Math.min(variant.stock || 99, addQty)
    });
  }

  saveRawCart(raw);
  return {
    product,
    variant,
    addedQty: addQty
  };
}

// Cập nhật số lượng dòng sản phẩm trong giỏ
export function updateCartItemQty(productId, variantId, newQty) {
  const raw = getRawCart();
  const idx = raw.findIndex(
    (i) => i.productId === productId && i.variantId === variantId
  );
  if (idx === -1) return;

  const parsed = parseInt(newQty, 10);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    raw.splice(idx, 1);
  } else {
    const product = getProductByIdSync(productId);
    const variant = product?.variants.find((v) => v.id === variantId);
    const maxStock = variant?.stock || 99;
    raw[idx].qty = Math.min(maxStock, parsed);
  }
  saveRawCart(raw);
}

// Xóa 1 dòng sản phẩm khỏi giỏ
export function removeCartItem(productId, variantId) {
  const raw = getRawCart().filter(
    (i) => !(i.productId === productId && i.variantId === variantId)
  );
  saveRawCart(raw);
}

// Xóa toàn bộ giỏ hàng (sau khi đặt hàng thành công)
export function clearCart() {
  saveRawCart([]);
}

// Tính phí vận chuyển dựa trên tỉnh/thành phố, tổng tiền và trọng lượng
export function calculateShippingFee(provinceId = "", subtotal = 0, totalWeightG = 0, promoCodeObj = null) {
  if (subtotal <= 0) return 0;
  if (subtotal >= CONFIG.SHIPPING.FREESHIP_THRESHOLD) return 0;
  if (promoCodeObj && promoCodeObj.type === "freeship" && subtotal >= promoCodeObj.minOrder) {
    return 0;
  }

  const prov = CONFIG.PROVINCES.find((p) => p.id === provinceId);
  let baseFee = prov && prov.isLocal ? CONFIG.SHIPPING.DALAT_FEE : CONFIG.SHIPPING.DEFAULT_FEE;

  if (totalWeightG > CONFIG.SHIPPING.HEAVY_THRESHOLD_G) {
    const extraKg = Math.ceil((totalWeightG - CONFIG.SHIPPING.HEAVY_THRESHOLD_G) / 1000);
    baseFee += extraKg * CONFIG.SHIPPING.HEAVY_EXTRA_PER_KG;
  }
  return baseFee;
}

// Kiểm tra và tính giá trị giảm của mã khuyến mãi
export function evaluatePromoCode(codeInput = "", subtotal = 0) {
  const cleanCode = String(codeInput).trim().toUpperCase();
  if (!cleanCode) return { valid: false, discount: 0, message: "" };

  const rule = CONFIG.PROMO_CODES[cleanCode];
  if (!rule) {
    return {
      valid: false,
      discount: 0,
      message: "Mã giảm giá không tồn tại hoặc đã hết hạn."
    };
  }

  if (subtotal < rule.minOrder) {
    return {
      valid: false,
      discount: 0,
      message: `Đơn tối thiểu ${rule.minOrder.toLocaleString("vi-VN")}₫ để áp dụng mã ${cleanCode}.`
    };
  }

  let discount = 0;
  if (rule.type === "percent") {
    discount = Math.round((subtotal * rule.value) / 100);
    if (rule.maxDiscount) discount = Math.min(discount, rule.maxDiscount);
  } else if (rule.type === "fixed") {
    discount = rule.value;
  }

  return {
    valid: true,
    code: cleanCode,
    rule,
    discount,
    message: `Đã áp dụng mã ${cleanCode}: ${rule.description}`
  };
}

// Đồng bộ giỏ hàng giữa các tab trình duyệt
if (typeof window !== "undefined") {
  window.addEventListener("storage", (e) => {
    if (e.key === CART_KEY) {
      window.dispatchEvent(
        new CustomEvent("dld:cart-updated", {
          detail: getCartSummary()
        })
      );
    }
  });
}
