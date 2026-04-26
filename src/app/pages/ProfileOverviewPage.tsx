import { Package, Heart, ShoppingBag, Clock } from "lucide-react";
import { Link } from "../router/Router";

export function ProfileOverviewPage() {
  const recentOrders = [
    {
      id: "ORD-001",
      date: "25/04/2026",
      total: 487000,
      status: "Đang giao",
      items: 3,
    },
    {
      id: "ORD-002",
      date: "20/04/2026",
      total: 235000,
      status: "Đã giao",
      items: 2,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
        <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
          Chào mừng trở lại, Nguyễn Văn A!
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#fff7ed] rounded-xl p-4 text-center">
            <Package className="w-8 h-8 text-[#fcd34d] mx-auto mb-2" />
            <p className="text-2xl font-bold text-[#0f172a]">12</p>
            <p className="text-sm text-[#64748b]">Đơn hàng</p>
          </div>
          <div className="bg-[#fff7ed] rounded-xl p-4 text-center">
            <ShoppingBag className="w-8 h-8 text-[#fcd34d] mx-auto mb-2" />
            <p className="text-2xl font-bold text-[#0f172a]">3</p>
            <p className="text-sm text-[#64748b]">Đang xử lý</p>
          </div>
          <div className="bg-[#fff7ed] rounded-xl p-4 text-center">
            <Clock className="w-8 h-8 text-[#fcd34d] mx-auto mb-2" />
            <p className="text-2xl font-bold text-[#0f172a]">5</p>
            <p className="text-sm text-[#64748b]">Chờ đánh giá</p>
          </div>
          <div className="bg-[#fff7ed] rounded-xl p-4 text-center">
            <Heart className="w-8 h-8 text-[#fcd34d] mx-auto mb-2" />
            <p className="text-2xl font-bold text-[#0f172a]">28</p>
            <p className="text-sm text-[#64748b]">Yêu thích</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-[#0f172a]">Đơn hàng gần đây</h3>
          <Link
            to="/tai-khoan/don-hang"
            className="text-[#0f172a] hover:text-[#334155]"
          >
            Xem tất cả
          </Link>
        </div>
        <div className="space-y-4">
          {recentOrders.map((order) => (
            <div
              key={order.id}
              className="border border-[#e2e8f0] rounded-xl p-4 hover:border-[#fcd34d] transition-colors"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-bold text-[#0f172a]">{order.id}</p>
                  <p className="text-sm text-[#64748b]">{order.date}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    order.status === "Đang giao"
                      ? "bg-[#fde68a] text-[#0f172a]"
                      : "bg-[#fff7ed] text-[#0f172a]"
                  }`}
                >
                  {order.status}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#64748b]">{order.items} sản phẩm</p>
                <p className="font-bold text-[#0f172a]">
                  {order.total.toLocaleString("vi-VN")}₫
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
        <h3 className="text-xl font-bold text-[#0f172a] mb-4">
          Truy cập nhanh
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            to="/tai-khoan/dia-chi"
            className="flex items-center gap-4 p-4 border border-[#e2e8f0] rounded-xl hover:border-[#fcd34d] hover:bg-[#fff7ed] transition-all"
          >
            <div className="w-12 h-12 bg-[#fcd34d] rounded-full flex items-center justify-center">
              <Package className="w-6 h-6 text-[#0f172a]" />
            </div>
            <div>
              <p className="font-bold text-[#0f172a]">Quản lý địa chỉ</p>
              <p className="text-sm text-[#64748b]">Cập nhật địa chỉ giao hàng</p>
            </div>
          </Link>
          <Link
            to="/tai-khoan/bao-mat"
            className="flex items-center gap-4 p-4 border border-[#e2e8f0] rounded-xl hover:border-[#fcd34d] hover:bg-[#fff7ed] transition-all"
          >
            <div className="w-12 h-12 bg-[#fcd34d] rounded-full flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-[#0f172a]" />
            </div>
            <div>
              <p className="font-bold text-[#0f172a]">Bảo mật tài khoản</p>
              <p className="text-sm text-[#64748b]">Đổi mật khẩu, xác thực 2 lớp</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
