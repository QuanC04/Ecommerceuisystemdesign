import { Camera, Save } from "lucide-react";

export function ProfilePersonalInfoPage() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
      <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
        Thông tin cá nhân
      </h2>

      <div className="flex items-center gap-6 mb-8 pb-8 border-b border-[#e2e8f0]">
        <div className="relative">
          <div className="w-24 h-24 bg-[#fcd34d] rounded-full flex items-center justify-center">
            <span className="text-3xl font-bold text-[#0f172a]">NA</span>
          </div>
          <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#0f172a] text-white rounded-full flex items-center justify-center hover:bg-[#334155]">
            <Camera className="w-4 h-4" />
          </button>
        </div>
        <div>
          <p className="font-bold text-[#0f172a] text-lg">Nguyễn Văn A</p>
          <p className="text-[#64748b]">Thành viên từ 15/01/2025</p>
        </div>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#0f172a] mb-2">Họ</label>
            <input
              type="text"
              defaultValue="Nguyễn Văn"
              className="w-full px-4 py-3 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
            />
          </div>
          <div>
            <label className="block text-[#0f172a] mb-2">Tên</label>
            <input
              type="text"
              defaultValue="A"
              className="w-full px-4 py-3 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
            />
          </div>
        </div>

        <div>
          <label className="block text-[#0f172a] mb-2">Email</label>
          <input
            type="email"
            defaultValue="nguyen.a@email.com"
            className="w-full px-4 py-3 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
          />
          <p className="text-sm text-[#64748b] mt-2">
            Email đã được xác thực
          </p>
        </div>

        <div>
          <label className="block text-[#0f172a] mb-2">Số điện thoại</label>
          <input
            type="tel"
            defaultValue="0912 345 678"
            className="w-full px-4 py-3 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
          />
        </div>

        <div>
          <label className="block text-[#0f172a] mb-2">Ngày sinh</label>
          <input
            type="date"
            defaultValue="1990-01-15"
            className="w-full px-4 py-3 border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
          />
        </div>

        <div>
          <label className="block text-[#0f172a] mb-2">Giới tính</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                defaultChecked
                className="w-4 h-4 text-[#fcd34d] focus:ring-[#fcd34d]"
              />
              <span className="text-[#0f172a]">Nam</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                className="w-4 h-4 text-[#fcd34d] focus:ring-[#fcd34d]"
              />
              <span className="text-[#0f172a]">Nữ</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                className="w-4 h-4 text-[#fcd34d] focus:ring-[#fcd34d]"
              />
              <span className="text-[#0f172a]">Khác</span>
            </label>
          </div>
        </div>

        <div className="flex gap-4 pt-6 border-t border-[#e2e8f0]">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-[#0f172a] text-white rounded-full hover:bg-[#334155] transition-colors"
          >
            <Save className="w-5 h-5" />
            <span>Lưu thay đổi</span>
          </button>
          <button
            type="button"
            className="px-6 py-3 border-2 border-[#e2e8f0] rounded-full hover:bg-[#fff7ed] transition-colors"
          >
            Hủy
          </button>
        </div>
      </form>
    </div>
  );
}
