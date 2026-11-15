# 05 – Các Trang & Tính năng quan trọng

## 1. Trang Danh mục & Bộ lọc thông minh (`category.html`)

**URL:** `category.html?cat=<slug>` (không có `cat` = tất cả sản phẩm). Hỗ trợ `?q=` cho kết quả tìm kiếm.

### 1.1 Bố cục
- Breadcrumb: Trang chủ › Danh mục › Tên danh mục.
- Tiêu đề + mô tả ngắn danh mục.
- **Desktop**: cột trái = bộ lọc (sticky), cột phải = lưới sản phẩm 4 cột (hoặc 3 khi có sidebar).
- **Mobile**: nút "Bộ lọc" mở **bottom-sheet/drawer**, có nút "Áp dụng" và "Xóa lọc"; lưới 2 cột.
- Hiển thị số kết quả: "Hiển thị 12 sản phẩm".
- Phân trang hoặc nút "Xem thêm" (load thêm 12 sản phẩm/lần).

### 1.2 Bộ lọc
| Nhóm lọc | Lựa chọn | Kiểu |
|---|---|---|
| **Khoảng giá** | Dưới 100k · 100k – 300k · Trên 300k | Radio (1 lựa chọn) |
| **Nhu cầu** | Ăn vặt · Tốt cho sức khỏe · Quà biếu cao cấp | Checkbox (nhiều) |
| **Trọng lượng** | 250g · 500g · 1kg | Checkbox |
| **Danh mục** | 6 danh mục | Checkbox/liên kết |

Quy tắc:
- Lọc theo giá dựa trên **giá thấp nhất của sản phẩm** (hoặc giá variant đang khớp trọng lượng nếu có chọn trọng lượng).
- Các nhóm lọc kết hợp bằng **AND**; trong cùng nhóm checkbox kết hợp bằng **OR**.
- Lọc tức thì, không tải lại trang; cập nhật URL query (`history.replaceState`) để chia sẻ/refresh vẫn giữ lọc.
- Hiển thị **chip bộ lọc đang áp dụng** (có nút × xóa từng chip) và nút "Xóa tất cả".
- Không có kết quả → trạng thái rỗng thân thiện + gợi ý sản phẩm bán chạy.

### 1.3 Sắp xếp
`Bán chạy nhất` (mặc định, theo `soldCount` giảm dần) · `Giá thấp đến cao` · `Giá cao đến thấp` · `Mới nhất` (tuỳ chọn).

---

## 2. Trang Chi tiết Sản phẩm (`product.html?slug=...`)

### 2.1 Cột trái – Thư viện ảnh trực quan
- Ảnh lớn + dải thumbnail; bấm thumbnail đổi ảnh lớn.
- Desktop: zoom khi hover; Mobile: vuốt ngang đổi ảnh, hiển thị chỉ số "2/5".
- Bấm ảnh mở lightbox toàn màn hình (tuỳ chọn).

### 2.2 Cột phải – Thông tin mua hàng
- Breadcrumb, tên sản phẩm (serif), ⭐ đánh giá, đã bán, nhãn OCOP.
- **Tuỳ chọn biến thể trọng lượng/đóng gói** (chip/radio): chọn → **tự động cập nhật giá bán, giá gốc, % giảm, tình trạng kho**.
- Bộ chọn số lượng (− / số / +), min 1, max = tồn kho.
- Nút **Thêm vào giỏ** (chính) và **Mua ngay** (thêm giỏ + chuyển checkout).
- Khối cam kết mini: Chính gốc Đà Lạt · Đổi trả 7 ngày · Giao toàn quốc.
- Chia sẻ (copy link / Zalo / Facebook).

### 2.3 Thông tin chi tiết (Tabs hoặc Accordion – mobile dùng accordion)
Phải hiển thị **rõ ràng** 5 mục:
1. **Nguồn gốc xuất xứ**
2. **Thành phần**
3. **Hướng dẫn sử dụng**
4. **Cách bảo quản**
5. **Hạn sử dụng**

Kèm tab "Mô tả sản phẩm" và "Đánh giá" (dữ liệu mẫu).

### 2.4 Khu vực bổ trợ
- **Sản phẩm liên quan** (cùng danh mục, 4 sản phẩm).
- **Thanh mua hàng dính (sticky bar) ở mobile**: tên/giá + nút "Thêm vào giỏ".
- Không tìm thấy slug → trang 404 thân thiện với link về trang chủ.

---

## 3. Nút liên hệ nổi (Floating Action Buttons)
- Cố định **góc dưới** màn hình (phải), xếp dọc: **Gọi Hotline** (`tel:`) và **Chat Zalo** (`https://zalo.me/...`).
- Kích thước 52–56px, có hiệu ứng "pulse" nhẹ; tuân thủ `prefers-reduced-motion`.
- Không che nút CTA: trên trang chi tiết (mobile) đẩy lên trên sticky bar.
- `aria-label` rõ ràng: "Gọi hotline", "Chat Zalo".

---

## 4. Giỏ hàng – Slide-over Drawer
- Mở khi: bấm icon giỏ **hoặc** vừa thêm sản phẩm (kèm toast).
- Mỗi dòng: ảnh nhỏ, tên, **quy cách**, đơn giá, bộ chọn **− / số lượng / +**, thành tiền, nút **Xóa**.
- Chức năng bắt buộc: **Thêm / Xóa / Tăng / Giảm số lượng** hoạt động chính xác; giảm về 0 → hỏi xác nhận hoặc xóa dòng.
- **Cộng dồn** khi thêm cùng sản phẩm + cùng variant (không tạo dòng trùng).
- Hiển thị: Tạm tính, **thanh tiến độ freeship** ("Mua thêm 120.000₫ để được miễn phí vận chuyển"), nút **Thanh toán**, link "Tiếp tục mua sắm".
- Giỏ trống: minh họa + gợi ý sản phẩm bán chạy.
- Badge số lượng trên icon giỏ luôn đồng bộ.
- Trạng thái được lưu **LocalStorage**, đồng bộ giữa các tab (lắng nghe sự kiện `storage`).

---

## 5. Thanh toán – Checkout 1 bước (`checkout.html`)

### 5.1 Bố cục
- Mobile: 1 cột (tóm tắt đơn thu gọn ở trên, form ở dưới). Desktop: 2 cột (form trái, tóm tắt đơn phải – sticky).

### 5.2 Form đặt hàng tối giản
| Trường | Bắt buộc | Quy tắc kiểm tra |
|---|---|---|
| Họ tên | ✔ | ≥ 2 ký tự |
| Số điện thoại | ✔ | Số VN: `^(0\|\+84)(3\|5\|7\|8\|9)\d{8}$` |
| Địa chỉ nhận hàng | ✔ | Tỉnh/Thành, Quận/Huyện, địa chỉ chi tiết (có thể 1 ô + chọn Tỉnh/Thành) |
| **Ghi chú quà tặng** | – | Tuỳ chọn: lời chúc in thiệp, "giao ẩn giá", người nhận khác |

### 5.3 Phí vận chuyển – tự động tính
- Tính theo **Tỉnh/Thành** và/hoặc **tổng trọng lượng** đơn hàng (bảng phí cấu hình trong `js/config.js`).
- Ví dụ quy tắc mẫu (có thể chỉnh): nội thành Đà Lạt 15.000₫ · các tỉnh khác 30.000₫ · **miễn phí khi đơn ≥ 499.000₫**.
- Cập nhật tức thì khi đổi tỉnh/thành hoặc số lượng; hiển thị rõ dòng "Phí vận chuyển".

### 5.4 Phương thức thanh toán (chọn 1)
- **COD** – Thanh toán khi nhận hàng.
- **Chuyển khoản ngân hàng** – hiển thị thông tin tài khoản + nội dung chuyển khoản (mã đơn) + ô copy.
- **Ví điện tử** (MoMo / ZaloPay / VNPay) – ở giai đoạn thử nghiệm chỉ hiển thị hướng dẫn/mã QR minh họa.
> Thông tin tài khoản/QR là **placeholder cấu hình**, không dùng số tài khoản thật cho tới khi chủ shop cung cấp.

### 5.5 Tóm tắt đơn
Danh sách sản phẩm, Tạm tính, Phí ship, Giảm giá (nếu có mã), **Tổng cộng**; ô nhập mã giảm giá (mã mẫu `DALAT10` giảm 10%).

### 5.6 Đặt hàng thử nghiệm
- Nút **"Đặt hàng"** (chống bấm đúp, có trạng thái loading).
- Validate → lỗi hiển thị inline và cuộn tới trường lỗi đầu tiên.
- Thành công: sinh **mã đơn** (vd. `DLD-YYMMDD-XXXX`), lưu đơn vào LocalStorage (`dld_orders`), **xóa giỏ hàng**, chuyển sang `order-success.html?code=...` hiển thị chi tiết đơn + hướng dẫn thanh toán theo phương thức đã chọn.
- Ghi chú trên trang: "Đây là đơn đặt hàng thử nghiệm" (bỏ khi chạy thật).

---

## 6. Trang phụ (đơn giản)
- `blog.html`, `blog-post.html` – danh sách và bài viết (từ dữ liệu mẫu).
- Trang chính sách (vận chuyển, đổi trả, bảo mật) – nội dung placeholder rõ ràng.
- Trang 404.
