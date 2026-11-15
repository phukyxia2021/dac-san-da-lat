# 🌲 Đặc sản Đà Lạt – Bộ tài liệu Vibe Coding (Antigravity)

Bộ file này mô tả đầy đủ website bán hàng **"Đặc sản Đà Lạt"** để AI agent (Antigravity) đọc và xây dựng theo từng bước.

## Danh sách file

| File | Nội dung |
|---|---|
| `01_PROJECT_OVERVIEW.md` | Mục tiêu, đối tượng, phạm vi, cấu trúc thư mục |
| `02_DESIGN_SYSTEM.md` | Màu sắc, typography, spacing, component, UX/CRO, Mobile-first |
| `03_CATEGORIES.md` | 6 nhóm danh mục + sản phẩm + dữ liệu mẫu |
| `04_HOMEPAGE_LAYOUT.md` | Chi tiết từng section trang chủ |
| `05_PAGES_FEATURES.md` | Trang danh mục, chi tiết sản phẩm, giỏ hàng, checkout, nút nổi |
| `06_TECH_SPEC.md` | Công nghệ, LocalStorage, Supabase, logic nghiệp vụ, tiêu chí nghiệm thu |

## Thứ tự làm việc đề xuất (prompt cho từng giai đoạn)

1. **Giai đoạn 1 – Nền tảng:** Đọc `01`, `02`, `06`. Tạo cấu trúc thư mục, `variables.css`, `base.css`, các component dùng chung (header, footer, drawer giỏ hàng, nút nổi).
2. **Giai đoạn 2 – Dữ liệu:** Đọc `03`. Tạo `products.js` (dữ liệu mẫu, quét ảnh có sẵn trong thư mục dự án để gắn đúng đường dẫn).
3. **Giai đoạn 3 – Trang chủ:** Đọc `04`. Dựng từng section từ trên xuống.
4. **Giai đoạn 4 – Các trang còn lại:** Đọc `05`. Danh mục + bộ lọc, chi tiết sản phẩm, giỏ hàng, checkout.
5. **Giai đoạn 5 – Kiểm thử:** Rà soát theo checklist nghiệm thu ở cuối `06`.

## Quy tắc chung cho AI agent

- Luôn đọc `02_DESIGN_SYSTEM.md` trước khi viết bất kỳ CSS nào; **không hardcode màu**, dùng CSS variables.
- Chỉ dùng **HTML5, CSS3, JavaScript thuần** (không framework, không thư viện build).
- **Mobile-first**: viết CSS cho mobile trước, mở rộng bằng `min-width`.
- Ảnh sản phẩm và logo **đã có sẵn trong thư mục dự án**: hãy quét thư mục để dùng, không tạo ảnh giả/placeholder nếu ảnh thật tồn tại.
- Nội dung hiển thị bằng **tiếng Việt**, tiền tệ định dạng `120.000₫`.
- Sau mỗi giai đoạn, tự kiểm tra trên viewport 375px và 1280px.
