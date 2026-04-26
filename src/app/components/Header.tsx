import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Link } from "../router/Router";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-[#e2e8f0] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="text-2xl font-bold text-[#0f172a]">
            Bookora
          </Link>

          <div className="hidden md:flex flex-1 max-w-2xl">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Tìm kiếm sách, tác giả, nhà xuất bản..."
                className="w-full px-4 py-3 pr-12 bg-[#fff7ed] border border-[#e2e8f0] rounded-full focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#0f172a] text-white rounded-full hover:bg-[#334155]">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/gio-hang"
              className="relative p-2 hover:bg-[#fff7ed] rounded-full transition-colors"
            >
              <ShoppingCart className="w-6 h-6 text-[#0f172a]" />
              <span className="absolute -top-1 -right-1 bg-[#fcd34d] text-[#0f172a] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Link>
            <Link
              to="/tai-khoan"
              className="hidden md:flex items-center gap-2 px-4 py-2 hover:bg-[#fff7ed] rounded-full transition-colors"
            >
              <User className="w-5 h-5 text-[#0f172a]" />
              <span className="text-[#0f172a]">Tài khoản</span>
            </Link>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6 text-[#0f172a]" />
            </button>
          </div>
        </div>

        <div className="md:hidden mt-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Tìm kiếm sách..."
              className="w-full px-4 py-3 pr-12 bg-[#fff7ed] border border-[#e2e8f0] rounded-full focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#0f172a] text-white rounded-full">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#e2e8f0] pt-4">
            <Link
              to="/tai-khoan"
              className="flex items-center gap-2 px-4 py-3 hover:bg-[#fff7ed] rounded-lg"
            >
              <User className="w-5 h-5" />
              <span>Tài khoản của tôi</span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
