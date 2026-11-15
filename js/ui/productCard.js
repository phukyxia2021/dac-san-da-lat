// Component Thẻ Sản Phẩm (Product Card) dùng chung toàn trang
// Hỗ trợ đổi ảnh thứ 2 khi hover, chọn nhanh quy cách (250g/500g/1kg), cập nhật giá tức thì & thêm vào giỏ

import {
  formatCurrency,
  calcDiscountPercent,
  formatSoldCount,
  escapeHtml
} from "../services/dataService.js";
import { addToCart } from "../store/cart.js";
import { showToast } from "./toast.js";
import { openCartDrawer } from "./drawer.js";

/**
 * Tạo chuỗi HTML cho 1 Product Card
 * @param {Object} product - Đối tượng sản phẩm từ dataService
 * @param {Object} [options] - { showFlashProgress: boolean }
 */
export function renderProductCardHTML(product, { showFlashProgress = false } = {}) {
  const defaultVariant = product.variants[0] || {
    id: `${product.id}-default`,
    label: "250g",
    price: 100000,
    originalPrice: 100000,
    stock: 50
  };

  const discountPct = calcDiscountPercent(
    defaultVariant.price,
    defaultVariant.originalPrice
  );
  const isOutOfStock = defaultVariant.stock <= 0;

  // Tối đa 2 nhãn góc trên theo đặc tả 04_HOMEPAGE_LAYOUT.md
  const badgesHtml = [];
  if (discountPct > 0) {
    badgesHtml.push(
      `<span class="badge badge--sale" data-card-discount>-${discountPct}%</span>`
    );
  } else {
    badgesHtml.push(
      `<span class="badge badge--sale" data-card-discount style="display:none"></span>`
    );
  }

  if (product.badges?.includes("ocop")) {
    badgesHtml.push(`<span class="badge badge--ocop">OCOP 4★</span>`);
  } else if (product.badges?.includes("bestseller")) {
    badgesHtml.push(`<span class="badge badge--bestseller">Bán chạy</span>`);
  } else if (product.badges?.includes("new")) {
    badgesHtml.push(`<span class="badge badge--new">Mới</span>`);
  }

  const primaryImg = product.images?.[0] || "images/logo/logo_dac_san_da_lat.jpg";
  const secondaryImg = product.images?.[1] || primaryImg;

  const variantsChipsHtml = product.variants
    .map(
      (v, idx) => `
      <button
        type="button"
        class="variant-chip ${idx === 0 ? "is-active" : ""}"
        data-action="select-card-variant"
        data-product-id="${escapeHtml(product.id)}"
        data-variant-id="${escapeHtml(v.id)}"
        data-price="${v.price}"
        data-original-price="${v.originalPrice || v.price}"
        data-stock="${v.stock}"
        ${v.stock <= 0 ? "disabled" : ""}
        aria-label="Chọn quy cách ${escapeHtml(v.label)}"
      >
        ${escapeHtml(v.label)}
      </button>
    `
    )
    .join("");

  let flashBarHtml = "";
  if (showFlashProgress) {
    const target = product.flashSaleTarget || product.soldCount + 150;
    const pct = Math.min(94, Math.max(35, Math.round((product.soldCount / target) * 100)));
    flashBarHtml = `
      <div class="flash-progress" title="Số lượng đã bán trong chương trình">
        <div class="flash-progress__bar" style="width: ${pct}%"></div>
        <span class="flash-progress__text">🔥 Đã bán ${formatSoldCount(product.soldCount)}</span>
      </div>
    `;
  }

  return `
    <article class="product-card" data-product-card="${escapeHtml(product.id)}" data-selected-variant="${escapeHtml(defaultVariant.id)}">
      <a href="product.html?slug=${encodeURIComponent(product.slug)}" class="product-card__media" aria-label="${escapeHtml(product.name)}">
        <div class="product-card__badges">
          ${badgesHtml.slice(0, 2).join("")}
        </div>
        <img
          src="${escapeHtml(primaryImg)}"
          alt="${escapeHtml(product.name)}"
          width="320"
          height="320"
          loading="lazy"
          decoding="async"
          class="product-card__img product-card__img--primary"
        />
        <img
          src="${escapeHtml(secondaryImg)}"
          alt="${escapeHtml(product.name)} - góc nhìn 2"
          width="320"
          height="320"
          loading="lazy"
          decoding="async"
          class="product-card__img product-card__img--secondary"
        />
      </a>

      <div class="product-card__body">
        <a href="product.html?slug=${encodeURIComponent(product.slug)}" class="product-card__title" title="${escapeHtml(product.name)}">
          ${escapeHtml(product.name)}
        </a>

        <div class="product-card__meta">
          <span class="product-card__rating">
            <span class="product-card__star">★</span> ${product.rating.toFixed(1)}
          </span>
          <span>·</span>
          <span>Đã bán ${formatSoldCount(product.soldCount)}</span>
        </div>

        <div class="product-card__prices">
          <span class="product-card__price" data-card-price>${formatCurrency(defaultVariant.price)}</span>
          <span
            class="product-card__original-price"
            data-card-original-price
            style="${defaultVariant.originalPrice > defaultVariant.price ? "" : "display:none"}"
          >
            ${formatCurrency(defaultVariant.originalPrice)}
          </span>
        </div>

        <div class="product-card__variants" role="group" aria-label="Chọn quy cách đóng gói">
          ${variantsChipsHtml}
        </div>

        ${flashBarHtml}

        <div class="product-card__cta">
          <button
            type="button"
            class="btn btn--primary product-card__add-btn"
            data-action="card-add-to-cart"
            data-product-id="${escapeHtml(product.id)}"
            ${isOutOfStock ? "disabled" : ""}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span data-card-btn-text>${isOutOfStock ? "Hết hàng" : "Thêm vào giỏ"}</span>
          </button>
        </div>
      </div>
    </article>
  `;
}

/**
 * Khởi tạo sự kiện ủy quyền (Event Delegation) cho mọi Product Card trên trang
 */
let isBound = false;
export function initProductCardInteractions() {
  if (isBound) return;
  isBound = true;

  document.addEventListener("click", (e) => {
    // 1. Xử lý bấm chọn chip quy cách trên thẻ sản phẩm
    const chipBtn = e.target.closest('[data-action="select-card-variant"]');
    if (chipBtn) {
      e.preventDefault();
      const card = chipBtn.closest("[data-product-card]");
      if (!card) return;

      const variantId = chipBtn.dataset.variantId;
      const price = Number(chipBtn.dataset.price);
      const originalPrice = Number(chipBtn.dataset.originalPrice);
      const stock = Number(chipBtn.dataset.stock);

      card.dataset.selectedVariant = variantId;

      card.querySelectorAll('[data-action="select-card-variant"]').forEach((b) => {
        b.classList.toggle("is-active", b === chipBtn);
      });

      const priceEl = card.querySelector("[data-card-price]");
      const origPriceEl = card.querySelector("[data-card-original-price]");
      const discountEl = card.querySelector("[data-card-discount]");
      const addBtn = card.querySelector('[data-action="card-add-to-cart"]');
      const addBtnText = card.querySelector("[data-card-btn-text]");

      if (priceEl) priceEl.textContent = formatCurrency(price);
      if (origPriceEl) {
        if (originalPrice > price) {
          origPriceEl.textContent = formatCurrency(originalPrice);
          origPriceEl.style.display = "";
        } else {
          origPriceEl.style.display = "none";
        }
      }

      const pct = calcDiscountPercent(price, originalPrice);
      if (discountEl) {
        if (pct > 0) {
          discountEl.textContent = `-${pct}%`;
          discountEl.style.display = "";
        } else {
          discountEl.style.display = "none";
        }
      }

      if (addBtn && addBtnText) {
        addBtn.disabled = stock <= 0;
        addBtnText.textContent = stock <= 0 ? "Hết hàng" : "Thêm vào giỏ";
      }
      return;
    }

    // 2. Xử lý bấm nút "Thêm vào giỏ" trên thẻ sản phẩm
    const addBtn = e.target.closest('[data-action="card-add-to-cart"]');
    if (addBtn) {
      e.preventDefault();
      const card = addBtn.closest("[data-product-card]");
      const productId = addBtn.dataset.productId || card?.dataset.productCard;
      const variantId = card?.dataset.selectedVariant || addBtn.dataset.variantId;

      const res = addToCart(productId, variantId, 1);
      if (res) {
        showToast(`Đã thêm "${res.product.name} (${res.variant.label})" vào giỏ hàng!`);
        openCartDrawer();
      }
    }
  });
}
