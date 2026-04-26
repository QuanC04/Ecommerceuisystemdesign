import {
  TrendingUp,
  Package,
  ShoppingCart,
  DollarSign,
  Eye,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

export function SellerDashboardPage() {
  const stats = [
    {
      label: "Doanh thu tháng này",
      value: "12.450.000₫",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
    },
    {
      label: "Đơn hàng mới",
      value: "24",
      change: "+8.2%",
      trend: "up",
      icon: ShoppingCart,
    },
    {
      label: "Sản phẩm đang bán",
      value: "156",
      change: "-2.1%",
      trend: "down",
      icon: Package,
    },
    {
      label: "Lượt xem cửa hàng",
      value: "3,245",
      change: "+15.8%",
      trend: "up",
      icon: Eye,
    },
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

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#0f172a] mb-2">Dashboard</h1>
        <p className="text-[#64748b]">
          Chào mừng quay lại, Nhà sách Văn Học
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-6 border border-[#e2e8f0]"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-[#fcd34d] rounded-full flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#0f172a]" />
                </div>
                <div
                  className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium ${
                    stat.trend === "up"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {stat.trend === "up" ? (
                    <ArrowUp className="w-4 h-4" />
                  ) : (
                    <ArrowDown className="w-4 h-4" />
                  )}
                  <span>{stat.change}</span>
                </div>
              </div>
              <p className="text-2xl font-bold text-[#0f172a] mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-[#64748b]">{stat.label}</p>
            </div>
          );
        })}
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

      <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
        <h2 className="text-xl font-bold text-[#0f172a] mb-6">
          Biểu đồ doanh thu
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
    </div>
  );
}
