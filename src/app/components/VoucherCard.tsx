import { Percent, Copy, Check } from "lucide-react";
import { useState } from "react";

interface VoucherCardProps {
  code: string;
  discount: string;
  description: string;
  minOrder?: number;
}

export function VoucherCard({
  code,
  discount,
  description,
  minOrder,
}: VoucherCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-3 p-3 border-2 border-dashed border-[#fcd34d] bg-[#fff7ed] rounded-xl">
      <div className="w-10 h-10 bg-[#fcd34d] rounded-lg flex items-center justify-center flex-shrink-0">
        <Percent className="w-5 h-5 text-[#0f172a]" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-[#0f172a] text-sm">{discount}</p>
        <p className="text-xs text-[#64748b] truncate">{description}</p>
        {minOrder && (
          <p className="text-xs text-[#64748b]">
            Đơn tối thiểu {minOrder.toLocaleString("vi-VN")}₫
          </p>
        )}
      </div>
      <button
        onClick={handleCopy}
        className="px-3 py-2 bg-white border border-[#e2e8f0] rounded-lg hover:bg-[#fcd34d] transition-colors flex items-center gap-2 text-sm font-medium flex-shrink-0"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" />
            <span>Đã sao</span>
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
            <span>{code}</span>
          </>
        )}
      </button>
    </div>
  );
}
