import { Star, ThumbsUp } from "lucide-react";
import { useState } from "react";

interface ReviewCardProps {
  userName: string;
  rating: number;
  date: string;
  comment: string;
  variant?: string;
  verified: boolean;
  helpful: number;
}

export function ReviewCard({
  userName,
  rating,
  date,
  comment,
  variant,
  verified,
  helpful,
}: ReviewCardProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(helpful);

  const handleLike = () => {
    if (!liked) {
      setLikeCount((prev) => prev + 1);
      setLiked(true);
    }
  };

  return (
    <div className="border-b border-[#e2e8f0] last:border-0 pb-6 last:pb-0">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-[#fcd34d] rounded-full flex items-center justify-center flex-shrink-0">
          <span className="font-bold text-[#0f172a]">
            {userName.charAt(0).toUpperCase()}
          </span>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="font-medium text-[#0f172a]">{userName}</p>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < rating
                          ? "fill-[#fcd34d] text-[#fcd34d]"
                          : "text-[#cbd5e1]"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-[#64748b]">{date}</span>
              </div>
            </div>
            {verified && (
              <span className="px-2 py-1 bg-[#fff7ed] border border-[#fcd34d] text-[#0f172a] text-xs font-medium rounded-full">
                Đã mua hàng
              </span>
            )}
          </div>
          {variant && (
            <p className="text-sm text-[#64748b] mb-2">Phân loại: {variant}</p>
          )}
          <p className="text-[#475569] leading-relaxed mb-3">{comment}</p>
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors ${
              liked
                ? "bg-[#fff7ed] text-[#0f172a]"
                : "text-[#64748b] hover:bg-[#f1f5f9]"
            }`}
          >
            <ThumbsUp
              className={`w-4 h-4 ${liked ? "fill-[#fcd34d] text-[#fcd34d]" : ""}`}
            />
            <span>Hữu ích ({likeCount})</span>
          </button>
        </div>
      </div>
    </div>
  );
}
