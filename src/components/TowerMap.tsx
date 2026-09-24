import React, { useEffect, useRef } from 'react';
import { Crown, Check, Flag, Shield, Zap, Sparkles } from 'lucide-react';
import { TowerType } from '../types/game';

interface TowerMapProps {
  currentFloor: number;
  towerType: TowerType;
  maxFloorEver: number;
}

export const TowerMap: React.FC<TowerMapProps> = ({
  currentFloor,
  towerType,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeFloorRef = useRef<HTMLDivElement>(null);

  // Auto scroll to current floor
  useEffect(() => {
    if (activeFloorRef.current && scrollContainerRef.current) {
      activeFloorRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [currentFloor]);

  const isUcln = towerType === 'ucln';

  // Array from 20 down to 1 (so 20 is at top, 1 at bottom)
  const floors = Array.from({ length: 20 }, (_, i) => 20 - i);

  return (
    <div className="bg-white border-2 border-amber-300/80 rounded-3xl p-4 flex flex-col h-[380px] lg:h-[calc(100vh-140px)] shadow-md relative overflow-hidden">
      {/* Tower Spire Battlement Decor */}
      <div className="flex justify-between items-center px-2 pb-2 -mt-1 border-b border-amber-200/80">
        <span className="text-xs text-amber-800 font-black tracking-wider flex items-center space-x-1">
          <span>🏰</span>
          <span>THÁP THÀNH SỐ HỌC</span>
        </span>
        <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full border border-amber-300">
          20 TẦNG MA TRẬN
        </span>
      </div>

      {/* Map Header */}
      <div className="flex items-center justify-between py-2.5 mb-2 shrink-0">
        <div className="flex items-center space-x-2">
          <div className={`p-2 rounded-xl ${isUcln ? 'bg-indigo-100 text-indigo-700' : 'bg-amber-100 text-amber-700'}`}>
            {isUcln ? <Shield className="w-4 h-4" /> : <Zap className="w-4 h-4" />}
          </div>
          <div>
            <h3 className="font-black text-sm text-slate-900">Bản Đồ Leo Tháp</h3>
            <span className="text-[11px] text-slate-500 block -mt-0.5 font-medium">Từ Đáy Lên Đỉnh</span>
          </div>
        </div>

        <div className="px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-xs font-mono font-bold text-slate-800 shadow-2xs">
          Tầng <span className="text-amber-600 font-black text-sm">{currentFloor}</span> / 20
        </div>
      </div>

      {/* Tower Levels Scrollable Area */}
      <div
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto pr-1 space-y-1.5 scroll-smooth custom-scrollbar select-none"
      >
        {floors.map((floor) => {
          const isCurrent = floor === currentFloor;
          const isPassed = floor < currentFloor;
          const isBoss = floor === 20;
          const isCheckpoint = floor === 1 || floor === 6 || floor === 11 || floor === 16;
          const isMilestone = floor === 5 || floor === 10 || floor === 15;

          let cardStyle = 'bg-slate-50/80 border-slate-200 text-slate-600 hover:border-amber-300 hover:bg-amber-50/20';

          if (isCurrent) {
            cardStyle = 'bg-amber-50 border-2 border-amber-500 text-amber-950 font-bold shadow-md shadow-amber-200/60 ring-2 ring-amber-300/50';
          } else if (isPassed) {
            cardStyle = 'bg-emerald-50/70 border-emerald-300 text-emerald-900 font-medium';
          } else if (isMilestone || isBoss) {
            cardStyle = 'bg-amber-50/40 border border-amber-200/90 text-amber-900 font-semibold';
          }

          return (
            <div
              key={floor}
              ref={isCurrent ? activeFloorRef : null}
              id={`tower-floor-${floor}`}
              className={`relative flex items-center justify-between p-2.5 rounded-2xl border transition-all duration-200 ${cardStyle}`}
            >
              {/* Floor Number & Label */}
              <div className="flex items-center space-x-2.5">
                <span
                  className={`w-7 h-7 rounded-xl flex items-center justify-center font-mono text-xs font-black ${
                    isCurrent
                      ? 'bg-amber-500 text-white shadow-xs'
                      : isPassed
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      : isBoss
                      ? 'bg-amber-100 text-amber-900 border border-amber-300'
                      : 'bg-white text-slate-500 border border-slate-200'
                  }`}
                >
                  {floor}
                </span>

                <div className="flex flex-col">
                  <div className="flex items-center space-x-1.5">
                    <span className={`text-xs md:text-sm font-bold ${isCurrent ? 'text-slate-900' : ''}`}>
                      {isBoss ? 'ĐỈNH THÁP' : `Tầng ${floor}`}
                    </span>

                    {/* Boss Badge */}
                    {isBoss && (
                      <span className="inline-flex items-center space-x-1 px-1.5 py-0.5 rounded-md bg-amber-100 border border-amber-400 text-amber-800 text-[10px] font-black uppercase tracking-wider animate-pulse">
                        <Crown className="w-3 h-3 text-amber-600" />
                        <span>BOSS</span>
                      </span>
                    )}

                    {/* Checkpoint Badge (Tầng 1, 6, 11, 16) */}
                    {isCheckpoint && (
                      <span className="inline-flex items-center space-x-0.5 px-1.5 py-0.5 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-bold">
                        <Flag className="w-2.5 h-2.5" />
                        <span>Trạm {floor === 1 ? 'Khởi hành' : floor}</span>
                      </span>
                    )}

                    {/* Milestone Badge (Tầng 5, 10, 15) */}
                    {isMilestone && (
                      <span className="inline-flex items-center space-x-0.5 px-1.5 py-0.5 rounded-md bg-amber-100 border border-amber-300 text-amber-800 text-[10px] font-black">
                        <Sparkles className="w-2.5 h-2.5 text-amber-600" />
                        <span>Mốc {floor}</span>
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] text-slate-500 font-medium">
                    {floor >= 16 ? 'Cực hạn • HSG' : floor >= 11 ? 'Nâng cao' : floor >= 6 ? 'Vận dụng' : 'Cơ bản'}
                  </span>
                </div>
              </div>

              {/* Status on Right */}
              <div className="flex items-center space-x-1">
                {isCurrent && (
                  <div className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs shadow-xs animate-bounce">
                    <span>🧙‍♂️</span>
                    <span className="text-[11px] tracking-wide">BẠN</span>
                  </div>
                )}

                {isPassed && (
                  <div className="w-6 h-6 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 font-black">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                )}

                {!isCurrent && !isPassed && (
                  <span className="text-slate-400 text-xs px-1">
                    {isBoss ? '👑' : isMilestone ? '⭐' : '🔒'}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
