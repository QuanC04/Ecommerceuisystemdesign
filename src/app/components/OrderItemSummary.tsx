interface OrderItem {
  id: string;
  title: string;
  variant?: string;
  price: number;
  quantity: number;
  image: string;
}

interface OrderItemSummaryProps {
  items: OrderItem[];
}

export function OrderItemSummary({ items }: OrderItemSummaryProps) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.id} className="flex gap-3">
          <div className="w-16 h-20 bg-[#fff7ed] rounded-lg overflow-hidden flex-shrink-0">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-[#0f172a] line-clamp-2 text-sm mb-1">
              {item.title}
            </p>
            {item.variant && (
              <p className="text-xs text-[#64748b] mb-2">{item.variant}</p>
            )}
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#64748b]">x{item.quantity}</span>
              <span className="font-bold text-[#0f172a]">
                {item.price.toLocaleString("vi-VN")}₫
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
