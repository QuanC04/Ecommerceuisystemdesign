import { Star } from "lucide-react";

interface RatingsSummaryProps {
  average: number;
  total: number;
  breakdown: { stars: number; count: number; percentage: number }[];
}

export function RatingsSummary({
  average,
  total,
  breakdown,
}: RatingsSummaryProps) {
  return (
    <div className="bg-[#fff7ed] rounded-2xl p-6 border border-[#e2e8f0]">
      <div className="flex items-start gap-6 mb-6">
        <div className="text-center">
          <div className="text-4xl font-bold text-[#0f172a] mb-2">
            {average.toFixed(1)}
          </div>
          <div className="flex items-center gap-1 justify-center mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(average)
                    ? "fill-[#fcd34d] text-[#fcd34d]"
                    : "text-[#cbd5e1]"
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-[#64748b]">
            {total.toLocaleString("vi-VN")} đánh giá
          </p>
        </div>
        <div className="flex-1 space-y-2">
          {breakdown.map((item) => (
            <div key={item.stars} className="flex items-center gap-3">
              <div className="flex items-center gap-1 w-16">
                <span className="text-sm text-[#64748b]">{item.stars}</span>
                <Star className="w-3 h-3 fill-[#fcd34d] text-[#fcd34d]" />
              </div>
              <div className="flex-1 h-2 bg-[#e2e8f0] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#fcd34d]"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
              <span className="text-sm text-[#64748b] w-12 text-right">
                {item.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
