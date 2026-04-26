import { MapPin, CreditCard, Truck } from "lucide-react";
import { Link } from "../router/Router";

export function CheckoutPage() {
  const cartItems = [
    {
      id: "1",
      title: "Nhà Giả Kim",
      price: 79000,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200",
    },
    {
      id: "2",
      title: "Sapiens: Lược Sử Loài Người",
      price: 189000,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=200",
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 30000;
  const total = subtotal + shipping;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#0f172a] mb-8">Thanh toán</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#fcd34d] rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#0f172a]" />
              </div>
              <h2 className="text-xl font-bold text-[#0f172a]">
                Địa chỉ giao hàng
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 border-2 border-[#fcd34d] rounded-xl bg-[#fff7ed]">
                <input
                  type="radio"
                  name="address"
                  defaultChecked
                  className="mt-1"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold text-[#0f172a]">
                      Nguyễn Văn A
                    </span>
                    <span className="text-[#64748b]">| 0912 345 678</span>
                  </div>
                  <p className="text-[#475569]">
                    123 Đường Lê Lợi, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh
                  </p>
                  <span className="inline-block mt-2 px-3 py-1 bg-[#fcd34d] text-[#0f172a] text-xs font-medium rounded-full">
                    Mặc định
                  </span>
                </div>
              </div>
              <button className="text-[#0f172a] hover:text-[#334155] font-medium">
                + Thêm địa chỉ mới
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#fcd34d] rounded-full flex items-center justify-center">
                <Truck className="w-5 h-5 text-[#0f172a]" />
              </div>
              <h2 className="text-xl font-bold text-[#0f172a]">
                Phương thức vận chuyển
              </h2>
            </div>
            <div className="space-y-3">
              <label className="flex items-center gap-4 p-4 border-2 border-[#fcd34d] rounded-xl bg-[#fff7ed] cursor-pointer">
                <input type="radio" name="shipping" defaultChecked />
                <div className="flex-1">
                  <p className="font-bold text-[#0f172a]">Giao hàng tiêu chuẩn</p>
                  <p className="text-sm text-[#64748b]">Nhận hàng trong 2-3 ngày</p>
                </div>
                <span className="font-bold text-[#0f172a]">30.000₫</span>
              </label>
              <label className="flex items-center gap-4 p-4 border border-[#e2e8f0] rounded-xl cursor-pointer hover:border-[#fcd34d]">
                <input type="radio" name="shipping" />
                <div className="flex-1">
                  <p className="font-bold text-[#0f172a]">Giao hàng nhanh</p>
                  <p className="text-sm text-[#64748b]">Nhận hàng trong 24 giờ</p>
                </div>
                <span className="font-bold text-[#0f172a]">50.000₫</span>
              </label>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#fcd34d] rounded-full flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-[#0f172a]" />
              </div>
              <h2 className="text-xl font-bold text-[#0f172a]">
                Phương thức thanh toán
              </h2>
            </div>
            <div className="space-y-3">
              <label className="flex items-center gap-4 p-4 border-2 border-[#fcd34d] rounded-xl bg-[#fff7ed] cursor-pointer">
                <input type="radio" name="payment" defaultChecked />
                <div className="flex-1">
                  <p className="font-bold text-[#0f172a]">
                    Thanh toán khi nhận hàng (COD)
                  </p>
                  <p className="text-sm text-[#64748b]">
                    Thanh toán bằng tiền mặt khi nhận hàng
                  </p>
                </div>
              </label>
              <label className="flex items-center gap-4 p-4 border border-[#e2e8f0] rounded-xl cursor-pointer hover:border-[#fcd34d]">
                <input type="radio" name="payment" />
                <div className="flex-1">
                  <p className="font-bold text-[#0f172a]">
                    Chuyển khoản ngân hàng
                  </p>
                  <p className="text-sm text-[#64748b]">
                    Chuyển khoản qua ví điện tử hoặc ngân hàng
                  </p>
                </div>
              </label>
              <label className="flex items-center gap-4 p-4 border border-[#e2e8f0] rounded-xl cursor-pointer hover:border-[#fcd34d]">
                <input type="radio" name="payment" />
                <div className="flex-1">
                  <p className="font-bold text-[#0f172a]">Thẻ tín dụng/ghi nợ</p>
                  <p className="text-sm text-[#64748b]">
                    Visa, Mastercard, JCB
                  </p>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0] sticky top-24">
            <h3 className="font-bold text-[#0f172a] mb-4">Đơn hàng</h3>
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="w-16 h-20 bg-[#fff7ed] rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-[#0f172a] text-sm line-clamp-2 mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm text-[#64748b]">x{item.quantity}</p>
                    <p className="font-bold text-[#0f172a] text-sm">
                      {item.price.toLocaleString("vi-VN")}₫
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-3 mb-6 pt-6 border-t border-[#e2e8f0]">
              <div className="flex justify-between">
                <span className="text-[#64748b]">Tạm tính</span>
                <span className="text-[#0f172a]">
                  {subtotal.toLocaleString("vi-VN")}₫
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748b]">Phí vận chuyển</span>
                <span className="text-[#0f172a]">
                  {shipping.toLocaleString("vi-VN")}₫
                </span>
              </div>
              <div className="border-t border-[#e2e8f0] pt-3 flex justify-between">
                <span className="font-bold text-[#0f172a]">Tổng cộng</span>
                <span className="text-xl font-bold text-[#0f172a]">
                  {total.toLocaleString("vi-VN")}₫
                </span>
              </div>
            </div>
            <Link
              to="/don-hang-thanh-cong"
              className="block w-full py-4 bg-[#0f172a] text-white text-center rounded-full hover:bg-[#334155] transition-colors"
            >
              Đặt hàng
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
