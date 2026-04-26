import { X } from "lucide-react";

interface FilterChipProps {
  label: string;
  onRemove: () => void;
}

export function FilterChip({ label, onRemove }: FilterChipProps) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#fff7ed] border border-[#fcd34d] rounded-full">
      <span className="text-sm font-medium text-[#0f172a]">{label}</span>
      <button
        onClick={onRemove}
        className="hover:bg-[#fcd34d] rounded-full p-0.5 transition-colors"
      >
        <X className="w-3 h-3 text-[#0f172a]" />
      </button>
    </div>
  );
}
