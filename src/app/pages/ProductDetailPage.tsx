import {
  Star,
  ShoppingCart,
  Heart,
  Share2,
  Plus,
  Minus,
  Shield,
  RotateCcw,
  Store,
  MessageCircle,
  ChevronRight,
  Home,
  Award,
  Clock,
} from "lucide-react";
import { useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { VoucherCard } from "../components/VoucherCard";
import { VariantSelector } from "../components/VariantSelector";
import { ShippingInfoCard } from "../components/ShippingInfoCard";
import { RatingsSummary } from "../components/RatingsSummary";
import { ReviewCard } from "../components/ReviewCard";
import { Link } from "../router/Router";

export function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedEdition, setSelectedEdition] = useState("hardcover");
  const [selectedLanguage, setSelectedLanguage] = useState("vietnamese");
  const [isWishlisted, setIsWishlisted] = useState(false);

  const images = [
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600",
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600",
    "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=600",
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600",
  ];

  const editions = [
    { id: "hardcover", name: "Bìa cứng", available: true },
    { id: "paperback", name: "Bìa mềm", available: true },
    { id: "special", name: "Phiên bản đặc biệt", available: false },
  ];

  const languages = [
    { id: "vietnamese", name: "Tiếng Việt", available: true },
    { id: "english", name: "Tiếng Anh", available: true },
  ];

  const vouchers = [
    {
      code: "BOOK15",
      discount: "Giảm 15%",
      description: "Giảm tối đa 50.000₫",
      minOrder: 200000,
    },
    {
      code: "FREESHIP",
      discount: "Miễn phí vận chuyển",
      description: "Cho đơn từ 150.000₫",
      minOrder: 150000,
    },
  ];

  const shippingOptions = [
    { type: "Giao hàng tiêu chuẩn", price: 30000, estimatedDays: "2-3 ngày" },
    { type: "Giao hàng nhanh", price: 50000, estimatedDays: "Trong 24 giờ" },
    { type: "Miễn phí vận chuyển", price: 0, estimatedDays: "3-5 ngày" },
  ];

  const ratingBreakdown = [
    { stars: 5, count: 850, percentage: 68 },
    { stars: 4, count: 280, percentage: 22 },
    { stars: 3, count: 75, percentage: 6 },
    { stars: 2, count: 30, percentage: 3 },
    { stars: 1, count: 15, percentage: 1 },
  ];

  const reviews = [
    {
      userName: "Nguyễn Thị Mai",
      rating: 5,
      date: "15/04/2026",
      comment:
        "Sách rất hay, nội dung sâu sắc và ý nghĩa. Bìa đẹp, in ấn chất lượng. Shop giao hàng nhanh và đóng gói cẩn thận.",
      variant: "Bìa cứng - Tiếng Việt",
      verified: true,
      helpful: 24,
    },
    {
      userName: "Trần Văn Hùng",
      rating: 4,
      date: "10/04/2026",
      comment:
        "Câu chuyện truyền cảm hứng, dịch thuật tốt. Giá hơi cao nhưng chất lượng xứng đáng.",
      variant: "Bìa mềm - Tiếng Việt",
      verified: true,
      helpful: 12,
    },
    {
      userName: "Lê Thị Hương",
      rating: 5,
      date: "05/04/2026",
      comment:
        "Một trong những cuốn sách hay nhất mình từng đọc. Rất recommend cho ai đang tìm kiếm ý nghĩa cuộc sống.",
      verified: true,
      helpful: 18,
    },
  ];

  const relatedBooks = [
    {
      id: "2",
      title: "Sapiens: Lược Sử Loài Người",
      author: "Yuval Noah Harari",
      price: 189000,
      originalPrice: 220000,
      rating: 4.9,
      sold: 2100,
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400",
      shop: "Nhà sách Tri Thức",
    },
    {
      id: "3",
      title: "Đắc Nhân Tâm",
      author: "Dale Carnegie",
      price: 65000,
      originalPrice: 85000,
      rating: 4.7,
      sold: 3500,
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400",
      shop: "Nhà sách Phương Nam",
    },
    {
      id: "4",
      title: "Tuổi Trẻ Đáng Giá Bao Nhiêu",
      author: "Rosie Nguyễn",
      price: 85000,
      rating: 4.6,
      sold: 1800,
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
      shop: "Nhà sách Kim Đồng",
    },
    {
      id: "8",
      title: "Atomic Habits",
      author: "James Clear",
      price: 119000,
      originalPrice: 149000,
      rating: 4.8,
      sold: 2800,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
      shop: "Nhà sách Văn Học",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[#64748b] mb-6">
        <Link to="/" className="hover:text-[#0f172a]">
          <Home className="w-4 h-4" />
        </Link>
        <ChevronRight className="w-4 h-4" />
        <Link to="/san-pham" className="hover:text-[#0f172a]">
          Sản phẩm
        </Link>
        <ChevronRight className="w-4 h-4" />
        <Link to="/san-pham" className="hover:text-[#0f172a]">
          Văn học
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-[#0f172a] font-medium line-clamp-1">
          Nhà Giả Kim
        </span>
      </nav>

      {/* Main Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Image Gallery */}
        <div>
          <div className="bg-white rounded-2xl overflow-hidden border border-[#e2e8f0] mb-4 sticky top-24">
            <div className="aspect-[3/4] overflow-hidden bg-[#fff7ed] relative">
              <img
                src={images[selectedImage]}
                alt="Nhà Giả Kim"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
              >
                <Heart
                  className={`w-6 h-6 ${
                    isWishlisted
                      ? "fill-red-500 text-red-500"
                      : "text-[#0f172a]"
                  }`}
                />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`bg-white rounded-xl overflow-hidden border-2 transition-all ${
                  selectedImage === index
                    ? "border-[#fcd34d] ring-2 ring-[#fcd34d]/20"
                    : "border-[#e2e8f0] hover:border-[#fcd34d]"
                }`}
              >
                <div className="aspect-[3/4] overflow-hidden bg-[#fff7ed]">
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-4">
            <div className="flex items-center gap-2 text-sm text-[#64748b] mb-2">
              <Link
                to="/nguoi-ban/cua-hang/nha-sach-van-hoc"
                className="hover:text-[#0f172a] flex items-center gap-1"
              >
                <Store className="w-4 h-4" />
                <span>Nhà sách Văn Học</span>
              </Link>
              <span>|</span>
              <span>Văn học</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-3">
              Nhà Giả Kim
            </h1>
            <p className="text-lg text-[#64748b] mb-4">Paulo Coelho</p>

            <div className="flex items-center gap-4 mb-4 pb-4 border-b border-[#e2e8f0]">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#fcd34d] text-[#fcd34d]"
                    />
                  ))}
                </div>
                <span className="font-bold text-[#0f172a]">4.8</span>
              </div>
              <div className="h-4 w-px bg-[#e2e8f0]"></div>
              <button className="text-[#64748b] hover:text-[#0f172a] underline">
                1.250 đánh giá
              </button>
              <div className="h-4 w-px bg-[#e2e8f0]"></div>
              <span className="text-[#64748b]">1.250 đã bán</span>
            </div>
          </div>

          {/* Price */}
          <div className="bg-[#fff7ed] rounded-2xl p-6 mb-6">
            <div className="flex items-end gap-4 mb-2">
              <span className="text-3xl md:text-4xl font-bold text-[#0f172a]">
                79.000₫
              </span>
              <span className="text-xl text-[#64748b] line-through mb-1">
                99.000₫
              </span>
              <span className="px-3 py-1 bg-[#fcd34d] text-[#0f172a] font-bold rounded-full text-sm">
                -20%
              </span>
            </div>
          </div>

          {/* Vouchers */}
          <div className="mb-6">
            <h3 className="font-bold text-[#0f172a] mb-3">Mã giảm giá</h3>
            <div className="space-y-2">
              {vouchers.map((voucher, index) => (
                <VoucherCard key={index} {...voucher} />
              ))}
            </div>
          </div>

          {/* Variants */}
          <div className="space-y-6 mb-6">
            <VariantSelector
              label="Phiên bản"
              variants={editions}
              selected={selectedEdition}
              onSelect={setSelectedEdition}
            />
            <VariantSelector
              label="Ngôn ngữ"
              variants={languages}
              selected={selectedLanguage}
              onSelect={setSelectedLanguage}
            />
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <label className="block text-[#0f172a] font-medium mb-3">
              Số lượng
            </label>
            <div className="flex items-center gap-4">
              <div className="flex items-center border-2 border-[#e2e8f0] rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-[#f1f5f9] transition-colors"
                >
                  <Minus className="w-5 h-5 text-[#0f172a]" />
                </button>
                <span className="px-8 py-3 font-bold text-[#0f172a] border-x-2 border-[#e2e8f0]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-[#f1f5f9] transition-colors"
                >
                  <Plus className="w-5 h-5 text-[#0f172a]" />
                </button>
              </div>
              <span className="text-[#64748b]">
                <span className="font-medium text-[#0f172a]">1.234</span> sản
                phẩm có sẵn
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button className="flex-1 py-4 border-2 border-[#0f172a] text-[#0f172a] rounded-full hover:bg-[#fff7ed] transition-colors flex items-center justify-center gap-2 font-bold">
              <ShoppingCart className="w-5 h-5" />
              <span>Thêm vào giỏ</span>
            </button>
            <Link
              to="/thanh-toan"
              className="flex-1 py-4 bg-[#0f172a] text-white rounded-full hover:bg-[#334155] transition-colors flex items-center justify-center gap-2 font-bold"
            >
              Mua ngay
            </Link>
            <button className="sm:w-auto px-6 py-4 border-2 border-[#e2e8f0] rounded-full hover:bg-[#fff7ed] transition-colors">
              <Share2 className="w-5 h-5 text-[#0f172a]" />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#e2e8f0]">
              <Shield className="w-6 h-6 text-[#fcd34d]" />
              <div>
                <p className="font-medium text-[#0f172a] text-sm">
                  100% chính hãng
                </p>
                <p className="text-xs text-[#64748b]">Đảm bảo nguồn gốc</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#e2e8f0]">
              <RotateCcw className="w-6 h-6 text-[#fcd34d]" />
              <div>
                <p className="font-medium text-[#0f172a] text-sm">
                  Đổi trả 7 ngày
                </p>
                <p className="text-xs text-[#64748b]">Miễn phí đổi trả</p>
              </div>
            </div>
          </div>

          {/* Shipping Info */}
          <ShippingInfoCard options={shippingOptions} />
        </div>
      </div>

      {/* Shop Info */}
      <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0] mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex items-center gap-4 flex-1">
            <div className="w-16 h-16 bg-[#fcd34d] rounded-2xl flex items-center justify-center">
              <span className="text-2xl font-bold text-[#0f172a]">VH</span>
            </div>
            <div>
              <h3 className="font-bold text-[#0f172a] text-lg mb-1">
                Nhà sách Văn Học
              </h3>
              <div className="flex items-center gap-4 text-sm text-[#64748b]">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-[#fcd34d] text-[#fcd34d]" />
                  <span>4.8 (1.250 đánh giá)</span>
                </div>
                <span>|</span>
                <span>156 sản phẩm</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <Link
              to="/nguoi-ban/cua-hang/nha-sach-van-hoc"
              className="flex-1 md:flex-none px-6 py-3 border-2 border-[#0f172a] text-[#0f172a] rounded-full hover:bg-[#fff7ed] transition-colors font-medium text-center"
            >
              Xem shop
            </Link>
            <button className="flex-1 md:flex-none px-6 py-3 bg-[#0f172a] text-white rounded-full hover:bg-[#334155] transition-colors font-medium flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span>Chat ngay</span>
            </button>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#e2e8f0] mb-8">
        <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
          Chi tiết sản phẩm
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
          <div className="flex py-3 border-b border-[#e2e8f0]">
            <span className="text-[#64748b] w-1/3">Tác giả:</span>
            <span className="text-[#0f172a] font-medium">Paulo Coelho</span>
          </div>
          <div className="flex py-3 border-b border-[#e2e8f0]">
            <span className="text-[#64748b] w-1/3">Nhà xuất bản:</span>
            <span className="text-[#0f172a] font-medium">NXB Văn Học</span>
          </div>
          <div className="flex py-3 border-b border-[#e2e8f0]">
            <span className="text-[#64748b] w-1/3">Năm xuất bản:</span>
            <span className="text-[#0f172a] font-medium">2023</span>
          </div>
          <div className="flex py-3 border-b border-[#e2e8f0]">
            <span className="text-[#64748b] w-1/3">Số trang:</span>
            <span className="text-[#0f172a] font-medium">228</span>
          </div>
          <div className="flex py-3 border-b border-[#e2e8f0]">
            <span className="text-[#64748b] w-1/3">Kích thước:</span>
            <span className="text-[#0f172a] font-medium">14 x 20.5 cm</span>
          </div>
          <div className="flex py-3 border-b border-[#e2e8f0]">
            <span className="text-[#64748b] w-1/3">Loại bìa:</span>
            <span className="text-[#0f172a] font-medium">Bìa mềm</span>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-[#0f172a] mb-4">Mô tả sản phẩm</h3>
          <div className="prose prose-slate max-w-none">
            <p className="text-[#475569] leading-relaxed mb-4">
              Nhà Giả Kim là một câu chuyện ngụ ngôn về Santiago, một chàng
              chăn cừu trẻ người Tây Ban Nha, khao khát đi du lịch để tìm kiếm
              kho báu trần thế. Từ quê nhà tại Tây Ban Nha, cậu đã vượt qua
              những chặng đường dài đến tận Kim Tự Tháp Ai Cập.
            </p>
            <p className="text-[#475569] leading-relaxed mb-4">
              Trong hành trình đó, cậu đã học được nhiều bài học về sự khôn
              ngoan của trái tim, về tầm quan trọng của việc lắng nghe trái tim
              mình và về việc đọc những điềm báo trên đường đời.
            </p>
            <p className="text-[#475569] leading-relaxed">
              Cuốn sách đã truyền cảm hứng cho hàng triệu độc giả trên toàn
              thế giới về việc theo đuổi ước mơ và tìm kiếm chân lý của bản
              thân. Đây là một tác phẩm kinh điển về văn học tâm linh và phát
              triển bản thân.
            </p>
          </div>
        </div>
      </div>

      {/* Ratings & Reviews */}
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#e2e8f0] mb-8">
        <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
          Đánh giá sản phẩm
        </h2>
        <RatingsSummary
          average={4.8}
          total={1250}
          breakdown={ratingBreakdown}
        />
        <div className="mt-8 space-y-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
        <div className="text-center mt-6">
          <button className="px-8 py-3 border-2 border-[#0f172a] text-[#0f172a] rounded-full hover:bg-[#fff7ed] transition-colors font-medium">
            Xem tất cả đánh giá
          </button>
        </div>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
          Sản phẩm tương tự
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {relatedBooks.map((book) => (
            <ProductCard key={book.id} {...book} />
          ))}
        </div>
      </div>
    </div>
  );
}
