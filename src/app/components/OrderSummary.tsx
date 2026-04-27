import { ShoppingBag, Truck, Tag, Receipt } from "lucide-react";

interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  itemCount: number;
}

export function OrderSummary({
  subtotal,
  shipping,
  discount,
  total,
  itemCount,
}: OrderSummaryProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0] sticky top-24">
      <div className="flex items-center gap-2 mb-6">
        <Receipt className="w-5 h-5 text-[#fcd34d]" />
        <h3 className="font-bold text-[#0f172a] text-lg">Tóm tắt đơn hàng</h3>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#64748b]">
            <ShoppingBag className="w-4 h-4" />
            <span>Tạm tính ({itemCount} sản phẩm)</span>
          </div>
          <span className="font-medium text-[#0f172a]">
            {subtotal.toLocaleString("vi-VN")}₫
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#64748b]">
            <Truck className="w-4 h-4" />
            <span>Phí vận chuyển</span>
          </div>
          <span className="font-medium text-[#0f172a]">
            {shipping === 0
              ? "Miễn phí"
              : `${shipping.toLocaleString("vi-VN")}₫`}
          </span>
        </div>

        {discount > 0 && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#64748b]">
              <Tag className="w-4 h-4" />
              <span>Giảm giá</span>
            </div>
            <span className="font-medium text-[#dc2626]">
              -{discount.toLocaleString("vi-VN")}₫
            </span>
          </div>
        )}
      </div>

      <div className="border-t border-[#e2e8f0] pt-4 mb-6">
        <div className="flex items-center justify-between">
          <span className="font-bold text-[#0f172a] text-lg">Tổng cộng</span>
          <span className="text-2xl font-bold text-[#0f172a]">
            {total.toLocaleString("vi-VN")}₫
          </span>
        </div>
        {discount > 0 && (
          <p className="text-sm text-[#10b981] mt-2">
            Bạn đã tiết kiệm {discount.toLocaleString("vi-VN")}₫
          </p>
        )}
      </div>

      <div className="space-y-3">
        <button className="w-full py-4 bg-[#0f172a] text-white rounded-full hover:bg-[#334155] transition-colors font-bold text-lg">
          Tiến hành thanh toán
        </button>
        <p className="text-center text-sm text-[#64748b]">
          Miễn phí vận chuyển cho đơn từ 150.000₫
        </p>
      </div>
    </div>
  );
}
