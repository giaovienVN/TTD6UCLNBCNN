import { Question, TowerType } from '../types/game';
import { uclnQuestionsPool } from './uclnQuestions';
import { bcnnQuestionsPool } from './bcnnQuestions';

export { uclnQuestionsPool, bcnnQuestionsPool };

// Helper to get random 1 of 3 questions for a specific floor
export function getRandomQuestionForFloor(tower: TowerType, floor: number): Question {
  const pool = tower === 'ucln' ? uclnQuestionsPool[floor] : bcnnQuestionsPool[floor];
  if (!pool || pool.length === 0) {
    // Fallback if floor not found
    return {
      id: `${tower}-${floor}-fallback`,
      floor,
      levelTitle: `Tầng ${floor}`,
      question: `Câu hỏi ôn tập Tầng ${floor}`,
      options: ['Đáp án A', 'Đáp án B', 'Đáp án C', 'Đáp án D'],
      correctIndex: 0,
      explanation: 'Lời giải chi tiết cho câu hỏi.',
      hint: 'Gợi ý phân tích thừa số nguyên tố.'
    };
  }
  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}

// Get all 3 questions for a floor
export function getQuestionsForFloor(tower: TowerType, floor: number): Question[] {
  const pool = tower === 'ucln' ? uclnQuestionsPool[floor] : bcnnQuestionsPool[floor];
  return pool || [];
}

// Default single list (e.g. for fallback or exports)
export const uclnQuestions: Question[] = Object.keys(uclnQuestionsPool)
  .sort((a, b) => Number(a) - Number(b))
  .map(k => uclnQuestionsPool[Number(k)][0]);

export const bcnnQuestions: Question[] = Object.keys(bcnnQuestionsPool)
  .sort((a, b) => Number(a) - Number(b))
  .map(k => bcnnQuestionsPool[Number(k)][0]);

export function getAllQuestions(tower: TowerType): Question[] {
  return tower === 'ucln' ? uclnQuestions : bcnnQuestions;
}
