import React from 'react';
import { Question } from '../types/game';
import { CheckCircle2, XCircle, ArrowRight, BookOpen, Sparkles, RotateCcw, Shield, Flag } from 'lucide-react';

interface ChallengeAreaProps {
  question: Question;
  currentFloor: number;
  selectedAnswer: number | null;
  isAnswerSubmitted: boolean;
  hiddenOptionIndices: number[];
  onSelectOption: (index: number) => void;
  onNextStep: () => void;
  checkpointFloor: number;
  checkpointScore: number;
  onReturnToCheckpoint: () => void;
  onReturnToFloor1: () => void;
  lastPointsEarned: number;
  lives: number;
}

export const ChallengeArea: React.FC<ChallengeAreaProps> = ({
  question,
  currentFloor,
  selectedAnswer,
  isAnswerSubmitted,
  hiddenOptionIndices,
  onSelectOption,
  onNextStep,
  checkpointFloor,
  checkpointScore,
  onReturnToCheckpoint,
  onReturnToFloor1,
  lastPointsEarned,
  lives,
}) => {
  const letters = ['A', 'B', 'C', 'D'];
  const isCorrect = selectedAnswer === question.correctIndex;

  return (
    <div className="bg-white border-2 border-amber-200/90 rounded-3xl p-6 md:p-8 lg:p-9 shadow-md flex-1 flex flex-col justify-between relative overflow-hidden">
      
      {/* Decorative Castle Wall Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 opacity-80" />

      {/* Top Question Header */}
      <div>
        <div className="flex items-center justify-between mb-5 flex-wrap gap-2.5">
          <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs md:text-sm font-bold shadow-2xs">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>{question.levelTitle}</span>
          </span>

          <span className="text-xs md:text-sm text-slate-500 font-mono font-bold bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
            Thử thách Tầng <strong className="text-amber-700 font-black">{currentFloor}</strong> / 20
          </span>
        </div>

        {/* Central Question Text (ENLARGED > 20% FOR PROMINENT FOCUS) */}
        <h3 className="text-xl md:text-2xl lg:text-[1.65rem] font-black text-slate-900 mb-7 leading-relaxed md:leading-normal tracking-tight">
          {question.question}
        </h3>

        {/* 4 Answer Options (ENLARGED & REFINED FOR TOWER QUEST) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {question.options.map((option, idx) => {
            const isHidden = hiddenOptionIndices.includes(idx);
            const isThisSelected = selectedAnswer === idx;
            const isThisCorrect = idx === question.correctIndex;

            let buttonClass = 'bg-slate-50/80 border-2 border-slate-200 hover:border-amber-400 hover:bg-amber-50/30 text-slate-800 hover:shadow-sm';
            let badgeClass = 'bg-white border-2 border-slate-200 text-slate-700 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500';

            if (isHidden) {
              buttonClass = 'opacity-25 bg-slate-100 border-2 border-slate-200 text-slate-400 line-through pointer-events-none cursor-not-allowed';
              badgeClass = 'bg-slate-200 text-slate-400 border-transparent';
            } else if (isAnswerSubmitted) {
              if (isThisCorrect) {
                buttonClass = 'bg-emerald-50 border-2 border-emerald-500 text-emerald-950 shadow-md';
                badgeClass = 'bg-emerald-600 text-white font-black border-transparent scale-105';
              } else if (isThisSelected) {
                buttonClass = 'bg-rose-50 border-2 border-rose-500 text-rose-950 shadow-md';
                badgeClass = 'bg-rose-600 text-white font-black border-transparent scale-105';
              } else {
                buttonClass = 'opacity-35 bg-slate-50 border-2 border-slate-200 text-slate-500 cursor-not-allowed';
                badgeClass = 'bg-slate-100 text-slate-400 border-slate-200';
              }
            }

            return (
              <button
                key={idx}
                disabled={isAnswerSubmitted || isHidden}
                onClick={() => onSelectOption(idx)}
                className={`group relative w-full p-4 md:p-5 lg:p-6 rounded-2xl border text-left transition-all duration-150 flex items-start space-x-4 cursor-pointer ${buttonClass}`}
              >
                {/* Larger Option Letter Badge */}
                <span className={`w-9 h-9 md:w-11 md:h-11 rounded-xl flex items-center justify-center font-mono font-black text-sm md:text-base shrink-0 transition-all shadow-xs ${badgeClass}`}>
                  {letters[idx]}
                </span>

                {/* Larger Option Text */}
                <span className="text-base md:text-lg font-bold flex-1 pt-1 md:pt-1.5 leading-relaxed">
                  {option}
                </span>

                {isAnswerSubmitted && isThisCorrect && (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                )}
                {isAnswerSubmitted && isThisSelected && !isThisCorrect && (
                  <XCircle className="w-6 h-6 text-rose-600 shrink-0 mt-1" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Answer Feedback & Explanation Card (ENLARGED & CLEAR) */}
      {isAnswerSubmitted && (
        <div
          className={`mt-7 p-5 md:p-6 rounded-2xl border-2 transition-all animate-fadeIn ${
            isCorrect
              ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950 shadow-md'
              : 'bg-rose-50/90 border-rose-300 text-rose-950 shadow-md'
          }`}
        >
          {/* Header & Primary Actions */}
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <div className="flex items-center space-x-2.5">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  <span className="font-black text-base md:text-lg text-emerald-700">
                    Chính xác! (+{lastPointsEarned} điểm)
                  </span>
                </>
              ) : (
                <>
                  <XCircle className="w-6 h-6 text-rose-600" />
                  <span className="font-black text-base md:text-lg text-rose-700">
                    {selectedAnswer === null ? 'Hết giờ!' : 'Chưa chính xác!'}
                    {lives > 1 ? ` (Hiện còn ${lives} tim)` : ' (Đã hết 3 tim!)'}
                  </span>
                </>
              )}
            </div>

            {/* Advance Button if correct */}
            {isCorrect && (
              <button
                onClick={onNextStep}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 font-black text-white text-sm md:text-base shadow-md shadow-emerald-600/25 transition transform active:scale-95 flex items-center space-x-2 cursor-pointer"
              >
                <span>
                  {currentFloor >= 20 ? 'Chinh Phục Đỉnh Tháp' : 'Lên Tầng Tiếp Theo'}
                </span>
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Failure Resolution & Score Rollback */}
          {!isCorrect && (
            <div className="space-y-3 mb-4">
              {/* Checkpoint score rollback notification */}
              <div className="p-3.5 bg-amber-50/90 rounded-xl border border-amber-300 flex items-center justify-between text-xs text-amber-950 shadow-2xs">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-amber-700 shrink-0" />
                  <span className="font-bold">Điểm tích lũy đã quay về mốc Trạm Tầng {checkpointFloor}:</span>
                </div>
                <span className="font-mono font-black text-sm text-amber-800 shrink-0">
                  {checkpointScore.toLocaleString()} đ
                </span>
              </div>

              {/* Action buttons */}
              <div className="p-3.5 rounded-xl bg-white border border-rose-200 shadow-xs">
                <div className="text-xs md:text-sm text-rose-800 font-bold mb-3 flex items-center space-x-2">
                  <Flag className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Quy tắc: Leo tiếp sẽ mất 1 tim • Hết 3 tim mặc định về Tầng 1</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {lives > 1 ? (
                    <button
                      onClick={onReturnToCheckpoint}
                      className="py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 font-black text-white text-xs md:text-sm shadow-md transition flex flex-col items-center justify-center cursor-pointer"
                    >
                      <div className="flex items-center space-x-1.5">
                        <Shield className="w-4 h-4" />
                        <span>Leo tiếp từ Trạm (Tầng {checkpointFloor})</span>
                      </div>
                      <span className="text-[11px] font-medium opacity-90 text-amber-100 mt-0.5">
                        Mất 1 tim • Còn {lives - 1} tim
                      </span>
                    </button>
                  ) : (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-300 text-rose-800 text-xs font-bold text-center flex items-center justify-center space-x-1.5">
                      <span>💔 Đã hết 3 tim! Mặc định về Tầng 1</span>
                    </div>
                  )}

                  <button
                    onClick={onReturnToFloor1}
                    className={`py-3 px-4 rounded-xl font-black text-xs md:text-sm transition flex flex-col items-center justify-center cursor-pointer ${
                      lives <= 1
                        ? 'bg-rose-600 hover:bg-rose-700 text-white shadow-md'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300'
                    }`}
                  >
                    <div className="flex items-center space-x-1.5">
                      <RotateCcw className="w-4 h-4" />
                      <span>Bắt Đầu Lại Từ Tầng 1</span>
                    </div>
                    <span className={`text-[11px] font-medium mt-0.5 ${lives <= 1 ? 'text-rose-100' : 'text-slate-500'}`}>
                      {lives <= 1 ? 'Mặc định khi hết 3 tim' : 'Hồi 3 tim • Làm lại từ đầu'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Detailed explanation */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 text-sm md:text-base text-slate-700 leading-relaxed shadow-xs">
            <div className="flex items-center space-x-2 text-indigo-700 font-black mb-1.5">
              <BookOpen className="w-4 h-4" />
              <span>Lời giải chi tiết:</span>
            </div>
            <p className="font-medium">{question.explanation}</p>
          </div>
        </div>
      )}

    </div>
  );
};
