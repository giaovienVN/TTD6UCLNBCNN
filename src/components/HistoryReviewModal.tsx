import React, { useState } from 'react';
import { PlayerHistoryEntry, Question } from '../types/game';
import { X, CheckCircle2, XCircle, BookOpen, Clock } from 'lucide-react';

interface HistoryReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  history: PlayerHistoryEntry[];
  allQuestions: Question[];
  towerName: string;
}

export const HistoryReviewModal: React.FC<HistoryReviewModalProps> = ({
  isOpen,
  onClose,
  history,
  allQuestions,
  towerName,
}) => {
  const [tab, setTab] = useState<'attempted' | 'all'>('attempted');

  if (!isOpen) return null;

  // Map history by floor
  const historyMap = new Map<number, PlayerHistoryEntry>();
  history.forEach((h) => historyMap.set(h.floor, h));

  const questionsToShow = tab === 'attempted'
    ? allQuestions.filter((q) => historyMap.has(q.floor))
    : allQuestions;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="max-w-4xl w-full h-[90vh] bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-2xl flex flex-col relative overflow-hidden text-slate-800">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 shrink-0">
          <div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              <span>Sổ Tay Lời Giải & Phân Tích Chi Tiết</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {towerName} • Kiểm tra phương pháp giải và khắc sâu kiến thức
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center space-x-2 py-3 border-b border-slate-200 shrink-0">
          <button
            onClick={() => setTab('attempted')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
              tab === 'attempted'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Đã làm trong lượt chơi ({history.length})
          </button>

          <button
            onClick={() => setTab('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
              tab === 'all'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Xem trọn bộ 20 Tầng ({allQuestions.length})
          </button>
        </div>

        {/* Question List */}
        <div className="flex-1 overflow-y-auto space-y-4 py-4 pr-1 custom-scrollbar">
          {questionsToShow.length === 0 ? (
            <div className="text-center py-16 text-slate-400 text-sm">
              Chưa có câu hỏi nào được trả lời trong lượt này. Bạn có thể chọn xem "Xem trọn bộ 20 Tầng".
            </div>
          ) : (
            questionsToShow.map((q) => {
              const attempt = historyMap.get(q.floor);
              const isAttempted = !!attempt;
              const isCorrect = attempt?.isCorrect;

              return (
                <div
                  key={q.id}
                  className={`p-4 md:p-5 rounded-2xl border transition-all ${
                    !isAttempted
                      ? 'bg-slate-50 border-slate-200'
                      : isCorrect
                      ? 'bg-emerald-50/70 border-emerald-300'
                      : 'bg-rose-50/70 border-rose-300'
                  }`}
                >
                  {/* Floor tag & Result */}
                  <div className="flex items-center justify-between mb-2.5 flex-wrap gap-2">
                    <div className="flex items-center space-x-2">
                      <span className="px-2.5 py-0.5 rounded-lg bg-white border border-slate-200 font-mono text-xs font-bold text-slate-800 shadow-xs">
                        Tầng {q.floor}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">{q.levelTitle}</span>
                    </div>

                    {isAttempted ? (
                      <div className="flex items-center space-x-3 text-xs">
                        <span className="flex items-center space-x-1 text-slate-500 font-mono">
                          <Clock className="w-3 h-3" />
                          <span>{attempt.timeSpent}s</span>
                        </span>
                        {isCorrect ? (
                          <span className="flex items-center space-x-1 text-emerald-700 font-bold">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Đúng (+{attempt.scoreEarned}đ)</span>
                          </span>
                        ) : (
                          <span className="flex items-center space-x-1 text-rose-700 font-bold">
                            <XCircle className="w-3.5 h-3.5 text-rose-600" />
                            <span>{attempt.userAnswerIndex === null ? 'Hết giờ' : 'Chưa đúng'}</span>
                          </span>
                        )}
                      </div>
                    ) : (
                      <span className="text-xs text-slate-400 italic">Chưa leo tới</span>
                    )}
                  </div>

                  {/* Question */}
                  <h4 className="text-sm md:text-base font-bold text-slate-900 mb-3">
                    {q.question}
                  </h4>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3.5">
                    {q.options.map((opt, optIdx) => {
                      const isCorrectOpt = optIdx === q.correctIndex;
                      const isUserChoice = attempt?.userAnswerIndex === optIdx;

                      let optClass = 'bg-white border-slate-200 text-slate-700';
                      if (isCorrectOpt) {
                        optClass = 'bg-emerald-100/70 border-emerald-400 text-emerald-900 font-bold';
                      } else if (isUserChoice && !isCorrectOpt) {
                        optClass = 'bg-rose-100/70 border-rose-400 text-rose-900 line-through';
                      }

                      return (
                        <div
                          key={optIdx}
                          className={`p-2.5 rounded-xl border text-xs flex items-center space-x-2 ${optClass}`}
                        >
                          <span className="w-5 h-5 rounded-md bg-white/90 border border-slate-200 flex items-center justify-center font-mono font-bold shrink-0 text-[10px]">
                            {['A', 'B', 'C', 'D'][optIdx]}
                          </span>
                          <span className="flex-1">{opt}</span>
                          {isCorrectOpt && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                          {isUserChoice && !isCorrectOpt && <XCircle className="w-4 h-4 text-rose-600 shrink-0" />}
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation box */}
                  <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed shadow-xs">
                    <div className="flex items-center space-x-1.5 text-indigo-700 font-bold mb-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Phương pháp & Lời giải:</span>
                    </div>
                    <p>{q.explanation}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition cursor-pointer"
          >
            Đóng Sổ Tay
          </button>
        </div>

      </div>
    </div>
  );
};
