import { Link } from "../router/Router";
import { Facebook, Instagram, Mail, Phone, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#e2e8f0] mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-[#0f172a] mb-4">Bookora</h3>
            <p className="text-[#64748b] text-sm leading-relaxed mb-4">
              Nền tảng thương mại điện tử sách hàng đầu Việt Nam. Kết nối người
              mua và người bán sách trên toàn quốc.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                className="p-2 bg-[#fff7ed] hover:bg-[#fcd34d] rounded-full transition-colors"
              >
                <Facebook className="w-5 h-5 text-[#0f172a]" />
              </a>
              <a
                href="https://instagram.com"
                className="p-2 bg-[#fff7ed] hover:bg-[#fcd34d] rounded-full transition-colors"
              >
                <Instagram className="w-5 h-5 text-[#0f172a]" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#0f172a] mb-4">Về Bookora</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/gioi-thieu"
                  className="text-[#64748b] hover:text-[#0f172a] text-sm transition-colors"
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  to="/lien-he"
                  className="text-[#64748b] hover:text-[#0f172a] text-sm transition-colors"
                >
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link
                  to="/tuyen-dung"
                  className="text-[#64748b] hover:text-[#0f172a] text-sm transition-colors"
                >
                  Tuyển dụng
                </Link>
              </li>
              <li>
                <Link
                  to="/tin-tuc"
                  className="text-[#64748b] hover:text-[#0f172a] text-sm transition-colors"
                >
                  Tin tức
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#0f172a] mb-4">Hỗ trợ khách hàng</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/huong-dan"
                  className="text-[#64748b] hover:text-[#0f172a] text-sm transition-colors"
                >
                  Hướng dẫn mua hàng
                </Link>
              </li>
              <li>
                <Link
                  to="/chinh-sach"
                  className="text-[#64748b] hover:text-[#0f172a] text-sm transition-colors"
                >
                  Chính sách đổi trả
                </Link>
              </li>
              <li>
                <Link
                  to="/bao-mat"
                  className="text-[#64748b] hover:text-[#0f172a] text-sm transition-colors"
                >
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link
                  to="/thanh-toan"
                  className="text-[#64748b] hover:text-[#0f172a] text-sm transition-colors"
                >
                  Phương thức thanh toán
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#0f172a] mb-4">Liên hệ</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-[#64748b] text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>1900 1234</span>
              </li>
              <li className="flex items-center gap-2 text-[#64748b] text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>support@bookora.vn</span>
              </li>
            </ul>
            <h4 className="font-bold text-[#0f172a] mb-3 text-sm">
              Đăng ký nhận tin
            </h4>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 px-3 py-2 text-sm border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
              />
              <button
                type="submit"
                className="p-2 bg-[#0f172a] text-white rounded-lg hover:bg-[#334155] transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-[#e2e8f0] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#64748b] text-sm">
              © 2026 Bookora. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/dieu-khoan"
                className="text-[#64748b] hover:text-[#0f172a] text-sm transition-colors"
              >
                Điều khoản
              </Link>
              <Link
                to="/bao-mat"
                className="text-[#64748b] hover:text-[#0f172a] text-sm transition-colors"
              >
                Bảo mật
              </Link>
              <Link
                to="/sitemap"
                className="text-[#64748b] hover:text-[#0f172a] text-sm transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
