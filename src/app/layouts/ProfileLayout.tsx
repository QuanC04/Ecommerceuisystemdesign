import { Link, useRouter } from "../router/Router";
import { User, MapPin, Shield } from "lucide-react";
import { ReactNode } from "react";

interface ProfileLayoutProps {
  children: ReactNode;
}

export function ProfileLayout({ children }: ProfileLayoutProps) {
  const { currentPath } = useRouter();

  const menuItems = [
    { path: "/tai-khoan", label: "Tổng quan", icon: User },
    { path: "/tai-khoan/thong-tin", label: "Thông tin cá nhân", icon: User },
    { path: "/tai-khoan/dia-chi", label: "Địa chỉ", icon: MapPin },
    { path: "/tai-khoan/bao-mat", label: "Bảo mật", icon: Shield },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="md:col-span-1">
          <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#e2e8f0]">
              <div className="w-12 h-12 bg-[#fcd34d] rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-[#0f172a]" />
              </div>
              <div>
                <p className="font-bold text-[#0f172a]">Nguyễn Văn A</p>
                <p className="text-sm text-[#64748b]">nguyen.a@email.com</p>
              </div>
            </div>
            <nav className="space-y-2">
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
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </aside>
        <div className="md:col-span-3">{children}</div>
      </div>
    </div>
  );
}
