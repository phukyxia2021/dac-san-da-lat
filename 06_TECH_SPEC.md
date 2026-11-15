# 06 – Yêu cầu Kỹ thuật

## 1. Công nghệ
- **HTML5, CSS3, JavaScript thuần (Vanilla JS, ES Modules)**. Không React/Vue/jQuery/Tailwind, không bước build.
- Chạy được bằng cách mở qua server tĩnh đơn giản (vd. `npx serve`, Live Server). Lưu ý ES Modules cần chạy qua HTTP, không mở trực tiếp `file://`.
- Font: Google Fonts (Playfair Display + Inter, subset Vietnamese).
- Icon: SVG inline.

## 2. Nguồn tài nguyên có sẵn
- **Hình ảnh sản phẩm và logo đã có sẵn trong thư mục dự án** → agent phải *khám phá thư mục trước*, liệt kê file, rồi ánh xạ vào dữ liệu sản phẩm. Không tải ảnh từ Internet, không tự tạo ảnh.
- **Supabase đã có sẵn, sẽ cập nhật sau** → xem mục 4.

## 3. Tương tác bắt buộc (hoạt động hoàn chỉnh, lưu LocalStorage)

| Tính năng | Yêu cầu |
|---|---|
| **Tìm kiếm** | Gợi ý realtime có ảnh nhỏ, không phân biệt dấu/hoa thường |
| **Lọc theo danh mục / giá** | Kèm lọc nhu cầu, trọng lượng, sắp xếp; đồng bộ URL |
| **Chọn trọng lượng** | Đổi giá tức thì trên thẻ và trang chi tiết |
| **Giỏ hàng** | Thêm / xoá / tăng / giảm số lượng, cộng dồn cùng variant, lưu bền vững |
| **Đặt hàng thử nghiệm** | Validate, tính ship, lưu đơn, xóa giỏ, trang xác nhận |
| **Countdown Flash Sale** | Đếm ngược chính xác, xử lý hết hạn |

### 3.1 Khóa LocalStorage
| Key | Nội dung |
|---|---|
| `dld_cart` | `[{ productId, variantId, qty }]` – chỉ lưu ID + số lượng, **giá lấy lại từ dữ liệu sản phẩm** khi hiển thị (tránh giá lỗi thời) |
| `dld_orders` | Danh sách đơn đã đặt thử nghiệm |
| `dld_checkout_draft` | Nháp thông tin form checkout (tuỳ chọn, không lưu dữ liệu thanh toán nhạy cảm) |
| `dld_subscribers` | Email/SĐT đăng ký ưu đãi |
| `dld_b2b_leads` | Yêu cầu báo giá quà doanh nghiệp |
| `dld_recent_search` | Từ khóa tìm kiếm gần đây (tuỳ chọn) |

Quy tắc:
- Mọi truy cập LocalStorage bọc `try/catch` (chế độ riêng tư có thể chặn) và có fallback bộ nhớ tạm.
- Có **phiên bản schema** (`dld_schema_version`) để di chuyển dữ liệu về sau.
- Khi tải trang, **dọn dữ liệu giỏ hàng không hợp lệ** (sản phẩm/variant không còn tồn tại, qty ≤ 0).
- Đồng bộ giữa các tab qua sự kiện `storage`.

## 4. Lớp truy cập dữ liệu (chuẩn bị cho Supabase)

Toàn bộ UI **chỉ gọi qua `dataService`**, không import trực tiếp `products.js`:

```js
// js/services/dataService.js
export async function getCategories() {}
export async function getProducts({ categorySlug, q, filters, sort, page, pageSize }) {}
export async function getProductBySlug(slug) {}
export async function getFlashSaleProducts() {}
export async function getBlogPosts({ limit }) {}
export async function createOrder(order) {}   // hiện tại: lưu LocalStorage
```

- Cấu hình `js/config.js`: `DATA_SOURCE: "local" | "supabase"`, `SUPABASE_URL`, `SUPABASE_ANON_KEY` (để trống, sẽ điền sau).
- Triển khai `local` (đọc `products.js`) **hoạt động ngay**; để sẵn khung `supabase` (dùng `fetch` REST hoặc `@supabase/supabase-js` qua ESM CDN) với `TODO` rõ ràng.
- Gợi ý bảng Supabase (khi cập nhật sau): `categories`, `products`, `product_variants`, `orders`, `order_items`, `blog_posts`. **Bảo mật**: chỉ dùng *anon key* ở client và bật Row Level Security; tuyệt đối không đưa `service_role` key vào mã frontend.
- Các hàm trả về cùng một cấu trúc dữ liệu như mục `03_CATEGORIES.md` để đổi nguồn không phải sửa UI.

## 5. Hiệu năng
- Ảnh: `loading="lazy"`, `decoding="async"`, khai báo `width/height`; ảnh Hero đầu tiên ưu tiên tải (`fetchpriority="high"`).
- CSS/JS tách file, không chặn render (`defer` / `type="module"`).
- Render danh sách bằng `DocumentFragment` / template literal, tránh reflow lặp.
- Mục tiêu Lighthouse Mobile: Performance ≥ 85, Accessibility ≥ 90, Best Practices ≥ 90, SEO ≥ 90.

## 6. Bảo mật phía client
- **Không dùng `innerHTML` với dữ liệu người dùng nhập** (họ tên, ghi chú, từ khóa tìm kiếm) – dùng `textContent` hoặc hàm escape để tránh XSS.
- Validate dữ liệu form ở client (và sẽ validate lại ở server/Supabase khi chạy thật).
- Không lưu thông tin thẻ/tài khoản nhạy cảm vào LocalStorage.

## 7. SEO & chia sẻ
- Mỗi trang có `<title>`, `meta description`, thẻ Open Graph/Twitter Card.
- Trang sản phẩm cập nhật `title` và dữ liệu cấu trúc JSON-LD `Product` (giá, tình trạng, đánh giá) theo sản phẩm đang xem.
- `lang="vi"` trên thẻ `<html>`, favicon từ logo có sẵn.

## 8. Tương thích
Chrome, Safari (iOS 15+), Firefox, Edge bản mới; Android Chrome. Kiểm tra viewport 360px, 390px, 768px, 1024px, 1280px.

## 9. Quy ước mã nguồn
- Đặt tên file `kebab-case`, biến/hàm `camelCase`, CSS theo **BEM** (`.product-card__title--sale`).
- Mỗi module một trách nhiệm (cart, search, filter, countdown, drawer…); có comment ngắn tiếng Việt cho logic nghiệp vụ.
- Định dạng tiền: `new Intl.NumberFormat('vi-VN', { style:'currency', currency:'VND' })` → `120.000 ₫`.
- Không dùng `alert()`; dùng toast/modal.

## 10. Checklist nghiệm thu
**Thiết kế**
- [ ] Màu chính `#2D6A4F`, nền `#FAF9F6` dùng qua CSS variables.
- [ ] Tiêu đề font serif, nội dung font sans; dấu tiếng Việt hiển thị đúng.
- [ ] Giao diện đẹp ở 375px và 1280px, không cuộn ngang ngoài ý muốn.

**Trang chủ**
- [ ] Topbar, header sticky, tìm kiếm có gợi ý kèm ảnh, hotline/Zalo, drawer giỏ, mega menu.
- [ ] Hero có CTA "Khám phá ngay"; thanh 5 cam kết; Flash Sale có countdown chạy đúng.
- [ ] Kệ sản phẩm 4 cột desktop / 2 cột mobile; thẻ sản phẩm đủ thành phần (hover ảnh 2, nhãn, giá, sao, chip quy cách, nút thêm giỏ).
- [ ] Quà biếu, Storytelling, Blog, Footer đầy đủ.

**Chức năng**
- [ ] 6 danh mục đúng tên, đủ sản phẩm theo `03_CATEGORIES.md`.
- [ ] Lọc giá (3 mức), nhu cầu, trọng lượng, sắp xếp hoạt động và giữ qua refresh.
- [ ] Chi tiết sản phẩm: gallery, đổi variant → đổi giá, 5 mục thông tin.
- [ ] Giỏ hàng: thêm/xoá/tăng/giảm, cộng dồn, lưu LocalStorage, giữ sau refresh.
- [ ] Checkout 1 bước: validate, tính ship, 3 phương thức thanh toán, tạo đơn thử nghiệm, xóa giỏ.
- [ ] Nút nổi Hotline + Zalo hiển thị ở mọi trang.

**Kỹ thuật**
- [ ] Không lỗi console; không dùng thư viện ngoài ngoài Google Fonts.
- [ ] Mọi dữ liệu đi qua `dataService`; đổi `DATA_SOURCE` không cần sửa UI.
- [ ] Không có key bí mật trong mã nguồn.
