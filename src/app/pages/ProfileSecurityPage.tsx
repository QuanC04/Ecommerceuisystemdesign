import { Lock, Shield, Smartphone, Save } from "lucide-react";
import { useState } from "react";

export function ProfileSecurityPage() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-[#fcd34d] rounded-full flex items-center justify-center">
            <Lock className="w-5 h-5 text-[#0f172a]" />
          </div>
          <h2 className="text-2xl font-bold text-[#0f172a]">Đổi mật khẩu</h2>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-[#0f172a] mb-2">
              Mật khẩu hiện tại
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
            />
          </div>
          <div>
            <label className="block text-[#0f172a] mb-2">Mật khẩu mới</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
            />
            <p className="text-sm text-[#64748b] mt-2">
              Mật khẩu phải có ít nhất 8 ký tự
            </p>
          </div>
          <div>
            <label className="block text-[#0f172a] mb-2">
              Xác nhận mật khẩu mới
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
            />
          </div>
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-[#0f172a] text-white rounded-full hover:bg-[#334155] transition-colors"
            >
              <Save className="w-5 h-5" />
              <span>Lưu mật khẩu mới</span>
            </button>
            <button
              type="button"
              className="px-6 py-3 border-2 border-[#e2e8f0] rounded-full hover:bg-[#fff7ed] transition-colors"
            >
              Hủy
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-[#fcd34d] rounded-full flex items-center justify-center">
            <Smartphone className="w-5 h-5 text-[#0f172a]" />
          </div>
          <h2 className="text-2xl font-bold text-[#0f172a]">
            Xác thực hai yếu tố (2FA)
          </h2>
        </div>
        <p className="text-[#64748b] mb-6">
          Tăng cường bảo mật cho tài khoản của bạn bằng cách yêu cầu mã xác
          thực khi đăng nhập
        </p>
        <div className="flex items-center justify-between p-4 bg-[#fff7ed] rounded-xl">
          <div>
            <p className="font-medium text-[#0f172a] mb-1">
              Xác thực hai yếu tố
            </p>
            <p className="text-sm text-[#64748b]">
              {twoFactorEnabled ? "Đã bật" : "Chưa bật"}
            </p>
          </div>
          <button
            onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
            className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
              twoFactorEnabled ? "bg-[#fcd34d]" : "bg-[#cbd5e1]"
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
            <div className="w-48 h-48 bg-[#fff7ed] rounded-xl flex items-center justify-center mx-auto">
              <p className="text-[#64748b]">QR Code placeholder</p>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-[#fcd34d] rounded-full flex items-center justify-center">
            <Shield className="w-5 h-5 text-[#0f172a]" />
          </div>
          <h2 className="text-2xl font-bold text-[#0f172a]">
            Phiên đăng nhập
          </h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-[#e2e8f0] rounded-xl">
            <div>
              <p className="font-medium text-[#0f172a] mb-1">
                Chrome trên Windows
              </p>
              <p className="text-sm text-[#64748b]">
                TP. Hồ Chí Minh • Đang hoạt động
              </p>
            </div>
            <span className="px-3 py-1 bg-[#fff7ed] text-[#0f172a] text-sm font-medium rounded-full">
              Thiết bị này
            </span>
          </div>
          <div className="flex items-center justify-between p-4 border border-[#e2e8f0] rounded-xl">
            <div>
              <p className="font-medium text-[#0f172a] mb-1">
                Safari trên iPhone
              </p>
              <p className="text-sm text-[#64748b]">
                Hà Nội • Hoạt động 2 ngày trước
              </p>
            </div>
            <button className="text-sm text-[#dc2626] hover:text-[#991b1b] font-medium">
              Đăng xuất
            </button>
          </div>
        </div>
        <button className="w-full mt-4 py-3 border-2 border-[#e2e8f0] rounded-full hover:bg-[#fff7ed] transition-colors text-[#0f172a] font-medium">
          Đăng xuất tất cả thiết bị khác
        </button>
      </div>
    </div>
  );
}
