import { CheckCircle, Package, Home } from "lucide-react";
import { Link } from "../router/Router";

export function OrderSuccessPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="bg-white rounded-2xl p-12 text-center border border-[#e2e8f0]">
        <div className="w-24 h-24 bg-[#fcd34d] rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-12 h-12 text-[#0f172a]" />
        </div>
        <h1 className="text-3xl font-bold text-[#0f172a] mb-4">
          Đặt hàng thành công!
        </h1>
        <p className="text-lg text-[#64748b] mb-8">
          Cảm ơn bạn đã mua hàng tại Bookora. Đơn hàng của bạn đang được xử lý.
        </p>

        <div className="bg-[#fff7ed] rounded-2xl p-6 mb-8 text-left">
          <h2 className="font-bold text-[#0f172a] mb-4">Thông tin đơn hàng</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-[#64748b]">Mã đơn hàng:</span>
              <span className="font-bold text-[#0f172a]">#ORD-2026-04-001</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#64748b]">Ngày đặt:</span>
              <span className="text-[#0f172a]">25/04/2026</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#64748b]">Tổng tiền:</span>
              <span className="font-bold text-[#0f172a]">487.000₫</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#64748b]">Phương thức thanh toán:</span>
              <span className="text-[#0f172a]">COD</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#64748b]">Dự kiến giao hàng:</span>
              <span className="text-[#0f172a]">27-28/04/2026</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-6 mb-8 text-left">
          <h3 className="font-bold text-[#0f172a] mb-3">Địa chỉ giao hàng</h3>
          <p className="text-[#0f172a] mb-1">
            <span className="font-medium">Nguyễn Văn A</span> | 0912 345 678
          </p>
          <p className="text-[#64748b]">
            123 Đường Lê Lợi, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/tai-khoan"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-[#0f172a] text-white rounded-full hover:bg-[#334155] transition-colors"
          >
            <Package className="w-5 h-5" />
            <span>Xem đơn hàng</span>
          </Link>
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#0f172a] text-[#0f172a] rounded-full hover:bg-[#fff7ed] transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>Về trang chủ</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
