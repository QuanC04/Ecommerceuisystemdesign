import { MapPin, Plus, Check } from "lucide-react";

interface Address {
  id: string;
  name: string;
  phone: string;
  address: string;
  isDefault: boolean;
}

interface AddressSelectorProps {
  addresses: Address[];
  selectedId?: string;
  onSelect: (id: string) => void;
  onAddNew: () => void;
}

export function AddressSelector({
  addresses,
  selectedId,
  onSelect,
  onAddNew,
}: AddressSelectorProps) {
  if (addresses.length === 0) {
    return (
      <div className="bg-[#fff7ed] rounded-2xl p-6 border-2 border-dashed border-[#fcd34d]">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-[#64748b] mx-auto mb-3" />
          <h3 className="font-bold text-[#0f172a] mb-2">
            Chưa có địa chỉ giao hàng
          </h3>
          <p className="text-[#64748b] mb-4">
            Vui lòng thêm địa chỉ để tiếp tục đặt hàng
          </p>
          <button
            onClick={onAddNew}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f172a] text-white rounded-full hover:bg-[#334155] transition-colors font-medium"
          >
            <Plus className="w-5 h-5" />
            <span>Thêm địa chỉ mới</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {addresses.map((address) => (
        <button
          key={address.id}
          onClick={() => onSelect(address.id)}
          className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
            selectedId === address.id
              ? "border-[#fcd34d] bg-[#fff7ed]"
              : "border-[#e2e8f0] bg-white hover:border-[#fcd34d]"
          }`}
        >
          <div className="flex items-start gap-3">
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                selectedId === address.id
                  ? "border-[#fcd34d] bg-[#fcd34d]"
                  : "border-[#cbd5e1]"
              }`}
            >
              {selectedId === address.id && (
                <Check className="w-3 h-3 text-[#0f172a]" />
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-[#0f172a]">{address.name}</span>
                <span className="text-[#64748b]">|</span>
                <span className="text-[#64748b]">{address.phone}</span>
                {address.isDefault && (
                  <span className="px-2 py-0.5 bg-[#fcd34d] text-[#0f172a] text-xs font-medium rounded-full">
                    Mặc định
                  </span>
                )}
              </div>
              <p className="text-[#475569]">{address.address}</p>
            </div>
          </div>
        </button>
      ))}
      <button
        onClick={onAddNew}
        className="w-full p-4 border-2 border-dashed border-[#e2e8f0] rounded-xl hover:border-[#fcd34d] hover:bg-[#fff7ed] transition-all flex items-center justify-center gap-2 text-[#0f172a] font-medium"
      >
        <Plus className="w-5 h-5" />
        <span>Thêm địa chỉ mới</span>
      </button>
    </div>
  );
}
