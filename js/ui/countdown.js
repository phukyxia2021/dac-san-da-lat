// Bộ đếm ngược thời gian thực cho khu vực Flash Sale (Ngày : Giờ : Phút : Giây)

export function initCountdown(containerEl, endsAtISO, onExpire) {
  if (!containerEl || !endsAtISO) return null;

  const targetTime = new Date(endsAtISO).getTime();

  function pad(n) {
    return String(Math.max(0, n)).padStart(2, "0");
  }

  function tick() {
    const now = Date.now();
    const diff = targetTime - now;

    if (diff <= 0) {
      containerEl.innerHTML = `<span class="badge badge--sale">Chương trình đã kết thúc</span>`;
      if (typeof onExpire === "function") onExpire();
      return false;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    containerEl.innerHTML = `
      <div class="countdown__unit">
        <span class="countdown__num">${pad(days)}</span>
        <span class="countdown__label">Ngày</span>
      </div>
      <span class="countdown__sep">:</span>
      <div class="countdown__unit">
        <span class="countdown__num">${pad(hours)}</span>
        <span class="countdown__label">Giờ</span>
      </div>
      <span class="countdown__sep">:</span>
      <div class="countdown__unit">
        <span class="countdown__num">${pad(mins)}</span>
        <span class="countdown__label">Phút</span>
      </div>
      <span class="countdown__sep">:</span>
      <div class="countdown__unit">
        <span class="countdown__num">${pad(secs)}</span>
        <span class="countdown__label">Giây</span>
      </div>
    `;
    return true;
  }

  if (tick()) {
    const intervalId = setInterval(() => {
      if (!tick()) clearInterval(intervalId);
    }, 1000);
    return intervalId;
  }
  return null;
}
