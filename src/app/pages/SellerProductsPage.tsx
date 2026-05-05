import {
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  Filter,
  Download,
  AlertTriangle,
  Package,
  EyeOff,
  PackageX,
} from "lucide-react";
import { useState } from "react";
import { AddProductModal } from "../components/AddProductModal";

interface Product {
  id: string;
  name: string;
  author: string;
  category: string;
  price: number;
  stock: number;
  sold: number;
  status: "active" | "inactive";
  image: string;
}

export function SellerProductsPage() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Nhà Giả Kim",
      author: "Paulo Coelho",
      category: "Văn học",
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
      category: "Kinh tế",
      price: 189000,
      stock: 15,
      sold: 98,
      status: "active",
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=100",
    },
    {
      id: "3",
      name: "Đắc Nhân Tâm",
      author: "Dale Carnegie",
      category: "Kỹ năng sống",
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
      category: "Kỹ năng sống",
      price: 85000,
      stock: 8,
      sold: 72,
      status: "active",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=100",
    },
  ]);

  const handleAddProduct = (data: any) => {
    const newProduct: Product = {
      id: String(products.length + 1),
      name: data.name,
      author: data.author,
      category: data.category,
      price: Number(data.price),
      stock: Number(data.stock),
      sold: 0,
      status: "active",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=100",
    };
    setProducts([...products, newProduct]);
  };

  const lowStockCount = products.filter((p) => p.stock > 0 && p.stock < 20)
    .length;
  const outOfStockCount = products.filter((p) => p.stock === 0).length;

  const handleSelectAll = () => {
    if (selectedProducts.length === products.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(products.map((p) => p.id));
    }
  };

  const handleSelectProduct = (id: string) => {
    if (selectedProducts.includes(id)) {
      setSelectedProducts(selectedProducts.filter((pid) => pid !== id));
    } else {
      setSelectedProducts([...selectedProducts, id]);
    }
  };

  return (
    <>
      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddProduct}
      />

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#0f172a] mb-2">
              Quản lý sản phẩm
            </h1>
            <p className="text-[#64748b]">{products.length} sản phẩm</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-3 border border-[#e2e8f0] rounded-full hover:bg-[#fff7ed] transition-colors">
              <Download className="w-5 h-5" />
              <span>Xuất Excel</span>
            </button>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-2 px-6 py-3 bg-[#0f172a] text-white rounded-full hover:bg-[#334155] transition-colors"
            >
              <Plus className="w-5 h-5" />
              <span>Thêm sản phẩm</span>
            </button>
          </div>
        </div>

      {(lowStockCount > 0 || outOfStockCount > 0) && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-bold text-red-900 mb-1">Cảnh báo tồn kho</p>
              <p className="text-sm text-red-700">
                {outOfStockCount > 0 && `${outOfStockCount} sản phẩm hết hàng`}
                {outOfStockCount > 0 && lowStockCount > 0 && " • "}
                {lowStockCount > 0 && `${lowStockCount} sản phẩm sắp hết hàng`}
              </p>
            </div>
            <button className="text-sm font-medium text-red-900 hover:underline">
              Cập nhật ngay
            </button>
          </div>
        </div>
      )}

      {products.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 border border-[#e2e8f0]">
          <div className="text-center max-w-md mx-auto">
            <div className="w-24 h-24 bg-[#fff7ed] rounded-full flex items-center justify-center mx-auto mb-6">
              <PackageX className="w-12 h-12 text-[#64748b]" />
            </div>
            <h3 className="text-2xl font-bold text-[#0f172a] mb-3">
              Chưa có sản phẩm nào
            </h3>
            <p className="text-[#64748b] mb-6">
              Bắt đầu bán hàng bằng cách thêm sản phẩm đầu tiên của bạn
            </p>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-2 px-8 py-3 bg-[#0f172a] text-white rounded-full hover:bg-[#334155] transition-colors mx-auto"
            >
              <Plus className="w-5 h-5" />
              <span>Thêm sản phẩm đầu tiên</span>
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748b]" />
              <input
                type="text"
                placeholder="Tìm kiếm theo tên sản phẩm, tác giả..."
                className="w-full pl-12 pr-4 py-3 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-3 border border-[#e2e8f0] rounded-xl hover:bg-[#fff7ed] transition-colors">
              <Filter className="w-5 h-5" />
              <span>Bộ lọc</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <select className="px-4 py-2 border border-[#e2e8f0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#fcd34d]">
              <option>Tất cả trạng thái</option>
              <option>Đang bán</option>
              <option>Hết hàng</option>
            </select>
            <select className="px-4 py-2 border border-[#e2e8f0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#fcd34d]">
              <option>Tất cả kho hàng</option>
              <option>Còn hàng (&gt; 20)</option>
              <option>Sắp hết (1-19)</option>
              <option>Hết hàng (0)</option>
            </select>
            <select className="px-4 py-2 border border-[#e2e8f0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#fcd34d]">
              <option>Sắp xếp: Mặc định</option>
              <option>Tên A-Z</option>
              <option>Tên Z-A</option>
              <option>Giá tăng dần</option>
              <option>Giá giảm dần</option>
              <option>Bán chạy nhất</option>
              <option>Tồn kho thấp nhất</option>
            </select>
          </div>

          {selectedProducts.length > 0 && (
            <div className="flex items-center justify-between p-4 bg-[#fff7ed] border border-[#fcd34d] rounded-xl">
              <p className="font-medium text-[#0f172a]">
                Đã chọn {selectedProducts.length} sản phẩm
              </p>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-4 py-2 border border-[#e2e8f0] rounded-lg text-sm hover:bg-white transition-colors">
                  <Edit className="w-4 h-4" />
                  Sửa hàng loạt
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-[#e2e8f0] rounded-lg text-sm hover:bg-white transition-colors">
                  <EyeOff className="w-4 h-4" />
                  Ẩn sản phẩm
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-red-200 text-red-600 rounded-lg text-sm hover:bg-red-50 transition-colors">
                  <Trash2 className="w-4 h-4" />
                  Xóa
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#e2e8f0]">
                <th className="text-left py-4 px-4 font-medium text-[#64748b] w-12">
                  <input
                    type="checkbox"
                    checked={selectedProducts.length === products.length}
                    onChange={handleSelectAll}
                    className="w-5 h-5 rounded border-[#e2e8f0] text-[#fcd34d] focus:ring-[#fcd34d]"
                  />
                </th>
                <th className="text-left py-4 px-4 font-medium text-[#64748b]">
                  Sản phẩm
                </th>
                <th className="text-left py-4 px-4 font-medium text-[#64748b]">
                  Danh mục
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
                  Doanh thu
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
                    <input
                      type="checkbox"
                      checked={selectedProducts.includes(product.id)}
                      onChange={() => handleSelectProduct(product.id)}
                      className="w-5 h-5 rounded border-[#e2e8f0] text-[#fcd34d] focus:ring-[#fcd34d]"
                    />
                  </td>
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
                    <span className="inline-block px-3 py-1 bg-[#fff7ed] text-[#0f172a] rounded-full text-sm">
                      {product.category}
                    </span>
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
                    <p className="font-medium text-[#0f172a]">{product.sold}</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="font-bold text-green-700">
                      {(product.price * product.sold).toLocaleString("vi-VN")}₫
                    </p>
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
          <p className="text-[#64748b]">
            Hiển thị 1-{products.length} trong {products.length} sản phẩm
          </p>
          <div className="flex items-center gap-2">
            <button
              className="px-4 py-2 border border-[#e2e8f0] rounded-lg hover:bg-[#fff7ed] disabled:opacity-50"
              disabled
            >
              Trước
            </button>
            <button className="px-4 py-2 bg-[#0f172a] text-white rounded-lg">
              1
            </button>
            <button
              className="px-4 py-2 border border-[#e2e8f0] rounded-lg hover:bg-[#fff7ed] disabled:opacity-50"
              disabled
            >
              Sau
            </button>
          </div>
        </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 border border-[#e2e8f0]">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[#0f172a]">
                {products.filter((p) => p.stock >= 20).length}
              </p>
              <p className="text-sm text-[#64748b]">Còn hàng đầy đủ</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-[#e2e8f0]">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[#0f172a]">
                {lowStockCount}
              </p>
              <p className="text-sm text-[#64748b]">Sắp hết hàng</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-[#e2e8f0]">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[#0f172a]">
                {outOfStockCount}
              </p>
              <p className="text-sm text-[#64748b]">Hết hàng</p>
            </div>
          </div>
        </div>
          </div>
        </>
      )}
      </div>
    </>
  );
}
