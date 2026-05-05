import { X, Upload, Plus, Minus } from "lucide-react";
import { useState } from "react";

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export function AddProductModal({
  isOpen,
  onClose,
  onSubmit,
}: AddProductModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    category: "",
    description: "",
    price: "",
    comparePrice: "",
    stock: "",
    sku: "",
    weight: "",
    dimensions: "",
  });

  const [images, setImages] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-[#e2e8f0]">
          <h2 className="text-2xl font-bold text-[#0f172a]">Thêm sản phẩm mới</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#f1f5f9] rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            <div className="bg-[#fff7ed] border border-[#fcd34d] rounded-xl p-4">
              <h3 className="font-bold text-[#0f172a] mb-2">
                Hình ảnh sản phẩm
              </h3>
              <div className="grid grid-cols-5 gap-4">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-white border-2 border-[#e2e8f0] rounded-xl overflow-hidden relative"
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="aspect-square bg-white border-2 border-dashed border-[#e2e8f0] rounded-xl hover:border-[#fcd34d] hover:bg-[#fff7ed] transition-colors flex flex-col items-center justify-center gap-2"
                >
                  <Upload className="w-6 h-6 text-[#64748b]" />
                  <span className="text-xs text-[#64748b]">Tải ảnh</span>
                </button>
              </div>
              <p className="text-sm text-[#64748b] mt-3">
                Tải lên tối đa 5 ảnh. Kích thước tối đa 2MB mỗi ảnh.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#0f172a] font-medium mb-2">
                  Tên sản phẩm <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="VD: Nhà Giả Kim"
                  className="w-full px-4 py-3 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
                  required
                />
              </div>

              <div>
                <label className="block text-[#0f172a] font-medium mb-2">
                  Tác giả
                </label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) =>
                    setFormData({ ...formData, author: e.target.value })
                  }
                  placeholder="VD: Paulo Coelho"
                  className="w-full px-4 py-3 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#0f172a] font-medium mb-2">
                Danh mục <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full px-4 py-3 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
                required
              >
                <option value="">Chọn danh mục</option>
                <option value="van-hoc">Văn học</option>
                <option value="kinh-te">Kinh tế</option>
                <option value="ky-nang">Kỹ năng sống</option>
                <option value="thieu-nhi">Thiếu nhi</option>
                <option value="tam-ly">Tâm lý - Tâm linh</option>
                <option value="hoc-tap">Học tập</option>
              </select>
            </div>

            <div>
              <label className="block text-[#0f172a] font-medium mb-2">
                Mô tả sản phẩm
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Mô tả chi tiết về sản phẩm..."
                rows={4}
                className="w-full px-4 py-3 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d] resize-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#0f172a] font-medium mb-2">
                  Giá bán <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                    placeholder="0"
                    className="w-full px-4 py-3 pr-12 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
                    required
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748b]">
                    ₫
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-[#0f172a] font-medium mb-2">
                  Giá so sánh
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={formData.comparePrice}
                    onChange={(e) =>
                      setFormData({ ...formData, comparePrice: e.target.value })
                    }
                    placeholder="0"
                    className="w-full px-4 py-3 pr-12 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748b]">
                    ₫
                  </span>
                </div>
                <p className="text-sm text-[#64748b] mt-2">
                  Giá gốc để hiển thị % giảm giá
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#0f172a] font-medium mb-2">
                  Tồn kho <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  value={formData.stock}
                  onChange={(e) =>
                    setFormData({ ...formData, stock: e.target.value })
                  }
                  placeholder="0"
                  className="w-full px-4 py-3 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
                  required
                />
              </div>

              <div>
                <label className="block text-[#0f172a] font-medium mb-2">
                  Mã SKU
                </label>
                <input
                  type="text"
                  value={formData.sku}
                  onChange={(e) =>
                    setFormData({ ...formData, sku: e.target.value })
                  }
                  placeholder="VD: BOOK-001"
                  className="w-full px-4 py-3 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#0f172a] font-medium mb-2">
                  Khối lượng (gram)
                </label>
                <input
                  type="number"
                  value={formData.weight}
                  onChange={(e) =>
                    setFormData({ ...formData, weight: e.target.value })
                  }
                  placeholder="0"
                  className="w-full px-4 py-3 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
                />
              </div>

              <div>
                <label className="block text-[#0f172a] font-medium mb-2">
                  Kích thước (cm)
                </label>
                <input
                  type="text"
                  value={formData.dimensions}
                  onChange={(e) =>
                    setFormData({ ...formData, dimensions: e.target.value })
                  }
                  placeholder="VD: 20 x 15 x 2"
                  className="w-full px-4 py-3 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
                />
              </div>
            </div>
          </div>
        </form>

        <div className="flex items-center justify-end gap-3 p-6 border-t border-[#e2e8f0]">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-3 border border-[#e2e8f0] rounded-full hover:bg-[#f1f5f9] transition-colors font-medium"
          >
            Hủy
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-[#0f172a] text-white rounded-full hover:bg-[#334155] transition-colors font-medium"
          >
            Thêm sản phẩm
          </button>
        </div>
      </div>
    </div>
  );
}
