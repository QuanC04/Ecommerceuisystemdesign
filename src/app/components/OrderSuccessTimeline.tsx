import { Check, Package, Truck, Home as HomeIcon } from "lucide-react";

interface TimelineStep {
  icon: React.ElementType;
  label: string;
  status: "completed" | "current" | "upcoming";
}

export function OrderSuccessTimeline() {
  const steps: TimelineStep[] = [
    { icon: Check, label: "Đơn hàng đã đặt", status: "completed" },
    { icon: Package, label: "Đang chuẩn bị", status: "current" },
    { icon: Truck, label: "Đang giao", status: "upcoming" },
    { icon: HomeIcon, label: "Đã giao", status: "upcoming" },
  ];

  return (
    <div className="relative">
      <div className="flex justify-between">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="flex flex-col items-center flex-1">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center relative z-10 ${
                  step.status === "completed"
                    ? "bg-[#10b981] text-white"
                    : step.status === "current"
                      ? "bg-[#fcd34d] text-[#0f172a]"
                      : "bg-[#e2e8f0] text-[#64748b]"
                }`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <p
                className={`text-xs mt-2 text-center ${
                  step.status === "upcoming"
                    ? "text-[#64748b]"
                    : "text-[#0f172a] font-medium"
                }`}
              >
                {step.label}
              </p>
            </div>
          );
        })}
      </div>
      <div className="absolute top-6 left-0 right-0 h-0.5 bg-[#e2e8f0] -z-0">
        <div
          className="h-full bg-[#10b981] transition-all duration-500"
          style={{ width: "25%" }}
        />
      </div>
    </div>
  );
}
