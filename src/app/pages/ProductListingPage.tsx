import { ProductCard } from "../components/ProductCard";
import { FilterChip } from "../components/FilterChip";
import { PriceRangeSlider } from "../components/PriceRangeSlider";
import {
  Filter,
  ChevronDown,
  X,
  Grid3x3,
  List,
  Home,
  ChevronRight,
  SlidersHorizontal,
  Star,
} from "lucide-react";
import { useState } from "react";
import { Link } from "../router/Router";

export function ProductListingPage() {
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [freeShipping, setFreeShipping] = useState(false);
  const [sortBy, setSortBy] = useState("popular");

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
    { id: "van-hoc", name: "Văn học", count: 2500 },
    { id: "kinh-te", name: "Kinh tế", count: 1800 },
    { id: "ky-nang", name: "Kỹ năng sống", count: 1200 },
    { id: "thieu-nhi", name: "Thiếu nhi", count: 980 },
    { id: "tam-ly", name: "Tâm lý", count: 750 },
    { id: "lich-su", name: "Lịch sử", count: 650 },
  ];

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleRating = (rating: number) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedRatings([]);
    setFreeShipping(false);
  };

  const activeFilterCount =
    selectedCategories.length + selectedRatings.length + (freeShipping ? 1 : 0);

  const FilterSidebar = () => (
    <div className="space-y-6">
      <div>
        <h4 className="font-bold text-[#0f172a] mb-3">Danh mục</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <label
              key={category.id}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.id)}
                onChange={() => toggleCategory(category.id)}
                className="w-4 h-4 rounded border-[#cbd5e1] text-[#fcd34d] focus:ring-[#fcd34d]"
              />
              <span className="text-sm text-[#64748b] group-hover:text-[#0f172a] flex-1">
                {category.name}
              </span>
              <span className="text-xs text-[#94a3b8]">({category.count})</span>
            </label>
          ))}
        </div>
      </div>

      <div className="border-t border-[#e2e8f0] pt-6">
        <h4 className="font-bold text-[#0f172a] mb-3">Khoảng giá</h4>
        <PriceRangeSlider min={0} max={500000} />
      </div>

      <div className="border-t border-[#e2e8f0] pt-6">
        <h4 className="font-bold text-[#0f172a] mb-3">Đánh giá</h4>
        <div className="space-y-2">
          {[5, 4, 3].map((rating) => (
            <label
              key={rating}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedRatings.includes(rating)}
                onChange={() => toggleRating(rating)}
                className="w-4 h-4 rounded border-[#cbd5e1] text-[#fcd34d] focus:ring-[#fcd34d]"
              />
              <div className="flex items-center gap-1">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-[#fcd34d] text-[#fcd34d]"
                  />
                ))}
                {Array.from({ length: 5 - rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-[#cbd5e1]" />
                ))}
              </div>
              <span className="text-sm text-[#64748b] group-hover:text-[#0f172a]">
                trở lên
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="border-t border-[#e2e8f0] pt-6">
        <h4 className="font-bold text-[#0f172a] mb-3">Giao hàng</h4>
        <label className="flex items-center gap-2 cursor-pointer group">
          <input
            type="checkbox"
            checked={freeShipping}
            onChange={(e) => setFreeShipping(e.target.checked)}
            className="w-4 h-4 rounded border-[#cbd5e1] text-[#fcd34d] focus:ring-[#fcd34d]"
          />
          <span className="text-sm text-[#64748b] group-hover:text-[#0f172a]">
            Miễn phí vận chuyển
          </span>
        </label>
      </div>

      {activeFilterCount > 0 && (
        <button
          onClick={clearAllFilters}
          className="w-full py-2 text-sm text-[#dc2626] hover:text-[#991b1b] font-medium"
        >
          Xóa tất cả bộ lọc
        </button>
      )}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[#64748b] mb-4">
        <Link to="/" className="hover:text-[#0f172a]">
          <Home className="w-4 h-4" />
        </Link>
        <ChevronRight className="w-4 h-4" />
        <Link to="/san-pham" className="hover:text-[#0f172a]">
          Sản phẩm
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-[#0f172a] font-medium">Tất cả</span>
      </nav>

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-2">
          Khám phá sách
        </h1>
        <p className="text-[#64748b]">
          Tìm thấy <span className="font-bold text-[#0f172a]">{products.length}</span> sản
          phẩm
        </p>
      </div>

      {/* Active Filters */}
      {activeFilterCount > 0 && (
        <div className="flex items-center gap-2 flex-wrap mb-4">
          <span className="text-sm text-[#64748b]">Đang lọc:</span>
          {selectedCategories.map((catId) => {
            const category = categories.find((c) => c.id === catId);
            return (
              <FilterChip
                key={catId}
                label={category?.name || ""}
                onRemove={() => toggleCategory(catId)}
              />
            );
          })}
          {selectedRatings.map((rating) => (
            <FilterChip
              key={rating}
              label={`${rating} sao trở lên`}
              onRemove={() => toggleRating(rating)}
            />
          ))}
          {freeShipping && (
            <FilterChip
              label="Miễn phí vận chuyển"
              onRemove={() => setFreeShipping(false)}
            />
          )}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Desktop Filters */}
        <aside className="hidden lg:block lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0] sticky top-24">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-[#0f172a] flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5" />
                Bộ lọc
              </h3>
              {activeFilterCount > 0 && (
                <span className="px-2 py-1 bg-[#fcd34d] text-[#0f172a] text-xs font-bold rounded-full">
                  {activeFilterCount}
                </span>
              )}
            </div>
            <FilterSidebar />
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Toolbar */}
          <div className="bg-white rounded-2xl p-4 mb-6 border border-[#e2e8f0]">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              {/* Mobile Filter Button */}
              <button
                onClick={() => setShowFilters(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 border border-[#e2e8f0] rounded-lg hover:bg-[#fff7ed]"
              >
                <Filter className="w-4 h-4" />
                <span className="text-sm font-medium">Lọc</span>
                {activeFilterCount > 0 && (
                  <span className="px-2 py-0.5 bg-[#fcd34d] text-[#0f172a] text-xs font-bold rounded-full">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              {/* Sort Options */}
              <div className="flex items-center gap-2 flex-wrap flex-1 justify-end">
                <span className="text-sm text-[#64748b] hidden md:inline">
                  Sắp xếp:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fcd34d] text-sm bg-white"
                >
                  <option value="popular">Phổ biến</option>
                  <option value="newest">Mới nhất</option>
                  <option value="bestseller">Bán chạy</option>
                  <option value="price-asc">Giá thấp đến cao</option>
                  <option value="price-desc">Giá cao đến thấp</option>
                  <option value="rating">Đánh giá cao</option>
                </select>

                {/* View Toggle */}
                <div className="hidden md:flex items-center gap-1 border border-[#e2e8f0] rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded ${
                      viewMode === "grid"
                        ? "bg-[#0f172a] text-white"
                        : "text-[#64748b] hover:bg-[#f1f5f9]"
                    }`}
                  >
                    <Grid3x3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded ${
                      viewMode === "list"
                        ? "bg-[#0f172a] text-white"
                        : "text-[#64748b] hover:bg-[#f1f5f9]"
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {products.length > 0 ? (
            <>
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
                    : "space-y-4"
                }
              >
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                <p className="text-sm text-[#64748b]">
                  Hiển thị 1-{products.length} trong {products.length} sản phẩm
                </p>
                <div className="flex gap-2">
                  <button className="px-4 py-2 border border-[#e2e8f0] rounded-lg hover:bg-white text-sm font-medium text-[#64748b] hover:text-[#0f172a]">
                    Trước
                  </button>
                  <button className="px-4 py-2 bg-[#0f172a] text-white rounded-lg text-sm font-medium">
                    1
                  </button>
                  <button className="px-4 py-2 border border-[#e2e8f0] rounded-lg hover:bg-white text-sm font-medium text-[#64748b] hover:text-[#0f172a]">
                    2
                  </button>
                  <button className="px-4 py-2 border border-[#e2e8f0] rounded-lg hover:bg-white text-sm font-medium text-[#64748b] hover:text-[#0f172a]">
                    3
                  </button>
                  <button className="px-4 py-2 border border-[#e2e8f0] rounded-lg hover:bg-white text-sm font-medium text-[#64748b] hover:text-[#0f172a]">
                    Sau
                  </button>
                </div>
              </div>
            </>
          ) : (
            /* Empty State */
            <div className="bg-white rounded-2xl p-12 text-center border border-[#e2e8f0]">
              <div className="w-24 h-24 bg-[#fff7ed] rounded-full flex items-center justify-center mx-auto mb-6">
                <Filter className="w-12 h-12 text-[#64748b]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">
                Không tìm thấy sản phẩm
              </h3>
              <p className="text-[#64748b] mb-6">
                Không có sản phẩm nào phù hợp với bộ lọc của bạn. Hãy thử điều
                chỉnh hoặc xóa bộ lọc.
              </p>
              <button
                onClick={clearAllFilters}
                className="px-6 py-3 bg-[#0f172a] text-white rounded-full hover:bg-[#334155]"
              >
                Xóa tất cả bộ lọc
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowFilters(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[#fff7ed] shadow-xl overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-[#e2e8f0] p-4 flex items-center justify-between z-10">
              <h3 className="font-bold text-[#0f172a] flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5" />
                Bộ lọc
                {activeFilterCount > 0 && (
                  <span className="px-2 py-1 bg-[#fcd34d] text-[#0f172a] text-xs font-bold rounded-full">
                    {activeFilterCount}
                  </span>
                )}
              </h3>
              <button
                onClick={() => setShowFilters(false)}
                className="p-2 hover:bg-[#f1f5f9] rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4">
              <FilterSidebar />
            </div>
            <div className="sticky bottom-0 bg-white border-t border-[#e2e8f0] p-4 flex gap-3">
              <button
                onClick={clearAllFilters}
                className="flex-1 py-3 border-2 border-[#e2e8f0] rounded-full hover:bg-[#f1f5f9] font-medium"
              >
                Xóa bộ lọc
              </button>
              <button
                onClick={() => setShowFilters(false)}
                className="flex-1 py-3 bg-[#0f172a] text-white rounded-full hover:bg-[#334155] font-medium"
              >
                Xem {products.length} sản phẩm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
