import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string | number;
  label: string;
  color?: "amber" | "blue" | "green" | "purple";
}

const colorClasses = {
  amber: "bg-[#fcd34d]",
  blue: "bg-blue-400",
  green: "bg-green-400",
  purple: "bg-purple-400",
};

export function StatCard({ icon: Icon, value, label, color = "amber" }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0] hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4">
        <div className={`w-14 h-14 ${colorClasses[color]} rounded-full flex items-center justify-center flex-shrink-0`}>
          <Icon className="w-7 h-7 text-[#0f172a]" />
        </div>
        <div>
          <p className="text-3xl font-bold text-[#0f172a] mb-1">{value}</p>
          <p className="text-sm text-[#64748b]">{label}</p>
        </div>
      </div>
    </div>
  );
}
