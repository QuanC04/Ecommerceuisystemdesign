import { MapPin, Edit, Trash2 } from "lucide-react";

interface AddressCardProps {
  id: string;
  name: string;
  phone: string;
  address: string;
  isDefault: boolean;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onSetDefault: (id: string) => void;
}

export function AddressCard({
  id,
  name,
  phone,
  address,
  isDefault,
  onEdit,
  onDelete,
  onSetDefault,
}: AddressCardProps) {
  return (
    <div
      className={`p-6 rounded-2xl border-2 transition-all ${
        isDefault
          ? "border-[#fcd34d] bg-[#fff7ed]"
          : "border-[#e2e8f0] bg-white hover:border-[#fcd34d]"
      }`}
    >
      <div className="flex items-start gap-4 mb-4">
        <MapPin className="w-5 h-5 text-[#fcd34d] mt-1 flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-bold text-[#0f172a]">{name}</span>
            <span className="text-[#64748b]">|</span>
            <span className="text-[#64748b]">{phone}</span>
          </div>
          <p className="text-[#475569] mb-3 leading-relaxed">{address}</p>
          {isDefault && (
            <span className="inline-block px-3 py-1 bg-[#fcd34d] text-[#0f172a] text-xs font-bold rounded-full">
              Địa chỉ mặc định
            </span>
          )}
        </div>
      </div>
      <div className="flex items-center gap-3 pt-4 border-t border-[#e2e8f0]">
        <button
          onClick={() => onEdit(id)}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-[#0f172a] hover:bg-[#f1f5f9] rounded-lg transition-colors font-medium"
        >
          <Edit className="w-4 h-4" />
          <span>Sửa</span>
        </button>
        {!isDefault && (
          <>
            <button
              onClick={() => onDelete(id)}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-[#dc2626] hover:bg-red-50 rounded-lg transition-colors font-medium"
            >
              <Trash2 className="w-4 h-4" />
              <span>Xóa</span>
            </button>
            <button
              onClick={() => onSetDefault(id)}
              className="flex-1 px-4 py-2 border-2 border-[#0f172a] text-[#0f172a] rounded-lg hover:bg-[#fff7ed] transition-colors font-medium"
            >
              Đặt mặc định
            </button>
          </>
        )}
      </div>
    </div>
  );
}
