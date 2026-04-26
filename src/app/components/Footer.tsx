import { Link } from "../router/Router";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#e2e8f0] mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-[#0f172a] mb-4">Bookora</h3>
            <p className="text-[#64748b] text-sm leading-relaxed">
              Nền tảng thương mại điện tử sách hàng đầu Việt Nam. Kết nối người
              mua và người bán sách trên toàn quốc.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#0f172a] mb-4">Về Bookora</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/gioi-thieu"
                  className="text-[#64748b] hover:text-[#0f172a] text-sm"
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  to="/lien-he"
                  className="text-[#64748b] hover:text-[#0f172a] text-sm"
                >
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link
                  to="/tuyen-dung"
                  className="text-[#64748b] hover:text-[#0f172a] text-sm"
                >
                  Tuyển dụng
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#0f172a] mb-4">Hỗ trợ</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/huong-dan"
                  className="text-[#64748b] hover:text-[#0f172a] text-sm"
                >
                  Hướng dẫn mua hàng
                </Link>
              </li>
              <li>
                <Link
                  to="/chinh-sach"
                  className="text-[#64748b] hover:text-[#0f172a] text-sm"
                >
                  Chính sách đổi trả
                </Link>
              </li>
              <li>
                <Link
                  to="/bao-mat"
                  className="text-[#64748b] hover:text-[#0f172a] text-sm"
                >
                  Chính sách bảo mật
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#0f172a] mb-4">Liên hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[#64748b] text-sm">
                <Phone className="w-4 h-4" />
                <span>1900 1234</span>
              </li>
              <li className="flex items-center gap-2 text-[#64748b] text-sm">
                <Mail className="w-4 h-4" />
                <span>support@bookora.vn</span>
              </li>
              <li className="flex items-center gap-3 mt-4">
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
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#e2e8f0] mt-8 pt-8 text-center">
          <p className="text-[#64748b] text-sm">
            © 2026 Bookora. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}
