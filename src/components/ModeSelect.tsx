import React from 'react';
import { TowerType, TowerStats, GameMode } from '../types/game';
import { downloadStandaloneHtmlFile } from '../utils/exportHtml';
import { Volume2, VolumeX, Shield, Zap, Sparkles, Award, Download, Clock, Heart, Flame, HelpCircle, ArrowRight, Infinity as InfinityIcon } from 'lucide-react';

interface ModeSelectProps {
  uclnStats: TowerStats;
  bcnnStats: TowerStats;
  gameMode: GameMode;
  onSelectGameMode: (mode: GameMode) => void;
  onSelectTower: (tower: TowerType) => void;
  isMuted: boolean;
  onToggleMute: () => void;
  onResetStats?: () => void;
}

export const ModeSelect: React.FC<ModeSelectProps> = ({
  uclnStats,
  bcnnStats,
  gameMode,
  onSelectGameMode,
  onSelectTower,
  isMuted,
  onToggleMute,
}) => {
  const isTimed = gameMode === 'timed';
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50/70 via-slate-50 to-indigo-50/50 text-slate-800 flex flex-col selection:bg-amber-400 selection:text-slate-900">
      {/* Header Bar */}
      <header className="border-b border-slate-200/90 bg-white/90 backdrop-blur-md sticky top-0 z-30 px-4 md:px-8 py-3.5 flex items-center justify-between shadow-xs">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-indigo-600 flex items-center justify-center shadow-md shadow-amber-500/20 text-white font-black text-xl">
            ⚡
          </div>
          <div>
            <h1 className="text-base md:text-lg font-black tracking-tight text-slate-900 flex items-center space-x-1.5">
              <span>CHINH PHỤC THÁP ĐÔI SỐ HỌC</span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-100 text-indigo-700 border border-indigo-200">
                Toán 6
              </span>
            </h1>
            <p className="text-[11px] md:text-xs text-slate-500 font-medium">
              Chuyên đề ƯCLN & BCNN • 20 Tầng Thử Thách • Ngân hàng 120 câu hỏi đa dạng
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 md:space-x-3">
          <button
            onClick={downloadStandaloneHtmlFile}
            title="Tải về file HTML đơn lẻ để mở chơi offline mọi lúc mọi nơi"
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border border-sky-300 bg-sky-50 hover:bg-sky-100 text-sky-800 text-xs font-semibold transition cursor-pointer shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Xuất file HTML đơn</span>
          </button>

          <button
            onClick={onToggleMute}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border border-slate-250 bg-white hover:bg-slate-100 text-slate-700 text-xs font-medium transition cursor-pointer shadow-xs"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-rose-500" /> : <Volume2 className="w-4 h-4 text-emerald-600" />}
            <span className="hidden md:inline">{isMuted ? 'Bật âm' : 'Âm thanh'}</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-6xl mx-auto w-full p-4 md:p-8 flex flex-col justify-center">
        {/* Hero section */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>2 Ngọn Tháp Thần • Mỗi Tầng 3 Biến Thể Câu Hỏi Ngẫu Nhiên</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4 leading-tight">
            Chọn Ngọn Tháp Để Bắt Đầu <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-amber-600 bg-clip-text text-transparent">
              Hành Trình Chinh Phục
            </span>
          </h2>
          
          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Vượt qua 20 tầng tháp ma trận số học. Khi gặp thử thách thất bại ở bất kỳ tầng nào, bạn sẽ được cứu sinh quay về trạm kiểm soát gần nhất hoặc leo lại từ đầu để đạt chuỗi combo đỉnh cao!
          </p>

          {/* Interactive Mode Selector: Timed vs Untimed */}
          <div className="mt-8 flex flex-col items-center">
            <div className="bg-white/90 backdrop-blur-sm p-1.5 rounded-2xl border-2 border-amber-300 shadow-md inline-flex items-center gap-1.5 flex-wrap justify-center">
              <button
                type="button"
                onClick={() => onSelectGameMode('timed')}
                className={`flex items-center space-x-2 px-4 md:px-5 py-2.5 rounded-xl font-black text-xs md:text-sm transition-all cursor-pointer ${
                  isTimed
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md scale-102'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Clock className="w-4 h-4 text-white" />
                <span>⏱️ Có Giới Hạn Thời Gian</span>
                <span className="px-1.5 py-0.5 rounded-full text-[10px] font-black bg-white/20 text-white border border-white/30">
                  Điểm x1.5 🔥
                </span>
              </button>

              <button
                type="button"
                onClick={() => onSelectGameMode('untimed')}
                className={`flex items-center space-x-2 px-4 md:px-5 py-2.5 rounded-xl font-black text-xs md:text-sm transition-all cursor-pointer ${
                  !isTimed
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md scale-102'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <InfinityIcon className="w-4 h-4 text-white" />
                <span>🌿 Không Giới Hạn Thời Gian</span>
                <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-white/20 text-white border border-white/30">
                  Tự Do Nháp
                </span>
              </button>
            </div>

            <p className="text-xs text-slate-500 mt-2 font-medium">
              {isTimed ? (
                <span>⚡ Mỗi câu có <strong>90 giây</strong> đếm ngược • Cơ bản <strong>150 điểm/câu</strong> (+50% điểm số!)</span>
              ) : (
                <span>🌿 <strong>Không đếm ngược</strong> • Thư thả nháp và tư duy • Cơ bản <strong>100 điểm/câu</strong> (chuẩn)</span>
              )}
            </p>
          </div>
        </div>

        {/* 2 Tower Mode Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
          
          {/* Tower 1: UCLN */}
          <div className="group relative rounded-3xl bg-white border-2 border-indigo-200 hover:border-indigo-400 transition-all duration-300 p-6 md:p-8 shadow-lg shadow-indigo-100/70 hover:shadow-xl flex flex-col justify-between overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-indigo-100/60 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                  <Shield className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Ngọn Tháp 01</span>
                </span>
                <span className="text-3xl">🏛️</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 group-hover:text-indigo-600 transition">
                Tháp Phân Rã (ƯCLN)
              </h3>
              
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6">
                Chinh phục nghệ thuật phân tích thừa số nguyên tố, ước chung lớn nhất, bài toán thực tiễn chia tổ, chia ô vuông đất và các bài toán phân số tối giản bồi dưỡng HSG.
              </p>

              {/* Progress & Highscore stats box */}
              <div className="space-y-3 mb-8 bg-slate-50 rounded-2xl p-4 border border-slate-200">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600 font-semibold">Tiến độ leo tháp:</span>
                  <span className="font-bold text-indigo-600 font-mono text-sm">
                    {uclnStats.maxFloor} / 20 Tầng
                  </span>
                </div>
                <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-sky-500 rounded-full transition-all duration-500"
                    style={{ width: `${(uclnStats.maxFloor / 20) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between items-center text-xs pt-2 border-t border-slate-200">
                  <span className="text-slate-600 flex items-center space-x-1 font-medium">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span>Điểm cao nhất:</span>
                  </span>
                  <span className="font-mono font-bold text-amber-600 text-sm">
                    {uclnStats.highScore.toLocaleString()} đ
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectTower('ucln')}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-600 hover:from-indigo-700 hover:to-sky-700 font-bold text-white shadow-md shadow-indigo-500/25 transition transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2 text-base cursor-pointer"
            >
              <span>Vào Chinh Phục Tháp Phân Rã</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Tower 2: BCNN */}
          <div className="group relative rounded-3xl bg-white border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 p-6 md:p-8 shadow-lg shadow-amber-100/70 hover:shadow-xl flex flex-col justify-between overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-100/60 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5 text-amber-600" />
                  <span>Ngọn Tháp 02</span>
                </span>
                <span className="text-3xl">⚡</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 group-hover:text-amber-600 transition">
                Tháp Bội Số (BCNN)
              </h3>
              
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6">
                Chinh phục bài toán chu kỳ lặp (xe buýt, chuông báo, trực nhật), xếp hàng khối lớp, bài toán chia có dư kết hợp BCNN và các phương trình số học nâng cao.
              </p>

              {/* Progress & Highscore stats box */}
              <div className="space-y-3 mb-8 bg-slate-50 rounded-2xl p-4 border border-slate-200">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600 font-semibold">Tiến độ leo tháp:</span>
                  <span className="font-bold text-amber-600 font-mono text-sm">
                    {bcnnStats.maxFloor} / 20 Tầng
                  </span>
                </div>
                <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-500"
                    style={{ width: `${(bcnnStats.maxFloor / 20) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between items-center text-xs pt-2 border-t border-slate-200">
                  <span className="text-slate-600 flex items-center space-x-1 font-medium">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span>Điểm cao nhất:</span>
                  </span>
                  <span className="font-mono font-bold text-amber-600 text-sm">
                    {bcnnStats.highScore.toLocaleString()} đ
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectTower('bcnn')}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 font-bold text-white shadow-md shadow-amber-500/25 transition transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2 text-base cursor-pointer"
            >
              <span>Vào Chinh Phục Tháp Bội Số</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Game Rules & Feature Highlights */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-5 md:p-7 shadow-sm">
          <div className="flex items-center space-x-2 text-indigo-700 font-bold text-sm mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>Cơ Chế Trò Chơi & Luật Leo Tháp Đổi Mới</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start space-x-3">
              <div className="p-2 rounded-xl bg-rose-100 text-rose-600 shrink-0">
                <Heart className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Thất Bại & Trạm Kiểm Soát</h4>
                <p className="text-slate-600 leading-relaxed">
                  Khi thất bại ở bất kỳ tầng nào, bạn có thể hồi sinh tại Trạm gần nhất (Tầng 1, 6, 11, 16) hoặc bắt đầu lại từ Tầng 1.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start space-x-3">
              <div className="p-2 rounded-xl bg-orange-100 text-orange-600 shrink-0">
                <Flame className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Chuỗi Combo Thưởng</h4>
                <p className="text-slate-600 leading-relaxed">
                  Đúng liên tiếp nhân điểm hệ số: 2 câu (x1.2), 3 câu (x1.5), 4 câu trở lên (x2.0 điểm).
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start space-x-3">
              <div className="p-2 rounded-xl bg-emerald-100 text-emerald-600 shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">90s & Thưởng Tốc Độ</h4>
                <p className="text-slate-600 leading-relaxed">
                  Mỗi câu hỏi có 90 giây suy nghĩ. Trả lời chính xác trong 20 giây đầu được cộng thêm +30 điểm tốc độ.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start space-x-3">
              <div className="p-2 rounded-xl bg-indigo-100 text-indigo-600 shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">3 Câu Hỏi Ngẫu Nhiên</h4>
                <p className="text-slate-600 leading-relaxed">
                  Mỗi tầng có 3 biến thể câu hỏi tương tự. Mỗi lần vào hoặc leo lại sẽ ngẫu nhiên xuất hiện 1 trong 3 câu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/80 bg-white/70 py-4 px-6 text-center text-xs text-slate-500">
        Ứng dụng trò chơi học tập tương tác Chuyên đề Toán 6 • Chinh Phục Tháp Đôi: ƯCLN & BCNN • Bản quyền giáo dục
      </footer>
    </div>
  );
};
