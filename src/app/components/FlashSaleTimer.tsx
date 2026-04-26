import { Clock } from "lucide-react";
import { useEffect, useState } from "react";

export function FlashSaleTimer() {
  const [time, setTime] = useState({
    hours: 2,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <Clock className="w-5 h-5 text-[#0f172a]" />
      <div className="flex items-center gap-2">
        <div className="bg-[#0f172a] text-white px-2 py-1 rounded-lg min-w-[40px] text-center font-bold">
          {String(time.hours).padStart(2, "0")}
        </div>
        <span className="text-[#0f172a] font-bold">:</span>
        <div className="bg-[#0f172a] text-white px-2 py-1 rounded-lg min-w-[40px] text-center font-bold">
          {String(time.minutes).padStart(2, "0")}
        </div>
        <span className="text-[#0f172a] font-bold">:</span>
        <div className="bg-[#0f172a] text-white px-2 py-1 rounded-lg min-w-[40px] text-center font-bold">
          {String(time.seconds).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}
