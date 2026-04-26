import { Plus, Search, Edit, Trash2, Eye, MoreVertical } from "lucide-react";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  author: string;
  price: number;
  stock: number;
  sold: number;
  status: "active" | "inactive";
  image: string;
}

export function SellerProductsPage() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Nhà Giả Kim",
      author: "Paulo Coelho",
      price: 79000,
      stock: 50,
      sold: 125,
      status: "active",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=100",
    },
    {
      id: "2",
      name: "Sapiens: Lược Sử Loài Người",
      author: "Yuval Noah Harari",
      price: 189000,
      stock: 30,
      sold: 98,
      status: "active",
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=100",
    },
    {
      id: "3",
      name: "Đắc Nhân Tâm",
      author: "Dale Carnegie",
      price: 65000,
      stock: 0,
      sold: 87,
      status: "inactive",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=100",
    },
    {
      id: "4",
      name: "Tuổi Trẻ Đáng Giá Bao Nhiêu",
      author: "Rosie Nguyễn",
      price: 85000,
      stock: 45,
      sold: 72,
      status: "active",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=100",
    },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#0f172a] mb-2">
            Quản lý sản phẩm
          </h1>
          <p className="text-[#64748b]">{products.length} sản phẩm</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-[#0f172a] text-white rounded-full hover:bg-[#334155] transition-colors">
          <Plus className="w-5 h-5" />
          <span>Thêm sản phẩm</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748b]" />
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              className="w-full pl-12 pr-4 py-3 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
            />
          </div>
          <select className="px-4 py-3 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d]">
            <option>Tất cả trạng thái</option>
            <option>Đang bán</option>
            <option>Hết hàng</option>
          </select>
          <select className="px-4 py-3 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d]">
            <option>Sắp xếp</option>
            <option>Tên A-Z</option>
            <option>Giá tăng dần</option>
            <option>Giá giảm dần</option>
            <option>Bán chạy nhất</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#e2e8f0]">
                <th className="text-left py-4 px-4 font-medium text-[#64748b]">
                  Sản phẩm
                </th>
                <th className="text-left py-4 px-4 font-medium text-[#64748b]">
                  Giá
                </th>
                <th className="text-left py-4 px-4 font-medium text-[#64748b]">
                  Tồn kho
                </th>
                <th className="text-left py-4 px-4 font-medium text-[#64748b]">
                  Đã bán
                </th>
                <th className="text-left py-4 px-4 font-medium text-[#64748b]">
                  Trạng thái
                </th>
                <th className="text-left py-4 px-4 font-medium text-[#64748b]">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-[#e2e8f0] hover:bg-[#fff7ed] transition-colors"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-20 bg-[#fff7ed] rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-[#0f172a]">
                          {product.name}
                        </p>
                        <p className="text-sm text-[#64748b]">
                          {product.author}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <p className="font-bold text-[#0f172a]">
                      {product.price.toLocaleString("vi-VN")}₫
                    </p>
                  </td>
                  <td className="py-4 px-4">
                    <p
                      className={`font-medium ${
                        product.stock === 0
                          ? "text-[#dc2626]"
                          : product.stock < 20
                            ? "text-[#f59e0b]"
                            : "text-[#0f172a]"
                      }`}
                    >
                      {product.stock}
                    </p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-[#64748b]">{product.sold}</p>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        product.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-[#f1f5f9] text-[#64748b]"
                      }`}
                    >
                      {product.status === "active" ? "Đang bán" : "Hết hàng"}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-[#f1f5f9] rounded-lg transition-colors">
                        <Eye className="w-5 h-5 text-[#64748b]" />
                      </button>
                      <button className="p-2 hover:bg-[#f1f5f9] rounded-lg transition-colors">
                        <Edit className="w-5 h-5 text-[#64748b]" />
                      </button>
                      <button className="p-2 hover:bg-[#f1f5f9] rounded-lg transition-colors">
                        <Trash2 className="w-5 h-5 text-[#64748b]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-6 pt-6 border-t border-[#e2e8f0]">
          <p className="text-[#64748b]">Hiển thị 1-4 trong 4 sản phẩm</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-[#e2e8f0] rounded-lg hover:bg-[#fff7ed]">
              Trước
            </button>
            <button className="px-4 py-2 bg-[#0f172a] text-white rounded-lg">
              1
            </button>
            <button className="px-4 py-2 border border-[#e2e8f0] rounded-lg hover:bg-[#fff7ed]">
              Sau
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
