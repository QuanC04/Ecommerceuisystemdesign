import { Star, ShoppingCart, Heart, Share2, Truck, Shield } from "lucide-react";
import { useState } from "react";
import { ProductCard } from "../components/ProductCard";

export function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600",
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600",
    "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=600",
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
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <div className="bg-white rounded-2xl overflow-hidden border border-[#e2e8f0] mb-4">
            <div className="aspect-[3/4] overflow-hidden bg-[#fff7ed]">
              <img
                src={images[selectedImage]}
                alt="Nhà Giả Kim"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`bg-white rounded-xl overflow-hidden border-2 ${
                  selectedImage === index
                    ? "border-[#fcd34d]"
                    : "border-[#e2e8f0]"
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

        <div>
          <h1 className="text-3xl font-bold text-[#0f172a] mb-4">
            Nhà Giả Kim
          </h1>
          <p className="text-lg text-[#64748b] mb-4">Paulo Coelho</p>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-5 h-5 fill-[#fcd34d] text-[#fcd34d]"
                />
              ))}
            </div>
            <span className="text-[#0f172a] font-medium">4.8</span>
            <span className="text-[#64748b]">(1,250 đánh giá)</span>
            <span className="text-[#64748b]">| 1,250 đã bán</span>
          </div>

          <div className="bg-[#fff7ed] rounded-2xl p-6 mb-6">
            <div className="flex items-end gap-4 mb-2">
              <span className="text-4xl font-bold text-[#0f172a]">79.000₫</span>
              <span className="text-xl text-[#64748b] line-through">
                99.000₫
              </span>
              <span className="px-3 py-1 bg-[#fcd34d] text-[#0f172a] font-bold rounded-full">
                -20%
              </span>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-[#64748b] mb-2">Cửa hàng:</p>
            <p className="font-medium text-[#0f172a]">Nhà sách Văn Học</p>
          </div>

          <div className="border-t border-[#e2e8f0] pt-6 mb-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[#0f172a] font-medium">Số lượng:</span>
              <div className="flex items-center border border-[#e2e8f0] rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-[#f1f5f9]"
                >
                  -
                </button>
                <span className="px-6 py-2 border-x border-[#e2e8f0]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-[#f1f5f9]"
                >
                  +
                </button>
              </div>
              <span className="text-[#64748b]">1,234 sản phẩm có sẵn</span>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 py-4 bg-[#0f172a] text-white rounded-full hover:bg-[#334155] transition-colors flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                <span>Thêm vào giỏ</span>
              </button>
              <button className="px-6 py-4 border-2 border-[#0f172a] rounded-full hover:bg-[#fff7ed] transition-colors">
                <Heart className="w-5 h-5 text-[#0f172a]" />
              </button>
              <button className="px-6 py-4 border-2 border-[#0f172a] rounded-full hover:bg-[#fff7ed] transition-colors">
                <Share2 className="w-5 h-5 text-[#0f172a]" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#e2e8f0]">
              <Truck className="w-6 h-6 text-[#fcd34d]" />
              <div>
                <p className="font-medium text-[#0f172a]">Giao hàng nhanh</p>
                <p className="text-sm text-[#64748b]">2-3 ngày</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#e2e8f0]">
              <Shield className="w-6 h-6 text-[#fcd34d]" />
              <div>
                <p className="font-medium text-[#0f172a]">Đảm bảo chính hãng</p>
                <p className="text-sm text-[#64748b]">100% authentic</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 border border-[#e2e8f0] mb-12">
        <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
          Chi tiết sản phẩm
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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
          <h3 className="font-bold text-[#0f172a] mb-3">Mô tả sản phẩm</h3>
          <p className="text-[#64748b] leading-relaxed">
            Nhà Giả Kim là một câu chuyện ngụ ngôn về Santiago, một chàng chăn
            cừu trẻ người Tây Ban Nha, khao khát đi du lịch để tìm kiếm kho báu
            trần thế. Trong hành trình đó, cậu đã học được nhiều bài học về sự
            khôn ngoan của trái tim, về tầm quan trọng của việc lắng nghe trái
            tim mình và về việc đọc những điềm báo trên đường đời. Cuốn sách đã
            truyền cảm hứng cho hàng triệu độc giả trên toàn thế giới.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
          Sản phẩm tương tự
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedBooks.map((book) => (
            <ProductCard key={book.id} {...book} />
          ))}
        </div>
      </div>
    </div>
  );
}
