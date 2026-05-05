import { Truck, Clock, Check } from "lucide-react";

interface ShippingMethod {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedDays: string;
}

interface ShippingMethodSelectorProps {
  methods: ShippingMethod[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export function ShippingMethodSelector({
  methods,
  selectedId,
  onSelect,
}: ShippingMethodSelectorProps) {
  return (
    <div className="space-y-3">
      {methods.map((method) => (
        <button
          key={method.id}
          onClick={() => onSelect(method.id)}
          className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
            selectedId === method.id
              ? "border-[#fcd34d] bg-[#fff7ed]"
              : "border-[#e2e8f0] bg-white hover:border-[#fcd34d]"
          }`}
        >
          <div className="flex items-start gap-3">
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                selectedId === method.id
                  ? "border-[#fcd34d] bg-[#fcd34d]"
                  : "border-[#cbd5e1]"
              }`}
            >
              {selectedId === method.id && (
                <Check className="w-3 h-3 text-[#0f172a]" />
              )}
            </div>
            <Truck className="w-5 h-5 text-[#64748b] mt-0.5" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-[#0f172a]">{method.name}</span>
                <span className="font-bold text-[#0f172a]">
                  {method.price === 0
                    ? "Miễn phí"
                    : `${method.price.toLocaleString("vi-VN")}₫`}
                </span>
              </div>
              <p className="text-sm text-[#64748b] mb-1">
                {method.description}
              </p>
              <div className="flex items-center gap-1 text-xs text-[#64748b]">
                <Clock className="w-3 h-3" />
                <span>{method.estimatedDays}</span>
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
