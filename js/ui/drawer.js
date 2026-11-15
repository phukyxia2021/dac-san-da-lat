// Slide-over Drawer Giỏ hàng dùng chung toàn trang
// Tự động đồng bộ khi thêm/xóa/tăng/giảm số lượng và đồng bộ giữa các tab

import {
  getCartSummary,
  updateCartItemQty,
  removeCartItem,
  addToCart
} from "../store/cart.js";
import {
  formatCurrency,
  escapeHtml,
  getProducts
} from "../services/dataService.js";
import { showToast } from "./toast.js";

let drawerEl = null;
let bestsellerCache = [];

async function loadBestsellers() {
  if (bestsellerCache.length > 0) return bestsellerCache;
  const res = await getProducts({ sort: "bestseller", pageSize: 3 });
  bestsellerCache = res.items;
  return bestsellerCache;
}

function createDrawerDOM() {
  if (drawerEl && document.body.contains(drawerEl)) return drawerEl;

  drawerEl = document.createElement("aside");
  drawerEl.className = "cart-drawer";
  drawerEl.id = "global-cart-drawer";
  drawerEl.setAttribute("aria-hidden", "true");
  drawerEl.setAttribute("aria-label", "Giỏ hàng của bạn");

  drawerEl.innerHTML = `
    <div class="cart-drawer__backdrop" data-action="close-cart-drawer"></div>
    <div class="cart-drawer__panel" role="dialog" aria-modal="true" aria-labelledby="cart-drawer-heading">
      <div class="cart-drawer__header">
        <h2 class="cart-drawer__title" id="cart-drawer-heading">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span>Giỏ hàng (<span data-cart-drawer-count>0</span>)</span>
        </h2>
        <button type="button" class="icon-btn" data-action="close-cart-drawer" aria-label="Đóng giỏ hàng">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div class="freeship-bar" data-cart-freeship-box>
        <p class="freeship-bar__text" data-cart-freeship-text></p>
        <div class="freeship-bar__track">
          <div class="freeship-bar__fill" data-cart-freeship-fill style="width: 0%"></div>
        </div>
      </div>

      <div class="cart-drawer__body" data-cart-drawer-body></div>

      <div class="cart-drawer__footer" data-cart-drawer-footer>
        <div class="cart-drawer__summary-row">
          <span>Tạm tính:</span>
          <strong class="cart-drawer__subtotal" data-cart-drawer-subtotal>0₫</strong>
        </div>
        <p style="font-size: var(--fs-xs); color: var(--color-text-muted); margin-bottom: var(--space-3);">
          Phí vận chuyển và mã giảm giá sẽ được tính ở bước Thanh toán.
        </p>
        <div style="display: flex; flex-direction: column; gap: var(--space-2);">
          <a href="checkout.html" class="btn btn--primary btn--lg btn--block" data-cart-checkout-btn>
            Tiến hành Thanh toán
          </a>
          <button type="button" class="btn btn--outline btn--sm btn--block" data-action="close-cart-drawer">
            Tiếp tục mua sắm
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(drawerEl);
  bindDrawerEvents();
  return drawerEl;
}

export async function renderCartDrawer() {
  const el = createDrawerDOM();
  const summary = getCartSummary();

  // Cập nhật mọi badge giỏ hàng trên Header
  document.querySelectorAll("[data-cart-badge]").forEach((badge) => {
    badge.textContent = String(summary.totalCount);
  });

  const countEl = el.querySelector("[data-cart-drawer-count]");
  const freeshipTextEl = el.querySelector("[data-cart-freeship-text]");
  const freeshipFillEl = el.querySelector("[data-cart-freeship-fill]");
  const bodyEl = el.querySelector("[data-cart-drawer-body]");
  const footerEl = el.querySelector("[data-cart-drawer-footer]");
  const subtotalEl = el.querySelector("[data-cart-drawer-subtotal]");

  if (countEl) countEl.textContent = String(summary.totalCount);
  if (subtotalEl) subtotalEl.textContent = formatCurrency(summary.subtotal);

  if (freeshipTextEl && freeshipFillEl) {
    freeshipFillEl.style.width = `${summary.freeshipProgress}%`;
    if (summary.subtotal === 0) {
      freeshipTextEl.innerHTML = `🚚 Miễn phí vận chuyển toàn quốc cho đơn từ <strong>${formatCurrency(summary.freeshipThreshold)}</strong>`;
    } else if (summary.isFreeship) {
      freeshipTextEl.innerHTML = `🎉 Chúc mừng! Đơn hàng của bạn đã được <strong>Miễn phí vận chuyển</strong>!`;
    } else {
      freeshipTextEl.innerHTML = `🚚 Mua thêm <strong>${formatCurrency(summary.amountToFreeship)}</strong> để được <strong>Miễn phí vận chuyển</strong>`;
    }
  }

  if (summary.items.length === 0) {
    if (footerEl) footerEl.style.display = "none";
    const suggestions = await loadBestsellers();
    const suggestHtml = suggestions
      .map(
        (p) => `
        <div style="display:flex; align-items:center; gap:10px; padding:8px; border:1px solid var(--color-border); border-radius:var(--radius-sm); text-align:left; background:var(--color-bg);">
          <img src="${escapeHtml(p.images[0])}" alt="${escapeHtml(p.name)}" width="48" height="48" style="width:48px;height:48px;object-fit:cover;border-radius:6px;" />
          <div style="flex:1;min-width:0;">
            <a href="product.html?slug=${encodeURIComponent(p.slug)}" style="font-size:0.8rem;font-weight:600;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escapeHtml(p.name)}</a>
            <span style="font-size:0.78rem;color:var(--color-primary);font-weight:700;">${formatCurrency(p.variants[0]?.price)}</span>
          </div>
          <button type="button" class="btn btn--primary btn--sm" data-action="drawer-quick-add" data-product-id="${escapeHtml(p.id)}" data-variant-id="${escapeHtml(p.variants[0]?.id)}">
            + Thêm
          </button>
        </div>
      `
      )
      .join("");

    bodyEl.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty__icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </div>
        <h3 style="font-size:1.1rem; margin-bottom:6px;">Giỏ hàng của bạn đang trống</h3>
        <p style="font-size:var(--fs-small); color:var(--color-text-muted); margin-bottom:var(--space-4);">
          Hãy khám phá những thức quà đặc sản Đà Lạt tươi ngon nhất nhé!
        </p>
        <a href="category.html" class="btn btn--primary btn--sm" style="margin-bottom:var(--space-6);">
          Khám phá đặc sản ngay
        </a>
        <div style="text-align:left; margin-top:var(--space-4);">
          <p style="font-size:var(--fs-xs); font-weight:700; text-transform:uppercase; color:var(--color-text-muted); margin-bottom:8px;">
            Gợi ý đặc sản bán chạy:
          </p>
          <div style="display:flex; flex-direction:column; gap:8px;">
            ${suggestHtml}
          </div>
        </div>
      </div>
    `;
    return;
  }

  if (footerEl) footerEl.style.display = "block";

  bodyEl.innerHTML = summary.items
    .map(
      (item) => `
      <div class="cart-item" data-cart-row="${escapeHtml(item.productId)}__${escapeHtml(item.variantId)}">
        <a href="product.html?slug=${encodeURIComponent(item.slug)}">
          <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" width="68" height="68" class="cart-item__img" />
        </a>
        <div class="cart-item__info">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px;">
            <a href="product.html?slug=${encodeURIComponent(item.slug)}" class="cart-item__title">
              ${escapeHtml(item.name)}
            </a>
            <button
              type="button"
              class="cart-item__remove"
              data-action="cart-remove-item"
              data-product-id="${escapeHtml(item.productId)}"
              data-variant-id="${escapeHtml(item.variantId)}"
              aria-label="Xóa ${escapeHtml(item.name)}"
              title="Xóa khỏi giỏ"
            >
              ✕
            </button>
          </div>
          <div class="cart-item__variant">
            Quy cách: <strong>${escapeHtml(item.variantLabel)}</strong> · Đơn giá: ${formatCurrency(item.price)}
          </div>
          <div class="cart-item__bottom">
            <div class="qty-control" role="group" aria-label="Số lượng">
              <button
                type="button"
                class="qty-control__btn"
                data-action="cart-dec-qty"
                data-product-id="${escapeHtml(item.productId)}"
                data-variant-id="${escapeHtml(item.variantId)}"
                data-current-qty="${item.qty}"
                aria-label="Giảm số lượng"
              >−</button>
              <span class="qty-control__val">${item.qty}</span>
              <button
                type="button"
                class="qty-control__btn"
                data-action="cart-inc-qty"
                data-product-id="${escapeHtml(item.productId)}"
                data-variant-id="${escapeHtml(item.variantId)}"
                data-current-qty="${item.qty}"
                aria-label="Tăng số lượng"
              >+</button>
            </div>
            <span class="cart-item__price">${formatCurrency(item.lineTotal)}</span>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

function bindDrawerEvents() {
  if (!drawerEl) return;

  drawerEl.addEventListener("click", (e) => {
    const closeBtn = e.target.closest('[data-action="close-cart-drawer"]');
    if (closeBtn) {
      closeCartDrawer();
      return;
    }

    const incBtn = e.target.closest('[data-action="cart-inc-qty"]');
    if (incBtn) {
      const { productId, variantId, currentQty } = incBtn.dataset;
      updateCartItemQty(productId, variantId, Number(currentQty) + 1);
      return;
    }

    const decBtn = e.target.closest('[data-action="cart-dec-qty"]');
    if (decBtn) {
      const { productId, variantId, currentQty } = decBtn.dataset;
      const next = Number(currentQty) - 1;
      if (next <= 0) {
        removeCartItem(productId, variantId);
        showToast("Đã xóa sản phẩm khỏi giỏ hàng");
      } else {
        updateCartItemQty(productId, variantId, next);
      }
      return;
    }

    const removeBtn = e.target.closest('[data-action="cart-remove-item"]');
    if (removeBtn) {
      const { productId, variantId } = removeBtn.dataset;
      removeCartItem(productId, variantId);
      showToast("Đã xóa sản phẩm khỏi giỏ hàng");
      return;
    }

    const quickAddBtn = e.target.closest('[data-action="drawer-quick-add"]');
    if (quickAddBtn) {
      const { productId, variantId } = quickAddBtn.dataset;
      const res = addToCart(productId, variantId, 1);
      if (res) {
        showToast(`Đã thêm "${res.product.name}" vào giỏ!`);
      }
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawerEl.classList.contains("is-open")) {
      closeCartDrawer();
    }
  });
}

export function openCartDrawer() {
  const el = createDrawerDOM();
  renderCartDrawer();
  el.classList.add("is-open");
  el.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-locked");
}

export function closeCartDrawer() {
  if (!drawerEl) return;
  drawerEl.classList.remove("is-open");
  drawerEl.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-locked");
}

export function initCartDrawer() {
  createDrawerDOM();
  renderCartDrawer();

  window.addEventListener("dld:cart-updated", () => {
    renderCartDrawer();
  });

  document.addEventListener("click", (e) => {
    const openTrigger = e.target.closest('[data-action="open-cart-drawer"]');
    if (openTrigger) {
      e.preventDefault();
      openCartDrawer();
    }
  });
}
