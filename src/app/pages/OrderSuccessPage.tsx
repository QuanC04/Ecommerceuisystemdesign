import {
  CheckCircle,
  Package,
  Home,
  Copy,
  MapPin,
  CreditCard,
  Truck,
  Calendar,
  Receipt,
  ShoppingBag,
  Gift,
} from "lucide-react";
import { Link } from "../router/Router";
import { useState } from "react";
import { OrderSuccessTimeline } from "../components/OrderSuccessTimeline";
import { OrderItemSummary } from "../components/OrderItemSummary";
import { ProductCard } from "../components/ProductCard";

export function OrderSuccessPage() {
  const [copied, setCopied] = useState(false);

  const orderCode = "ORD-2026-04-001";
  const orderDate = "25/04/2026";
  const estimatedDelivery = "27-28/04/2026";

  const orderItems = [
    {
      id: "1",
      title: "Nhà Giả Kim",
      variant: "Bìa cứng - Tiếng Việt",
      price: 79000,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200",
    },
    {
      id: "2",
      title: "Sapiens: Lược Sử Loài Người",
      variant: "Bìa mềm - Tiếng Anh",
      price: 189000,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=200",
    },
  ];

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 30000;
  const discount = 0;
  const total = subtotal + shipping - discount;

  const recommendedProducts = [
    {
      id: "3",
      title: "Đắc Nhân Tâm",
      author: "Dale Carnegie",
      price: 65000,
      originalPrice: 85000,
      rating: 4.7,
      sold: 3500,
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400",
      shop: "Nhà sách Phương Nam",
    },
    {
      id: "4",
      title: "Atomic Habits",
      author: "James Clear",
      price: 119000,
      originalPrice: 149000,
      rating: 4.8,
      sold: 2800,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
      shop: "Nhà sách Văn Học",
    },
    {
      id: "5",
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: 149000,
      originalPrice: 189000,
      rating: 4.9,
      sold: 3200,
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400",
      shop: "Nhà sách Kinh Tế",
    },
    {
      id: "6",
      title: "Deep Work",
      author: "Cal Newport",
      price: 109000,
      originalPrice: 139000,
      rating: 4.7,
      sold: 1900,
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400",
      shop: "Nhà sách Alpha Books",
    },
  ];

  const handleCopyOrderCode = () => {
    navigator.clipboard.writeText(orderCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#fff7ed]">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center mx-auto mb-6 animate-[bounce_1s_ease-in-out_3]">
            <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-white" />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-[#0f172a] mb-3">
            Đặt hàng thành công!
          </h1>
          <p className="text-base md:text-lg text-[#64748b] max-w-2xl mx-auto">
            Cảm ơn bạn đã mua hàng tại Bookora. Đơn hàng của bạn đang được xử lý
            và sẽ sớm được giao đến tay bạn.
          </p>
        </div>

        {/* Order Code Card */}
        <div className="bg-white rounded-2xl p-6 border-2 border-[#10b981] mb-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-sm text-[#64748b] mb-1">Mã đơn hàng</p>
              <p className="text-2xl font-bold text-[#0f172a]">{orderCode}</p>
            </div>
            <button
              onClick={handleCopyOrderCode}
              className="px-6 py-3 border-2 border-[#e2e8f0] rounded-full hover:border-[#fcd34d] hover:bg-[#fff7ed] transition-colors flex items-center gap-2 font-medium"
            >
              {copied ? (
                <>
                  <CheckCircle className="w-5 h-5 text-[#10b981]" />
                  <span>Đã sao chép</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  <span>Sao chép mã</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Order Timeline */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#e2e8f0] mb-6">
          <h2 className="font-bold text-[#0f172a] text-lg mb-6">
            Trạng thái đơn hàng
          </h2>
          <OrderSuccessTimeline />
        </div>

        {/* Order Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Order Info */}
          <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#fcd34d] rounded-full flex items-center justify-center">
                <Receipt className="w-5 h-5 text-[#0f172a]" />
              </div>
              <h3 className="font-bold text-[#0f172a]">Thông tin đơn hàng</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-[#64748b] mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-[#64748b]">Ngày đặt hàng</p>
                  <p className="font-medium text-[#0f172a]">{orderDate}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-[#64748b] mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-[#64748b]">Dự kiến giao hàng</p>
                  <p className="font-medium text-[#0f172a]">{estimatedDelivery}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CreditCard className="w-5 h-5 text-[#64748b] mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-[#64748b]">Phương thức thanh toán</p>
                  <p className="font-medium text-[#0f172a]">
                    Thanh toán khi nhận hàng (COD)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Address */}
          <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#fcd34d] rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#0f172a]" />
              </div>
              <h3 className="font-bold text-[#0f172a]">Địa chỉ giao hàng</h3>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <p className="font-medium text-[#0f172a]">Nguyễn Văn A</p>
                <span className="text-[#64748b]">|</span>
                <p className="text-[#64748b]">0912 345 678</p>
              </div>
              <p className="text-[#475569] leading-relaxed">
                123 Đường Lê Lợi, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh
              </p>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0] mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#fcd34d] rounded-full flex items-center justify-center">
              <Package className="w-5 h-5 text-[#0f172a]" />
            </div>
            <h3 className="font-bold text-[#0f172a]">Sản phẩm đã đặt</h3>
          </div>
          <OrderItemSummary items={orderItems} />

          <div className="border-t border-[#e2e8f0] mt-6 pt-6 space-y-3">
            <div className="flex justify-between text-[#64748b]">
              <span>Tạm tính</span>
              <span>{subtotal.toLocaleString("vi-VN")}₫</span>
            </div>
            <div className="flex justify-between text-[#64748b]">
              <span>Phí vận chuyển</span>
              <span>{shipping.toLocaleString("vi-VN")}₫</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-[#dc2626]">
                <span>Giảm giá</span>
                <span>-{discount.toLocaleString("vi-VN")}₫</span>
              </div>
            )}
            <div className="flex justify-between pt-3 border-t border-[#e2e8f0]">
              <span className="font-bold text-[#0f172a] text-lg">Tổng cộng</span>
              <span className="text-2xl font-bold text-[#0f172a]">
                {total.toLocaleString("vi-VN")}₫
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Link
            to="/tai-khoan"
            className="flex items-center justify-center gap-2 px-6 py-4 bg-[#0f172a] text-white rounded-full hover:bg-[#334155] transition-colors font-bold"
          >
            <Package className="w-5 h-5" />
            <span>Xem chi tiết đơn hàng</span>
          </Link>
          <Link
            to="/san-pham"
            className="flex items-center justify-center gap-2 px-6 py-4 border-2 border-[#0f172a] text-[#0f172a] rounded-full hover:bg-[#fff7ed] transition-colors font-bold"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Tiếp tục mua sắm</span>
          </Link>
        </div>

        {/* Trust Message */}
        <div className="bg-gradient-to-br from-[#fff7ed] to-white rounded-2xl p-6 border border-[#fcd34d] mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#fcd34d] rounded-full flex items-center justify-center flex-shrink-0">
              <Gift className="w-6 h-6 text-[#0f172a]" />
            </div>
            <div>
              <h3 className="font-bold text-[#0f172a] mb-2">
                Cảm ơn bạn đã tin tưởng Bookora!
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed mb-3">
                Chúng tôi sẽ gửi email xác nhận và cập nhật trạng thái đơn hàng
                cho bạn. Bạn cũng có thể theo dõi đơn hàng trong tài khoản của
                mình.
              </p>
              <p className="text-[#64748b] text-sm">
                Nếu có bất kỳ thắc mắc nào, vui lòng liên hệ{" "}
                <a
                  href="tel:19001234"
                  className="text-[#0f172a] font-medium hover:underline"
                >
                  1900 1234
                </a>{" "}
                hoặc email{" "}
                <a
                  href="mailto:support@bookora.vn"
                  className="text-[#0f172a] font-medium hover:underline"
                >
                  support@bookora.vn
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Products */}
      <div className="bg-white py-12 border-t border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
            Có thể bạn cũng thích
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
