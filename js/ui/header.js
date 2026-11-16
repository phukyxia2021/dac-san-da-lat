// Thành phần toàn cục: Topbar, Sticky Header, Tìm kiếm thông minh, Mega Menu, Footer & Nút nổi (FAB)

import { CONFIG } from "../config.js";
import {
  getCategories,
  getProducts,
  normalizeVietnamese,
  formatCurrency,
  escapeHtml
} from "../services/dataService.js";
import { getCartSummary } from "../store/cart.js";

// Tô đậm phần từ khóa khớp (không phân biệt dấu/hoa thường) và đảm bảo chống XSS
function highlightMatch(text, query) {
  const safeText = escapeHtml(text);
  if (!query || query.trim().length < 2) return safeText;

  const normText = normalizeVietnamese(text);
  const normQ = normalizeVietnamese(query);
  const idx = normText.indexOf(normQ);
  if (idx === -1) return safeText;

  const before = escapeHtml(text.slice(0, idx));
  const match = escapeHtml(text.slice(idx, idx + query.trim().length));
  const after = escapeHtml(text.slice(idx + query.trim().length));
  return `${before}<mark>${match}</mark>${after}`;
}

export async function initGlobalLayout() {
  const categories = await getCategories();
  const cartSummary = getCartSummary();

  renderTopbarAndHeader(categories, cartSummary.totalCount);
  renderFooter(categories);
  renderFloatingActionButtons();
}

function renderTopbarAndHeader(categories, cartCount) {
  const headerMount = document.getElementById("site-header-mount");
  if (!headerMount) return;

  const isTopbarDismissed =
    sessionStorage.getItem(CONFIG.STORAGE_KEYS.TOPBAR_DISMISSED) === "1";

  const megaColsHtml = categories
    .map(
      (cat) => `
      <div class="mega-col">
        <a href="category.html?cat=${encodeURIComponent(cat.slug)}">
          <img src="${escapeHtml(cat.image)}" alt="${escapeHtml(cat.name)}" width="200" height="125" loading="lazy" class="mega-col__thumb" />
        </a>
        <a href="category.html?cat=${encodeURIComponent(cat.slug)}" class="mega-col__title">
          ${escapeHtml(cat.name)}
        </a>
        <ul class="mega-col__list">
          ${(cat.featuredItems || [])
            .map(
              (item) => `
            <li>
              <a href="category.html?cat=${encodeURIComponent(cat.slug)}&q=${encodeURIComponent(item)}" class="mega-col__link">
                • ${escapeHtml(item)}
              </a>
            </li>
          `
            )
            .join("")}
        </ul>
      </div>
    `
    )
    .join("");

  const mobileAccordionHtml = categories
    .map(
      (cat) => `
      <div class="mobile-accordion__item" data-mobile-acc-item>
        <button type="button" class="mobile-accordion__trigger" data-mobile-acc-btn aria-expanded="false">
          <span>${escapeHtml(cat.name)}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div class="mobile-accordion__content">
          <a href="category.html?cat=${encodeURIComponent(cat.slug)}" style="font-weight:700; color:var(--color-primary); font-size:var(--fs-small);">
            → Xem tất cả ${escapeHtml(cat.shortName || cat.name)}
          </a>
          ${(cat.featuredItems || [])
            .map(
              (item) => `
            <a href="category.html?cat=${encodeURIComponent(cat.slug)}&q=${encodeURIComponent(item)}" style="font-size:var(--fs-small); color:var(--color-text-muted); padding:2px 0;">
              • ${escapeHtml(item)}
            </a>
          `
            )
            .join("")}
        </div>
      </div>
    `
    )
    .join("");

  headerMount.innerHTML = `
    <!-- 1.1 Topbar thông báo -->
    <div class="topbar ${isTopbarDismissed ? "is-hidden" : ""}" id="site-topbar">
      <div class="container topbar__inner">
        <p class="topbar__message" id="topbar-carousel-text">
          🚚 Freeship toàn quốc cho đơn hàng từ 499.000₫
        </p>
        <button type="button" class="topbar__close" id="topbar-close-btn" aria-label="Đóng thông báo">
          ✕
        </button>
      </div>
    </div>

    <!-- 1.2 Header chính (Sticky) -->
    <header class="site-header" id="site-header">
      <div class="container site-header__main">
        <div style="display:flex; align-items:center; gap:var(--space-2);">
          <button
            type="button"
            class="icon-btn icon-btn--menu-mobile"
            id="mobile-menu-open-btn"
            aria-label="Mở menu danh mục"
            aria-expanded="false"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          <a href="index.html" class="brand-logo" aria-label="Trang chủ Đặc sản Đà Lạt">
            <img
              src="${escapeHtml(CONFIG.LOGO_URL)}"
              alt="Logo Đặc sản Đà Lạt"
              width="92"
              height="92"
              class="brand-logo__img"
            />
            <div class="brand-logo__text">
              <span class="brand-logo__title">Đặc sản Đà Lạt</span>
              <span class="brand-logo__subtitle">Tinh hoa nông sản phố núi</span>
            </div>
          </a>
        </div>

        <!-- 1.3 Thanh tìm kiếm thông minh -->
        <div class="header-search" id="header-search-wrap">
          <form class="header-search__form" id="header-search-form" action="category.html" method="GET" role="search">
            <label for="header-search-input" class="sr-only">Tìm kiếm đặc sản Đà Lạt</label>
            <input
              type="search"
              id="header-search-input"
              name="q"
              class="header-search__input"
              placeholder="Tìm hồng treo gió, cao atiso, dâu tây, cà phê..."
              autocomplete="off"
            />
            <button type="submit" class="header-search__btn" aria-label="Tìm kiếm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </form>
          <div class="header-search__dropdown" id="header-search-dropdown" role="listbox" aria-label="Gợi ý tìm kiếm"></div>
        </div>

        <!-- 1.4 Hotline / Zalo & Giỏ hàng -->
        <div class="header-actions">
          <button
            type="button"
            class="icon-btn icon-btn--search-mobile"
            id="mobile-search-toggle-btn"
            aria-label="Mở thanh tìm kiếm"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          <a href="tel:${escapeHtml(CONFIG.HOTLINE)}" class="header-hotline" title="Gọi đặt hàng nhanh">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>${escapeHtml(CONFIG.HOTLINE_DISPLAY)}</span>
          </a>

          <a href="${escapeHtml(CONFIG.ZALO_URL)}" target="_blank" rel="noopener" class="header-hotline" style="background:#E0F2FE; color:#0369A1;" title="Chat Zalo tư vấn">
            <span>Zalo Tư vấn</span>
          </a>

          <button
            type="button"
            class="cart-btn"
            data-action="open-cart-drawer"
            aria-label="Mở giỏ hàng"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span class="cart-btn__label" style="display:none;">Giỏ hàng</span>
            <span class="cart-btn__badge" data-cart-badge>${cartCount}</span>
          </button>
        </div>
      </div>

      <!-- 1.6 Thanh điều hướng & Mega Menu -->
      <nav class="header-nav" aria-label="Điều hướng chính">
        <div class="container">
          <ul class="header-nav__list">
            <li class="header-nav__item header-nav__item--has-mega">
              <a href="category.html" class="header-nav__link header-nav__link--cat" aria-haspopup="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                <span>Danh mục Đặc sản</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>
              <div class="mega-menu" role="region" aria-label="Mega Menu 6 danh mục">
                <div class="mega-menu__grid">
                  ${megaColsHtml}
                </div>
                <div style="margin-top:var(--space-4); padding-top:var(--space-3); border-top:1px solid var(--color-border); display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:var(--fs-xs); color:var(--color-text-muted);">
                    🌲 Hơn 119 sản phẩm nông sản & đặc sản chính gốc Đà Lạt – Lâm Đồng
                  </span>
                  <a href="category.html?all=1" class="btn btn--primary btn--sm">
                    Xem tất cả sản phẩm →
                  </a>
                </div>
              </div>
            </li>
            <li class="header-nav__item"><a href="index.html" class="header-nav__link">Trang chủ</a></li>
            <li class="header-nav__item"><a href="about.html" class="header-nav__link">Về chúng tôi</a></li>
            <li class="header-nav__item"><a href="category.html?all=1" class="header-nav__link">Tất cả sản phẩm</a></li>
            <li class="header-nav__item"><a href="category.html?sale=1" class="header-nav__link" style="color:var(--color-sale);">🔥 Khuyến mãi</a></li>
            <li class="header-nav__item"><a href="blog.html" class="header-nav__link">Cẩm nang Đà Lạt</a></li>
            <li class="header-nav__item"><a href="#site-footer" class="header-nav__link">Liên hệ</a></li>
          </ul>
        </div>
      </nav>
    </header>

    <!-- Mobile Navigation Accordion Drawer -->
    <div class="mobile-nav-drawer" id="mobile-nav-drawer" aria-hidden="true">
      <div class="mobile-nav-drawer__backdrop" data-action="close-mobile-nav"></div>
      <div class="mobile-nav-drawer__panel" role="dialog" aria-label="Menu di động">
        <div class="mobile-nav-drawer__header">
          <span style="font-family:var(--font-heading); font-weight:700; font-size:1.15rem; color:var(--color-primary-dark);">
            🌲 Danh mục Đặc sản
          </span>
          <button type="button" class="icon-btn" data-action="close-mobile-nav" aria-label="Đóng menu">
            ✕
          </button>
        </div>
        <div class="mobile-nav-drawer__body">
          ${mobileAccordionHtml}
          <div style="margin-top:var(--space-4); display:flex; flex-direction:column; gap:12px; font-weight:600;">
            <a href="index.html">🏠 Trang chủ</a>
            <a href="about.html">🌿 Về chúng tôi</a>
            <a href="category.html?all=1" style="color:var(--color-primary);">🛍️ Xem tất cả sản phẩm (119)</a>
            <a href="category.html?sale=1" style="color:var(--color-sale);">🔥 Khuyến mãi Flash Sale</a>
            <a href="blog.html">📖 Cẩm nang & Ẩm thực Đà Lạt</a>
            <a href="tel:${escapeHtml(CONFIG.HOTLINE)}" class="btn btn--primary btn--sm" style="margin-top:var(--space-2);">
              📞 Gọi Hotline: ${escapeHtml(CONFIG.HOTLINE_DISPLAY)}
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  initTopbarCarousel();
  initHeaderScrollAndMobileMenu();
  initSmartSearch();
}

function initTopbarCarousel() {
  const topbar = document.getElementById("site-topbar");
  const textEl = document.getElementById("topbar-carousel-text");
  const closeBtn = document.getElementById("topbar-close-btn");
  if (!topbar || !textEl) return;

  const messages = [
    "🚚 Freeship toàn quốc cho đơn hàng từ 499.000₫",
    "🎁 Nhập mã DALAT10 – Giảm ngay 10% cho đơn hàng đầu tiên",
    "🌲 100% Đặc sản chính gốc Đà Lạt – Đổi trả miễn phí trong 7 ngày"
  ];
  let idx = 0;

  const timer = setInterval(() => {
    if (topbar.classList.contains("is-hidden")) {
      clearInterval(timer);
      return;
    }
    idx = (idx + 1) % messages.length;
    textEl.style.opacity = "0";
    setTimeout(() => {
      textEl.textContent = messages[idx];
      textEl.style.opacity = "1";
    }, 200);
  }, 4000);

  closeBtn?.addEventListener("click", () => {
    topbar.classList.add("is-hidden");
    try {
      sessionStorage.setItem(CONFIG.STORAGE_KEYS.TOPBAR_DISMISSED, "1");
    } catch {
      // ignore
    }
  });
}

function initHeaderScrollAndMobileMenu() {
  const header = document.getElementById("site-header");
  const mobileMenuBtn = document.getElementById("mobile-menu-open-btn");
  const mobileDrawer = document.getElementById("mobile-nav-drawer");
  const mobileSearchBtn = document.getElementById("mobile-search-toggle-btn");
  const searchInput = document.getElementById("header-search-input");

  window.addEventListener(
    "scroll",
    () => {
      if (!header) return;
      header.classList.toggle("is-scrolled", window.scrollY > 40);
    },
    { passive: true }
  );

  mobileMenuBtn?.addEventListener("click", () => {
    mobileDrawer?.classList.add("is-open");
    mobileDrawer?.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
  });

  mobileDrawer?.addEventListener("click", (e) => {
    if (e.target.closest('[data-action="close-mobile-nav"]')) {
      mobileDrawer.classList.remove("is-open");
      mobileDrawer.setAttribute("aria-hidden", "true");
      document.body.classList.remove("is-locked");
      return;
    }
    const accBtn = e.target.closest("[data-mobile-acc-btn]");
    if (accBtn) {
      const item = accBtn.closest("[data-mobile-acc-item]");
      const isOpen = item.classList.toggle("is-open");
      accBtn.setAttribute("aria-expanded", String(isOpen));
    }
  });

  mobileSearchBtn?.addEventListener("click", () => {
    header?.classList.toggle("is-mobile-search-open");
    if (header?.classList.contains("is-mobile-search-open")) {
      searchInput?.focus();
    }
  });
}

function initSmartSearch() {
  const input = document.getElementById("header-search-input");
  const dropdown = document.getElementById("header-search-dropdown");
  const form = document.getElementById("header-search-form");
  if (!input || !dropdown || !form) return;

  let debounceTimer = null;
  let activeIndex = -1;
  let currentMatches = [];

  async function performSuggest(query) {
    const cleanQ = query.trim();
    if (cleanQ.length < 2) {
      dropdown.classList.remove("is-open");
      dropdown.innerHTML = "";
      currentMatches = [];
      activeIndex = -1;
      return;
    }

    const res = await getProducts({ q: cleanQ, pageSize: 6 });
    currentMatches = res.items;
    activeIndex = -1;

    if (currentMatches.length === 0) {
      dropdown.innerHTML = `
        <div class="search-suggest-empty">
          <p>Không tìm thấy sản phẩm cho "<strong>${escapeHtml(cleanQ)}</strong>"</p>
          <p style="font-size:var(--fs-xs); margin-top:4px;">Thử tìm nhanh:</p>
          <div class="search-suggest-empty__tags">
            <a href="category.html?q=Hồng+treo+gió" class="search-suggest-empty__tag">Hồng treo gió</a>
            <a href="category.html?q=Atiso" class="search-suggest-empty__tag">Atiso</a>
            <a href="category.html?q=Cà+phê" class="search-suggest-empty__tag">Cà phê</a>
            <a href="category.html?q=Dâu+tây" class="search-suggest-empty__tag">Dâu tây</a>
          </div>
        </div>
      `;
      dropdown.classList.add("is-open");
      return;
    }

    dropdown.innerHTML =
      currentMatches
        .map(
          (p, i) => `
        <a
          href="product.html?slug=${encodeURIComponent(p.slug)}"
          class="search-suggest-item"
          data-suggest-idx="${i}"
          role="option"
        >
          <img src="${escapeHtml(p.images[0])}" alt="${escapeHtml(p.name)}" width="48" height="48" class="search-suggest-item__img" />
          <div class="search-suggest-item__info">
            <div class="search-suggest-item__name">${highlightMatch(p.name, cleanQ)}</div>
            <div class="search-suggest-item__price">${formatCurrency(p.variants[0]?.price)}</div>
          </div>
        </a>
      `
        )
        .join("") +
      `
      <a
        href="category.html?q=${encodeURIComponent(cleanQ)}"
        style="display:block; text-align:center; padding:10px; font-size:var(--fs-xs); font-weight:700; color:var(--color-primary); background:var(--color-bg);"
      >
        Xem tất cả ${res.total} kết quả cho "${escapeHtml(cleanQ)}" →
      </a>
    `;
    dropdown.classList.add("is-open");
  }

  input.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      performSuggest(input.value);
    }, 250);
  });

  // Điều hướng bàn phím ↑ ↓ Enter Esc
  input.addEventListener("keydown", (e) => {
    if (!dropdown.classList.contains("is-open")) return;
    const items = dropdown.querySelectorAll(".search-suggest-item");

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (items.length === 0) return;
      activeIndex = (activeIndex + 1) % items.length;
      items.forEach((el, idx) => el.classList.toggle("is-active", idx === activeIndex));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (items.length === 0) return;
      activeIndex = (activeIndex - 1 + items.length) % items.length;
      items.forEach((el, idx) => el.classList.toggle("is-active", idx === activeIndex));
    } else if (e.key === "Enter" && activeIndex >= 0 && currentMatches[activeIndex]) {
      e.preventDefault();
      window.location.href = `product.html?slug=${encodeURIComponent(currentMatches[activeIndex].slug)}`;
    } else if (e.key === "Escape") {
      dropdown.classList.remove("is-open");
    }
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest("#header-search-wrap")) {
      dropdown.classList.remove("is-open");
    }
  });
}

function renderFooter(categories) {
  const footerMount = document.getElementById("site-footer-mount");
  if (!footerMount) return;

  footerMount.innerHTML = `
    <footer class="site-footer" id="site-footer">
      <div class="container">
        <div class="site-footer__grid">
          <!-- Khối 1: Thông tin thương hiệu & Liên hệ -->
          <div>
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:var(--space-4);">
              <img src="${escapeHtml(CONFIG.LOGO_URL)}" alt="Logo Đặc sản Đà Lạt" width="96" height="96" style="width:96px;height:96px;border-radius:50%;object-fit:cover;border:2px solid var(--color-primary-light);" />
              <div>
                <h2 style="font-family:var(--font-heading); font-size:1.3rem; color:#fff;">${escapeHtml(CONFIG.STORE_NAME)}</h2>
                <p style="font-size:var(--fs-xs); color:var(--color-primary-light);">${escapeHtml(CONFIG.STORE_TAGLINE)}</p>
              </div>
            </div>
            <ul class="footer-col__list">
              <li>📞 Hotline đặt hàng: <a href="tel:${escapeHtml(CONFIG.HOTLINE)}" style="font-weight:700; color:#FDE68A;">${escapeHtml(CONFIG.HOTLINE_DISPLAY)}</a></li>
              <li>💬 Zalo CSKH: <a href="${escapeHtml(CONFIG.ZALO_URL)}" target="_blank" rel="noopener" class="footer-col__link">${escapeHtml(CONFIG.HOTLINE_DISPLAY)}</a></li>
              <li>✉️ Email: <a href="mailto:${escapeHtml(CONFIG.EMAIL)}" class="footer-col__link">${escapeHtml(CONFIG.EMAIL)}</a></li>
              <li>⏰ Giờ mở cửa: ${escapeHtml(CONFIG.WORKING_HOURS)}</li>
            </ul>
            <div class="footer-socials" aria-label="Mạng xã hội">
              <a href="${escapeHtml(CONFIG.SOCIAL_LINKS.facebook)}" target="_blank" rel="noopener" class="footer-social-link" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="${escapeHtml(CONFIG.SOCIAL_LINKS.zalo)}" target="_blank" rel="noopener" class="footer-social-link" aria-label="Zalo">
                <span style="font-weight:800; font-size:0.75rem;">Zalo</span>
              </a>
              <a href="${escapeHtml(CONFIG.SOCIAL_LINKS.tiktok)}" target="_blank" rel="noopener" class="footer-social-link" aria-label="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
              <a href="${escapeHtml(CONFIG.SOCIAL_LINKS.youtube)}" target="_blank" rel="noopener" class="footer-social-link" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#1B4332"/></svg>
              </a>
            </div>
          </div>

          <!-- Khối 2: Danh mục Đặc sản -->
          <div>
            <h3 class="footer-col__title">Danh mục Đặc sản</h3>
            <ul class="footer-col__list">
              ${categories
                .map(
                  (c) =>
                    `<li><a href="category.html?cat=${encodeURIComponent(c.slug)}" class="footer-col__link">${escapeHtml(c.name)}</a></li>`
                )
                .join("")}
            </ul>
          </div>

          <!-- Khối 3: Chính sách & Hỗ trợ khách hàng -->
          <div>
            <h3 class="footer-col__title">Chính sách & Hỗ trợ</h3>
            <ul class="footer-col__list">
              <li><a href="policy.html?tab=shipping" class="footer-col__link">Chính sách vận chuyển toàn quốc</a></li>
              <li><a href="policy.html?tab=return" class="footer-col__link">Chính sách đổi trả trong 7 ngày</a></li>
              <li><a href="policy.html?tab=payment" class="footer-col__link">Hướng dẫn thanh toán & COD</a></li>
              <li><a href="policy.html?tab=privacy" class="footer-col__link">Chính sách bảo mật thông tin</a></li>
              <li><a href="blog.html" class="footer-col__link">Cẩm nang & Ẩm thực Đà Lạt</a></li>
            </ul>
          </div>

          <!-- Khối 4: Bản đồ Google Maps -->
          <div>
            <h3 class="footer-col__title">Bản đồ chỉ đường</h3>
            <div class="footer-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1951.7286347139586!2d108.43597423854565!3d11.94281014707145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3171130043681211%3A0x469130bf3ec1f647!2zQ2jhu6MgxJHDoCBs4bqhdA!5e0!3m2!1svi!2s!4v1794749824155!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" title="Bản đồ Chợ Đà Lạt"></iframe>
            </div>
          </div>
        </div>

        <div class="site-footer__bottom">
          <p>© 2026 <strong>Đặc sản Đà Lạt</strong>. Tinh hoa nông sản sạch Lâm Đồng – Giao hàng toàn quốc.</p>
          <div class="payment-badges" aria-label="Phương thức thanh toán hỗ trợ">
            <span class="payment-badge">COD Kiểm hàng</span>
            <span class="payment-badge">VietQR Ngân hàng</span>
            <span class="payment-badge">Ví MoMo</span>
            <span class="payment-badge">ZaloPay</span>
            <span class="payment-badge">VNPay</span>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function renderFloatingActionButtons() {
  if (document.getElementById("global-fab-group")) return;

  const fabGroup = document.createElement("div");
  fabGroup.className = "fab-group";
  fabGroup.id = "global-fab-group";

  fabGroup.innerHTML = `
    <button
      type="button"
      class="fab-btn fab-btn--top"
      id="fab-scroll-top"
      aria-label="Lên đầu trang"
      title="Lên đầu trang"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>

    <a
      href="${escapeHtml(CONFIG.ZALO_URL)}"
      target="_blank"
      rel="noopener"
      class="fab-btn fab-btn--zalo"
      aria-label="Chat Zalo"
      title="Chat Zalo tư vấn ngay"
    >
      <span style="font-weight:800; font-size:0.8rem; letter-spacing:-0.02em;">Zalo</span>
    </a>

    <a
      href="tel:${escapeHtml(CONFIG.HOTLINE)}"
      class="fab-btn fab-btn--phone"
      aria-label="Gọi hotline"
      title="Gọi Hotline: ${escapeHtml(CONFIG.HOTLINE_DISPLAY)}"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    </a>
  `;

  document.body.appendChild(fabGroup);

  const topBtn = document.getElementById("fab-scroll-top");
  window.addEventListener(
    "scroll",
    () => {
      topBtn?.classList.toggle("is-visible", window.scrollY > 600);
    },
    { passive: true }
  );

  topBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
