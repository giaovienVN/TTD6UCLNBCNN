import React, { useState } from 'react';
import { TowerType, GameMode } from '../types/game';
import { 
  BookOpen, 
  Gamepad2, 
  Sparkles, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  ShieldAlert, 
  Clock, 
  Flame, 
  HelpCircle, 
  Layers, 
  Crown,
  ChevronRight,
  Infinity as InfinityIcon,
  Zap
} from 'lucide-react';

interface TowerBriefingModalProps {
  isOpen: boolean;
  towerType: TowerType;
  gameMode: GameMode;
  onSelectGameMode: (mode: GameMode) => void;
  onClose: () => void;
  onStartGame: () => void;
}

export const TowerBriefingModal: React.FC<TowerBriefingModalProps> = ({
  isOpen,
  towerType,
  gameMode,
  onSelectGameMode,
  onClose,
  onStartGame,
}) => {
  const [activeTab, setActiveTab] = useState<'rules' | 'knowledge'>('knowledge');

  if (!isOpen) return null;

  const isUcln = towerType === 'ucln';
  const isTimed = gameMode === 'timed';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-slate-900/70 backdrop-blur-md animate-fadeIn overflow-y-auto">
      {/* Stone Castle Window Container */}
      <div className="max-w-3xl w-full bg-white border-4 border-amber-700/85 rounded-3xl md:rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] my-auto relative animate-milestone">
        
        {/* Castle Top Battlement Header */}
        <div className="h-3 bg-amber-900 border-b border-amber-950 flex items-center justify-between px-3 select-none">
          <div className="flex space-x-1.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="w-2 h-1.5 bg-amber-700 rounded-t-xs" />
            ))}
          </div>
          <span className="text-[9px] text-amber-200 font-mono tracking-widest uppercase">
            BÍ KÍP CHINH PHỤC THÁP THÀNH
          </span>
          <div className="flex space-x-1.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="w-2 h-1.5 bg-amber-700 rounded-t-xs" />
            ))}
          </div>
        </div>

        {/* Modal Banner Header */}
        <div className={`p-4 md:p-6 border-b-2 border-amber-200 flex items-center justify-between ${
          isUcln 
            ? 'bg-gradient-to-r from-indigo-50 via-sky-50 to-white' 
            : 'bg-gradient-to-r from-amber-50 via-orange-50 to-white'
        }`}>
          <div className="flex items-center space-x-3.5">
            <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center text-2xl md:text-3xl shadow-sm border-2 ${
              isUcln ? 'bg-indigo-100 border-indigo-300' : 'bg-amber-100 border-amber-300'
            }`}>
              {isUcln ? '🏛️' : '⚡'}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-wider ${
                  isUcln ? 'bg-indigo-600 text-white' : 'bg-amber-600 text-white'
                }`}>
                  {isUcln ? 'Tháp 01: Ước Chung Lớn Nhất' : 'Tháp 02: Bội Chung Nhỏ Nhất'}
                </span>
                <span className="text-xs text-slate-500 font-bold font-mono">20 Tầng</span>
              </div>
              <h2 className="text-lg md:text-2xl font-black text-slate-900 mt-1">
                {isUcln ? 'Bí Kíp Tháp Phân Rã (ƯCLN)' : 'Bí Kíp Tháp Bội Số (BCNN)'}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition cursor-pointer"
            title="Đóng bảng hướng dẫn"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* GAME MODE SWITCHER BANNER */}
        <div className="px-4 md:px-6 pt-3 pb-1 bg-amber-50/70 border-b border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <div className="text-left w-full sm:w-auto">
            <span className="text-xs font-black uppercase text-amber-900 flex items-center space-x-1.5">
              <span>⚙️ Chế độ leo tháp:</span>
            </span>
            <p className="text-[11px] text-slate-600 mt-0.5">
              {isTimed ? (
                <span className="font-semibold text-amber-800">
                  ⏱️ 90s/câu • <strong className="text-orange-600 font-black">Điểm cao hơn (150đ + 40đ tốc độ) 🔥</strong>
                </span>
              ) : (
                <span className="font-semibold text-emerald-800">
                  🌿 Không giới hạn thời gian • <strong className="text-emerald-700 font-black">Tự do nháp bài (100đ chuẩn)</strong>
                </span>
              )}
            </p>
          </div>

          <div className="inline-flex items-center bg-white p-1 rounded-xl border border-amber-300 shadow-xs self-stretch sm:self-auto justify-center">
            <button
              type="button"
              onClick={() => onSelectGameMode('timed')}
              className={`flex-1 sm:flex-none flex items-center justify-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-black transition cursor-pointer ${
                isTimed
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>⏱️ Có Giới Hạn (Điểm Cao)</span>
            </button>
            <button
              type="button"
              onClick={() => onSelectGameMode('untimed')}
              className={`flex-1 sm:flex-none flex items-center justify-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-black transition cursor-pointer ${
                !isTimed
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <InfinityIcon className="w-3.5 h-3.5" />
              <span>🌿 Không Giới Hạn</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center px-4 md:px-6 pt-3 border-b border-slate-200 bg-slate-50 gap-2 shrink-0">
          <button
            onClick={() => setActiveTab('knowledge')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-t-xl font-bold text-xs md:text-sm transition-all border-t-2 border-x-2 cursor-pointer ${
              activeTab === 'knowledge'
                ? 'bg-white border-amber-300 text-amber-900 shadow-xs -mb-px'
                : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span>🧠 Bí Kíp & Dạng Bài Tập Tháp</span>
          </button>

          <button
            onClick={() => setActiveTab('rules')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-t-xl font-bold text-xs md:text-sm transition-all border-t-2 border-x-2 cursor-pointer ${
              activeTab === 'rules'
                ? 'bg-white border-amber-300 text-amber-900 shadow-xs -mb-px'
                : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-100'
            }`}
          >
            <Gamepad2 className="w-4 h-4 text-indigo-600" />
            <span>📜 Cách Chơi & Bảng So Sánh 2 Chế Độ</span>
          </button>
        </div>

        {/* Tab Content Body (Scrollable) */}
        <div className="p-4 md:p-6 overflow-y-auto custom-scrollbar flex-1 space-y-4 bg-white text-slate-700 text-xs md:text-sm leading-relaxed">
          {activeTab === 'knowledge' ? (
            /* TAB 1: KNOWLEDGE & PROBLEM TYPES */
            <div className="space-y-4">
              {isUcln ? (
                /* UCLN KNOWLEDGE BRIEFING */
                <>
                  {/* Golden Rule Card */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-50 to-sky-50 border-2 border-indigo-200">
                    <h4 className="font-black text-indigo-950 text-sm md:text-base flex items-center space-x-2 mb-2">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      <span>3 Bước Vàng Tìm ƯCLN (Ước Chung Lớn Nhất)</span>
                    </h4>
                    <ol className="list-decimal list-inside space-y-1.5 font-medium text-slate-800 ml-1">
                      <li>
                        <strong className="text-indigo-900">Bước 1:</strong> Phân tích mỗi số ra thừa số nguyên tố (dùng sơ đồ cột hoặc rẽ nhánh).
                      </li>
                      <li>
                        <strong className="text-indigo-900">Bước 2:</strong> Chọn ra các thừa số nguyên tố <span className="underline decoration-indigo-500 font-bold">CHUNG</span> (chỉ lấy thừa số có mặt ở tất cả các số).
                      </li>
                      <li>
                        <strong className="text-indigo-900">Bước 3:</strong> Lập tích các thừa số đã chọn, mỗi thừa số lấy với số mũ <span className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-black">NHỎ NHẤT</span>.
                      </li>
                    </ol>
                  </div>

                  {/* Core Properties */}
                  <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200">
                    <h5 className="font-bold text-amber-900 text-xs md:text-sm mb-1">
                      ⚡ Mẹo Nhẩm Nhanh & Tính Chất Trọng Tâm:
                    </h5>
                    <ul className="space-y-1 text-slate-700 text-xs">
                      <li>• <strong>Hai số nguyên tố cùng nhau</strong>: Là hai số có <code className="bg-white px-1.5 py-0.5 rounded font-mono font-bold text-indigo-700">ƯCLN(a, b) = 1</code> (Ví dụ: 8 và 9, 15 và 16).</li>
                      <li>• <strong>Số chia hết</strong>: Nếu số lớn chia hết cho số nhỏ (<code className="font-mono">a ⋮ b</code>) thì <code className="bg-white px-1.5 py-0.5 rounded font-mono font-bold text-indigo-700">ƯCLN(a, b) = b</code>.</li>
                      <li>• <strong>Tìm ƯC thông qua ƯCLN</strong>: Muốn tìm tất cả các ước chung của a và b, ta tìm các ước của <code className="font-mono font-bold">ƯCLN(a, b)</code>.</li>
                    </ul>
                  </div>

                  {/* 5 Key Question Types */}
                  <div>
                    <h4 className="font-black text-slate-900 text-sm md:text-base mb-2.5 flex items-center space-x-1.5">
                      <span>🎯 5 Dạng Bài Tập Bạn Sẽ Đối Mặt Trong 20 Tầng:</span>
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      <div className="p-3 rounded-xl border border-slate-200 bg-slate-50/80">
                        <span className="font-bold text-indigo-800 text-xs block mb-0.5">Dạng 1: Nhận diện thừa số & Tìm ƯCLN</span>
                        <p className="text-[11px] text-slate-600">Tìm ƯCLN từ dạng phân tích thừa số nguyên tố hoặc tìm ƯCLN của 2, 3 số tự nhiên.</p>
                      </div>

                      <div className="p-3 rounded-xl border border-slate-200 bg-slate-50/80">
                        <span className="font-bold text-indigo-800 text-xs block mb-0.5">Dạng 2: Rút gọn phân số tối giản</span>
                        <p className="text-[11px] text-slate-600">Chia cả tử và mẫu cho ƯCLN của chúng để đưa ngay về phân số không thể rút gọn thêm.</p>
                      </div>

                      <div className="p-3 rounded-xl border border-slate-200 bg-slate-50/80">
                        <span className="font-bold text-indigo-800 text-xs block mb-0.5">Dạng 3: Bài toán chia tổ, chia quà nhiều nhất</span>
                        <p className="text-[11px] text-slate-600">Từ khóa: <em>"chia đều vào nhiều tổ nhất", "chia được nhiều phần thưởng nhất"</em> ➔ Cần tìm <code className="font-bold font-mono">ƯCLN</code>.</p>
                      </div>

                      <div className="p-3 rounded-xl border border-slate-200 bg-slate-50/80">
                        <span className="font-bold text-indigo-800 text-xs block mb-0.5">Dạng 4: Cắt đất / chia lưới ô vuông lớn nhất</span>
                        <p className="text-[11px] text-slate-600">Chia mảnh đất hình chữ nhật thành các ô vuông bằng nhau có cạnh lớn nhất ➔ Cạnh ô vuông = <code className="font-bold font-mono">ƯCLN(dài, rộng)</code>.</p>
                      </div>

                      <div className="p-3 rounded-xl border border-slate-200 bg-slate-50/80 md:col-span-2">
                        <span className="font-bold text-indigo-800 text-xs block mb-0.5">Dạng 5: Tìm x thỏa mãn phép chia hết (Đỉnh cao HSG)</span>
                        <p className="text-[11px] text-slate-600">Tìm số tự nhiên x lớn nhất thỏa <code className="font-mono">a ⋮ x, b ⋮ x</code> hoặc chia có dư <code className="font-mono">(a - r) ⋮ x, (b - r) ⋮ x</code> với điều kiện <code className="font-mono">x &gt; r</code>.</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* BCNN KNOWLEDGE BRIEFING */
                <>
                  {/* Golden Rule Card */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200">
                    <h4 className="font-black text-amber-950 text-sm md:text-base flex items-center space-x-2 mb-2">
                      <Sparkles className="w-4 h-4 text-orange-500" />
                      <span>3 Bước Vàng Tìm BCNN (Bội Chung Nhỏ Nhất)</span>
                    </h4>
                    <ol className="list-decimal list-inside space-y-1.5 font-medium text-slate-800 ml-1">
                      <li>
                        <strong className="text-amber-900">Bước 1:</strong> Phân tích mỗi số ra thừa số nguyên tố.
                      </li>
                      <li>
                        <strong className="text-amber-900">Bước 2:</strong> Chọn ra các thừa số nguyên tố <span className="underline decoration-orange-500 font-bold">CHUNG VÀ RIÊNG</span> (lấy hết tất cả thừa số xuất hiện).
                      </li>
                      <li>
                        <strong className="text-amber-900">Bước 3:</strong> Lập tích các thừa số đã chọn, mỗi thừa số lấy với số mũ <span className="bg-amber-200 text-amber-950 px-1.5 py-0.5 rounded font-black">LỚN NHẤT</span>.
                      </li>
                    </ol>
                  </div>

                  {/* Core Properties */}
                  <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-200">
                    <h5 className="font-bold text-indigo-900 text-xs md:text-sm mb-1">
                      ⚡ Công Thức Vàng & Mẹo Tính Nhanh:
                    </h5>
                    <ul className="space-y-1 text-slate-700 text-xs">
                      <li>• <strong>Mối liên hệ kinh điển</strong>: <code className="bg-white px-2 py-0.5 rounded font-mono font-bold text-amber-800">ƯCLN(a, b) • BCNN(a, b) = a • b</code>.</li>
                      <li>• <strong>Số chia hết</strong>: Nếu số lớn chia hết cho số nhỏ (<code className="font-mono">a ⋮ b</code>) thì <code className="bg-white px-1.5 py-0.5 rounded font-mono font-bold text-amber-800">BCNN(a, b) = a</code>.</li>
                      <li>• <strong>Nguyên tố cùng nhau</strong>: Nếu <code className="font-mono">ƯCLN(a, b) = 1</code> thì <code className="bg-white px-1.5 py-0.5 rounded font-mono font-bold text-amber-800">BCNN(a, b) = a • b</code>.</li>
                      <li>• <strong>Tìm BC thông qua BCNN</strong>: Tập hợp các bội chung của a và b chính là tập hợp các bội của <code className="font-mono font-bold">BCNN(a, b)</code>.</li>
                    </ul>
                  </div>

                  {/* 5 Key Question Types */}
                  <div>
                    <h4 className="font-black text-slate-900 text-sm md:text-base mb-2.5 flex items-center space-x-1.5">
                      <span>🎯 5 Dạng Bài Tập Bạn Sẽ Đối Mặt Trong 20 Tầng:</span>
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      <div className="p-3 rounded-xl border border-slate-200 bg-slate-50/80">
                        <span className="font-bold text-amber-800 text-xs block mb-0.5">Dạng 1: Tìm BCNN trực tiếp & Thừa số nguyên tố</span>
                        <p className="text-[11px] text-slate-600">Chọn thừa số chung và riêng với số mũ lớn nhất, tính BCNN của 2 hay 3 số.</p>
                      </div>

                      <div className="p-3 rounded-xl border border-slate-200 bg-slate-50/80">
                        <span className="font-bold text-amber-800 text-xs block mb-0.5">Dạng 2: Quy đồng mẫu số các phân số</span>
                        <p className="text-[11px] text-slate-600">Mẫu số chung nhỏ nhất của các phân số chính là <code className="font-bold font-mono">BCNN</code> của các mẫu số.</p>
                      </div>

                      <div className="p-3 rounded-xl border border-slate-200 bg-slate-50/80">
                        <span className="font-bold text-amber-800 text-xs block mb-0.5">Dạng 3: Chu kỳ lặp lại & Cùng gặp nhau</span>
                        <p className="text-[11px] text-slate-600">Từ khóa: <em>"xe buýt cùng rời bến", "chuông cùng reo", "bạn bè cùng trực nhật sau ít nhất bao nhiêu ngày"</em> ➔ Tìm <code className="font-bold font-mono">BCNN</code>.</p>
                      </div>

                      <div className="p-3 rounded-xl border border-slate-200 bg-slate-50/80">
                        <span className="font-bold text-amber-800 text-xs block mb-0.5">Dạng 4: Bài toán xếp hàng (vừa đủ hàng)</span>
                        <p className="text-[11px] text-slate-600">Xếp hàng 10, hàng 12, hàng 15 đều vừa đủ ➔ Số học sinh là <code className="font-mono font-bold">BC(10, 12, 15)</code> trong khoảng số cho trước.</p>
                      </div>

                      <div className="p-3 rounded-xl border border-slate-200 bg-slate-50/80 md:col-span-2">
                        <span className="font-bold text-amber-800 text-xs block mb-0.5">Dạng 5: Bài toán chia có dư & Bù trừ (Đỉnh cao HSG)</span>
                        <p className="text-[11px] text-slate-600">Xếp hàng thiếu 1 người ➔ <code className="font-mono">(x + 1) ⋮ a, b</code>; hoặc chia dư r ➔ <code className="font-mono">(x - r) ⋮ a, b</code> rồi tìm bội tương ứng.</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            /* TAB 2: GAMEPLAY RULES & STRATEGY */
            <div className="space-y-4">
              {/* 2 Modes Comparison Highlight Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300">
                <h5 className="font-black text-amber-950 text-sm md:text-base mb-2.5 flex items-center space-x-1.5">
                  <span>⚖️ So Sánh 2 Chế Độ Leo Tháp & Cơ Chế Điểm Thưởng:</span>
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Timed Mode Card */}
                  <div className={`p-3.5 rounded-xl border-2 transition ${
                    isTimed ? 'bg-amber-100/70 border-amber-400 shadow-xs' : 'bg-white border-amber-200'
                  }`}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-black text-amber-950 text-xs md:text-sm flex items-center space-x-1">
                        <Clock className="w-4 h-4 text-orange-600" />
                        <span>⏱️ Có Giới Hạn Thời Gian</span>
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-orange-500 text-white font-black text-[10px]">
                        Điểm Cao Hơn 🔥
                      </span>
                    </div>
                    <ul className="text-[11px] text-slate-700 space-y-1">
                      <li>• <strong>Thời gian:</strong> 90 giây đếm ngược mỗi câu.</li>
                      <li>• <strong>Điểm cơ bản:</strong> <span className="font-black text-orange-700">150 điểm/câu</span> (Cao hơn 50%!).</li>
                      <li>• <strong>Thưởng tốc độ:</strong> <span className="font-black text-emerald-700">+40 điểm</span> nếu đúng trong 20s đầu.</li>
                      <li>• <strong>Rủi ro:</strong> Hết 90s bị trừ 1 mạng. Thử thách áp lực đỉnh cao!</li>
                    </ul>
                  </div>

                  {/* Untimed Mode Card */}
                  <div className={`p-3.5 rounded-xl border-2 transition ${
                    !isTimed ? 'bg-emerald-100/70 border-emerald-400 shadow-xs' : 'bg-white border-emerald-200'
                  }`}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-black text-emerald-950 text-xs md:text-sm flex items-center space-x-1">
                        <InfinityIcon className="w-4 h-4 text-emerald-600" />
                        <span>🌿 Không Giới Hạn Thời Gian</span>
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white font-black text-[10px]">
                        Luyện Tập Kỹ 📝
                      </span>
                    </div>
                    <ul className="text-[11px] text-slate-700 space-y-1">
                      <li>• <strong>Thời gian:</strong> Vô hạn (∞), không đếm ngược.</li>
                      <li>• <strong>Điểm cơ bản:</strong> <span className="font-bold text-emerald-800">100 điểm/câu</span> (Tiêu chuẩn).</li>
                      <li>• <strong>Thư thả tối đa:</strong> Thỏa sức đặt bút nháp, phân tích thừa số.</li>
                      <li>• <strong>An toàn:</strong> Không bao giờ bị trừ mạng vì hết giờ!</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Gameplay Structure Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
                  <div className="p-2 rounded-xl bg-rose-100 text-rose-600 shrink-0">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-xs md:text-sm">3 Sinh Lực (Tim)</h5>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      Khi làm sai, nếu lựa chọn <strong>leo tiếp từ trạm gần nhất sẽ mất 1 tim</strong>. Khi dùng hết cả 3 tim, người chơi <strong>mặc định quay về Tầng 1</strong>!
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
                  <div className="p-2 rounded-xl bg-orange-100 text-orange-600 shrink-0">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-xs md:text-sm">Chuỗi Thưởng (Streak Combo)</h5>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      Chuỗi đúng 2 câu: <strong>x1.2</strong> • 3 câu: <strong>x1.5</strong> • Từ 4 câu liên tiếp: <strong>x2.0</strong> số điểm!
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
                  <div className="p-2 rounded-xl bg-indigo-100 text-indigo-700 shrink-0">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-xs md:text-sm">2 Bùa Hỗ Trợ Đắc Lực</h5>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      <strong>💡 Gợi ý thừa số (2 lượt)</strong>: Mở hướng dẫn giải mẫu. <br />
                      <strong>⚡ Loại trừ 50/50 (1 lượt)</strong>: Xóa 2 phương án sai.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
                  <div className="p-2 rounded-xl bg-amber-100 text-amber-700 shrink-0">
                    <Crown className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-xs md:text-sm">Thưởng Mốc Quan Trọng</h5>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      Vượt Tầng 5, 10, 15 và Đỉnh Tầng 20 nhận thưởng mốc danh vọng & huy hiệu vinh danh!
                    </p>
                  </div>
                </div>
              </div>

              {/* Checkpoint & Resurrect Policy */}
              <div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-300">
                <h5 className="font-black text-amber-900 text-xs md:text-sm mb-1.5 flex items-center space-x-1.5">
                  <Layers className="w-4 h-4 text-amber-600" />
                  <span>Hệ Thống Trạm Cứu Sinh (Checkpoint) & Bảo Toàn Điểm:</span>
                </h5>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• <strong>Các Trạm kiểm soát</strong>: Đặt tại <strong className="text-indigo-700 font-bold">Tầng 1, Tầng 6, Tầng 11 và Tầng 16</strong>.</li>
                  <li>• <strong>Bảo toàn số điểm tại trạm</strong>: Khi bước vào trạm mới (vượt qua Tầng 5, 10, 15), số điểm tích luỹ sẽ được lưu lại mốc đó.</li>
                  <li>• <strong>Cơ chế khi làm sai</strong>: Số điểm tích luỹ sẽ quay về đúng số điểm đã lưu tại trạm gần nhất.</li>
                  <li>• <strong>Leo tiếp hay Bắt đầu lại</strong>: Lựa chọn leo tiếp từ trạm mất 1 tim; khi hết sạch 3 tim thì mặc định quay về Tầng 1.</li>
                </ul>
              </div>

              {/* Milestones & Crown */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Crown className="w-6 h-6 text-amber-500 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900 text-xs md:text-sm block">Cột Mốc Thưởng & Vương Miện</span>
                    <span className="text-[11px] text-slate-500">Vượt Tầng 5 (+50đ), Tầng 10 (+100đ), Tầng 15 (+150đ), Đỉnh Boss Tầng 20 (+300đ)</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 font-bold text-xs font-mono">
                  Boss: Tầng 20
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 md:p-5 bg-slate-50 border-t-2 border-amber-200 flex items-center justify-between flex-wrap gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs md:text-sm transition cursor-pointer"
          >
            ← Chọn Tháp Khác
          </button>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveTab(activeTab === 'knowledge' ? 'rules' : 'knowledge')}
              className="hidden sm:inline-flex px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 transition cursor-pointer"
            >
              {activeTab === 'knowledge' ? 'Xem luật chơi ➔' : 'Xem bí kíp bài tập ➔'}
            </button>

            <button
              onClick={onStartGame}
              className={`px-6 md:px-8 py-3 rounded-2xl font-black text-white text-sm md:text-base shadow-lg transition transform hover:-translate-y-0.5 active:translate-y-0 flex items-center space-x-2 cursor-pointer ${
                isUcln 
                  ? 'bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-700 shadow-indigo-500/25 hover:from-indigo-700 hover:to-sky-700' 
                  : 'bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 shadow-amber-500/25 hover:from-amber-600 hover:to-orange-600'
              }`}
            >
              <span>Sẵn Sàng Tiến Vào Tháp!</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
