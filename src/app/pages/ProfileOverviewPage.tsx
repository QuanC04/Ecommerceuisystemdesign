import { Package, Heart, ShoppingBag, Clock, ChevronRight, TrendingUp } from "lucide-react";
import { Link } from "../router/Router";
import { StatCard } from "../components/StatCard";

export function ProfileOverviewPage() {
  const stats = [
    { icon: Package, value: "12", label: "Đơn hàng", color: "amber" as const },
    { icon: ShoppingBag, value: "3", label: "Đang xử lý", color: "blue" as const },
    { icon: Clock, value: "5", label: "Chờ đánh giá", color: "green" as const },
    { icon: Heart, value: "28", label: "Yêu thích", color: "purple" as const },
  ];

  const recentOrders = [
    {
      id: "ORD-001",
      date: "25/04/2026",
      total: 487000,
      status: "Đang giao",
      statusColor: "text-blue-600 bg-blue-50",
      items: 3,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=100",
    },
    {
      id: "ORD-002",
      date: "20/04/2026",
      total: 235000,
      status: "Đã giao",
      statusColor: "text-green-600 bg-green-50",
      items: 2,
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=100",
    },
    {
      id: "ORD-003",
      date: "15/04/2026",
      total: 189000,
      status: "Đã giao",
      statusColor: "text-green-600 bg-green-50",
      items: 1,
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=100",
    },
  ];

  const quickActions = [
    { to: "/tai-khoan/don-hang", label: "Quản lý đơn hàng", icon: Package },
    { to: "/tai-khoan/dia-chi", label: "Sổ địa chỉ", icon: Package },
    { to: "/tai-khoan/bao-mat", label: "Bảo mật tài khoản", icon: Package },
    { to: "/tai-khoan/yeu-thich", label: "Sản phẩm yêu thích", icon: Heart },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
        <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
          Chào mừng trở lại, Nguyễn Văn A! 👋
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-[#0f172a]">Đơn hàng gần đây</h3>
            <Link
              to="/tai-khoan/don-hang"
              className="text-[#0f172a] hover:text-[#334155] font-medium flex items-center gap-1"
            >
              <span>Xem tất cả</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex gap-4 p-4 border border-[#e2e8f0] rounded-xl hover:border-[#fcd34d] transition-colors"
              >
                <div className="w-16 h-20 bg-[#fff7ed] rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={order.image}
                    alt="Order"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-bold text-[#0f172a]">{order.id}</p>
                      <p className="text-sm text-[#64748b]">{order.date}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${order.statusColor}`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-[#64748b]">{order.items} sản phẩm</p>
                    <p className="font-bold text-[#0f172a]">
                      {order.total.toLocaleString("vi-VN")}₫
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
          <h3 className="text-xl font-bold text-[#0f172a] mb-6">Truy cập nhanh</h3>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.to}
                  to={action.to}
                  className="flex flex-col items-center gap-3 p-4 border border-[#e2e8f0] rounded-xl hover:border-[#fcd34d] hover:bg-[#fff7ed] transition-all group"
                >
                  <div className="w-12 h-12 bg-[#fff7ed] group-hover:bg-[#fcd34d] rounded-full flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6 text-[#0f172a]" />
                  </div>
                  <span className="text-sm font-medium text-[#0f172a] text-center">
                    {action.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#fff7ed] to-white rounded-2xl p-6 border border-[#fcd34d]">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[#fcd34d] rounded-full flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-6 h-6 text-[#0f172a]" />
          </div>
          <div>
            <h3 className="font-bold text-[#0f172a] mb-2">
              Nâng cấp tài khoản VIP
            </h3>
            <p className="text-[#64748b] mb-4">
              Nhận ưu đãi độc quyền, miễn phí vận chuyển toàn bộ đơn hàng và
              tích điểm gấp đôi
            </p>
            <Link
              to="/vip"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f172a] text-white rounded-full hover:bg-[#334155] transition-colors font-medium"
            >
              Tìm hiểu thêm
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
