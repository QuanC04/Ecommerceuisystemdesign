import { CreditCard, Wallet, Banknote, Check } from "lucide-react";

interface PaymentMethod {
  id: string;
  name: string;
  description: string;
  icon: "card" | "wallet" | "cash";
}

interface PaymentMethodSelectorProps {
  methods: PaymentMethod[];
  selectedId: string;
  onSelect: (id: string) => void;
}

const iconMap = {
  card: CreditCard,
  wallet: Wallet,
  cash: Banknote,
};

export function PaymentMethodSelector({
  methods,
  selectedId,
  onSelect,
}: PaymentMethodSelectorProps) {
  return (
    <div className="space-y-3">
      {methods.map((method) => {
        const Icon = iconMap[method.icon];
        return (
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
              <Icon className="w-5 h-5 text-[#64748b] mt-0.5" />
              <div className="flex-1">
                <p className="font-bold text-[#0f172a] mb-1">{method.name}</p>
                <p className="text-sm text-[#64748b]">{method.description}</p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
