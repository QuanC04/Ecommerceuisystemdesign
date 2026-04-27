import { Trash2, ShoppingBag, ChevronRight, Home, Store } from "lucide-react";
import { Link } from "../router/Router";
import { useState } from "react";
import { CartItemCard } from "../components/CartItemCard";
import { VoucherInput } from "../components/VoucherInput";
import { OrderSummary } from "../components/OrderSummary";

interface CartItem {
  id: string;
  title: string;
  author: string;
  variant?: string;
  price: number;
  quantity: number;
  image: string;
  shop: string;
  shopId: string;
}

interface ShopGroup {
  shopId: string;
  shopName: string;
  items: CartItem[];
}

export function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      title: "Nhà Giả Kim",
      author: "Paulo Coelho",
      variant: "Bìa cứng - Tiếng Việt",
      price: 79000,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200",
      shop: "Nhà sách Văn Học",
      shopId: "van-hoc",
    },
    {
      id: "2",
      title: "Sapiens: Lược Sử Loài Người",
      author: "Yuval Noah Harari",
      variant: "Bìa mềm - Tiếng Anh",
      price: 189000,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=200",
      shop: "Nhà sách Tri Thức",
      shopId: "tri-thuc",
    },
    {
      id: "3",
      title: "Đắc Nhân Tâm",
      author: "Dale Carnegie",
      price: 65000,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=200",
      shop: "Nhà sách Phương Nam",
      shopId: "phuong-nam",
    },
    {
      id: "4",
      title: "Atomic Habits",
      author: "James Clear",
      variant: "Bìa mềm - Tiếng Việt",
      price: 119000,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200",
      shop: "Nhà sách Văn Học",
      shopId: "van-hoc",
    },
  ]);

  const [selectedItems, setSelectedItems] = useState<string[]>(
    cartItems.map((item) => item.id)
  );

  const groupByShop = (): ShopGroup[] => {
    const groups: { [key: string]: ShopGroup } = {};

    cartItems.forEach((item) => {
      if (!groups[item.shopId]) {
        groups[item.shopId] = {
          shopId: item.shopId,
          shopName: item.shop,
          items: [],
        };
      }
      groups[item.shopId].items.push(item);
    });

    return Object.values(groups);
  };

  const shopGroups = groupByShop();

  const toggleSelectAll = () => {
    if (selectedItems.length === cartItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems.map((item) => item.id));
    }
  };

  const toggleSelectShop = (shopId: string) => {
    const shopItems = cartItems
      .filter((item) => item.shopId === shopId)
      .map((item) => item.id);
    const allSelected = shopItems.every((id) => selectedItems.includes(id));

    if (allSelected) {
      setSelectedItems(selectedItems.filter((id) => !shopItems.includes(id)));
    } else {
      setSelectedItems([
        ...selectedItems,
        ...shopItems.filter((id) => !selectedItems.includes(id)),
      ]);
    }
  };

  const toggleSelectItem = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

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
    setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
  };

  const removeSelectedItems = () => {
    setCartItems(cartItems.filter((item) => !selectedItems.includes(item.id)));
    setSelectedItems([]);
  };

  const selectedCartItems = cartItems.filter((item) =>
    selectedItems.includes(item.id)
  );
  const subtotal = selectedCartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal >= 150000 ? 0 : 30000;
  const discount = 0;
  const total = subtotal + shipping - discount;

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl p-12 text-center border border-[#e2e8f0]">
          <div className="w-24 h-24 bg-[#fff7ed] rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-12 h-12 text-[#64748b]" />
          </div>
          <h2 className="text-2xl font-bold text-[#0f172a] mb-3">
            Giỏ hàng trống
          </h2>
          <p className="text-[#64748b] mb-6">
            Bạn chưa có sản phẩm nào trong giỏ hàng
          </p>
          <Link
            to="/san-pham"
            className="inline-block px-8 py-3 bg-[#0f172a] text-white rounded-full hover:bg-[#334155] font-medium"
          >
            Khám phá sản phẩm
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[#64748b] mb-6">
        <Link to="/" className="hover:text-[#0f172a]">
          <Home className="w-4 h-4" />
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-[#0f172a] font-medium">Giỏ hàng</span>
      </nav>

      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0f172a]">
          Giỏ hàng ({cartItems.length})
        </h1>
        <Link
          to="/san-pham"
          className="text-[#0f172a] hover:text-[#334155] font-medium flex items-center gap-2"
        >
          <span className="hidden sm:inline">Tiếp tục mua sắm</span>
          <ChevronRight className="w-5 h-5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {/* Select All & Remove */}
          <div className="bg-white rounded-xl p-4 border border-[#e2e8f0] flex items-center justify-between">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedItems.length === cartItems.length}
                onChange={toggleSelectAll}
                className="w-5 h-5 rounded border-[#cbd5e1] text-[#fcd34d] focus:ring-[#fcd34d]"
              />
              <span className="font-medium text-[#0f172a]">
                Chọn tất cả ({cartItems.length})
              </span>
            </label>
            {selectedItems.length > 0 && (
              <button
                onClick={removeSelectedItems}
                className="flex items-center gap-2 text-[#dc2626] hover:text-[#991b1b] font-medium"
              >
                <Trash2 className="w-5 h-5" />
                <span>Xóa ({selectedItems.length})</span>
              </button>
            )}
          </div>

          {/* Shop Groups */}
          {shopGroups.map((group) => {
            const shopItemIds = group.items.map((item) => item.id);
            const allShopItemsSelected = shopItemIds.every((id) =>
              selectedItems.includes(id)
            );

            return (
              <div
                key={group.shopId}
                className="bg-[#fff7ed] rounded-2xl p-4 md:p-6 border border-[#fcd34d]"
              >
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#fcd34d]">
                  <label className="flex items-center gap-3 cursor-pointer flex-1">
                    <input
                      type="checkbox"
                      checked={allShopItemsSelected}
                      onChange={() => toggleSelectShop(group.shopId)}
                      className="w-5 h-5 rounded border-[#cbd5e1] text-[#fcd34d] focus:ring-[#fcd34d]"
                    />
                    <div className="flex items-center gap-2">
                      <Store className="w-5 h-5 text-[#0f172a]" />
                      <span className="font-bold text-[#0f172a]">
                        {group.shopName}
                      </span>
                    </div>
                  </label>
                  <Link
                    to={`/nguoi-ban/cua-hang/${group.shopId}`}
                    className="text-sm text-[#0f172a] hover:text-[#334155] font-medium flex items-center gap-1"
                  >
                    <span className="hidden sm:inline">Xem shop</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="space-y-3">
                  {group.items.map((item) => (
                    <CartItemCard
                      key={item.id}
                      {...item}
                      selected={selectedItems.includes(item.id)}
                      onSelect={toggleSelectItem}
                      onQuantityChange={updateQuantity}
                      onRemove={removeItem}
                    />
                  ))}
                </div>
              </div>
            );
          })}

          {/* Voucher Input - Mobile */}
          <div className="lg:hidden">
            <VoucherInput />
          </div>

          {/* Selected Summary - Mobile */}
          {selectedItems.length > 0 && (
            <div className="lg:hidden bg-white rounded-xl p-4 border border-[#e2e8f0]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[#64748b]">
                  Đã chọn {selectedItems.length} sản phẩm
                </span>
                <span className="font-bold text-[#0f172a]">
                  {subtotal.toLocaleString("vi-VN")}₫
                </span>
              </div>
              <Link
                to="/thanh-toan"
                className="block w-full py-3 bg-[#0f172a] text-white text-center rounded-full hover:bg-[#334155] font-bold"
              >
                Thanh toán
              </Link>
            </div>
          )}
        </div>

        {/* Order Summary - Desktop */}
        <div className="hidden lg:block lg:col-span-1 space-y-6">
          <VoucherInput />
          {selectedItems.length > 0 ? (
            <OrderSummary
              subtotal={subtotal}
              shipping={shipping}
              discount={discount}
              total={total}
              itemCount={selectedItems.length}
            />
          ) : (
            <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0] text-center">
              <ShoppingBag className="w-12 h-12 text-[#64748b] mx-auto mb-3" />
              <p className="text-[#64748b]">
                Chọn sản phẩm để xem tổng giá trị
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom CTA - Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#e2e8f0] p-4 z-40">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div>
            <p className="text-sm text-[#64748b]">
              Tổng ({selectedItems.length} sản phẩm)
            </p>
            <p className="text-xl font-bold text-[#0f172a]">
              {total.toLocaleString("vi-VN")}₫
            </p>
          </div>
          <Link
            to="/thanh-toan"
            className="px-8 py-3 bg-[#0f172a] text-white rounded-full hover:bg-[#334155] font-bold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Thanh toán
          </Link>
        </div>
      </div>
    </div>
  );
}
