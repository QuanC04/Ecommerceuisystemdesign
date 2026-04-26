import { Trash2, Plus, Minus } from "lucide-react";
import { Link } from "../router/Router";
import { useState } from "react";

interface CartItem {
  id: string;
  title: string;
  author: string;
  price: number;
  quantity: number;
  image: string;
  shop: string;
}

export function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      title: "Nhà Giả Kim",
      author: "Paulo Coelho",
      price: 79000,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200",
      shop: "Nhà sách Văn Học",
    },
    {
      id: "2",
      title: "Sapiens: Lược Sử Loài Người",
      author: "Yuval Noah Harari",
      price: 189000,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=200",
      shop: "Nhà sách Tri Thức",
    },
    {
      id: "3",
      title: "Đắc Nhân Tâm",
      author: "Dale Carnegie",
      price: 65000,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=200",
      shop: "Nhà sách Phương Nam",
    },
  ]);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 30000;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl p-12 text-center border border-[#e2e8f0]">
          <div className="w-24 h-24 bg-[#fff7ed] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-[#64748b]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#0f172a] mb-3">
            Giỏ hàng trống
          </h2>
          <p className="text-[#64748b] mb-6">
            Bạn chưa có sản phẩm nào trong giỏ hàng
          </p>
          <Link
            to="/san-pham"
            className="inline-block px-8 py-3 bg-[#0f172a] text-white rounded-full hover:bg-[#334155]"
          >
            Tiếp tục mua sắm
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#0f172a] mb-8">
        Giỏ hàng ({cartItems.length})
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-[#e2e8f0]"
            >
              <div className="flex gap-4">
                <div className="w-24 h-32 bg-[#fff7ed] rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-[#0f172a] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#64748b] mb-2">
                        {item.author}
                      </p>
                      <p className="text-sm text-[#64748b] mb-4">{item.shop}</p>
                      <p className="text-xl font-bold text-[#0f172a]">
                        {item.price.toLocaleString("vi-VN")}₫
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-[#64748b] hover:text-[#dc2626]"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center border border-[#e2e8f0] rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-2 hover:bg-[#f1f5f9]"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 py-2 border-x border-[#e2e8f0] min-w-[60px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-2 hover:bg-[#f1f5f9]"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-[#64748b]">
                      Tổng:{" "}
                      <span className="font-bold text-[#0f172a]">
                        {(item.price * item.quantity).toLocaleString("vi-VN")}₫
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0] sticky top-24">
            <h3 className="font-bold text-[#0f172a] mb-4">Tóm tắt đơn hàng</h3>
            <div className="space-y-3 mb-6">
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
              to="/thanh-toan"
              className="block w-full py-4 bg-[#0f172a] text-white text-center rounded-full hover:bg-[#334155] transition-colors mb-3"
            >
              Tiến hành thanh toán
            </Link>
            <Link
              to="/san-pham"
              className="block w-full py-4 border-2 border-[#0f172a] text-[#0f172a] text-center rounded-full hover:bg-[#fff7ed] transition-colors"
            >
              Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
