export const siteConfig = {
  name: "AOFENG",
  phone: "0901 234 567",
  phoneHref: "tel:0901234567",
  email: "info@aofeng.vn",
  address: "123 Đường Công Nghiệp, KCN Tân Bình, TP. Hồ Chí Minh",
  priceFrom: "79.000đ",
};

export type NavLink = {
  href: string;
  label: string;
  mobileLabel?: string;
};

export const navLinks: NavLink[] = [
  { href: "#solutions", label: "Giải pháp" },
  { href: "#products", label: "Sản phẩm" },
  { href: "#promotion", label: "Khuyến mãi" },
  { href: "#video", label: "Video", mobileLabel: "Video thực tế" },
  { href: "#reviews", label: "Đánh giá" },
  { href: "#contact", label: "Liên hệ", mobileLabel: "Đặt hàng" },
];

export type SolutionImage = {
  src: string;
  alt: string;
};

export type Solution = {
  id: string;
  tabLabel: string;
  title: string;
  description: string;
  note?: string;
  images: SolutionImage[];
};

export const solutions: Solution[] = [
  {
    id: "use-case-1",
    tabLabel: "01 · Khe hở, côn trùng",
    title: "Tường nứt, chuột gián chui qua khe hở",
    description:
      "Chuột, gián, côn trùng đang tìm cách chui qua khe hở vào nhà bạn?",
    images: [
      { src: "/images/info/1/1.png", alt: "Chuột chui qua khe hở tường" },
      { src: "/images/info/1/2.png", alt: "Trám khe cửa sổ" },
      { src: "/images/info/1/3.png", alt: "Xịt bọt nở vào khe" },
      { src: "/images/info/1/4.png", alt: "Bọt lấp vết nứt" },
      { src: "/images/info/1/5.png", alt: "Trám vết nứt dài" },
      { src: "/images/info/1/6.png", alt: "Xịt khe cửa" },
      { src: "/images/info/1/7.png", alt: "Cắt bọt thừa" },
    ],
  },
  {
    id: "use-case-2",
    tabLabel: "02 · Khung cửa",
    title: "Trám kín khung bao cửa",
    description: "Bạn là thợ xây dựng cần trám kín khe hở khung bao cửa?",
    images: [
      { src: "/images/info/2/1.png", alt: "Trám khe khung cửa gỗ" },
      { src: "/images/info/2/2.png", alt: "Xịt khung cửa nhôm" },
    ],
  },
  {
    id: "use-case-3",
    tabLabel: "03 · Điều hòa & ống",
    title: "Lỗ điều hòa, ống điện nước & hộp kỹ thuật",
    description:
      "Trám kín lỗ xuyên tường — ngăn nước mưa, chống côn trùng, giữ thẩm mỹ công trình.",
    images: [
      { src: "/images/info/3/image.png", alt: "Trám lỗ điều hòa" },
      { src: "/images/info/3/image copy.png", alt: "Xịt quanh ống điều hòa" },
      { src: "/images/info/3/image copy 2.png", alt: "Các bước trám lỗ" },
      { src: "/images/info/3/image copy 3.png", alt: "Ống nước trong tường" },
      { src: "/images/info/3/image copy 4.png", alt: "Trám ống xuyên tường" },
      { src: "/images/info/3/image copy 5.png", alt: "Cố định hộp kỹ thuật" },
      { src: "/images/info/3/image copy 6.png", alt: "Trám khe sàn" },
      { src: "/images/info/3/image copy 7.png", alt: "Ống điện nước" },
      { src: "/images/info/3/image copy 8.png", alt: "Xịt khe sàn" },
    ],
  },
  {
    id: "use-case-4",
    tabLabel: "04 · Tấm ốp decor",
    title: "Dán tấm ốp tường & trang trí giả đá",
    description: "Bạn cần dán, dính tấm ốp tường, tấm trang trí giả đá?",
    note: "Khuyến nghị dòng **AM2** — bám dính cực mạnh, tuổi thọ 10–30 năm.",
    images: [
      { src: "/images/info/4/image.png", alt: "Dán tấm ốp tường" },
      { src: "/images/info/4/image copy.png", alt: "Xịt bọt kết dính" },
    ],
  },
];

export type ProductStat = {
  value: string;
  label: string;
};

export type ProductSpecRow = {
  term: string;
  detail: string;
  accent?: boolean;
};

export type Product = {
  id: "al2" | "am2";
  name: string;
  badge: string;
  grade: string;
  description: string;
  image: string;
  canImage: string;
  photoAlt: string;
  stats: ProductStat[];
  points: string[];
  priceFrom: string;
  showcaseClass: string;
  ctaClass: string;
  specPanelClass: string;
  specLine: string;
  specRows: ProductSpecRow[];
  specHighlights: ProductStat[];
};

export const products: Product[] = [
  {
    id: "al2",
    name: "Keo Bọt Nở AL2",
    badge: "Dòng xanh · AL2",
    grade: "Hạng dân dụng",
    description:
      "Đa năng lấp khe, chống thấm cửa sổ — phù hợp sửa chữa nhà ở và công trình dân dụng.",
    image: "/images/A1.jpg",
    canImage: "/images/Keo_Alone.png",
    photoAlt: "Keo bọt nở PU Foam AL2",
    stats: [
      { value: "35×", label: "Độ nở" },
      { value: "27", label: "kg/m³" },
      { value: "750ml", label: "Dung tích" },
      { value: "B2", label: "Chống cháy" },
    ],
    points: ["Cách âm · Cách nhiệt · Chống thấm", "Dùng vòi hoặc súng xịt"],
    priceFrom: "79.000đ",
    showcaseClass: "product-showcase--al2",
    ctaClass: "product-showcase-cta--al2",
    specPanelClass: "spec-panel--al2",
    specLine: "Dòng xanh · AL2",
    specHighlights: [
      { value: "35×", label: "Độ nở" },
      { value: "27", label: "kg/m³" },
      { value: "B2", label: "Chống cháy" },
    ],
    specRows: [
      { term: "Dung tích", detail: "750ml — 900g" },
      { term: "Cách dùng", detail: "Vòi hoặc súng xịt" },
      { term: "Khô bề mặt", detail: "10–15 phút" },
      { term: "Cắt phần thừa", detail: "30–40 phút" },
      { term: "Tính năng", detail: "Cách âm · Cách nhiệt · Chống thấm" },
      { term: "Cấu trúc bọt", detail: "Ô nhỏ dày, chống thấm tốt" },
      {
        term: "Ứng dụng chính",
        detail: "Lấp khe, lỗ hổng — đa năng hàng ngày",
        accent: true,
      },
    ],
  },
  {
    id: "am2",
    name: "Keo Bọt Nở AM2",
    badge: "Dòng đen · AM2",
    grade: "Hạng công trình",
    description:
      "Kết dính chuyên dụng — bám mạnh, không chảy dầu, lý tưởng cho tấm ốp và trang trí.",
    image: "/images/A2.jpg",
    canImage: "/images/Keo_Alone2.png",
    photoAlt: "Keo bọt nở PU Foam AM2",
    stats: [
      { value: "45×", label: "Độ nở" },
      { value: "20", label: "kg/m³" },
      { value: "750ml", label: "Dung tích" },
      { value: "B2", label: "Chống cháy" },
    ],
    points: ["Không co · Không chảy dầu", "Kết dính tấm ốp, vật liệu decor"],
    priceFrom: "85.000đ",
    showcaseClass: "product-showcase--am2",
    ctaClass: "product-showcase-cta--am2",
    specPanelClass: "spec-panel--am2",
    specLine: "Dòng đen · AM2",
    specHighlights: [
      { value: "45×", label: "Độ nở" },
      { value: "20", label: "kg/m³" },
      { value: "B2", label: "Chống cháy" },
    ],
    specRows: [
      { term: "Dung tích", detail: "750ml — 900g" },
      { term: "Cách dùng", detail: "Vòi hoặc súng xịt" },
      { term: "Khô bề mặt", detail: "10–15 phút" },
      { term: "Cắt phần thừa", detail: "30–50 phút" },
      { term: "Tính năng", detail: "Cách âm · Cách nhiệt · Chống thấm" },
      {
        term: "Đặc biệt",
        detail: "Không co · Không chảy dầu · Bám cực mạnh",
      },
      {
        term: "Ứng dụng chính",
        detail: "Lấp khe + kết dính tấm ốp, decor",
        accent: true,
      },
    ],
  },
];

export type VideoItem = {
  id: string;
  src: string;
  title: string;
  poster: string;
  label: string;
  subtitle: string;
};

export const videos: VideoItem[] = [
  {
    id: "intro",
    src: "/vid/company_introduction.mp4",
    title: "Giới thiệu xưởng sản xuất AOFENG",
    poster: "/images/C1.jpg",
    label: "Xưởng sản xuất",
    subtitle: "Giới thiệu công ty & quy trình",
  },
  {
    id: "al2-usage",
    src: "/vid/AL2_Cach_Su_Dung.mp4",
    title: "Cách sử dụng keo bọt nở AL2",
    poster: "/images/A1.jpg",
    label: "Cách dùng AL2",
    subtitle: "Thao tác xịt đúng kỹ thuật",
  },
  {
    id: "al2-manual",
    src: "/vid/AL2_Manual.mp4",
    title: "Hướng dẫn chi tiết AL2",
    poster: "/images/B1.jpg",
    label: "Hướng dẫn AL2",
    subtitle: "Manual & mẹo thi công",
  },
  {
    id: "al2-ads",
    src: "/vid/QuangCaoAL2.mp4",
    title: "Quảng cáo sản phẩm AL2",
    poster: "/images/B2.jpg",
    label: "Quảng cáo AL2",
    subtitle: "Dòng xanh đa năng",
  },
  {
    id: "am2-ads",
    src: "/vid/AM2_Ads.mp4",
    title: "Quảng cáo sản phẩm AM2",
    poster: "/images/A2.jpg",
    label: "Quảng cáo AM2",
    subtitle: "Dòng đen kết dính chuyên dụng",
  },
];

export type UsageStep = {
  num: number;
  title: string;
  description: string;
  key?: boolean;
  icon: "clean" | "shake" | "nozzle" | "fill" | "cut" | "protect";
};

export const usageSteps: UsageStep[] = [
  {
    num: 1,
    title: "Làm sạch & làm ẩm bề mặt",
    description:
      "Làm sạch, bỏ bẩn và làm ẩm vùng cần thi công — càng ẩm thì keo càng bám tốt.",
    icon: "clean",
  },
  {
    num: 2,
    title: "Lắc chai kỹ",
    description: "Lắc đều chai 15–20 lần trước khi sử dụng.",
    icon: "shake",
  },
  {
    num: 3,
    title: "Gắn vòi hoặc súng — cầm ngược",
    description:
      "Lắp vòi hoặc súng xịt, cầm chai ngược. Dùng vòi: ấn chặt, giữ áp lực đều.",
    key: true,
    icon: "nozzle",
  },
  {
    num: 4,
    title: "Bơm đủ 60–70% khoảng trống",
    description:
      "Chỉ bơm khoảng 60–70% thể tích — bọt sẽ nở thêm sau khi ra.",
    key: true,
    icon: "fill",
  },
  {
    num: 5,
    title: "Chờ khô rồi cắt phần thừa",
    description:
      "Chờ bọt nở và cứng. Sau 30–60 phút có thể cắt phần dư thừa.",
    icon: "cut",
  },
  {
    num: 6,
    title: "Bảo vệ khi dùng ngoài trời",
    description:
      "Ngoài trời, nắng trực tiếp — phủ thêm silicone, sơn hoặc vữa để bền lâu nhất.",
    icon: "protect",
  },
];

export type PromoBadge = "gift" | "sale" | "hot";

export type PromoOption = {
  qty: number;
  caption: string;
  price: string;
  packageId: string;
  title: string;
  meta: string;
  oldPrice?: string;
  gift?: string;
  badges?: PromoBadge[];
};

export type PromoLine = {
  id: "al2" | "am2";
  header: string;
  canSrc: string;
  previewClass: string;
  btnClass: string;
  optionClass?: string;
  defaultPrice: string;
  options: PromoOption[];
};

export const promoLines: PromoLine[] = [
  {
    id: "al2",
    header: "AL2 · Dòng xanh — Đa năng chống thấm",
    canSrc: "/images/Keo_Alone.png",
    previewClass: "promo-preview-panel--green",
    btnClass: "promo-btn-green",
    defaultPrice: "79.000đ",
    options: [
      {
        qty: 1,
        caption: "Combo 1 chai AL2",
        price: "79.000đ",
        packageId: "al2-1",
        title: "Mua 1 chai",
        meta: "Dùng thử — phù hợp sửa nhỏ lẻ",
      },
      {
        qty: 2,
        caption: "Combo 2 chai AL2",
        price: "158.000đ",
        packageId: "al2-2",
        title: "Combo 2 chai",
        meta: "+ Keo miễn đinh Loncool",
        gift: "+ Keo miễn đinh Loncool",
        badges: ["gift"],
      },
      {
        qty: 3,
        caption: "Combo 3 chai AL2",
        price: "213.300đ",
        packageId: "al2-3",
        title: "Combo 3 chai",
        meta: "Tiết kiệm khi mua nhiều",
        oldPrice: "237.000đ",
        badges: ["sale"],
      },
      {
        qty: 6,
        caption: "Combo 6 chai AL2",
        price: "426.600đ",
        packageId: "al2-6",
        title: "Combo 6 chai",
        meta: "+ 1 Silicone A300 Axit",
        oldPrice: "474.000đ",
        gift: "+ 1 Silicone A300 Axit",
        badges: ["sale"],
      },
      {
        qty: 12,
        caption: "Combo 12 chai AL2",
        price: "853.200đ",
        packageId: "al2-12",
        title: "Combo 12 chai",
        meta: "+ 4 Silicone A300 Axit — Bán chạy nhất",
        oldPrice: "948.000đ",
        gift: "+ 4 Silicone A300 Axit",
        badges: ["hot", "sale"],
      },
    ],
  },
  {
    id: "am2",
    header: "AM2 · Dòng đen — Kết dính chuyên dụng",
    canSrc: "/images/Keo_Alone2.png",
    previewClass: "promo-preview-panel--dark",
    btnClass: "promo-btn-dark",
    optionClass: "promo-option-card--dark",
    defaultPrice: "85.000đ",
    options: [
      {
        qty: 1,
        caption: "Combo 1 chai AM2",
        price: "85.000đ",
        packageId: "am2-1",
        title: "Mua 1 chai",
        meta: "Kết dính chuyên dụng — dòng đen",
      },
      {
        qty: 2,
        caption: "Combo 2 chai AM2",
        price: "170.000đ",
        packageId: "am2-2",
        title: "Combo 2 chai",
        meta: "+ Keo miễn đinh Loncool",
        gift: "+ Keo miễn đinh Loncool",
        badges: ["gift"],
      },
      {
        qty: 3,
        caption: "Combo 3 chai AM2",
        price: "229.500đ",
        packageId: "am2-3",
        title: "Combo 3 chai",
        meta: "Tiết kiệm khi mua nhiều",
        oldPrice: "255.000đ",
        badges: ["sale"],
      },
      {
        qty: 6,
        caption: "Combo 6 chai AM2",
        price: "459.000đ",
        packageId: "am2-6",
        title: "Combo 6 chai",
        meta: "+ 1 Silicone A300 Axit",
        oldPrice: "510.000đ",
        gift: "+ 1 Silicone A300 Axit",
        badges: ["sale"],
      },
      {
        qty: 12,
        caption: "Combo 12 chai AM2",
        price: "918.000đ",
        packageId: "am2-12",
        title: "Combo 12 chai",
        meta: "+ 4 Silicone A300 Axit — Bán chạy nhất",
        oldPrice: "1.020.000đ",
        gift: "+ 4 Silicone A300 Axit",
        badges: ["hot", "sale"],
      },
    ],
  },
];

export type ContactPackage = {
  id: string;
  label: string;
  hot?: boolean;
};

export const contactPackages: ContactPackage[] = [
  { id: "al2-1", label: "AL2 — 1 chai · 79.000đ" },
  { id: "al2-2", label: "AL2 — Combo 2 chai · 158.000đ + Loncool" },
  {
    id: "al2-3",
    label: "AL2 — Combo 3 chai · 213.300đ -10%",
  },
  { id: "al2-6", label: "AL2 — Combo 6 chai · 426.600đ + Silicone" },
  {
    id: "al2-12",
    label: "AL2 — Combo 12 chai · 853.200đ + 4 Silicone",
    hot: true,
  },
  { id: "am2-1", label: "AM2 — 1 chai · 85.000đ" },
  { id: "am2-2", label: "AM2 — Combo 2 chai · 170.000đ + Loncool" },
  {
    id: "am2-3",
    label: "AM2 — Combo 3 chai · 229.500đ -10%",
  },
  { id: "am2-6", label: "AM2 — Combo 6 chai · 459.000đ + Silicone" },
  { id: "am2-12", label: "AM2 — Combo 12 chai · 918.000đ + 4 Silicone" },
];

export type Review = {
  initials: string;
  name: string;
  daysAgo: string;
  text: string;
  avatarClass: string;
  borderless?: boolean;
};

export const reviews: Review[] = [
  {
    initials: "NM",
    name: "Ngọc Minh",
    daysAgo: "1 ngày",
    text: "Hàng này xài rất ổn, xịt bọt nở ra siêu nhanh và bám chắc lắm. Mình dùng để trám khe hở và gắn ống nước cực tiện, mấy hôm mưa kiểm tra vẫn thấy bọt cứng cáp.",
    avatarClass: "bg-blue-500",
  },
  {
    initials: "HN",
    name: "Hoài Nam",
    daysAgo: "2 ngày",
    text: "Đặt hôm qua mà nay đã nhận được cả 2 chai keo, đóng gói chắc chắn, bình xịt dễ dùng, giá tốt hơn nhiều loại khác.",
    avatarClass: "bg-aofeng-600",
  },
  {
    initials: "TH",
    name: "Thu Hương",
    daysAgo: "3 ngày",
    text: "Keo bọt bung nở lên tốt mà chắc chắn lắm, dễ dùng, xịt vào các hốc hay khe tường lấp kín liền. Mới ấn xịt thử mà đã nở đầy khe luôn.",
    avatarClass: "bg-purple-500",
  },
  {
    initials: "LV",
    name: "Lê Văn Tuấn",
    daysAgo: "5 ngày",
    text: "Dùng AM2 cho khe cửa sổ, bám rất tốt. AOFENG đúng là hàng chất lượng, sẽ mua thêm combo 6 chai.",
    avatarClass: "bg-gray-400",
    borderless: true,
  },
];

export const trustStripItems = [
  "Kiểm tra hàng trước thanh toán",
  "Miễn phí vận chuyển",
  "Giao hàng toàn quốc",
  "Hỗ trợ 24/7",
];

export const stats = [
  { count: 15, suffix: "+", label: "Năm kinh nghiệm", delay: "delay-100" },
  { count: 500, suffix: "+", label: "Dự án hoàn thành", delay: "delay-200" },
  { count: 1000, suffix: "+", label: "Khách hàng tin tưởng", delay: "delay-300" },
  { count: 50, suffix: "+", label: "Đại lý toàn quốc", delay: "delay-400" },
];

export const whyUsItems = [
  {
    title: "Chất lượng đảm bảo",
    description:
      "Sản phẩm đạt tiêu chuẩn ISO, kiểm tra chất lượng từng lô hàng trước khi xuất kho.",
    delay: "delay-100",
    icon: "quality",
  },
  {
    title: "Thân thiện môi trường",
    description:
      "Công thức không chứa CFC, an toàn cho người sử dụng và môi trường xung quanh.",
    delay: "delay-200",
    icon: "eco",
  },
  {
    title: "Hiệu suất vượt trội",
    description:
      "Tỷ lệ nở lên đến 2.5 lần, bám dính mạnh trên đa số vật liệu xây dựng.",
    delay: "delay-300",
    icon: "performance",
  },
  {
    title: "Giá cả hợp lý",
    description:
      "Sản xuất trực tiếp, không qua trung gian, cam kết giá tốt nhất thị trường.",
    delay: "delay-100",
    icon: "price",
  },
  {
    title: "Giao hàng nhanh",
    description:
      "Hệ thống kho bãi toàn quốc, giao hàng trong 24-48h tại các thành phố lớn.",
    delay: "delay-200",
    icon: "delivery",
  },
  {
    title: "Hỗ trợ kỹ thuật",
    description:
      "Đội ngũ kỹ thuật viên sẵn sàng tư vấn và hướng dẫn sử dụng sản phẩm.",
    delay: "delay-300",
    icon: "support",
  },
];

export const features = [
  {
    title: "Chống thấm dột",
    description:
      "Tạo lớp bọt nở kín, chống thấm nước, ngăn dột và hạn chế ẩm mốc. Bám chắc trên nhiều bề mặt, lấp đầy mọi khe hở.",
    image: "/images/C1.jpg",
    imageAlt: "Chống thấm",
    icon: "water",
  },
  {
    title: "Giãn nở siêu nhanh — đông cứng tức thì",
    description:
      "Bọt nở mạnh lấp kín khe hở. Khô nhanh tiết kiệm thời gian thi công. Bám chắc, không co không xẹp.",
    image: "/images/B2.jpg",
    imageAlt: "Giãn nở nhanh",
    icon: "bolt",
  },
  {
    title: "Cách âm cách nhiệt",
    description:
      "Giãn nở mạnh tạo lớp đệm kín — cách âm, cách nhiệt hiệu quả cho khe mái tôn, cửa sổ và vết nứt tường.",
    image: "/images/A1.jpg",
    imageAlt: "Cách âm nhiệt",
    icon: "shield",
  },
];

export const featureTrustItems = [
  { title: "Bảo hành chính hãng", subtitle: "Lỗi 1 đổi 1", icon: "warranty" },
  { title: "Hỗ trợ 24/7", subtitle: "Hotline tư vấn kỹ thuật", icon: "phone" },
  {
    title: "Giao hàng toàn quốc",
    subtitle: "Miễn phí vận chuyển",
    icon: "truck",
  },
  {
    title: "Kiểm tra hàng",
    subtitle: "Trước khi thanh toán",
    icon: "check",
  },
];
