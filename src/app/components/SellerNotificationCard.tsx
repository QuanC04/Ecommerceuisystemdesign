import { LucideIcon } from "lucide-react";

interface SellerNotificationCardProps {
  icon: LucideIcon;
  title: string;
  message: string;
  time: string;
  color: "amber" | "blue" | "red" | "green";
  action?: string;
}

const colorClasses = {
  amber: "bg-[#fff7ed] border-[#fcd34d]",
  blue: "bg-blue-50 border-blue-200",
  red: "bg-red-50 border-red-200",
  green: "bg-green-50 border-green-200",
};

const iconColorClasses = {
  amber: "text-[#fcd34d]",
  blue: "text-blue-500",
  red: "text-red-500",
  green: "text-green-500",
};

export function SellerNotificationCard({
  icon: Icon,
  title,
  message,
  time,
  color,
  action,
}: SellerNotificationCardProps) {
  return (
    <div className={`p-4 border rounded-xl ${colorClasses[color]}`}>
      <div className="flex gap-3">
        <div className="flex-shrink-0">
          <Icon className={`w-5 h-5 ${iconColorClasses[color]}`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <p className="font-bold text-[#0f172a]">{title}</p>
            <span className="text-xs text-[#64748b] flex-shrink-0">{time}</span>
          </div>
          <p className="text-sm text-[#64748b] mb-2">{message}</p>
          {action && (
            <button className="text-sm font-medium text-[#0f172a] hover:underline">
              {action}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
