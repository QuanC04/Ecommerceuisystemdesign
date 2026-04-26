import { ProductCard } from "../components/ProductCard";
import { CategoryChip } from "../components/CategoryChip";
import { ShopCard } from "../components/ShopCard";
import { FlashSaleTimer } from "../components/FlashSaleTimer";
import {
  ChevronRight,
  BookOpen,
  TrendingUp,
  Award,
  Heart,
  Sparkles,
  Zap,
  Shield,
  Truck,
  HeadphonesIcon,
  RotateCcw,
} from "lucide-react";
import { Link } from "../router/Router";

export function HomePage() {
  const categories = [
    { name: "Văn học", icon: BookOpen, link: "/san-pham", count: 2500 },
    { name: "Kinh tế", icon: TrendingUp, link: "/san-pham", count: 1800 },
    { name: "Kỹ năng", icon: Award, link: "/san-pham", count: 1200 },
    { name: "Thiếu nhi", icon: Heart, link: "/san-pham", count: 980 },
    { name: "Tâm lý", icon: Sparkles, link: "/san-pham", count: 750 },
    { name: "Lịch sử", icon: BookOpen, link: "/san-pham", count: 650 },
  ];

  const featuredBooks = [
    {
      id: "1",
      title: "Nhà Giả Kim",
      author: "Paulo Coelho",
      price: 79000,
      originalPrice: 99000,
      rating: 4.8,
      sold: 1250,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
      shop: "Nhà sách Văn Học",
    },
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
  ];

  const flashSaleBooks = [
    {
      id: "5",
      title: "Nghệ Thuật Bán Hàng",
      author: "Zig Ziglar",
      price: 69000,
      originalPrice: 120000,
      rating: 4.5,
      sold: 980,
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400",
      shop: "Nhà sách Alpha Books",
    },
    {
      id: "6",
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      price: 129000,
      originalPrice: 199000,
      rating: 4.9,
      sold: 1650,
      image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=400",
      shop: "Nhà sách Tri Thức",
    },
    {
      id: "7",
      title: "Atomic Habits",
      author: "James Clear",
      price: 89000,
      originalPrice: 149000,
      rating: 4.8,
      sold: 2800,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
      shop: "Nhà sách Văn Học",
    },
    {
      id: "8",
      title: "Bí Mật Của May Mắn",
      author: "Richard Wiseman",
      price: 49000,
      originalPrice: 95000,
      rating: 4.4,
      sold: 750,
      image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=400",
      shop: "Nhà sách First News",
    },
  ];

  const trendingBooks = [
    {
      id: "9",
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: 149000,
      originalPrice: 189000,
      rating: 4.9,
      sold: 3200,
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400",
      shop: "Nhà sách Kinh Tế",
    },
    {
      id: "10",
      title: "Deep Work",
      author: "Cal Newport",
      price: 109000,
      originalPrice: 139000,
      rating: 4.7,
      sold: 1900,
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400",
      shop: "Nhà sách Alpha Books",
    },
    {
      id: "11",
      title: "Educated",
      author: "Tara Westover",
      price: 129000,
      rating: 4.8,
      sold: 1450,
      image: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=400",
      shop: "Nhà sách Văn Học",
    },
    {
      id: "12",
      title: "Becoming",
      author: "Michelle Obama",
      price: 169000,
      originalPrice: 219000,
      rating: 4.9,
      sold: 2650,
      image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400",
      shop: "Nhà sách First News",
    },
  ];

  const recommendedShops = [
    {
      id: "nha-sach-van-hoc",
      name: "Nhà sách Văn Học",
      rating: 4.8,
      productCount: 156,
      followers: 3456,
      coverImage:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
    },
    {
      id: "nha-sach-tri-thuc",
      name: "Nhà sách Tri Thức",
      rating: 4.9,
      productCount: 234,
      followers: 5234,
      coverImage:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
    },
    {
      id: "nha-sach-phuong-nam",
      name: "Nhà sách Phương Nam",
      rating: 4.7,
      productCount: 189,
      followers: 4123,
      coverImage:
        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400",
    },
    {
      id: "nha-sach-kim-dong",
      name: "Nhà sách Kim Đồng",
      rating: 4.6,
      productCount: 298,
      followers: 6789,
      coverImage:
        "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400",
    },
  ];

  const benefits = [
    {
      icon: Truck,
      title: "Giao hàng toàn quốc",
      description: "Miễn phí vận chuyển đơn từ 150.000₫",
    },
    {
      icon: Shield,
      title: "Thanh toán an toàn",
      description: "Bảo mật thông tin 100%",
    },
    {
      icon: RotateCcw,
      title: "Đổi trả dễ dàng",
      description: "Trong vòng 7 ngày",
    },
    {
      icon: HeadphonesIcon,
      title: "Hỗ trợ 24/7",
      description: "Luôn sẵn sàng tư vấn",
    },
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#fff7ed] via-white to-[#fef3c7] py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block px-4 py-2 bg-[#fcd34d] rounded-full mb-4">
                <span className="text-sm font-bold text-[#0f172a]">
                  KHUYẾN MÃI ĐẶC BIỆT
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-[#0f172a] mb-4 leading-tight">
                Tri thức là kho báu vô giá
              </h1>
              <p className="text-base md:text-lg text-[#475569] mb-6 leading-relaxed">
                Giảm đến 50% cho hàng ngàn đầu sách bestseller. Nâng cao kiến
                thức, thay đổi cuộc sống.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/san-pham"
                  className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-[#0f172a] text-white rounded-full hover:bg-[#334155] transition-colors"
                >
                  Mua ngay
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/san-pham"
                  className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 border-2 border-[#0f172a] text-[#0f172a] rounded-full hover:bg-[#fff7ed] transition-colors"
                >
                  Khám phá thêm
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#fcd34d] rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#fde68a] rounded-full opacity-20 blur-3xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=600&fit=crop"
                  alt="Hero"
                  className="relative w-full rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Categories */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-6 md:mb-8">
            Danh mục nổi bật
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
            {categories.map((category) => (
              <CategoryChip
                key={category.name}
                name={category.name}
                icon={category.icon}
                link={category.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Flash Sale */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-[#fef3c7] to-[#fff7ed]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 md:mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#fcd34d] rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#0f172a]" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a]">
                  Flash Sale
                </h2>
                <p className="text-sm text-[#64748b]">Kết thúc sau:</p>
              </div>
            </div>
            <FlashSaleTimer />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6">
            {flashSaleBooks.map((book) => (
              <ProductCard key={book.id} {...book} />
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/san-pham"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f172a] text-white rounded-full hover:bg-[#334155] transition-colors"
            >
              Xem tất cả
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a]">
              Sách nổi bật
            </h2>
            <Link
              to="/san-pham"
              className="flex items-center gap-2 text-[#0f172a] hover:text-[#334155] transition-colors"
            >
              <span className="hidden sm:inline">Xem tất cả</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featuredBooks.map((book) => (
              <ProductCard key={book.id} {...book} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-[#0f172a] to-[#334155] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#fcd34d] rounded-full opacity-10 blur-3xl"></div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Đăng ký thành viên VIP
              </h2>
              <p className="text-base md:text-lg text-gray-300 mb-6">
                Nhận ưu đãi độc quyền, miễn phí vận chuyển và tích điểm đổi quà
                hấp dẫn
              </p>
              <Link
                to="/dang-ky"
                className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-[#fcd34d] text-[#0f172a] rounded-full hover:bg-[#fde68a] transition-colors font-bold"
              >
                Đăng ký ngay
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#fcd34d] rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#0f172a]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a]">
                Xu hướng
              </h2>
            </div>
            <Link
              to="/san-pham"
              className="flex items-center gap-2 text-[#0f172a] hover:text-[#334155] transition-colors"
            >
              <span className="hidden sm:inline">Xem tất cả</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {trendingBooks.map((book) => (
              <ProductCard key={book.id} {...book} />
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Shops */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a]">
              Cửa hàng đề xuất
            </h2>
            <Link
              to="/san-pham"
              className="flex items-center gap-2 text-[#0f172a] hover:text-[#334155] transition-colors"
            >
              <span className="hidden sm:inline">Xem tất cả</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {recommendedShops.map((shop) => (
              <ShopCard key={shop.id} {...shop} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits / Trust Section */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-[#fff7ed] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-8 md:mb-12 text-center">
            Tại sao chọn Bookora?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-[#e2e8f0] hover:shadow-lg transition-all text-center"
                >
                  <div className="w-16 h-16 bg-[#fcd34d] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#0f172a]" />
                  </div>
                  <h3 className="font-bold text-[#0f172a] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#64748b]">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
