import { Link } from "../router/Router";
import { User, Mail, Lock, Eye, EyeOff, Phone } from "lucide-react";
import { useState } from "react";

export function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#fff7ed] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link to="/" className="text-4xl font-bold text-[#0f172a] inline-block mb-4">
            Bookora
          </Link>
          <h1 className="text-2xl font-bold text-[#0f172a] mb-2">
            Đăng ký tài khoản
          </h1>
          <p className="text-[#64748b]">
            Tạo tài khoản để bắt đầu mua sắm
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-[#e2e8f0]">
          <form className="space-y-5">
            <div>
              <label className="block text-[#0f172a] mb-2">Họ và tên</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748b]" />
                <input
                  type="text"
                  placeholder="Nguyễn Văn A"
                  className="w-full pl-12 pr-4 py-3 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#0f172a] mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748b]" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full pl-12 pr-4 py-3 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#0f172a] mb-2">Số điện thoại</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748b]" />
                <input
                  type="tel"
                  placeholder="0912 345 678"
                  className="w-full pl-12 pr-4 py-3 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#0f172a] mb-2">Mật khẩu</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748b]" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748b] hover:text-[#0f172a]"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-[#0f172a] mb-2">
                Xác nhận mật khẩu
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748b]" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
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

            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 mt-1 rounded border-[#cbd5e1] text-[#fcd34d] focus:ring-[#fcd34d]"
              />
              <span className="text-sm text-[#64748b]">
                Tôi đồng ý với{" "}
                <Link to="/dieu-khoan" className="text-[#0f172a] hover:underline">
                  Điều khoản dịch vụ
                </Link>{" "}
                và{" "}
                <Link to="/chinh-sach" className="text-[#0f172a] hover:underline">
                  Chính sách bảo mật
                </Link>
              </span>
            </label>

            <Link
              to="/"
              className="block w-full py-3 bg-[#0f172a] text-white text-center rounded-full hover:bg-[#334155] transition-colors"
            >
              Đăng ký
            </Link>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#e2e8f0]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-[#64748b]">Hoặc</span>
              </div>
            </div>

            <button
              type="button"
              className="w-full py-3 border-2 border-[#e2e8f0] rounded-full hover:bg-[#fff7ed] transition-colors flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="font-medium text-[#0f172a]">
                Đăng ký với Google
              </span>
            </button>
          </form>

          <p className="text-center text-[#64748b] mt-6">
            Đã có tài khoản?{" "}
            <Link
              to="/dang-nhap"
              className="text-[#0f172a] font-medium hover:text-[#334155]"
            >
              Đăng nhập ngay
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
