import React from 'react';
import { HelpCircle, X, Lightbulb } from 'lucide-react';

interface HintModalProps {
  hint: string;
  floor: number;
  isOpen: boolean;
  onClose: () => void;
}

export const HintModal: React.FC<HintModalProps> = ({
  hint,
  floor,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="max-w-md w-full bg-white border border-amber-300 rounded-3xl p-6 shadow-2xl relative overflow-hidden text-slate-800">
        {/* Glow orb */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-100 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3 text-amber-600 mb-4">
          <div className="p-2.5 rounded-2xl bg-amber-50 border border-amber-200">
            <Lightbulb className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-900">Gợi Ý Thừa Số & Hướng Dẫn</h3>
            <span className="text-xs text-amber-700 font-mono font-medium">Thử thách Tầng {floor}</span>
          </div>
        </div>

        {/* Hint Content */}
        <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-200 text-sm text-slate-800 leading-relaxed mb-6">
          <div className="flex items-start space-x-2">
            <HelpCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p>{hint}</p>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 font-bold text-white text-sm shadow-md shadow-amber-500/20 transition cursor-pointer"
        >
          Đã Hiểu, Quay Lại Trả Lời
        </button>
      </div>
    </div>
  );
};
