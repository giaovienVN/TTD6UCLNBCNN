export type TowerType = 'ucln' | 'bcnn';
export type GameMode = 'timed' | 'untimed';

export interface Question {
  id: string;
  floor: number;
  levelTitle: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  hint: string;
}

export interface PlayerHistoryEntry {
  floor: number;
  question: string;
  userAnswerIndex: number | null;
  correctIndex: number;
  isCorrect: boolean;
  timeSpent: number;
  scoreEarned: number;
  explanation: string;
}

export type PlayerRank = 
  | 'Tập Sự Số Học'
  | 'Pháp Sư Ước Lượng'
  | 'Đại Sư Tính Toán'
  | 'Bậc Thầy Bội & Ước Tối Thượng';

export interface TowerStats {
  maxFloor: number;
  highScore: number;
  timesCompleted: number;
}
