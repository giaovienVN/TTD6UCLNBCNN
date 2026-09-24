import React from 'react';
import { GameMode } from '../types/game';
import { Heart, Flame, Clock, Sparkles, HelpCircle, Zap, ZapOff, Infinity as InfinityIcon } from 'lucide-react';

interface StatusBarProps {
  currentFloor: number;
  lives: number;
  score: number;
  streak: number;
  timeLeft: number;
  gameMode: GameMode;
  hintUsesLeft: number;
  fiftyFiftyUsesLeft: number;
  onUseHint: () => void;
  onUseFiftyFifty: () => void;
  isAnswerSubmitted: boolean;
  isFiftyFiftyActive: boolean;
}

export const StatusBar: React.FC<StatusBarProps> = ({
  lives,
  score,
  streak,
  timeLeft,
  gameMode,
  hintUsesLeft,
  fiftyFiftyUsesLeft,
  onUseHint,
  onUseFiftyFifty,
  isAnswerSubmitted,
  isFiftyFiftyActive,
}) => {
  const isTimed = gameMode === 'timed';

  // Determine streak badge
  let multiplierText = 'x1.0';
  let multiplierBg = 'text-slate-500 bg-slate-100 border-slate-200';
  if (streak >= 4) {
    multiplierText = 'x2.0 🔥';
    multiplierBg = 'text-orange-700 bg-orange-100 border-orange-200 font-black';
  } else if (streak === 3) {
    multiplierText = 'x1.5 ⚡';
    multiplierBg = 'text-amber-700 bg-amber-100 border-amber-200 font-bold';
  } else if (streak === 2) {
    multiplierText = 'x1.2 ✨';
    multiplierBg = 'text-amber-600 bg-amber-50 border-amber-200 font-semibold';
  }

  // Timer color
  const timerPercentage = Math.max(0, (timeLeft / 90) * 100);
  const isUrgent = isTimed && timeLeft <= 15;

  return (
    <div className="space-y-3">
      {/* 4 Stat Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 md:gap-3.5">
        
        {/* Lives / Sinh lực */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span className="font-semibold text-slate-700">Sinh Lực</span>
            <span className="text-[10px] text-slate-400 font-mono">3 Mạng</span>
          </div>
          <div className="flex items-center space-x-1.5 pt-1">
            {[0, 1, 2].map((idx) => (
              <Heart
                key={idx}
                className={`w-5 h-5 transition-all duration-300 ${
                  idx < lives
                    ? 'fill-rose-500 text-rose-500 scale-100 drop-shadow-xs'
                    : 'fill-slate-100 text-slate-300 scale-90'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Điểm tích lũy */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span className="font-semibold text-slate-700">Điểm Tích Lũy</span>
            <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
              isTimed ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-slate-100 text-slate-700'
            }`}>
              {isTimed ? '🔥 Thưởng x1.5' : 'Tiêu chuẩn'}
            </span>
          </div>
          <div className="font-mono text-xl md:text-2xl font-black text-amber-600 tracking-tight">
            {score.toLocaleString()} <span className="text-xs font-normal text-amber-500">đ</span>
          </div>
        </div>

        {/* Streak Combo */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span className="font-semibold text-slate-700 flex items-center space-x-1">
              <Flame className="w-3.5 h-3.5 text-orange-500" />
              <span>Chuỗi Đúng</span>
            </span>
            <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${multiplierBg}`}>
              {multiplierText}
            </span>
          </div>
          <div className="flex items-baseline space-x-1.5 font-mono text-xl md:text-2xl font-black text-orange-600">
            <span>{streak}</span>
            <span className="text-xs font-normal text-slate-500">liên tiếp</span>
          </div>
        </div>

        {/* Timer / Time Mode Card */}
        {isTimed ? (
          /* Countdown Timer in Timed Mode */
          <div className={`bg-white border rounded-2xl p-3.5 shadow-xs flex flex-col justify-between transition-colors ${
            isUrgent ? 'border-rose-400 bg-rose-50/60' : 'border-slate-200/90'
          }`}>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span className="font-semibold text-slate-700 flex items-center space-x-1">
                <Clock className={`w-3.5 h-3.5 ${isUrgent ? 'text-rose-600 animate-spin' : 'text-emerald-600'}`} />
                <span>Thời Gian</span>
              </span>
              <span
                className={`font-mono text-xs font-bold ${
                  isUrgent ? 'text-rose-600 animate-pulse font-black' : 'text-emerald-700'
                }`}
              >
                {timeLeft}s
              </span>
            </div>

            <div className="space-y-1">
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200/60">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    isUrgent
                      ? 'bg-rose-500 animate-pulse'
                      : timeLeft <= 45
                      ? 'bg-amber-500'
                      : 'bg-emerald-500'
                  }`}
                  style={{ width: `${timerPercentage}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>0s</span>
                {timeLeft >= 70 && (
                  <span className="text-emerald-600 font-bold flex items-center space-x-0.5">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>+40đ tốc độ</span>
                  </span>
                )}
                <span>90s</span>
              </div>
            </div>
          </div>
        ) : (
          /* Relaxed / Untimed Mode Card */
          <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-3.5 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
              <span className="font-semibold text-emerald-900 flex items-center space-x-1">
                <InfinityIcon className="w-3.5 h-3.5 text-emerald-600" />
                <span>Thời Gian</span>
              </span>
              <span className="font-bold text-xs text-emerald-700 font-mono">
                Không giới hạn
              </span>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] text-emerald-800 font-medium">
                🌿 Tự do suy nghĩ & nháp
              </span>
              <span className="text-[10px] bg-white text-emerald-900 px-2 py-0.5 rounded-full border border-emerald-300 font-bold font-mono">
                100đ/câu
              </span>
            </div>
          </div>
        )}

      </div>

      {/* Power-ups Ribbon */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-2.5 md:p-3 flex items-center justify-between flex-wrap gap-2 shadow-xs">
        <div className="flex items-center space-x-2 text-xs font-bold text-slate-700">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>Bùa Hỗ Trợ:</span>
        </div>

        <div className="flex items-center space-x-2">
          {/* Hint Power-up */}
          <button
            onClick={onUseHint}
            disabled={hintUsesLeft <= 0 || isAnswerSubmitted}
            className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center space-x-1.5 transition cursor-pointer ${
              hintUsesLeft > 0 && !isAnswerSubmitted
                ? 'bg-amber-50 border-amber-300 text-amber-800 hover:bg-amber-100 shadow-xs'
                : 'bg-slate-50 border-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
            <span>Gợi ý thừa số</span>
            <span className="w-5 h-5 rounded-full bg-white border border-amber-200 text-amber-800 font-mono text-[10px] flex items-center justify-center font-bold">
              {hintUsesLeft}
            </span>
          </button>

          {/* 50/50 Power-up */}
          <button
            onClick={onUseFiftyFifty}
            disabled={fiftyFiftyUsesLeft <= 0 || isAnswerSubmitted || isFiftyFiftyActive}
            className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center space-x-1.5 transition cursor-pointer ${
              fiftyFiftyUsesLeft > 0 && !isAnswerSubmitted && !isFiftyFiftyActive
                ? 'bg-sky-50 border-sky-300 text-sky-800 hover:bg-sky-100 shadow-xs'
                : 'bg-slate-50 border-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            {isFiftyFiftyActive ? (
              <ZapOff className="w-3.5 h-3.5 text-slate-400" />
            ) : (
              <Zap className="w-3.5 h-3.5 text-sky-600" />
            )}
            <span>Loại trừ 50/50</span>
            <span className="w-5 h-5 rounded-full bg-white border border-sky-200 text-sky-800 font-mono text-[10px] flex items-center justify-center font-bold">
              {fiftyFiftyUsesLeft}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
