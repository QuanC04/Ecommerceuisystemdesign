import { Link } from "../router/Router";
import { LucideIcon } from "lucide-react";

interface CategoryChipProps {
  name: string;
  icon: LucideIcon;
  link: string;
}

export function CategoryChip({ name, icon: Icon, link }: CategoryChipProps) {
  return (
    <Link
      to={link}
      className="flex flex-col items-center gap-3 p-4 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#fcd34d] hover:shadow-md transition-all group"
    >
      <div className="w-14 h-14 bg-[#fff7ed] rounded-full flex items-center justify-center group-hover:bg-[#fcd34d] transition-colors">
        <Icon className="w-7 h-7 text-[#0f172a]" />
      </div>
      <span className="text-sm font-medium text-[#0f172a] text-center">
        {name}
      </span>
    </Link>
  );
}
