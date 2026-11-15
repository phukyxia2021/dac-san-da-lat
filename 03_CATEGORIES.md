# 03 – Cấu trúc Danh mục & Dữ liệu sản phẩm

## 1. Hệ thống 6 danh mục chuẩn

| # | Danh mục | Slug | Sản phẩm thuộc nhóm |
|---|---|---|---|
| 1 | **Đặc sản Đà Lạt chủ lực** | `dac-san-chu-luc` | Hồng treo gió công nghệ Nhật, hồng sấy dẻo, khoai lang mật sấy dẻo, dâu tây sấy, trái cây sấy thập cẩm |
| 2 | **Atiso & Thảo dược quý** | `atiso-thao-duoc` | Cao Atiso, bông Atiso sấy khô, trà túi lọc Atiso, đông trùng hạ thảo |
| 3 | **Trà & Cà phê Phố Núi** | `tra-ca-phe` | Cà phê Arabica Cầu Đất, trà Ô long, trà hoa cúc, trà bồ công anh |
| 4 | **Nông sản tươi & Hạt dinh dưỡng** | `nong-san-hat` | Dâu tây tươi giống Nhật, bơ sáp, hạt Mắc ca Lâm Đồng |
| 5 | **Bột rau củ sấy lạnh** | `bot-rau-cu` | Bột cần tây, bột rau má, bột củ dền nguyên chất |
| 6 | **Set Quà Biếu / Quà Doanh Nghiệp** | `qua-bieu` | Hộp quà thiết kế sang trọng theo ngân sách cho Lễ, Tết |

Mỗi danh mục cần: tên, slug, mô tả ngắn (SEO), ảnh đại diện, icon (cho Mega Menu), thứ tự hiển thị.

## 2. Mega Menu
- Desktop: hover/click "Danh mục" → panel 6 cột (hoặc 3×2), mỗi cột gồm tên danh mục + liệt kê sản phẩm con + 1 ảnh minh họa.
- Mobile: menu hamburger dạng accordion, mỗi danh mục mở ra danh sách sản phẩm con.
- Menu cấp cao: `Trang chủ · Danh mục · Quà biếu · Khuyến mãi · Cẩm nang · Về chúng tôi · Liên hệ`.

## 3. Mô hình dữ liệu (Data Model)

### 3.1 Category
```js
{
  id: "cat-01",
  slug: "dac-san-chu-luc",
  name: "Đặc sản Đà Lạt chủ lực",
  description: "...",
  image: "path/ảnh-danh-mục",
  order: 1
}
```

### 3.2 Product
```js
{
  id: "p-001",
  slug: "hong-treo-gio-da-lat",
  name: "Hồng treo gió Đà Lạt công nghệ Nhật",
  categoryId: "cat-01",
  images: ["path/1.jpg", "path/2.jpg", "..."],   // ảnh [1] dùng cho hover
  badges: ["ocop", "bestseller"],                 // ocop | bestseller | new
  rating: 4.8,
  soldCount: 1250,
  needs: ["an-vat", "tot-suc-khoe", "qua-bieu"],  // dùng cho bộ lọc Nhu cầu
  isFlashSale: false,
  flashSale: { endsAt: "ISO-datetime" },          // chỉ khi isFlashSale = true
  variants: [
    { id: "p-001-250", label: "250g", weightG: 250, price: 120000, originalPrice: 150000, stock: 100 },
    { id: "p-001-500", label: "500g", weightG: 500, price: 230000, originalPrice: 290000, stock: 80 },
    { id: "p-001-1000", label: "1kg",  weightG: 1000, price: 440000, originalPrice: 560000, stock: 50 }
  ],
  shortDescription: "...",
  info: {
    origin: "Nguồn gốc xuất xứ",
    ingredients: "Thành phần",
    usage: "Hướng dẫn sử dụng",
    storage: "Cách bảo quản",
    shelfLife: "Hạn sử dụng"
  },
  createdAt: "ISO-datetime"
}
```
- Giá hiển thị trên thẻ = giá của **variant mặc định** (variant đầu tiên); khi đổi chip quy cách thì cập nhật giá + % giảm.
- `% giảm = round((originalPrice - price) / originalPrice * 100)`.
- Set quà biếu có thể dùng `variants` theo **mức ngân sách** (vd. "Hộp 299k", "Hộp 499k", "Hộp 899k") thay vì trọng lượng.

### 3.3 BlogPost
```js
{ id, slug, title, excerpt, cover, category, publishedAt, content }
```

## 4. Dữ liệu mẫu (seed data)
- Tạo **tối thiểu 3–4 sản phẩm cho mỗi danh mục** (≥ 20 sản phẩm), dùng **tên sản phẩm liệt kê ở mục 1**.
- **Quét thư mục ảnh có sẵn** và ghép đúng ảnh với sản phẩm theo tên file; sản phẩm nào chưa có ảnh thì dùng ảnh logo/placeholder trung tính và ghi chú `TODO` trong code.
- Giá, rating, số lượng đã bán, mô tả là **dữ liệu minh họa** – ghi rõ comment `// DỮ LIỆU MẪU – cập nhật từ Supabase`.
- 4–6 sản phẩm đặt `isFlashSale: true` với `endsAt` luôn ở tương lai (tính từ lúc tải trang, ví dụ +2 ngày) để countdown hoạt động.
- 3 set quà mẫu tương ứng 3 mức ngân sách.

## 5. Nhãn (Badges) – quy tắc hiển thị
| Nhãn | Điều kiện | Kiểu |
|---|---|---|
| `-xx%` | variant đang chọn có `originalPrice > price` | nền `--color-sale`, chữ trắng |
| `OCOP` | `badges` chứa `ocop` | nền `--color-primary-light`, chữ `--color-primary-dark` |
| `Bán chạy` | `badges` chứa `bestseller` hoặc `soldCount` cao | nền `--color-accent`, chữ trắng |

> Chỉ gắn nhãn **OCOP** cho sản phẩm thực sự đạt chứng nhận; dữ liệu mẫu cần được chủ shop xác nhận lại trước khi chạy thật.
