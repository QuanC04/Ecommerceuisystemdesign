import { Link } from "../router/Router";
import { Star, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  rating: number;
  sold: number;
  image: string;
  shop: string;
}

export function ProductCard({
  id,
  title,
  author,
  price,
  originalPrice,
  rating,
  sold,
  image,
  shop,
}: ProductCardProps) {
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <Link
      to={`/san-pham/${id}`}
      className="bg-white rounded-2xl overflow-hidden border border-[#e2e8f0] hover:shadow-lg transition-all group"
    >
      <div className="aspect-[3/4] overflow-hidden bg-[#fff7ed]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-[#0f172a] line-clamp-2 mb-1 min-h-[3rem]">
          {title}
        </h3>
        <p className="text-sm text-[#64748b] mb-3">{author}</p>
        <div className="flex items-center gap-1 mb-3">
          <Star className="w-4 h-4 fill-[#fcd34d] text-[#fcd34d]" />
          <span className="text-sm font-medium text-[#0f172a]">{rating}</span>
          <span className="text-sm text-[#64748b]">({sold} đã bán)</span>
        </div>
        <div className="flex items-end gap-2 mb-3">
          <span className="text-xl font-bold text-[#0f172a]">
            {price.toLocaleString("vi-VN")}₫
          </span>
          {originalPrice && (
            <span className="text-sm text-[#64748b] line-through">
              {originalPrice.toLocaleString("vi-VN")}₫
            </span>
          )}
          {discount > 0 && (
            <span className="text-xs font-bold text-[#0f172a] bg-[#fcd34d] px-2 py-1 rounded-full">
              -{discount}%
            </span>
          )}
        </div>
        <p className="text-sm text-[#64748b] mb-3">{shop}</p>
        <button className="w-full py-3 bg-[#0f172a] text-white rounded-full hover:bg-[#334155] transition-colors flex items-center justify-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          <span>Thêm vào giỏ</span>
        </button>
      </div>
    </Link>
  );
}
