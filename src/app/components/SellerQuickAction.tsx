import { LucideIcon } from "lucide-react";
import { Link } from "../router/Router";

interface SellerQuickActionProps {
  to: string;
  icon: LucideIcon;
  label: string;
  badge?: string;
}

export function SellerQuickAction({
  to,
  icon: Icon,
  label,
  badge,
}: SellerQuickActionProps) {
  return (
    <Link
      to={to}
      className="relative flex flex-col items-center gap-3 p-4 border border-[#e2e8f0] rounded-xl hover:border-[#fcd34d] hover:bg-[#fff7ed] transition-all group"
    >
      {badge && (
        <span className="absolute -top-2 -right-2 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
          {badge}
        </span>
      )}
      <div className="w-12 h-12 bg-[#fff7ed] group-hover:bg-[#fcd34d] rounded-full flex items-center justify-center transition-colors">
        <Icon className="w-6 h-6 text-[#0f172a]" />
      </div>
      <span className="text-sm font-medium text-[#0f172a] text-center">
        {label}
      </span>
    </Link>
  );
}
