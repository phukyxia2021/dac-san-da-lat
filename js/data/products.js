// DỮ LIỆU MẪU – cập nhật từ Supabase
// Tự động ánh xạ từ database/categories.csv, database/products.csv và thư mục images/
// Tổng số sản phẩm: 119 sản phẩm thật có sẵn hình ảnh trong dự án

export const CATEGORIES = [
  {
    "id": "cat-01",
    "slug": "dac-san-chu-luc",
    "aliases": [
      "dac-san-da-lat",
      "trai-cay-say-kho",
      "dac-san-viet"
    ],
    "name": "Đặc sản Đà Lạt chủ lực",
    "shortName": "Đặc sản chủ lực",
    "description": "Hồng treo gió công nghệ Nhật, hồng sấy dẻo, khoai lang mật sấy dẻo, dâu tây sấy và trái cây sấy thập cẩm trứ danh phố núi.",
    "image": "images/hong-treo-gio-da-lat.jpg",
    "icon": "persimmon",
    "order": 1,
    "featuredItems": [
      "Hồng treo gió công nghệ Nhật",
      "Hồng sấy dẻo nguyên trái",
      "Khoai lang mật sấy dẻo",
      "Dâu tây sấy dẻo",
      "Trái cây sấy thập cẩm"
    ]
  },
  {
    "id": "cat-02",
    "slug": "atiso-thao-duoc",
    "aliases": [
      "atiso",
      "thao-duoc"
    ],
    "name": "Atiso & Thảo dược quý",
    "shortName": "Atiso & Thảo dược",
    "description": "Cao mềm Atiso, bông Atiso sấy khô, đông trùng hạ thảo sấy thăng hoa, hồng đẳng sâm và mật ong rừng nguyên chất chăm sóc sức khỏe.",
    "image": "images/cao-atiso-da-lat.jpg",
    "icon": "herb",
    "order": 2,
    "featuredItems": [
      "Cao mềm Atiso Đà Lạt",
      "Bông Atiso sấy khô",
      "Đông trùng hạ thảo",
      "Hồng đẳng sâm mật ong",
      "Sữa ong chúa tươi"
    ]
  },
  {
    "id": "cat-03",
    "slug": "tra-ca-phe",
    "aliases": [
      "do-uong-tra-cafe"
    ],
    "name": "Trà & Cà phê Phố Núi",
    "shortName": "Trà & Cà phê",
    "description": "Cà phê Arabica Cầu Đất rang mộc, trà Atiso túi lọc, trà bồ công anh, trà hoa Atiso đỏ và các dòng nước cốt trái cây lên men.",
    "image": "images/ca-phe-hat-nguyen-chat.jpg",
    "icon": "coffee",
    "order": 3,
    "featuredItems": [
      "Cà phê Arabica Cầu Đất",
      "Trà Atiso túi lọc",
      "Trà Bồ công anh",
      "Trà hoa Atiso đỏ",
      "Nước cốt dâu tằm & dâu tây"
    ]
  },
  {
    "id": "cat-04",
    "slug": "nong-san-hat",
    "aliases": [
      "nong-san-tuoi-sach",
      "trai-cay-dong-lanh"
    ],
    "name": "Nông sản tươi & Hạt dinh dưỡng",
    "shortName": "Nông sản & Hạt",
    "description": "Dâu tây tươi giống Nhật, bơ 034, bơ Booth, hồng giòn, hạt Mắc ca Lâm Đồng, hạt bí Nhật và hạt điều rang củi giàu dưỡng chất.",
    "image": "images/dau-tay-nhat-ban.jpg",
    "icon": "berry",
    "order": 4,
    "featuredItems": [
      "Dâu tây tươi giống Nhật",
      "Bơ sáp 034 & Bơ Booth",
      "Hạt Mắc ca Lâm Đồng",
      "Hồng giòn Đà Lạt",
      "Hạt bí Nhật & Hạt dẻ"
    ]
  },
  {
    "id": "cat-05",
    "slug": "bot-rau-cu",
    "aliases": [
      "bot-rau-cu-qua-say-lanh"
    ],
    "name": "Bột rau củ sấy lạnh",
    "shortName": "Bột rau củ",
    "description": "Bột cần tây, bột rau má, bột củ dền, bột cải xoăn Kale sấy lạnh công nghệ cao giữ trọn 98% enzyme và vitamin tự nhiên.",
    "image": "images/bot-can-tay.jpg",
    "icon": "leaf",
    "order": 5,
    "featuredItems": [
      "Bột cần tây sấy lạnh",
      "Bột rau má nguyên chất",
      "Bột củ dền Đà Lạt",
      "Bột cải xoăn Kale",
      "Bột rau củ Detox"
    ]
  },
  {
    "id": "cat-06",
    "slug": "qua-bieu",
    "aliases": [
      "qua-tet-2027"
    ],
    "name": "Set Quà Biếu / Quà Doanh Nghiệp",
    "shortName": "Set Quà Biếu",
    "description": "Hộp quà đặc sản Đà Lạt thiết kế sang trọng theo ngân sách cho dịp Lễ, Tết, tri ân đối tác và doanh nghiệp kèm dịch vụ in logo.",
    "image": "images/qua-tet-xuan-binh-an.jpg",
    "icon": "gift",
    "order": 6,
    "featuredItems": [
      "Hộp quà Tinh Hoa 04 món",
      "Hộp quà Cao Cấp 06 món",
      "Set Xuân Bình An Thượng Hạng",
      "Hộp Dâu Tây Trái Tim",
      "Quà Doanh Nghiệp in logo"
    ]
  }
];

export const PRODUCTS = [
  {
    "id": "p-001",
    "dbId": 1,
    "slug": "hong-treo-gio-da-lat",
    "name": "Hồng treo gió Đà Lạt công nghệ Nhật (Thượng hạng)",
    "categoryId": "cat-01",
    "dbCategoryId": 1,
    "isContactPrice": false,
    "images": [
      "images/hong-treo-gio-da-lat.jpg",
      "images/hong-treo-gio-500gr.jpg",
      "images/hong-deo-da-lat-nguyen-trai.jpg"
    ],
    "badges": [
      "ocop",
      "bestseller"
    ],
    "rating": 5,
    "soldCount": 987,
    "flashSaleTarget": 1167,
    "needs": [
      "an-vat",
      "qua-bieu"
    ],
    "isFlashSale": true,
    "flashSale": {
      "offsetHours": 48
    },
    "variants": [
      {
        "id": "p-001-250",
        "label": "250g",
        "weightG": 250,
        "price": 170000,
        "originalPrice": 200000,
        "stock": 85
      },
      {
        "id": "p-001-500",
        "label": "500g",
        "weightG": 500,
        "price": 325000,
        "originalPrice": 390000,
        "stock": 60
      },
      {
        "id": "p-001-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 610000,
        "originalPrice": 760000,
        "stock": 40
      }
    ],
    "shortDescription": "Hồng treo gió Đà Lạt công nghệ Nhật (Thượng hạng) được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Hồng treo gió Đà Lạt công nghệ Nhật tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-15T00:00:00.000Z"
  },
  {
    "id": "p-002",
    "dbId": 2,
    "slug": "hong-treo-gio-500gr",
    "name": "Hồng treo gió Đà Lạt (Hộp 500gr)",
    "categoryId": "cat-01",
    "dbCategoryId": 1,
    "isContactPrice": false,
    "images": [
      "images/hong-treo-gio-500gr.jpg",
      "images/hong-kem-treo-gio.jpg",
      "images/hong-say-deo-da-lat.jpg"
    ],
    "badges": [
      "ocop"
    ],
    "rating": 4.9,
    "soldCount": 266,
    "needs": [
      "an-vat",
      "qua-bieu"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-002-250",
        "label": "250g",
        "weightG": 250,
        "price": 315000,
        "originalPrice": 315000,
        "stock": 85
      },
      {
        "id": "p-002-500",
        "label": "500g",
        "weightG": 500,
        "price": 600000,
        "originalPrice": 615000,
        "stock": 60
      },
      {
        "id": "p-002-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 1135000,
        "originalPrice": 1195000,
        "stock": 40
      }
    ],
    "shortDescription": "Hồng treo gió Đà Lạt (Hộp 500gr) được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Hồng treo gió Đà Lạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-14T00:00:00.000Z"
  },
  {
    "id": "p-003",
    "dbId": 3,
    "slug": "hong-deo-da-lat-nguyen-trai",
    "name": "Hồng sấy dẻo Đà Lạt nguyên trái",
    "categoryId": "cat-01",
    "dbCategoryId": 1,
    "isContactPrice": false,
    "images": [
      "images/hong-deo-da-lat-nguyen-trai.jpg",
      "images/hong-say-deo-da-lat.jpg",
      "images/hong-kem-treo-gio.jpg"
    ],
    "badges": [
      "ocop"
    ],
    "rating": 4.8,
    "soldCount": 339,
    "needs": [
      "an-vat",
      "qua-bieu"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-003-250",
        "label": "250g",
        "weightG": 250,
        "price": 110000,
        "originalPrice": 110000,
        "stock": 85
      },
      {
        "id": "p-003-500",
        "label": "500g",
        "weightG": 500,
        "price": 210000,
        "originalPrice": 215000,
        "stock": 60
      },
      {
        "id": "p-003-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 395000,
        "originalPrice": 420000,
        "stock": 40
      }
    ],
    "shortDescription": "Hồng sấy dẻo Đà Lạt nguyên trái được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Hồng sấy dẻo Đà Lạt nguyên trái tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-13T00:00:00.000Z"
  },
  {
    "id": "p-004",
    "dbId": 4,
    "slug": "hong-say-deo-da-lat",
    "name": "Hồng sấy dẻo Đà Lạt thái miếng",
    "categoryId": "cat-01",
    "dbCategoryId": 1,
    "isContactPrice": false,
    "images": [
      "images/hong-say-deo-da-lat.jpg",
      "images/hong-deo-da-lat-nguyen-trai.jpg",
      "images/khoai-lang-deo.jpg"
    ],
    "badges": [
      "bestseller"
    ],
    "rating": 4.7,
    "soldCount": 1398,
    "needs": [
      "an-vat"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-004-250",
        "label": "250g",
        "weightG": 250,
        "price": 105000,
        "originalPrice": 125000,
        "stock": 85
      },
      {
        "id": "p-004-500",
        "label": "500g",
        "weightG": 500,
        "price": 200000,
        "originalPrice": 245000,
        "stock": 60
      },
      {
        "id": "p-004-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 380000,
        "originalPrice": 475000,
        "stock": 40
      }
    ],
    "shortDescription": "Hồng sấy dẻo Đà Lạt thái miếng được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Hồng sấy dẻo Đà Lạt thái miếng tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-12T00:00:00.000Z"
  },
  {
    "id": "p-005",
    "dbId": 5,
    "slug": "hong-kem-treo-gio",
    "name": "Hồng kem treo gió Đà Lạt đặc biệt",
    "categoryId": "cat-01",
    "dbCategoryId": 1,
    "isContactPrice": false,
    "images": [
      "images/hong-kem-treo-gio.jpg",
      "images/hong-treo-gio-da-lat.jpg",
      "images/khoai-lang-say-deo-250gr.jpg"
    ],
    "badges": [],
    "rating": 5,
    "soldCount": 485,
    "needs": [
      "an-vat",
      "qua-bieu"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-005-250",
        "label": "250g",
        "weightG": 250,
        "price": 300000,
        "originalPrice": 300000,
        "stock": 85
      },
      {
        "id": "p-005-500",
        "label": "500g",
        "weightG": 500,
        "price": 570000,
        "originalPrice": 585000,
        "stock": 60
      },
      {
        "id": "p-005-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 1080000,
        "originalPrice": 1140000,
        "stock": 40
      }
    ],
    "shortDescription": "Hồng kem treo gió Đà Lạt đặc biệt được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Hồng kem treo gió Đà Lạt đặc biệt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-11T00:00:00.000Z"
  },
  {
    "id": "p-006",
    "dbId": 6,
    "slug": "nuoc-yen-dong-trung-ha-thao",
    "name": "Nước Yến Đông Trùng Hạ Thảo",
    "categoryId": "cat-02",
    "dbCategoryId": 2,
    "isContactPrice": false,
    "images": [
      "images/nuoc-yen-dong-trung-ha-thao.jpg",
      "images/dong-trung-ha-thao-say-thang-hoa-10gr.jpg",
      "images/bong-atiso-tuoi.jpg"
    ],
    "badges": [
      "new"
    ],
    "rating": 4.9,
    "soldCount": 558,
    "needs": [
      "tot-suc-khoe",
      "qua-bieu"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-006-250",
        "label": "250g",
        "weightG": 250,
        "price": 450000,
        "originalPrice": 450000,
        "stock": 85
      },
      {
        "id": "p-006-500",
        "label": "500g",
        "weightG": 500,
        "price": 855000,
        "originalPrice": 880000,
        "stock": 60
      },
      {
        "id": "p-006-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 1620000,
        "originalPrice": 1710000,
        "stock": 40
      }
    ],
    "shortDescription": "Nước Yến Đông Trùng Hạ Thảo chiết xuất từ thảo dược quý canh tác chuẩn sạch tại Đà Lạt – Lâm Đồng, giúp bồi bổ cơ thể, thanh nhiệt, giải độc gan và nâng cao sức đề kháng mỗi ngày.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Nước Yến Đông Trùng Hạ Thảo tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Dùng trực tiếp hoặc pha với nước ấm 70–85°C. Ngon hơn khi thưởng thức vào buổi sáng hoặc sau bữa ăn 30 phút.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-10T00:00:00.000Z"
  },
  {
    "id": "p-007",
    "dbId": 7,
    "slug": "dong-trung-ha-thao-say-thang-hoa-10gr",
    "name": "Đông trùng Hạ Thảo sấy thăng hoa (10gr)",
    "categoryId": "cat-02",
    "dbCategoryId": 1,
    "isContactPrice": false,
    "images": [
      "images/dong-trung-ha-thao-say-thang-hoa-10gr.jpg",
      "images/bong-atiso-tuoi.jpg",
      "images/hong-dang-sam-mat-ong-ngoc-linh.jpg"
    ],
    "badges": [
      "ocop"
    ],
    "rating": 4.8,
    "soldCount": 631,
    "flashSaleTarget": 811,
    "needs": [
      "an-vat",
      "tot-suc-khoe",
      "qua-bieu"
    ],
    "isFlashSale": true,
    "flashSale": {
      "offsetHours": 48
    },
    "variants": [
      {
        "id": "p-007-250",
        "label": "250g",
        "weightG": 250,
        "price": 490000,
        "originalPrice": 539000,
        "stock": 85
      },
      {
        "id": "p-007-500",
        "label": "500g",
        "weightG": 500,
        "price": 930000,
        "originalPrice": 1050000,
        "stock": 60
      },
      {
        "id": "p-007-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 1765000,
        "originalPrice": 2050000,
        "stock": 40
      }
    ],
    "shortDescription": "Đông trùng Hạ Thảo sấy thăng hoa (10gr) chiết xuất từ thảo dược quý canh tác chuẩn sạch tại Đà Lạt – Lâm Đồng, giúp bồi bổ cơ thể, thanh nhiệt, giải độc gan và nâng cao sức đề kháng mỗi ngày.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Đông trùng Hạ Thảo sấy thăng hoa tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Dùng trực tiếp hoặc pha với nước ấm 70–85°C. Ngon hơn khi thưởng thức vào buổi sáng hoặc sau bữa ăn 30 phút.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-09T00:00:00.000Z"
  },
  {
    "id": "p-008",
    "dbId": 8,
    "slug": "hat-mac-ca-lam-dong",
    "name": "Hạt Mắc ca Lâm Đồng nứt vỏ tự nhiên",
    "categoryId": "cat-04",
    "dbCategoryId": 1,
    "isContactPrice": false,
    "images": [
      "images/hat-mac-ca-lam-dong.jpg",
      "images/bo-booth.jpg",
      "images/dau-tay-nhat-ban.jpg"
    ],
    "badges": [
      "ocop",
      "bestseller"
    ],
    "rating": 4.7,
    "soldCount": 1946,
    "flashSaleTarget": 2126,
    "needs": [
      "tot-suc-khoe",
      "qua-bieu"
    ],
    "isFlashSale": true,
    "flashSale": {
      "offsetHours": 48
    },
    "variants": [
      {
        "id": "p-008-250",
        "label": "250g",
        "weightG": 250,
        "price": 105000,
        "originalPrice": 125000,
        "stock": 85
      },
      {
        "id": "p-008-500",
        "label": "500g",
        "weightG": 500,
        "price": 200000,
        "originalPrice": 245000,
        "stock": 60
      },
      {
        "id": "p-008-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 380000,
        "originalPrice": 475000,
        "stock": 40
      }
    ],
    "shortDescription": "Hạt Mắc ca Lâm Đồng nứt vỏ tự nhiên thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Hạt Mắc ca Lâm Đồng nứt vỏ tự nhiên tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-08T00:00:00.000Z"
  },
  {
    "id": "p-009",
    "dbId": 9,
    "slug": "bong-atiso-tuoi",
    "name": "Bông Atiso tươi Đà Lạt loại 1",
    "categoryId": "cat-02",
    "dbCategoryId": 3,
    "isContactPrice": false,
    "images": [
      "images/bong-atiso-tuoi.jpg",
      "images/hong-dang-sam-mat-ong-ngoc-linh.jpg",
      "images/dau-hat-mac-ca.jpg"
    ],
    "badges": [],
    "rating": 5,
    "soldCount": 777,
    "needs": [
      "tot-suc-khoe",
      "qua-bieu"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-009-250",
        "label": "250g",
        "weightG": 250,
        "price": 450000,
        "originalPrice": 450000,
        "stock": 85
      },
      {
        "id": "p-009-500",
        "label": "500g",
        "weightG": 500,
        "price": 855000,
        "originalPrice": 880000,
        "stock": 60
      },
      {
        "id": "p-009-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 1620000,
        "originalPrice": 1710000,
        "stock": 40
      }
    ],
    "shortDescription": "Bông Atiso tươi Đà Lạt loại 1 chiết xuất từ thảo dược quý canh tác chuẩn sạch tại Đà Lạt – Lâm Đồng, giúp bồi bổ cơ thể, thanh nhiệt, giải độc gan và nâng cao sức đề kháng mỗi ngày.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Bông Atiso tươi Đà Lạt loại 1 tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Dùng trực tiếp hoặc pha với nước ấm 70–85°C. Ngon hơn khi thưởng thức vào buổi sáng hoặc sau bữa ăn 30 phút.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-07T00:00:00.000Z"
  },
  {
    "id": "p-010",
    "dbId": 10,
    "slug": "bo-booth",
    "name": "Bơ sáp Booth Đà Lạt già trái",
    "categoryId": "cat-04",
    "dbCategoryId": 3,
    "isContactPrice": false,
    "images": [
      "images/bo-booth.jpg",
      "images/bo-034-da-lat.jpg",
      "images/hong-gion-da-lat.jpg"
    ],
    "badges": [],
    "rating": 4.9,
    "soldCount": 170,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-010-250",
        "label": "250g",
        "weightG": 250,
        "price": 110000,
        "originalPrice": 130000,
        "stock": 85
      },
      {
        "id": "p-010-500",
        "label": "500g",
        "weightG": 500,
        "price": 210000,
        "originalPrice": 255000,
        "stock": 60
      },
      {
        "id": "p-010-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 395000,
        "originalPrice": 495000,
        "stock": 40
      }
    ],
    "shortDescription": "Bơ sáp Booth Đà Lạt già trái thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Bơ sáp Booth Đà Lạt già trái tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-11-06T00:00:00.000Z"
  },
  {
    "id": "p-011",
    "dbId": 11,
    "slug": "dau-tay-nhat-ban",
    "name": "Dâu tây Đà Lạt giống Nhật Bản",
    "categoryId": "cat-04",
    "dbCategoryId": 3,
    "isContactPrice": false,
    "images": [
      "images/dau-tay-nhat-ban.jpg",
      "images/dau-tay-new-zealand.jpg",
      "images/hat-bi-nhat.jpg"
    ],
    "badges": [
      "ocop",
      "bestseller"
    ],
    "rating": 4.8,
    "soldCount": 2357,
    "needs": [
      "tot-suc-khoe",
      "qua-bieu"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-011-250",
        "label": "250g",
        "weightG": 250,
        "price": 120000,
        "originalPrice": 120000,
        "stock": 85
      },
      {
        "id": "p-011-500",
        "label": "500g",
        "weightG": 500,
        "price": 230000,
        "originalPrice": 235000,
        "stock": 60
      },
      {
        "id": "p-011-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 430000,
        "originalPrice": 455000,
        "stock": 40
      }
    ],
    "shortDescription": "Dâu tây Đà Lạt giống Nhật Bản thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Dâu tây Đà Lạt giống Nhật Bản tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-11-05T00:00:00.000Z"
  },
  {
    "id": "p-012",
    "dbId": 12,
    "slug": "khoai-lang-deo",
    "name": "Khoai lang mật sấy dẻo Đà Lạt (300gr)",
    "categoryId": "cat-01",
    "dbCategoryId": 1,
    "isContactPrice": false,
    "images": [
      "images/khoai-lang-deo.jpg",
      "images/khoai-lang-say-deo-250gr.jpg",
      "images/chuoi-laba-say-deo.jpg"
    ],
    "badges": [
      "ocop",
      "bestseller"
    ],
    "rating": 4.7,
    "soldCount": 894,
    "flashSaleTarget": 1074,
    "needs": [
      "an-vat",
      "qua-bieu"
    ],
    "isFlashSale": true,
    "flashSale": {
      "offsetHours": 48
    },
    "variants": [
      {
        "id": "p-012-250",
        "label": "250g",
        "weightG": 250,
        "price": 90000,
        "originalPrice": 105000,
        "stock": 85
      },
      {
        "id": "p-012-500",
        "label": "500g",
        "weightG": 500,
        "price": 170000,
        "originalPrice": 205000,
        "stock": 60
      },
      {
        "id": "p-012-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 325000,
        "originalPrice": 400000,
        "stock": 40
      }
    ],
    "shortDescription": "Khoai lang mật sấy dẻo Đà Lạt (300gr) được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Khoai lang mật sấy dẻo Đà Lạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-04T00:00:00.000Z"
  },
  {
    "id": "p-013",
    "dbId": 13,
    "slug": "khoai-lang-say-deo-250gr",
    "name": "Khoai lang mật sấy dẻo (250gr)",
    "categoryId": "cat-01",
    "dbCategoryId": 1,
    "isContactPrice": false,
    "images": [
      "images/khoai-lang-say-deo-250gr.jpg",
      "images/khoai-lang-deo.jpg",
      "images/khoai-lang-gung.jpg"
    ],
    "badges": [],
    "rating": 5,
    "soldCount": 389,
    "needs": [
      "an-vat"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-013-250",
        "label": "250g",
        "weightG": 250,
        "price": 70000,
        "originalPrice": 85000,
        "stock": 85
      },
      {
        "id": "p-013-500",
        "label": "500g",
        "weightG": 500,
        "price": 135000,
        "originalPrice": 165000,
        "stock": 60
      },
      {
        "id": "p-013-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 250000,
        "originalPrice": 325000,
        "stock": 40
      }
    ],
    "shortDescription": "Khoai lang mật sấy dẻo (250gr) được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Khoai lang mật sấy dẻo tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-03T00:00:00.000Z"
  },
  {
    "id": "p-014",
    "dbId": 14,
    "slug": "chuoi-laba-say-deo",
    "name": "Chuối Laba sấy dẻo Đà Lạt",
    "categoryId": "cat-01",
    "dbCategoryId": 1,
    "isContactPrice": false,
    "images": [
      "images/chuoi-laba-say-deo.jpg",
      "images/khoai-lang-gung.jpg",
      "images/dau-tam-say-deo.jpg"
    ],
    "badges": [],
    "rating": 4.9,
    "soldCount": 462,
    "needs": [
      "an-vat"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-014-250",
        "label": "250g",
        "weightG": 250,
        "price": 75000,
        "originalPrice": 75000,
        "stock": 85
      },
      {
        "id": "p-014-500",
        "label": "500g",
        "weightG": 500,
        "price": 145000,
        "originalPrice": 145000,
        "stock": 60
      },
      {
        "id": "p-014-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 270000,
        "originalPrice": 285000,
        "stock": 40
      }
    ],
    "shortDescription": "Chuối Laba sấy dẻo Đà Lạt được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Chuối Laba sấy dẻo Đà Lạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-02T00:00:00.000Z"
  },
  {
    "id": "p-015",
    "dbId": 15,
    "slug": "khoai-lang-gung",
    "name": "Khoai lang sấy gừng mật ong ấm vị",
    "categoryId": "cat-01",
    "dbCategoryId": 1,
    "isContactPrice": true,
    "images": [
      "images/khoai-lang-gung.jpg",
      "images/dau-tam-say-deo.jpg",
      "images/dau-tay-say-deo.jpg"
    ],
    "badges": [],
    "rating": 4.8,
    "soldCount": 535,
    "needs": [
      "an-vat"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-015-250",
        "label": "250g",
        "weightG": 250,
        "price": 75000,
        "originalPrice": 75000,
        "stock": 85
      },
      {
        "id": "p-015-500",
        "label": "500g",
        "weightG": 500,
        "price": 145000,
        "originalPrice": 145000,
        "stock": 60
      },
      {
        "id": "p-015-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 270000,
        "originalPrice": 285000,
        "stock": 40
      }
    ],
    "shortDescription": "Khoai lang sấy gừng mật ong ấm vị được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Khoai lang sấy gừng mật ong ấm vị tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-01T00:00:00.000Z"
  },
  {
    "id": "p-016",
    "dbId": 16,
    "slug": "hong-gion-da-lat",
    "name": "Hồng giòn Đà Lạt đầu mùa",
    "categoryId": "cat-04",
    "dbCategoryId": 3,
    "isContactPrice": false,
    "images": [
      "images/hong-gion-da-lat.jpg",
      "images/hat-bi-nhat.jpg",
      "images/hat-dieu-rang-muoi.jpg"
    ],
    "badges": [
      "new"
    ],
    "rating": 4.7,
    "soldCount": 608,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-016-250",
        "label": "250g",
        "weightG": 250,
        "price": 55000,
        "originalPrice": 65000,
        "stock": 85
      },
      {
        "id": "p-016-500",
        "label": "500g",
        "weightG": 500,
        "price": 105000,
        "originalPrice": 125000,
        "stock": 60
      },
      {
        "id": "p-016-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 200000,
        "originalPrice": 245000,
        "stock": 40
      }
    ],
    "shortDescription": "Hồng giòn Đà Lạt đầu mùa thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Hồng giòn Đà Lạt đầu mùa tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-10-31T00:00:00.000Z"
  },
  {
    "id": "p-017",
    "dbId": 17,
    "slug": "dau-tam-say-deo",
    "name": "Dâu tằm sấy dẻo Đà Lạt",
    "categoryId": "cat-01",
    "dbCategoryId": 1,
    "isContactPrice": false,
    "images": [
      "images/dau-tam-say-deo.jpg",
      "images/dau-tay-say-deo.jpg",
      "images/chanh-day-say-deo.jpg"
    ],
    "badges": [],
    "rating": 5,
    "soldCount": 681,
    "needs": [
      "an-vat"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-017-250",
        "label": "250g",
        "weightG": 250,
        "price": 80000,
        "originalPrice": 80000,
        "stock": 85
      },
      {
        "id": "p-017-500",
        "label": "500g",
        "weightG": 500,
        "price": 150000,
        "originalPrice": 155000,
        "stock": 60
      },
      {
        "id": "p-017-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 290000,
        "originalPrice": 305000,
        "stock": 40
      }
    ],
    "shortDescription": "Dâu tằm sấy dẻo Đà Lạt được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Dâu tằm sấy dẻo Đà Lạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-30T00:00:00.000Z"
  },
  {
    "id": "p-018",
    "dbId": 18,
    "slug": "dau-tay-say-deo",
    "name": "Dâu tây sấy dẻo Đà Lạt nguyên trái",
    "categoryId": "cat-01",
    "dbCategoryId": 1,
    "isContactPrice": false,
    "images": [
      "images/dau-tay-say-deo.jpg",
      "images/chanh-day-say-deo.jpg",
      "images/thom-say-muoi-ot.jpg"
    ],
    "badges": [
      "bestseller"
    ],
    "rating": 4.9,
    "soldCount": 1716,
    "needs": [
      "an-vat"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-018-250",
        "label": "250g",
        "weightG": 250,
        "price": 95000,
        "originalPrice": 95000,
        "stock": 85
      },
      {
        "id": "p-018-500",
        "label": "500g",
        "weightG": 500,
        "price": 180000,
        "originalPrice": 185000,
        "stock": 60
      },
      {
        "id": "p-018-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 340000,
        "originalPrice": 360000,
        "stock": 40
      }
    ],
    "shortDescription": "Dâu tây sấy dẻo Đà Lạt nguyên trái được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Dâu tây sấy dẻo Đà Lạt nguyên trái tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-29T00:00:00.000Z"
  },
  {
    "id": "p-019",
    "dbId": 19,
    "slug": "chanh-day-say-deo",
    "name": "Chanh dây sấy dẻo Đà Lạt",
    "categoryId": "cat-01",
    "dbCategoryId": 1,
    "isContactPrice": false,
    "images": [
      "images/chanh-day-say-deo.jpg",
      "images/thom-say-muoi-ot.jpg",
      "images/thom-say-deo-gung-mat-ong.jpg"
    ],
    "badges": [],
    "rating": 4.8,
    "soldCount": 147,
    "needs": [
      "an-vat"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-019-250",
        "label": "250g",
        "weightG": 250,
        "price": 80000,
        "originalPrice": 95000,
        "stock": 85
      },
      {
        "id": "p-019-500",
        "label": "500g",
        "weightG": 500,
        "price": 150000,
        "originalPrice": 185000,
        "stock": 60
      },
      {
        "id": "p-019-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 290000,
        "originalPrice": 360000,
        "stock": 40
      }
    ],
    "shortDescription": "Chanh dây sấy dẻo Đà Lạt được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Chanh dây sấy dẻo Đà Lạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-28T00:00:00.000Z"
  },
  {
    "id": "p-020",
    "dbId": 20,
    "slug": "thom-say-muoi-ot",
    "name": "Thơm sấy muối ớt dẻo cay",
    "categoryId": "cat-01",
    "dbCategoryId": 4,
    "isContactPrice": false,
    "images": [
      "images/thom-say-muoi-ot.jpg",
      "images/thom-say-deo-gung-mat-ong.jpg",
      "images/xoai-say-deo.jpg"
    ],
    "badges": [],
    "rating": 4.7,
    "soldCount": 220,
    "needs": [
      "an-vat"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-020-250",
        "label": "250g",
        "weightG": 250,
        "price": 80000,
        "originalPrice": 80000,
        "stock": 85
      },
      {
        "id": "p-020-500",
        "label": "500g",
        "weightG": 500,
        "price": 150000,
        "originalPrice": 155000,
        "stock": 60
      },
      {
        "id": "p-020-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 290000,
        "originalPrice": 305000,
        "stock": 40
      }
    ],
    "shortDescription": "Thơm sấy muối ớt dẻo cay được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Thơm sấy muối ớt dẻo cay tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-27T00:00:00.000Z"
  },
  {
    "id": "p-021",
    "dbId": 21,
    "slug": "thom-say-deo-gung-mat-ong",
    "name": "Thơm sấy dẻo gừng mật ong",
    "categoryId": "cat-01",
    "dbCategoryId": 4,
    "isContactPrice": false,
    "images": [
      "images/thom-say-deo-gung-mat-ong.jpg",
      "images/xoai-say-deo.jpg",
      "images/tao-say-deo.jpg"
    ],
    "badges": [
      "new"
    ],
    "rating": 5,
    "soldCount": 293,
    "needs": [
      "an-vat"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-021-250",
        "label": "250g",
        "weightG": 250,
        "price": 80000,
        "originalPrice": 80000,
        "stock": 85
      },
      {
        "id": "p-021-500",
        "label": "500g",
        "weightG": 500,
        "price": 150000,
        "originalPrice": 155000,
        "stock": 60
      },
      {
        "id": "p-021-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 290000,
        "originalPrice": 305000,
        "stock": 40
      }
    ],
    "shortDescription": "Thơm sấy dẻo gừng mật ong được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Thơm sấy dẻo gừng mật ong tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-26T00:00:00.000Z"
  },
  {
    "id": "p-022",
    "dbId": 22,
    "slug": "hat-bi-nhat",
    "name": "Hạt bí Nhật rang mộc giàu dinh dưỡng",
    "categoryId": "cat-04",
    "dbCategoryId": 4,
    "isContactPrice": false,
    "images": [
      "images/hat-bi-nhat.jpg",
      "images/hat-dieu-rang-muoi.jpg",
      "images/hat-de-rung.jpg"
    ],
    "badges": [],
    "rating": 4.9,
    "soldCount": 366,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-022-250",
        "label": "250g",
        "weightG": 250,
        "price": 180000,
        "originalPrice": 210000,
        "stock": 85
      },
      {
        "id": "p-022-500",
        "label": "500g",
        "weightG": 500,
        "price": 340000,
        "originalPrice": 410000,
        "stock": 60
      },
      {
        "id": "p-022-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 650000,
        "originalPrice": 800000,
        "stock": 40
      }
    ],
    "shortDescription": "Hạt bí Nhật rang mộc giàu dinh dưỡng thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Hạt bí Nhật rang mộc giàu dinh dưỡng tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-25T00:00:00.000Z"
  },
  {
    "id": "p-023",
    "dbId": 23,
    "slug": "xoai-say-deo",
    "name": "Xoài sấy dẻo tự nhiên ít đường",
    "categoryId": "cat-01",
    "dbCategoryId": 4,
    "isContactPrice": false,
    "images": [
      "images/xoai-say-deo.jpg",
      "images/tao-say-deo.jpg",
      "images/mang-cau-say-deo.jpg"
    ],
    "badges": [],
    "rating": 4.8,
    "soldCount": 439,
    "needs": [
      "an-vat"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-023-250",
        "label": "250g",
        "weightG": 250,
        "price": 85000,
        "originalPrice": 85000,
        "stock": 85
      },
      {
        "id": "p-023-500",
        "label": "500g",
        "weightG": 500,
        "price": 160000,
        "originalPrice": 165000,
        "stock": 60
      },
      {
        "id": "p-023-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 305000,
        "originalPrice": 325000,
        "stock": 40
      }
    ],
    "shortDescription": "Xoài sấy dẻo tự nhiên ít đường được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Xoài sấy dẻo tự nhiên ít đường tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-24T00:00:00.000Z"
  },
  {
    "id": "p-024",
    "dbId": 24,
    "slug": "tao-say-deo",
    "name": "Táo sấy dẻo thanh ngọt",
    "categoryId": "cat-01",
    "dbCategoryId": 4,
    "isContactPrice": false,
    "images": [
      "images/tao-say-deo.jpg",
      "images/mang-cau-say-deo.jpg",
      "images/khoai-lang-vang-say-soi.jpg"
    ],
    "badges": [],
    "rating": 4.7,
    "soldCount": 512,
    "needs": [
      "an-vat"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-024-250",
        "label": "250g",
        "weightG": 250,
        "price": 80000,
        "originalPrice": 80000,
        "stock": 85
      },
      {
        "id": "p-024-500",
        "label": "500g",
        "weightG": 500,
        "price": 150000,
        "originalPrice": 155000,
        "stock": 60
      },
      {
        "id": "p-024-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 290000,
        "originalPrice": 305000,
        "stock": 40
      }
    ],
    "shortDescription": "Táo sấy dẻo thanh ngọt được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Táo sấy dẻo thanh ngọt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-23T00:00:00.000Z"
  },
  {
    "id": "p-025",
    "dbId": 25,
    "slug": "hat-dieu-rang-muoi",
    "name": "Hạt điều rang muối vỏ lụa loại A",
    "categoryId": "cat-04",
    "dbCategoryId": 4,
    "isContactPrice": false,
    "images": [
      "images/hat-dieu-rang-muoi.jpg",
      "images/hat-de-rung.jpg",
      "images/dau-tay-da-lat.jpg"
    ],
    "badges": [],
    "rating": 5,
    "soldCount": 585,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-025-250",
        "label": "250g",
        "weightG": 250,
        "price": 85000,
        "originalPrice": 100000,
        "stock": 85
      },
      {
        "id": "p-025-500",
        "label": "500g",
        "weightG": 500,
        "price": 160000,
        "originalPrice": 195000,
        "stock": 60
      },
      {
        "id": "p-025-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 305000,
        "originalPrice": 380000,
        "stock": 40
      }
    ],
    "shortDescription": "Hạt điều rang muối vỏ lụa loại A thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Hạt điều rang muối vỏ lụa loại A tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-22T00:00:00.000Z"
  },
  {
    "id": "p-026",
    "dbId": 26,
    "slug": "mang-cau-say-deo",
    "name": "Mãng cầu sấy dẻo chua ngọt tự nhiên",
    "categoryId": "cat-01",
    "dbCategoryId": 4,
    "isContactPrice": false,
    "images": [
      "images/mang-cau-say-deo.jpg",
      "images/khoai-lang-vang-say-soi.jpg",
      "images/trai-cay-say-kho.jpg"
    ],
    "badges": [
      "new"
    ],
    "rating": 4.9,
    "soldCount": 658,
    "needs": [
      "an-vat"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-026-250",
        "label": "250g",
        "weightG": 250,
        "price": 80000,
        "originalPrice": 80000,
        "stock": 85
      },
      {
        "id": "p-026-500",
        "label": "500g",
        "weightG": 500,
        "price": 150000,
        "originalPrice": 155000,
        "stock": 60
      },
      {
        "id": "p-026-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 290000,
        "originalPrice": 305000,
        "stock": 40
      }
    ],
    "shortDescription": "Mãng cầu sấy dẻo chua ngọt tự nhiên được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Mãng cầu sấy dẻo chua ngọt tự nhiên tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-21T00:00:00.000Z"
  },
  {
    "id": "p-027",
    "dbId": 27,
    "slug": "khoai-lang-vang-say-soi",
    "name": "Khoai lang vàng sấy sợi giòn rụm",
    "categoryId": "cat-01",
    "dbCategoryId": 5,
    "isContactPrice": false,
    "images": [
      "images/khoai-lang-vang-say-soi.jpg",
      "images/trai-cay-say-kho.jpg",
      "images/khoai-lang-tim-say-soi.jpg"
    ],
    "badges": [],
    "rating": 4.8,
    "soldCount": 731,
    "needs": [
      "an-vat"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-027-250",
        "label": "250g",
        "weightG": 250,
        "price": 70000,
        "originalPrice": 70000,
        "stock": 85
      },
      {
        "id": "p-027-500",
        "label": "500g",
        "weightG": 500,
        "price": 135000,
        "originalPrice": 135000,
        "stock": 60
      },
      {
        "id": "p-027-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 250000,
        "originalPrice": 265000,
        "stock": 40
      }
    ],
    "shortDescription": "Khoai lang vàng sấy sợi giòn rụm được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Khoai lang vàng sấy sợi giòn rụm tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-20T00:00:00.000Z"
  },
  {
    "id": "p-028",
    "dbId": 28,
    "slug": "trai-cay-say-kho",
    "name": "Trái cây sấy thập cẩm Đà Lạt (Mix 8 vị)",
    "categoryId": "cat-01",
    "dbCategoryId": 5,
    "isContactPrice": false,
    "images": [
      "images/trai-cay-say-kho.jpg",
      "images/khoai-lang-tim-say-soi.jpg",
      "images/khoai-lang-vang-say-mat-ong.jpg"
    ],
    "badges": [
      "bestseller"
    ],
    "rating": 4.7,
    "soldCount": 1486,
    "needs": [
      "an-vat"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-028-250",
        "label": "250g",
        "weightG": 250,
        "price": 70000,
        "originalPrice": 85000,
        "stock": 85
      },
      {
        "id": "p-028-500",
        "label": "500g",
        "weightG": 500,
        "price": 135000,
        "originalPrice": 165000,
        "stock": 60
      },
      {
        "id": "p-028-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 250000,
        "originalPrice": 325000,
        "stock": 40
      }
    ],
    "shortDescription": "Trái cây sấy thập cẩm Đà Lạt (Mix 8 vị) được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Trái cây sấy thập cẩm Đà Lạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-19T00:00:00.000Z"
  },
  {
    "id": "p-029",
    "dbId": 29,
    "slug": "khoai-lang-tim-say-soi",
    "name": "Khoai lang tím sấy sợi giòn",
    "categoryId": "cat-01",
    "dbCategoryId": 5,
    "isContactPrice": false,
    "images": [
      "images/khoai-lang-tim-say-soi.jpg",
      "images/khoai-lang-vang-say-mat-ong.jpg",
      "images/khoai-lang-tim-say-mat-ong.jpg"
    ],
    "badges": [],
    "rating": 5,
    "soldCount": 197,
    "needs": [
      "an-vat"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-029-250",
        "label": "250g",
        "weightG": 250,
        "price": 70000,
        "originalPrice": 70000,
        "stock": 85
      },
      {
        "id": "p-029-500",
        "label": "500g",
        "weightG": 500,
        "price": 135000,
        "originalPrice": 135000,
        "stock": 60
      },
      {
        "id": "p-029-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 250000,
        "originalPrice": 265000,
        "stock": 40
      }
    ],
    "shortDescription": "Khoai lang tím sấy sợi giòn được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Khoai lang tím sấy sợi giòn tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-18T00:00:00.000Z"
  },
  {
    "id": "p-030",
    "dbId": 30,
    "slug": "khoai-lang-vang-say-mat-ong",
    "name": "Khoai lang vàng sấy mật ong",
    "categoryId": "cat-01",
    "dbCategoryId": 5,
    "isContactPrice": false,
    "images": [
      "images/khoai-lang-vang-say-mat-ong.jpg",
      "images/khoai-lang-tim-say-mat-ong.jpg",
      "images/chuoi-say.jpg"
    ],
    "badges": [],
    "rating": 4.9,
    "soldCount": 270,
    "needs": [
      "an-vat"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-030-250",
        "label": "250g",
        "weightG": 250,
        "price": 65000,
        "originalPrice": 65000,
        "stock": 85
      },
      {
        "id": "p-030-500",
        "label": "500g",
        "weightG": 500,
        "price": 125000,
        "originalPrice": 125000,
        "stock": 60
      },
      {
        "id": "p-030-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 235000,
        "originalPrice": 245000,
        "stock": 40
      }
    ],
    "shortDescription": "Khoai lang vàng sấy mật ong được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Khoai lang vàng sấy mật ong tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-17T00:00:00.000Z"
  },
  {
    "id": "p-031",
    "dbId": 31,
    "slug": "khoai-lang-tim-say-mat-ong",
    "name": "Khoai lang tím sấy lát tẩm mật ong",
    "categoryId": "cat-01",
    "dbCategoryId": 5,
    "isContactPrice": false,
    "images": [
      "images/khoai-lang-tim-say-mat-ong.jpg",
      "images/chuoi-say.jpg",
      "images/mit-say.jpg"
    ],
    "badges": [
      "new"
    ],
    "rating": 4.8,
    "soldCount": 343,
    "needs": [
      "an-vat"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-031-250",
        "label": "250g",
        "weightG": 250,
        "price": 65000,
        "originalPrice": 75000,
        "stock": 85
      },
      {
        "id": "p-031-500",
        "label": "500g",
        "weightG": 500,
        "price": 125000,
        "originalPrice": 145000,
        "stock": 60
      },
      {
        "id": "p-031-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 235000,
        "originalPrice": 285000,
        "stock": 40
      }
    ],
    "shortDescription": "Khoai lang tím sấy lát tẩm mật ong được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Khoai lang tím sấy lát tẩm mật ong tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-15T00:00:00.000Z"
  },
  {
    "id": "p-032",
    "dbId": 32,
    "slug": "chuoi-say",
    "name": "Chuối Laba sấy giòn truyền thống",
    "categoryId": "cat-01",
    "dbCategoryId": 5,
    "isContactPrice": false,
    "images": [
      "images/chuoi-say.jpg",
      "images/mit-say.jpg",
      "images/khoai-mon-say.jpg"
    ],
    "badges": [],
    "rating": 4.7,
    "soldCount": 416,
    "needs": [
      "an-vat"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-032-250",
        "label": "250g",
        "weightG": 250,
        "price": 60000,
        "originalPrice": 60000,
        "stock": 85
      },
      {
        "id": "p-032-500",
        "label": "500g",
        "weightG": 500,
        "price": 115000,
        "originalPrice": 115000,
        "stock": 60
      },
      {
        "id": "p-032-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 215000,
        "originalPrice": 230000,
        "stock": 40
      }
    ],
    "shortDescription": "Chuối Laba sấy giòn truyền thống được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Chuối Laba sấy giòn truyền thống tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-14T00:00:00.000Z"
  },
  {
    "id": "p-033",
    "dbId": 33,
    "slug": "combo-nuoc-cot-trai-cay",
    "name": "Combo 4 chai Nước cốt trái cây Đà Lạt",
    "categoryId": "cat-03",
    "dbCategoryId": 2,
    "isContactPrice": false,
    "images": [
      "images/combo-nuoc-cot-trai-cay.jpg",
      "images/nuoc-cot-atiso-do.jpg",
      "images/nuoc-cot-dau-tay.jpg"
    ],
    "badges": [],
    "rating": 5,
    "soldCount": 489,
    "needs": [
      "tot-suc-khoe",
      "qua-bieu"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-033-250",
        "label": "250g",
        "weightG": 250,
        "price": 250000,
        "originalPrice": 300000,
        "stock": 85
      },
      {
        "id": "p-033-500",
        "label": "500g",
        "weightG": 500,
        "price": 475000,
        "originalPrice": 585000,
        "stock": 60
      },
      {
        "id": "p-033-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 900000,
        "originalPrice": 1140000,
        "stock": 40
      }
    ],
    "shortDescription": "Combo 4 chai Nước cốt trái cây Đà Lạt mang đậm hương vị tinh tế của phố núi sương mù ở độ cao 1.500m, thích hợp thưởng thức mỗi sáng hoặc làm quà biếu thanh tao.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Combo 4 chai Nước cốt trái cây Đà Lạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Dùng trực tiếp hoặc pha với nước ấm 70–85°C. Ngon hơn khi thưởng thức vào buổi sáng hoặc sau bữa ăn 30 phút.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-13T00:00:00.000Z"
  },
  {
    "id": "p-034",
    "dbId": 34,
    "slug": "mit-say",
    "name": "Mít Thái sấy giòn nguyên múi",
    "categoryId": "cat-01",
    "dbCategoryId": 5,
    "isContactPrice": false,
    "images": [
      "images/mit-say.jpg",
      "images/khoai-mon-say.jpg",
      "images/mut-gung-vien.jpg"
    ],
    "badges": [],
    "rating": 4.9,
    "soldCount": 562,
    "needs": [
      "an-vat"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-034-250",
        "label": "250g",
        "weightG": 250,
        "price": 65000,
        "originalPrice": 75000,
        "stock": 85
      },
      {
        "id": "p-034-500",
        "label": "500g",
        "weightG": 500,
        "price": 125000,
        "originalPrice": 145000,
        "stock": 60
      },
      {
        "id": "p-034-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 235000,
        "originalPrice": 285000,
        "stock": 40
      }
    ],
    "shortDescription": "Mít Thái sấy giòn nguyên múi được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Mít Thái sấy giòn nguyên múi tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-12T00:00:00.000Z"
  },
  {
    "id": "p-035",
    "dbId": 35,
    "slug": "khoai-mon-say",
    "name": "Khoai môn sấy giòn Đà Lạt",
    "categoryId": "cat-01",
    "dbCategoryId": 5,
    "isContactPrice": false,
    "images": [
      "images/khoai-mon-say.jpg",
      "images/mut-gung-vien.jpg",
      "images/mut-atiso-do-hibiscus.jpg"
    ],
    "badges": [],
    "rating": 4.8,
    "soldCount": 635,
    "needs": [
      "an-vat"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-035-250",
        "label": "250g",
        "weightG": 250,
        "price": 85000,
        "originalPrice": 85000,
        "stock": 85
      },
      {
        "id": "p-035-500",
        "label": "500g",
        "weightG": 500,
        "price": 160000,
        "originalPrice": 165000,
        "stock": 60
      },
      {
        "id": "p-035-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 305000,
        "originalPrice": 325000,
        "stock": 40
      }
    ],
    "shortDescription": "Khoai môn sấy giòn Đà Lạt được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Khoai môn sấy giòn Đà Lạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-11T00:00:00.000Z"
  },
  {
    "id": "p-036",
    "dbId": 36,
    "slug": "mut-gung-vien",
    "name": "Mứt gừng viên dẻo ấm cổ",
    "categoryId": "cat-01",
    "dbCategoryId": 4,
    "isContactPrice": false,
    "images": [
      "images/mut-gung-vien.jpg",
      "images/mut-atiso-do-hibiscus.jpg",
      "images/keo-dau-tay.jpg"
    ],
    "badges": [
      "new"
    ],
    "rating": 4.7,
    "soldCount": 708,
    "needs": [
      "an-vat"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-036-250",
        "label": "250g",
        "weightG": 250,
        "price": 45000,
        "originalPrice": 45000,
        "stock": 85
      },
      {
        "id": "p-036-500",
        "label": "500g",
        "weightG": 500,
        "price": 85000,
        "originalPrice": 90000,
        "stock": 60
      },
      {
        "id": "p-036-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 160000,
        "originalPrice": 170000,
        "stock": 40
      }
    ],
    "shortDescription": "Mứt gừng viên dẻo ấm cổ được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Mứt gừng viên dẻo ấm cổ tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-10T00:00:00.000Z"
  },
  {
    "id": "p-037",
    "dbId": 37,
    "slug": "mut-atiso-do-hibiscus",
    "name": "Mứt hoa Atiso đỏ (Hibiscus) giòn chua ngọt",
    "categoryId": "cat-01",
    "dbCategoryId": 4,
    "isContactPrice": false,
    "images": [
      "images/mut-atiso-do-hibiscus.jpg",
      "images/keo-dau-tay.jpg",
      "images/keo-dau-tam.jpg"
    ],
    "badges": [],
    "rating": 5,
    "soldCount": 781,
    "needs": [
      "an-vat"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-037-250",
        "label": "250g",
        "weightG": 250,
        "price": 65000,
        "originalPrice": 75000,
        "stock": 85
      },
      {
        "id": "p-037-500",
        "label": "500g",
        "weightG": 500,
        "price": 125000,
        "originalPrice": 145000,
        "stock": 60
      },
      {
        "id": "p-037-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 235000,
        "originalPrice": 285000,
        "stock": 40
      }
    ],
    "shortDescription": "Mứt hoa Atiso đỏ (Hibiscus) giòn chua ngọt được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Mứt hoa Atiso đỏ  giòn chua ngọt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-09T00:00:00.000Z"
  },
  {
    "id": "p-038",
    "dbId": 38,
    "slug": "keo-dau-tay",
    "name": "Kẹo dâu tây Đà Lạt dẻo thơm",
    "categoryId": "cat-01",
    "dbCategoryId": 1,
    "isContactPrice": false,
    "images": [
      "images/keo-dau-tay.jpg",
      "images/keo-dau-tam.jpg",
      "images/keo-me-cay.jpg"
    ],
    "badges": [],
    "rating": 4.9,
    "soldCount": 174,
    "needs": [
      "an-vat"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-038-250",
        "label": "250g",
        "weightG": 250,
        "price": 50000,
        "originalPrice": 50000,
        "stock": 85
      },
      {
        "id": "p-038-500",
        "label": "500g",
        "weightG": 500,
        "price": 95000,
        "originalPrice": 100000,
        "stock": 60
      },
      {
        "id": "p-038-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 180000,
        "originalPrice": 190000,
        "stock": 40
      }
    ],
    "shortDescription": "Kẹo dâu tây Đà Lạt dẻo thơm được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Kẹo dâu tây Đà Lạt dẻo thơm tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-08T00:00:00.000Z"
  },
  {
    "id": "p-039",
    "dbId": 39,
    "slug": "keo-dau-tam",
    "name": "Kẹo dâu tằm Đà Lạt chua ngọt",
    "categoryId": "cat-01",
    "dbCategoryId": 1,
    "isContactPrice": false,
    "images": [
      "images/keo-dau-tam.jpg",
      "images/keo-me-cay.jpg",
      "images/keo-nha-dam-sua.jpg"
    ],
    "badges": [],
    "rating": 4.8,
    "soldCount": 247,
    "needs": [
      "an-vat"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-039-250",
        "label": "250g",
        "weightG": 250,
        "price": 50000,
        "originalPrice": 50000,
        "stock": 85
      },
      {
        "id": "p-039-500",
        "label": "500g",
        "weightG": 500,
        "price": 95000,
        "originalPrice": 100000,
        "stock": 60
      },
      {
        "id": "p-039-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 180000,
        "originalPrice": 190000,
        "stock": 40
      }
    ],
    "shortDescription": "Kẹo dâu tằm Đà Lạt chua ngọt được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Kẹo dâu tằm Đà Lạt chua ngọt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-07T00:00:00.000Z"
  },
  {
    "id": "p-040",
    "dbId": 40,
    "slug": "keo-me-cay",
    "name": "Kẹo me cay Đà Lạt",
    "categoryId": "cat-01",
    "dbCategoryId": 1,
    "isContactPrice": false,
    "images": [
      "images/keo-me-cay.jpg",
      "images/keo-nha-dam-sua.jpg",
      "images/keo-dau-deo.jpg"
    ],
    "badges": [],
    "rating": 4.7,
    "soldCount": 320,
    "needs": [
      "an-vat"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-040-250",
        "label": "250g",
        "weightG": 250,
        "price": 50000,
        "originalPrice": 60000,
        "stock": 85
      },
      {
        "id": "p-040-500",
        "label": "500g",
        "weightG": 500,
        "price": 95000,
        "originalPrice": 115000,
        "stock": 60
      },
      {
        "id": "p-040-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 180000,
        "originalPrice": 230000,
        "stock": 40
      }
    ],
    "shortDescription": "Kẹo me cay Đà Lạt được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Kẹo me cay Đà Lạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-06T00:00:00.000Z"
  },
  {
    "id": "p-041",
    "dbId": 41,
    "slug": "keo-nha-dam-sua",
    "name": "Kẹo nha đam sữa thanh mát",
    "categoryId": "cat-01",
    "dbCategoryId": 1,
    "isContactPrice": false,
    "images": [
      "images/keo-nha-dam-sua.jpg",
      "images/keo-dau-deo.jpg",
      "images/mut-dau-tay.jpg"
    ],
    "badges": [
      "new"
    ],
    "rating": 5,
    "soldCount": 393,
    "needs": [
      "an-vat"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-041-250",
        "label": "250g",
        "weightG": 250,
        "price": 55000,
        "originalPrice": 55000,
        "stock": 85
      },
      {
        "id": "p-041-500",
        "label": "500g",
        "weightG": 500,
        "price": 105000,
        "originalPrice": 105000,
        "stock": 60
      },
      {
        "id": "p-041-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 200000,
        "originalPrice": 210000,
        "stock": 40
      }
    ],
    "shortDescription": "Kẹo nha đam sữa thanh mát được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Kẹo nha đam sữa thanh mát tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-05T00:00:00.000Z"
  },
  {
    "id": "p-042",
    "dbId": 42,
    "slug": "keo-dau-deo",
    "name": "Kẹo dâu dẻo thập cẩm Đà Lạt",
    "categoryId": "cat-01",
    "dbCategoryId": 1,
    "isContactPrice": false,
    "images": [
      "images/keo-dau-deo.jpg",
      "images/mut-dau-tay.jpg",
      "images/mut-dau-tam.jpg"
    ],
    "badges": [],
    "rating": 4.9,
    "soldCount": 466,
    "needs": [
      "an-vat"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-042-250",
        "label": "250g",
        "weightG": 250,
        "price": 55000,
        "originalPrice": 55000,
        "stock": 85
      },
      {
        "id": "p-042-500",
        "label": "500g",
        "weightG": 500,
        "price": 105000,
        "originalPrice": 105000,
        "stock": 60
      },
      {
        "id": "p-042-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 200000,
        "originalPrice": 210000,
        "stock": 40
      }
    ],
    "shortDescription": "Kẹo dâu dẻo thập cẩm Đà Lạt được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Kẹo dâu dẻo thập cẩm Đà Lạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-04T00:00:00.000Z"
  },
  {
    "id": "p-043",
    "dbId": 43,
    "slug": "nuoc-cot-atiso-do",
    "name": "Nước cốt hoa Atiso đỏ lên men tự nhiên",
    "categoryId": "cat-03",
    "dbCategoryId": 2,
    "isContactPrice": false,
    "images": [
      "images/nuoc-cot-atiso-do.jpg",
      "images/nuoc-cot-dau-tay.jpg",
      "images/nuoc-cot-dau-tam.jpg"
    ],
    "badges": [],
    "rating": 4.8,
    "soldCount": 539,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-043-250",
        "label": "250g",
        "weightG": 250,
        "price": 50000,
        "originalPrice": 60000,
        "stock": 85
      },
      {
        "id": "p-043-500",
        "label": "500g",
        "weightG": 500,
        "price": 95000,
        "originalPrice": 115000,
        "stock": 60
      },
      {
        "id": "p-043-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 180000,
        "originalPrice": 230000,
        "stock": 40
      }
    ],
    "shortDescription": "Nước cốt hoa Atiso đỏ lên men tự nhiên mang đậm hương vị tinh tế của phố núi sương mù ở độ cao 1.500m, thích hợp thưởng thức mỗi sáng hoặc làm quà biếu thanh tao.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Nước cốt hoa Atiso đỏ lên men tự nhiên tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Dùng trực tiếp hoặc pha với nước ấm 70–85°C. Ngon hơn khi thưởng thức vào buổi sáng hoặc sau bữa ăn 30 phút.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-03T00:00:00.000Z"
  },
  {
    "id": "p-044",
    "dbId": 44,
    "slug": "nuoc-cot-dau-tay",
    "name": "Nước cốt dâu tây Đà Lạt nguyên chất",
    "categoryId": "cat-03",
    "dbCategoryId": 2,
    "isContactPrice": false,
    "images": [
      "images/nuoc-cot-dau-tay.jpg",
      "images/nuoc-cot-dau-tam.jpg",
      "images/nuoc-cot-chanh-day.jpg"
    ],
    "badges": [],
    "rating": 4.7,
    "soldCount": 612,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-044-250",
        "label": "250g",
        "weightG": 250,
        "price": 50000,
        "originalPrice": 50000,
        "stock": 85
      },
      {
        "id": "p-044-500",
        "label": "500g",
        "weightG": 500,
        "price": 95000,
        "originalPrice": 100000,
        "stock": 60
      },
      {
        "id": "p-044-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 180000,
        "originalPrice": 190000,
        "stock": 40
      }
    ],
    "shortDescription": "Nước cốt dâu tây Đà Lạt nguyên chất mang đậm hương vị tinh tế của phố núi sương mù ở độ cao 1.500m, thích hợp thưởng thức mỗi sáng hoặc làm quà biếu thanh tao.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Nước cốt dâu tây Đà Lạt nguyên chất tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Dùng trực tiếp hoặc pha với nước ấm 70–85°C. Ngon hơn khi thưởng thức vào buổi sáng hoặc sau bữa ăn 30 phút.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-02T00:00:00.000Z"
  },
  {
    "id": "p-045",
    "dbId": 45,
    "slug": "nuoc-cot-dau-tam",
    "name": "Nước cốt dâu tằm Đà Lạt đậm đặc",
    "categoryId": "cat-03",
    "dbCategoryId": 2,
    "isContactPrice": false,
    "images": [
      "images/nuoc-cot-dau-tam.jpg",
      "images/nuoc-cot-chanh-day.jpg",
      "images/ca-phe-hat-nguyen-chat.jpg"
    ],
    "badges": [],
    "rating": 5,
    "soldCount": 685,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-045-250",
        "label": "250g",
        "weightG": 250,
        "price": 50000,
        "originalPrice": 50000,
        "stock": 85
      },
      {
        "id": "p-045-500",
        "label": "500g",
        "weightG": 500,
        "price": 95000,
        "originalPrice": 100000,
        "stock": 60
      },
      {
        "id": "p-045-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 180000,
        "originalPrice": 190000,
        "stock": 40
      }
    ],
    "shortDescription": "Nước cốt dâu tằm Đà Lạt đậm đặc mang đậm hương vị tinh tế của phố núi sương mù ở độ cao 1.500m, thích hợp thưởng thức mỗi sáng hoặc làm quà biếu thanh tao.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Nước cốt dâu tằm Đà Lạt đậm đặc tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Dùng trực tiếp hoặc pha với nước ấm 70–85°C. Ngon hơn khi thưởng thức vào buổi sáng hoặc sau bữa ăn 30 phút.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-01T00:00:00.000Z"
  },
  {
    "id": "p-046",
    "dbId": 46,
    "slug": "nuoc-cot-chanh-day",
    "name": "Nước cốt chanh dây tím Đà Lạt",
    "categoryId": "cat-03",
    "dbCategoryId": 2,
    "isContactPrice": false,
    "images": [
      "images/nuoc-cot-chanh-day.jpg",
      "images/ca-phe-hat-nguyen-chat.jpg",
      "images/ca-phe-dong-trung-ha-thao.jpg"
    ],
    "badges": [
      "new"
    ],
    "rating": 4.9,
    "soldCount": 758,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-046-250",
        "label": "250g",
        "weightG": 250,
        "price": 50000,
        "originalPrice": 60000,
        "stock": 85
      },
      {
        "id": "p-046-500",
        "label": "500g",
        "weightG": 500,
        "price": 95000,
        "originalPrice": 115000,
        "stock": 60
      },
      {
        "id": "p-046-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 180000,
        "originalPrice": 230000,
        "stock": 40
      }
    ],
    "shortDescription": "Nước cốt chanh dây tím Đà Lạt mang đậm hương vị tinh tế của phố núi sương mù ở độ cao 1.500m, thích hợp thưởng thức mỗi sáng hoặc làm quà biếu thanh tao.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Nước cốt chanh dây tím Đà Lạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Dùng trực tiếp hoặc pha với nước ấm 70–85°C. Ngon hơn khi thưởng thức vào buổi sáng hoặc sau bữa ăn 30 phút.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-31T00:00:00.000Z"
  },
  {
    "id": "p-047",
    "dbId": 47,
    "slug": "hong-dang-sam-mat-ong-ngoc-linh",
    "name": "Hồng Đẳng Sâm ngâm Mật Ong rừng",
    "categoryId": "cat-02",
    "dbCategoryId": 4,
    "isContactPrice": false,
    "images": [
      "images/hong-dang-sam-mat-ong-ngoc-linh.jpg",
      "images/dau-hat-mac-ca.jpg",
      "images/tinh-chat-phuc-bon-tu-den.jpg"
    ],
    "badges": [],
    "rating": 4.8,
    "soldCount": 151,
    "needs": [
      "tot-suc-khoe",
      "qua-bieu"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-047-250",
        "label": "250g",
        "weightG": 250,
        "price": 545000,
        "originalPrice": 545000,
        "stock": 85
      },
      {
        "id": "p-047-500",
        "label": "500g",
        "weightG": 500,
        "price": 1035000,
        "originalPrice": 1065000,
        "stock": 60
      },
      {
        "id": "p-047-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 1960000,
        "originalPrice": 2070000,
        "stock": 40
      }
    ],
    "shortDescription": "Hồng Đẳng Sâm ngâm Mật Ong rừng chiết xuất từ thảo dược quý canh tác chuẩn sạch tại Đà Lạt – Lâm Đồng, giúp bồi bổ cơ thể, thanh nhiệt, giải độc gan và nâng cao sức đề kháng mỗi ngày.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Hồng Đẳng Sâm ngâm Mật Ong rừng tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Dùng trực tiếp hoặc pha với nước ấm 70–85°C. Ngon hơn khi thưởng thức vào buổi sáng hoặc sau bữa ăn 30 phút.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-30T00:00:00.000Z"
  },
  {
    "id": "p-048",
    "dbId": 48,
    "slug": "dau-hat-mac-ca",
    "name": "Dầu hạt Mắc ca ép lạnh nguyên chất",
    "categoryId": "cat-02",
    "dbCategoryId": 2,
    "isContactPrice": false,
    "images": [
      "images/dau-hat-mac-ca.jpg",
      "images/tinh-chat-phuc-bon-tu-den.jpg",
      "images/cao-atiso-da-lat.jpg"
    ],
    "badges": [],
    "rating": 4.7,
    "soldCount": 224,
    "needs": [
      "tot-suc-khoe",
      "qua-bieu"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-048-250",
        "label": "250g",
        "weightG": 250,
        "price": 215000,
        "originalPrice": 215000,
        "stock": 85
      },
      {
        "id": "p-048-500",
        "label": "500g",
        "weightG": 500,
        "price": 410000,
        "originalPrice": 420000,
        "stock": 60
      },
      {
        "id": "p-048-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 775000,
        "originalPrice": 815000,
        "stock": 40
      }
    ],
    "shortDescription": "Dầu hạt Mắc ca ép lạnh nguyên chất chiết xuất từ thảo dược quý canh tác chuẩn sạch tại Đà Lạt – Lâm Đồng, giúp bồi bổ cơ thể, thanh nhiệt, giải độc gan và nâng cao sức đề kháng mỗi ngày.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Dầu hạt Mắc ca ép lạnh nguyên chất tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Dùng trực tiếp hoặc pha với nước ấm 70–85°C. Ngon hơn khi thưởng thức vào buổi sáng hoặc sau bữa ăn 30 phút.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-29T00:00:00.000Z"
  },
  {
    "id": "p-049",
    "dbId": 49,
    "slug": "tinh-chat-phuc-bon-tu-den",
    "name": "Tinh chất Phúc bồn tử đen cô đặc",
    "categoryId": "cat-02",
    "dbCategoryId": 2,
    "isContactPrice": false,
    "images": [
      "images/tinh-chat-phuc-bon-tu-den.jpg",
      "images/cao-atiso-da-lat.jpg",
      "images/cao-atiso-nuoc.jpg"
    ],
    "badges": [],
    "rating": 5,
    "soldCount": 297,
    "needs": [
      "tot-suc-khoe",
      "qua-bieu"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-049-250",
        "label": "250g",
        "weightG": 250,
        "price": 580000,
        "originalPrice": 680000,
        "stock": 85
      },
      {
        "id": "p-049-500",
        "label": "500g",
        "weightG": 500,
        "price": 1100000,
        "originalPrice": 1325000,
        "stock": 60
      },
      {
        "id": "p-049-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 2090000,
        "originalPrice": 2585000,
        "stock": 40
      }
    ],
    "shortDescription": "Tinh chất Phúc bồn tử đen cô đặc chiết xuất từ thảo dược quý canh tác chuẩn sạch tại Đà Lạt – Lâm Đồng, giúp bồi bổ cơ thể, thanh nhiệt, giải độc gan và nâng cao sức đề kháng mỗi ngày.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Tinh chất Phúc bồn tử đen cô đặc tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Dùng trực tiếp hoặc pha với nước ấm 70–85°C. Ngon hơn khi thưởng thức vào buổi sáng hoặc sau bữa ăn 30 phút.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-28T00:00:00.000Z"
  },
  {
    "id": "p-050",
    "dbId": 50,
    "slug": "cao-atiso-da-lat",
    "name": "Cao mềm Atiso Đà Lạt nguyên chất",
    "categoryId": "cat-02",
    "dbCategoryId": 1,
    "isContactPrice": false,
    "images": [
      "images/cao-atiso-da-lat.jpg",
      "images/cao-atiso-nuoc.jpg",
      "images/bong-atiso-kho.jpg"
    ],
    "badges": [
      "ocop",
      "bestseller"
    ],
    "rating": 4.9,
    "soldCount": 1300,
    "needs": [
      "tot-suc-khoe",
      "qua-bieu"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-050-250",
        "label": "250g",
        "weightG": 250,
        "price": 170000,
        "originalPrice": 170000,
        "stock": 85
      },
      {
        "id": "p-050-500",
        "label": "500g",
        "weightG": 500,
        "price": 325000,
        "originalPrice": 330000,
        "stock": 60
      },
      {
        "id": "p-050-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 610000,
        "originalPrice": 645000,
        "stock": 40
      }
    ],
    "shortDescription": "Cao mềm Atiso Đà Lạt nguyên chất chiết xuất từ thảo dược quý canh tác chuẩn sạch tại Đà Lạt – Lâm Đồng, giúp bồi bổ cơ thể, thanh nhiệt, giải độc gan và nâng cao sức đề kháng mỗi ngày.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Cao mềm Atiso Đà Lạt nguyên chất tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Dùng trực tiếp hoặc pha với nước ấm 70–85°C. Ngon hơn khi thưởng thức vào buổi sáng hoặc sau bữa ăn 30 phút.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-27T00:00:00.000Z"
  },
  {
    "id": "p-051",
    "dbId": 51,
    "slug": "ca-phe-hat-nguyen-chat",
    "name": "Cà phê Arabica Cầu Đất hạt rang mộc",
    "categoryId": "cat-03",
    "dbCategoryId": 2,
    "isContactPrice": false,
    "images": [
      "images/ca-phe-hat-nguyen-chat.jpg",
      "images/ca-phe-nguyen-chat.jpg",
      "images/ca-phe-nguyen-chat.jpg"
    ],
    "badges": [
      "ocop",
      "bestseller"
    ],
    "rating": 4.8,
    "soldCount": 1437,
    "flashSaleTarget": 1617,
    "needs": [
      "tot-suc-khoe",
      "qua-bieu"
    ],
    "isFlashSale": true,
    "flashSale": {
      "offsetHours": 48
    },
    "variants": [
      {
        "id": "p-051-250",
        "label": "250g",
        "weightG": 250,
        "price": 235000,
        "originalPrice": 275000,
        "stock": 85
      },
      {
        "id": "p-051-500",
        "label": "500g",
        "weightG": 500,
        "price": 445000,
        "originalPrice": 535000,
        "stock": 60
      },
      {
        "id": "p-051-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 845000,
        "originalPrice": 1045000,
        "stock": 40
      }
    ],
    "shortDescription": "Cà phê Arabica Cầu Đất hạt rang mộc mang đậm hương vị tinh tế của phố núi sương mù ở độ cao 1.500m, thích hợp thưởng thức mỗi sáng hoặc làm quà biếu thanh tao.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Cà phê Arabica Cầu Đất hạt rang mộc tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Dùng trực tiếp hoặc pha với nước ấm 70–85°C. Ngon hơn khi thưởng thức vào buổi sáng hoặc sau bữa ăn 30 phút.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-26T00:00:00.000Z"
  },
  {
    "id": "p-052",
    "dbId": 52,
    "slug": "cao-atiso-nuoc",
    "name": "Cao nước Atiso Đà Lạt ống uống tiện lợi",
    "categoryId": "cat-02",
    "dbCategoryId": 1,
    "isContactPrice": false,
    "images": [
      "images/cao-atiso-nuoc.jpg",
      "images/bong-atiso-kho.jpg",
      "images/phan-hoa-thien-nhien.jpg"
    ],
    "badges": [],
    "rating": 4.7,
    "soldCount": 516,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-052-250",
        "label": "250g",
        "weightG": 250,
        "price": 65000,
        "originalPrice": 75000,
        "stock": 85
      },
      {
        "id": "p-052-500",
        "label": "500g",
        "weightG": 500,
        "price": 125000,
        "originalPrice": 145000,
        "stock": 60
      },
      {
        "id": "p-052-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 235000,
        "originalPrice": 285000,
        "stock": 40
      }
    ],
    "shortDescription": "Cao nước Atiso Đà Lạt ống uống tiện lợi chiết xuất từ thảo dược quý canh tác chuẩn sạch tại Đà Lạt – Lâm Đồng, giúp bồi bổ cơ thể, thanh nhiệt, giải độc gan và nâng cao sức đề kháng mỗi ngày.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Cao nước Atiso Đà Lạt ống uống tiện lợi tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Dùng trực tiếp hoặc pha với nước ấm 70–85°C. Ngon hơn khi thưởng thức vào buổi sáng hoặc sau bữa ăn 30 phút.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-25T00:00:00.000Z"
  },
  {
    "id": "p-053",
    "dbId": 53,
    "slug": "ca-phe-dong-trung-ha-thao",
    "name": "Cà phê Đông Trùng Hạ Thảo phố núi",
    "categoryId": "cat-03",
    "dbCategoryId": 2,
    "isContactPrice": false,
    "images": [
      "images/ca-phe-dong-trung-ha-thao.jpg",
      "images/ca-phe-nguyen-chat.jpg",
      "images/tra-bo-cong-anh.jpg"
    ],
    "badges": [],
    "rating": 5,
    "soldCount": 589,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-053-250",
        "label": "250g",
        "weightG": 250,
        "price": 185000,
        "originalPrice": 185000,
        "stock": 85
      },
      {
        "id": "p-053-500",
        "label": "500g",
        "weightG": 500,
        "price": 350000,
        "originalPrice": 360000,
        "stock": 60
      },
      {
        "id": "p-053-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 665000,
        "originalPrice": 705000,
        "stock": 40
      }
    ],
    "shortDescription": "Cà phê Đông Trùng Hạ Thảo phố núi mang đậm hương vị tinh tế của phố núi sương mù ở độ cao 1.500m, thích hợp thưởng thức mỗi sáng hoặc làm quà biếu thanh tao.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Cà phê Đông Trùng Hạ Thảo phố núi tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Dùng trực tiếp hoặc pha với nước ấm 70–85°C. Ngon hơn khi thưởng thức vào buổi sáng hoặc sau bữa ăn 30 phút.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-24T00:00:00.000Z"
  },
  {
    "id": "p-054",
    "dbId": 54,
    "slug": "ca-phe-nguyen-chat",
    "name": "Cà phê rang xay nguyên chất Cầu Đất",
    "categoryId": "cat-03",
    "dbCategoryId": 2,
    "isContactPrice": false,
    "images": [
      "images/ca-phe-nguyen-chat.jpg",
      "images/ca-phe-hat-nguyen-chat.jpg",
      "images/tra-atiso-tui-loc.jpg"
    ],
    "badges": [],
    "rating": 4.9,
    "soldCount": 662,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-054-250",
        "label": "250g",
        "weightG": 250,
        "price": 115000,
        "originalPrice": 115000,
        "stock": 85
      },
      {
        "id": "p-054-500",
        "label": "500g",
        "weightG": 500,
        "price": 220000,
        "originalPrice": 225000,
        "stock": 60
      },
      {
        "id": "p-054-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 415000,
        "originalPrice": 435000,
        "stock": 40
      }
    ],
    "shortDescription": "Cà phê rang xay nguyên chất Cầu Đất mang đậm hương vị tinh tế của phố núi sương mù ở độ cao 1.500m, thích hợp thưởng thức mỗi sáng hoặc làm quà biếu thanh tao.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Cà phê rang xay nguyên chất Cầu Đất tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Dùng trực tiếp hoặc pha với nước ấm 70–85°C. Ngon hơn khi thưởng thức vào buổi sáng hoặc sau bữa ăn 30 phút.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-23T00:00:00.000Z"
  },
  {
    "id": "p-055",
    "dbId": 55,
    "slug": "mut-dau-tay",
    "name": "Mứt dâu tây Đà Lạt phết bánh mì",
    "categoryId": "cat-01",
    "dbCategoryId": 1,
    "isContactPrice": false,
    "images": [
      "images/mut-dau-tay.jpg",
      "images/mut-dau-tam.jpg",
      "images/vai-thieu-say-kho.jpg"
    ],
    "badges": [],
    "rating": 4.8,
    "soldCount": 735,
    "needs": [
      "an-vat"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-055-250",
        "label": "250g",
        "weightG": 250,
        "price": 80000,
        "originalPrice": 95000,
        "stock": 85
      },
      {
        "id": "p-055-500",
        "label": "500g",
        "weightG": 500,
        "price": 150000,
        "originalPrice": 185000,
        "stock": 60
      },
      {
        "id": "p-055-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 290000,
        "originalPrice": 360000,
        "stock": 40
      }
    ],
    "shortDescription": "Mứt dâu tây Đà Lạt phết bánh mì được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Mứt dâu tây Đà Lạt phết bánh mì tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-22T00:00:00.000Z"
  },
  {
    "id": "p-056",
    "dbId": 56,
    "slug": "mut-dau-tam",
    "name": "Mứt dâu tằm Đà Lạt truyền thống",
    "categoryId": "cat-01",
    "dbCategoryId": 1,
    "isContactPrice": false,
    "images": [
      "images/mut-dau-tam.jpg",
      "images/vai-thieu-say-kho.jpg",
      "images/hong-treo-gio-da-lat.jpg"
    ],
    "badges": [
      "new"
    ],
    "rating": 4.7,
    "soldCount": 128,
    "needs": [
      "an-vat"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-056-250",
        "label": "250g",
        "weightG": 250,
        "price": 70000,
        "originalPrice": 70000,
        "stock": 85
      },
      {
        "id": "p-056-500",
        "label": "500g",
        "weightG": 500,
        "price": 135000,
        "originalPrice": 135000,
        "stock": 60
      },
      {
        "id": "p-056-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 250000,
        "originalPrice": 265000,
        "stock": 40
      }
    ],
    "shortDescription": "Mứt dâu tằm Đà Lạt truyền thống được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Mứt dâu tằm Đà Lạt truyền thống tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-21T00:00:00.000Z"
  },
  {
    "id": "p-057",
    "dbId": 57,
    "slug": "tra-bo-cong-anh",
    "name": "Trà Bồ công anh Đà Lạt thanh nhiệt",
    "categoryId": "cat-03",
    "dbCategoryId": 2,
    "isContactPrice": false,
    "images": [
      "images/tra-bo-cong-anh.jpg",
      "images/tra-atiso-tui-loc.jpg",
      "images/tra-atiso-do.jpg"
    ],
    "badges": [
      "bestseller"
    ],
    "rating": 5,
    "soldCount": 2259,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-057-250",
        "label": "250g",
        "weightG": 250,
        "price": 70000,
        "originalPrice": 70000,
        "stock": 85
      },
      {
        "id": "p-057-500",
        "label": "500g",
        "weightG": 500,
        "price": 135000,
        "originalPrice": 135000,
        "stock": 60
      },
      {
        "id": "p-057-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 250000,
        "originalPrice": 265000,
        "stock": 40
      }
    ],
    "shortDescription": "Trà Bồ công anh Đà Lạt thanh nhiệt mang đậm hương vị tinh tế của phố núi sương mù ở độ cao 1.500m, thích hợp thưởng thức mỗi sáng hoặc làm quà biếu thanh tao.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Trà Bồ công anh Đà Lạt thanh nhiệt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Dùng trực tiếp hoặc pha với nước ấm 70–85°C. Ngon hơn khi thưởng thức vào buổi sáng hoặc sau bữa ăn 30 phút.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-20T00:00:00.000Z"
  },
  {
    "id": "p-058",
    "dbId": 58,
    "slug": "tra-atiso-tui-loc",
    "name": "Trà Atiso Đà Lạt túi lọc thượng hạng",
    "categoryId": "cat-03",
    "dbCategoryId": 2,
    "isContactPrice": false,
    "images": [
      "images/tra-atiso-tui-loc.jpg",
      "images/tra-atiso-do.jpg",
      "images/sinh-to-atiso-do.jpg"
    ],
    "badges": [
      "ocop"
    ],
    "rating": 4.9,
    "soldCount": 274,
    "needs": [
      "tot-suc-khoe",
      "qua-bieu"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-058-250",
        "label": "250g",
        "weightG": 250,
        "price": 80000,
        "originalPrice": 95000,
        "stock": 85
      },
      {
        "id": "p-058-500",
        "label": "500g",
        "weightG": 500,
        "price": 150000,
        "originalPrice": 185000,
        "stock": 60
      },
      {
        "id": "p-058-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 290000,
        "originalPrice": 360000,
        "stock": 40
      }
    ],
    "shortDescription": "Trà Atiso Đà Lạt túi lọc thượng hạng mang đậm hương vị tinh tế của phố núi sương mù ở độ cao 1.500m, thích hợp thưởng thức mỗi sáng hoặc làm quà biếu thanh tao.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Trà Atiso Đà Lạt túi lọc thượng hạng tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Dùng trực tiếp hoặc pha với nước ấm 70–85°C. Ngon hơn khi thưởng thức vào buổi sáng hoặc sau bữa ăn 30 phút.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-19T00:00:00.000Z"
  },
  {
    "id": "p-059",
    "dbId": 59,
    "slug": "tra-atiso-do",
    "name": "Trà hoa Atiso đỏ (Hibiscus) sấy khô",
    "categoryId": "cat-03",
    "dbCategoryId": 2,
    "isContactPrice": false,
    "images": [
      "images/tra-atiso-do.jpg",
      "images/sinh-to-atiso-do.jpg",
      "images/dau-tam-ngam-duong.jpg"
    ],
    "badges": [],
    "rating": 4.8,
    "soldCount": 347,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-059-250",
        "label": "250g",
        "weightG": 250,
        "price": 85000,
        "originalPrice": 85000,
        "stock": 85
      },
      {
        "id": "p-059-500",
        "label": "500g",
        "weightG": 500,
        "price": 160000,
        "originalPrice": 165000,
        "stock": 60
      },
      {
        "id": "p-059-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 305000,
        "originalPrice": 325000,
        "stock": 40
      }
    ],
    "shortDescription": "Trà hoa Atiso đỏ (Hibiscus) sấy khô mang đậm hương vị tinh tế của phố núi sương mù ở độ cao 1.500m, thích hợp thưởng thức mỗi sáng hoặc làm quà biếu thanh tao.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Trà hoa Atiso đỏ  sấy khô tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Dùng trực tiếp hoặc pha với nước ấm 70–85°C. Ngon hơn khi thưởng thức vào buổi sáng hoặc sau bữa ăn 30 phút.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-18T00:00:00.000Z"
  },
  {
    "id": "p-060",
    "dbId": 60,
    "slug": "bong-atiso-kho",
    "name": "Bông Atiso sấy khô Đà Lạt nguyên cánh",
    "categoryId": "cat-02",
    "dbCategoryId": 1,
    "isContactPrice": false,
    "images": [
      "images/bong-atiso-kho.jpg",
      "images/bong-atiso-tuoi.jpg",
      "images/mat-ong-thien-nhien.jpg"
    ],
    "badges": [
      "bestseller"
    ],
    "rating": 4.7,
    "soldCount": 1070,
    "needs": [
      "tot-suc-khoe",
      "qua-bieu"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-060-250",
        "label": "250g",
        "weightG": 250,
        "price": 235000,
        "originalPrice": 235000,
        "stock": 85
      },
      {
        "id": "p-060-500",
        "label": "500g",
        "weightG": 500,
        "price": 445000,
        "originalPrice": 460000,
        "stock": 60
      },
      {
        "id": "p-060-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 845000,
        "originalPrice": 895000,
        "stock": 40
      }
    ],
    "shortDescription": "Bông Atiso sấy khô Đà Lạt nguyên cánh chiết xuất từ thảo dược quý canh tác chuẩn sạch tại Đà Lạt – Lâm Đồng, giúp bồi bổ cơ thể, thanh nhiệt, giải độc gan và nâng cao sức đề kháng mỗi ngày.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Bông Atiso sấy khô Đà Lạt nguyên cánh tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Dùng trực tiếp hoặc pha với nước ấm 70–85°C. Ngon hơn khi thưởng thức vào buổi sáng hoặc sau bữa ăn 30 phút.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-17T00:00:00.000Z"
  },
  {
    "id": "p-061",
    "dbId": 61,
    "slug": "phan-hoa-thien-nhien",
    "name": "Phấn hoa rừng thiên nhiên Đà Lạt",
    "categoryId": "cat-02",
    "dbCategoryId": 1,
    "isContactPrice": false,
    "images": [
      "images/phan-hoa-thien-nhien.jpg",
      "images/mat-ong-thien-nhien.jpg",
      "images/sua-ong-chua-tuoi.jpg"
    ],
    "badges": [
      "new"
    ],
    "rating": 5,
    "soldCount": 493,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-061-250",
        "label": "250g",
        "weightG": 250,
        "price": 170000,
        "originalPrice": 200000,
        "stock": 85
      },
      {
        "id": "p-061-500",
        "label": "500g",
        "weightG": 500,
        "price": 325000,
        "originalPrice": 390000,
        "stock": 60
      },
      {
        "id": "p-061-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 610000,
        "originalPrice": 760000,
        "stock": 40
      }
    ],
    "shortDescription": "Phấn hoa rừng thiên nhiên Đà Lạt chiết xuất từ thảo dược quý canh tác chuẩn sạch tại Đà Lạt – Lâm Đồng, giúp bồi bổ cơ thể, thanh nhiệt, giải độc gan và nâng cao sức đề kháng mỗi ngày.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Phấn hoa rừng thiên nhiên Đà Lạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Dùng trực tiếp hoặc pha với nước ấm 70–85°C. Ngon hơn khi thưởng thức vào buổi sáng hoặc sau bữa ăn 30 phút.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-15T00:00:00.000Z"
  },
  {
    "id": "p-062",
    "dbId": 62,
    "slug": "mat-ong-thien-nhien",
    "name": "Mật ong hoa cà phê thiên nhiên nguyên chất",
    "categoryId": "cat-02",
    "dbCategoryId": 2,
    "isContactPrice": false,
    "images": [
      "images/mat-ong-thien-nhien.jpg",
      "images/sua-ong-chua-tuoi.jpg",
      "images/tinh-chat-gung-mat-ong.jpg"
    ],
    "badges": [],
    "rating": 4.9,
    "soldCount": 566,
    "needs": [
      "tot-suc-khoe",
      "qua-bieu"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-062-250",
        "label": "250g",
        "weightG": 250,
        "price": 240000,
        "originalPrice": 240000,
        "stock": 85
      },
      {
        "id": "p-062-500",
        "label": "500g",
        "weightG": 500,
        "price": 455000,
        "originalPrice": 470000,
        "stock": 60
      },
      {
        "id": "p-062-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 865000,
        "originalPrice": 910000,
        "stock": 40
      }
    ],
    "shortDescription": "Mật ong hoa cà phê thiên nhiên nguyên chất chiết xuất từ thảo dược quý canh tác chuẩn sạch tại Đà Lạt – Lâm Đồng, giúp bồi bổ cơ thể, thanh nhiệt, giải độc gan và nâng cao sức đề kháng mỗi ngày.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Mật ong hoa cà phê thiên nhiên nguyên chất tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Dùng trực tiếp hoặc pha với nước ấm 70–85°C. Ngon hơn khi thưởng thức vào buổi sáng hoặc sau bữa ăn 30 phút.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-14T00:00:00.000Z"
  },
  {
    "id": "p-063",
    "dbId": 63,
    "slug": "sua-ong-chua-tuoi",
    "name": "Sữa ong chúa tươi Lâm Đồng",
    "categoryId": "cat-02",
    "dbCategoryId": 1,
    "isContactPrice": false,
    "images": [
      "images/sua-ong-chua-tuoi.jpg",
      "images/tinh-chat-gung-mat-ong.jpg",
      "images/tao-xoan-spirulina-mat-ong.jpg"
    ],
    "badges": [],
    "rating": 4.8,
    "soldCount": 639,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-063-250",
        "label": "250g",
        "weightG": 250,
        "price": 145000,
        "originalPrice": 145000,
        "stock": 85
      },
      {
        "id": "p-063-500",
        "label": "500g",
        "weightG": 500,
        "price": 275000,
        "originalPrice": 285000,
        "stock": 60
      },
      {
        "id": "p-063-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 520000,
        "originalPrice": 550000,
        "stock": 40
      }
    ],
    "shortDescription": "Sữa ong chúa tươi Lâm Đồng chiết xuất từ thảo dược quý canh tác chuẩn sạch tại Đà Lạt – Lâm Đồng, giúp bồi bổ cơ thể, thanh nhiệt, giải độc gan và nâng cao sức đề kháng mỗi ngày.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Sữa ong chúa tươi Lâm Đồng tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Dùng trực tiếp hoặc pha với nước ấm 70–85°C. Ngon hơn khi thưởng thức vào buổi sáng hoặc sau bữa ăn 30 phút.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-13T00:00:00.000Z"
  },
  {
    "id": "p-064",
    "dbId": 64,
    "slug": "tinh-chat-gung-mat-ong",
    "name": "Tinh chất gừng sẻ ngâm mật ong",
    "categoryId": "cat-02",
    "dbCategoryId": 2,
    "isContactPrice": false,
    "images": [
      "images/tinh-chat-gung-mat-ong.jpg",
      "images/tao-xoan-spirulina-mat-ong.jpg",
      "images/ruou-dong-trung-ha-thao.jpg"
    ],
    "badges": [],
    "rating": 4.7,
    "soldCount": 712,
    "needs": [
      "tot-suc-khoe",
      "qua-bieu"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-064-250",
        "label": "250g",
        "weightG": 250,
        "price": 210000,
        "originalPrice": 250000,
        "stock": 85
      },
      {
        "id": "p-064-500",
        "label": "500g",
        "weightG": 500,
        "price": 400000,
        "originalPrice": 490000,
        "stock": 60
      },
      {
        "id": "p-064-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 755000,
        "originalPrice": 950000,
        "stock": 40
      }
    ],
    "shortDescription": "Tinh chất gừng sẻ ngâm mật ong chiết xuất từ thảo dược quý canh tác chuẩn sạch tại Đà Lạt – Lâm Đồng, giúp bồi bổ cơ thể, thanh nhiệt, giải độc gan và nâng cao sức đề kháng mỗi ngày.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Tinh chất gừng sẻ ngâm mật ong tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Dùng trực tiếp hoặc pha với nước ấm 70–85°C. Ngon hơn khi thưởng thức vào buổi sáng hoặc sau bữa ăn 30 phút.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-12T00:00:00.000Z"
  },
  {
    "id": "p-065",
    "dbId": 65,
    "slug": "vai-thieu-say-kho",
    "name": "Vải thiều sấy khô nguyên vỏ",
    "categoryId": "cat-01",
    "dbCategoryId": 4,
    "isContactPrice": true,
    "images": [
      "images/vai-thieu-say-kho.jpg",
      "images/hong-treo-gio-da-lat.jpg",
      "images/hong-treo-gio-500gr.jpg"
    ],
    "badges": [],
    "rating": 5,
    "soldCount": 785,
    "needs": [
      "an-vat"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-065-250",
        "label": "250g",
        "weightG": 250,
        "price": 95000,
        "originalPrice": 95000,
        "stock": 85
      },
      {
        "id": "p-065-500",
        "label": "500g",
        "weightG": 500,
        "price": 180000,
        "originalPrice": 185000,
        "stock": 60
      },
      {
        "id": "p-065-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 340000,
        "originalPrice": 360000,
        "stock": 40
      }
    ],
    "shortDescription": "Vải thiều sấy khô nguyên vỏ được chế biến từ nông sản tuyển chọn tại vùng nguyên liệu Cầu Đất – Đà Lạt, giữ trọn vị ngọt thanh tự nhiên, mềm dẻo và hoàn toàn không chất bảo quản.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Vải thiều sấy khô nguyên vỏ tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-11T00:00:00.000Z"
  },
  {
    "id": "p-066",
    "dbId": 66,
    "slug": "tao-xoan-spirulina-mat-ong",
    "name": "Tảo xoắn Spirulina ngâm mật ong",
    "categoryId": "cat-02",
    "dbCategoryId": 2,
    "isContactPrice": false,
    "images": [
      "images/tao-xoan-spirulina-mat-ong.jpg",
      "images/ruou-dong-trung-ha-thao.jpg",
      "images/nuoc-yen-dong-trung-ha-thao.jpg"
    ],
    "badges": [
      "new"
    ],
    "rating": 4.9,
    "soldCount": 178,
    "needs": [
      "tot-suc-khoe",
      "qua-bieu"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-066-250",
        "label": "250g",
        "weightG": 250,
        "price": 299000,
        "originalPrice": 299000,
        "stock": 85
      },
      {
        "id": "p-066-500",
        "label": "500g",
        "weightG": 500,
        "price": 570000,
        "originalPrice": 585000,
        "stock": 60
      },
      {
        "id": "p-066-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 1075000,
        "originalPrice": 1135000,
        "stock": 40
      }
    ],
    "shortDescription": "Tảo xoắn Spirulina ngâm mật ong chiết xuất từ thảo dược quý canh tác chuẩn sạch tại Đà Lạt – Lâm Đồng, giúp bồi bổ cơ thể, thanh nhiệt, giải độc gan và nâng cao sức đề kháng mỗi ngày.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Tảo xoắn Spirulina ngâm mật ong tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Dùng trực tiếp hoặc pha với nước ấm 70–85°C. Ngon hơn khi thưởng thức vào buổi sáng hoặc sau bữa ăn 30 phút.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-10T00:00:00.000Z"
  },
  {
    "id": "p-067",
    "dbId": 67,
    "slug": "sinh-to-atiso-do",
    "name": "Sinh tố hoa Atiso đỏ Đà Lạt",
    "categoryId": "cat-03",
    "dbCategoryId": 2,
    "isContactPrice": true,
    "images": [
      "images/sinh-to-atiso-do.jpg",
      "images/dau-tam-ngam-duong.jpg",
      "images/combo-nuoc-cot-trai-cay.jpg"
    ],
    "badges": [],
    "rating": 4.8,
    "soldCount": 251,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-067-250",
        "label": "250g",
        "weightG": 250,
        "price": 65000,
        "originalPrice": 75000,
        "stock": 85
      },
      {
        "id": "p-067-500",
        "label": "500g",
        "weightG": 500,
        "price": 125000,
        "originalPrice": 145000,
        "stock": 60
      },
      {
        "id": "p-067-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 235000,
        "originalPrice": 285000,
        "stock": 40
      }
    ],
    "shortDescription": "Sinh tố hoa Atiso đỏ Đà Lạt mang đậm hương vị tinh tế của phố núi sương mù ở độ cao 1.500m, thích hợp thưởng thức mỗi sáng hoặc làm quà biếu thanh tao.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Sinh tố hoa Atiso đỏ Đà Lạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Dùng trực tiếp hoặc pha với nước ấm 70–85°C. Ngon hơn khi thưởng thức vào buổi sáng hoặc sau bữa ăn 30 phút.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-09T00:00:00.000Z"
  },
  {
    "id": "p-068",
    "dbId": 68,
    "slug": "hat-de-rung",
    "name": "Hạt dẻ rừng rang bơ (Túi 2kg)",
    "categoryId": "cat-04",
    "dbCategoryId": 1,
    "isContactPrice": true,
    "images": [
      "images/hat-de-rung.jpg",
      "images/dau-tay-da-lat.jpg",
      "images/chau-dau-tay-da-lat.jpg"
    ],
    "badges": [],
    "rating": 4.7,
    "soldCount": 324,
    "needs": [
      "tot-suc-khoe",
      "qua-bieu"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-068-250",
        "label": "250g",
        "weightG": 250,
        "price": 280000,
        "originalPrice": 280000,
        "stock": 85
      },
      {
        "id": "p-068-500",
        "label": "500g",
        "weightG": 500,
        "price": 530000,
        "originalPrice": 545000,
        "stock": 60
      },
      {
        "id": "p-068-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 1010000,
        "originalPrice": 1065000,
        "stock": 40
      }
    ],
    "shortDescription": "Hạt dẻ rừng rang bơ (Túi 2kg) thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Hạt dẻ rừng rang bơ tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-08T00:00:00.000Z"
  },
  {
    "id": "p-069",
    "dbId": 69,
    "slug": "ruou-dong-trung-ha-thao",
    "name": "Rượu Đông Trùng Hạ Thảo thượng hạng",
    "categoryId": "cat-02",
    "dbCategoryId": 2,
    "isContactPrice": false,
    "images": [
      "images/ruou-dong-trung-ha-thao.jpg",
      "images/nuoc-yen-dong-trung-ha-thao.jpg",
      "images/dong-trung-ha-thao-say-thang-hoa-10gr.jpg"
    ],
    "badges": [],
    "rating": 5,
    "soldCount": 397,
    "needs": [
      "tot-suc-khoe",
      "qua-bieu"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-069-250",
        "label": "250g",
        "weightG": 250,
        "price": 1050000,
        "originalPrice": 1050000,
        "stock": 85
      },
      {
        "id": "p-069-500",
        "label": "500g",
        "weightG": 500,
        "price": 1995000,
        "originalPrice": 2050000,
        "stock": 60
      },
      {
        "id": "p-069-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 3780000,
        "originalPrice": 3990000,
        "stock": 40
      }
    ],
    "shortDescription": "Rượu Đông Trùng Hạ Thảo thượng hạng chiết xuất từ thảo dược quý canh tác chuẩn sạch tại Đà Lạt – Lâm Đồng, giúp bồi bổ cơ thể, thanh nhiệt, giải độc gan và nâng cao sức đề kháng mỗi ngày.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Rượu Đông Trùng Hạ Thảo thượng hạng tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Dùng trực tiếp hoặc pha với nước ấm 70–85°C. Ngon hơn khi thưởng thức vào buổi sáng hoặc sau bữa ăn 30 phút.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-07T00:00:00.000Z"
  },
  {
    "id": "p-070",
    "dbId": 70,
    "slug": "dau-tay-da-lat",
    "name": "Dâu tây Đà Lạt má đá tươi sạch",
    "categoryId": "cat-04",
    "dbCategoryId": 3,
    "isContactPrice": true,
    "images": [
      "images/dau-tay-da-lat.jpg",
      "images/chau-dau-tay-da-lat.jpg",
      "images/dau-tam-da-lat.jpg"
    ],
    "badges": [],
    "rating": 4.9,
    "soldCount": 470,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-070-250",
        "label": "250g",
        "weightG": 250,
        "price": 140000,
        "originalPrice": 165000,
        "stock": 85
      },
      {
        "id": "p-070-500",
        "label": "500g",
        "weightG": 500,
        "price": 265000,
        "originalPrice": 320000,
        "stock": 60
      },
      {
        "id": "p-070-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 505000,
        "originalPrice": 625000,
        "stock": 40
      }
    ],
    "shortDescription": "Dâu tây Đà Lạt má đá tươi sạch thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Dâu tây Đà Lạt má đá tươi sạch tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-11-06T00:00:00.000Z"
  },
  {
    "id": "p-071",
    "dbId": 71,
    "slug": "chau-dau-tay-da-lat",
    "name": "Chậu Dâu tây Đà Lạt đang sẵn trái",
    "categoryId": "cat-04",
    "dbCategoryId": 3,
    "isContactPrice": true,
    "images": [
      "images/chau-dau-tay-da-lat.jpg",
      "images/dau-tam-da-lat.jpg",
      "images/cam-cara-ruot-do-giong-uc.jpg"
    ],
    "badges": [
      "new"
    ],
    "rating": 4.8,
    "soldCount": 543,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-071-250",
        "label": "250g",
        "weightG": 250,
        "price": 85000,
        "originalPrice": 85000,
        "stock": 85
      },
      {
        "id": "p-071-500",
        "label": "500g",
        "weightG": 500,
        "price": 160000,
        "originalPrice": 165000,
        "stock": 60
      },
      {
        "id": "p-071-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 305000,
        "originalPrice": 325000,
        "stock": 40
      }
    ],
    "shortDescription": "Chậu Dâu tây Đà Lạt đang sẵn trái thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Chậu Dâu tây Đà Lạt đang sẵn trái tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-11-05T00:00:00.000Z"
  },
  {
    "id": "p-072",
    "dbId": 72,
    "slug": "dau-tam-da-lat",
    "name": "Dâu tằm tươi Đà Lạt mọng nước",
    "categoryId": "cat-04",
    "dbCategoryId": 3,
    "isContactPrice": false,
    "images": [
      "images/dau-tam-da-lat.jpg",
      "images/cam-cara-ruot-do-giong-uc.jpg",
      "images/bo-034-da-lat.jpg"
    ],
    "badges": [],
    "rating": 4.7,
    "soldCount": 616,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-072-250",
        "label": "250g",
        "weightG": 250,
        "price": 80000,
        "originalPrice": 80000,
        "stock": 85
      },
      {
        "id": "p-072-500",
        "label": "500g",
        "weightG": 500,
        "price": 150000,
        "originalPrice": 155000,
        "stock": 60
      },
      {
        "id": "p-072-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 290000,
        "originalPrice": 305000,
        "stock": 40
      }
    ],
    "shortDescription": "Dâu tằm tươi Đà Lạt mọng nước thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Dâu tằm tươi Đà Lạt mọng nước tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-11-04T00:00:00.000Z"
  },
  {
    "id": "p-073",
    "dbId": 73,
    "slug": "cam-cara-ruot-do-giong-uc",
    "name": "Cam Cara ruột đỏ giống Úc trồng tại Đà Lạt",
    "categoryId": "cat-04",
    "dbCategoryId": 3,
    "isContactPrice": false,
    "images": [
      "images/cam-cara-ruot-do-giong-uc.jpg",
      "images/bo-034-da-lat.jpg",
      "images/chanh-day-ngot-colombia.jpg"
    ],
    "badges": [],
    "rating": 5,
    "soldCount": 689,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-073-250",
        "label": "250g",
        "weightG": 250,
        "price": 120000,
        "originalPrice": 140000,
        "stock": 85
      },
      {
        "id": "p-073-500",
        "label": "500g",
        "weightG": 500,
        "price": 230000,
        "originalPrice": 275000,
        "stock": 60
      },
      {
        "id": "p-073-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 430000,
        "originalPrice": 530000,
        "stock": 40
      }
    ],
    "shortDescription": "Cam Cara ruột đỏ giống Úc trồng tại Đà Lạt thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Cam Cara ruột đỏ giống Úc trồng tại Đà Lạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-11-03T00:00:00.000Z"
  },
  {
    "id": "p-074",
    "dbId": 74,
    "slug": "bo-034-da-lat",
    "name": "Bơ 034 Đà Lạt dẻo béo loại 1",
    "categoryId": "cat-04",
    "dbCategoryId": 3,
    "isContactPrice": true,
    "images": [
      "images/bo-034-da-lat.jpg",
      "images/bo-booth.jpg",
      "images/ca-chua-than-go.jpg"
    ],
    "badges": [
      "bestseller"
    ],
    "rating": 4.9,
    "soldCount": 1388,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-074-250",
        "label": "250g",
        "weightG": 250,
        "price": 95000,
        "originalPrice": 95000,
        "stock": 85
      },
      {
        "id": "p-074-500",
        "label": "500g",
        "weightG": 500,
        "price": 180000,
        "originalPrice": 185000,
        "stock": 60
      },
      {
        "id": "p-074-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 340000,
        "originalPrice": 360000,
        "stock": 40
      }
    ],
    "shortDescription": "Bơ 034 Đà Lạt dẻo béo loại 1 thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Bơ 034 Đà Lạt dẻo béo loại 1 tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-11-02T00:00:00.000Z"
  },
  {
    "id": "p-075",
    "dbId": 75,
    "slug": "chanh-day-ngot-colombia",
    "name": "Chanh dây ngọt Colombia trồng tại Đà Lạt",
    "categoryId": "cat-04",
    "dbCategoryId": 3,
    "isContactPrice": false,
    "images": [
      "images/chanh-day-ngot-colombia.jpg",
      "images/ca-chua-than-go.jpg",
      "images/qua-sung-my.jpg"
    ],
    "badges": [],
    "rating": 4.8,
    "soldCount": 155,
    "needs": [
      "tot-suc-khoe",
      "qua-bieu"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-075-250",
        "label": "250g",
        "weightG": 250,
        "price": 280000,
        "originalPrice": 360000,
        "stock": 85
      },
      {
        "id": "p-075-500",
        "label": "500g",
        "weightG": 500,
        "price": 530000,
        "originalPrice": 700000,
        "stock": 60
      },
      {
        "id": "p-075-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 1010000,
        "originalPrice": 1370000,
        "stock": 40
      }
    ],
    "shortDescription": "Chanh dây ngọt Colombia trồng tại Đà Lạt thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Chanh dây ngọt Colombia trồng tại Đà Lạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-11-01T00:00:00.000Z"
  },
  {
    "id": "p-076",
    "dbId": 76,
    "slug": "ca-chua-than-go",
    "name": "Cà chua thân gỗ (Tamarillo) Đà Lạt",
    "categoryId": "cat-04",
    "dbCategoryId": 3,
    "isContactPrice": false,
    "images": [
      "images/ca-chua-than-go.jpg",
      "images/qua-sung-my.jpg",
      "images/khoai-lang-mat.jpg"
    ],
    "badges": [
      "new"
    ],
    "rating": 4.7,
    "soldCount": 228,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-076-250",
        "label": "250g",
        "weightG": 250,
        "price": 150000,
        "originalPrice": 175000,
        "stock": 85
      },
      {
        "id": "p-076-500",
        "label": "500g",
        "weightG": 500,
        "price": 285000,
        "originalPrice": 340000,
        "stock": 60
      },
      {
        "id": "p-076-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 540000,
        "originalPrice": 665000,
        "stock": 40
      }
    ],
    "shortDescription": "Cà chua thân gỗ (Tamarillo) Đà Lạt thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Cà chua thân gỗ  Đà Lạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-10-31T00:00:00.000Z"
  },
  {
    "id": "p-077",
    "dbId": 77,
    "slug": "qua-sung-my",
    "name": "Quả Sung Mỹ tươi canh tác hữu cơ",
    "categoryId": "cat-04",
    "dbCategoryId": 3,
    "isContactPrice": false,
    "images": [
      "images/qua-sung-my.jpg",
      "images/khoai-lang-mat.jpg",
      "images/chuoi-laba-tuoi.jpg"
    ],
    "badges": [],
    "rating": 5,
    "soldCount": 301,
    "needs": [
      "tot-suc-khoe",
      "qua-bieu"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-077-250",
        "label": "250g",
        "weightG": 250,
        "price": 360000,
        "originalPrice": 360000,
        "stock": 85
      },
      {
        "id": "p-077-500",
        "label": "500g",
        "weightG": 500,
        "price": 685000,
        "originalPrice": 700000,
        "stock": 60
      },
      {
        "id": "p-077-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 1295000,
        "originalPrice": 1370000,
        "stock": 40
      }
    ],
    "shortDescription": "Quả Sung Mỹ tươi canh tác hữu cơ thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Quả Sung Mỹ tươi canh tác hữu cơ tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-10-30T00:00:00.000Z"
  },
  {
    "id": "p-078",
    "dbId": 78,
    "slug": "khoai-lang-mat",
    "name": "Khoai lang mật Đà Lạt tươi dẻo tươm mật",
    "categoryId": "cat-04",
    "dbCategoryId": 3,
    "isContactPrice": false,
    "images": [
      "images/khoai-lang-mat.jpg",
      "images/chuoi-laba-tuoi.jpg",
      "images/phuc-bon-tu-do.jpg"
    ],
    "badges": [],
    "rating": 4.9,
    "soldCount": 374,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-078-250",
        "label": "250g",
        "weightG": 250,
        "price": 55000,
        "originalPrice": 55000,
        "stock": 85
      },
      {
        "id": "p-078-500",
        "label": "500g",
        "weightG": 500,
        "price": 105000,
        "originalPrice": 105000,
        "stock": 60
      },
      {
        "id": "p-078-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 200000,
        "originalPrice": 210000,
        "stock": 40
      }
    ],
    "shortDescription": "Khoai lang mật Đà Lạt tươi dẻo tươm mật thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Khoai lang mật Đà Lạt tươi dẻo tươm mật tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-10-29T00:00:00.000Z"
  },
  {
    "id": "p-079",
    "dbId": 79,
    "slug": "chuoi-laba-tuoi",
    "name": "Chuối Laba Đà Lạt tươi tiến vua",
    "categoryId": "cat-04",
    "dbCategoryId": 3,
    "isContactPrice": false,
    "images": [
      "images/chuoi-laba-tuoi.jpg",
      "images/phuc-bon-tu-do.jpg",
      "images/phuc-bon-tu-den.jpg"
    ],
    "badges": [],
    "rating": 4.8,
    "soldCount": 447,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-079-250",
        "label": "250g",
        "weightG": 250,
        "price": 30000,
        "originalPrice": 35000,
        "stock": 85
      },
      {
        "id": "p-079-500",
        "label": "500g",
        "weightG": 500,
        "price": 55000,
        "originalPrice": 70000,
        "stock": 60
      },
      {
        "id": "p-079-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 110000,
        "originalPrice": 135000,
        "stock": 40
      }
    ],
    "shortDescription": "Chuối Laba Đà Lạt tươi tiến vua thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Chuối Laba Đà Lạt tươi tiến vua tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-10-28T00:00:00.000Z"
  },
  {
    "id": "p-080",
    "dbId": 80,
    "slug": "phuc-bon-tu-do",
    "name": "Phúc bồn tử đỏ tươi Đà Lạt",
    "categoryId": "cat-04",
    "dbCategoryId": 3,
    "isContactPrice": false,
    "images": [
      "images/phuc-bon-tu-do.jpg",
      "images/phuc-bon-tu-den.jpg",
      "images/qua-tam-bop.jpg"
    ],
    "badges": [],
    "rating": 4.7,
    "soldCount": 520,
    "needs": [
      "tot-suc-khoe",
      "qua-bieu"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-080-250",
        "label": "250g",
        "weightG": 250,
        "price": 450000,
        "originalPrice": 450000,
        "stock": 85
      },
      {
        "id": "p-080-500",
        "label": "500g",
        "weightG": 500,
        "price": 855000,
        "originalPrice": 880000,
        "stock": 60
      },
      {
        "id": "p-080-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 1620000,
        "originalPrice": 1710000,
        "stock": 40
      }
    ],
    "shortDescription": "Phúc bồn tử đỏ tươi Đà Lạt thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Phúc bồn tử đỏ tươi Đà Lạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-10-27T00:00:00.000Z"
  },
  {
    "id": "p-081",
    "dbId": 81,
    "slug": "phuc-bon-tu-den",
    "name": "Phúc bồn tử đen tươi Đà Lạt",
    "categoryId": "cat-04",
    "dbCategoryId": 3,
    "isContactPrice": false,
    "images": [
      "images/phuc-bon-tu-den.jpg",
      "images/qua-tam-bop.jpg",
      "images/hong-gion-chin-nen.jpg"
    ],
    "badges": [
      "new"
    ],
    "rating": 5,
    "soldCount": 593,
    "needs": [
      "tot-suc-khoe",
      "qua-bieu"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-081-250",
        "label": "250g",
        "weightG": 250,
        "price": 400000,
        "originalPrice": 400000,
        "stock": 85
      },
      {
        "id": "p-081-500",
        "label": "500g",
        "weightG": 500,
        "price": 760000,
        "originalPrice": 780000,
        "stock": 60
      },
      {
        "id": "p-081-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 1440000,
        "originalPrice": 1520000,
        "stock": 40
      }
    ],
    "shortDescription": "Phúc bồn tử đen tươi Đà Lạt thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Phúc bồn tử đen tươi Đà Lạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-10-26T00:00:00.000Z"
  },
  {
    "id": "p-082",
    "dbId": 82,
    "slug": "qua-tam-bop",
    "name": "Quả Tầm bóp Nam Mỹ (Thù lù) Đà Lạt",
    "categoryId": "cat-04",
    "dbCategoryId": 3,
    "isContactPrice": false,
    "images": [
      "images/qua-tam-bop.jpg",
      "images/hong-gion-chin-nen.jpg",
      "images/ca-chua-baby-da-lat.jpg"
    ],
    "badges": [],
    "rating": 4.9,
    "soldCount": 666,
    "needs": [
      "tot-suc-khoe",
      "qua-bieu"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-082-250",
        "label": "250g",
        "weightG": 250,
        "price": 320000,
        "originalPrice": 380000,
        "stock": 85
      },
      {
        "id": "p-082-500",
        "label": "500g",
        "weightG": 500,
        "price": 610000,
        "originalPrice": 740000,
        "stock": 60
      },
      {
        "id": "p-082-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 1150000,
        "originalPrice": 1445000,
        "stock": 40
      }
    ],
    "shortDescription": "Quả Tầm bóp Nam Mỹ (Thù lù) Đà Lạt thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Quả Tầm bóp Nam Mỹ  Đà Lạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-10-25T00:00:00.000Z"
  },
  {
    "id": "p-083",
    "dbId": 83,
    "slug": "hong-gion-chin-nen",
    "name": "Hồng giòn Chín Nên Đà Lạt không hạt",
    "categoryId": "cat-04",
    "dbCategoryId": 3,
    "isContactPrice": true,
    "images": [
      "images/hong-gion-chin-nen.jpg",
      "images/ca-chua-baby-da-lat.jpg",
      "images/chanh-day-tim-ngot.jpg"
    ],
    "badges": [],
    "rating": 4.8,
    "soldCount": 739,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-083-250",
        "label": "250g",
        "weightG": 250,
        "price": 65000,
        "originalPrice": 65000,
        "stock": 85
      },
      {
        "id": "p-083-500",
        "label": "500g",
        "weightG": 500,
        "price": 125000,
        "originalPrice": 125000,
        "stock": 60
      },
      {
        "id": "p-083-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 235000,
        "originalPrice": 245000,
        "stock": 40
      }
    ],
    "shortDescription": "Hồng giòn Chín Nên Đà Lạt không hạt thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Hồng giòn Chín Nên Đà Lạt không hạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-10-24T00:00:00.000Z"
  },
  {
    "id": "p-084",
    "dbId": 84,
    "slug": "ca-chua-baby-da-lat",
    "name": "Cà chua Baby Đà Lạt ngọt thanh",
    "categoryId": "cat-04",
    "dbCategoryId": 3,
    "isContactPrice": false,
    "images": [
      "images/ca-chua-baby-da-lat.jpg",
      "images/chanh-day-tim-ngot.jpg",
      "images/dua-le-phap.jpg"
    ],
    "badges": [],
    "rating": 4.7,
    "soldCount": 132,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-084-250",
        "label": "250g",
        "weightG": 250,
        "price": 90000,
        "originalPrice": 90000,
        "stock": 85
      },
      {
        "id": "p-084-500",
        "label": "500g",
        "weightG": 500,
        "price": 170000,
        "originalPrice": 175000,
        "stock": 60
      },
      {
        "id": "p-084-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 325000,
        "originalPrice": 340000,
        "stock": 40
      }
    ],
    "shortDescription": "Cà chua Baby Đà Lạt ngọt thanh thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Cà chua Baby Đà Lạt ngọt thanh tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-10-23T00:00:00.000Z"
  },
  {
    "id": "p-085",
    "dbId": 85,
    "slug": "chanh-day-tim-ngot",
    "name": "Chanh dây tím ngọt Đà Lạt",
    "categoryId": "cat-04",
    "dbCategoryId": 3,
    "isContactPrice": false,
    "images": [
      "images/chanh-day-tim-ngot.jpg",
      "images/dua-le-phap.jpg",
      "images/sam-dat-da-lat-sam-dat-yacon.jpg"
    ],
    "badges": [],
    "rating": 5,
    "soldCount": 205,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-085-250",
        "label": "250g",
        "weightG": 250,
        "price": 150000,
        "originalPrice": 180000,
        "stock": 85
      },
      {
        "id": "p-085-500",
        "label": "500g",
        "weightG": 500,
        "price": 285000,
        "originalPrice": 350000,
        "stock": 60
      },
      {
        "id": "p-085-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 540000,
        "originalPrice": 685000,
        "stock": 40
      }
    ],
    "shortDescription": "Chanh dây tím ngọt Đà Lạt thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Chanh dây tím ngọt Đà Lạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-10-22T00:00:00.000Z"
  },
  {
    "id": "p-086",
    "dbId": 86,
    "slug": "dua-le-phap",
    "name": "Dưa lê Pháp trồng nhà kính Đà Lạt",
    "categoryId": "cat-04",
    "dbCategoryId": 3,
    "isContactPrice": true,
    "images": [
      "images/dua-le-phap.jpg",
      "images/sam-dat-da-lat-sam-dat-yacon.jpg",
      "images/hong-gion-trung-da.jpg"
    ],
    "badges": [
      "new"
    ],
    "rating": 4.9,
    "soldCount": 278,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-086-250",
        "label": "250g",
        "weightG": 250,
        "price": 110000,
        "originalPrice": 110000,
        "stock": 85
      },
      {
        "id": "p-086-500",
        "label": "500g",
        "weightG": 500,
        "price": 210000,
        "originalPrice": 215000,
        "stock": 60
      },
      {
        "id": "p-086-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 395000,
        "originalPrice": 420000,
        "stock": 40
      }
    ],
    "shortDescription": "Dưa lê Pháp trồng nhà kính Đà Lạt thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Dưa lê Pháp trồng nhà kính Đà Lạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-10-21T00:00:00.000Z"
  },
  {
    "id": "p-087",
    "dbId": 87,
    "slug": "sam-dat-da-lat-sam-dat-yacon",
    "name": "Sâm đất Đà Lạt (Yacon) giòn ngọt mát",
    "categoryId": "cat-04",
    "dbCategoryId": 3,
    "isContactPrice": true,
    "images": [
      "images/sam-dat-da-lat-sam-dat-yacon.jpg",
      "images/hong-gion-trung-da.jpg",
      "images/dau-my-albion.jpg"
    ],
    "badges": [],
    "rating": 4.8,
    "soldCount": 351,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-087-250",
        "label": "250g",
        "weightG": 250,
        "price": 65000,
        "originalPrice": 65000,
        "stock": 85
      },
      {
        "id": "p-087-500",
        "label": "500g",
        "weightG": 500,
        "price": 125000,
        "originalPrice": 125000,
        "stock": 60
      },
      {
        "id": "p-087-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 235000,
        "originalPrice": 245000,
        "stock": 40
      }
    ],
    "shortDescription": "Sâm đất Đà Lạt (Yacon) giòn ngọt mát thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Sâm đất Đà Lạt  giòn ngọt mát tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-10-20T00:00:00.000Z"
  },
  {
    "id": "p-088",
    "dbId": 88,
    "slug": "hong-gion-trung-da",
    "name": "Hồng giòn trứng đá Đà Lạt",
    "categoryId": "cat-04",
    "dbCategoryId": 3,
    "isContactPrice": false,
    "images": [
      "images/hong-gion-trung-da.jpg",
      "images/dau-my-albion.jpg",
      "images/ot-trai-cay-sweet-palermo.jpg"
    ],
    "badges": [],
    "rating": 4.7,
    "soldCount": 424,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-088-250",
        "label": "250g",
        "weightG": 250,
        "price": 75000,
        "originalPrice": 90000,
        "stock": 85
      },
      {
        "id": "p-088-500",
        "label": "500g",
        "weightG": 500,
        "price": 145000,
        "originalPrice": 175000,
        "stock": 60
      },
      {
        "id": "p-088-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 270000,
        "originalPrice": 340000,
        "stock": 40
      }
    ],
    "shortDescription": "Hồng giòn trứng đá Đà Lạt thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Hồng giòn trứng đá Đà Lạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-10-19T00:00:00.000Z"
  },
  {
    "id": "p-089",
    "dbId": 89,
    "slug": "dau-my-albion",
    "name": "Dâu tây Mỹ Albion Đà Lạt",
    "categoryId": "cat-04",
    "dbCategoryId": 3,
    "isContactPrice": true,
    "images": [
      "images/dau-my-albion.jpg",
      "images/ot-trai-cay-sweet-palermo.jpg",
      "images/chanh-day-vang-ngot-huong-oi.jpg"
    ],
    "badges": [],
    "rating": 5,
    "soldCount": 497,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-089-250",
        "label": "250g",
        "weightG": 250,
        "price": 160000,
        "originalPrice": 160000,
        "stock": 85
      },
      {
        "id": "p-089-500",
        "label": "500g",
        "weightG": 500,
        "price": 305000,
        "originalPrice": 310000,
        "stock": 60
      },
      {
        "id": "p-089-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 575000,
        "originalPrice": 610000,
        "stock": 40
      }
    ],
    "shortDescription": "Dâu tây Mỹ Albion Đà Lạt thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Dâu tây Mỹ Albion Đà Lạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-10-18T00:00:00.000Z"
  },
  {
    "id": "p-090",
    "dbId": 90,
    "slug": "ot-trai-cay-sweet-palermo",
    "name": "Ớt trái cây ngọt Sweet Palermo Đà Lạt",
    "categoryId": "cat-04",
    "dbCategoryId": 3,
    "isContactPrice": false,
    "images": [
      "images/ot-trai-cay-sweet-palermo.jpg",
      "images/chanh-day-vang-ngot-huong-oi.jpg",
      "images/dua-pepino-tim.jpg"
    ],
    "badges": [],
    "rating": 4.9,
    "soldCount": 570,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-090-250",
        "label": "250g",
        "weightG": 250,
        "price": 180000,
        "originalPrice": 180000,
        "stock": 85
      },
      {
        "id": "p-090-500",
        "label": "500g",
        "weightG": 500,
        "price": 340000,
        "originalPrice": 350000,
        "stock": 60
      },
      {
        "id": "p-090-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 650000,
        "originalPrice": 685000,
        "stock": 40
      }
    ],
    "shortDescription": "Ớt trái cây ngọt Sweet Palermo Đà Lạt thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Ớt trái cây ngọt Sweet Palermo Đà Lạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-10-17T00:00:00.000Z"
  },
  {
    "id": "p-091",
    "dbId": 91,
    "slug": "chanh-day-vang-ngot-huong-oi",
    "name": "Chanh dây vàng ngọt hương ổi Đà Lạt",
    "categoryId": "cat-04",
    "dbCategoryId": 3,
    "isContactPrice": false,
    "images": [
      "images/chanh-day-vang-ngot-huong-oi.jpg",
      "images/dua-pepino-tim.jpg",
      "images/dua-pepino-vang.jpg"
    ],
    "badges": [
      "new"
    ],
    "rating": 4.8,
    "soldCount": 643,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-091-250",
        "label": "250g",
        "weightG": 250,
        "price": 150000,
        "originalPrice": 175000,
        "stock": 85
      },
      {
        "id": "p-091-500",
        "label": "500g",
        "weightG": 500,
        "price": 285000,
        "originalPrice": 340000,
        "stock": 60
      },
      {
        "id": "p-091-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 540000,
        "originalPrice": 665000,
        "stock": 40
      }
    ],
    "shortDescription": "Chanh dây vàng ngọt hương ổi Đà Lạt thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Chanh dây vàng ngọt hương ổi Đà Lạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-11-15T00:00:00.000Z"
  },
  {
    "id": "p-092",
    "dbId": 92,
    "slug": "dua-pepino-tim",
    "name": "Dưa Pepino sọc tím Đà Lạt",
    "categoryId": "cat-04",
    "dbCategoryId": 3,
    "isContactPrice": false,
    "images": [
      "images/dua-pepino-tim.jpg",
      "images/dua-pepino-vang.jpg",
      "images/nuoc-chanh-day-co-dac-dong-lanh.jpg"
    ],
    "badges": [],
    "rating": 4.7,
    "soldCount": 716,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-092-250",
        "label": "250g",
        "weightG": 250,
        "price": 160000,
        "originalPrice": 160000,
        "stock": 85
      },
      {
        "id": "p-092-500",
        "label": "500g",
        "weightG": 500,
        "price": 305000,
        "originalPrice": 310000,
        "stock": 60
      },
      {
        "id": "p-092-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 575000,
        "originalPrice": 610000,
        "stock": 40
      }
    ],
    "shortDescription": "Dưa Pepino sọc tím Đà Lạt thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Dưa Pepino sọc tím Đà Lạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-11-14T00:00:00.000Z"
  },
  {
    "id": "p-093",
    "dbId": 93,
    "slug": "dua-pepino-vang",
    "name": "Dưa Pepino vàng mật Đà Lạt",
    "categoryId": "cat-04",
    "dbCategoryId": 3,
    "isContactPrice": false,
    "images": [
      "images/dua-pepino-vang.jpg",
      "images/nuoc-chanh-day-co-dac-dong-lanh.jpg",
      "images/chanh-day-dong-lanh-bo-doi.jpg"
    ],
    "badges": [],
    "rating": 5,
    "soldCount": 789,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-093-250",
        "label": "250g",
        "weightG": 250,
        "price": 160000,
        "originalPrice": 160000,
        "stock": 85
      },
      {
        "id": "p-093-500",
        "label": "500g",
        "weightG": 500,
        "price": 305000,
        "originalPrice": 310000,
        "stock": 60
      },
      {
        "id": "p-093-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 575000,
        "originalPrice": 610000,
        "stock": 40
      }
    ],
    "shortDescription": "Dưa Pepino vàng mật Đà Lạt thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Dưa Pepino vàng mật Đà Lạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-11-13T00:00:00.000Z"
  },
  {
    "id": "p-094",
    "dbId": 94,
    "slug": "qua-tet-xuan-binh-an",
    "name": "Set Quà Tết Xuân Bình An Thượng Hạng (TQ3)",
    "categoryId": "cat-06",
    "dbCategoryId": 6,
    "isContactPrice": false,
    "images": [
      "images/qua-tet-xuan-binh-an.jpg",
      "images/hop-qua-tet-cao-cap-06-mon.jpg",
      "images/hop-qua-tet-dac-san-da-lat-04-mon.jpg"
    ],
    "badges": [
      "ocop"
    ],
    "rating": 4.9,
    "soldCount": 182,
    "needs": [
      "qua-bieu"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "qua-tet-xuan-binh-an-std",
        "label": "Set Xuân Bình An (TQ3)",
        "weightG": 2500,
        "price": 1340000,
        "originalPrice": 1550000,
        "stock": 35
      },
      {
        "id": "qua-tet-xuan-binh-an-vip",
        "label": "Set Phú Quý (Kèm Đông Trùng)",
        "weightG": 2800,
        "price": 1790000,
        "originalPrice": 2100000,
        "stock": 20
      },
      {
        "id": "qua-tet-xuan-binh-an-lux",
        "label": "Set Doanh Nhân Thượng Hạng",
        "weightG": 3200,
        "price": 2450000,
        "originalPrice": 2850000,
        "stock": 15
      }
    ],
    "shortDescription": "Set Quà Tết Xuân Bình An Thượng Hạng (TQ3) được thiết kế sang trọng, tinh tế, hội tụ những thức quà đặc sản thượng hạng nhất của Đà Lạt – lựa chọn hoàn hảo để biếu tặng gia đình và đối tác.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Set Quà Tết Xuân Bình An Thượng Hạng tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-12T00:00:00.000Z"
  },
  {
    "id": "p-095",
    "dbId": 95,
    "slug": "hop-qua-tet-cao-cap-06-mon",
    "name": "Hộp Quà Biếu Cao Cấp Đà Lạt 06 Món",
    "categoryId": "cat-06",
    "dbCategoryId": 6,
    "isContactPrice": false,
    "images": [
      "images/hop-qua-tet-cao-cap-06-mon.jpg",
      "images/hop-qua-tet-dac-san-da-lat-04-mon.jpg",
      "images/hop-dau-tay-trai-tim.jpg"
    ],
    "badges": [
      "ocop",
      "bestseller"
    ],
    "rating": 4.8,
    "soldCount": 1065,
    "flashSaleTarget": 1245,
    "needs": [
      "qua-bieu"
    ],
    "isFlashSale": true,
    "flashSale": {
      "offsetHours": 48
    },
    "variants": [
      {
        "id": "hop-qua-tet-cao-cap-06-mon-std",
        "label": "Hộp 6 món (Cao cấp)",
        "weightG": 1800,
        "price": 490000,
        "originalPrice": 580000,
        "stock": 80
      },
      {
        "id": "hop-qua-tet-cao-cap-06-mon-plus",
        "label": "Hộp 6 món + Cao Atiso",
        "weightG": 2200,
        "price": 690000,
        "originalPrice": 820000,
        "stock": 45
      },
      {
        "id": "hop-qua-tet-cao-cap-06-mon-corp",
        "label": "Combo 5 Hộp (Doanh nghiệp)",
        "weightG": 9000,
        "price": 2300000,
        "originalPrice": 2900000,
        "stock": 20
      }
    ],
    "shortDescription": "Hộp Quà Biếu Cao Cấp Đà Lạt 06 Món được thiết kế sang trọng, tinh tế, hội tụ những thức quà đặc sản thượng hạng nhất của Đà Lạt – lựa chọn hoàn hảo để biếu tặng gia đình và đối tác.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Hộp Quà Biếu Cao Cấp Đà Lạt 06 Món tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-11T00:00:00.000Z"
  },
  {
    "id": "p-096",
    "dbId": 96,
    "slug": "hop-qua-tet-dac-san-da-lat-04-mon",
    "name": "Hộp Quà Đặc Sản Đà Lạt Tinh Hoa 04 Món",
    "categoryId": "cat-06",
    "dbCategoryId": 6,
    "isContactPrice": false,
    "images": [
      "images/hop-qua-tet-dac-san-da-lat-04-mon.jpg",
      "images/qua-tet-xuan-binh-an.jpg",
      "images/hoa-bat-tu-tinh-yeu.jpg"
    ],
    "badges": [
      "bestseller"
    ],
    "rating": 4.7,
    "soldCount": 1202,
    "needs": [
      "qua-bieu"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "hop-qua-tet-dac-san-da-lat-04-mon-std",
        "label": "Hộp 4 món (Tiêu chuẩn)",
        "weightG": 1200,
        "price": 390000,
        "originalPrice": 450000,
        "stock": 60
      },
      {
        "id": "hop-qua-tet-dac-san-da-lat-04-mon-vip",
        "label": "Hộp 4 món + Trà Ô Long",
        "weightG": 1500,
        "price": 490000,
        "originalPrice": 560000,
        "stock": 40
      },
      {
        "id": "hop-qua-tet-dac-san-da-lat-04-mon-corp",
        "label": "Combo 5 Hộp (Ưu đãi)",
        "weightG": 6000,
        "price": 1850000,
        "originalPrice": 2250000,
        "stock": 25
      }
    ],
    "shortDescription": "Hộp Quà Đặc Sản Đà Lạt Tinh Hoa 04 Món được thiết kế sang trọng, tinh tế, hội tụ những thức quà đặc sản thượng hạng nhất của Đà Lạt – lựa chọn hoàn hảo để biếu tặng gia đình và đối tác.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Hộp Quà Đặc Sản Đà Lạt Tinh Hoa 04 Món tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-10T00:00:00.000Z"
  },
  {
    "id": "p-097",
    "dbId": 97,
    "slug": "bot-can-tay",
    "name": "Bột cần tây sấy lạnh nguyên chất Đà Lạt",
    "categoryId": "cat-05",
    "dbCategoryId": 7,
    "isContactPrice": false,
    "images": [
      "images/bot-can-tay.jpg",
      "images/bot-rau-ma-dau-xanh-cot-dua.jpg",
      "images/bot-rau-ma.jpg"
    ],
    "badges": [
      "ocop",
      "bestseller"
    ],
    "rating": 5,
    "soldCount": 1339,
    "needs": [
      "tot-suc-khoe",
      "qua-bieu"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-097-250",
        "label": "250g",
        "weightG": 250,
        "price": 150000,
        "originalPrice": 175000,
        "stock": 85
      },
      {
        "id": "p-097-500",
        "label": "500g",
        "weightG": 500,
        "price": 285000,
        "originalPrice": 340000,
        "stock": 60
      },
      {
        "id": "p-097-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 540000,
        "originalPrice": 665000,
        "stock": 40
      }
    ],
    "shortDescription": "Bột cần tây sấy lạnh nguyên chất Đà Lạt sản xuất bằng công nghệ sấy lạnh tiệt trùng hiện đại, giữ nguyên màu sắc tự nhiên và hàm lượng chất xơ, khoáng chất từ rau củ tươi Đà Lạt.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Bột cần tây sấy lạnh nguyên chất Đà Lạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Pha 1 gói (3g–5g) với 150ml–200ml nước ấm hoặc nước lọc, khuấy đều. Có thể mix cùng sữa tươi, mật ong, sữa chua.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-09T00:00:00.000Z"
  },
  {
    "id": "p-098",
    "dbId": 98,
    "slug": "dau-tam-ngam-duong",
    "name": "Dâu tằm Đà Lạt ngâm đường phèn",
    "categoryId": "cat-03",
    "dbCategoryId": 2,
    "isContactPrice": false,
    "images": [
      "images/dau-tam-ngam-duong.jpg",
      "images/combo-nuoc-cot-trai-cay.jpg",
      "images/nuoc-cot-atiso-do.jpg"
    ],
    "badges": [],
    "rating": 4.9,
    "soldCount": 474,
    "needs": [
      "tot-suc-khoe",
      "qua-bieu"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-098-250",
        "label": "250g",
        "weightG": 250,
        "price": 400000,
        "originalPrice": 400000,
        "stock": 85
      },
      {
        "id": "p-098-500",
        "label": "500g",
        "weightG": 500,
        "price": 760000,
        "originalPrice": 780000,
        "stock": 60
      },
      {
        "id": "p-098-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 1440000,
        "originalPrice": 1520000,
        "stock": 40
      }
    ],
    "shortDescription": "Dâu tằm Đà Lạt ngâm đường phèn mang đậm hương vị tinh tế của phố núi sương mù ở độ cao 1.500m, thích hợp thưởng thức mỗi sáng hoặc làm quà biếu thanh tao.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Dâu tằm Đà Lạt ngâm đường phèn tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Dùng trực tiếp hoặc pha với nước ấm 70–85°C. Ngon hơn khi thưởng thức vào buổi sáng hoặc sau bữa ăn 30 phút.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-08T00:00:00.000Z"
  },
  {
    "id": "p-099",
    "dbId": 99,
    "slug": "nuoc-chanh-day-co-dac-dong-lanh",
    "name": "Nước cốt chanh dây cô đặc cấp đông",
    "categoryId": "cat-04",
    "dbCategoryId": 8,
    "isContactPrice": true,
    "images": [
      "images/nuoc-chanh-day-co-dac-dong-lanh.jpg",
      "images/chanh-day-dong-lanh-bo-doi.jpg",
      "images/phuc-bon-tu-dong-lanh.jpg"
    ],
    "badges": [],
    "rating": 4.8,
    "soldCount": 547,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-099-250",
        "label": "250g",
        "weightG": 250,
        "price": 95000,
        "originalPrice": 95000,
        "stock": 85
      },
      {
        "id": "p-099-500",
        "label": "500g",
        "weightG": 500,
        "price": 180000,
        "originalPrice": 185000,
        "stock": 60
      },
      {
        "id": "p-099-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 340000,
        "originalPrice": 360000,
        "stock": 40
      }
    ],
    "shortDescription": "Nước cốt chanh dây cô đặc cấp đông thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Nước cốt chanh dây cô đặc cấp đông tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-11-07T00:00:00.000Z"
  },
  {
    "id": "p-100",
    "dbId": 100,
    "slug": "chanh-day-dong-lanh-bo-doi",
    "name": "Chanh dây Đà Lạt cấp đông bổ đôi",
    "categoryId": "cat-04",
    "dbCategoryId": 8,
    "isContactPrice": true,
    "images": [
      "images/chanh-day-dong-lanh-bo-doi.jpg",
      "images/phuc-bon-tu-dong-lanh.jpg",
      "images/bo-cap-dong.jpg"
    ],
    "badges": [],
    "rating": 4.7,
    "soldCount": 620,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-100-250",
        "label": "250g",
        "weightG": 250,
        "price": 85000,
        "originalPrice": 100000,
        "stock": 85
      },
      {
        "id": "p-100-500",
        "label": "500g",
        "weightG": 500,
        "price": 160000,
        "originalPrice": 195000,
        "stock": 60
      },
      {
        "id": "p-100-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 305000,
        "originalPrice": 380000,
        "stock": 40
      }
    ],
    "shortDescription": "Chanh dây Đà Lạt cấp đông bổ đôi thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Chanh dây Đà Lạt cấp đông bổ đôi tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-11-06T00:00:00.000Z"
  },
  {
    "id": "p-101",
    "dbId": 101,
    "slug": "phuc-bon-tu-dong-lanh",
    "name": "Phúc bồn tử Đà Lạt cấp đông nguyên trái",
    "categoryId": "cat-04",
    "dbCategoryId": 8,
    "isContactPrice": true,
    "images": [
      "images/phuc-bon-tu-dong-lanh.jpg",
      "images/bo-cap-dong.jpg",
      "images/dau-tay-dong-lanh.jpg"
    ],
    "badges": [
      "new"
    ],
    "rating": 5,
    "soldCount": 693,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-101-250",
        "label": "250g",
        "weightG": 250,
        "price": 195000,
        "originalPrice": 195000,
        "stock": 85
      },
      {
        "id": "p-101-500",
        "label": "500g",
        "weightG": 500,
        "price": 370000,
        "originalPrice": 380000,
        "stock": 60
      },
      {
        "id": "p-101-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 700000,
        "originalPrice": 740000,
        "stock": 40
      }
    ],
    "shortDescription": "Phúc bồn tử Đà Lạt cấp đông nguyên trái thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Phúc bồn tử Đà Lạt cấp đông nguyên trái tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-11-05T00:00:00.000Z"
  },
  {
    "id": "p-102",
    "dbId": 102,
    "slug": "bo-cap-dong",
    "name": "Bơ sáp Đà Lạt cấp đông hút chân không",
    "categoryId": "cat-04",
    "dbCategoryId": 8,
    "isContactPrice": true,
    "images": [
      "images/bo-cap-dong.jpg",
      "images/dau-tay-dong-lanh.jpg",
      "images/hong-gion-fuyu.jpg"
    ],
    "badges": [],
    "rating": 4.9,
    "soldCount": 766,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-102-250",
        "label": "250g",
        "weightG": 250,
        "price": 110000,
        "originalPrice": 110000,
        "stock": 85
      },
      {
        "id": "p-102-500",
        "label": "500g",
        "weightG": 500,
        "price": 210000,
        "originalPrice": 215000,
        "stock": 60
      },
      {
        "id": "p-102-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 395000,
        "originalPrice": 420000,
        "stock": 40
      }
    ],
    "shortDescription": "Bơ sáp Đà Lạt cấp đông hút chân không thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Bơ sáp Đà Lạt cấp đông hút chân không tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-11-04T00:00:00.000Z"
  },
  {
    "id": "p-103",
    "dbId": 103,
    "slug": "dau-tay-dong-lanh",
    "name": "Dâu tây Đà Lạt cấp đông nguyên trái",
    "categoryId": "cat-04",
    "dbCategoryId": 8,
    "isContactPrice": true,
    "images": [
      "images/dau-tay-dong-lanh.jpg",
      "images/hong-gion-fuyu.jpg",
      "images/dau-tay-new-zealand.jpg"
    ],
    "badges": [],
    "rating": 4.8,
    "soldCount": 159,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-103-250",
        "label": "250g",
        "weightG": 250,
        "price": 95000,
        "originalPrice": 110000,
        "stock": 85
      },
      {
        "id": "p-103-500",
        "label": "500g",
        "weightG": 500,
        "price": 180000,
        "originalPrice": 215000,
        "stock": 60
      },
      {
        "id": "p-103-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 340000,
        "originalPrice": 420000,
        "stock": 40
      }
    ],
    "shortDescription": "Dâu tây Đà Lạt cấp đông nguyên trái thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Dâu tây Đà Lạt cấp đông nguyên trái tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-11-03T00:00:00.000Z"
  },
  {
    "id": "p-104",
    "dbId": 104,
    "slug": "bot-rau-ma-dau-xanh-cot-dua",
    "name": "Bột rau má đậu xanh cốt dừa sấy lạnh",
    "categoryId": "cat-05",
    "dbCategoryId": 7,
    "isContactPrice": true,
    "images": [
      "images/bot-rau-ma-dau-xanh-cot-dua.jpg",
      "images/bot-rau-ma.jpg",
      "images/bot-diep-ca.jpg"
    ],
    "badges": [],
    "rating": 4.7,
    "soldCount": 232,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-104-250",
        "label": "250g",
        "weightG": 250,
        "price": 135000,
        "originalPrice": 135000,
        "stock": 85
      },
      {
        "id": "p-104-500",
        "label": "500g",
        "weightG": 500,
        "price": 255000,
        "originalPrice": 265000,
        "stock": 60
      },
      {
        "id": "p-104-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 485000,
        "originalPrice": 515000,
        "stock": 40
      }
    ],
    "shortDescription": "Bột rau má đậu xanh cốt dừa sấy lạnh sản xuất bằng công nghệ sấy lạnh tiệt trùng hiện đại, giữ nguyên màu sắc tự nhiên và hàm lượng chất xơ, khoáng chất từ rau củ tươi Đà Lạt.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Bột rau má đậu xanh cốt dừa sấy lạnh tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Pha 1 gói (3g–5g) với 150ml–200ml nước ấm hoặc nước lọc, khuấy đều. Có thể mix cùng sữa tươi, mật ong, sữa chua.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-02T00:00:00.000Z"
  },
  {
    "id": "p-105",
    "dbId": 105,
    "slug": "bot-rau-ma",
    "name": "Bột rau má sấy lạnh nguyên chất",
    "categoryId": "cat-05",
    "dbCategoryId": 7,
    "isContactPrice": true,
    "images": [
      "images/bot-rau-ma.jpg",
      "images/bot-diep-ca.jpg",
      "images/bot-rau-cu-cho-be.jpg"
    ],
    "badges": [
      "bestseller"
    ],
    "rating": 5,
    "soldCount": 2435,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-105-250",
        "label": "250g",
        "weightG": 250,
        "price": 145000,
        "originalPrice": 145000,
        "stock": 85
      },
      {
        "id": "p-105-500",
        "label": "500g",
        "weightG": 500,
        "price": 275000,
        "originalPrice": 285000,
        "stock": 60
      },
      {
        "id": "p-105-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 520000,
        "originalPrice": 550000,
        "stock": 40
      }
    ],
    "shortDescription": "Bột rau má sấy lạnh nguyên chất sản xuất bằng công nghệ sấy lạnh tiệt trùng hiện đại, giữ nguyên màu sắc tự nhiên và hàm lượng chất xơ, khoáng chất từ rau củ tươi Đà Lạt.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Bột rau má sấy lạnh nguyên chất tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Pha 1 gói (3g–5g) với 150ml–200ml nước ấm hoặc nước lọc, khuấy đều. Có thể mix cùng sữa tươi, mật ong, sữa chua.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-11-01T00:00:00.000Z"
  },
  {
    "id": "p-106",
    "dbId": 106,
    "slug": "bot-diep-ca",
    "name": "Bột diếp cá sấy lạnh thanh nhiệt",
    "categoryId": "cat-05",
    "dbCategoryId": 7,
    "isContactPrice": true,
    "images": [
      "images/bot-diep-ca.jpg",
      "images/bot-rau-cu-cho-be.jpg",
      "images/bot-chum-ngay.jpg"
    ],
    "badges": [
      "new"
    ],
    "rating": 4.9,
    "soldCount": 378,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-106-250",
        "label": "250g",
        "weightG": 250,
        "price": 145000,
        "originalPrice": 170000,
        "stock": 85
      },
      {
        "id": "p-106-500",
        "label": "500g",
        "weightG": 500,
        "price": 275000,
        "originalPrice": 330000,
        "stock": 60
      },
      {
        "id": "p-106-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 520000,
        "originalPrice": 645000,
        "stock": 40
      }
    ],
    "shortDescription": "Bột diếp cá sấy lạnh thanh nhiệt sản xuất bằng công nghệ sấy lạnh tiệt trùng hiện đại, giữ nguyên màu sắc tự nhiên và hàm lượng chất xơ, khoáng chất từ rau củ tươi Đà Lạt.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Bột diếp cá sấy lạnh thanh nhiệt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Pha 1 gói (3g–5g) với 150ml–200ml nước ấm hoặc nước lọc, khuấy đều. Có thể mix cùng sữa tươi, mật ong, sữa chua.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-31T00:00:00.000Z"
  },
  {
    "id": "p-107",
    "dbId": 107,
    "slug": "bot-rau-cu-cho-be",
    "name": "Bột rau củ tổng hợp sấy lạnh cho bé ăn dặm",
    "categoryId": "cat-05",
    "dbCategoryId": 7,
    "isContactPrice": true,
    "images": [
      "images/bot-rau-cu-cho-be.jpg",
      "images/bot-chum-ngay.jpg",
      "images/bot-tia-to-dalahouse.jpg"
    ],
    "badges": [],
    "rating": 4.8,
    "soldCount": 451,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-107-250",
        "label": "250g",
        "weightG": 250,
        "price": 165000,
        "originalPrice": 165000,
        "stock": 85
      },
      {
        "id": "p-107-500",
        "label": "500g",
        "weightG": 500,
        "price": 315000,
        "originalPrice": 320000,
        "stock": 60
      },
      {
        "id": "p-107-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 595000,
        "originalPrice": 625000,
        "stock": 40
      }
    ],
    "shortDescription": "Bột rau củ tổng hợp sấy lạnh cho bé ăn dặm sản xuất bằng công nghệ sấy lạnh tiệt trùng hiện đại, giữ nguyên màu sắc tự nhiên và hàm lượng chất xơ, khoáng chất từ rau củ tươi Đà Lạt.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Bột rau củ tổng hợp sấy lạnh cho bé ăn dặm tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Pha 1 gói (3g–5g) với 150ml–200ml nước ấm hoặc nước lọc, khuấy đều. Có thể mix cùng sữa tươi, mật ong, sữa chua.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-30T00:00:00.000Z"
  },
  {
    "id": "p-108",
    "dbId": 108,
    "slug": "bot-chum-ngay",
    "name": "Bột chùm ngây sấy lạnh giàu vi chất",
    "categoryId": "cat-05",
    "dbCategoryId": 7,
    "isContactPrice": true,
    "images": [
      "images/bot-chum-ngay.jpg",
      "images/bot-tia-to-dalahouse.jpg",
      "images/bot-rau-detox.jpg"
    ],
    "badges": [],
    "rating": 4.7,
    "soldCount": 524,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-108-250",
        "label": "250g",
        "weightG": 250,
        "price": 140000,
        "originalPrice": 140000,
        "stock": 85
      },
      {
        "id": "p-108-500",
        "label": "500g",
        "weightG": 500,
        "price": 265000,
        "originalPrice": 275000,
        "stock": 60
      },
      {
        "id": "p-108-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 505000,
        "originalPrice": 530000,
        "stock": 40
      }
    ],
    "shortDescription": "Bột chùm ngây sấy lạnh giàu vi chất sản xuất bằng công nghệ sấy lạnh tiệt trùng hiện đại, giữ nguyên màu sắc tự nhiên và hàm lượng chất xơ, khoáng chất từ rau củ tươi Đà Lạt.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Bột chùm ngây sấy lạnh giàu vi chất tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Pha 1 gói (3g–5g) với 150ml–200ml nước ấm hoặc nước lọc, khuấy đều. Có thể mix cùng sữa tươi, mật ong, sữa chua.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-29T00:00:00.000Z"
  },
  {
    "id": "p-109",
    "dbId": 109,
    "slug": "bot-tia-to-dalahouse",
    "name": "Bột tía tô sấy lạnh Dalahouse",
    "categoryId": "cat-05",
    "dbCategoryId": 7,
    "isContactPrice": true,
    "images": [
      "images/bot-tia-to-dalahouse.jpg",
      "images/bot-rau-detox.jpg",
      "images/bot-hoa-dau-biec.jpg"
    ],
    "badges": [],
    "rating": 5,
    "soldCount": 597,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-109-250",
        "label": "250g",
        "weightG": 250,
        "price": 145000,
        "originalPrice": 170000,
        "stock": 85
      },
      {
        "id": "p-109-500",
        "label": "500g",
        "weightG": 500,
        "price": 275000,
        "originalPrice": 330000,
        "stock": 60
      },
      {
        "id": "p-109-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 520000,
        "originalPrice": 645000,
        "stock": 40
      }
    ],
    "shortDescription": "Bột tía tô sấy lạnh Dalahouse sản xuất bằng công nghệ sấy lạnh tiệt trùng hiện đại, giữ nguyên màu sắc tự nhiên và hàm lượng chất xơ, khoáng chất từ rau củ tươi Đà Lạt.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Bột tía tô sấy lạnh Dalahouse tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Pha 1 gói (3g–5g) với 150ml–200ml nước ấm hoặc nước lọc, khuấy đều. Có thể mix cùng sữa tươi, mật ong, sữa chua.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-28T00:00:00.000Z"
  },
  {
    "id": "p-110",
    "dbId": 110,
    "slug": "bot-rau-detox",
    "name": "Bột rau củ Detox thanh lọc cơ thể",
    "categoryId": "cat-05",
    "dbCategoryId": 7,
    "isContactPrice": true,
    "images": [
      "images/bot-rau-detox.jpg",
      "images/bot-hoa-dau-biec.jpg",
      "images/bot-co-lua-mi.jpg"
    ],
    "badges": [],
    "rating": 4.9,
    "soldCount": 670,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-110-250",
        "label": "250g",
        "weightG": 250,
        "price": 175000,
        "originalPrice": 175000,
        "stock": 85
      },
      {
        "id": "p-110-500",
        "label": "500g",
        "weightG": 500,
        "price": 335000,
        "originalPrice": 340000,
        "stock": 60
      },
      {
        "id": "p-110-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 630000,
        "originalPrice": 665000,
        "stock": 40
      }
    ],
    "shortDescription": "Bột rau củ Detox thanh lọc cơ thể sản xuất bằng công nghệ sấy lạnh tiệt trùng hiện đại, giữ nguyên màu sắc tự nhiên và hàm lượng chất xơ, khoáng chất từ rau củ tươi Đà Lạt.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Bột rau củ Detox thanh lọc cơ thể tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Pha 1 gói (3g–5g) với 150ml–200ml nước ấm hoặc nước lọc, khuấy đều. Có thể mix cùng sữa tươi, mật ong, sữa chua.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-27T00:00:00.000Z"
  },
  {
    "id": "p-111",
    "dbId": 111,
    "slug": "bot-hoa-dau-biec",
    "name": "Bột hoa đậu biếc sấy lạnh tự nhiên",
    "categoryId": "cat-05",
    "dbCategoryId": 7,
    "isContactPrice": true,
    "images": [
      "images/bot-hoa-dau-biec.jpg",
      "images/bot-co-lua-mi.jpg",
      "images/bot-cai-xoan.jpg"
    ],
    "badges": [
      "new"
    ],
    "rating": 4.8,
    "soldCount": 743,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-111-250",
        "label": "250g",
        "weightG": 250,
        "price": 155000,
        "originalPrice": 155000,
        "stock": 85
      },
      {
        "id": "p-111-500",
        "label": "500g",
        "weightG": 500,
        "price": 295000,
        "originalPrice": 300000,
        "stock": 60
      },
      {
        "id": "p-111-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 560000,
        "originalPrice": 590000,
        "stock": 40
      }
    ],
    "shortDescription": "Bột hoa đậu biếc sấy lạnh tự nhiên sản xuất bằng công nghệ sấy lạnh tiệt trùng hiện đại, giữ nguyên màu sắc tự nhiên và hàm lượng chất xơ, khoáng chất từ rau củ tươi Đà Lạt.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Bột hoa đậu biếc sấy lạnh tự nhiên tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Pha 1 gói (3g–5g) với 150ml–200ml nước ấm hoặc nước lọc, khuấy đều. Có thể mix cùng sữa tươi, mật ong, sữa chua.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-26T00:00:00.000Z"
  },
  {
    "id": "p-112",
    "dbId": 112,
    "slug": "bot-co-lua-mi",
    "name": "Bột cỏ lúa mì sấy lạnh hữu cơ",
    "categoryId": "cat-05",
    "dbCategoryId": 7,
    "isContactPrice": true,
    "images": [
      "images/bot-co-lua-mi.jpg",
      "images/bot-cai-xoan.jpg",
      "images/bot-rau-bo-xoi.jpg"
    ],
    "badges": [],
    "rating": 4.7,
    "soldCount": 136,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-112-250",
        "label": "250g",
        "weightG": 250,
        "price": 165000,
        "originalPrice": 195000,
        "stock": 85
      },
      {
        "id": "p-112-500",
        "label": "500g",
        "weightG": 500,
        "price": 315000,
        "originalPrice": 380000,
        "stock": 60
      },
      {
        "id": "p-112-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 595000,
        "originalPrice": 740000,
        "stock": 40
      }
    ],
    "shortDescription": "Bột cỏ lúa mì sấy lạnh hữu cơ sản xuất bằng công nghệ sấy lạnh tiệt trùng hiện đại, giữ nguyên màu sắc tự nhiên và hàm lượng chất xơ, khoáng chất từ rau củ tươi Đà Lạt.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Bột cỏ lúa mì sấy lạnh hữu cơ tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Pha 1 gói (3g–5g) với 150ml–200ml nước ấm hoặc nước lọc, khuấy đều. Có thể mix cùng sữa tươi, mật ong, sữa chua.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-25T00:00:00.000Z"
  },
  {
    "id": "p-113",
    "dbId": 113,
    "slug": "bot-cai-xoan",
    "name": "Bột cải xoăn (Kale) sấy lạnh Đà Lạt",
    "categoryId": "cat-05",
    "dbCategoryId": 7,
    "isContactPrice": true,
    "images": [
      "images/bot-cai-xoan.jpg",
      "images/bot-rau-bo-xoi.jpg",
      "images/bot-cu-den.jpg"
    ],
    "badges": [],
    "rating": 5,
    "soldCount": 209,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-113-250",
        "label": "250g",
        "weightG": 250,
        "price": 160000,
        "originalPrice": 160000,
        "stock": 85
      },
      {
        "id": "p-113-500",
        "label": "500g",
        "weightG": 500,
        "price": 305000,
        "originalPrice": 310000,
        "stock": 60
      },
      {
        "id": "p-113-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 575000,
        "originalPrice": 610000,
        "stock": 40
      }
    ],
    "shortDescription": "Bột cải xoăn (Kale) sấy lạnh Đà Lạt sản xuất bằng công nghệ sấy lạnh tiệt trùng hiện đại, giữ nguyên màu sắc tự nhiên và hàm lượng chất xơ, khoáng chất từ rau củ tươi Đà Lạt.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Bột cải xoăn  sấy lạnh Đà Lạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Pha 1 gói (3g–5g) với 150ml–200ml nước ấm hoặc nước lọc, khuấy đều. Có thể mix cùng sữa tươi, mật ong, sữa chua.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-24T00:00:00.000Z"
  },
  {
    "id": "p-114",
    "dbId": 114,
    "slug": "bot-rau-bo-xoi",
    "name": "Bột rau bó xôi (Spinach) sấy lạnh",
    "categoryId": "cat-05",
    "dbCategoryId": 7,
    "isContactPrice": true,
    "images": [
      "images/bot-rau-bo-xoi.jpg",
      "images/bot-cu-den.jpg",
      "images/bot-can-tay.jpg"
    ],
    "badges": [],
    "rating": 4.9,
    "soldCount": 282,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-114-250",
        "label": "250g",
        "weightG": 250,
        "price": 150000,
        "originalPrice": 150000,
        "stock": 85
      },
      {
        "id": "p-114-500",
        "label": "500g",
        "weightG": 500,
        "price": 285000,
        "originalPrice": 295000,
        "stock": 60
      },
      {
        "id": "p-114-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 540000,
        "originalPrice": 570000,
        "stock": 40
      }
    ],
    "shortDescription": "Bột rau bó xôi (Spinach) sấy lạnh sản xuất bằng công nghệ sấy lạnh tiệt trùng hiện đại, giữ nguyên màu sắc tự nhiên và hàm lượng chất xơ, khoáng chất từ rau củ tươi Đà Lạt.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Bột rau bó xôi  sấy lạnh tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Pha 1 gói (3g–5g) với 150ml–200ml nước ấm hoặc nước lọc, khuấy đều. Có thể mix cùng sữa tươi, mật ong, sữa chua.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-23T00:00:00.000Z"
  },
  {
    "id": "p-115",
    "dbId": 115,
    "slug": "bot-cu-den",
    "name": "Bột củ dền sấy lạnh nguyên chất Đà Lạt",
    "categoryId": "cat-05",
    "dbCategoryId": 7,
    "isContactPrice": true,
    "images": [
      "images/bot-cu-den.jpg",
      "images/bot-can-tay.jpg",
      "images/bot-rau-ma-dau-xanh-cot-dua.jpg"
    ],
    "badges": [],
    "rating": 4.8,
    "soldCount": 355,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-115-250",
        "label": "250g",
        "weightG": 250,
        "price": 150000,
        "originalPrice": 175000,
        "stock": 85
      },
      {
        "id": "p-115-500",
        "label": "500g",
        "weightG": 500,
        "price": 285000,
        "originalPrice": 340000,
        "stock": 60
      },
      {
        "id": "p-115-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 540000,
        "originalPrice": 665000,
        "stock": 40
      }
    ],
    "shortDescription": "Bột củ dền sấy lạnh nguyên chất Đà Lạt sản xuất bằng công nghệ sấy lạnh tiệt trùng hiện đại, giữ nguyên màu sắc tự nhiên và hàm lượng chất xơ, khoáng chất từ rau củ tươi Đà Lạt.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Bột củ dền sấy lạnh nguyên chất Đà Lạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Pha 1 gói (3g–5g) với 150ml–200ml nước ấm hoặc nước lọc, khuấy đều. Có thể mix cùng sữa tươi, mật ong, sữa chua.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-22T00:00:00.000Z"
  },
  {
    "id": "p-116",
    "dbId": 116,
    "slug": "hop-dau-tay-trai-tim",
    "name": "Hộp quà Dâu tây Nhật trái tim sang trọng",
    "categoryId": "cat-06",
    "dbCategoryId": 1,
    "isContactPrice": true,
    "images": [
      "images/hop-dau-tay-trai-tim.jpg",
      "images/hoa-bat-tu-tinh-yeu.jpg",
      "images/qua-tet-xuan-binh-an.jpg"
    ],
    "badges": [
      "new"
    ],
    "rating": 4.7,
    "soldCount": 428,
    "needs": [
      "qua-bieu"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "hop-dau-tay-trai-tim-250",
        "label": "Hộp Tiêu chuẩn (500g)",
        "weightG": 500,
        "price": 299000,
        "originalPrice": 299000,
        "stock": 50
      },
      {
        "id": "hop-dau-tay-trai-tim-500",
        "label": "Hộp Lớn (1kg)",
        "weightG": 1000,
        "price": 555000,
        "originalPrice": 570000,
        "stock": 30
      }
    ],
    "shortDescription": "Hộp quà Dâu tây Nhật trái tim sang trọng được thiết kế sang trọng, tinh tế, hội tụ những thức quà đặc sản thượng hạng nhất của Đà Lạt – lựa chọn hoàn hảo để biếu tặng gia đình và đối tác.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Hộp quà Dâu tây Nhật trái tim sang trọng tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-21T00:00:00.000Z"
  },
  {
    "id": "p-117",
    "dbId": 117,
    "slug": "hong-gion-fuyu",
    "name": "Hồng giòn Fuyu giống Nhật trồng tại Đà Lạt",
    "categoryId": "cat-04",
    "dbCategoryId": 3,
    "isContactPrice": true,
    "images": [
      "images/hong-gion-fuyu.jpg",
      "images/dau-tay-new-zealand.jpg",
      "images/hat-mac-ca-lam-dong.jpg"
    ],
    "badges": [],
    "rating": 5,
    "soldCount": 501,
    "needs": [
      "tot-suc-khoe"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-117-250",
        "label": "250g",
        "weightG": 250,
        "price": 85000,
        "originalPrice": 85000,
        "stock": 85
      },
      {
        "id": "p-117-500",
        "label": "500g",
        "weightG": 500,
        "price": 160000,
        "originalPrice": 165000,
        "stock": 60
      },
      {
        "id": "p-117-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 305000,
        "originalPrice": 325000,
        "stock": 40
      }
    ],
    "shortDescription": "Hồng giòn Fuyu giống Nhật trồng tại Đà Lạt thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Hồng giòn Fuyu giống Nhật trồng tại Đà Lạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-10-20T00:00:00.000Z"
  },
  {
    "id": "p-118",
    "dbId": 118,
    "slug": "dau-tay-new-zealand",
    "name": "Dâu tây New Zealand trồng thủy canh Đà Lạt",
    "categoryId": "cat-04",
    "dbCategoryId": 3,
    "isContactPrice": true,
    "images": [
      "images/dau-tay-new-zealand.jpg",
      "images/dau-tay-da-lat.jpg",
      "images/bo-booth.jpg"
    ],
    "badges": [],
    "rating": 4.9,
    "soldCount": 574,
    "needs": [
      "tot-suc-khoe",
      "qua-bieu"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "p-118-250",
        "label": "250g",
        "weightG": 250,
        "price": 220000,
        "originalPrice": 260000,
        "stock": 85
      },
      {
        "id": "p-118-500",
        "label": "500g",
        "weightG": 500,
        "price": 420000,
        "originalPrice": 505000,
        "stock": 60
      },
      {
        "id": "p-118-1000",
        "label": "1kg",
        "weightG": 1000,
        "price": 790000,
        "originalPrice": 990000,
        "stock": 40
      }
    ],
    "shortDescription": "Dâu tây New Zealand trồng thủy canh Đà Lạt thu hoạch trực tiếp trong ngày từ nông trại công nghệ cao Đà Lạt – Lâm Đồng, đạt tiêu chuẩn VietGAP, tươi ngon và giàu vitamin tự nhiên.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Dâu tây New Zealand trồng thủy canh Đà Lạt tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "07 – 10 ngày trong ngăn mát tủ lạnh (Nông sản tươi thu hoạch trong ngày)"
    },
    "createdAt": "2026-10-19T00:00:00.000Z"
  },
  {
    "id": "p-119",
    "dbId": 119,
    "slug": "hoa-bat-tu-tinh-yeu",
    "name": "Hộp Hoa Bất Tử Đà Lạt Tình Yêu Vĩnh Cửu",
    "categoryId": "cat-06",
    "dbCategoryId": 3,
    "isContactPrice": true,
    "images": [
      "images/hoa-bat-tu-tinh-yeu.jpg",
      "images/qua-tet-xuan-binh-an.jpg",
      "images/hop-qua-tet-cao-cap-06-mon.jpg"
    ],
    "badges": [],
    "rating": 4.8,
    "soldCount": 647,
    "needs": [
      "qua-bieu"
    ],
    "isFlashSale": false,
    "flashSale": null,
    "variants": [
      {
        "id": "hoa-bat-tu-tinh-yeu-250",
        "label": "Hộp Tiêu chuẩn (500g)",
        "weightG": 500,
        "price": 250000,
        "originalPrice": 250000,
        "stock": 50
      },
      {
        "id": "hoa-bat-tu-tinh-yeu-500",
        "label": "Hộp Lớn (1kg)",
        "weightG": 1000,
        "price": 465000,
        "originalPrice": 475000,
        "stock": 30
      }
    ],
    "shortDescription": "Hộp Hoa Bất Tử Đà Lạt Tình Yêu Vĩnh Cửu được thiết kế sang trọng, tinh tế, hội tụ những thức quà đặc sản thượng hạng nhất của Đà Lạt – lựa chọn hoàn hảo để biếu tặng gia đình và đối tác.",
    "info": {
      "origin": "Vùng nguyên liệu Cầu Đất & Lạc Dương, TP. Đà Lạt, Tỉnh Lâm Đồng (Độ cao 1.500m)",
      "ingredients": "100% Hộp Hoa Bất Tử Đà Lạt Tình Yêu Vĩnh Cửu tuyển chọn loại 1, không phẩm màu tổng hợp, không chất bảo quản độc hại.",
      "usage": "Mở bao bì dùng trực tiếp. Ngon hơn khi bảo quản mát và thưởng thức cùng trà nóng Đà Lạt.",
      "storage": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng kín túi zip/nắp hũ hoặc giữ ngăn mát tủ lạnh (2–8°C) sau khi mở.",
      "shelfLife": "06 – 12 tháng kể từ ngày sản xuất in trên bao bì"
    },
    "createdAt": "2026-10-18T00:00:00.000Z"
  }
];

export const BLOG_POSTS = [
  {
    "id": "blog-01",
    "slug": "cach-phan-biet-hong-treo-gio-chuan-da-lat",
    "title": "Cách phân biệt hồng treo gió chuẩn Đà Lạt công nghệ Nhật Bản",
    "excerpt": "Bí quyết nhận biết hồng treo gió Đà Lạt chính gốc qua màu sắc vỏ hổ phách, lớp mật đường tự nhiên, độ mềm dẻo và hương thơm thanh khiết.",
    "cover": "images/hong-treo-gio-da-lat.jpg",
    "category": "Kinh nghiệm chọn đặc sản",
    "readTime": "5 phút đọc",
    "author": "Nghệ nhân Nông trại Cầu Đất",
    "publishedAt": "2026-11-05",
    "content": "\n      <p>Mỗi độ thu về từ tháng 9 đến tháng 12 âm lịch, những sườn đồi Cầu Đất, Trạm Hành lại rực lên sắc cam vàng của mùa hồng chín. Trong đó, <strong>hồng treo gió Đà Lạt công nghệ Hoshigaki Nhật Bản</strong> luôn được mệnh danh là \"viên ngọc hổ phách\" của phố núi.</p>\n      <h3>1. Quan sát màu sắc và hình dáng bên ngoài</h3>\n      <p>Hồng treo gió chuẩn Đà Lạt được làm từ giống hồng vuông đồng hoặc hồng trứng lốc già trái. Sau 25–30 ngày phơi trong nhà kính đón gió se lạnh và nắng cao nguyên, trái hồng teo lại, vỏ ngoài chuyển màu nâu hổ phách ấm áp, cuống hồng được giữ nguyên vẹn để buộc dây treo.</p>\n      <h3>2. Kiểm tra ruột mật bên trong</h3>\n      <p>Khi bẻ đôi trái hồng treo gió đạt chuẩn, bên trong là lớp thịt dẻo quánh màu cam đỏ óng ánh, tươm mật ngọt thanh tự nhiên mà hoàn toàn không hề có đường hóa học. Nếu bảo quản lâu trong ngăn mát, lớp đường fructose tự nhiên trong quả sẽ kết tinh thành một lớp phấn trắng mỏng bên ngoài vỏ – đây là dấu hiệu của hồng chuẩn chất lượng cao (không phải nấm mốc).</p>\n      <h3>3. Hương vị khi thưởng thức</h3>\n      <p>Hồng chuẩn Đà Lạt có mùi thơm dịu nhẹ đặc trưng, vị ngọt sâu nhưng thanh, hậu vị không bị chát. Thưởng thức một trái hồng treo gió nhâm nhi cùng chén trà Ô Long hoặc trà Atiso nóng là trải nghiệm ẩm thực không thể quên.</p>\n    "
  },
  {
    "id": "blog-02",
    "slug": "cach-bao-quan-dac-san-say-va-trai-cay-kho",
    "title": "Cách bảo quản đặc sản sấy dẻo & trái cây khô giữ trọn hương vị",
    "excerpt": "Hướng dẫn chi tiết cách bảo quản hồng treo gió, khoai lang mật sấy dẻo, dâu tây sấy không chất bảo quản luôn tươi ngon suốt nhiều tháng.",
    "cover": "images/trai-cay-say-kho.jpg",
    "category": "Mẹo bảo quản",
    "readTime": "4 phút đọc",
    "author": "Chuyên gia Thực phẩm Sạch",
    "publishedAt": "2026-11-08",
    "content": "\n      <p>Các dòng đặc sản sấy Đà Lạt chính gốc như <strong>hồng treo gió, khoai lang mật sấy dẻo, dâu tây sấy dẻo</strong> đều ưu tiên phương pháp chế biến tự nhiên, không sử dụng chất bảo quản công nghiệp. Vì vậy, việc bảo quản đúng cách sẽ quyết định trực tiếp đến độ ngon của sản phẩm.</p>\n      <h3>1. Đối với nhóm sấy dẻo & treo gió (Hồng treo, khoai lang mật)</h3>\n      <p>Ngay sau khi nhận hàng, bạn nên cho vào <strong>ngăn mát tủ lạnh (2–6°C)</strong> nếu dùng trong 1–2 tháng, hoặc <strong>ngăn đông (-18°C)</strong> nếu muốn giữ tới 6–12 tháng. Đặc biệt với hồng treo gió, để ngăn đông hồng không bị cứng đá mà vẫn giữ được độ dẻo mát như kem.</p>\n      <h3>2. Đối với nhóm trái cây sấy giòn & hạt dinh dưỡng</h3>\n      <p>Sau mỗi lần mở túi zip hoặc hũ, hãy ép hết không khí ra ngoài và khóa chặt miệng túi. Tránh để sản phẩm tiếp xúc lâu với không khí ẩm. Bạn có thể bảo quản ở nhiệt độ phòng thoáng mát (dưới 25°C) hoặc ngăn mát tủ lạnh để giữ độ giòn rụm lâu hơn.</p>\n    "
  },
  {
    "id": "blog-03",
    "slug": "kinh-nghiem-du-lich-va-mua-qua-da-lat",
    "title": "Cẩm nang du lịch Đà Lạt: Mua đặc sản gì làm quà vừa sang vừa ý nghĩa?",
    "excerpt": "Gợi ý danh sách đặc sản Đà Lạt phù hợp cho từng đối tượng người nhận: ông bà, cha mẹ, đồng nghiệp công sở và đối tác doanh nghiệp.",
    "cover": "images/hop-qua-tet-cao-cap-06-mon.jpg",
    "category": "Cẩm nang Đà Lạt",
    "readTime": "6 phút đọc",
    "author": "Đặc sản Đà Lạt Team",
    "publishedAt": "2026-11-10",
    "content": "\n      <p>Đến Đà Lạt hay đặt quà từ xa, ai cũng mong chọn được những món quà mang trọn vẹn hơi thở cao nguyên gửi tặng người thân yêu. Dưới đây là bí quyết chọn quà theo từng nhóm người nhận:</p>\n      <h3>1. Quà biếu Ông Bà, Cha Mẹ (Ưu tiên sức khỏe)</h3>\n      <p>Người lớn tuổi rất chuộng các sản phẩm thảo dược lành tính giúp an thần, mát gan và bồi bổ cơ thể như: <strong>Cao mềm Atiso Đà Lạt, Bông Atiso sấy khô, Đông trùng hạ thảo sấy thăng hoa, Trà Bồ công anh</strong> hoặc <strong>Hồng đẳng sâm ngâm mật ong</strong>.</p>\n      <h3>2. Quà tặng Đồng nghiệp & Bạn bè</h3>\n      <p>Những món ăn vặt lành mạnh để nhâm nhi buổi chiều văn phòng luôn được yêu thích: <strong>Khoai lang mật sấy dẻo, Hồng sấy dẻo nguyên trái, Dâu tây sấy dẻo, Trái cây sấy thập cẩm</strong> và <strong>Cà phê Arabica Cầu Đất</strong>.</p>\n      <h3>3. Quà biếu Sếp & Đối tác Doanh nghiệp</h3>\n      <p>Hãy ưu tiên các <strong>Set Quà Biếu thiết kế sẵn</strong> từ 390.000₫ đến 1.340.000₫ với hộp cứng ép kim sang trọng, kèm thiệp chúc mừng viết tay và túi xách đồng bộ.</p>\n    "
  },
  {
    "id": "blog-04",
    "slug": "cong-dung-va-cach-pha-cao-atiso-da-lat",
    "title": "Công dụng tuyệt vời của Cao Atiso Đà Lạt và cách pha chuẩn vị",
    "excerpt": "Tìm hiểu vì sao Atiso Đà Lạt được mệnh danh là thảo dược vàng cho lá gan và giấc ngủ, cùng hướng dẫn liều lượng sử dụng mỗi ngày.",
    "cover": "images/cao-atiso-da-lat.jpg",
    "category": "Sức khỏe & Thảo dược",
    "readTime": "5 phút đọc",
    "author": "Dược sĩ Thảo Mộc",
    "publishedAt": "2026-11-12",
    "content": "\n      <p>Nhờ khí hậu ôn đới mát mẻ quanh năm, Atiso trồng tại vùng Lạc Dương – Đà Lạt có hàm lượng hoạt chất <strong>Cynarin và Silymarin</strong> cao vượt trội. Đây là hai hoạt chất quý giúp giải độc gan, hạ men gan và hỗ trợ tiêu hóa.</p>\n      <h3>Cách pha Cao mềm Atiso ngon nhất</h3>\n      <p>Lấy khoảng 1/4 muỗng cà phê (tương đương 2g–3g) cao mềm Atiso hòa tan cùng 150ml–200ml nước ấm (70–80°C). Bạn có thể thêm 1 thìa nhỏ mật ong rừng Đà Lạt để tăng hương vị thơm ngọt. Uống đều đặn 2–3 lần mỗi ngày sau bữa ăn.</p>\n    "
  },
  {
    "id": "blog-05",
    "slug": "bot-rau-cu-say-lanh-bi-quyet-detox-moi-ngay",
    "title": "Bột rau củ sấy lạnh Đà Lạt: Giải pháp bổ sung rau xanh chuẩn Organic",
    "excerpt": "Khám phá quy trình sấy lạnh giữ 98% dưỡng chất của bột cần tây, bột cải xoăn Kale, bột rau má và công thức pha chế giảm cân, đẹp da.",
    "cover": "images/bot-can-tay.jpg",
    "category": "Sống xanh & Detox",
    "readTime": "4 phút đọc",
    "author": "Chuyên gia Dinh dưỡng",
    "publishedAt": "2026-11-13",
    "content": "\n      <p>Khác với phương pháp sấy nhiệt truyền thống làm biến đổi màu sắc và hao hụt vitamin, công nghệ <strong>sấy lạnh thăng hoa</strong> giúp bột cần tây, bột cải xoăn Kale, bột rau má Đà Lạt giữ nguyên sắc xanh diệp lục, enzyme tươi và chất xơ tự nhiên.</p>\n      <h3>3 công thức pha bột rau củ ngon miệng</h3>\n      <ul>\n        <li><strong>Detox buổi sáng:</strong> 1 gói bột cần tây + 200ml nước ấm + vài giọt cốt chanh + 1 thìa mật ong.</li>\n        <li><strong>Sinh tố năng lượng:</strong> 1 gói bột cải xoăn Kale + 1 quả chuối Laba + 150ml sữa hạt.</li>\n        <li><strong>Giải nhiệt chiều:</strong> 1 gói bột rau má đậu xanh cốt dừa khuấy cùng nước mát và đá viên.</li>\n      </ul>\n    "
  },
  {
    "id": "blog-06",
    "slug": "hanh-trinh-hat-ca-phe-arabica-cau-dat",
    "title": "Hành trình hạt cà phê Arabica Cầu Đất ở độ cao 1.650m",
    "excerpt": "Vì sao vùng đất sương mù Cầu Đất – Đà Lạt lại tạo nên những hạt cà phê Arabica có hương hoa trái tự nhiên và vị chua thanh quyến rũ?",
    "cover": "images/ca-phe-hat-nguyen-chat.jpg",
    "category": "Văn hóa Phố Núi",
    "readTime": "5 phút đọc",
    "author": "Barista Phố Núi",
    "publishedAt": "2026-11-14",
    "content": "\n      <p>Nằm ở độ cao 1.500m – 1.650m so với mực nước biển, Cầu Đất sở hữu biên độ nhiệt ngày đêm lớn cùng lớp đất đỏ bazan màu mỡ. Quả cà phê chín chậm hơn, tích tụ lượng đường và hương thơm phức hợp của hoa trắng, cam chanh và caramel tự nhiên.</p>\n      <p>Từng trái cà phê chín đỏ 100% được hái tay chọn lọc, sơ chế Honey hoặc Washed rồi rang mộc chuẩn profile để giữ trọn vẹn tinh hoa nguyên bản của vùng đất Đà Lạt.</p>\n    "
  }
];
