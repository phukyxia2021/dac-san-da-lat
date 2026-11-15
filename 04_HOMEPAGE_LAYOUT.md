# 04 – Bố cục Trang chủ (Homepage Layout)

Thứ tự section từ trên xuống. Mỗi section có `id` riêng, container tối đa `--container`, khoảng cách dọc giữa các section `--space-12` (mobile) / `--space-16` (desktop).

---

## 1. Topbar & Header (Sticky)

### 1.1 Topbar (thanh thông báo)
- Nền `--color-primary-dark`, chữ trắng, cao ~36px.
- Nội dung xoay vòng (carousel chữ, 4s/lần): "🚚 Freeship đơn từ 499.000₫", "🎁 Giảm 10% đơn đầu tiên", "Giao hàng toàn quốc".
- Có nút đóng (×), nhớ trạng thái đóng trong `sessionStorage`.

### 1.2 Header chính (sticky khi cuộn)
Gồm: **Logo** · **Thanh tìm kiếm thông minh** · **Hotline/Zalo nổi bật** · **Giỏ hàng** · **Mega Menu danh mục**.
- Khi cuộn xuống: header thu gọn nhẹ + đổ bóng.
- **Mobile**: hàng 1 = hamburger + logo + icon tìm kiếm + icon giỏ; thanh tìm kiếm mở rộng toàn chiều ngang khi bấm.

### 1.3 Thanh tìm kiếm thông minh
- Gợi ý **realtime** khi gõ (debounce 250ms), từ 2 ký tự.
- Dropdown tối đa 6 gợi ý, mỗi dòng: **ảnh nhỏ 48×48** + tên (tô đậm phần khớp) + giá.
- Tìm **không phân biệt hoa thường và không dấu** (chuẩn hóa tiếng Việt: "hong treo gio" khớp "Hồng treo gió").
- Điều hướng bàn phím ↑ ↓ Enter Esc; Enter → trang kết quả/danh mục với `?q=`.
- Không có kết quả → "Không tìm thấy… Thử: Hồng treo gió, Atiso, Cà phê".

### 1.4 Hotline / Zalo
Số điện thoại hiển thị rõ (bấm để gọi `tel:`), nút Zalo (`https://zalo.me/<số>`). Số thật để dạng hằng số cấu hình trong `js/config.js` (`HOTLINE`, `ZALO`).

### 1.5 Giỏ hàng (Slide-over Drawer)
Icon giỏ + badge số lượng. Bấm mở drawer (chi tiết ở `05_PAGES_FEATURES.md` mục 4).

### 1.6 Mega Menu
Xem `03_CATEGORIES.md` mục 2.

---

## 2. Hero Section
- **Banner lớn dạng Slider hoặc Bento Grid** (chọn một; ưu tiên Bento Grid trên desktop, slider vuốt được trên mobile).
- Nội dung theo mùa, ví dụ:
  1. "Mùa Hồng Treo Gió Đà Lạt" – ảnh hồng treo gió, mô tả ngắn, nút CTA.
  2. "Bộ Sưu Tập Quà Biếu" – ảnh hộp quà, nút CTA.
  3. (tuỳ chọn) Atiso/Cà phê Cầu Đất.
- **CTA chính: "Khám phá ngay"** (nút nền primary, chữ trắng, cao ≥ 48px), dẫn tới danh mục/section tương ứng.
- Slider: tự chạy 5s, dừng khi hover/chạm, có chấm điều hướng + mũi tên (desktop), hỗ trợ vuốt.
- Tiêu đề dùng `--font-heading`, kích thước `--fs-h1`; chữ phải đọc rõ trên ảnh (overlay gradient tối nhẹ).
- Ảnh hero đầu tiên **không lazy-load** (tối ưu LCP), các ảnh còn lại lazy.

---

## 3. Thanh Cam kết Chất lượng (Trust Badges)
Một hàng 5 mục, icon SVG + tiêu đề ngắn:
1. **100% Chính gốc Đà Lạt**
2. **Chứng nhận OCOP / ATTP**
3. **Không chất bảo quản**
4. **Đổi trả trong 7 ngày**
5. **Giao hàng toàn quốc**

Desktop: 5 cột đều nhau. Mobile: cuộn ngang (scroll-snap) hoặc lưới 2 cột. Nền `--color-surface`, viền trên/dưới `--color-border`.

---

## 4. Flash Sale / Đặc sản theo mùa
- Tiêu đề "Flash Sale" + **đồng hồ đếm ngược** (Ngày : Giờ : Phút : Giây), cập nhật mỗi giây, dựa trên `endsAt`.
- Hết giờ → hiển thị "Đã kết thúc" và tự ẩn/chuyển sang chương trình kế tiếp (không để số âm).
- Danh sách sản phẩm `isFlashSale = true`: mobile = cuộn ngang, desktop = hàng 4 sản phẩm + nút "Xem tất cả".
- Mỗi thẻ có **thanh tiến độ "Đã bán X/Y"** (từ `soldCount`) để tạo cảm giác khan hiếm – chỉ hiển thị dữ liệu có thật/mẫu đã ghi chú.
- Nền section: gradient nhẹ ấm (accent rất nhạt) để tách khỏi phần còn lại.

---

## 5. Kệ sản phẩm theo Danh mục
Lặp lại cho **từng trong 6 danh mục** (hoặc 4 danh mục đầu, có tab chuyển đổi):
- Tiêu đề danh mục + link "Xem tất cả →".
- **Grid: 4 cột desktop, 2 cột mobile** (3 cột tablet), hiển thị 4–8 sản phẩm.

### Product Card – đặc tả
| Thành phần | Hành vi |
|---|---|
| Ảnh sản phẩm | Hover (desktop) chuyển sang ảnh thứ 2 bằng fade; mobile giữ ảnh 1 |
| Nhãn | `-xx%`, `OCOP`, `Bán chạy` (góc trên, xếp dọc, tối đa 2 nhãn) |
| Tên sản phẩm | Tối đa 2 dòng; bấm → trang chi tiết |
| Giá | Giá bán nổi bật + giá gốc gạch ngang; đổi theo quy cách đang chọn |
| Đánh giá | ⭐ 4.8 · Đã bán 1,2k |
| Chọn nhanh quy cách | Chip 250g / 500g / 1kg (chọn 1, mặc định chip đầu) |
| Nút "Thêm vào giỏ" | Thêm đúng variant đang chọn, SL = 1, hiện toast + cập nhật badge giỏ, hiệu ứng bay vào giỏ (tuỳ chọn) |

Trạng thái đặc biệt: hết hàng → nút xám "Hết hàng", chip bị vô hiệu hóa.

---

## 6. Chuyên mục "Gợi ý Quà Biếu Đà Lạt"
Khu vực **thiết kế riêng, sang trọng**, nền xanh thông đậm (`--color-primary-dark`) hoặc kem với viền vàng kim nhạt.
- Tiêu đề serif lớn: "Gợi ý Quà Biếu Đà Lạt".
- Ba thẻ theo **mức ngân sách** (ví dụ ~299k / ~499k / ~899k) – ảnh hộp quà lớn, danh sách món bên trong, nút "Thêm vào giỏ".
- Khối **Quà doanh nghiệp**: "Đặt số lượng lớn – nhận báo giá & ưu đãi", nút "Nhận báo giá qua Zalo" + form rút gọn (Tên công ty, SĐT, Số lượng, Ngân sách) lưu vào LocalStorage (`dld_b2b_leads`) ở giai đoạn thử nghiệm.
- Gợi ý dịp: Tết, 20/10, 20/11, 8/3, Quà tri ân khách hàng, Quà du lịch.
- Tuỳ chọn dịch vụ: thiệp chúc mừng, in logo doanh nghiệp, giao nhiều địa chỉ.

---

## 7. Câu chuyện Thương hiệu (Storytelling)
- Bố cục 2 cột (mobile xếp dọc): ảnh vùng nguyên liệu/nông trại ↔ văn bản.
- Nội dung: vùng nguyên liệu **Đà Lạt – Lâm Đồng** (khí hậu, thổ nhưỡng), quy trình **từ nông trại đến bàn ăn**.
- **Timeline 4 bước** minh họa: Thu hoạch → Chọn lọc → Sấy/Chế biến sạch → Đóng gói & giao hàng.
- Con số nổi bật (counter animation): số năm kinh nghiệm, số nhà vườn đối tác, số khách hàng – **dùng số liệu do chủ shop cung cấp; nếu chưa có, để placeholder rõ ràng `[CẬP NHẬT]`**.
- Nút phụ "Về chúng tôi".

---

## 8. Góc Cẩm nang & Ẩm thực Đà Lạt (Blog)
Lưới 3 bài (mobile: cuộn ngang/1 cột). Mỗi thẻ: ảnh bìa, chuyên mục, tiêu đề, trích đoạn, ngày đăng, "Đọc tiếp".
Chủ đề mẫu:
1. **Cách phân biệt hồng treo gió chuẩn Đà Lạt**
2. **Cách bảo quản đặc sản sấy & trái cây khô**
3. **Kinh nghiệm du lịch & mua quà Đà Lạt**
(+ gợi ý: cách pha trà Atiso, công dụng đông trùng hạ thảo.)

---

## 9. Footer đầy đủ
Nền `--color-primary-dark`, chữ sáng. Gồm các khối:
1. **Thông tin liên hệ**: tên cửa hàng, hotline, Zalo, email, giờ làm việc.
2. **Địa chỉ tại Đà Lạt & các chi nhánh** (danh sách, link bản đồ).
3. **Chính sách**: vận chuyển, đổi trả/bảo hành, thanh toán, bảo mật.
4. **Form đăng ký nhận ưu đãi** (email/SĐT) – validate, lưu LocalStorage (`dld_subscribers`), hiện thông báo cảm ơn.
5. **Mạng xã hội**: Facebook, Zalo, TikTok, YouTube (icon SVG).
6. Dòng bản quyền + logo các phương thức thanh toán.
> Địa chỉ, số điện thoại, đường dẫn MXH là **dữ liệu cấu hình** trong `js/config.js` – dùng giá trị placeholder rõ ràng nếu chưa có.

---

## 10. Thành phần toàn cục
- **Nút liên hệ nổi** (Hotline + Zalo) – xem `05_PAGES_FEATURES.md`.
- Nút "Lên đầu trang" xuất hiện khi cuộn > 600px.
- SEO cơ bản: `<title>`, meta description, Open Graph, dữ liệu có cấu trúc `Organization`.
