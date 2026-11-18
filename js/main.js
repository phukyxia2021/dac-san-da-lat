// Entry point chính cho toàn bộ các trang của website Đặc sản Đà Lạt
// Sử dụng ES Modules thuần, giao tiếp dữ liệu hoàn toàn qua dataService và cart store

import { CONFIG } from "./config.js";
import {
  getCategories,
  getCategoryBySlug,
  getProducts,
  getProductBySlug,
  getFlashSaleProducts,
  getRelatedProducts,
  getGiftHighlightSets,
  getBlogPosts,
  getBlogPostBySlug,
  createOrder,
  getOrderByCode,
  saveB2BLead,
  formatCurrency,
  calcDiscountPercent,
  formatSoldCount,
  escapeHtml,
  safeGetStorage,
  safeSetStorage
} from "./services/dataService.js";
import {
  getCartSummary,
  addToCart,
  clearCart,
  calculateShippingFee,
  evaluatePromoCode
} from "./store/cart.js";
import { initGlobalLayout } from "./ui/header.js";
import { initCartDrawer, openCartDrawer } from "./ui/drawer.js";
import {
  renderProductCardHTML,
  initProductCardInteractions
} from "./ui/productCard.js";
import { initCountdown } from "./ui/countdown.js";
import { initCategoryPage } from "./ui/filter.js";
import { showToast } from "./ui/toast.js";

document.addEventListener("DOMContentLoaded", async () => {
  await initGlobalLayout();
  initCartDrawer();
  initProductCardInteractions();
  initInteractiveBanners();

  const pageType = document.body.dataset.page || "";
  if (pageType === "home") {
    await initHomePage();
  } else if (pageType === "category") {
    await initCategoryPage();
  } else if (pageType === "product") {
    await initProductDetailPage();
  } else if (pageType === "checkout") {
    await initCheckoutPage();
  } else if (pageType === "order-success") {
    await initOrderSuccessPage();
  } else if (pageType === "blog") {
    await initBlogListPage();
  } else if (pageType === "blog-post") {
    await initBlogPostDetailPage();
  }
});

/* ==========================================================================
   1. TRANG CHỦ (`index.html`)
   ========================================================================== */
async function initHomePage() {
  initHeroSlider();

  // 4. Flash Sale Section
  const flashMount = document.getElementById("home-flash-sale-grid");
  const countdownMount = document.getElementById("home-flash-countdown");
  const flashSection = document.getElementById("flash-sale-section");

  if (flashMount) {
    const flashData = await getFlashSaleProducts();
    if (flashData.items.length > 0) {
      flashMount.innerHTML = flashData.items
        .slice(0, 4)
        .map((p) => renderProductCardHTML(p, { showFlashProgress: true }))
        .join("");

      if (countdownMount) {
        initCountdown(countdownMount, flashData.endsAt, () => {
          if (flashSection) flashSection.style.opacity = "0.75";
        });
      }
    }
  }

  // 5. Kệ sản phẩm theo 6 Danh mục chuẩn
  const shelvesMount = document.getElementById("home-category-shelves");
  const pillsMount = document.getElementById("home-category-pills");
  const categories = await getCategories();

  if (pillsMount) {
    pillsMount.innerHTML =
      categories
        .map(
          (cat, idx) => `
        <a href="#shelf-${escapeHtml(cat.slug)}" class="cat-pill ${idx === 0 ? "is-active" : ""}">
          <span>${escapeHtml(cat.name)}</span>
        </a>
      `
        )
        .join("") +
      `
      <a href="category.html?all=1" class="cat-pill" style="border-color:var(--color-primary); color:var(--color-primary);">
        <span>🛍️ Xem tất cả (119 sản phẩm) →</span>
      </a>
    `;
  }

  if (shelvesMount) {
    const shelvesHtml = [];
    const shelfProductsMap = new Map();

    for (const cat of categories) {
      const res = await getProducts({
        categorySlug: cat.slug,
        sort: "bestseller",
        pageSize: 100
      });
      shelfProductsMap.set(cat.slug, res.items);

      shelvesHtml.push(`
        <section class="category-shelf" id="shelf-${escapeHtml(cat.slug)}" aria-labelledby="heading-${escapeHtml(cat.slug)}">
          <div class="section__header">
            <div>
              <span class="section__subtitle">Danh mục tuyển chọn</span>
              <h2 class="section__title" id="heading-${escapeHtml(cat.slug)}">${escapeHtml(cat.name)}</h2>
              <p style="font-size:var(--fs-small); color:var(--color-text-muted); margin-top:4px; max-width:65ch;">
                ${escapeHtml(cat.description)}
              </p>
            </div>
            <a href="category.html?cat=${encodeURIComponent(cat.slug)}&all=1" class="section__link">
              <span>Xem tất cả (${res.total})</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
          <div class="product-grid" data-shelf-grid="${escapeHtml(cat.slug)}">
            ${res.items.slice(0, 4).map((p) => renderProductCardHTML(p)).join("")}
          </div>
          ${
            res.items.length > 4
              ? `<div style="text-align:center; margin-top:var(--space-6);">
                  <button
                    type="button"
                    class="btn btn--outline btn--sm"
                    data-action="toggle-shelf-all"
                    data-cat-slug="${escapeHtml(cat.slug)}"
                    data-expanded="false"
                  >
                    Xem tất cả ${res.items.length} sản phẩm ${escapeHtml(cat.shortName || cat.name)} ↓
                  </button>
                </div>`
              : ""
          }
        </section>
      `);
    }

    shelvesHtml.push(`
      <div style="text-align:center; padding-top:var(--space-6);">
        <a href="category.html?all=1" class="btn btn--primary btn--lg">
          🛍️ Xem tất cả 119 sản phẩm Đặc sản Đà Lạt →
        </a>
      </div>
    `);

    shelvesMount.innerHTML = shelvesHtml.join("");

    // Cho phép mở rộng / thu gọn toàn bộ sản phẩm của từng kệ ngay trên Trang chủ
    shelvesMount.addEventListener("click", (e) => {
      const toggleBtn = e.target.closest('[data-action="toggle-shelf-all"]');
      if (!toggleBtn) return;

      const slug = toggleBtn.dataset.catSlug;
      const items = shelfProductsMap.get(slug) || [];
      const grid = shelvesMount.querySelector(`[data-shelf-grid="${slug}"]`);
      const cat = categories.find((c) => c.slug === slug);
      if (!grid || items.length === 0) return;

      const isExpanded = toggleBtn.dataset.expanded === "true";
      if (isExpanded) {
        grid.innerHTML = items.slice(0, 4).map((p) => renderProductCardHTML(p)).join("");
        toggleBtn.dataset.expanded = "false";
        toggleBtn.textContent = `Xem tất cả ${items.length} sản phẩm ${cat?.shortName || cat?.name || ""} ↓`;
      } else {
        grid.innerHTML = items.map((p) => renderProductCardHTML(p)).join("");
        toggleBtn.dataset.expanded = "true";
        toggleBtn.textContent = `Thu gọn danh mục ↑`;
      }
    });
  }

  // 6. Chuyên mục "Gợi ý Quà Biếu Đà Lạt" (3 mức ngân sách + Form B2B)
  const giftMount = document.getElementById("home-gift-tiers");
  if (giftMount) {
    const giftSets = await getGiftHighlightSets();
    const tierConfigs = [
      {
        tierBadge: "Ngân sách ~390k · Tinh Tế",
        itemsInside: [
          "Hồng sấy dẻo Đà Lạt tuyển chọn (250g)",
          "Trà Atiso Đà Lạt túi lọc thượng hạng",
          "Khoai lang mật sấy dẻo (250g)",
          "Kẹo dâu tây & dâu tằm phố núi",
          "Hộp quà mỹ thuật + Túi xách & Thiệp chúc"
        ]
      },
      {
        tierBadge: "Ngân sách ~490k · Sang Trọng (Bán chạy)",
        itemsInside: [
          "Hồng treo gió công nghệ Nhật (250g)",
          "Cao mềm Atiso Đà Lạt nguyên chất",
          "Hạt Mắc ca Lâm Đồng nứt vỏ (250g)",
          "Cà phê Arabica Cầu Đất rang mộc",
          "Dâu tây sấy dẻo & Trà hoa Atiso đỏ",
          "Hộp cứng ép kim cao cấp + Thiệp chúc mừng"
        ]
      },
      {
        tierBadge: "Ngân sách ~1.340k · Thượng Hạng VIP",
        itemsInside: [
          "Đông trùng hạ thảo sấy thăng hoa (10gr)",
          "Hồng treo gió thượng hạng hộp 500gr",
          "Rượu Đông Trùng Hạ Thảo / Cao Atiso đặc biệt",
          "Hạt Mắc ca Lâm Đồng & Hạt bí Nhật loại 1",
          "Cà phê Đông Trùng Hạ Thảo & Mật ong rừng",
          "Vali quà gỗ/ép kim sang trọng + In logo miễn phí"
        ]
      }
    ];

    giftMount.innerHTML = giftSets
      .map((p, idx) => {
        const cfg = tierConfigs[idx] || tierConfigs[0];
        const v = p.variants[0];
        return `
          <article class="gift-card">
            <a href="product.html?slug=${encodeURIComponent(p.slug)}" class="gift-card__media">
              <span class="gift-card__tier">${escapeHtml(cfg.tierBadge)}</span>
              <img src="${escapeHtml(p.images[0])}" alt="${escapeHtml(p.name)}" width="400" height="300" loading="lazy" class="gift-card__img" />
            </a>
            <div class="gift-card__body">
              <a href="product.html?slug=${encodeURIComponent(p.slug)}">
                <h3 class="gift-card__title">${escapeHtml(p.name)}</h3>
              </a>
              <div class="gift-card__price">${formatCurrency(v.price)}</div>
              <ul class="gift-card__items">
                ${cfg.itemsInside.map((li) => `<li>${escapeHtml(li)}</li>`).join("")}
              </ul>
              <div style="margin-top:auto; display:flex; gap:8px;">
                <button
                  type="button"
                  class="btn btn--primary btn--block"
                  data-action="card-add-to-cart"
                  data-product-id="${escapeHtml(p.id)}"
                  data-variant-id="${escapeHtml(v.id)}"
                >
                  Thêm hộp quà vào giỏ
                </button>
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  }

  initB2BQuoteForm();

  // 8. Góc Cẩm nang & Ẩm thực Đà Lạt (Blog)
  const blogMount = document.getElementById("home-blog-grid");
  if (blogMount) {
    const posts = await getBlogPosts({ limit: 3 });
    blogMount.innerHTML = posts.map(renderBlogCardHTML).join("");
  }
}

function initHeroSlider() {
  const slider = document.getElementById("hero-slider");
  if (!slider) return;

  const slides = Array.from(slider.querySelectorAll(".hero-slide"));
  const dots = Array.from(slider.querySelectorAll(".hero-slider__dot"));
  const prevBtn = slider.querySelector('[data-hero-nav="prev"]');
  const nextBtn = slider.querySelector('[data-hero-nav="next"]');
  if (slides.length <= 1) return;

  let current = 0;
  let timer = null;
  let isPaused = false;

  function goToSlide(idx) {
    current = (idx + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle("is-active", i === current));
    dots.forEach((d, i) => d.classList.toggle("is-active", i === current));
  }

  function startAuto() {
    clearInterval(timer);
    timer = setInterval(() => {
      if (!isPaused) goToSlide(current + 1);
    }, 5000);
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      goToSlide(idx);
      startAuto();
    });
  });

  prevBtn?.addEventListener("click", () => {
    goToSlide(current - 1);
    startAuto();
  });

  nextBtn?.addEventListener("click", () => {
    goToSlide(current + 1);
    startAuto();
  });

  slider.addEventListener("mouseenter", () => {
    isPaused = true;
  });
  slider.addEventListener("mouseleave", () => {
    isPaused = false;
  });

  // Hỗ trợ vuốt ngang trên mobile
  let touchStartX = 0;
  slider.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
      slider.dataset.wasSwiping = "0";
      isPaused = true;
    },
    { passive: true }
  );

  slider.addEventListener(
    "touchend",
    (e) => {
      const diff = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(diff) > 40) {
        slider.dataset.wasSwiping = "1";
        if (diff < 0) goToSlide(current + 1);
        else goToSlide(current - 1);
      }
      isPaused = false;
    },
    { passive: true }
  );

  startAuto();
}

// Đổi màu các button trên Hero Banner khi người dùng click chuột vào banner
function initInteractiveBanners() {
  const TOTAL_THEMES = 5;
  const heroBanners = document.querySelectorAll(".hero-slider");

  heroBanners.forEach((banner) => {
    if (!banner.hasAttribute("data-banner-btn-theme")) {
      banner.dataset.bannerBtnTheme = "0";
    }
    if (!banner.getAttribute("title")) {
      banner.setAttribute("title", "Click vào banner để đổi màu nút");
    }

    banner.addEventListener("click", (e) => {
      // Không đổi màu khi người dùng bấm vào link, nút bấm hoặc thanh điều khiển slider
      if (e.target.closest("a, button, input, select, textarea, label, .hero-slider__controls")) {
        return;
      }
      // Không đổi màu khi vừa vuốt chuyển slide trên mobile
      if (banner.dataset.wasSwiping === "1") {
        banner.dataset.wasSwiping = "0";
        return;
      }
      // Không đổi màu nếu người dùng đang bôi đen chữ
      if (window.getSelection && window.getSelection().toString().trim().length > 0) {
        return;
      }

      const currentTheme = parseInt(banner.dataset.bannerBtnTheme || "0", 10) || 0;
      const nextTheme = (currentTheme + 1) % TOTAL_THEMES;
      banner.dataset.bannerBtnTheme = String(nextTheme);
    });
  });
}

function initB2BQuoteForm() {
  const form = document.getElementById("b2b-quote-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const company = form.querySelector('[name="company"]')?.value.trim() || "";
    const phone = form.querySelector('[name="phone"]')?.value.trim() || "";
    const quantity = form.querySelector('[name="quantity"]')?.value.trim() || "";
    const budget = form.querySelector('[name="budget"]')?.value.trim() || "";
    const msgEl = document.getElementById("b2b-form-feedback");

    const vnPhoneRegex = /^(0|\+84)(3|5|7|8|9)\d{8}$/;
    if (company.length < 2 || !vnPhoneRegex.test(phone.replace(/\s+/g, ""))) {
      if (msgEl) {
        msgEl.style.color = "var(--color-error)";
        msgEl.textContent = "Vui lòng nhập tên công ty/người liên hệ và số điện thoại hợp lệ.";
      }
      return;
    }

    await saveB2BLead({ company, phone, quantity, budget });
    form.reset();
    if (msgEl) {
      msgEl.style.color = "var(--color-primary)";
      msgEl.textContent =
        "✓ Đã ghi nhận yêu cầu! Bộ phận Quà Doanh Nghiệp sẽ liên hệ báo giá qua Zalo trong 15 phút.";
    }
    showToast("Đã gửi yêu cầu báo giá Quà Doanh Nghiệp thành công!");
  });
}

function renderBlogCardHTML(post) {
  return `
    <article class="blog-card">
      <a href="blog-post.html?slug=${encodeURIComponent(post.slug)}" class="blog-card__media">
        <img src="${escapeHtml(post.cover)}" alt="${escapeHtml(post.title)}" width="400" height="250" loading="lazy" class="blog-card__img" />
      </a>
      <div class="blog-card__body">
        <span class="blog-card__cat">${escapeHtml(post.category)}</span>
        <a href="blog-post.html?slug=${encodeURIComponent(post.slug)}">
          <h3 class="blog-card__title">${escapeHtml(post.title)}</h3>
        </a>
        <p class="blog-card__excerpt">${escapeHtml(post.excerpt)}</p>
        <div class="blog-card__footer">
          <span>📅 ${escapeHtml(post.publishedAt)} · ${escapeHtml(post.readTime || "5 phút đọc")}</span>
          <a href="blog-post.html?slug=${encodeURIComponent(post.slug)}" style="font-weight:700; color:var(--color-primary);">
            Đọc tiếp →
          </a>
        </div>
      </div>
    </article>
  `;
}

/* ==========================================================================
   2. TRANG CHI TIẾT SẢN PHẨM (`product.html?slug=...`)
   ========================================================================== */
async function initProductDetailPage() {
  const rootEl = document.getElementById("product-detail-root");
  if (!rootEl) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug") || "hong-treo-gio-da-lat";
  const product = await getProductBySlug(slug);

  if (!product) {
    rootEl.innerHTML = `
      <div class="container section" style="text-align:center;">
        <p style="font-size:3rem; margin-bottom:var(--space-2);">🌲</p>
        <h1 style="font-size:2rem; margin-bottom:var(--space-3);">Không tìm thấy sản phẩm</h1>
        <p style="color:var(--color-text-muted); margin-bottom:var(--space-6);">
          Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã được cập nhật đường dẫn mới.
        </p>
        <div style="display:flex; justify-content:center; gap:var(--space-3);">
          <a href="index.html" class="btn btn--primary">Về Trang chủ</a>
          <a href="category.html" class="btn btn--outline">Xem tất cả Đặc sản</a>
        </div>
      </div>
    `;
    return;
  }

  document.body.classList.add("has-mobile-sticky-bar");
  const category = await getCategoryBySlug(product.categoryId);
  let selectedVariant = product.variants[0];
  let currentQty = 1;
  let currentImgIdx = 0;

  // Cập nhật SEO <title> & JSON-LD Product Schema
  document.title = `${product.name} – Đặc sản Đà Lạt Chính Gốc`;
  injectProductJsonLd(product, selectedVariant);

  const discountPct = calcDiscountPercent(
    selectedVariant.price,
    selectedVariant.originalPrice
  );

  const badgesHtml = [];
  if (product.badges?.includes("ocop")) {
    badgesHtml.push(`<span class="badge badge--ocop">Chứng nhận OCOP 4★</span>`);
  }
  if (product.badges?.includes("bestseller")) {
    badgesHtml.push(`<span class="badge badge--bestseller">🔥 Bán chạy nhất</span>`);
  }
  if (discountPct > 0) {
    badgesHtml.push(`<span class="badge badge--sale" id="detail-discount-badge">Tiết kiệm ${discountPct}%</span>`);
  } else {
    badgesHtml.push(`<span class="badge badge--sale" id="detail-discount-badge" style="display:none"></span>`);
  }

  rootEl.innerHTML = `
    <div class="container">
      <!-- Breadcrumb -->
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <ol class="breadcrumb__list">
          <li><a href="index.html" class="breadcrumb__link">Trang chủ</a></li>
          <li>›</li>
          <li>
            <a href="category.html?cat=${encodeURIComponent(category?.slug || "")}" class="breadcrumb__link">
              ${escapeHtml(category?.name || "Danh mục")}
            </a>
          </li>
          <li>›</li>
          <li class="breadcrumb__current" aria-current="page">${escapeHtml(product.name)}</li>
        </ol>
      </nav>

      <!-- Main 2-Column Product Detail -->
      <div class="product-detail-grid">
        <!-- 2.1 Cột trái: Thư viện ảnh trực quan -->
        <div class="product-gallery">
          <div class="product-gallery__main" id="detail-main-img-wrap" title="Bấm để phóng to ảnh">
            <img
              src="${escapeHtml(product.images[0])}"
              alt="${escapeHtml(product.name)}"
              width="600"
              height="600"
              id="detail-main-img"
              class="product-gallery__main-img"
            />
            <span class="product-gallery__counter" id="detail-img-counter">
              1 / ${product.images.length}
            </span>
          </div>
          <div class="product-gallery__thumbs" role="list" aria-label="Ảnh thu nhỏ sản phẩm">
            ${product.images
              .map(
                (imgUrl, idx) => `
              <button
                type="button"
                class="product-gallery__thumb ${idx === 0 ? "is-active" : ""}"
                data-thumb-idx="${idx}"
                data-thumb-src="${escapeHtml(imgUrl)}"
                aria-label="Xem ảnh ${idx + 1}"
              >
                <img src="${escapeHtml(imgUrl)}" alt="${escapeHtml(product.name)} ảnh ${idx + 1}" width="76" height="76" />
              </button>
            `
              )
              .join("")}
          </div>
        </div>

        <!-- 2.2 Cột phải: Thông tin mua hàng -->
        <div class="product-info">
          <div class="product-info__badges">
            ${badgesHtml.join("")}
          </div>

          <h1 class="product-info__title">${escapeHtml(product.name)}</h1>

          <div class="product-info__meta">
            <span>
              <strong style="color:var(--color-star);">★★★★★</strong>
              <strong>${product.rating.toFixed(1)}</strong>/5.0
            </span>
            <span>·</span>
            <span>Đã bán <strong>${formatSoldCount(product.soldCount)}</strong></span>
            <span>·</span>
            <span id="detail-stock-status" style="color:var(--color-success); font-weight:600;">
              ✓ Còn hàng (${selectedVariant.stock} sản phẩm)
            </span>
          </div>

          <div class="product-info__price-box">
            <span class="product-info__price" id="detail-current-price">
              ${formatCurrency(selectedVariant.price)}
            </span>
            <span
              class="product-info__original-price"
              id="detail-original-price"
              style="${selectedVariant.originalPrice > selectedVariant.price ? "" : "display:none"}"
            >
              ${formatCurrency(selectedVariant.originalPrice)}
            </span>
          </div>

          <p style="color:var(--color-text-muted); margin-bottom:var(--space-5);">
            ${escapeHtml(product.shortDescription)}
          </p>

          <!-- Chọn biến thể Trọng lượng / Đóng gói -->
          <div class="product-info__variants">
            <label class="form-label">Chọn quy cách đóng gói:</label>
            <div class="product-info__variant-list" role="radiogroup" aria-label="Quy cách đóng gói">
              ${product.variants
                .map(
                  (v, idx) => `
                <button
                  type="button"
                  class="detail-variant-btn ${idx === 0 ? "is-active" : ""}"
                  data-detail-variant="${escapeHtml(v.id)}"
                >
                  ${escapeHtml(v.label)} – ${formatCurrency(v.price)}
                </button>
              `
                )
                .join("")}
            </div>
          </div>

          <!-- Bộ chọn số lượng -->
          <div style="display:flex; align-items:center; gap:var(--space-4); margin-bottom:var(--space-5);">
            <span class="form-label">Số lượng:</span>
            <div class="qty-control" style="background:var(--color-surface);">
              <button type="button" class="qty-control__btn" id="detail-qty-dec" style="width:40px;height:40px;" aria-label="Giảm số lượng">−</button>
              <input
                type="number"
                id="detail-qty-input"
                value="1"
                min="1"
                max="${selectedVariant.stock}"
                aria-label="Số lượng mua"
                style="width:52px; text-align:center; font-weight:700;"
              />
              <button type="button" class="qty-control__btn" id="detail-qty-inc" style="width:40px;height:40px;" aria-label="Tăng số lượng">+</button>
            </div>
          </div>

          <!-- Nút Thêm vào giỏ & Mua ngay -->
          <div class="product-info__actions">
            <button type="button" class="btn btn--primary btn--lg" id="detail-add-cart-btn" style="flex:1.2;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span>Thêm vào giỏ hàng</span>
            </button>
            <button type="button" class="btn btn--accent btn--lg" id="detail-buy-now-btn" style="flex:1;">
              Mua ngay
            </button>
          </div>

          <!-- Khối cam kết mini -->
          <div class="product-info__trust">
            <div>
              <strong style="color:var(--color-primary-dark); display:block;">🌲 100% Đà Lạt</strong>
              <span>Chính gốc nhà vườn</span>
            </div>
            <div>
              <strong style="color:var(--color-primary-dark); display:block;">🛡️ Đổi trả 7 ngày</strong>
              <span>Hoàn tiền nếu lỗi</span>
            </div>
            <div>
              <strong style="color:var(--color-primary-dark); display:block;">🚚 Giao toàn quốc</strong>
              <span>Kiểm hàng trước khi nhận</span>
            </div>
          </div>

          <!-- Chia sẻ -->
          <div style="display:flex; align-items:center; gap:var(--space-3); margin-top:var(--space-4); font-size:var(--fs-xs); color:var(--color-text-muted);">
            <span>Chia sẻ sản phẩm:</span>
            <button type="button" class="btn btn--outline btn--sm" id="detail-copy-link-btn">
              🔗 Sao chép liên kết
            </button>
            <a href="${escapeHtml(CONFIG.ZALO_URL)}" target="_blank" rel="noopener" class="btn btn--outline btn--sm">
              💬 Hỏi qua Zalo
            </a>
          </div>
        </div>
      </div>

      <!-- 2.3 Thông tin chi tiết sản phẩm (5 mục bắt buộc + Mô tả + Đánh giá) -->
      <section style="margin-bottom:var(--space-12);" aria-labelledby="specs-heading">
        <h2 id="specs-heading" style="margin-bottom:var(--space-4);">
          Thông tin Nguồn gốc & Quy chuẩn Chất lượng
        </h2>
        <div class="product-specs-grid">
          <div class="spec-row">
            <div class="spec-row__label">1. Nguồn gốc xuất xứ</div>
            <div>${escapeHtml(product.info.origin)}</div>
          </div>
          <div class="spec-row">
            <div class="spec-row__label">2. Thành phần</div>
            <div>${escapeHtml(product.info.ingredients)}</div>
          </div>
          <div class="spec-row">
            <div class="spec-row__label">3. Hướng dẫn sử dụng</div>
            <div>${escapeHtml(product.info.usage)}</div>
          </div>
          <div class="spec-row">
            <div class="spec-row__label">4. Cách bảo quản</div>
            <div>${escapeHtml(product.info.storage)}</div>
          </div>
          <div class="spec-row">
            <div class="spec-row__label">5. Hạn sử dụng</div>
            <div>${escapeHtml(product.info.shelfLife)}</div>
          </div>
        </div>

        <!-- Khối đánh giá khách hàng mẫu -->
        <div style="background:var(--color-surface); border:1px solid var(--color-border); border-radius:var(--radius-md); padding:var(--space-6);">
          <h3 style="margin-bottom:var(--space-4);">
            Đánh giá từ Khách hàng (${product.rating.toFixed(1)} ★)
          </h3>
          <div style="display:grid; grid-template-columns:1fr; gap:var(--space-4);">
            <div style="padding-bottom:var(--space-3); border-bottom:1px solid var(--color-border);">
              <div style="display:flex; justify-content:space-between; font-size:var(--fs-small);">
                <strong>Chị Minh Thư (Quận 3, TP.HCM) · <span style="color:var(--color-success);">✓ Đã mua hàng</span></strong>
                <span style="color:var(--color-star);">★★★★★</span>
              </div>
              <p style="font-size:var(--fs-small); color:var(--color-text-muted); margin-top:4px;">
                "Đóng gói cực kỳ chỉn chu, hút chân không sạch sẽ. Hương vị thơm ngon tự nhiên đúng chuẩn hàng Đà Lạt mình từng mua tận vườn. Sẽ tiếp tục ủng hộ shop làm quà Tết!"
              </p>
            </div>
            <div>
              <div style="display:flex; justify-content:space-between; font-size:var(--fs-small);">
                <strong>Anh Hoàng Nam (Cầu Giấy, Hà Nội) · <span style="color:var(--color-success);">✓ Đã mua hàng</span></strong>
                <span style="color:var(--color-star);">★★★★★</span>
              </div>
              <p style="font-size:var(--fs-small); color:var(--color-text-muted); margin-top:4px;">
                "Giao ra Hà Nội rất nhanh, hàng vẫn giữ nguyên độ tươi dẻo. Rất ưng ý vì vị ngọt thanh tự nhiên, không bị ngọt gắt đường."
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 2.4 Sản phẩm liên quan cùng danh mục -->
      <section class="section" style="padding-top:0;" aria-labelledby="related-heading">
        <div class="section__header">
          <div>
            <span class="section__subtitle">Cùng danh mục</span>
            <h2 class="section__title" id="related-heading">Đặc sản Đà Lạt Liên Quan</h2>
          </div>
          <a href="category.html?cat=${encodeURIComponent(category?.slug || "")}" class="section__link">
            Xem tất cả →
          </a>
        </div>
        <div class="product-grid" id="detail-related-grid"></div>
      </section>
    </div>

    <!-- Thanh mua hàng dính (Sticky Bar) trên Mobile -->
    <div class="mobile-sticky-buy" id="mobile-sticky-buy">
      <div style="min-width:0;">
        <div style="font-size:var(--fs-xs); color:var(--color-text-muted); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
          ${escapeHtml(product.name)} (<span id="sticky-variant-label">${escapeHtml(selectedVariant.label)}</span>)
        </div>
        <div style="font-size:1.1rem; font-weight:700; color:var(--color-primary);" id="sticky-variant-price">
          ${formatCurrency(selectedVariant.price)}
        </div>
      </div>
      <div style="display:flex; gap:8px; flex-shrink:0;">
        <button type="button" class="btn btn--primary btn--sm" id="sticky-add-cart-btn">
          + Thêm giỏ
        </button>
        <button type="button" class="btn btn--accent btn--sm" id="sticky-buy-now-btn">
          Mua ngay
        </button>
      </div>
    </div>

    <!-- Lightbox toàn màn hình -->
    <div class="lightbox-modal" id="detail-lightbox" role="dialog" aria-label="Xem ảnh phóng to">
      <button type="button" class="icon-btn" id="detail-lightbox-close" aria-label="Đóng ảnh" style="position:absolute; top:20px; right:20px;">
        ✕
      </button>
      <img src="${escapeHtml(product.images[0])}" alt="${escapeHtml(product.name)}" class="lightbox-modal__img" id="detail-lightbox-img" />
    </div>
  `;

  // Render 4 sản phẩm liên quan
  const related = await getRelatedProducts(product, 4);
  const relatedGrid = document.getElementById("detail-related-grid");
  if (relatedGrid) {
    relatedGrid.innerHTML = related.map((p) => renderProductCardHTML(p)).join("");
  }

  // Xử lý Thư viện ảnh (Thumbnail + Vuốt + Zoom + Lightbox)
  const mainImg = document.getElementById("detail-main-img");
  const mainWrap = document.getElementById("detail-main-img-wrap");
  const counterEl = document.getElementById("detail-img-counter");
  const lightbox = document.getElementById("detail-lightbox");
  const lightboxImg = document.getElementById("detail-lightbox-img");
  const thumbBtns = Array.from(rootEl.querySelectorAll("[data-thumb-idx]"));

  function setGalleryImage(idx) {
    currentImgIdx = (idx + product.images.length) % product.images.length;
    const src = product.images[currentImgIdx];
    if (mainImg) mainImg.src = src;
    if (lightboxImg) lightboxImg.src = src;
    if (counterEl) counterEl.textContent = `${currentImgIdx + 1} / ${product.images.length}`;
    thumbBtns.forEach((b, i) => b.classList.toggle("is-active", i === currentImgIdx));
  }

  thumbBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      setGalleryImage(Number(btn.dataset.thumbIdx));
    });
  });

  mainWrap?.addEventListener("click", () => {
    lightbox?.classList.add("is-open");
  });

  lightbox?.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.closest("#detail-lightbox-close")) {
      lightbox.classList.remove("is-open");
    }
  });

  // Vuốt ngang đổi ảnh trên Mobile
  let touchX = 0;
  mainWrap?.addEventListener(
    "touchstart",
    (e) => {
      touchX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );
  mainWrap?.addEventListener(
    "touchend",
    (e) => {
      const diff = e.changedTouches[0].screenX - touchX;
      if (Math.abs(diff) > 40) {
        if (diff < 0) setGalleryImage(currentImgIdx + 1);
        else setGalleryImage(currentImgIdx - 1);
      }
    },
    { passive: true }
  );

  // Xử lý đổi Variant quy cách
  const variantBtns = Array.from(rootEl.querySelectorAll("[data-detail-variant]"));
  variantBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const vId = btn.dataset.detailVariant;
      const found = product.variants.find((v) => v.id === vId);
      if (!found) return;
      selectedVariant = found;

      variantBtns.forEach((b) => b.classList.toggle("is-active", b === btn));

      const priceEl = document.getElementById("detail-current-price");
      const origEl = document.getElementById("detail-original-price");
      const discBadge = document.getElementById("detail-discount-badge");
      const stockEl = document.getElementById("detail-stock-status");
      const stickyLabel = document.getElementById("sticky-variant-label");
      const stickyPrice = document.getElementById("sticky-variant-price");

      if (priceEl) priceEl.textContent = formatCurrency(selectedVariant.price);
      if (stickyLabel) stickyLabel.textContent = selectedVariant.label;
      if (stickyPrice) stickyPrice.textContent = formatCurrency(selectedVariant.price);

      if (origEl) {
        if (selectedVariant.originalPrice > selectedVariant.price) {
          origEl.textContent = formatCurrency(selectedVariant.originalPrice);
          origEl.style.display = "";
        } else {
          origEl.style.display = "none";
        }
      }

      const pct = calcDiscountPercent(selectedVariant.price, selectedVariant.originalPrice);
      if (discBadge) {
        if (pct > 0) {
          discBadge.textContent = `Tiết kiệm ${pct}%`;
          discBadge.style.display = "";
        } else {
          discBadge.style.display = "none";
        }
      }

      if (stockEl) {
        stockEl.textContent =
          selectedVariant.stock > 0
            ? `✓ Còn hàng (${selectedVariant.stock} sản phẩm)`
            : "Tạm hết hàng";
      }
    });
  });

  // Bộ chọn số lượng
  const qtyInput = document.getElementById("detail-qty-input");
  document.getElementById("detail-qty-dec")?.addEventListener("click", () => {
    currentQty = Math.max(1, (parseInt(qtyInput.value, 10) || 1) - 1);
    qtyInput.value = String(currentQty);
  });
  document.getElementById("detail-qty-inc")?.addEventListener("click", () => {
    currentQty = Math.min(selectedVariant.stock || 99, (parseInt(qtyInput.value, 10) || 1) + 1);
    qtyInput.value = String(currentQty);
  });
  qtyInput?.addEventListener("change", () => {
    currentQty = Math.max(
      1,
      Math.min(selectedVariant.stock || 99, parseInt(qtyInput.value, 10) || 1)
    );
    qtyInput.value = String(currentQty);
  });

  // Thêm vào giỏ & Mua ngay
  function handleAdd(goToCheckout = false) {
    const qty = Math.max(1, parseInt(qtyInput?.value, 10) || 1);
    const res = addToCart(product.id, selectedVariant.id, qty);
    if (!res) return;
    if (goToCheckout) {
      window.location.href = "checkout.html";
    } else {
      showToast(`Đã thêm ${qty} × "${product.name} (${selectedVariant.label})" vào giỏ!`);
      openCartDrawer();
    }
  }

  document.getElementById("detail-add-cart-btn")?.addEventListener("click", () => handleAdd(false));
  document.getElementById("sticky-add-cart-btn")?.addEventListener("click", () => handleAdd(false));
  document.getElementById("detail-buy-now-btn")?.addEventListener("click", () => handleAdd(true));
  document.getElementById("sticky-buy-now-btn")?.addEventListener("click", () => handleAdd(true));

  // Copy link
  document.getElementById("detail-copy-link-btn")?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast("Đã sao chép đường dẫn sản phẩm!");
    } catch {
      showToast("Đường dẫn: " + window.location.href);
    }
  });
}

function injectProductJsonLd(product, variant) {
  let scriptEl = document.getElementById("product-jsonld");
  if (!scriptEl) {
    scriptEl = document.createElement("script");
    scriptEl.type = "application/ld+json";
    scriptEl.id = "product-jsonld";
    document.head.appendChild(scriptEl);
  }
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: product.images,
    description: product.shortDescription,
    brand: {
      "@type": "Brand",
      name: CONFIG.STORE_NAME
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: Math.max(12, Math.round(product.soldCount / 8))
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "VND",
      price: variant.price,
      availability:
        variant.stock > 0
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock"
    }
  };
  scriptEl.textContent = JSON.stringify(schema);
}

/* ==========================================================================
   3. TRANG THANH TOÁN 1 BƯỚC (`checkout.html`)
   ========================================================================== */
async function initCheckoutPage() {
  const rootEl = document.getElementById("checkout-page-root");
  if (!rootEl) return;

  const summary = getCartSummary();
  if (summary.items.length === 0) {
    rootEl.innerHTML = `
      <div class="container section" style="text-align:center;">
        <p style="font-size:3rem; margin-bottom:var(--space-2);">🛒</p>
        <h1 style="font-size:1.85rem; margin-bottom:var(--space-3);">Giỏ hàng của bạn đang trống</h1>
        <p style="color:var(--color-text-muted); margin-bottom:var(--space-6);">
          Hãy chọn thêm các sản phẩm đặc sản Đà Lạt vào giỏ trước khi tiến hành thanh toán nhé!
        </p>
        <a href="category.html" class="btn btn--primary btn--lg">Khám phá Đặc sản Đà Lạt</a>
      </div>
    `;
    return;
  }

  // Khôi phục bản nháp thông tin nhận hàng nếu có (`dld_checkout_draft`)
  const draft = safeGetStorage(CONFIG.STORAGE_KEYS.CHECKOUT_DRAFT, {
    fullName: "",
    phone: "",
    province: "tp-hcm",
    address: "",
    giftNote: "",
    hidePrice: false
  });

  let activePromo = null;

  const provinceSelect = document.getElementById("checkout-province");
  if (provinceSelect) {
    provinceSelect.innerHTML = CONFIG.PROVINCES.map(
      (p) =>
        `<option value="${escapeHtml(p.id)}" ${p.id === draft.province ? "selected" : ""}>${escapeHtml(p.name)}</option>`
    ).join("");
  }

  const nameInput = document.getElementById("checkout-fullname");
  const phoneInput = document.getElementById("checkout-phone");
  const addrInput = document.getElementById("checkout-address");
  const giftNoteInput = document.getElementById("checkout-gift-note");
  const hidePriceCheck = document.getElementById("checkout-hide-price");

  if (nameInput) nameInput.value = draft.fullName || "";
  if (phoneInput) phoneInput.value = draft.phone || "";
  if (addrInput) addrInput.value = draft.address || "";
  if (giftNoteInput) giftNoteInput.value = draft.giftNote || "";
  if (hidePriceCheck) hidePriceCheck.checked = Boolean(draft.hidePrice);

  // Hiển thị thông tin ngân hàng cấu hình
  const bankInfoBox = document.getElementById("checkout-bank-info");
  if (bankInfoBox) {
    bankInfoBox.innerHTML = `
      <div><strong>Ngân hàng:</strong> ${escapeHtml(CONFIG.PAYMENT_INFO.bankShortName)}</div>
      <div><strong>Số tài khoản:</strong> <code id="bank-acc-num" style="font-weight:700; color:var(--color-primary-dark);">${escapeHtml(CONFIG.PAYMENT_INFO.accountNumber)}</code></div>
      <div><strong>Chủ tài khoản:</strong> ${escapeHtml(CONFIG.PAYMENT_INFO.accountHolder)}</div>
      <div><strong>Nội dung CK:</strong> <code>SĐT Đặt Hàng + DLD</code></div>
    `;
  }

  function renderOrderSummaryBox() {
    const currSummary = getCartSummary();
    const provId = provinceSelect?.value || "tp-hcm";
    const promoResult = activePromo
      ? evaluatePromoCode(activePromo, currSummary.subtotal)
      : { valid: false, discount: 0, rule: null };

    const shippingFee = calculateShippingFee(
      provId,
      currSummary.subtotal,
      currSummary.totalWeightG,
      promoResult.rule
    );
    const discountAmount = promoResult.valid ? promoResult.discount : 0;
    const grandTotal = Math.max(0, currSummary.subtotal + shippingFee - discountAmount);

    const itemsListEl = document.getElementById("checkout-items-list");
    if (itemsListEl) {
      itemsListEl.innerHTML = currSummary.items
        .map(
          (item) => `
          <div style="display:flex; align-items:center; gap:12px; padding-block:10px; border-bottom:1px solid var(--color-border);">
            <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" width="52" height="52" style="width:52px;height:52px;border-radius:8px;object-fit:cover;border:1px solid var(--color-border);" />
            <div style="flex:1; min-width:0;">
              <div style="font-size:var(--fs-small); font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
                ${escapeHtml(item.name)}
              </div>
              <div style="font-size:var(--fs-xs); color:var(--color-text-muted);">
                Quy cách: ${escapeHtml(item.variantLabel)} × <strong>${item.qty}</strong>
              </div>
            </div>
            <div style="font-size:var(--fs-small); font-weight:700; color:var(--color-text);">
              ${formatCurrency(item.lineTotal)}
            </div>
          </div>
        `
        )
        .join("");
    }

    const subEl = document.getElementById("checkout-subtotal");
    const shipEl = document.getElementById("checkout-shipping");
    const discRow = document.getElementById("checkout-discount-row");
    const discEl = document.getElementById("checkout-discount");
    const totalEl = document.getElementById("checkout-grand-total");

    if (subEl) subEl.textContent = formatCurrency(currSummary.subtotal);
    if (shipEl) {
      shipEl.innerHTML =
        shippingFee === 0
          ? `<span style="color:var(--color-success); font-weight:700;">Miễn phí (0₫)</span>`
          : formatCurrency(shippingFee);
    }
    if (discRow && discEl) {
      if (discountAmount > 0) {
        discRow.style.display = "flex";
        discEl.textContent = `−${formatCurrency(discountAmount)}`;
      } else {
        discRow.style.display = "none";
      }
    }
    if (totalEl) totalEl.textContent = formatCurrency(grandTotal);

    return {
      currSummary,
      shippingFee,
      discountAmount,
      grandTotal,
      promoCode: promoResult.valid ? promoResult.code : ""
    };
  }

  renderOrderSummaryBox();

  window.addEventListener("dld:cart-updated", () => {
    renderOrderSummaryBox();
  });

  provinceSelect?.addEventListener("change", () => {
    renderOrderSummaryBox();
    saveCheckoutDraft();
  });

  function saveCheckoutDraft() {
    safeSetStorage(CONFIG.STORAGE_KEYS.CHECKOUT_DRAFT, {
      fullName: nameInput?.value.trim() || "",
      phone: phoneInput?.value.trim() || "",
      province: provinceSelect?.value || "tp-hcm",
      address: addrInput?.value.trim() || "",
      giftNote: giftNoteInput?.value.trim() || "",
      hidePrice: Boolean(hidePriceCheck?.checked)
    });
  }

  [nameInput, phoneInput, addrInput, giftNoteInput, hidePriceCheck].forEach((el) => {
    el?.addEventListener("input", saveCheckoutDraft);
  });

  // Chọn phương thức thanh toán
  const paymentLabels = Array.from(document.querySelectorAll("[data-payment-option]"));
  paymentLabels.forEach((lbl) => {
    lbl.addEventListener("click", () => {
      paymentLabels.forEach((l) => l.classList.remove("is-selected"));
      lbl.classList.add("is-selected");
      const radio = lbl.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });

  // Áp dụng mã giảm giá
  const promoInput = document.getElementById("checkout-promo-input");
  const promoBtn = document.getElementById("checkout-promo-btn");
  const promoMsg = document.getElementById("checkout-promo-msg");

  promoBtn?.addEventListener("click", () => {
    const code = promoInput?.value.trim() || "";
    const currSummary = getCartSummary();
    const res = evaluatePromoCode(code, currSummary.subtotal);
    if (promoMsg) {
      promoMsg.style.color = res.valid ? "var(--color-success)" : "var(--color-error)";
      promoMsg.textContent = res.message;
    }
    activePromo = res.valid ? res.code : null;
    renderOrderSummaryBox();
  });

  // Xử lý Đặt hàng thử nghiệm
  const form = document.getElementById("checkout-form");
  const submitBtn = document.getElementById("checkout-submit-btn");
  let isSubmitting = false;

  form?.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Validate 3 trường bắt buộc
    const fullName = nameInput?.value.trim() || "";
    const phone = (phoneInput?.value || "").replace(/\s+/g, "");
    const address = addrInput?.value.trim() || "";

    const errName = document.getElementById("err-fullname");
    const errPhone = document.getElementById("err-phone");
    const errAddr = document.getElementById("err-address");

    let firstInvalidEl = null;

    if (fullName.length < 2) {
      nameInput?.classList.add("is-invalid");
      if (errName) errName.textContent = "Vui lòng nhập họ tên người nhận (tối thiểu 2 ký tự).";
      firstInvalidEl = firstInvalidEl || nameInput;
    } else {
      nameInput?.classList.remove("is-invalid");
      if (errName) errName.textContent = "";
    }

    const vnPhoneRegex = /^(0|\+84)(3|5|7|8|9)\d{8}$/;
    if (!vnPhoneRegex.test(phone)) {
      phoneInput?.classList.add("is-invalid");
      if (errPhone) {
        errPhone.textContent = "Vui lòng nhập số điện thoại Việt Nam hợp lệ (10 số, vd: 0363087855).";
      }
      firstInvalidEl = firstInvalidEl || phoneInput;
    } else {
      phoneInput?.classList.remove("is-invalid");
      if (errPhone) errPhone.textContent = "";
    }

    if (address.length < 5) {
      addrInput?.classList.add("is-invalid");
      if (errAddr) errAddr.textContent = "Vui lòng nhập địa chỉ nhận hàng chi tiết (Số nhà, đường, phường/xã, quận/huyện).";
      firstInvalidEl = firstInvalidEl || addrInput;
    } else {
      addrInput?.classList.remove("is-invalid");
      if (errAddr) errAddr.textContent = "";
    }

    if (firstInvalidEl) {
      firstInvalidEl.scrollIntoView({ behavior: "smooth", block: "center" });
      firstInvalidEl.focus();
      showToast("Vui lòng kiểm tra lại thông tin nhận hàng", { type: "error" });
      return;
    }

    isSubmitting = true;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Đang xử lý đơn hàng...";
    }

    const calc = renderOrderSummaryBox();
    const provObj = CONFIG.PROVINCES.find((p) => p.id === provinceSelect?.value);
    const paymentMethod =
      form.querySelector('input[name="paymentMethod"]:checked')?.value || "COD";

    const order = await createOrder({
      customer: {
        fullName,
        phone,
        provinceId: provinceSelect?.value || "tp-hcm",
        provinceName: provObj?.name || "TP. Hồ Chí Minh",
        address,
        giftNote: giftNoteInput?.value.trim() || "",
        hidePrice: Boolean(hidePriceCheck?.checked)
      },
      paymentMethod,
      promoCode: calc.promoCode,
      items: calc.currSummary.items,
      subtotal: calc.currSummary.subtotal,
      shippingFee: calc.shippingFee,
      discountAmount: calc.discountAmount,
      grandTotal: calc.grandTotal
    });

    clearCart();
    window.location.href = `order-success.html?code=${encodeURIComponent(order.code)}`;
  });
}

/* ==========================================================================
   4. TRANG XÁC NHẬN ĐƠN HÀNG (`order-success.html?code=...`)
   ========================================================================== */
async function initOrderSuccessPage() {
  const rootEl = document.getElementById("order-success-root");
  if (!rootEl) return;

  const params = new URLSearchParams(window.location.search);
  const code = params.get("code") || "";
  const order = await getOrderByCode(code);

  if (!order) {
    rootEl.innerHTML = `
      <div class="container section" style="text-align:center;">
        <h1 style="font-size:1.85rem; margin-bottom:var(--space-3);">Không tìm thấy thông tin đơn hàng</h1>
        <p style="color:var(--color-text-muted); margin-bottom:var(--space-6);">
          Mã đơn hàng không tồn tại trong trình duyệt này.
        </p>
        <a href="index.html" class="btn btn--primary">Về Trang chủ</a>
      </div>
    `;
    return;
  }

  const paymentLabels = {
    COD: "Thanh toán tiền mặt khi nhận hàng (COD)",
    BANK: "Chuyển khoản ngân hàng (VietQR)",
    EWALLET: "Ví điện tử (MoMo / ZaloPay / VNPay)"
  };

  let paymentInstructionHtml = "";
  if (order.paymentMethod === "BANK") {
    paymentInstructionHtml = `
      <div style="background:var(--color-primary-light); border:1px solid var(--color-primary); border-radius:var(--radius-md); padding:var(--space-4); margin-top:var(--space-4);">
        <h3 style="font-size:1rem; color:var(--color-primary-dark); margin-bottom:8px;">
          🏦 Hướng dẫn Chuyển khoản Ngân hàng
        </h3>
        <p style="font-size:var(--fs-small);">• Ngân hàng: <strong>${escapeHtml(CONFIG.PAYMENT_INFO.bankName)}</strong></p>
        <p style="font-size:var(--fs-small);">• Số tài khoản: <strong>${escapeHtml(CONFIG.PAYMENT_INFO.accountNumber)}</strong></p>
        <p style="font-size:var(--fs-small);">• Chủ tài khoản: <strong>${escapeHtml(CONFIG.PAYMENT_INFO.accountHolder)}</strong></p>
        <p style="font-size:var(--fs-small);">• Số tiền: <strong style="color:var(--color-sale);">${formatCurrency(order.grandTotal)}</strong></p>
        <p style="font-size:var(--fs-small);">• Nội dung chuyển khoản: <strong style="background:#fff; padding:2px 8px; border-radius:4px;">${escapeHtml(order.code)} ${escapeHtml(order.customer.phone)}</strong></p>
      </div>
    `;
  } else if (order.paymentMethod === "EWALLET") {
    paymentInstructionHtml = `
      <div style="background:var(--color-accent-light); border:1px solid var(--color-accent); border-radius:var(--radius-md); padding:var(--space-4); margin-top:var(--space-4);">
        <h3 style="font-size:1rem; color:#92400E; margin-bottom:8px;">
          📱 Hướng dẫn Thanh toán Ví điện tử
        </h3>
        <p style="font-size:var(--fs-small);">• Số điện thoại Ví MoMo / ZaloPay: <strong>${escapeHtml(CONFIG.PAYMENT_INFO.ewalletPhone)}</strong></p>
        <p style="font-size:var(--fs-small);">• Chủ ví: <strong>${escapeHtml(CONFIG.PAYMENT_INFO.ewalletHolder)}</strong></p>
        <p style="font-size:var(--fs-small);">• Lời nhắn: <strong>${escapeHtml(order.code)}</strong></p>
      </div>
    `;
  }

  rootEl.innerHTML = `
    <div class="container section" style="max-width:820px;">
      <div class="test-order-banner">
        ℹ️ <strong>Lưu ý:</strong> Đây là đơn đặt hàng thử nghiệm (lưu trên trình duyệt của bạn). Không phát sinh giao dịch tài chính thật.
      </div>

      <div class="checkout-card" style="text-align:center; padding:var(--space-8);">
        <div style="width:68px; height:68px; border-radius:50%; background:var(--color-primary-light); color:var(--color-primary); display:inline-flex; align-items:center; justify-content:center; margin-bottom:var(--space-4);">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h1 style="font-size:1.85rem; color:var(--color-primary-dark); margin-bottom:var(--space-2);">
          Đặt hàng thành công!
        </h1>
        <p style="color:var(--color-text-muted); margin-bottom:var(--space-4);">
          Cảm ơn <strong>${escapeHtml(order.customer.fullName)}</strong> đã tin chọn Đặc sản Đà Lạt. Mã đơn hàng của bạn là:
        </p>
        <div style="display:inline-block; background:var(--color-bg); border:2px dashed var(--color-primary); padding:10px 24px; border-radius:var(--radius-md); font-size:1.35rem; font-weight:800; color:var(--color-primary-dark); margin-bottom:var(--space-6);">
          ${escapeHtml(order.code)}
        </div>

        <div style="text-align:left; border-top:1px solid var(--color-border); padding-top:var(--space-6);">
          <h2 style="font-size:1.2rem; margin-bottom:var(--space-3);">Thông tin Nhận hàng & Thanh toán</h2>
          <div style="display:grid; grid-template-columns:1fr; gap:8px; font-size:var(--fs-small); margin-bottom:var(--space-4);">
            <div><strong>Người nhận:</strong> ${escapeHtml(order.customer.fullName)} – <strong>${escapeHtml(order.customer.phone)}</strong></div>
            <div><strong>Địa chỉ giao hàng:</strong> ${escapeHtml(order.customer.address)}, ${escapeHtml(order.customer.provinceName)}</div>
            <div><strong>Phương thức thanh toán:</strong> ${escapeHtml(paymentLabels[order.paymentMethod] || order.paymentMethod)}</div>
            ${
              order.customer.giftNote
                ? `<div><strong>🎁 Ghi chú quà tặng:</strong> ${escapeHtml(order.customer.giftNote)} ${order.customer.hidePrice ? "(Giao quà ẩn giá)" : ""}</div>`
                : ""
            }
          </div>

          ${paymentInstructionHtml}

          <h3 style="font-size:1.1rem; margin-top:var(--space-6); margin-bottom:var(--space-3);">
            Chi tiết Sản phẩm Đã đặt
          </h3>
          <div style="border:1px solid var(--color-border); border-radius:var(--radius-sm); padding:var(--space-4); margin-bottom:var(--space-4);">
            ${order.items
              .map(
                (i) => `
              <div style="display:flex; justify-content:space-between; padding-block:8px; border-bottom:1px dashed var(--color-border); font-size:var(--fs-small);">
                <span>${escapeHtml(i.name)} (${escapeHtml(i.variantLabel)}) × <strong>${i.qty}</strong></span>
                <strong>${formatCurrency(i.lineTotal)}</strong>
              </div>
            `
              )
              .join("")}
            <div class="summary-row" style="margin-top:8px;">
              <span>Tạm tính:</span>
              <span>${formatCurrency(order.subtotal)}</span>
            </div>
            <div class="summary-row">
              <span>Phí vận chuyển:</span>
              <span>${order.shippingFee === 0 ? "Miễn phí (0₫)" : formatCurrency(order.shippingFee)}</span>
            </div>
            ${
              order.discountAmount > 0
                ? `<div class="summary-row" style="color:var(--color-success);">
                    <span>Giảm giá (${escapeHtml(order.promoCode)}):</span>
                    <span>−${formatCurrency(order.discountAmount)}</span>
                  </div>`
                : ""
            }
            <div class="summary-row summary-row--total">
              <span>Tổng thanh toán:</span>
              <span>${formatCurrency(order.grandTotal)}</span>
            </div>
          </div>
        </div>

        <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:var(--space-3); margin-top:var(--space-6);">
          <a href="index.html" class="btn btn--primary btn--lg">Tiếp tục mua sắm</a>
          <a href="category.html" class="btn btn--outline btn--lg">Xem thêm Đặc sản</a>
        </div>
      </div>
    </div>
  `;
}

/* ==========================================================================
   5. TRANG CẨM NANG & BÀI VIẾT (`blog.html`, `blog-post.html`)
   ========================================================================== */
async function initBlogListPage() {
  const grid = document.getElementById("blog-list-grid");
  if (!grid) return;
  const posts = await getBlogPosts({ limit: 20 });
  grid.innerHTML = posts.map(renderBlogCardHTML).join("");
}

async function initBlogPostDetailPage() {
  const root = document.getElementById("blog-post-root");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug") || "";
  const post = await getBlogPostBySlug(slug);
  const allPosts = await getBlogPosts({ limit: 4 });

  if (!post) {
    root.innerHTML = `<div class="container section"><p>Không tìm thấy bài viết.</p></div>`;
    return;
  }

  document.title = `${post.title} – Cẩm nang Đặc sản Đà Lạt`;

  root.innerHTML = `
    <div class="container" style="max-width:840px; padding-block:var(--space-8);">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <ol class="breadcrumb__list">
          <li><a href="index.html" class="breadcrumb__link">Trang chủ</a></li>
          <li>›</li>
          <li><a href="blog.html" class="breadcrumb__link">Cẩm nang Đà Lạt</a></li>
          <li>›</li>
          <li class="breadcrumb__current">${escapeHtml(post.title)}</li>
        </ol>
      </nav>

      <article style="background:var(--color-surface); border:1px solid var(--color-border); border-radius:var(--radius-lg); padding:var(--space-6); margin-bottom:var(--space-8);">
        <span class="section__subtitle">${escapeHtml(post.category)}</span>
        <h1 style="font-size:clamp(1.6rem, 3.5vw, 2.4rem); margin-bottom:var(--space-3);">
          ${escapeHtml(post.title)}
        </h1>
        <div style="font-size:var(--fs-xs); color:var(--color-text-muted); margin-bottom:var(--space-6);">
          ✍️ Tác giả: <strong>${escapeHtml(post.author || "Đặc sản Đà Lạt")}</strong> · 📅 Ngày đăng: ${escapeHtml(post.publishedAt)} · ⏱️ ${escapeHtml(post.readTime || "5 phút đọc")}
        </div>
        <img
          src="${escapeHtml(post.cover)}"
          alt="${escapeHtml(post.title)}"
          width="780"
          height="440"
          style="width:100%; max-height:420px; object-fit:cover; border-radius:var(--radius-md); margin-bottom:var(--space-6);"
        />
        <div style="font-size:1.05rem; line-height:1.8; display:flex; flex-direction:column; gap:var(--space-4);">
          ${post.content}
        </div>
      </article>

      <section>
        <h2 style="font-size:1.4rem; margin-bottom:var(--space-4);">Bài viết Cẩm nang khác</h2>
        <div class="blog-grid">
          ${allPosts
            .filter((p) => p.id !== post.id)
            .slice(0, 3)
            .map(renderBlogCardHTML)
            .join("")}
        </div>
      </section>
    </div>
  `;
}
