import { ProductCard } from "../components/ProductCard";
import { Filter, ChevronDown } from "lucide-react";
import { useState } from "react";

export function ProductListingPage() {
  const [showFilters, setShowFilters] = useState(false);

  const products = [
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
    {
      id: "5",
      title: "Nghệ Thuật Bán Hàng",
      author: "Zig Ziglar",
      price: 95000,
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
      price: 159000,
      originalPrice: 199000,
      rating: 4.9,
      sold: 1650,
      image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=400",
      shop: "Nhà sách Tri Thức",
    },
    {
      id: "7",
      title: "Bí Mật Của May Mắn",
      author: "Richard Wiseman",
      price: 72000,
      rating: 4.4,
      sold: 750,
      image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=400",
      shop: "Nhà sách First News",
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

  const categories = [
    "Văn học",
    "Kinh tế",
    "Kỹ năng sống",
    "Thiếu nhi",
    "Tâm lý",
    "Lịch sử",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#0f172a] mb-2">
          Khám phá sách
        </h1>
        <p className="text-[#64748b]">{products.length} sản phẩm</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="md:col-span-1">
          <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-[#0f172a]">Bộ lọc</h3>
              <button
                className="md:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="w-5 h-5" />
              </button>
            </div>

            <div
              className={`${showFilters ? "block" : "hidden"} md:block space-y-6`}
            >
              <div>
                <h4 className="font-medium text-[#0f172a] mb-3">Danh mục</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label
                      key={category}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-[#cbd5e1] text-[#fcd34d] focus:ring-[#fcd34d]"
                      />
                      <span className="text-sm text-[#64748b]">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#e2e8f0] pt-6">
                <h4 className="font-medium text-[#0f172a] mb-3">Khoảng giá</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      placeholder="Từ"
                      className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
                    />
                    <span className="text-[#64748b]">-</span>
                    <input
                      type="number"
                      placeholder="Đến"
                      className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
                    />
                  </div>
                  <button className="w-full py-2 bg-[#0f172a] text-white rounded-lg hover:bg-[#334155]">
                    Áp dụng
                  </button>
                </div>
              </div>

              <div className="border-t border-[#e2e8f0] pt-6">
                <h4 className="font-medium text-[#0f172a] mb-3">Đánh giá</h4>
                <div className="space-y-2">
                  {[5, 4, 3].map((rating) => (
                    <label
                      key={rating}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-[#cbd5e1] text-[#fcd34d] focus:ring-[#fcd34d]"
                      />
                      <span className="text-sm text-[#64748b]">
                        {rating} sao trở lên
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        <div className="md:col-span-3">
          <div className="bg-white rounded-2xl p-4 mb-6 border border-[#e2e8f0]">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <span className="text-[#64748b]">Sắp xếp theo:</span>
              <div className="flex gap-2 flex-wrap">
                <button className="px-4 py-2 bg-[#0f172a] text-white rounded-full">
                  Phổ biến
                </button>
                <button className="px-4 py-2 border border-[#e2e8f0] rounded-full hover:bg-[#fff7ed]">
                  Mới nhất
                </button>
                <button className="px-4 py-2 border border-[#e2e8f0] rounded-full hover:bg-[#fff7ed]">
                  Bán chạy
                </button>
                <button className="px-4 py-2 border border-[#e2e8f0] rounded-full hover:bg-[#fff7ed] flex items-center gap-2">
                  Giá
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            <button className="px-4 py-2 border border-[#e2e8f0] rounded-lg hover:bg-white">
              Trước
            </button>
            <button className="px-4 py-2 bg-[#0f172a] text-white rounded-lg">
              1
            </button>
            <button className="px-4 py-2 border border-[#e2e8f0] rounded-lg hover:bg-white">
              2
            </button>
            <button className="px-4 py-2 border border-[#e2e8f0] rounded-lg hover:bg-white">
              3
            </button>
            <button className="px-4 py-2 border border-[#e2e8f0] rounded-lg hover:bg-white">
              Sau
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
