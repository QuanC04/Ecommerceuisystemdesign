import { ProductCard } from "../components/ProductCard";
import { ChevronRight, BookOpen, TrendingUp, Award } from "lucide-react";
import { Link } from "../router/Router";

export function HomePage() {
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

  const categories = [
    { name: "Văn học", icon: BookOpen, count: 2500 },
    { name: "Kinh tế", icon: TrendingUp, count: 1800 },
    { name: "Kỹ năng sống", icon: Award, count: 1200 },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-[#fff7ed] to-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6 leading-tight">
                Khám phá kho tàng tri thức cùng Bookora
              </h1>
              <p className="text-lg text-[#64748b] mb-8 leading-relaxed">
                Nền tảng sách trực tuyến hàng đầu Việt Nam. Hàng ngàn đầu sách
                từ các nhà xuất bản uy tín, giao hàng toàn quốc.
              </p>
              <Link
                to="/san-pham"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0f172a] text-white rounded-full hover:bg-[#334155] transition-colors"
              >
                Khám phá ngay
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400"
                  alt="Book"
                  className="w-full rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400"
                  alt="Book"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400"
                  alt="Book"
                  className="w-full rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1589998059171-988d887df646?w=400"
                  alt="Book"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-8">
            Danh mục phổ biến
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.name}
                  to="/san-pham"
                  className="bg-[#fff7ed] rounded-2xl p-6 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#fcd34d] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[#0f172a]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0f172a]">
                        {category.name}
                      </h3>
                      <p className="text-sm text-[#64748b]">
                        {category.count} sản phẩm
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[#0f172a]">Sách nổi bật</h2>
            <Link
              to="/san-pham"
              className="flex items-center gap-2 text-[#0f172a] hover:text-[#334155]"
            >
              Xem tất cả
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book) => (
              <ProductCard key={book.id} {...book} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-8">
            Tại sao chọn Bookora?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#fcd34d] rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-[#0f172a]" />
              </div>
              <h3 className="font-bold text-[#0f172a] mb-2">
                Đa dạng sản phẩm
              </h3>
              <p className="text-[#64748b]">
                Hàng ngàn đầu sách từ nhiều thể loại khác nhau
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#fcd34d] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#0f172a]" />
              </div>
              <h3 className="font-bold text-[#0f172a] mb-2">Chất lượng đảm bảo</h3>
              <p className="text-[#64748b]">
                Sản phẩm chính hãng, kiểm duyệt kỹ lưỡng
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#fcd34d] rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-[#0f172a]" />
              </div>
              <h3 className="font-bold text-[#0f172a] mb-2">
                Giao hàng nhanh chóng
              </h3>
              <p className="text-[#64748b]">
                Vận chuyển toàn quốc, giao hàng trong 2-3 ngày
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
