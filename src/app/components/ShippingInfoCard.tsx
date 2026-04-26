import { Truck, Package, MapPin } from "lucide-react";

interface ShippingOption {
  type: string;
  price: number;
  estimatedDays: string;
}

interface ShippingInfoCardProps {
  options: ShippingOption[];
}

export function ShippingInfoCard({ options }: ShippingInfoCardProps) {
  return (
    <div className="bg-[#fff7ed] rounded-2xl p-4 border border-[#e2e8f0]">
      <div className="flex items-center gap-2 mb-3">
        <Truck className="w-5 h-5 text-[#fcd34d]" />
        <h3 className="font-bold text-[#0f172a]">Thông tin vận chuyển</h3>
      </div>
      <div className="space-y-3">
        {options.map((option, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-3 bg-white rounded-lg"
          >
            <Package className="w-5 h-5 text-[#64748b] mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <p className="font-medium text-[#0f172a] text-sm">
                  {option.type}
                </p>
                <p className="font-bold text-[#0f172a]">
                  {option.price === 0
                    ? "Miễn phí"
                    : `${option.price.toLocaleString("vi-VN")}₫`}
                </p>
              </div>
              <p className="text-xs text-[#64748b]">{option.estimatedDays}</p>
            </div>
          </div>
        ))}
        <div className="flex items-start gap-2 pt-2 border-t border-[#e2e8f0]">
          <MapPin className="w-4 h-4 text-[#64748b] mt-0.5 flex-shrink-0" />
          <p className="text-sm text-[#64748b]">
            Giao đến: <span className="text-[#0f172a] font-medium">Quận 1, TP. HCM</span>
          </p>
        </div>
      </div>
    </div>
  );
}
