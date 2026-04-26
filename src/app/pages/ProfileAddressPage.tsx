import { Plus, Edit, Trash2, MapPin } from "lucide-react";
import { useState } from "react";

interface Address {
  id: string;
  name: string;
  phone: string;
  address: string;
  isDefault: boolean;
}

export function ProfileAddressPage() {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: "1",
      name: "Nguyễn Văn A",
      phone: "0912 345 678",
      address: "123 Đường Lê Lợi, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh",
      isDefault: true,
    },
    {
      id: "2",
      name: "Nguyễn Văn A",
      phone: "0912 345 678",
      address: "456 Đường Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh",
      isDefault: false,
    },
  ]);

  return (
    <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[#0f172a]">Địa chỉ của tôi</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#0f172a] text-white rounded-full hover:bg-[#334155] transition-colors">
          <Plus className="w-5 h-5" />
          <span>Thêm địa chỉ mới</span>
        </button>
      </div>

      <div className="space-y-4">
        {addresses.map((address) => (
          <div
            key={address.id}
            className={`border-2 rounded-xl p-6 transition-all ${
              address.isDefault
                ? "border-[#fcd34d] bg-[#fff7ed]"
                : "border-[#e2e8f0] hover:border-[#fcd34d]"
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#fcd34d] mt-1" />
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold text-[#0f172a]">
                      {address.name}
                    </span>
                    <span className="text-[#64748b]">| {address.phone}</span>
                  </div>
                  <p className="text-[#475569] mb-3">{address.address}</p>
                  {address.isDefault && (
                    <span className="inline-block px-3 py-1 bg-[#fcd34d] text-[#0f172a] text-sm font-medium rounded-full">
                      Địa chỉ mặc định
                    </span>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-[#0f172a] hover:bg-[#f1f5f9] rounded-lg">
                  <Edit className="w-5 h-5" />
                </button>
                <button className="p-2 text-[#64748b] hover:text-[#dc2626] hover:bg-[#f1f5f9] rounded-lg">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            {!address.isDefault && (
              <button className="text-sm text-[#0f172a] hover:text-[#334155] font-medium">
                Đặt làm mặc định
              </button>
            )}
          </div>
        ))}
      </div>

      {addresses.length === 0 && (
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-[#fff7ed] rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-10 h-10 text-[#64748b]" />
          </div>
          <p className="text-[#64748b] mb-4">Chưa có địa chỉ nào</p>
          <button className="px-6 py-3 bg-[#0f172a] text-white rounded-full hover:bg-[#334155]">
            Thêm địa chỉ mới
          </button>
        </div>
      )}
    </div>
  );
}
