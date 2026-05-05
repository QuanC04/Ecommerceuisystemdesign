import { Store } from "lucide-react";
import { Link } from "../router/Router";

interface Product {
  id: string;
  title: string;
  variant?: string;
  price: number;
  quantity: number;
  image: string;
}

interface ShopOrder {
  shopId: string;
  shopName: string;
  products: Product[];
}

interface CheckoutProductSummaryProps {
  orders: ShopOrder[];
}

export function CheckoutProductSummary({ orders }: CheckoutProductSummaryProps) {
  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <div
          key={order.shopId}
          className="bg-white rounded-xl border border-[#e2e8f0] overflow-hidden"
        >
          <div className="bg-[#fff7ed] px-4 py-3 border-b border-[#fcd34d] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Store className="w-4 h-4 text-[#0f172a]" />
              <span className="font-bold text-[#0f172a]">{order.shopName}</span>
            </div>
            <Link
              to={`/nguoi-ban/cua-hang/${order.shopId}`}
              className="text-sm text-[#0f172a] hover:text-[#334155]"
            >
              Xem shop
            </Link>
          </div>
          <div className="p-4 space-y-3">
            {order.products.map((product) => (
              <div key={product.id} className="flex gap-3">
                <div className="w-16 h-20 bg-[#fff7ed] rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-[#0f172a] line-clamp-2 text-sm mb-1">
                    {product.title}
                  </p>
                  {product.variant && (
                    <p className="text-xs text-[#64748b] mb-2">
                      {product.variant}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#64748b]">
                      x{product.quantity}
                    </span>
                    <span className="font-bold text-[#0f172a]">
                      {product.price.toLocaleString("vi-VN")}₫
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
