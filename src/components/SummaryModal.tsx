import React from 'react';
import { PlayerRank, TowerType, GameMode } from '../types/game';
import { Crown, RotateCcw, ShieldAlert, Award, Clock, Flame, BookOpen, Layers, Shield, Infinity as InfinityIcon } from 'lucide-react';

interface SummaryModalProps {
  isOpen: boolean;
  isCleared: boolean;
  floorReached: number;
  score: number;
  timeSpentSeconds: number;
  maxStreak: number;
  rank: PlayerRank;
  towerType: TowerType;
  gameMode?: GameMode;
  checkpointFloor: number;
  onRespawnCheckpoint: () => void;
  onRestart: () => void;
  onChangeTower: () => void;
  onReviewHistory: () => void;
}

export const SummaryModal: React.FC<SummaryModalProps> = ({
  isOpen,
  isCleared,
  floorReached,
  score,
  timeSpentSeconds,
  maxStreak,
  rank,
  towerType,
  gameMode = 'timed',
  checkpointFloor,
  onRespawnCheckpoint,
  onRestart,
  onChangeTower,
  onReviewHistory,
}) => {
  if (!isOpen) return null;

  const isUcln = towerType === 'ucln';
  const towerName = isUcln ? 'Tháp Phân Rã (ƯCLN)' : 'Tháp Bội Số (BCNN)';

  // Format time
  const minutes = Math.floor(timeSpentSeconds / 60);
  const seconds = timeSpentSeconds % 60;
  const timeFormatted = `${minutes > 0 ? `${minutes}p ` : ''}${seconds}s`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="max-w-xl w-full bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-2xl text-center relative overflow-hidden my-8 text-slate-800">
        
        {/* Ambient Top Glow */}
        <div
          className={`absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl pointer-events-none ${
            isCleared ? 'bg-amber-100' : 'bg-rose-100'
          }`}
        />

        {/* Big Icon */}
        <div className="inline-flex p-4 rounded-3xl bg-slate-50 border border-slate-200 mb-4 shadow-sm">
          {isCleared ? (
            <Crown className="w-12 h-12 text-amber-500 animate-bounce" />
          ) : (
            <ShieldAlert className="w-12 h-12 text-rose-500" />
          )}
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-1.5 tracking-tight">
          {isCleared
            ? 'CHINH PHỤC ĐỈNH THÁP THÀNH CÔNG!'
            : `HẾT 3 TIM - DỪNG BƯỚC TẠI TẦNG ${floorReached}`}
        </h2>

        {!isCleared && (
          <p className="text-xs text-rose-700 font-bold mb-2">
            💔 Bạn đã dùng hết 3 mạng sinh lực. Mặc định phải quay về Tầng 1 để bắt đầu lại!
          </p>
        )}

        <div className="flex items-center justify-center space-x-2 mb-6">
          <span className="text-xs md:text-sm text-slate-500">
            {towerName} • Hoàn thành trong <strong className="text-slate-800 font-semibold">{timeFormatted}</strong>
          </span>
          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
            gameMode === 'timed'
              ? 'bg-amber-100 text-amber-900 border border-amber-300'
              : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
          }`}>
            {gameMode === 'timed' ? '⏱️ Có hạn giờ (x1.5 🔥)' : '🌿 Không hạn giờ'}
          </span>
        </div>

        {/* Achieved Rank Banner */}
        <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border border-amber-200 relative shadow-xs">
          <span className="text-[11px] uppercase tracking-wider text-amber-800 font-bold block mb-1">
            Danh Hiệu Số Học Đạt Được
          </span>
          <span className="text-xl md:text-2xl font-black text-amber-900">
            « {rank} »
          </span>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 flex flex-col justify-center">
            <span className="text-[11px] text-slate-500 flex items-center justify-center space-x-1 mb-1 font-semibold">
              <Award className="w-3.5 h-3.5 text-amber-500" />
              <span>Tổng Điểm</span>
            </span>
            <span className="font-mono text-lg md:text-xl font-black text-amber-600">
              {score.toLocaleString()} đ
            </span>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 flex flex-col justify-center">
            <span className="text-[11px] text-slate-500 flex items-center justify-center space-x-1 mb-1 font-semibold">
              <Layers className="w-3.5 h-3.5 text-sky-600" />
              <span>Tầng Vượt</span>
            </span>
            <span className="font-mono text-lg md:text-xl font-black text-sky-600">
              {floorReached} / 20
            </span>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 flex flex-col justify-center">
            <span className="text-[11px] text-slate-500 flex items-center justify-center space-x-1 mb-1 font-semibold">
              <Flame className="w-3.5 h-3.5 text-orange-500" />
              <span>Chuỗi Kỷ Lục</span>
            </span>
            <span className="font-mono text-lg md:text-xl font-black text-orange-600">
              {maxStreak} câu
            </span>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5">
          {/* Replay full tower: Always default return to Floor 1 on failure when out of lives */}
          <button
            onClick={onRestart}
            className={`w-full py-3.5 rounded-2xl font-black text-sm shadow-md transition cursor-pointer flex items-center justify-center space-x-2 ${
              isCleared
                ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300'
                : 'bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white shadow-rose-600/20'
            }`}
          >
            <RotateCcw className="w-4 h-4" />
            <span>{isCleared ? 'Chinh Phục Lại Từ Tầng 1' : '🔄 Mặc Định Bắt Đầu Lại Từ Tầng 1'}</span>
          </button>

          {/* Bottom Dual Buttons */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <button
              onClick={onReviewHistory}
              className="py-2.5 px-3 rounded-xl bg-indigo-50 hover:bg-indigo-100 font-semibold text-indigo-700 text-xs border border-indigo-200 transition cursor-pointer flex items-center justify-center space-x-1.5"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Xem Sổ Tay Lời Giải</span>
            </button>

            <button
              onClick={onChangeTower}
              className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 font-semibold text-slate-700 text-xs border border-slate-300 transition cursor-pointer flex items-center justify-center space-x-1.5"
            >
              <span>🏛️ Chọn Tháp Khác</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
