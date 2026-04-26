import { useState } from "react";

interface PriceRangeSliderProps {
  min: number;
  max: number;
  onChange?: (min: number, max: number) => void;
}

export function PriceRangeSlider({
  min,
  max,
  onChange,
}: PriceRangeSliderProps) {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value <= maxValue) {
      setMinValue(value);
      onChange?.(value, maxValue);
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value >= minValue) {
      setMaxValue(value);
      onChange?.(minValue, value);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <input
          type="number"
          value={minValue}
          onChange={handleMinChange}
          placeholder="Từ"
          className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fcd34d] text-sm"
        />
        <span className="text-[#64748b]">-</span>
        <input
          type="number"
          value={maxValue}
          onChange={handleMaxChange}
          placeholder="Đến"
          className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fcd34d] text-sm"
        />
      </div>
      <div className="flex items-center gap-2 text-sm text-[#64748b]">
        <span>{minValue.toLocaleString("vi-VN")}₫</span>
        <div className="flex-1 h-1 bg-[#e2e8f0] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#fcd34d]"
            style={{
              width: `${((maxValue - minValue) / (max - min)) * 100}%`,
              marginLeft: `${((minValue - min) / (max - min)) * 100}%`,
            }}
          />
        </div>
        <span>{maxValue.toLocaleString("vi-VN")}₫</span>
      </div>
    </div>
  );
}
