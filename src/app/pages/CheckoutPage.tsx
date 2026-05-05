import {
  MapPin,
  CreditCard,
  Truck,
  FileText,
  Shield,
  AlertCircle,
  ChevronRight,
  Home,
  Loader2,
} from "lucide-react";
import { useState } from "react";
import { Link } from "../router/Router";
import { AddressSelector } from "../components/AddressSelector";
import { ShippingMethodSelector } from "../components/ShippingMethodSelector";
import { PaymentMethodSelector } from "../components/PaymentMethodSelector";
import { CheckoutProductSummary } from "../components/CheckoutProductSummary";
import { VoucherInput } from "../components/VoucherInput";

export function CheckoutPage() {
  const [selectedAddress, setSelectedAddress] = useState("1");
  const [selectedShipping, setSelectedShipping] = useState("standard");
  const [selectedPayment, setSelectedPayment] = useState("cod");
  const [orderNote, setOrderNote] = useState("");
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [voucherError, setVoucherError] = useState<string | null>(null);

  const addresses = [
    {
      id: "1",
      name: "Nguyễn Văn A",
      phone: "0912 345 678",
      address: "123 Đường Lê Lợi, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh",
      isDefault: true,
    },
    {
      id: "2",
      name: "Nguyễn Văn A",
      phone: "0912 345 678",
      address: "456 Đường Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh",
      isDefault: false,
    },
  ];

  const shippingMethods = [
    {
      id: "standard",
      name: "Giao hàng tiêu chuẩn",
      description: "Giao hàng trong 2-3 ngày làm việc",
      price: 30000,
      estimatedDays: "Dự kiến giao: 27-28/04/2026",
    },
    {
      id: "express",
      name: "Giao hàng nhanh",
      description: "Giao hàng trong 24 giờ",
      price: 50000,
      estimatedDays: "Dự kiến giao: 26/04/2026",
    },
    {
      id: "free",
      name: "Miễn phí vận chuyển",
      description: "Giao hàng trong 3-5 ngày làm việc",
      price: 0,
      estimatedDays: "Dự kiến giao: 28-30/04/2026",
    },
  ];

  const paymentMethods = [
    {
      id: "cod",
      name: "Thanh toán khi nhận hàng (COD)",
      description: "Thanh toán bằng tiền mặt khi nhận hàng",
      icon: "cash" as const,
    },
    {
      id: "bank",
      name: "Chuyển khoản ngân hàng",
      description: "Chuyển khoản qua ví điện tử hoặc ngân hàng",
      icon: "wallet" as const,
    },
    {
      id: "card",
      name: "Thẻ tín dụng/ghi nợ",
      description: "Visa, Mastercard, JCB",
      icon: "card" as const,
    },
  ];

  const orders = [
    {
      shopId: "van-hoc",
      shopName: "Nhà sách Văn Học",
      products: [
        {
          id: "1",
          title: "Nhà Giả Kim",
          variant: "Bìa cứng - Tiếng Việt",
          price: 79000,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200",
        },
      ],
    },
    {
      shopId: "tri-thuc",
      shopName: "Nhà sách Tri Thức",
      products: [
        {
          id: "2",
          title: "Sapiens: Lược Sử Loài Người",
          variant: "Bìa mềm - Tiếng Anh",
          price: 189000,
          quantity: 2,
          image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=200",
        },
      ],
    },
  ];

  const subtotal = orders.reduce(
    (sum, order) =>
      sum +
      order.products.reduce((s, p) => s + p.price * p.quantity, 0),
    0
  );
  const selectedShippingMethod = shippingMethods.find(
    (m) => m.id === selectedShipping
  );
  const shipping = selectedShippingMethod?.price || 0;
  const discount = 0;
  const total = subtotal + shipping - discount;

  const handlePlaceOrder = () => {
    if (!selectedAddress) {
      return;
    }
    setIsPlacingOrder(true);
    setTimeout(() => {
      window.location.href = "/don-hang-thanh-cong";
    }, 2000);
  };

  const handleApplyVoucher = (code: string) => {
    if (code === "INVALID") {
      setVoucherError("Mã giảm giá không hợp lệ hoặc đã hết hạn");
    } else {
      setVoucherError(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 md:py-8 pb-32 md:pb-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[#64748b] mb-6">
        <Link to="/" className="hover:text-[#0f172a]">
          <Home className="w-4 h-4" />
        </Link>
        <ChevronRight className="w-4 h-4" />
        <Link to="/gio-hang" className="hover:text-[#0f172a]">
          Giỏ hàng
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-[#0f172a] font-medium">Thanh toán</span>
      </nav>

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-2">
          Thanh toán
        </h1>
        <p className="text-[#64748b]">
          Vui lòng kiểm tra thông tin đơn hàng trước khi đặt mua
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Delivery Address */}
          <section className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#fcd34d] rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#0f172a]" />
              </div>
              <h2 className="text-xl font-bold text-[#0f172a]">
                Địa chỉ giao hàng
              </h2>
            </div>
            <AddressSelector
              addresses={addresses}
              selectedId={selectedAddress}
              onSelect={setSelectedAddress}
              onAddNew={() => alert("Thêm địa chỉ mới")}
            />
          </section>

          {/* Products Summary */}
          <section className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
            <h2 className="text-xl font-bold text-[#0f172a] mb-4">
              Sản phẩm đã chọn
            </h2>
            <CheckoutProductSummary orders={orders} />
          </section>

          {/* Shipping Method */}
          <section className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#fcd34d] rounded-full flex items-center justify-center">
                <Truck className="w-5 h-5 text-[#0f172a]" />
              </div>
              <h2 className="text-xl font-bold text-[#0f172a]">
                Phương thức vận chuyển
              </h2>
            </div>
            <ShippingMethodSelector
              methods={shippingMethods}
              selectedId={selectedShipping}
              onSelect={setSelectedShipping}
            />
          </section>

          {/* Payment Method */}
          <section className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#fcd34d] rounded-full flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-[#0f172a]" />
              </div>
              <h2 className="text-xl font-bold text-[#0f172a]">
                Phương thức thanh toán
              </h2>
            </div>
            <PaymentMethodSelector
              methods={paymentMethods}
              selectedId={selectedPayment}
              onSelect={setSelectedPayment}
            />
          </section>

          {/* Order Note */}
          <section className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#fcd34d] rounded-full flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#0f172a]" />
              </div>
              <h2 className="text-xl font-bold text-[#0f172a]">
                Ghi chú đơn hàng
              </h2>
            </div>
            <textarea
              value={orderNote}
              onChange={(e) => setOrderNote(e.target.value)}
              placeholder="Ghi chú cho người bán (tùy chọn)"
              rows={4}
              className="w-full px-4 py-3 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d] resize-none"
            />
          </section>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-1">
          <div className="space-y-6 sticky top-24">
            {/* Voucher */}
            <div>
              <VoucherInput onApply={handleApplyVoucher} />
              {voucherError && (
                <div className="mt-3 flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-600">{voucherError}</p>
                </div>
              )}
            </div>

            {/* Order Total */}
            <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
              <h3 className="font-bold text-[#0f172a] mb-4">Tổng đơn hàng</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-[#64748b]">
                  <span>Tạm tính</span>
                  <span>{subtotal.toLocaleString("vi-VN")}₫</span>
                </div>
                <div className="flex items-center justify-between text-[#64748b]">
                  <span>Phí vận chuyển</span>
                  <span>
                    {shipping === 0
                      ? "Miễn phí"
                      : `${shipping.toLocaleString("vi-VN")}₫`}
                  </span>
                </div>
                {discount > 0 && (
                  <div className="flex items-center justify-between text-[#dc2626]">
                    <span>Giảm giá</span>
                    <span>-{discount.toLocaleString("vi-VN")}₫</span>
                  </div>
                )}
              </div>
              <div className="border-t border-[#e2e8f0] pt-4 mb-6">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-[#0f172a]">Tổng cộng</span>
                  <span className="text-2xl font-bold text-[#0f172a]">
                    {total.toLocaleString("vi-VN")}₫
                  </span>
                </div>
                <p className="text-sm text-[#64748b]">(Đã bao gồm VAT)</p>
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={!selectedAddress || isPlacingOrder}
                className="w-full py-4 bg-[#0f172a] text-white rounded-full hover:bg-[#334155] disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-bold flex items-center justify-center gap-2"
              >
                {isPlacingOrder ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Đang xử lý...</span>
                  </>
                ) : (
                  <span>Đặt hàng</span>
                )}
              </button>

              {!selectedAddress && (
                <div className="mt-3 flex items-start gap-2 p-3 bg-[#fff7ed] border border-[#fcd34d] rounded-lg">
                  <AlertCircle className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#0f172a]">
                    Vui lòng chọn địa chỉ giao hàng
                  </p>
                </div>
              )}

              <div className="mt-4 flex items-start gap-2 text-sm text-[#64748b]">
                <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <p>
                  Đơn hàng của bạn được bảo vệ bởi chính sách đổi trả trong
                  vòng 7 ngày
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#e2e8f0] p-4 z-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm text-[#64748b]">Tổng thanh toán</p>
              <p className="text-xl font-bold text-[#0f172a]">
                {total.toLocaleString("vi-VN")}₫
              </p>
            </div>
            <button
              onClick={handlePlaceOrder}
              disabled={!selectedAddress || isPlacingOrder}
              className="px-8 py-3 bg-[#0f172a] text-white rounded-full hover:bg-[#334155] disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-bold flex items-center gap-2"
            >
              {isPlacingOrder ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Đang xử lý...</span>
                </>
              ) : (
                <span>Đặt hàng</span>
              )}
            </button>
          </div>
          {!selectedAddress && (
            <div className="flex items-center gap-2 p-2 bg-[#fff7ed] border border-[#fcd34d] rounded-lg">
              <AlertCircle className="w-4 h-4 text-[#0f172a] flex-shrink-0" />
              <p className="text-xs text-[#0f172a]">
                Vui lòng chọn địa chỉ giao hàng
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
