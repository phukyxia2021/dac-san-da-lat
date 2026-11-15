// Cấu hình toàn cục cho website Đặc sản Đà Lạt
// Mọi thông tin liên hệ, vận chuyển, thanh toán và kết nối Supabase đều tập trung tại đây

export const CONFIG = {
  // Nguồn dữ liệu: "local" | "supabase"
  DATA_SOURCE: "local",
  SUPABASE_URL: "",
  SUPABASE_ANON_KEY: "",

  // Phiên bản schema LocalStorage
  SCHEMA_VERSION: "1.0.0",

  // Khóa LocalStorage theo đặc tả 06_TECH_SPEC.md
  STORAGE_KEYS: {
    SCHEMA_VERSION: "dld_schema_version",
    CART: "dld_cart",
    ORDERS: "dld_orders",
    CHECKOUT_DRAFT: "dld_checkout_draft",
    SUBSCRIBERS: "dld_subscribers",
    B2B_LEADS: "dld_b2b_leads",
    RECENT_SEARCH: "dld_recent_search",
    TOPBAR_DISMISSED: "dld_topbar_dismissed"
  },

  // Thông tin thương hiệu & Liên hệ
  STORE_NAME: "Đặc sản Đà Lạt",
  STORE_TAGLINE: "Tinh hoa nông sản & đặc sản chính gốc phố núi",
  LOGO_URL: "images/logo/logo_dac_san_da_lat.jpg",
  HOTLINE: "0363087855",
  HOTLINE_DISPLAY: "0363087855",
  ZALO: "0363087855",
  ZALO_URL: "https://zalo.me/0363087855",
  EMAIL: "lienhe@dacsandalat.vn",
  WORKING_HOURS: "07:30 – 21:30 (Tất cả các ngày trong tuần)",

  // Liên kết mạng xã hội
  SOCIAL_LINKS: {
    facebook: "https://facebook.com",
    zalo: "https://zalo.me/0363087855",
    tiktok: "https://tiktok.com",
    youtube: "https://youtube.com"
  },

  // Cấu hình vận chuyển
  SHIPPING: {
    FREESHIP_THRESHOLD: 499000, // Miễn phí vận chuyển cho đơn từ 499.000₫
    DALAT_FEE: 15000,           // Nội tỉnh Lâm Đồng / Đà Lạt: 15.000₫
    DEFAULT_FEE: 30000,         // Các tỉnh thành khác: 30.000₫
    HEAVY_THRESHOLD_G: 5000,    // Đơn trên 5kg phụ thu nhẹ
    HEAVY_EXTRA_PER_KG: 5000
  },

  // Mã giảm giá mẫu
  PROMO_CODES: {
    DALAT10: {
      code: "DALAT10",
      type: "percent",
      value: 10,
      maxDiscount: 150000,
      minOrder: 0,
      description: "Giảm 10% cho đơn hàng đầu tiên (tối đa 150.000₫)"
    },
    FREESHIP: {
      code: "FREESHIP",
      type: "freeship",
      value: 0,
      minOrder: 250000,
      description: "Miễn phí vận chuyển cho đơn từ 250.000₫"
    },
    QUABIEU50: {
      code: "QUABIEU50",
      type: "fixed",
      value: 50000,
      minOrder: 500000,
      description: "Giảm ngay 50.000₫ cho đơn từ 500.000₫"
    }
  },

  // Thông tin thanh toán ngân hàng & Ví điện tử (Placeholder cấu hình)
  PAYMENT_INFO: {
    bankName: "Ngân hàng TMCP Ngoại thương Việt Nam (Vietcombank)",
    bankShortName: "Vietcombank – CN Đà Lạt",
    accountNumber: "0561 000 999 888 [CẬP NHẬT]",
    accountHolder: "CONG TY TNHH DAC SAN DA LAT [CẬP NHẬT]",
    ewalletPhone: "0363087855",
    ewalletHolder: "ĐẶC SẢN ĐÀ LẠT OFFICIAL"
  },

  // Danh sách Tỉnh/Thành phố phục vụ tính phí ship
  PROVINCES: [
    { id: "lam-dong", name: "Lâm Đồng (Đà Lạt, Bảo Lộc...)", isLocal: true },
    { id: "tp-hcm", name: "TP. Hồ Chí Minh", isLocal: false },
    { id: "ha-noi", name: "Hà Nội", isLocal: false },
    { id: "da-nang", name: "Đà Nẵng", isLocal: false },
    { id: "can-tho", name: "Cần Thơ", isLocal: false },
    { id: "hai-phong", name: "Hải Phòng", isLocal: false },
    { id: "khanh-hoa", name: "Khánh Hòa (Nha Trang)", isLocal: false },
    { id: "binh-duong", name: "Bình Dương", isLocal: false },
    { id: "dong-nai", name: "Đồng Nai", isLocal: false },
    { id: "ba-ria-vung-tau", name: "Bà Rịa - Vũng Tàu", isLocal: false },
    { id: "dak-lak", name: "Đắk Lắk", isLocal: false },
    { id: "gia-lai", name: "Gia Lai", isLocal: false },
    { id: "binh-thuan", name: "Bình Thuận", isLocal: false },
    { id: "ninh-thuan", name: "Ninh Thuận", isLocal: false },
    { id: "thua-thien-hue", name: "Thừa Thiên Huế", isLocal: false },
    { id: "quang-nam", name: "Quảng Nam", isLocal: false },
    { id: "nghe-an", name: "Nghệ An", isLocal: false },
    { id: "thanh-hoa", name: "Thanh Hóa", isLocal: false },
    { id: "quang-ninh", name: "Quảng Ninh", isLocal: false },
    { id: "tinh-khac", name: "Tỉnh / Thành phố khác", isLocal: false }
  ]
};
