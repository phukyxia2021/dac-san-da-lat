# 01 – Tổng quan dự án

## 1. Mục tiêu
Xây dựng website thương mại điện tử **"Đặc sản Đà Lạt"** bán nông sản sạch, đặc sản sấy khô, atiso – thảo dược, trà – cà phê và set quà biếu.

- Tạo cảm giác **sạch, đáng tin cậy, mộc mạc nhưng hiện đại**, đậm chất phố núi Đà Lạt.
- **Tối ưu tỷ lệ chuyển đổi (CRO)**: rút ngắn đường từ xem sản phẩm đến đặt hàng.
- **Mobile-first**: phần lớn khách đến từ điện thoại (Facebook, Zalo, TikTok).

## 2. Đối tượng khách hàng
| Nhóm | Nhu cầu | Điều cần thể hiện trên web |
|---|---|---|
| Khách du lịch / người xa quê | Mua đặc sản làm quà | Set quà biếu, giao toàn quốc, đóng gói đẹp |
| Người nội trợ, gia đình | Ăn vặt sạch, tốt cho sức khỏe | Nguồn gốc, thành phần, không chất bảo quản |
| Doanh nghiệp | Quà Tết / Lễ số lượng lớn | Khu quà doanh nghiệp, liên hệ báo giá |
| Người quan tâm sức khỏe | Atiso, thảo dược, bột rau củ | Công dụng, hướng dẫn sử dụng |

## 3. Phạm vi (Scope)
**Có trong phạm vi:**
- Trang chủ, trang danh mục + bộ lọc, trang chi tiết sản phẩm, giỏ hàng (drawer) + checkout 1 bước, nút liên hệ nổi.
- Tìm kiếm, lọc, chọn quy cách, giỏ hàng, đặt hàng thử nghiệm – **hoạt động đầy đủ, lưu LocalStorage**.
- Blog/cẩm nang (hiển thị danh sách trên trang chủ, có trang bài viết đơn giản).

**Ngoài phạm vi (giai đoạn này):**
- Backend thật, thanh toán thật, đăng nhập tài khoản.
- **Supabase đã có sẵn, sẽ cập nhật sau** → chỉ chuẩn bị lớp truy cập dữ liệu để dễ thay thế (xem `06_TECH_SPEC.md`).

## 4. Cấu trúc thư mục đề xuất
```
/
├── index.html                  # Trang chủ
├── category.html               # Trang danh mục + bộ lọc (?cat=slug)
├── product.html                # Chi tiết sản phẩm (?slug=...)
├── checkout.html               # Thanh toán 1 bước
├── order-success.html          # Xác nhận đơn hàng
├── blog.html / blog-post.html  # Cẩm nang (tuỳ chọn)
├── css/
│   ├── variables.css           # Design tokens
│   ├── base.css                # Reset + typography
│   ├── components.css          # Button, card, badge, drawer...
│   └── pages.css               # Style riêng từng trang
├── js/
│   ├── data/products.js        # Dữ liệu sản phẩm mẫu
│   ├── services/dataService.js # Lớp truy cập dữ liệu (local ↔ Supabase)
│   ├── store/cart.js           # Logic giỏ hàng + LocalStorage
│   ├── ui/                     # header, search, drawer, countdown, filter...
│   └── main.js
└── assets/                     # Ảnh, logo CÓ SẴN (giữ nguyên đường dẫn hiện tại)
```
> Nếu thư mục ảnh/logo hiện có đã có cấu trúc riêng, **giữ nguyên** và tham chiếu đúng đường dẫn đó.

## 5. Chỉ số thành công (CRO)
- Từ trang chủ → thêm giỏ hàng trong **≤ 2 thao tác**.
- Checkout hoàn tất trong **1 trang, ≤ 5 trường bắt buộc**.
- Điểm Lighthouse Mobile: Performance ≥ 85, Accessibility ≥ 90.
