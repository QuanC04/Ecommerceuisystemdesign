import { LucideIcon, ArrowUp, ArrowDown } from "lucide-react";

interface SellerKPICardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  color: "amber" | "blue" | "green" | "purple";
}

const colorClasses = {
  amber: "bg-[#fcd34d]",
  blue: "bg-blue-500",
  green: "bg-green-500",
  purple: "bg-purple-500",
};

export function SellerKPICard({
  icon: Icon,
  label,
  value,
  change,
  trend,
  color,
}: SellerKPICardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 ${colorClasses[color]} rounded-xl flex items-center justify-center`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div
          className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium ${
            trend === "up"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {trend === "up" ? (
            <ArrowUp className="w-4 h-4" />
          ) : (
            <ArrowDown className="w-4 h-4" />
          )}
          <span>{change}</span>
        </div>
      </div>
      <p className="text-3xl font-bold text-[#0f172a] mb-1">{value}</p>
      <p className="text-sm text-[#64748b]">{label}</p>
    </div>
  );
}
