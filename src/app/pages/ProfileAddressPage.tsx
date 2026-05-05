import { Plus, MapPin } from "lucide-react";
import { useState } from "react";
import { AddressCard } from "../components/AddressCard";

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
    {
      id: "3",
      name: "Nguyễn Văn A (Văn phòng)",
      phone: "0912 345 678",
      address: "789 Đường Hai Bà Trưng, Phường Đa Kao, Quận 1, TP. Hồ Chí Minh",
      isDefault: false,
    },
  ]);

  const handleEdit = (id: string) => {
    alert(`Chỉnh sửa địa chỉ ${id}`);
  };

  const handleDelete = (id: string) => {
    if (confirm("Bạn có chắc muốn xóa địa chỉ này?")) {
      setAddresses(addresses.filter((addr) => addr.id !== id));
    }
  };

  const handleSetDefault = (id: string) => {
    setAddresses(
      addresses.map((addr) => ({
        ...addr,
        isDefault: addr.id === id,
      }))
    );
  };

  const handleAddNew = () => {
    alert("Thêm địa chỉ mới");
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#0f172a]">Địa chỉ của tôi</h2>
          <button
            onClick={handleAddNew}
            className="flex items-center gap-2 px-6 py-3 bg-[#0f172a] text-white rounded-full hover:bg-[#334155] transition-colors font-medium"
          >
            <Plus className="w-5 h-5" />
            <span>Thêm địa chỉ mới</span>
          </button>
        </div>

        {addresses.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            {addresses.map((address) => (
              <AddressCard
                key={address.id}
                {...address}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onSetDefault={handleSetDefault}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-[#fff7ed] rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-10 h-10 text-[#64748b]" />
            </div>
            <h3 className="font-bold text-[#0f172a] mb-2">Chưa có địa chỉ nào</h3>
            <p className="text-[#64748b] mb-6">
              Thêm địa chỉ để thuận tiện cho việc mua sắm
            </p>
            <button
              onClick={handleAddNew}
              className="px-8 py-3 bg-[#0f172a] text-white rounded-full hover:bg-[#334155] font-medium"
            >
              Thêm địa chỉ mới
            </button>
          </div>
        )}
      </div>

      <div className="bg-[#fff7ed] rounded-2xl p-6 border border-[#fcd34d]">
        <h3 className="font-bold text-[#0f172a] mb-2">💡 Mẹo hữu ích</h3>
        <ul className="space-y-2 text-sm text-[#64748b]">
          <li>• Địa chỉ mặc định sẽ được tự động chọn khi đặt hàng</li>
          <li>• Bạn có thể lưu nhiều địa chỉ để thuận tiện hơn khi mua sắm</li>
          <li>
            • Đảm bảo thông tin địa chỉ chính xác để đơn hàng được giao đúng hẹn
          </li>
        </ul>
      </div>
    </div>
  );
}
