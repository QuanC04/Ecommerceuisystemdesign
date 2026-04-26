import { Star, MapPin, Clock, Package, Edit } from "lucide-react";
import { ProductCard } from "../components/ProductCard";

export function SellerStorePage() {
  const storeInfo = {
    name: "Nhà sách Văn Học",
    rating: 4.8,
    reviews: 1250,
    followers: 3456,
    products: 156,
    joined: "01/2024",
    response: "95%",
    address: "123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh",
  };

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
      shop: "Nhà sách Văn Học",
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
      shop: "Nhà sách Văn Học",
    },
    {
      id: "4",
      title: "Tuổi Trẻ Đáng Giá Bao Nhiêu",
      author: "Rosie Nguyễn",
      price: 85000,
      rating: 4.6,
      sold: 1800,
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
      shop: "Nhà sách Văn Học",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl overflow-hidden border border-[#e2e8f0]">
        <div className="h-48 bg-gradient-to-br from-[#fcd34d] to-[#fde68a]"></div>
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 -mt-16 bg-white border-4 border-white rounded-2xl shadow-lg flex items-center justify-center">
                <span className="text-3xl font-bold text-[#0f172a]">VH</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-[#0f172a] mb-2">
                  {storeInfo.name}
                </h1>
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-[#fcd34d] text-[#fcd34d]" />
                    <span className="font-medium text-[#0f172a]">
                      {storeInfo.rating}
                    </span>
                    <span className="text-[#64748b]">
                      ({storeInfo.reviews} đánh giá)
                    </span>
                  </div>
                  <span className="text-[#64748b]">
                    {storeInfo.followers} người theo dõi
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[#64748b]">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{storeInfo.address}</span>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 border-2 border-[#0f172a] text-[#0f172a] rounded-full hover:bg-[#fff7ed] transition-colors">
              <Edit className="w-5 h-5" />
              <span>Chỉnh sửa</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-6 border-t border-[#e2e8f0]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#fff7ed] rounded-full flex items-center justify-center">
                <Package className="w-6 h-6 text-[#fcd34d]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#0f172a]">
                  {storeInfo.products}
                </p>
                <p className="text-sm text-[#64748b]">Sản phẩm</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#fff7ed] rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#fcd34d]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#0f172a]">
                  {storeInfo.response}
                </p>
                <p className="text-sm text-[#64748b]">Tỷ lệ phản hồi</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#fff7ed] rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-[#fcd34d]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#0f172a]">
                  {storeInfo.rating}
                </p>
                <p className="text-sm text-[#64748b]">Đánh giá TB</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#fff7ed] rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#fcd34d]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#0f172a]">
                  {storeInfo.joined}
                </p>
                <p className="text-sm text-[#64748b]">Tham gia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
        <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
          Giới thiệu cửa hàng
        </h2>
        <p className="text-[#64748b] leading-relaxed mb-4">
          Nhà sách Văn Học là địa chỉ tin cậy cho những ai yêu thích sách. Với
          hơn 2 năm kinh nghiệm trong ngành xuất bản và phân phối sách, chúng
          tôi tự hào mang đến cho khách hàng những cuốn sách chất lượng từ các
          nhà xuất bản uy tín trong và ngoài nước.
        </p>
        <p className="text-[#64748b] leading-relaxed">
          Chúng tôi chuyên cung cấp các đầu sách thuộc nhiều thể loại: văn học,
          kinh tế, kỹ năng sống, thiếu nhi, và nhiều thể loại khác. Cam kết
          100% sách chính hãng, giá cả hợp lý, giao hàng nhanh chóng trên toàn
          quốc.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
          Sản phẩm của cửa hàng
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
        <h2 className="text-2xl font-bold text-[#0f172a] mb-6">Đánh giá</h2>
        <div className="space-y-4">
          {[
            {
              name: "Nguyễn Thị B",
              rating: 5,
              comment: "Sách đẹp, giao hàng nhanh. Rất hài lòng!",
              date: "20/04/2026",
            },
            {
              name: "Trần Văn C",
              rating: 4,
              comment: "Chất lượng tốt, giá cả hợp lý.",
              date: "18/04/2026",
            },
            {
              name: "Lê Thị D",
              rating: 5,
              comment: "Shop tư vấn nhiệt tình, sách đóng gói cẩn thận.",
              date: "15/04/2026",
            },
          ].map((review, index) => (
            <div
              key={index}
              className="border-b border-[#e2e8f0] last:border-0 pb-4 last:pb-0"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-[#fcd34d] rounded-full flex items-center justify-center">
                  <span className="font-bold text-[#0f172a]">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-[#0f172a]">{review.name}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#fcd34d] text-[#fcd34d]"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-[#64748b]">
                      {review.date}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-[#64748b] ml-13">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
