import { Link, useRouter } from "../router/Router";
import {
  LayoutDashboard,
  Package,
  Store,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState, ReactNode } from "react";

interface SellerLayoutProps {
  children: ReactNode;
}

export function SellerLayout({ children }: SellerLayoutProps) {
  const { currentPath } = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { path: "/nguoi-ban", label: "Tổng quan", icon: LayoutDashboard },
    { path: "/nguoi-ban/san-pham", label: "Sản phẩm", icon: Package },
    {
      path: "/nguoi-ban/cua-hang/my-shop",
      label: "Cửa hàng",
      icon: Store,
    },
  ];

  return (
    <div className="min-h-screen bg-[#fff7ed]">
      <header className="bg-white border-b border-[#e2e8f0] sticky top-0 z-50">
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
            <Link to="/" className="text-2xl font-bold text-[#0f172a]">
              Bookora
            </Link>
            <span className="hidden md:inline text-[#64748b]">
              / Kênh người bán
            </span>
          </div>
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 text-[#64748b] hover:text-[#0f172a]"
          >
            <LogOut className="w-5 h-5" />
            <span className="hidden md:inline">Về trang mua hàng</span>
          </Link>
        </div>
      </header>

      <div className="flex">
        <aside
          className={`${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 fixed md:sticky top-[73px] left-0 w-64 h-[calc(100vh-73px)] bg-white border-r border-[#e2e8f0] transition-transform z-40`}
        >
          <nav className="p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPath === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    isActive
                      ? "bg-[#fff7ed] text-[#0f172a] font-medium"
                      : "text-[#64748b] hover:bg-[#f1f5f9]"
                  }`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}
