import { Camera, Save, X, Upload, Loader2 } from "lucide-react";
import { useState } from "react";

export function ProfilePersonalInfoPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Nguyễn Văn",
    lastName: "A",
    email: "nguyen.a@email.com",
    phone: "0912 345 678",
    birthDate: "1990-01-15",
    gender: "male",
  });

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setIsEditing(false);
    }, 1500);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData({
      firstName: "Nguyễn Văn",
      lastName: "A",
      email: "nguyen.a@email.com",
      phone: "0912 345 678",
      birthDate: "1990-01-15",
      gender: "male",
    });
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#0f172a]">Thông tin cá nhân</h2>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="px-6 py-2 border-2 border-[#0f172a] text-[#0f172a] rounded-full hover:bg-[#fff7ed] transition-colors font-medium"
            >
              Chỉnh sửa
            </button>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 pb-8 border-b border-[#e2e8f0]">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-[#fcd34d] to-[#fde68a] rounded-full flex items-center justify-center text-3xl font-bold text-[#0f172a]">
              NA
            </div>
            {isEditing && (
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-[#0f172a] text-white rounded-full flex items-center justify-center hover:bg-[#334155] transition-colors shadow-lg">
                <Camera className="w-5 h-5" />
              </button>
            )}
          </div>
          <div className="text-center sm:text-left">
            <p className="font-bold text-[#0f172a] text-lg mb-1">
              {formData.firstName} {formData.lastName}
            </p>
            <p className="text-[#64748b]">Thành viên từ 15/01/2025</p>
            {isEditing && (
              <button className="mt-2 text-sm text-[#0f172a] hover:text-[#334155] font-medium flex items-center gap-2">
                <Upload className="w-4 h-4" />
                <span>Tải ảnh đại diện mới</span>
              </button>
            )}
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#0f172a] font-medium mb-2">
                Họ và tên đệm
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                disabled={!isEditing}
                className="w-full px-4 py-3 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d] disabled:bg-[#f1f5f9] disabled:text-[#64748b]"
              />
            </div>
            <div>
              <label className="block text-[#0f172a] font-medium mb-2">Tên</label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                disabled={!isEditing}
                className="w-full px-4 py-3 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d] disabled:bg-[#f1f5f9] disabled:text-[#64748b]"
              />
            </div>
          </div>

          <div>
            <label className="block text-[#0f172a] font-medium mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              disabled
              className="w-full px-4 py-3 border border-[#e2e8f0] rounded-xl bg-[#f1f5f9] text-[#64748b]"
            />
            <p className="text-sm text-[#10b981] mt-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#10b981] rounded-full"></span>
              Email đã được xác thực
            </p>
          </div>

          <div>
            <label className="block text-[#0f172a] font-medium mb-2">
              Số điện thoại
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              disabled={!isEditing}
              className="w-full px-4 py-3 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d] disabled:bg-[#f1f5f9] disabled:text-[#64748b]"
            />
          </div>

          <div>
            <label className="block text-[#0f172a] font-medium mb-2">
              Ngày sinh
            </label>
            <input
              type="date"
              value={formData.birthDate}
              onChange={(e) =>
                setFormData({ ...formData, birthDate: e.target.value })
              }
              disabled={!isEditing}
              className="w-full px-4 py-3 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d] disabled:bg-[#f1f5f9] disabled:text-[#64748b]"
            />
          </div>

          <div>
            <label className="block text-[#0f172a] font-medium mb-3">
              Giới tính
            </label>
            <div className="flex gap-6">
              {[
                { value: "male", label: "Nam" },
                { value: "female", label: "Nữ" },
                { value: "other", label: "Khác" },
              ].map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="gender"
                    value={option.value}
                    checked={formData.gender === option.value}
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                    disabled={!isEditing}
                    className="w-5 h-5 text-[#fcd34d] focus:ring-[#fcd34d] disabled:opacity-50"
                  />
                  <span
                    className={isEditing ? "text-[#0f172a]" : "text-[#64748b]"}
                  >
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {isEditing && (
            <div className="flex gap-4 pt-6 border-t border-[#e2e8f0]">
              <button
                type="button"
                onClick={handleSave}
                disabled={isSaving}
                className="flex items-center gap-2 px-6 py-3 bg-[#0f172a] text-white rounded-full hover:bg-[#334155] disabled:opacity-50 transition-colors font-medium"
              >
                {isSaving ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Đang lưu...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5" />
                    <span>Lưu thay đổi</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                disabled={isSaving}
                className="flex items-center gap-2 px-6 py-3 border-2 border-[#e2e8f0] rounded-full hover:bg-[#f1f5f9] disabled:opacity-50 transition-colors font-medium"
              >
                <X className="w-5 h-5" />
                <span>Hủy</span>
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
