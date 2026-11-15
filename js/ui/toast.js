// Hiển thị thông báo Toast góc màn hình (Tự động tắt sau 2.5s, không dùng alert)

import { escapeHtml } from "../services/dataService.js";

let containerEl = null;

function ensureContainer() {
  if (containerEl && document.body.contains(containerEl)) return containerEl;
  containerEl = document.createElement("div");
  containerEl.className = "toast-container";
  containerEl.setAttribute("aria-live", "polite");
  document.body.appendChild(containerEl);
  return containerEl;
}

export function showToast(message, { type = "success", duration = 2500 } = {}) {
  const container = ensureContainer();
  const toast = document.createElement("div");
  toast.className = `toast ${type === "error" ? "toast--error" : ""}`;

  const iconSvg =
    type === "error"
      ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`
      : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;

  toast.innerHTML = `
    <span style="color: ${type === "error" ? "var(--color-error)" : "var(--color-primary)"}; flex-shrink:0;">
      ${iconSvg}
    </span>
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(20px)";
    toast.style.transition = "all 200ms ease-out";
    setTimeout(() => toast.remove(), 220);
  }, duration);
}
