import { Tag, Check } from "lucide-react";
import { useState } from "react";

interface VoucherInputProps {
  onApply?: (code: string) => void;
}

export function VoucherInput({ onApply }: VoucherInputProps) {
  const [code, setCode] = useState("");
  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    if (code.trim()) {
      onApply?.(code);
      setApplied(true);
      setTimeout(() => setApplied(false), 2000);
    }
  };

  return (
    <div className="bg-[#fff7ed] rounded-xl p-4 border border-[#fcd34d]">
      <div className="flex items-center gap-2 mb-3">
        <Tag className="w-5 h-5 text-[#fcd34d]" />
        <h3 className="font-bold text-[#0f172a]">Mã giảm giá</h3>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          placeholder="Nhập mã giảm giá"
          className="flex-1 px-4 py-3 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fcd34d] bg-white"
        />
        <button
          onClick={handleApply}
          disabled={!code.trim()}
          className="px-6 py-3 bg-[#0f172a] text-white rounded-lg hover:bg-[#334155] disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium flex items-center gap-2"
        >
          {applied ? (
            <>
              <Check className="w-5 h-5" />
              <span className="hidden sm:inline">Đã áp dụng</span>
            </>
          ) : (
            <span>Áp dụng</span>
          )}
        </button>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <span className="text-sm text-[#64748b]">Mã khuyến mãi:</span>
        {["BOOK15", "FREESHIP", "NEWUSER"].map((suggestedCode) => (
          <button
            key={suggestedCode}
            onClick={() => setCode(suggestedCode)}
            className="text-sm px-3 py-1 bg-white border border-[#e2e8f0] rounded-full hover:border-[#fcd34d] transition-colors"
          >
            {suggestedCode}
          </button>
        ))}
      </div>
    </div>
  );
}
