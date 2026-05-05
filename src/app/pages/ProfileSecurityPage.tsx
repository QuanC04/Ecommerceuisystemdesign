import { Lock, Shield, Smartphone, Save, Eye, EyeOff, X, Loader2 } from "lucide-react";
import { useState } from "react";

export function ProfileSecurityPage() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [passwordData, setPasswordData] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handleSavePassword = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setIsChangingPassword(false);
      setPasswordData({ current: "", new: "", confirm: "" });
    }, 1500);
  };

  const handleCancelPassword = () => {
    setIsChangingPassword(false);
    setPasswordData({ current: "", new: "", confirm: "" });
  };

  const sessions = [
    {
      device: "Chrome trên Windows",
      location: "TP. Hồ Chí Minh",
      lastActive: "Đang hoạt động",
      isCurrent: true,
    },
    {
      device: "Safari trên iPhone",
      location: "Hà Nội",
      lastActive: "Hoạt động 2 ngày trước",
      isCurrent: false,
    },
    {
      device: "Chrome trên Android",
      location: "Đà Nẵng",
      lastActive: "Hoạt động 5 ngày trước",
      isCurrent: false,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Change Password */}
      <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-[#fcd34d] rounded-full flex items-center justify-center">
            <Lock className="w-5 h-5 text-[#0f172a]" />
          </div>
          <h2 className="text-xl font-bold text-[#0f172a]">Đổi mật khẩu</h2>
        </div>

        {!isChangingPassword ? (
          <div className="flex items-center justify-between p-4 bg-[#fff7ed] rounded-xl">
            <div>
              <p className="font-medium text-[#0f172a] mb-1">
                Mật khẩu đã được cập nhật
              </p>
              <p className="text-sm text-[#64748b]">Lần cuối: 01/03/2026</p>
            </div>
            <button
              onClick={() => setIsChangingPassword(true)}
              className="px-6 py-2 border-2 border-[#0f172a] text-[#0f172a] rounded-full hover:bg-white transition-colors font-medium"
            >
              Thay đổi
            </button>
          </div>
        ) : (
          <form className="space-y-4">
            <div>
              <label className="block text-[#0f172a] font-medium mb-2">
                Mật khẩu hiện tại
              </label>
              <div className="relative">
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  value={passwordData.current}
                  onChange={(e) =>
                    setPasswordData({ ...passwordData, current: e.target.value })
                  }
                  placeholder="Nhập mật khẩu hiện tại"
                  className="w-full px-4 py-3 pr-12 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748b] hover:text-[#0f172a]"
                >
                  {showCurrentPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-[#0f172a] font-medium mb-2">
                Mật khẩu mới
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  value={passwordData.new}
                  onChange={(e) =>
                    setPasswordData({ ...passwordData, new: e.target.value })
                  }
                  placeholder="Nhập mật khẩu mới"
                  className="w-full px-4 py-3 pr-12 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748b] hover:text-[#0f172a]"
                >
                  {showNewPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              <p className="text-sm text-[#64748b] mt-2">
                Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường và số
              </p>
            </div>
            <div>
              <label className="block text-[#0f172a] font-medium mb-2">
                Xác nhận mật khẩu mới
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={passwordData.confirm}
                  onChange={(e) =>
                    setPasswordData({ ...passwordData, confirm: e.target.value })
                  }
                  placeholder="Nhập lại mật khẩu mới"
                  className="w-full px-4 py-3 pr-12 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748b] hover:text-[#0f172a]"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={handleSavePassword}
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
                    <span>Lưu mật khẩu mới</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={handleCancelPassword}
                disabled={isSaving}
                className="flex items-center gap-2 px-6 py-3 border-2 border-[#e2e8f0] rounded-full hover:bg-[#f1f5f9] disabled:opacity-50 transition-colors font-medium"
              >
                <X className="w-5 h-5" />
                <span>Hủy</span>
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Two-Factor Authentication */}
      <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-[#fcd34d] rounded-full flex items-center justify-center">
            <Smartphone className="w-5 h-5 text-[#0f172a]" />
          </div>
          <h2 className="text-xl font-bold text-[#0f172a]">
            Xác thực hai yếu tố (2FA)
          </h2>
        </div>
        <p className="text-[#64748b] mb-6">
          Tăng cường bảo mật cho tài khoản của bạn bằng cách yêu cầu mã xác thực
          khi đăng nhập từ thiết bị mới
        </p>
        <div className="flex items-center justify-between p-4 bg-[#fff7ed] rounded-xl">
          <div>
            <p className="font-medium text-[#0f172a] mb-1">Xác thực hai yếu tố</p>
            <p className="text-sm text-[#64748b]">
              {twoFactorEnabled ? "Đã bật" : "Chưa bật"}
            </p>
          </div>
          <button
            onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
            className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
              twoFactorEnabled ? "bg-[#10b981]" : "bg-[#cbd5e1]"
            }`}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                twoFactorEnabled ? "translate-x-7" : "translate-x-1"
              }`}
            />
          </button>
        </div>
        {twoFactorEnabled && (
          <div className="mt-6 p-4 border border-[#e2e8f0] rounded-xl">
            <p className="text-sm text-[#64748b] mb-4">
              Quét mã QR dưới đây bằng ứng dụng xác thực (Google Authenticator,
              Authy, v.v.)
            </p>
            <div className="w-48 h-48 bg-[#fff7ed] rounded-xl flex items-center justify-center mx-auto border-2 border-dashed border-[#fcd34d]">
              <p className="text-[#64748b]">QR Code</p>
            </div>
          </div>
        )}
      </div>

      {/* Active Sessions */}
      <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-[#fcd34d] rounded-full flex items-center justify-center">
            <Shield className="w-5 h-5 text-[#0f172a]" />
          </div>
          <h2 className="text-xl font-bold text-[#0f172a]">Phiên đăng nhập</h2>
        </div>
        <div className="space-y-4 mb-6">
          {sessions.map((session, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-[#e2e8f0] rounded-xl"
            >
              <div className="flex-1">
                <p className="font-medium text-[#0f172a] mb-1">{session.device}</p>
                <p className="text-sm text-[#64748b]">
                  {session.location} • {session.lastActive}
                </p>
              </div>
              {session.isCurrent ? (
                <span className="px-3 py-1 bg-[#fff7ed] text-[#0f172a] text-sm font-medium rounded-full">
                  Thiết bị này
                </span>
              ) : (
                <button className="text-sm text-[#dc2626] hover:text-[#991b1b] font-medium">
                  Đăng xuất
                </button>
              )}
            </div>
          ))}
        </div>
        <button className="w-full py-3 border-2 border-[#e2e8f0] rounded-full hover:bg-[#fff7ed] transition-colors text-[#0f172a] font-medium">
          Đăng xuất tất cả thiết bị khác
        </button>
      </div>
    </div>
  );
}
