export const GENDER_OPTION = [
  { label: "Đào", value: "Đào" },
  { label: "Hồng", value: "Hồng" },
  { label: "Dứa", value: "Dứa" },
];
export const CITY = [
  { label: "Hà Nội", value: "Hà Nội" },
  { label: "TP. Hồ Chí Minh", value: "TP. Hồ Chí Minh" },
  { label: "Hải Dương", value: "Hải Dương" },
];
export const SHIPPING = [
  { label: "Hỏa tốc", value: "Hỏa tốc" },
  { label: "Nhanh", value: "Nhanh" },
  { label: "Tiết kiệm", value: "Tiết kiệm" },
];
export const STATUS = [
  { label: "Chuẩn bị trong ngày", value: "Chuẩn bị trong ngày" },
  { label: "Bảo quản tủ đông", value: "Bảo quản tủ đông" },
  { label: "Bảo quản 2 ngày", value: "Bảo quản 2 ngày" },
];
export const SORT_POINT = [
  { label: 'Tăng dần theo giá', value: 'PRICE_ASC'  },
  { label: 'Giảm dần theo giá', value: 'PRICE_DESC'  },
  { label: 'Ngày tạo cũ nhất', value: 'DATE_ASC' },
  { label: 'Ngày tạo mới nhất', value: 'DATE_DESC' },
];

export const MOCK_DATA = {
  items: [
    {
      onSale: false,
      id: 179,
      type: "SIMPLE",
      isFeatured: false,
      taxStatus: "NONE",
      defaultProductVariantId: 202,
      status: "IN_ACTIVE",
      thumbnail: {
        id: 2205,
        key: "images/14/b0ff10cd-5060-43e6-b397-7345a5878f68.png",
        type: "png",
        url: "https://s3.ap-southeast-1.amazonaws.com/awd-dev-bucket/images/14/b0ff10cd-5060-43e6-b397-7345a5878f68.png",
        size: 0,
      },
      productDetails: [
        {
          id: 351,
          lang: "VN",
          name: "lk;11111",
          description: "<p>10/4 sản phẩm 1. tạo ngày 10/4</p>",
          shortDescription: "df gdxf g",
          slug: "m n",
        },
      ],
      productCategories: [
        {
          id: 34,
          categoryDetails: [
            {
              id: 59,
              lang: "VN",
              desc: "Sản phẩm HOT",
              name: "Sản phẩm HOT",
              slug: "San-pham-HOT",
            },
          ],
        },
      ],
      productTags: [],
      productVariants: [
        {
          id: 202,
          price: 10,
          quantity: 41,
          salePrice: 1,
          sku: "AW01",
          name: "Diệp test 10/4",
          productToVariantId: 204,
          externalProduct: null,
          productVariantPoint: null,
          productTransportInfo: null,
          productVariantDetails: [
            {
              id: 95,
              lang: "VN",
              description:
                "Thêm mới biến thể được test vào ngày 10 tháng 4 năm 2023",
              productVariant: null,
            },
          ],
        },
      ],
      price: {
        normalPrice: 10,
        salePrice: 1,
      },
    },
    {
      onSale: false,
      id: 267,
      type: "CONFIGURABLE",
      isFeatured: false,
      taxStatus: "NONE",
      defaultProductVariantId: 245,
      status: "ACTIVE",
      thumbnail: {
        id: 3559,
        key: "images/14/75941afc-48d1-43d1-918a-31a5305c390c.png",
        type: "png",
        url: "https://s3.ap-southeast-1.amazonaws.com/awd-dev-bucket/images/14/75941afc-48d1-43d1-918a-31a5305c390c.png",
        size: 0,
      },
      productDetails: [
        {
          id: 382,
          lang: "VN",
          name: "Sản phẩm của Tuấn 1",
          description: "<h4>Tuấn 1 viết mô tả sản phẩm</h4>",
          shortDescription: "Đây là sản phẩm vật lý1",
          slug: "San-pham-cua-Tuan-1",
        },
      ],
      productCategories: [
        {
          id: 68,
          categoryDetails: [
            {
              id: 108,
              lang: "VN",
              desc: "string",
              name: "Danh mục tháng 7",
              slug: "Danh-muc-thang-7",
            },
          ],
        },
      ],
      productTags: [
        {
          id: 44,
          name: "tag tháng 7",
          description: "Mã tháng 7",
        },
      ],
      productVariants: [
        {
          id: 243,
          price: 200,
          quantity: 0,
          salePrice: 0,
          sku: "Sku Tuấn",
          name: "Biến thể sản phẩm Tuấn",
          productToVariantId: 301,
          externalProduct: null,
          productVariantPoint: null,
          productTransportInfo: null,
          productVariantDetails: [
            {
              id: 133,
              lang: "VN",
              description:
                '<p><strong style="color: red;">❖ <u>Mô tả</u>:</strong></p><p>Tuấn viết mô tả biến thể SH</p><p><br></p><p><strong style="color: red;">❖ <u>Điều khoản sử dụng</u>:</strong></p><p>Chưa có</p><p><br></p><p><br></p><p><strong style="color: red;">❖ <u>Địa chỉ</u>:</strong></p><p>Chưa có</p>',
              productVariant: null,
            },
          ],
        },
        {
          id: 245,
          price: 50,
          quantity: 5,
          salePrice: 0,
          sku: "Sku Tuấn 1",
          name: "Biến thể sản phẩm Tuấn 1",
          productToVariantId: 300,
          externalProduct: null,
          productVariantPoint: null,
          productTransportInfo: null,
          productVariantDetails: [
            {
              id: 135,
              lang: "VN",
              description:
                '<p><strong style="color: red;">❖ <u>Mô tả</u>:</strong></p><p>Tuấn mô tả ip 14</p><p><br></p><p><br></p><p><strong style="color: red;">❖ <u>Điều khoản sử dụng</u>:</strong></p><p>Chưa có</p><p><br></p><p><br></p><p><strong style="color: red;">❖ <u>Địa chỉ</u>:</strong></p><p>Chưa có</p>',
              productVariant: null,
            },
          ],
        },
      ],
      price: {
        range: {
          min: 50,
          max: 200,
        },
      },
    },
    {
      onSale: false,
      id: 229,
      type: "SIMPLE",
      isFeatured: false,
      taxStatus: "NONE",
      defaultProductVariantId: 231,
      status: "ACTIVE",
      thumbnail: {
        id: 3407,
        key: "images/14/30c82e3c-0054-4dbe-9d7e-b3b4bf8df7bf.png",
        type: "png",
        url: "https://s3.ap-southeast-1.amazonaws.com/awd-dev-bucket/images/14/30c82e3c-0054-4dbe-9d7e-b3b4bf8df7bf.png",
        size: 0,
      },
      productDetails: [
        {
          id: 323,
          lang: "VN",
          name: "229tri tao cho mobile test",
          description: "229tri tao cho mobile test",
          shortDescription: "229tri tao cho mobile test",
          slug: "tritaochomobiletest",
        },
      ],
      productCategories: [
        {
          id: 67,
          categoryDetails: [
            {
              id: 107,
              lang: "VN",
              desc: "tri tao cho mobile",
              name: "tri tao cho mobile",
              slug: "tri tao cho mobile",
            },
          ],
        },
      ],
      productTags: [],
      productVariants: [
        {
          id: 231,
          price: 110,
          quantity: 1000,
          salePrice: 10,
          sku: "string",
          name: "string",
          productToVariantId: 261,
          externalProduct: null,
          productVariantPoint: null,
          productTransportInfo: null,
          productVariantDetails: [
            {
              id: 121,
              lang: "VN",
              description: "tri tao cho mobile",
              productVariant: null,
            },
          ],
        },
      ],
      price: {
        normalPrice: 110,
        salePrice: 10,
      },
    },
    {
      onSale: false,
      id: 225,
      type: "SIMPLE",
      isFeatured: false,
      taxStatus: "NONE",
      defaultProductVariantId: 231,
      status: "ACTIVE",
      thumbnail: {
        id: 3407,
        key: "images/14/30c82e3c-0054-4dbe-9d7e-b3b4bf8df7bf.png",
        type: "png",
        url: "https://s3.ap-southeast-1.amazonaws.com/awd-dev-bucket/images/14/30c82e3c-0054-4dbe-9d7e-b3b4bf8df7bf.png",
        size: 0,
      },
      productDetails: [
        {
          id: 319,
          lang: "VN",
          name: "225tri tao cho mobile test",
          description: "225tri tao cho mobile test",
          shortDescription: "225tri tao cho mobile test",
          slug: "tritaochomobiletest",
        },
      ],
      productCategories: [
        {
          id: 67,
          categoryDetails: [
            {
              id: 107,
              lang: "VN",
              desc: "tri tao cho mobile",
              name: "tri tao cho mobile",
              slug: "tri tao cho mobile",
            },
          ],
        },
      ],
      productTags: [],
      productVariants: [
        {
          id: 231,
          price: 110,
          quantity: 1000,
          salePrice: 10,
          sku: "string",
          name: "string",
          productToVariantId: 257,
          externalProduct: null,
          productVariantPoint: null,
          productTransportInfo: null,
          productVariantDetails: [
            {
              id: 121,
              lang: "VN",
              description: "tri tao cho mobile",
              productVariant: null,
            },
          ],
        },
      ],
      price: {
        normalPrice: 110,
        salePrice: 10,
      },
    },
    {
      onSale: false,
      id: 181,
      type: "VIRTUAL",
      isFeatured: false,
      taxStatus: "NONE",
      defaultProductVariantId: 206,
      status: "ACTIVE",
      thumbnail: {
        id: 2208,
        key: "images/14/02bda355-9edc-421f-ac80-73c9f009f371.png",
        type: "png",
        url: "https://s3.ap-southeast-1.amazonaws.com/awd-dev-bucket/images/14/02bda355-9edc-421f-ac80-73c9f009f371.png",
        size: 0,
      },
      productDetails: [
        {
          id: 238,
          lang: "VN",
          name: "10/4 sản phẩm 3 (voucher nạp thẻ)",
          description: "<p>10/4 sản phẩm 3 (voucher nạp thẻ)</p>",
          shortDescription: "10/4 sản phẩm 3 (voucher nạp thẻ)",
          slug: "104-san-pham-3-(voucher-nap-the)",
        },
      ],
      productCategories: [
        {
          id: 35,
          categoryDetails: [
            {
              id: 60,
              lang: "VN",
              desc: "Phiếu mua hàng điện tử",
              name: "Phiếu mua hàng điện tử",
              slug: "Phieu-mua-hang-dien-tu",
            },
          ],
        },
      ],
      productTags: [
        {
          id: 40,
          name: "Quà tặng voucher",
          description: "Quà tặng voucher",
        },
      ],
      productVariants: [
        {
          id: 206,
          price: 10000,
          quantity: 0,
          salePrice: 0,
          sku: "Aw02",
          name: "Voucher thẻ cào điện thoại",
          productToVariantId: 206,
          externalProduct: null,
          productVariantPoint: null,
          productTransportInfo: null,
          productVariantDetails: [
            {
              id: 96,
              lang: "VN",
              description:
                "XXXXX tượng trưng cho 5 ký tự được chọn từ 28/36 ký tự bảng chữ cái, Unique trên hệ thống, không sử dụng các ký tự dễ gây nhầm lẫn sau: O,0,U,V,W,1,I, Q.&nbsp;Sau đó sẽ được lọc và loại trừ ra những trường hợp:3/5 ký tự sau không được giống nhau 80%.&nbsp;2 ký tự sát nhau trong bộ từ điển không được đứng sát nhau.&nbsp;&nbsp;5 ký tự đó không là 5 ký tự số hoặc chữ viết hoa liên tục.&nbsp;5 ký tự đó không được giống nhau.Mã muỗng sẽ có hạn sử dụng là 2 năm 1 tháng kể từ ngày áp dụngThời hạn của muỗng khi tạo chỉ được sử dụng trong tháng áp dụng.Hướng dẫn vị trí khắc mã muỗng.Mã muỗng gồm 8&nbsp; ký tự được khắc vào vị trí tùy thuộc vào mỗi muỗng có trong lon sữaMã muỗng được khắc rõ ràng, không bị mờ và bị mất chữ.Mã sau khi khắc phải nhìn và đọc được bằng mắt thường.Ghi chú:Trong phần mềm: đã setup sẵn phần nhóm và ký hiệu muỗng, quy cách sản phẩmFile tải xuống: tên file: tên nhà máy ABC ngày tạo&nbsp; (VD AWD_K32_31_01_2023)File tạo sẽ chia nhỏ sheet thành 2000 mã 1 : vd tạo mã muỗng là 10.000 thì chia làm 5 sheet mỗi sheet 2000 mã.Trong phần mềm có phần ngày áp dụng hoặc tháng áp dụng.Trong phần mềm khi kiểm tra 1 mã code sẽ xem được nó nằm trong file gì ngày nào tạoMã QR Code của Sữa bột pha sẵn:Thẻ cào:Sử dụng hệ thống tạo mã QR Code của Teso.&nbsp;Mã QR Code sản phẩm Sữa bột pha sẵn được phát hành từ Teso, quy định tạo mã QR code sẽ được Teso phát hành với mã phân biệt (tương tự như sữa bột), Sau đó nhà máy Aiwado sẽ chuyển dãy mã QR Code cho nhà máy (xưởng in) để in ấn.Mã QR code được in lên tờ phiếu (card) dạng thẻ cào, sau khi cào ra sẽ có mã QR code để quét được trên APP. 01 thẻ sẽ được bỏ vào thùng sữa.Mỗi một giai đoạn/ chiến dịch, Aiwado sẽ thiết kế mẫu thẻ cào khác nhau.Vị trí thẻ cào trong thùng sữa:Thẻ cào được bỏ vào thùng Sữa pha sẵn.Được niêm phong bằng băng keo có thông tin của chương trình.",
              productVariant: null,
            },
          ],
        },
      ],
      price: {
        normalPrice: 10000,
        salePrice: 0,
      },
    },
    {
      onSale: false,
      id: 245,
      type: "SIMPLE",
      isFeatured: false,
      taxStatus: "NONE",
      defaultProductVariantId: 231,
      status: "ACTIVE",
      thumbnail: {
        id: 3407,
        key: "images/14/30c82e3c-0054-4dbe-9d7e-b3b4bf8df7bf.png",
        type: "png",
        url: "https://s3.ap-southeast-1.amazonaws.com/awd-dev-bucket/images/14/30c82e3c-0054-4dbe-9d7e-b3b4bf8df7bf.png",
        size: 0,
      },
      productDetails: [
        {
          id: 339,
          lang: "VN",
          name: "245tri tao cho mobile test",
          description: "245tri tao cho mobile test",
          shortDescription: "245tri tao cho mobile test",
          slug: "tritaochomobiletest",
        },
      ],
      productCategories: [
        {
          id: 67,
          categoryDetails: [
            {
              id: 107,
              lang: "VN",
              desc: "tri tao cho mobile",
              name: "tri tao cho mobile",
              slug: "tri tao cho mobile",
            },
          ],
        },
      ],
      productTags: [],
      productVariants: [
        {
          id: 231,
          price: 110,
          quantity: 1000,
          salePrice: 10,
          sku: "string",
          name: "string",
          productToVariantId: 277,
          externalProduct: null,
          productVariantPoint: null,
          productTransportInfo: null,
          productVariantDetails: [
            {
              id: 121,
              lang: "VN",
              description: "tri tao cho mobile",
              productVariant: null,
            },
          ],
        },
      ],
      price: {
        normalPrice: 110,
        salePrice: 10,
      },
    },
    {
      onSale: false,
      id: 205,
      type: "SIMPLE",
      isFeatured: false,
      taxStatus: "NONE",
      defaultProductVariantId: 230,
      status: "ACTIVE",
      thumbnail: {
        id: 3310,
        key: "images/14/57cb6fd5-3eef-4a25-af6f-eed78db7503a.png",
        type: "png",
        url: "https://s3.ap-southeast-1.amazonaws.com/awd-dev-bucket/images/14/57cb6fd5-3eef-4a25-af6f-eed78db7503a.png",
        size: 0,
      },
      productDetails: [
        {
          id: 291,
          lang: "VN",
          name: "SẢN PHẨM 08/06",
          description: "<p>đấy là test quà lần 2</p>",
          shortDescription: "1",
          slug: "SAN-PHAM-0806",
        },
      ],
      productCategories: [
        {
          id: 66,
          categoryDetails: [
            {
              id: 106,
              lang: "VN",
              desc: "đây là danh mục",
              name: "Danh mục Tháng 6",
              slug: "Danh-muc-Thang-6",
            },
          ],
        },
        {
          id: 64,
          categoryDetails: [
            {
              id: 98,
              lang: "VN",
              desc: "12312",
              name: "12312",
              slug: "3123121",
            },
          ],
        },
        {
          id: 63,
          categoryDetails: [
            {
              id: 97,
              lang: "VN",
              desc: "312312312312312",
              name: "123",
              slug: "123123",
            },
          ],
        },
      ],
      productTags: [
        {
          id: 43,
          name: "Tag tháng 6",
          description: "Mã tháng 6",
        },
        {
          id: 41,
          name: "Sữa bột cho trẻ",
          description: "Không",
        },
        {
          id: 39,
          name: "Quà tặng vật lý",
          description: "Quà tặng vật lý",
        },
      ],
      productVariants: [
        {
          id: 230,
          price: 5000,
          quantity: 9,
          salePrice: 2500,
          sku: "Sku là j",
          name: "Biến thể màu xanh",
          productToVariantId: 235,
          externalProduct: null,
          productVariantPoint: null,
          productTransportInfo: null,
          productVariantDetails: [
            {
              id: 120,
              lang: "VN",
              description:
                '<p><strong style="color: red;">❖ <u>Mô tả</u>:</strong></p><p> Chưa có </p><p><br></p><p><strong style="color: red;">❖ <u>Điều khoản sử dụng</u>:</strong></p><p> Chưa có </p><p><br></p><p><strong style="color: red;">❖ <u>Địa chỉ</u>:</strong></p><p> Chưa có</p>',
              productVariant: null,
            },
          ],
        },
      ],
      price: {
        normalPrice: 5000,
        salePrice: 2500,
      },
    },
    {
      onSale: false,
      id: 258,
      type: "VIRTUAL",
      isFeatured: false,
      taxStatus: "NONE",
      defaultProductVariantId: 223,
      status: "ACTIVE",
      thumbnail: {
        id: 3456,
        key: "images/14/f39489b6-7d46-4e56-8c3e-7d18e6dfd296.png",
        type: "png",
        url: "https://s3.ap-southeast-1.amazonaws.com/awd-dev-bucket/images/14/f39489b6-7d46-4e56-8c3e-7d18e6dfd296.png",
        size: 0,
      },
      productDetails: [
        {
          id: 358,
          lang: "VN",
          name: "Sản phẩm 15/6 E-Voucher",
          description: "<p>rwerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr</p>",
          shortDescription: "ĐÂY LÀ VOUCHER SỮA BỘT PHA SẴN",
          slug: "San-pham-156-E-Voucher",
        },
      ],
      productCategories: [
        {
          id: 66,
          categoryDetails: [
            {
              id: 106,
              lang: "VN",
              desc: "đây là danh mục",
              name: "Danh mục Tháng 6",
              slug: "Danh-muc-Thang-6",
            },
          ],
        },
      ],
      productTags: [
        {
          id: 43,
          name: "Tag tháng 6",
          description: "Mã tháng 6",
        },
        {
          id: 40,
          name: "Quà tặng voucher",
          description: "Quà tặng voucher",
        },
      ],
      productVariants: [
        {
          id: 223,
          price: 100000,
          quantity: 88,
          salePrice: 0,
          sku: "Biến thể sản phẩm",
          name: "Biến thể sản phẩm",
          productToVariantId: 289,
          externalProduct: null,
          productVariantPoint: null,
          productTransportInfo: null,
          productVariantDetails: [
            {
              id: 113,
              lang: "VN",
              description:
                "<p><strong>*Mô tả:</strong></p><p> null </p><p><strong>*Điều khoản sử dụng:</strong></p><p> null </p><p>*Đi<strong>̣a chi</strong>̉:</p>",
              productVariant: null,
            },
          ],
        },
      ],
      price: {
        normalPrice: 100000,
        salePrice: 0,
      },
    },
    {
      onSale: false,
      id: 216,
      type: "SIMPLE",
      isFeatured: false,
      taxStatus: "NONE",
      defaultProductVariantId: 231,
      status: "ACTIVE",
      thumbnail: {
        id: 3407,
        key: "images/14/30c82e3c-0054-4dbe-9d7e-b3b4bf8df7bf.png",
        type: "png",
        url: "https://s3.ap-southeast-1.amazonaws.com/awd-dev-bucket/images/14/30c82e3c-0054-4dbe-9d7e-b3b4bf8df7bf.png",
        size: 0,
      },
      productDetails: [
        {
          id: 310,
          lang: "VN",
          name: "216tri tao cho mobile test",
          description: "216tri tao cho mobile test",
          shortDescription: "216tri tao cho mobile test",
          slug: "tritaochomobiletest",
        },
      ],
      productCategories: [
        {
          id: 67,
          categoryDetails: [
            {
              id: 107,
              lang: "VN",
              desc: "tri tao cho mobile",
              name: "tri tao cho mobile",
              slug: "tri tao cho mobile",
            },
          ],
        },
      ],
      productTags: [],
      productVariants: [
        {
          id: 231,
          price: 110,
          quantity: 1000,
          salePrice: 10,
          sku: "string",
          name: "string",
          productToVariantId: 248,
          externalProduct: null,
          productVariantPoint: null,
          productTransportInfo: null,
          productVariantDetails: [
            {
              id: 121,
              lang: "VN",
              description: "tri tao cho mobile",
              productVariant: null,
            },
          ],
        },
      ],
      price: {
        normalPrice: 110,
        salePrice: 10,
      },
    },
    {
      onSale: false,
      id: 213,
      type: "SIMPLE",
      isFeatured: false,
      taxStatus: "NONE",
      defaultProductVariantId: 230,
      status: "ACTIVE",
      thumbnail: {
        id: 3373,
        key: "images/14/d5c1c3d3-ebb5-4c43-b1d9-9889a7829f97.jpg",
        type: "jpg",
        url: "https://s3.ap-southeast-1.amazonaws.com/awd-dev-bucket/images/14/d5c1c3d3-ebb5-4c43-b1d9-9889a7829f97.jpg",
        size: 0,
      },
      productDetails: [
        {
          id: 306,
          lang: "VN",
          name: "testTA3",
          description: "<p>Không có mô tả 3</p>",
          shortDescription: "Test",
          slug: "testTA3",
        },
      ],
      productCategories: [
        {
          id: 66,
          categoryDetails: [
            {
              id: 106,
              lang: "VN",
              desc: "đây là danh mục",
              name: "Danh mục Tháng 6",
              slug: "Danh-muc-Thang-6",
            },
          ],
        },
      ],
      productTags: [
        {
          id: 43,
          name: "Tag tháng 6",
          description: "Mã tháng 6",
        },
      ],
      productVariants: [
        {
          id: 230,
          price: 5000,
          quantity: 9,
          salePrice: 2500,
          sku: "Sku là j",
          name: "Biến thể màu xanh",
          productToVariantId: 244,
          externalProduct: null,
          productVariantPoint: null,
          productTransportInfo: null,
          productVariantDetails: [
            {
              id: 120,
              lang: "VN",
              description:
                '<p><strong style="color: red;">❖ <u>Mô tả</u>:</strong></p><p> Chưa có </p><p><br></p><p><strong style="color: red;">❖ <u>Điều khoản sử dụng</u>:</strong></p><p> Chưa có </p><p><br></p><p><strong style="color: red;">❖ <u>Địa chỉ</u>:</strong></p><p> Chưa có</p>',
              productVariant: null,
            },
          ],
        },
      ],
      price: {
        normalPrice: 5000,
        salePrice: 2500,
      },
    },
    {
      onSale: false,
      id: 233,
      type: "SIMPLE",
      isFeatured: false,
      taxStatus: "NONE",
      defaultProductVariantId: 231,
      status: "ACTIVE",
      thumbnail: {
        id: 3407,
        key: "images/14/30c82e3c-0054-4dbe-9d7e-b3b4bf8df7bf.png",
        type: "png",
        url: "https://s3.ap-southeast-1.amazonaws.com/awd-dev-bucket/images/14/30c82e3c-0054-4dbe-9d7e-b3b4bf8df7bf.png",
        size: 0,
      },
      productDetails: [
        {
          id: 327,
          lang: "VN",
          name: "233tri tao cho mobile test",
          description: "233tri tao cho mobile test",
          shortDescription: "233tri tao cho mobile test",
          slug: "tritaochomobiletest",
        },
      ],
      productCategories: [
        {
          id: 67,
          categoryDetails: [
            {
              id: 107,
              lang: "VN",
              desc: "tri tao cho mobile",
              name: "tri tao cho mobile",
              slug: "tri tao cho mobile",
            },
          ],
        },
      ],
      productTags: [],
      productVariants: [
        {
          id: 231,
          price: 110,
          quantity: 1000,
          salePrice: 10,
          sku: "string",
          name: "string",
          productToVariantId: 265,
          externalProduct: null,
          productVariantPoint: null,
          productTransportInfo: null,
          productVariantDetails: [
            {
              id: 121,
              lang: "VN",
              description: "tri tao cho mobile",
              productVariant: null,
            },
          ],
        },
      ],
      price: {
        normalPrice: 110,
        salePrice: 10,
      },
    },
    {
      onSale: false,
      id: 220,
      type: "SIMPLE",
      isFeatured: false,
      taxStatus: "NONE",
      defaultProductVariantId: 231,
      status: "ACTIVE",
      thumbnail: {
        id: 3407,
        key: "images/14/30c82e3c-0054-4dbe-9d7e-b3b4bf8df7bf.png",
        type: "png",
        url: "https://s3.ap-southeast-1.amazonaws.com/awd-dev-bucket/images/14/30c82e3c-0054-4dbe-9d7e-b3b4bf8df7bf.png",
        size: 0,
      },
      productDetails: [
        {
          id: 314,
          lang: "VN",
          name: "220tri tao cho mobile test",
          description: "220tri tao cho mobile test",
          shortDescription: "220tri tao cho mobile test",
          slug: "tritaochomobiletest",
        },
      ],
      productCategories: [
        {
          id: 67,
          categoryDetails: [
            {
              id: 107,
              lang: "VN",
              desc: "tri tao cho mobile",
              name: "tri tao cho mobile",
              slug: "tri tao cho mobile",
            },
          ],
        },
      ],
      productTags: [],
      productVariants: [
        {
          id: 231,
          price: 110,
          quantity: 1000,
          salePrice: 10,
          sku: "string",
          name: "string",
          productToVariantId: 252,
          externalProduct: null,
          productVariantPoint: null,
          productTransportInfo: null,
          productVariantDetails: [
            {
              id: 121,
              lang: "VN",
              description: "tri tao cho mobile",
              productVariant: null,
            },
          ],
        },
      ],
      price: {
        normalPrice: 110,
        salePrice: 10,
      },
    },
    {
      onSale: false,
      id: 192,
      type: "SIMPLE",
      isFeatured: false,
      taxStatus: "NONE",
      defaultProductVariantId: 217,
      status: "ACTIVE",
      thumbnail: {
        id: 2332,
        key: "images/14/2b371382-37f7-454b-a1a7-5da4b13bae94.jpg",
        type: "jpg",
        url: "https://s3.ap-southeast-1.amazonaws.com/awd-dev-bucket/images/14/2b371382-37f7-454b-a1a7-5da4b13bae94.jpg",
        size: 0,
      },
      productDetails: [
        {
          id: 250,
          lang: "VN",
          name: "tesst",
          description: "<p>test3</p>",
          shortDescription: "test3",
          slug: "tesst",
        },
      ],
      productCategories: [null],
      productTags: [
        {
          id: 40,
          name: "Quà tặng voucher",
          description: "Quà tặng voucher",
        },
      ],
      productVariants: [
        {
          id: 217,
          price: 3,
          quantity: 151,
          salePrice: 0,
          sku: "123",
          name: "Sữa bột cho trẻ",
          productToVariantId: 219,
          externalProduct: null,
          productVariantPoint: null,
          productTransportInfo: null,
          productVariantDetails: [
            {
              id: 107,
              lang: "VN",
              description:
                '<p><strong style="color: red;">❖ <u>Mô tả</u>:</strong></p><p> Chưa có </p><p><br></p><p><strong style="color: red;">❖ <u>Điều khoản sử dụng</u>:</strong></p><p> Chưa có </p><p><br></p><p><strong style="color: red;">❖ <u>Địa chỉ</u>:</strong></p><p> Chưa có</p>',
              productVariant: null,
            },
          ],
        },
      ],
      price: {
        normalPrice: 3,
        salePrice: 0,
      },
    },
    {
      onSale: false,
      id: 237,
      type: "SIMPLE",
      isFeatured: false,
      taxStatus: "NONE",
      defaultProductVariantId: 231,
      status: "ACTIVE",
      thumbnail: {
        id: 3407,
        key: "images/14/30c82e3c-0054-4dbe-9d7e-b3b4bf8df7bf.png",
        type: "png",
        url: "https://s3.ap-southeast-1.amazonaws.com/awd-dev-bucket/images/14/30c82e3c-0054-4dbe-9d7e-b3b4bf8df7bf.png",
        size: 0,
      },
      productDetails: [
        {
          id: 331,
          lang: "VN",
          name: "237tri tao cho mobile test",
          description: "237tri tao cho mobile test",
          shortDescription: "237tri tao cho mobile test",
          slug: "tritaochomobiletest",
        },
      ],
      productCategories: [
        {
          id: 67,
          categoryDetails: [
            {
              id: 107,
              lang: "VN",
              desc: "tri tao cho mobile",
              name: "tri tao cho mobile",
              slug: "tri tao cho mobile",
            },
          ],
        },
      ],
      productTags: [],
      productVariants: [
        {
          id: 231,
          price: 110,
          quantity: 1000,
          salePrice: 10,
          sku: "string",
          name: "string",
          productToVariantId: 269,
          externalProduct: null,
          productVariantPoint: null,
          productTransportInfo: null,
          productVariantDetails: [
            {
              id: 121,
              lang: "VN",
              description: "tri tao cho mobile",
              productVariant: null,
            },
          ],
        },
      ],
      price: {
        normalPrice: 110,
        salePrice: 10,
      },
    },
    {
      onSale: false,
      id: 223,
      type: "SIMPLE",
      isFeatured: false,
      taxStatus: "NONE",
      defaultProductVariantId: 231,
      status: "ACTIVE",
      thumbnail: {
        id: 3407,
        key: "images/14/30c82e3c-0054-4dbe-9d7e-b3b4bf8df7bf.png",
        type: "png",
        url: "https://s3.ap-southeast-1.amazonaws.com/awd-dev-bucket/images/14/30c82e3c-0054-4dbe-9d7e-b3b4bf8df7bf.png",
        size: 0,
      },
      productDetails: [
        {
          id: 317,
          lang: "VN",
          name: "223tri tao cho mobile test",
          description: "223tri tao cho mobile test",
          shortDescription: "223tri tao cho mobile test",
          slug: "tritaochomobiletest",
        },
      ],
      productCategories: [
        {
          id: 67,
          categoryDetails: [
            {
              id: 107,
              lang: "VN",
              desc: "tri tao cho mobile",
              name: "tri tao cho mobile",
              slug: "tri tao cho mobile",
            },
          ],
        },
      ],
      productTags: [],
      productVariants: [
        {
          id: 231,
          price: 110,
          quantity: 1000,
          salePrice: 10,
          sku: "string",
          name: "string",
          productToVariantId: 255,
          externalProduct: null,
          productVariantPoint: null,
          productTransportInfo: null,
          productVariantDetails: [
            {
              id: 121,
              lang: "VN",
              description: "tri tao cho mobile",
              productVariant: null,
            },
          ],
        },
      ],
      price: {
        normalPrice: 110,
        salePrice: 10,
      },
    },
    {
      onSale: false,
      id: 219,
      type: "SIMPLE",
      isFeatured: false,
      taxStatus: "NONE",
      defaultProductVariantId: 231,
      status: "ACTIVE",
      thumbnail: {
        id: 3407,
        key: "images/14/30c82e3c-0054-4dbe-9d7e-b3b4bf8df7bf.png",
        type: "png",
        url: "https://s3.ap-southeast-1.amazonaws.com/awd-dev-bucket/images/14/30c82e3c-0054-4dbe-9d7e-b3b4bf8df7bf.png",
        size: 0,
      },
      productDetails: [
        {
          id: 313,
          lang: "VN",
          name: "219tri tao cho mobile test",
          description: "219tri tao cho mobile test",
          shortDescription: "219tri tao cho mobile test",
          slug: "tritaochomobiletest",
        },
      ],
      productCategories: [
        {
          id: 67,
          categoryDetails: [
            {
              id: 107,
              lang: "VN",
              desc: "tri tao cho mobile",
              name: "tri tao cho mobile",
              slug: "tri tao cho mobile",
            },
          ],
        },
      ],
      productTags: [],
      productVariants: [
        {
          id: 231,
          price: 110,
          quantity: 1000,
          salePrice: 10,
          sku: "string",
          name: "string",
          productToVariantId: 251,
          externalProduct: null,
          productVariantPoint: null,
          productTransportInfo: null,
          productVariantDetails: [
            {
              id: 121,
              lang: "VN",
              description: "tri tao cho mobile",
              productVariant: null,
            },
          ],
        },
      ],
      price: {
        normalPrice: 110,
        salePrice: 10,
      },
    },
    {
      onSale: false,
      id: 252,
      type: "SIMPLE",
      isFeatured: false,
      taxStatus: "NONE",
      defaultProductVariantId: 231,
      status: "ACTIVE",
      thumbnail: {
        id: 3407,
        key: "images/14/30c82e3c-0054-4dbe-9d7e-b3b4bf8df7bf.png",
        type: "png",
        url: "https://s3.ap-southeast-1.amazonaws.com/awd-dev-bucket/images/14/30c82e3c-0054-4dbe-9d7e-b3b4bf8df7bf.png",
        size: 0,
      },
      productDetails: [
        {
          id: 346,
          lang: "VN",
          name: "252tri tao cho mobile test",
          description: "252tri tao cho mobile test",
          shortDescription: "252tri tao cho mobile test",
          slug: "tritaochomobiletest",
        },
      ],
      productCategories: [
        {
          id: 67,
          categoryDetails: [
            {
              id: 107,
              lang: "VN",
              desc: "tri tao cho mobile",
              name: "tri tao cho mobile",
              slug: "tri tao cho mobile",
            },
          ],
        },
      ],
      productTags: [],
      productVariants: [
        {
          id: 231,
          price: 110,
          quantity: 1000,
          salePrice: 10,
          sku: "string",
          name: "string",
          productToVariantId: 284,
          externalProduct: null,
          productVariantPoint: null,
          productTransportInfo: null,
          productVariantDetails: [
            {
              id: 121,
              lang: "VN",
              description: "tri tao cho mobile",
              productVariant: null,
            },
          ],
        },
      ],
      price: {
        normalPrice: 110,
        salePrice: 10,
      },
    },
    {
      onSale: false,
      id: 241,
      type: "SIMPLE",
      isFeatured: false,
      taxStatus: "NONE",
      defaultProductVariantId: 231,
      status: "ACTIVE",
      thumbnail: {
        id: 3407,
        key: "images/14/30c82e3c-0054-4dbe-9d7e-b3b4bf8df7bf.png",
        type: "png",
        url: "https://s3.ap-southeast-1.amazonaws.com/awd-dev-bucket/images/14/30c82e3c-0054-4dbe-9d7e-b3b4bf8df7bf.png",
        size: 0,
      },
      productDetails: [
        {
          id: 335,
          lang: "VN",
          name: "241tri tao cho mobile test",
          description: "241tri tao cho mobile test",
          shortDescription: "241tri tao cho mobile test",
          slug: "tritaochomobiletest",
        },
      ],
      productCategories: [
        {
          id: 67,
          categoryDetails: [
            {
              id: 107,
              lang: "VN",
              desc: "tri tao cho mobile",
              name: "tri tao cho mobile",
              slug: "tri tao cho mobile",
            },
          ],
        },
      ],
      productTags: [],
      productVariants: [
        {
          id: 231,
          price: 110,
          quantity: 1000,
          salePrice: 10,
          sku: "string",
          name: "string",
          productToVariantId: 273,
          externalProduct: null,
          productVariantPoint: null,
          productTransportInfo: null,
          productVariantDetails: [
            {
              id: 121,
              lang: "VN",
              description: "tri tao cho mobile",
              productVariant: null,
            },
          ],
        },
      ],
      price: {
        normalPrice: 110,
        salePrice: 10,
      },
    },
    {
      onSale: false,
      id: 180,
      type: "SIMPLE",
      isFeatured: false,
      taxStatus: "NONE",
      defaultProductVariantId: 202,
      status: "ACTIVE",
      thumbnail: {
        id: 2206,
        key: "images/14/bd1921b6-4be0-4d8a-85b4-381731d6e157.png",
        type: "png",
        url: "https://s3.ap-southeast-1.amazonaws.com/awd-dev-bucket/images/14/bd1921b6-4be0-4d8a-85b4-381731d6e157.png",
        size: 0,
      },
      productDetails: [
        {
          id: 377,
          lang: "VN",
          name: "10/4 sản phẩm 237",
          description:
            '<p>XXXXX tượng trưng cho 5 ký tự được chọn từ 28/36 ký tự bảng chữ cái, Unique trên hệ thống, không sử dụng các ký tự dễ gây nhầm lẫn sau: O,0,U,V,W,1,I, Q.&amp;nbsp;Sau đó sẽ được lọc và loại trừ ra những trường hợp:3/5 ký tự sau không được giống nhau 80%.&amp;nbsp;2 ký tự sát nhau trong bộ từ điển không được đứng sát nhau.&amp;nbsp;&amp;nbsp;5 ký tự đó không là 5 ký tự số hoặc chữ viết hoa liên tục.&amp;nbsp;5 ký tự đó không được giống nhau.Mã muỗng sẽ có hạn sử dụng là 2 năm 1 tháng kể từ ngày áp dụngThời hạn của muỗng khi tạo chỉ được sử dụng trong tháng áp dụng.Hướng dẫn vị trí khắc mã muỗng.Mã muỗng gồm 8&amp;nbsp; ký tự được khắc vào vị trí tùy thuộc vào mỗi muỗng có trong lon sữaMã muỗng được khắc rõ ràng, không bị mờ và bị mất chữ.Mã sau khi khắc phải nhìn và đọc được bằng mắt thường.Ghi chú:Trong phần mềm: đã setup sẵn phần nhóm và ký hiệu muỗng, quy cách sản phẩmFile tải xuống: tên file: tên nhà máy ABC ngày tạo&amp;nbsp; (VD AWD_K32_31_01_2023)File tạo sẽ chia nhỏ sheet thành 2000 mã 1 : vd tạo mã muỗng là 10.000 thì chia làm 5 sheet mỗi sheet 2000 mã.Trong phần mềm có phần ngày áp dụng hoặc tháng áp dụng.Trong phần mềm khi kiểm tra 1 mã code sẽ xem được nó nằm trong file gì ngày nào tạoMã QR Code của Sữa bột pha sẵn:Thẻ cào:Sử dụng hệ thống tạo mã QR Code của Teso.&amp;nbsp;Mã QR Code sản phẩm Sữa bột pha sẵn được phát hành từ Teso, quy định tạo mã QR code sẽ được Teso phát hành với mã phân biệt (tương tự như sữa bột), Sau đó nhà máy Aiwado sẽ chuyển dãy mã QR Code cho nhà máy (xưởng in) để in ấn.Mã QR code được in lên tờ phiếu (card) dạng thẻ cào, sau khi cào ra sẽ có mã QR code để quét được trên APP. 01 thẻ sẽ được bỏ vào thùng sữa.Mỗi một giai đoạn/ chiến dịch, Aiwado sẽ thiết kế mẫu thẻ cào khác nhau.Vị trí thẻ cào trong thùng sữa:Thẻ cào được bỏ vào thùng Sữa pha sẵn.Được niêm phong bằng băng keo có thông tin của chương trình.</p><p><br></p><p>Test Link: <a href="https://stackoverflow.com/questions/35531679/react-native-open-links-in-browser" rel="noopener noreferrer" target="_blank">https://stackoverflow.com/questions/35531679/react-native-open-links-in-browser</a></p><p>Test Link2: <a href="https://nextjs.org/docs/app/building-your-application/data-fetching" rel="noopener noreferrer" target="_blank">https://nextjs.org/docs/app/building-your-application/data-fetching</a></p>',
          shortDescription: "10/4 sản phẩm 2",
          slug: "104-san-pham-2",
        },
      ],
      productCategories: [
        {
          id: 34,
          categoryDetails: [
            {
              id: 59,
              lang: "VN",
              desc: "Sản phẩm HOT",
              name: "Sản phẩm HOT",
              slug: "San-pham-HOT",
            },
          ],
        },
        {
          id: 40,
          categoryDetails: [
            {
              id: 67,
              lang: "VN",
              desc: "test2",
              name: "test2",
              slug: "test2",
            },
          ],
        },
        {
          id: 39,
          categoryDetails: [
            {
              id: 66,
              lang: "VN",
              desc: "test1",
              name: "test1",
              slug: "test1",
            },
          ],
        },
      ],
      productTags: [
        {
          id: 39,
          name: "Quà tặng vật lý",
          description: "Quà tặng vật lý",
        },
      ],
      productVariants: [
        {
          id: 202,
          price: 10,
          quantity: 41,
          salePrice: 1,
          sku: "AW01",
          name: "Diệp test 10/4",
          productToVariantId: 205,
          externalProduct: null,
          productVariantPoint: null,
          productTransportInfo: null,
          productVariantDetails: [
            {
              id: 95,
              lang: "VN",
              description:
                "Thêm mới biến thể được test vào ngày 10 tháng 4 năm 2023",
              productVariant: null,
            },
          ],
        },
      ],
      price: {
        normalPrice: 10,
        salePrice: 1,
      },
    },
    {
      onSale: false,
      id: 262,
      type: "VIRTUAL",
      isFeatured: false,
      taxStatus: "NONE",
      defaultProductVariantId: 238,
      status: "ACTIVE",
      thumbnail: {
        id: 3515,
        key: "images/14/dca072f3-9dd5-48cf-a3dc-1207450a2ae7.jpg",
        type: "jpg",
        url: "https://s3.ap-southeast-1.amazonaws.com/awd-dev-bucket/images/14/dca072f3-9dd5-48cf-a3dc-1207450a2ae7.jpg",
        size: 0,
      },
      productDetails: [
        {
          id: 364,
          lang: "VN",
          name: "Card điện thoại 20000",
          description: "<p>Card điện thoại 20000</p>",
          shortDescription: "Card điện thoại 20000",
          slug: "Card-djien-thoai-20000",
        },
      ],
      productCategories: [
        {
          id: 68,
          categoryDetails: [
            {
              id: 108,
              lang: "VN",
              desc: "string",
              name: "Danh mục tháng 7",
              slug: "Danh-muc-thang-7",
            },
          ],
        },
      ],
      productTags: [
        {
          id: 44,
          name: "tag tháng 7",
          description: "Mã tháng 7",
        },
      ],
      productVariants: [
        {
          id: 238,
          price: 20000,
          quantity: 109,
          salePrice: 0,
          sku: "card 10k",
          name: "Card điện thoại",
          productToVariantId: 293,
          externalProduct: null,
          productVariantPoint: null,
          productTransportInfo: null,
          productVariantDetails: [
            {
              id: 128,
              lang: "VN",
              description:
                '<p><strong style="color: red;">❖ <u>Mô tả</u>:</strong></p><p><strong style="color: rgb(0, 0, 0);">Quà tặng điện tử - eGift Tiền mặt -&nbsp;GoGi House</strong></p><p><span style="color: rgb(0, 0, 0); font-size: 16px;">Chẳng cần phải đi đến tận&nbsp;xứ sở Kim Chi&nbsp;xa xôi bạn vẫn có thể trải nghiệm&nbsp;thưởng thức&nbsp;những món ăn thơm ngon&nbsp;đậm đà bản sắc. Hàn Quốc&nbsp;nổi tiếng bởi một nền văn hóa ẩm thực độc đáo, đầy màu sắc. Trong đó đồ nướng&nbsp;đã trở thành xu hướng ẩm thực được ưa chuộng ở nhiều nước&nbsp;và đặc biệt là&nbsp;ở Việt Nam với chuỗi nhà hàng&nbsp;Gogi House - Quán thịt nướng Hàn Quốc.</span></p><p><span style="color: rgb(0, 0, 0); font-size: 16px;">Đến&nbsp;với chuỗi nhà hàng Gogi House thực khách sẽ có những trải nghiệm ẩm thực trọn vẹn nhất của món thịt bò nướng than hoa theo phong cách&nbsp;truyền thống của Hàn Quốc ngoài ra GoGi House&nbsp;còn mang đến cho thực khách thực đơn những món ăn truyền thống&nbsp;như: đậu hủ sốt GoGi, bánh xèo Hàn Quốc, Teobokki nhân phô mai, Teobokki hải sản, canh rong biển, canh kim chi, miến trộn, mì lạnh, mì jajang, cơm trộn bát đá,… để bạn tha hồ lựa chọn cho bữa tiệc của mình thêm đặc sắc.</span></p><p><strong style="color: rgb(0, 0, 0);">Thương hiệu GoGi House</strong></p><p><span style="font-size: 16px; color: rgb(0, 0, 0);">GoGi House (Quán thịt nướng Hàn Quốc) sẽ đưa bạn đến Seoul, nơi những con phố bình dị, những quán ăn đã trở nên quen thuộc và gắn bó với người dân xứ Hàn. Nếu đã một lần thưởng thức thịt nướng tại GoGi House, bạn sẽ không thể quên được hương vị “ngất ngây” của những món sườn non bò Mỹ, nạc vai bò Mỹ, dẻ sườn tươi…. khi hòa quyện vào với các loại gia vị đặc trưng của xứ sở Kimchi đã trở nên hấp dẫn đến thế nào. Ngoài ra, những món ăn kèm không thể bỏ qua như cơm trộn, mỳ lạnh, canh Kimchi và các loại lẩu cũng sẽ làm bạn ấn tượng thêm về nền ẩm thực Hàn Quốc.</span></p><p><br></p><p><strong style="color: red;">❖ <u>Điều khoản sử dụng</u>:</strong></p><ul><li>eGift có thể sử dụng tại tất cả các nhà hàng&nbsp;<strong>Gogi House</strong>. Vui lòng xem thông tin cửa hàng tại "Vị trí cửa hàng".</li><li>eGift có thể sử dụng tại tất cả các nhà hàng <strong>Gogi House</strong>.&nbsp;</li><li>Quý khách có thể sử dụng <strong>nhiều </strong>eGift trên cùng 1 hoá đơn.</li><li>eGift <strong>được </strong>áp dụng cùng các chương trình khuyến mãi khác.</li><li>eGift chỉ có giá trị sử dụng một lần. Không chấp nhận eGift quá hạn sử dụng, trạng thái “Đã sử dụng”.&nbsp;&nbsp;</li><li>Vui lòng xuất trình mã eGift cho nhân viên tại quầy trước khi thanh toán để được áp dụng eGift&nbsp;</li><li>eGift sẽ không được hoàn lại tiền thừa và không có giá trị quy đổi thành tiền mặt. Khách hàng có thể được yêu cầu trả thêm tiền nếu sử dụng quá giá trị của eGift.</li><li>Khách hàng có trách nhiệm bảo mật thông tin eGift sau khi đặt mua. UrBox sẽ không chịu trách nhiệm hoàn trả các eGift bị mất hoặc ở trạng thái “Đã sử dụng” sau thời gian eGift được xuất ra với bất kì lý do gì.</li><li>UrBox không chịu trách nhiệm đối với chất lượng của sản phẩm hoặc dịch vụ được cung cấp cũng như đối với các tranh chấp về sau giữa khách hàng và <strong>Gogi House</strong>.</li><li>UrBox có quyền sửa chữa hoặc thay đổi điều khoản và điều kiện mà không thông báo trước.</li><li>Quý khách vui lòng liên hệ <strong>Hotline UrBox:</strong> <strong>1900 299 232</strong> (từ 8h-22h hàng ngày, bao gồm lễ tết) để được hỗ trợ.</li></ul><p><br></p><p><strong style="color: red;">❖ <u>Địa chỉ</u>:</strong></p><p><br></p><p>● L1-09 lầu 1 Sense City, 9 Trần Hưng Đạo, P. 5, TP. Cà Mau</p><p><br></p><p>● Tầng L2-01B TTTM Vincom Plaza Buôn Ma Thuột, 72 Lý thường Kiệt, P. Thắng Lợi, TP Buôn Ma Thuột</p><p><br></p><p>● L4-09 TTTM Vincom Long Xuyên, đường Trần Hưng Đạo, P.Mỹ Bình, TP Long Xuyên, Tỉnh An Giang</p><p><br></p><p>● L4-19+20 tại TTTM Vincom Đà Nẵng, Đường Ngô Quyền, Phường An Hải Bắc, Quận Sơn Trà, Đà Nẵng</p><p><br></p><p>● Lô A5, đường Nguyễn Văn Linh, P. Bình Hiên, Q. Hải Châu, Đà Nẵng</p><p><br></p><p>● Lotte Cần Thơ- Lô 1F13, TTTM Lotte Mart, số 84 Đường Mậu Thân, Phường An Hòa, Quận Ninh Kiều, TP Cần Thơ</p><p><br></p><p>● L4 10+11+12 TTTM Vincom Hùng Vương, số 2 đường Hùng Vương, Phường Thới Bình, Quận Ninh Kiều, Cần Thơ</p><p><br></p><p>● Số 15 đường Hồ Tùng Mậu, Vinh, Nghệ An</p><p><br></p><p>● Số 45 Quang Trung, Vinh, Nghệ An</p><p><br></p><p>● Số 01 Trần Hưng Đạo, Phường Phú Cường, TP. Thủ Dầu Một, Bình Dương</p><p><br></p><p>● S-5, Tầng 2, KPH Canary, Đại lộ Bình Dương, P. Bình Hòa, Thị xã Thuận An, tỉnh Bình Dương</p><p><br></p><p>● Lầu 4, 07- 08, TTTM Vincom Biên Hòa, 1096 Phạm Văn Thuận, Khu Phố 2, phường Tân Mai, TP Biên Hòa</p><p><br></p><p>● Tầng 2, Tháp B, Tòa nhà Pegasus, Số 53-55 Võ Thị Sáu, Phường Quyết Thắng, TP Biên Hòa, Đồng Nai</p><p><br></p><p>● Gian hàng L5-08C, Trung tâm mua sắm Saigon Centre, 92-94 Nam Kỳ Khởi Nghĩa, Phường Bến Nghé, Quận 1, Hồ Chí Minh</p><p><br></p><p>● Tầng 3 TTTM Aeon Mall Bình Tân, lô T27-T28, Số 1 Đường Số 17A, Khu phố 11, Bình Tân, Hồ Chí Minh</p><p><br></p><p>● Tầng 1 TTTM Lotte Mart Gò Vấp, 18 Phan Văn Trị - 242 Nguyễn Văn Lượng, P.10, Quận Gò Vấp, Hồ Chí Minh</p><p><br></p><p>● Tầng L4-03 TTTM Vincom Lê Văn Việt, số 50 Lê Văn Việt, P.Hiệp Phú, Q.9, Hồ Chí Minh</p><p><br></p><p>● L4-02, Tầng 4 TTTM Pearl Plaza, 561A Điện Biên Phủ, Phường 25, Quận Bình Thạnh, Hồ Chí Minh</p><p><br></p><p>● B1-06, TTTM Vincom Quang Trung, 190 Quang Trung, Phường 10, Quận Gò Vấp, Hồ Chí Minh</p><p><br></p><p>● B3-23-24 Tòa nhà Vincom Center 70-72 Lê Thánh Tôn, Phường Bến Nghé, Quận 1, Hồ Chí Minh</p><p><br></p><p>● Lô 04-12A, Trung tâm thương mại SC Vivo City, số 1058 Nguyễn Văn Linh, Khu phố 1, Phường Tân Phong, Quận 7, Hồ Chí Minh</p><p><br></p><p>● Gian hàng L3 02B+02C, Trung tâm Thương mại Vincom, Số 216 Võ Văn Ngân, Phường Bình Thọ, Quận Thủ Đức, Hồ Chí Minh</p><p><br></p><p>● 198 Phan Xích Long, Phường 2, Quận Phú Nhuận, TP. Hồ Chí Minh</p><p><br></p><p>● 254-256 Lê Văn Sỹ, Phường 14, Quận 3, Hồ Chí Minh</p><p><br></p><p>● 189-191 Nguyễn Thái Học, P. Phạm Ngũ Lão, Quận 1, Hồ Chí Minh</p><p><br></p><p>● Saigon Superbowl, A43 Trường Sơn, P.4, Q.Tân Bình, Hồ Chí Minh</p><p><br></p><p>● Số 32 Nguyễn Đăng Đạo, TP. Bắc Ninh</p><p><br></p><p>● Lô 404, 405/01, Khu dân cư số 5, phường Phan Đình Phùng, TP. Thái Nguyên, tỉnh Thái Nguyên</p><p><br></p><p>● Số 11, đường Đông A, thành phố Nam Định</p><p><br></p><p>● L5-03-04 Vincom Plaza, Lý Bôn, Thái Bình</p><p><br></p><p>● L4-01+02 TTTM Vincom Center P Bạch Đằng, TP Hạ Long, Quảng Ninh</p><p><br></p><p>● Tầng 4, TTTM Mipec Long Biên, Hà Nội</p><p><br></p><p>● Gian hàng L5 - 13 tầng 5, Vincom Center, 54A Nguyễn Chí Thanh, Hà Nội</p><p><br></p><p>● 14 Giang Văn Minh, Đội Cấn, Ba Đình, Hà Nội</p><p><br></p><p>● Tầng lửng Watermark , 395 Lạc Long Quân , Cầu giấy , Hà Nội</p><p><br></p><p>● 146 Trần Phú, Hà Đông, Hà Nội</p><p><br></p><p>● Tầng 1, 67 Phó Đức Chính, Ba Đình, Hà Nội</p><p><br></p><p>● 124 Trung Yên, Cầu Giấy, Hà Nội</p><p><br></p><p>● 151 Bùi Thị Xuân, Hai Bà Trưng, Hà Nội</p><p><br></p><p>● Số 3 Lê Trọng Tấn, Thanh Xuân, Hà Nội</p><p><br></p><p>● Tòa nhà SUCED, 108 Nguyễn Hoàng, Mỹ Đình 2, Nam Từ Liêm, Hà Nội</p><p><br></p><p>● 100 Ngụy Như Kon Tum, Hà Nội</p><p><br></p><p>● Căn nhà tại Ô số 01, dãy D, lô TT3 Dự án KĐT mới Tây Nam hồ Linh Đàm, Hoàng Mai, Hà Nội</p><p><br></p><p>● B2-R2-13 Royal City, 72 Nguyễn Trãi, Hà Nội</p><p><br></p><p>● 109 Tân Mai, Hà Nội</p><p><br></p><p>● Tầng 1, tòa nhà B4 Kim Liên, Đống Đa, Hà Nội</p><p><br></p><p>● Tầng 1, Lotte Mart 229 Tây Sơn, Hà Nội</p><p><br></p><p>● Ô 103D5 Khu đô thị mới, Dịch Vọng, Cầu Giấy, Hà Nội</p><p><br></p><p>● Tầng 1, TTTM BigC Thăng Long, 222 Trần Duy Hưng, Hà Nội</p><p><br></p><p>● Lotte Mart Nha Trang, 58 Đường 23/10, Phương Sơn, Nha Trang, Khánh Hòa</p><p><br></p><p>● Tầng 1-2 TTTM Satra, C6/27 Phạm Hùng, Bình Hưng, Bình Chánh, Hồ Chí Minh</p><p><br></p><p>● Số 127 - 129 - 131 Nguyễn Hồng Đào, Phường 14, Tân Bình, Hồ Chí Minh</p><p><br></p><p>● Lô 1F13, TTTM Lotte Mart, 84 Mậu Thân, An Hòa, Ninh Kiều, Cần Thơ</p><p><br></p><p>● F1-04, TTTM Emart, 168 Phan Văn Trị, Phuờng 5, Gò Vấp, Hồ Chí Minh</p><p><br></p><p>● 45 Huỳnh Thúc Kháng, Đống Đa, Hà Nội</p><p><br></p><p>● 209 đường 30/4, Xuân Khánh, Ninh Kiều, Cần Thơ</p><p><br></p><p>● Tầng Hầm ,Khu TM, nhà xe - Ga Quốc Nội, Sân bay Quốc tế Tân Sơn Nhất, 45 Trường Sơn, Phuờng 2, Tân Bình, Hồ Chí Minh</p><p><br></p><p>● Thửa đất QH số 7, Lô QH số 22, khu đô thị mới Hòa Vượng, xã Lộc Hòa, Nam Định</p><p><br></p><p>● Tầng 1 TTTM Vincom Plaza SaigonRes, Số 188 , Phuờng 26, Bình Thạnh, Hồ Chí Minh</p><p><br></p><p>● 303 Âu Cơ, Phú Trung, Tân Phú, Hồ Chí Minh</p><p><br></p><p>● 32B Cao Thắng, Phuờng Lam Sơn, Thành phố Thanh Hóa, Thanh Hoá</p><p><br></p><p>● Số 268 Trần Phú ,Đình Bảng,Từ Sơn, Bắc Ninh</p><p><br></p><p>● 521 Nguyễn Tri Phương, Phuờng 8, Quận 10, Hồ Chí Minh.</p><p><br></p><p>● Tầng 1 Cao Thắng Mall,Số 19 Cao Thắng, Phuờng 2, Quận 3, Hồ Chí Minh</p><p><br></p><p>● 123 Phố Trần Văn Lai, Mỹ Đình, Nam Từ Liêm, Hà Nội</p><p><br></p><p>● 1C/A Nguyễn Ảnh Thủ, Khu phố 1, Trung Mỹ Tây, Quận 12, Hồ Chí Minh</p><p><br></p><p>● 167 Đường 30/4, khu 2, Phú Thọ, TP.Thủ Dầu Một, Bình Dương</p><p><br></p><p>● Lô 1F-06 Tầng 1 TTTM Lotte Mart Đà Nẵng, Hòa Cường Bắc, Hải Châu, Đà Nẵng</p><p><br></p><p>● Lô L4 Ariyana smart condotel, Trần Hưng Đạo, Lộc Thọ, Nha Trang, Khánh Hòa</p><p><br></p><p>● Thửa đất số 16, Khu B, Lô 7B, Khu đô thị mới Ngã Năm Sân bay Cát Bi, Đông Khê, Ngô Quyền, Hải Phòng</p><p><br></p><p>● Tầng 5, Lô L5-02 TTTM Vạn Hạnh Mall, 11 Sư Vạn Hạnh, Phuờng 12, Quận 10, Hồ Chí Minh</p><p><br></p><p>● 35A Nguyễn Đình Chiểu, Đa Kao, Quận 1, Hồ Chí Minh</p><p><br></p><p>● 1 Quang Trung, Phuờng 3, Gò Vấp, Hồ Chí Minh</p><p><br></p><p>● Tầng 1, TTTM Lapen Center , Số 33 đường 30/4, Phuờng 9, Vũng Tàu, Bà Rịa Vũng Tàu</p><p><br></p><p>● K29 , KP27 ,Võ Thị Sáu, Phường Thống Nhất, TP. Biên Hòa, Đồng Nai</p><p><br></p><p>● Số 20-21 shop house Tố Hữu, Hà Đông, Hà Nội</p><p><br></p><p>● Tầng 1 , toà nhà Việt Lâm Plaza, 2211 Hùng Vương, Việt Trì, Phú Thọ</p><p><br></p><p>● Gian hàng 5-04, tầng 5 TTTM Tràng Tiền Plaza, 24 Hai Bà Trưng, Tràng Tiền, Hoàn Kiếm, Hà Nội</p><p><br></p><p>● 229-231 Đinh Tiên Hoàng, Tân Định, Quận 1, Hồ Chí Minh</p><p><br></p><p>● Tầng 2, 219 Lương Văn Thăng, Đông Thành, Ninh Bình</p><p><br></p><p>● 149-151 Nguyễn Đức Cảnh, Phường Tân Phong, Quận 7, Hồ Chí Minh</p><p><br></p><p>● 191 Tô Hiệu, Dịch Vọng, Cầu Giấy, Hà Nội</p><p><br></p><p>● Lô P1.04 TTTM Nguyễn Kim Gia Lai, 53 Quang Trung, Phuờng Hội Thương, TP. Pleiku</p><p><br></p><p>● 40 Lý Thường Kiệt, Phuờng 1, TP Vũng Tàu</p><p><br></p><p>● 339C, Hồng Hà, Phường Cốc Lếu, Thành phố Lào Cai, Lào Cai</p><p><br></p><p>● Số 312 Nguyễn Lương Bằng, TP Hải Dương, Hải Dương</p><p><br></p><p>● 11-21 Nguyễn Ảnh Thủ, Phường Hiệp Thành, Quận 12, Hồ Chí Minh</p><p><br></p><p>● TTTM Giga Mall, 240 Phạm Văn Đồng, Phuờng Hiệp Bình Chánh, Quận Thủ Đức, Hồ Chí Minh</p><p><br></p><p>● Lô T312-3, Tầng 3, TTTM Aeon mall, số 27 Cổ Linh, Phuờng Long Biên, Quận Long Biên, Hà Nội</p><p><br></p><p>● Lô TM3 đường 3 tháng 2, Khu đô thị Phú Cường, Phường An Hòa, Thành phố Rạch Giá, Tỉnh Kiên Giang</p><p><br></p><p>● 323-325 Lãnh Binh Thăng, Phường 8, Quận 11, Hồ Chí Minh</p><p><br></p><p>● 300 Cách Mạng Tháng Tám, Tổ 2, Khu phố 3, Phuờng Phước Trung, TP Bà Rịa, Bà Rịa Vũng Tàu</p><p><br></p><p>● 191 Tô Hiệu, Dịch Vọng, Cầu Giấy, Hà Nội</p><p><br></p><p>● 16 khu B1, lô 7B, Khu đô thị mới ngã năm sân bay Cát Bi, Lê Hồng Phong, phường Đông Khê, quận Ngô Quyền, Hải Phòng</p><p><br></p><p>● Số 32B, đường Cao Thắng, TP. Thanh Hóa, Tỉnh Thanh Hóa</p><p><br></p><p>● 10 nguyễn Văn Lộc Hà Đông, Hà Nội</p><p><br></p><p>● 65 An Dương Vương, Phường 8, Quận 5, Tp. Hồ Chí Minh</p><p><br></p><p>● 417 Nguyễn Thị Thập, Phường Tân Phong, Quận 7, Hồ Chí Minh</p><p><br></p><p>● TT 01-04 21 22 HD Mon Hàm Nghi, Quận Nam Từ Liêm, Hà Nội</p><p><br></p><p>● Số 4 Lê Lợi, phường 1, Thành phố Tuy Hòa, Tỉnh Phú Yên</p><p><br></p><p>● Căn BH01-06, BH01-07, BH-08, KĐT Vinhomes Imperial, phường Thượng Lý, quận Hồng Bàng, TP Hải Phòng</p><p><br></p><p>● GF-05 Tầng Trệt ST Center, 2A Bình Chiểu, Phường Bình Chiểu, Quận Thủ Đức, TP. Hồ Chí Minh</p><p><br></p><p>● 42-44-46-68 Tân Sơn Nhì, Phường Tân Sơn Nhì, Quận Tân Phú, TP. Hồ Chí Minh</p><p><br></p><p>● Căn PG2-32 và căn PG2-33, Khu Phố 1, phường 3, Thành Phố Tây Ninh, Tỉnh Tây Ninh</p><p><br></p><p>● Lô L3-05, TTTM Vincom Bạc Liêu,15 Trần Phú, khóm 1, phường 3, Tp.Bạc Liêu, Tỉnh Bạc Liêu</p><p><br></p><p>● Lô DC1-23,DC1-24, DC1-25, DC1-26, DC1-27, Khu dân cư thuộc khu Đô thị - Dịch vụ - Du lịch phía tây đường An Dương Vương, Phường Nguyễn Văn Cừ, Thành Phố Quy Nhơn, Tỉnh Bình Định</p><p><br></p><p>● 02 Nguyễn Tri Phương, Thạc Gián, Thanh Khê, Đà Nẵng</p><p><br></p><p>● 171-173 Trần Hưng Đạo Phú Thuỷ, Thành phố Phan Thiết, Bình Thuận</p><p><br></p><p>● Lô T254 -255 , tầng 2 TTTM Aeon mall Hà Đông, Hà Nội</p><p><br></p><p>● TTTM Phú Lộc, Khu ĐT Phú Lộc 4, Vĩnh Trại, TP Lạng Sơn, Lạng Sơn</p><p><br></p><p>● Đường Chu Văn An, Liên Bảo, TP Vĩnh Yên, Vĩnh Phúc</p><p><br></p><p>● PG1-01 và PG2-02 TTTM và shphouse Cao Lãnh, PHường 1, Thành Phố Cao lãnh, Tỉnh Đồng Tháp</p>',
              productVariant: null,
            },
          ],
        },
      ],
      price: {
        normalPrice: 20000,
        salePrice: 0,
      },
    },
  ],
  meta: {
    totalItems: 79,
    itemCount: 20,
    itemsPerPage: 20,
    totalPages: 4,
    currentPage: 1,
  },
}
