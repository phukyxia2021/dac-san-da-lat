# 02 – Design System (UI/UX & Branding)

## 1. Cảm xúc thiết kế
**Mộc mạc – Đáng tin cậy – Phố núi Đà Lạt – Hiện đại.**
Nhiều khoảng trắng, ảnh sản phẩm là nhân vật chính, góc bo mềm, bóng đổ nhẹ, hiệu ứng chuyển động tinh tế (không lòe loẹt).

## 2. Màu sắc (CSS Variables)

| Token | Mã màu | Vai trò |
|---|---|---|
| `--color-primary` | `#2D6A4F` | Xanh lá thông Đà Lạt – nút chính, link, nhấn mạnh |
| `--color-bg` | `#FAF9F6` | Trắng kem ấm – nền trang |

Các màu phụ (dẫn xuất, hài hòa với 2 màu chính):

```css
:root {
  /* Thương hiệu */
  --color-primary: #2D6A4F;
  --color-primary-dark: #1B4332;   /* hover, footer */
  --color-primary-light: #D8F3DC;  /* nền nhẹ, badge */
  --color-bg: #FAF9F6;
  --color-surface: #FFFFFF;        /* thẻ, drawer, modal */

  /* Nhấn (dùng tiết chế) */
  --color-accent: #D97706;         /* màu hồng treo gió / CTA phụ, countdown */
  --color-sale: #C0392B;           /* nhãn giảm giá */
  --color-star: #F4B400;           /* sao đánh giá */

  /* Chữ & viền */
  --color-text: #1F2937;
  --color-text-muted: #6B7280;
  --color-border: #E8E4DC;

  /* Trạng thái */
  --color-success: #2D6A4F;
  --color-error: #B91C1C;
}
```

**Quy tắc dùng màu**
- Tỷ lệ ~ 60% nền kem/trắng, 30% chữ/ảnh, 10% xanh thông + accent.
- Nút CTA chính (Thêm vào giỏ, Đặt hàng): nền `--color-primary`, chữ trắng.
- Nút phụ: viền `--color-primary`, nền trong suốt.
- Nhãn giảm giá: `--color-sale`; nhãn "OCOP": `--color-primary-light` + chữ `--color-primary-dark`; "Bán chạy": `--color-accent`.
- Tương phản chữ/nền tối thiểu **4.5:1** (WCAG AA).

## 3. Typography

| Vai trò | Font | Fallback |
|---|---|---|
| Tiêu đề (H1–H3, tên thương hiệu, số liệu nổi bật) | **Playfair Display** (hoặc Merriweather) | `Georgia, serif` |
| Nội dung, nút, form, menu | **Inter** (hoặc Plus Jakarta Sans) | `system-ui, sans-serif` |

- Tải từ Google Fonts với `subset=vietnamese,latin`, `display=swap`.
- **Bắt buộc hỗ trợ tiếng Việt** – kiểm tra dấu hiển thị đúng ở mọi cỡ chữ.

```css
:root {
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;

  --fs-h1: clamp(2rem, 5vw, 3.5rem);
  --fs-h2: clamp(1.5rem, 3.5vw, 2.25rem);
  --fs-h3: clamp(1.15rem, 2.5vw, 1.5rem);
  --fs-body: 1rem;        /* 16px, không nhỏ hơn trên mobile */
  --fs-small: 0.875rem;
  --lh-body: 1.6;
  --lh-heading: 1.25;
}
```

## 4. Spacing, bo góc, bóng đổ
```css
:root {
  --space-1: 4px;  --space-2: 8px;  --space-3: 12px; --space-4: 16px;
  --space-6: 24px; --space-8: 32px; --space-12: 48px; --space-16: 64px;

  --radius-sm: 8px; --radius-md: 12px; --radius-lg: 20px; --radius-pill: 999px;

  --shadow-sm: 0 1px 3px rgba(31,41,55,.08);
  --shadow-md: 0 6px 20px rgba(31,41,55,.10);
  --shadow-lg: 0 16px 40px rgba(31,41,55,.14);

  --container: 1200px;
  --header-h: 72px;
}
```

## 5. Breakpoints (Mobile-first)
| Tên | `min-width` | Ghi chú |
|---|---|---|
| mobile | mặc định | 360–480px là chuẩn thiết kế |
| tablet | 768px | grid sản phẩm 3 cột |
| desktop | 1024px | grid sản phẩm **4 cột**, hiện Mega Menu |
| wide | 1280px | container 1200px |

Grid sản phẩm: **2 cột (mobile) → 3 cột (tablet) → 4 cột (desktop)**.

## 6. Component chuẩn

### 6.1 Button
- Cao tối thiểu **44px** (vùng chạm mobile), bo `--radius-pill` hoặc `--radius-md`.
- Trạng thái: default / hover (tối hơn) / active (nhấn xuống 1px) / disabled / loading.

### 6.2 Product Card
Cấu trúc bắt buộc (xem chi tiết hành vi ở `04_HOMEPAGE_LAYOUT.md`):
- Ảnh tỷ lệ **1:1** hoặc 4:5, `loading="lazy"`, hover đổi sang ảnh thứ 2 (desktop).
- Nhãn góc trên: `-xx%`, `OCOP`, `Bán chạy`.
- Tên (tối đa 2 dòng, cắt `...`), giá bán (đậm, màu primary) + giá gốc (gạch ngang, xám).
- ⭐ điểm + "Đã bán 1,2k".
- Chọn nhanh quy cách (chip 250g / 500g / 1kg) + nút **Thêm vào giỏ**.

### 6.3 Badge / Chip / Tag
Bo pill, cỡ chữ 12–13px, padding 4px 10px.

### 6.4 Drawer giỏ hàng, Modal, Toast
- Drawer trượt từ phải, rộng 100% mobile / 420px desktop, có overlay mờ, khóa scroll nền.
- Toast thông báo "Đã thêm vào giỏ hàng" tự tắt sau 2.5s.

### 6.5 Form
Label rõ ràng phía trên input, input cao 48px, hiển thị lỗi inline màu `--color-error`, dùng `inputmode="tel"` cho số điện thoại.

## 7. Hình ảnh & Icon
- Dùng ảnh/logo **có sẵn trong thư mục dự án**.
- Định dạng ưu tiên WebP nếu có; luôn có `alt` tiếng Việt mô tả sản phẩm; đặt `width`/`height` để tránh nhảy layout (CLS).
- Icon: dùng SVG inline (đơn giản, nét mảnh, màu kế thừa `currentColor`).
- Họa tiết nhẹ gợi Đà Lạt (đồi thông, sương mù) có thể dùng làm nền mờ ở Hero/Storytelling, không lấn át nội dung.

## 8. Chuyển động (Motion)
- Thời gian 150–300ms, easing `ease-out`.
- Hiệu ứng: fade-up nhẹ khi cuộn vào view, hover nâng thẻ 2–4px, zoom ảnh 1.04.
- Tôn trọng `prefers-reduced-motion: reduce` (tắt animation).

## 9. Nguyên tắc UX & CRO
1. **Trust sớm**: thanh cam kết ngay dưới Hero; hiển thị OCOP/ATTP, đổi trả 7 ngày gần giá và nút mua.
2. **Giảm ma sát**: chọn quy cách ngay trên thẻ, không phải vào trang chi tiết; checkout 1 bước, ít trường.
3. **Khan hiếm & cấp bách có thật**: countdown Flash Sale, số lượng đã bán.
4. **Phản hồi tức thì**: cập nhật giá khi đổi quy cách, toast + mở drawer khi thêm giỏ.
5. **Thanh mua hàng dính (sticky) trên mobile** ở trang chi tiết: giá + nút "Thêm vào giỏ" / "Mua ngay".
6. **Hỗ trợ nhanh**: Hotline/Zalo luôn hiện diện (nút nổi + header).
7. **Miễn phí vận chuyển**: thanh tiến độ "Mua thêm X₫ để được freeship" trong giỏ hàng.

## 10. Accessibility
- Điều hướng bằng bàn phím, `:focus-visible` rõ ràng (viền 2px primary).
- Dùng thẻ ngữ nghĩa (`header`, `nav`, `main`, `section`, `footer`), `aria-label` cho nút icon, `aria-expanded` cho menu/drawer.
- Kích thước vùng chạm ≥ 44×44px.
