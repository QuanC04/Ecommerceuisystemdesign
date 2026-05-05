import { User, MapPin, Shield, Package, Heart, Bell, LogOut } from "lucide-react";
import { Link, useRouter } from "../router/Router";

export function ProfileSidebar() {
  const { currentPath } = useRouter();

  const menuItems = [
    { path: "/tai-khoan", label: "Tổng quan", icon: User },
    { path: "/tai-khoan/thong-tin", label: "Thông tin cá nhân", icon: User },
    { path: "/tai-khoan/dia-chi", label: "Địa chỉ", icon: MapPin },
    { path: "/tai-khoan/bao-mat", label: "Bảo mật", icon: Shield },
  ];

  const secondaryItems = [
    { path: "/tai-khoan/don-hang", label: "Đơn hàng của tôi", icon: Package },
    { path: "/tai-khoan/yeu-thich", label: "Sản phẩm yêu thích", icon: Heart },
    { path: "/tai-khoan/thong-bao", label: "Thông báo", icon: Bell },
  ];

  return (
    <aside className="bg-white rounded-2xl p-6 border border-[#e2e8f0] sticky top-24">
      <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#e2e8f0]">
        <div className="w-16 h-16 bg-gradient-to-br from-[#fcd34d] to-[#fde68a] rounded-full flex items-center justify-center text-2xl font-bold text-[#0f172a]">
          NA
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-[#0f172a] truncate">Nguyễn Văn A</p>
          <p className="text-sm text-[#64748b] truncate">nguyen.a@email.com</p>
        </div>
      </div>

      <nav className="space-y-1 mb-6 pb-6 border-b border-[#e2e8f0]">
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
                  : "text-[#64748b] hover:bg-[#f1f5f9] hover:text-[#0f172a]"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <nav className="space-y-1 mb-6">
        {secondaryItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPath === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                isActive
                  ? "bg-[#fff7ed] text-[#0f172a] font-medium"
                  : "text-[#64748b] hover:bg-[#f1f5f9] hover:text-[#0f172a]"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <button className="w-full flex items-center gap-3 px-4 py-3 text-[#dc2626] hover:bg-red-50 rounded-xl transition-colors">
        <LogOut className="w-5 h-5" />
        <span className="font-medium">Đăng xuất</span>
      </button>
    </aside>
  );
}
