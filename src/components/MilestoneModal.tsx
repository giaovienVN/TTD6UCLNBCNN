import React from 'react';
import { Crown, Sparkles, Award, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface MilestoneModalProps {
  isOpen: boolean;
  floor: number;
  bonusPoints: number;
  onContinue: () => void;
}

export const MilestoneModal: React.FC<MilestoneModalProps> = ({
  isOpen,
  floor,
  bonusPoints,
  onContinue,
}) => {
  if (!isOpen) return null;

  let title = `VƯỢT MỐC QUAN TRỌNG: TẦNG ${floor}`;
  let subTitle = 'Chúc mừng bạn đã đạt cột mốc số học xuất sắc!';
  let icon = <Award className="w-16 h-16 text-amber-500 animate-bounce" />;
  let badgeText = 'HUY HIỆU VƯỢT MỐC';
  let colorTheme = 'from-amber-500 to-orange-500';

  if (floor === 5) {
    title = 'CHIẾN CÔNG MỐC 1: TẦNG 5';
    subTitle = 'Bạn đã làm chủ hoàn toàn các bài toán thừa số và ước cơ bản!';
    icon = <ShieldCheck className="w-16 h-16 text-emerald-600 animate-bounce" />;
    badgeText = 'ĐÃ MỞ KHÓA TRẠM KIỂM SOÁT TẦNG 6';
    colorTheme = 'from-emerald-500 to-teal-600';
  } else if (floor === 10) {
    title = 'ĐỘT PHÁ MỐC 2: TẦNG 10 (NỬA CHẶNG ĐƯỜNG)';
    subTitle = 'Kỹ năng giải toán phân số và vận dụng thực tiễn của bạn rất vững chắc!';
    icon = <Zap className="w-16 h-16 text-amber-500 animate-bounce" />;
    badgeText = 'ĐÃ MỞ KHÓA TRẠM KIỂM SOÁT TẦNG 11';
    colorTheme = 'from-amber-500 to-orange-600';
  } else if (floor === 15) {
    title = 'HUY HOÀNG MỐC 3: TẦNG 15 (CỬA NGÕ ĐỈNH CAO)';
    subTitle = 'Chỉ còn 5 tầng nữa là chạm tay vào Vương miện tối thượng!';
    icon = <Sparkles className="w-16 h-16 text-indigo-600 animate-bounce" />;
    badgeText = 'ĐÃ MỞ KHÓA TRẠM KIỂM SOÁT TẦNG 16';
    colorTheme = 'from-indigo-600 to-purple-600';
  } else if (floor === 20) {
    title = 'ĐẠI THẮNG ĐỈNH THÁP: TẦNG 20!';
    subTitle = 'Bạn đã chinh phục toàn bộ 20 tầng tháp ma trận số học!';
    icon = <Crown className="w-16 h-16 text-amber-500 animate-bounce" />;
    badgeText = 'DANH HIỆU BẬC THẦY TỐI THƯỢNG';
    colorTheme = 'from-amber-500 via-orange-500 to-yellow-500';
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-fadeIn">
      {/* Stone Castle Window Modal */}
      <div className="max-w-md w-full bg-white border-4 border-amber-600 rounded-3xl p-6 md:p-8 shadow-2xl text-center relative overflow-hidden animate-milestone">
        {/* Castle crenellations trim at modal top */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 opacity-90" />

        {/* Ambient Glow */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-200/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-orange-200/60 rounded-full blur-3xl pointer-events-none" />

        {/* Big Animated Icon */}
        <div className="inline-flex p-4 rounded-3xl bg-amber-50 border-2 border-amber-300 shadow-md mb-4 mt-2">
          {icon}
        </div>

        {/* Badge Label */}
        <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-[11px] font-black tracking-wider uppercase mb-2 border border-amber-300">
          {badgeText}
        </div>

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-2 tracking-tight">
          {title}
        </h2>

        <p className="text-xs md:text-sm text-slate-600 mb-5 leading-relaxed px-2">
          {subTitle}
        </p>

        {/* Bonus Point Showcase */}
        <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border-2 border-amber-300 flex items-center justify-center space-x-3 shadow-inner">
          <Sparkles className="w-5 h-5 text-amber-600 animate-spin" />
          <div className="text-left">
            <span className="text-[10px] text-amber-800 font-bold uppercase tracking-wider block">
              Thưởng Vượt Cột Mốc
            </span>
            <span className="font-mono text-xl md:text-2xl font-black text-amber-700">
              +{bonusPoints} Điểm
            </span>
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={onContinue}
          className={`w-full py-4 px-6 rounded-2xl bg-gradient-to-r ${colorTheme} hover:opacity-95 font-bold text-white text-base shadow-lg shadow-amber-500/30 transition transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2 cursor-pointer`}
        >
          <span>
            {floor >= 20 ? 'Xem Lễ Trao Danh Hiệu' : 'Tiếp Tục Leo Tháp'}
          </span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
