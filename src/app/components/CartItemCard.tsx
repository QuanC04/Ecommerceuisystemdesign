import { Trash2, Plus, Minus } from "lucide-react";
import { Link } from "../router/Router";

interface CartItemCardProps {
  id: string;
  title: string;
  author: string;
  variant?: string;
  price: number;
  quantity: number;
  image: string;
  shop: string;
  selected: boolean;
  onSelect: (id: string) => void;
  onQuantityChange: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export function CartItemCard({
  id,
  title,
  author,
  variant,
  price,
  quantity,
  image,
  shop,
  selected,
  onSelect,
  onQuantityChange,
  onRemove,
}: CartItemCardProps) {
  return (
    <div className="flex gap-4 p-4 bg-white rounded-xl border border-[#e2e8f0] hover:border-[#fcd34d] transition-colors">
      <input
        type="checkbox"
        checked={selected}
        onChange={() => onSelect(id)}
        className="w-5 h-5 mt-1 rounded border-[#cbd5e1] text-[#fcd34d] focus:ring-[#fcd34d] flex-shrink-0"
      />
      <Link
        to={`/san-pham/${id}`}
        className="w-20 h-24 md:w-24 md:h-32 bg-[#fff7ed] rounded-lg overflow-hidden flex-shrink-0"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform"
        />
      </Link>
      <div className="flex-1 min-w-0">
        <Link
          to={`/san-pham/${id}`}
          className="font-bold text-[#0f172a] line-clamp-2 hover:text-[#334155] mb-1"
        >
          {title}
        </Link>
        <p className="text-sm text-[#64748b] mb-1">{author}</p>
        {variant && (
          <p className="text-xs text-[#64748b] mb-2">Phân loại: {variant}</p>
        )}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-3">
          <p className="text-lg font-bold text-[#0f172a]">
            {price.toLocaleString("vi-VN")}₫
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center border border-[#e2e8f0] rounded-lg overflow-hidden">
              <button
                onClick={() => onQuantityChange(id, -1)}
                disabled={quantity <= 1}
                className="p-2 hover:bg-[#f1f5f9] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Minus className="w-4 h-4 text-[#0f172a]" />
              </button>
              <span className="px-4 py-2 min-w-[50px] text-center font-medium border-x border-[#e2e8f0]">
                {quantity}
              </span>
              <button
                onClick={() => onQuantityChange(id, 1)}
                className="p-2 hover:bg-[#f1f5f9] transition-colors"
              >
                <Plus className="w-4 h-4 text-[#0f172a]" />
              </button>
            </div>
            <button
              onClick={() => onRemove(id)}
              className="text-[#64748b] hover:text-[#dc2626] transition-colors"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
        <p className="text-sm text-[#64748b] mt-2 hidden sm:block">
          Tổng:{" "}
          <span className="font-bold text-[#0f172a]">
            {(price * quantity).toLocaleString("vi-VN")}₫
          </span>
        </p>
      </div>
      <div className="sm:hidden text-right">
        <p className="text-sm text-[#64748b]">Tổng</p>
        <p className="font-bold text-[#0f172a]">
          {(price * quantity).toLocaleString("vi-VN")}₫
        </p>
      </div>
    </div>
  );
}
