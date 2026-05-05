import {
  TrendingUp,
  Package,
  ShoppingCart,
  DollarSign,
  Eye,
  AlertCircle,
  Bell,
  Star,
  Plus,
  FileText,
  Settings,
  BarChart3,
  Users,
  Clock,
} from "lucide-react";
import { SellerKPICard } from "../components/SellerKPICard";
import { SellerNotificationCard } from "../components/SellerNotificationCard";
import { SellerQuickAction } from "../components/SellerQuickAction";

export function SellerDashboardPage() {
  const stats = [
    {
      label: "Doanh thu tháng này",
      value: "12.450.000₫",
      change: "+12.5%",
      trend: "up" as const,
      icon: DollarSign,
      color: "green" as const,
    },
    {
      label: "Đơn hàng mới",
      value: "24",
      change: "+8.2%",
      trend: "up" as const,
      icon: ShoppingCart,
      color: "blue" as const,
    },
    {
      label: "Sản phẩm đang bán",
      value: "156",
      change: "-2.1%",
      trend: "down" as const,
      icon: Package,
      color: "purple" as const,
    },
    {
      label: "Lượt xem cửa hàng",
      value: "3,245",
      change: "+15.8%",
      trend: "up" as const,
      icon: Eye,
      color: "amber" as const,
    },
  ];

  const additionalStats = [
    { label: "Tỷ lệ hoàn thành đơn", value: "98.5%", icon: BarChart3 },
    { label: "Đánh giá trung bình", value: "4.8/5", icon: Star },
    { label: "Thời gian phản hồi", value: "< 2h", icon: Clock },
    { label: "Người theo dõi", value: "3,456", icon: Users },
  ];

  const recentOrders = [
    {
      id: "ORD-2026-001",
      customer: "Nguyễn Thị B",
      product: "Nhà Giả Kim",
      amount: 79000,
      status: "Chờ xử lý",
      date: "25/04/2026",
    },
    {
      id: "ORD-2026-002",
      customer: "Trần Văn C",
      product: "Sapiens",
      amount: 189000,
      status: "Đang giao",
      date: "25/04/2026",
    },
    {
      id: "ORD-2026-003",
      customer: "Lê Thị D",
      product: "Đắc Nhân Tâm",
      amount: 65000,
      status: "Hoàn thành",
      date: "24/04/2026",
    },
  ];

  const topProducts = [
    {
      name: "Nhà Giả Kim",
      sold: 125,
      revenue: 9875000,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=100",
    },
    {
      name: "Sapiens",
      sold: 98,
      revenue: 18522000,
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=100",
    },
    {
      name: "Đắc Nhân Tâm",
      sold: 87,
      revenue: 5655000,
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=100",
    },
  ];

  const notifications = [
    {
      icon: AlertCircle,
      title: "3 sản phẩm sắp hết hàng",
      message: "Cập nhật tồn kho để tránh mất đơn hàng",
      time: "10 phút trước",
      color: "red" as const,
      action: "Xem chi tiết",
    },
    {
      icon: ShoppingCart,
      title: "5 đơn hàng chờ xác nhận",
      message: "Xác nhận đơn hàng trong vòng 24h để tránh hủy tự động",
      time: "30 phút trước",
      color: "amber" as const,
      action: "Xử lý ngay",
    },
    {
      icon: Star,
      title: "Bạn có 3 đánh giá mới",
      message: "Khách hàng đã để lại đánh giá cho cửa hàng",
      time: "1 giờ trước",
      color: "blue" as const,
      action: "Xem đánh giá",
    },
  ];

  const quickActions = [
    { to: "/nguoi-ban/san-pham/them", icon: Plus, label: "Thêm sản phẩm" },
    { to: "/nguoi-ban/don-hang", icon: FileText, label: "Quản lý đơn", badge: "5" },
    { to: "/nguoi-ban/thong-ke", icon: BarChart3, label: "Thống kê" },
    { to: "/nguoi-ban/cai-dat", icon: Settings, label: "Cài đặt" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#0f172a] mb-2">Dashboard</h1>
          <p className="text-[#64748b]">
            Chào mừng quay lại, Nhà sách Văn Học
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-3 bg-white border border-[#e2e8f0] rounded-xl hover:bg-[#fff7ed] transition-colors relative">
            <Bell className="w-5 h-5 text-[#0f172a]" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
              8
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <SellerKPICard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {additionalStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-4 border border-[#e2e8f0]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#fff7ed] rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#fcd34d]" />
                </div>
                <div>
                  <p className="text-xl font-bold text-[#0f172a]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#64748b]">{stat.label}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
            <h2 className="text-xl font-bold text-[#0f172a] mb-6">
              Biểu đồ doanh thu 7 ngày
            </h2>
            <div className="h-64 flex items-end justify-around gap-4">
              {[
                { day: "T2", value: 65 },
                { day: "T3", value: 45 },
                { day: "T4", value: 80 },
                { day: "T5", value: 55 },
                { day: "T6", value: 90 },
                { day: "T7", value: 70 },
                { day: "CN", value: 75 },
              ].map((item) => (
                <div key={item.day} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-[#fcd34d] rounded-t-lg hover:bg-[#0f172a] transition-colors cursor-pointer"
                    style={{ height: `${item.value}%` }}
                  ></div>
                  <p className="mt-3 text-sm font-medium text-[#64748b]">
                    {item.day}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
              <h2 className="text-xl font-bold text-[#0f172a] mb-6">
                Đơn hàng gần đây
              </h2>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between p-4 border border-[#e2e8f0] rounded-xl hover:border-[#fcd34d] transition-colors"
                  >
                    <div className="flex-1">
                      <p className="font-bold text-[#0f172a] mb-1">{order.id}</p>
                      <p className="text-sm text-[#64748b] mb-1">
                        {order.customer} • {order.product}
                      </p>
                      <p className="text-sm text-[#64748b]">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-[#0f172a] mb-2">
                        {order.amount.toLocaleString("vi-VN")}₫
                      </p>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === "Chờ xử lý"
                            ? "bg-[#fde68a] text-[#0f172a]"
                            : order.status === "Đang giao"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-green-100 text-green-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
              <h2 className="text-xl font-bold text-[#0f172a] mb-6">
                Sản phẩm bán chạy
              </h2>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div
                    key={product.name}
                    className="flex items-center gap-4 p-4 border border-[#e2e8f0] rounded-xl hover:border-[#fcd34d] transition-colors"
                  >
                    <div className="w-8 h-8 bg-[#fcd34d] rounded-full flex items-center justify-center font-bold text-[#0f172a]">
                      {index + 1}
                    </div>
                    <div className="w-16 h-20 bg-[#fff7ed] rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-[#0f172a] mb-1">
                        {product.name}
                      </p>
                      <p className="text-sm text-[#64748b]">
                        Đã bán: {product.sold}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-[#0f172a]">
                        {product.revenue.toLocaleString("vi-VN")}₫
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-[#0f172a]">Truy cập nhanh</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action) => (
                <SellerQuickAction key={action.to} {...action} />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-[#0f172a]">Thông báo</h2>
              <button className="text-sm text-[#0f172a] hover:text-[#334155] font-medium">
                Xem tất cả
              </button>
            </div>
            <div className="space-y-3">
              {notifications.map((notification, index) => (
                <SellerNotificationCard key={index} {...notification} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
