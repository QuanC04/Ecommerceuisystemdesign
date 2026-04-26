import { Check } from "lucide-react";

interface Variant {
  id: string;
  name: string;
  available: boolean;
}

interface VariantSelectorProps {
  label: string;
  variants: Variant[];
  selected: string;
  onSelect: (id: string) => void;
}

export function VariantSelector({
  label,
  variants,
  selected,
  onSelect,
}: VariantSelectorProps) {
  return (
    <div>
      <label className="block text-[#0f172a] font-medium mb-3">{label}</label>
      <div className="flex flex-wrap gap-2">
        {variants.map((variant) => (
          <button
            key={variant.id}
            onClick={() => variant.available && onSelect(variant.id)}
            disabled={!variant.available}
            className={`relative px-4 py-2 border-2 rounded-lg transition-all ${
              selected === variant.id
                ? "border-[#fcd34d] bg-[#fff7ed] font-medium"
                : variant.available
                  ? "border-[#e2e8f0] hover:border-[#fcd34d]"
                  : "border-[#e2e8f0] bg-[#f1f5f9] text-[#cbd5e1] cursor-not-allowed"
            }`}
          >
            <span className="text-sm">{variant.name}</span>
            {selected === variant.id && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#fcd34d] rounded-full flex items-center justify-center">
                <Check className="w-3 h-3 text-[#0f172a]" />
              </div>
            )}
            {!variant.available && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-0.5 bg-[#cbd5e1] rotate-[-20deg]"></div>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
