import { Star, Package } from "lucide-react";
import { Link } from "../router/Router";

interface ShopCardProps {
  id: string;
  name: string;
  rating: number;
  productCount: number;
  followers: number;
  coverImage: string;
  logo?: string;
}

export function ShopCard({
  id,
  name,
  rating,
  productCount,
  followers,
  coverImage,
  logo,
}: ShopCardProps) {
  return (
    <Link
      to={`/nguoi-ban/cua-hang/${id}`}
      className="bg-white rounded-2xl overflow-hidden border border-[#e2e8f0] hover:shadow-lg transition-all group"
    >
      <div className="h-32 overflow-hidden bg-gradient-to-br from-[#fcd34d] to-[#fde68a]">
        <img
          src={coverImage}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 pt-0 -mt-8">
        <div className="w-16 h-16 bg-white border-4 border-white rounded-2xl shadow-md flex items-center justify-center mb-3">
          {logo ? (
            <img src={logo} alt={name} className="w-full h-full rounded-xl" />
          ) : (
            <span className="text-xl font-bold text-[#0f172a]">
              {name.charAt(0)}
            </span>
          )}
        </div>
        <h3 className="font-bold text-[#0f172a] mb-2 line-clamp-1">{name}</h3>
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 fill-[#fcd34d] text-[#fcd34d]" />
          <span className="text-sm font-medium text-[#0f172a]">{rating}</span>
          <span className="text-sm text-[#64748b]">
            ({followers.toLocaleString("vi-VN")} theo dõi)
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#64748b]">
          <Package className="w-4 h-4" />
          <span>{productCount} sản phẩm</span>
        </div>
      </div>
    </Link>
  );
}
