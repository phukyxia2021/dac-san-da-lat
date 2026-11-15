// Bộ lọc thông minh & Sắp xếp cho trang Danh mục (`category.html`)
// Đồng bộ trạng thái với URL (`history.replaceState`), hỗ trợ kết hợp AND giữa các nhóm và OR trong cùng nhóm

import {
  getCategories,
  getCategoryBySlug,
  getProducts,
  escapeHtml
} from "../services/dataService.js";
import { renderProductCardHTML } from "./productCard.js";

const PAGE_SIZE = 12;

const PRICE_LABELS = {
  "under-100k": "Dưới 100.000₫",
  "100k-300k": "100.000₫ – 300.000₫",
  "over-300k": "Trên 300.000₫"
};

const NEED_LABELS = {
  "an-vat": "Ăn vặt sạch",
  "tot-suc-khoe": "Tốt cho sức khỏe",
  "qua-bieu": "Quà biếu cao cấp"
};

const WEIGHT_LABELS = {
  "250": "250g",
  "500": "500g",
  "1000": "1kg"
};

export async function initCategoryPage() {
  const rootEl = document.getElementById("category-page-root");
  if (!rootEl) return;

  const categories = await getCategories();

  // Đọc trạng thái ban đầu từ URL query
  const state = readStateFromURL();

  // Đồng bộ ô tìm kiếm trên Header nếu có ?q=
  const headerSearchInput = document.getElementById("header-search-input");
  if (headerSearchInput && state.q) {
    headerSearchInput.value = state.q;
  }

  // Render danh sách checkbox Danh mục trong sidebar
  const catFilterBox = document.getElementById("filter-categories-list");
  if (catFilterBox) {
    catFilterBox.innerHTML = categories
      .map(
        (c) => `
        <label class="filter-option">
          <input
            type="checkbox"
            name="cat"
            value="${escapeHtml(c.slug)}"
            ${state.categories.includes(c.slug) ? "checked" : ""}
          />
          <span>${escapeHtml(c.name)}</span>
        </label>
      `
      )
      .join("");
  }

  syncFilterInputsWithState(state);
  await updateCategoryView(state, categories);

  // Lắng nghe thay đổi trên các input bộ lọc (tức thì trên Desktop & cập nhật trên Mobile)
  const sidebarForm = document.getElementById("category-filter-form");
  sidebarForm?.addEventListener("change", async () => {
    collectStateFromInputs(state);
    state.page = 1;
    writeStateToURL(state);
    await updateCategoryView(state, categories);
  });

  // Sắp xếp
  const sortSelect = document.getElementById("category-sort-select");
  sortSelect?.addEventListener("change", async () => {
    state.sort = sortSelect.value;
    state.page = 1;
    writeStateToURL(state);
    await updateCategoryView(state, categories);
  });

  // Nút "Xem thêm"
  const loadMoreBtn = document.getElementById("category-load-more-btn");
  loadMoreBtn?.addEventListener("click", async () => {
    state.page += 1;
    await updateCategoryView(state, categories);
  });

  // Nút "Xem tất cả sản phẩm" (ở dưới lưới và trên thanh công cụ)
  const showAllBtn = document.getElementById("category-show-all-btn");
  const toolbarShowAllBtn = document.getElementById("category-toolbar-show-all-btn");

  async function handleShowAllProducts() {
    state.showAll = true;
    writeStateToURL(state);
    await updateCategoryView(state, categories);
  }

  showAllBtn?.addEventListener("click", handleShowAllProducts);
  toolbarShowAllBtn?.addEventListener("click", handleShowAllProducts);

  // Xóa từng chip lọc hoặc xóa tất cả
  document.addEventListener("click", async (e) => {
    const removeChipBtn = e.target.closest("[data-remove-filter]");
    if (removeChipBtn) {
      const type = removeChipBtn.dataset.filterType;
      const val = removeChipBtn.dataset.filterVal;

      if (type === "price") state.priceRange = "";
      if (type === "need") state.needs = state.needs.filter((v) => v !== val);
      if (type === "weight") state.weights = state.weights.filter((v) => v !== val);
      if (type === "cat") state.categories = state.categories.filter((v) => v !== val);
      if (type === "q") {
        state.q = "";
        if (headerSearchInput) headerSearchInput.value = "";
      }
      if (type === "sale") state.onlySale = false;

      state.page = 1;
      syncFilterInputsWithState(state);
      writeStateToURL(state);
      await updateCategoryView(state, categories);
      return;
    }

    const clearAllBtn = e.target.closest('[data-action="clear-all-filters"]');
    if (clearAllBtn) {
      state.categories = [];
      state.priceRange = "";
      state.needs = [];
      state.weights = [];
      state.q = "";
      state.onlySale = false;
      state.page = 1;
      if (headerSearchInput) headerSearchInput.value = "";
      syncFilterInputsWithState(state);
      writeStateToURL(state);
      await updateCategoryView(state, categories);
    }
  });

  // Mobile Filter Drawer Open / Close
  const filterSidebar = document.getElementById("category-filter-sidebar");
  const openFilterBtn = document.getElementById("mobile-open-filter-btn");
  const closeFilterBtns = document.querySelectorAll('[data-action="close-mobile-filter"]');

  openFilterBtn?.addEventListener("click", () => {
    filterSidebar?.classList.add("is-open");
    document.body.classList.add("is-locked");
  });

  closeFilterBtns.forEach((btn) =>
    btn.addEventListener("click", () => {
      filterSidebar?.classList.remove("is-open");
      document.body.classList.remove("is-locked");
    })
  );

  filterSidebar?.addEventListener("click", (e) => {
    if (e.target === filterSidebar) {
      filterSidebar.classList.remove("is-open");
      document.body.classList.remove("is-locked");
    }
  });
}

function readStateFromURL() {
  const params = new URLSearchParams(window.location.search);
  const catParam = params.get("cat") || "";
  const categories = catParam ? catParam.split(",").filter(Boolean) : [];
  const needsParam = params.get("needs") || "";
  const weightsParam = params.get("weights") || "";

  return {
    categories,
    q: params.get("q") || "",
    priceRange: params.get("price") || "",
    needs: needsParam ? needsParam.split(",").filter(Boolean) : [],
    weights: weightsParam ? weightsParam.split(",").filter(Boolean) : [],
    onlySale: params.get("sale") === "1",
    showAll: params.get("all") === "1",
    sort: params.get("sort") || "bestseller",
    page: 1
  };
}

function writeStateToURL(state) {
  const params = new URLSearchParams();
  if (state.categories.length > 0) params.set("cat", state.categories.join(","));
  if (state.q) params.set("q", state.q);
  if (state.priceRange) params.set("price", state.priceRange);
  if (state.needs.length > 0) params.set("needs", state.needs.join(","));
  if (state.weights.length > 0) params.set("weights", state.weights.join(","));
  if (state.onlySale) params.set("sale", "1");
  if (state.showAll) params.set("all", "1");
  if (state.sort && state.sort !== "bestseller") params.set("sort", state.sort);

  const qs = params.toString();
  const nextUrl = `${window.location.pathname}${qs ? `?${qs}` : ""}`;
  window.history.replaceState({}, "", nextUrl);
}

function syncFilterInputsWithState(state) {
  const form = document.getElementById("category-filter-form");
  if (!form) return;

  form.querySelectorAll('input[name="cat"]').forEach((el) => {
    el.checked = state.categories.includes(el.value);
  });

  form.querySelectorAll('input[name="priceRange"]').forEach((el) => {
    el.checked = el.value === state.priceRange;
  });

  form.querySelectorAll('input[name="need"]').forEach((el) => {
    el.checked = state.needs.includes(el.value);
  });

  form.querySelectorAll('input[name="weight"]').forEach((el) => {
    el.checked = state.weights.includes(el.value);
  });

  const saleCheckbox = form.querySelector('input[name="onlySale"]');
  if (saleCheckbox) saleCheckbox.checked = state.onlySale;

  const sortSelect = document.getElementById("category-sort-select");
  if (sortSelect) sortSelect.value = state.sort;
}

function collectStateFromInputs(state) {
  const form = document.getElementById("category-filter-form");
  if (!form) return;

  state.categories = Array.from(form.querySelectorAll('input[name="cat"]:checked')).map(
    (el) => el.value
  );

  const checkedPrice = form.querySelector('input[name="priceRange"]:checked');
  state.priceRange = checkedPrice ? checkedPrice.value : "";

  state.needs = Array.from(form.querySelectorAll('input[name="need"]:checked')).map(
    (el) => el.value
  );

  state.weights = Array.from(form.querySelectorAll('input[name="weight"]:checked')).map(
    (el) => el.value
  );

  const saleCheckbox = form.querySelector('input[name="onlySale"]');
  state.onlySale = Boolean(saleCheckbox?.checked);
}

async function updateCategoryView(state, categories) {
  // Cập nhật Tiêu đề, Mô tả & Breadcrumb
  const breadcrumbCatEl = document.getElementById("category-breadcrumb-current");
  const titleEl = document.getElementById("category-heading-title");
  const descEl = document.getElementById("category-heading-desc");

  let activeCatObj = null;
  if (state.categories.length === 1) {
    activeCatObj = await getCategoryBySlug(state.categories[0]);
  }

  if (state.q) {
    const titleText = `Kết quả tìm kiếm: "${state.q}"`;
    if (breadcrumbCatEl) breadcrumbCatEl.textContent = titleText;
    if (titleEl) titleEl.textContent = titleText;
    if (descEl) descEl.textContent = "Khám phá các đặc sản Đà Lạt phù hợp với từ khóa của bạn.";
    document.title = `${titleText} – Đặc sản Đà Lạt`;
  } else if (activeCatObj) {
    if (breadcrumbCatEl) breadcrumbCatEl.textContent = activeCatObj.name;
    if (titleEl) titleEl.textContent = activeCatObj.name;
    if (descEl) descEl.textContent = activeCatObj.description;
    document.title = `${activeCatObj.name} – Đặc sản Đà Lạt`;
  } else if (state.onlySale) {
    if (breadcrumbCatEl) breadcrumbCatEl.textContent = "Khuyến mãi & Flash Sale";
    if (titleEl) titleEl.textContent = "🔥 Đặc sản Đà Lạt Đang Khuyến Mãi";
    if (descEl) descEl.textContent = "Săn ưu đãi đặc sản Đà Lạt chính gốc với mức giá tốt nhất trong ngày.";
    document.title = "Khuyến mãi Đặc sản Đà Lạt";
  } else {
    if (breadcrumbCatEl) breadcrumbCatEl.textContent = "Tất cả sản phẩm";
    if (titleEl) titleEl.textContent = "Tất cả Đặc sản Đà Lạt Chính Gốc";
    if (descEl) {
      descEl.textContent =
        "Hơn 119 thức quà đặc sản Đà Lạt: Hồng treo gió, Cao Atiso, Trà & Cà phê Cầu Đất, Nông sản tươi, Bột rau củ sấy lạnh và Set quà biếu.";
    }
    document.title = "Danh mục Sản phẩm – Đặc sản Đà Lạt";
  }

  // Render Active Filter Chips
  renderActiveFilterChips(state, categories);

  // Truy vấn sản phẩm (nếu showAll = true thì hiển thị toàn bộ, ngược lại phân trang theo PAGE_SIZE)
  const limit = state.showAll ? 1000 : state.page * PAGE_SIZE;
  const res = await getProducts({
    q: state.q,
    filters: {
      categories: state.categories,
      priceRange: state.priceRange,
      needs: state.needs,
      weights: state.weights,
      onlySale: state.onlySale
    },
    sort: state.sort,
    page: 1,
    pageSize: limit
  });

  const countEl = document.getElementById("category-result-count");
  if (countEl) {
    countEl.innerHTML = `Hiển thị <strong>${res.items.length}</strong> / <strong>${res.total}</strong> sản phẩm`;
  }

  const gridEl = document.getElementById("category-products-grid");
  const emptyEl = document.getElementById("category-empty-state");
  const loadMoreWrap = document.getElementById("category-load-more-wrap");
  const showAllBtn = document.getElementById("category-show-all-btn");
  const toolbarShowAllBtn = document.getElementById("category-toolbar-show-all-btn");

  if (showAllBtn) {
    showAllBtn.textContent = `Xem tất cả ${res.total} sản phẩm`;
  }
  if (toolbarShowAllBtn) {
    if (res.hasMore) {
      toolbarShowAllBtn.style.display = "inline-flex";
      toolbarShowAllBtn.textContent = `Xem tất cả (${res.total})`;
    } else {
      toolbarShowAllBtn.style.display = "none";
    }
  }

  if (!gridEl) return;

  if (res.total === 0) {
    gridEl.innerHTML = "";
    if (loadMoreWrap) loadMoreWrap.style.display = "none";
    if (emptyEl) {
      const bestsellers = await getProducts({ sort: "bestseller", pageSize: 4 });
      emptyEl.style.display = "block";
      emptyEl.innerHTML = `
        <div style="background:var(--color-surface); border:1px solid var(--color-border); border-radius:var(--radius-lg); padding:var(--space-8); text-align:center; margin-bottom:var(--space-8);">
          <p style="font-size:2.2rem; margin-bottom:var(--space-2);">🌲</p>
          <h3 style="font-family:var(--font-heading); font-size:1.35rem; margin-bottom:var(--space-2);">
            Không tìm thấy sản phẩm khớp với bộ lọc hiện tại
          </h3>
          <p style="color:var(--color-text-muted); font-size:var(--fs-small); margin-bottom:var(--space-4);">
            Bạn hãy thử bỏ bớt một vài tiêu chí lọc hoặc xem các đặc sản Đà Lạt bán chạy nhất bên dưới nhé!
          </p>
          <button type="button" class="btn btn--primary" data-action="clear-all-filters">
            Xóa tất cả bộ lọc
          </button>
        </div>
        <h3 style="font-family:var(--font-heading); font-size:1.35rem; margin-bottom:var(--space-4);">
          ⭐ Gợi ý Đặc sản Đà Lạt Bán chạy nhất
        </h3>
        <div class="product-grid">
          ${bestsellers.items.map((p) => renderProductCardHTML(p)).join("")}
        </div>
      `;
    }
    return;
  }

  if (emptyEl) {
    emptyEl.style.display = "none";
    emptyEl.innerHTML = "";
  }

  gridEl.innerHTML = res.items.map((p) => renderProductCardHTML(p)).join("");

  if (loadMoreWrap) {
    loadMoreWrap.style.display = res.hasMore ? "block" : "none";
  }
}

function renderActiveFilterChips(state, categories) {
  const container = document.getElementById("active-filters-bar");
  if (!container) return;

  const chips = [];

  if (state.q) {
    chips.push({
      type: "q",
      val: state.q,
      label: `Từ khóa: "${state.q}"`
    });
  }

  if (state.onlySale) {
    chips.push({
      type: "sale",
      val: "1",
      label: "Đang giảm giá"
    });
  }

  state.categories.forEach((slug) => {
    const cat = categories.find((c) => c.slug === slug || (c.aliases && c.aliases.includes(slug)));
    chips.push({
      type: "cat",
      val: slug,
      label: cat ? cat.shortName || cat.name : slug
    });
  });

  if (state.priceRange && PRICE_LABELS[state.priceRange]) {
    chips.push({
      type: "price",
      val: state.priceRange,
      label: `Giá: ${PRICE_LABELS[state.priceRange]}`
    });
  }

  state.needs.forEach((n) => {
    if (NEED_LABELS[n]) {
      chips.push({
        type: "need",
        val: n,
        label: `Nhu cầu: ${NEED_LABELS[n]}`
      });
    }
  });

  state.weights.forEach((w) => {
    if (WEIGHT_LABELS[w]) {
      chips.push({
        type: "weight",
        val: w,
        label: `Trọng lượng: ${WEIGHT_LABELS[w]}`
      });
    }
  });

  if (chips.length === 0) {
    container.style.display = "none";
    container.innerHTML = "";
    return;
  }

  container.style.display = "flex";
  container.innerHTML =
    chips
      .map(
        (c) => `
      <span class="active-filter-chip">
        <span>${escapeHtml(c.label)}</span>
        <button
          type="button"
          data-remove-filter
          data-filter-type="${escapeHtml(c.type)}"
          data-filter-val="${escapeHtml(c.val)}"
          aria-label="Xóa lọc ${escapeHtml(c.label)}"
          style="font-weight:700; margin-left:2px;"
        >
          ✕
        </button>
      </span>
    `
      )
      .join("") +
    `
    <button
      type="button"
      data-action="clear-all-filters"
      style="font-size:var(--fs-xs); font-weight:700; color:var(--color-error); text-decoration:underline; padding:4px 8px;"
    >
      Xóa tất cả
    </button>
  `;
}
