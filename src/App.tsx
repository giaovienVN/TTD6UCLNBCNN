import { useState, useEffect, useRef, useCallback } from 'react';
import { TowerType, PlayerHistoryEntry, PlayerRank, TowerStats, Question, GameMode } from './types/game';
import { getRandomQuestionForFloor, getAllQuestions } from './data/questions';
import { sound } from './utils/sound';
import { ModeSelect } from './components/ModeSelect';
import { TowerMap } from './components/TowerMap';
import { StatusBar } from './components/StatusBar';
import { ChallengeArea } from './components/ChallengeArea';
import { HintModal } from './components/HintModal';
import { SummaryModal } from './components/SummaryModal';
import { HistoryReviewModal } from './components/HistoryReviewModal';
import { MilestoneModal } from './components/MilestoneModal';
import { TowerBriefingModal } from './components/TowerBriefingModal';
import confetti from 'canvas-confetti';
import { ArrowLeft, Volume2, VolumeX, Download, Shield, Sparkles, BookOpen, Clock, Infinity as InfinityIcon } from 'lucide-react';
import { downloadStandaloneHtmlFile } from './utils/exportHtml';

export default function App() {
  // Screen state
  const [currentScreen, setCurrentScreen] = useState<'mode_select' | 'game'>('mode_select');
  const [currentTower, setCurrentTower] = useState<TowerType>('ucln');
  const [gameMode, setGameMode] = useState<GameMode>('timed');

  // Stats in localStorage
  const [uclnStats, setUclnStats] = useState<TowerStats>({ maxFloor: 0, highScore: 0, timesCompleted: 0 });
  const [bcnnStats, setBcnnStats] = useState<TowerStats>({ maxFloor: 0, highScore: 0, timesCompleted: 0 });

  // Game run state
  const [currentFloor, setCurrentFloor] = useState<number>(1);
  const [activeQuestion, setActiveQuestion] = useState<Question>(() => getRandomQuestionForFloor('ucln', 1));
  const [lives, setLives] = useState<number>(3);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(90);
  const [hintUsesLeft, setHintUsesLeft] = useState<number>(2);
  const [fiftyFiftyUsesLeft, setFiftyFiftyUsesLeft] = useState<number>(1);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [hiddenOptionIndices, setHiddenOptionIndices] = useState<number[]>([]);
  const [lastPointsEarned, setLastPointsEarned] = useState<number>(0);
  const [history, setHistory] = useState<PlayerHistoryEntry[]>([]);
  const [startTime, setStartTime] = useState<number>(0);
  const [totalTimeSpent, setTotalTimeSpent] = useState<number>(0);

  // Modals & Celebrations
  const [isBriefingOpen, setIsBriefingOpen] = useState<boolean>(false);
  const [briefingTower, setBriefingTower] = useState<TowerType>('ucln');
  const [isSummaryOpen, setIsSummaryOpen] = useState<boolean>(false);
  const [isReviewOpen, setIsReviewOpen] = useState<boolean>(false);
  const [isHintOpen, setIsHintOpen] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(sound.getMuted());
  const [milestoneCelebration, setMilestoneCelebration] = useState<{
    isOpen: boolean;
    floor: number;
    bonusPoints: number;
  }>({ isOpen: false, floor: 0, bonusPoints: 0 });

  // Timer Ref
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Load stats from localStorage on mount
  useEffect(() => {
    const uclnFloor = parseInt(localStorage.getItem('ucln_max_floor') || '0', 10);
    const uclnScore = parseInt(localStorage.getItem('ucln_high_score') || '0', 10);
    setUclnStats({ maxFloor: uclnFloor, highScore: uclnScore, timesCompleted: 0 });

    const bcnnFloor = parseInt(localStorage.getItem('bcnn_max_floor') || '0', 10);
    const bcnnScore = parseInt(localStorage.getItem('bcnn_high_score') || '0', 10);
    setBcnnStats({ maxFloor: bcnnFloor, highScore: bcnnScore, timesCompleted: 0 });
  }, []);

  // Update high score helper
  const updateStats = useCallback((tower: TowerType, floorCleared: number, finalScore: number) => {
    if (tower === 'ucln') {
      setUclnStats((prev) => {
        const nextFloor = Math.max(prev.maxFloor, floorCleared);
        const nextScore = Math.max(prev.highScore, finalScore);
        localStorage.setItem('ucln_max_floor', String(nextFloor));
        localStorage.setItem('ucln_high_score', String(nextScore));
        return { ...prev, maxFloor: nextFloor, highScore: nextScore };
      });
    } else {
      setBcnnStats((prev) => {
        const nextFloor = Math.max(prev.maxFloor, floorCleared);
        const nextScore = Math.max(prev.highScore, finalScore);
        localStorage.setItem('bcnn_max_floor', String(nextFloor));
        localStorage.setItem('bcnn_high_score', String(nextScore));
        return { ...prev, maxFloor: nextFloor, highScore: nextScore };
      });
    }
  }, []);

  // Checkpoint calculator: Nearest checkpoint behind or at current floor (1, 6, 11, 16)
  const getCheckpointFloor = (floor: number): number => {
    if (floor >= 16) return 16;
    if (floor >= 11) return 11;
    if (floor >= 6) return 6;
    return 1;
  };

  // Rank calculator
  const getRank = (floorCleared: number): PlayerRank => {
    if (floorCleared >= 20) return 'Bậc Thầy Bội & Ước Tối Thượng';
    if (floorCleared >= 16) return 'Đại Sư Tính Toán';
    if (floorCleared >= 10) return 'Pháp Sư Ước Lượng';
    return 'Tập Sự Số Học';
  };

  // Setup Floor: randomly selects 1 of 3 variants for this floor!
  const setupFloor = useCallback((tower: TowerType, floorNum: number) => {
    const randomQuestion = getRandomQuestionForFloor(tower, floorNum);
    setCurrentFloor(floorNum);
    setActiveQuestion(randomQuestion);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setHiddenOptionIndices([]);
    setTimeLeft(90);
    setIsHintOpen(false);

    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  // Timer Tick (Only active in timed mode)
  useEffect(() => {
    if (
      gameMode === 'timed' &&
      currentScreen === 'game' && 
      !isAnswerSubmitted && 
      !isSummaryOpen && 
      !isReviewOpen && 
      !milestoneCelebration.isOpen && 
      !isBriefingOpen
    ) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleTimeout();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentScreen, gameMode, isAnswerSubmitted, isSummaryOpen, isReviewOpen, milestoneCelebration.isOpen, isBriefingOpen, currentFloor]);

  // Handle Timeout
  const handleTimeout = () => {
    sound.playBuzz();
    setIsAnswerSubmitted(true);
    setSelectedAnswer(null);
    const newLives = lives - 1;
    setLives(newLives);
    setStreak(0);

    setHistory((prev) => [
      ...prev,
      {
        floor: currentFloor,
        question: activeQuestion.question,
        userAnswerIndex: null,
        correctIndex: activeQuestion.correctIndex,
        isCorrect: false,
        timeSpent: 90,
        scoreEarned: 0,
        explanation: activeQuestion.explanation,
      },
    ]);

    if (newLives <= 0) {
      setTotalTimeSpent(Math.round((Date.now() - startTime) / 1000));
      setIsSummaryOpen(true);
    }
  };

  // Click on tower in ModeSelect -> open Briefing Modal first
  const handleSelectTowerFromModeSelect = (tower: TowerType) => {
    sound.playPowerup();
    setBriefingTower(tower);
    setIsBriefingOpen(true);
  };

  // Start / Restart a tower run from Briefing Modal or Direct Replay
  const handleStartGame = (tower: TowerType, startFloor: number = 1) => {
    setIsBriefingOpen(false);
    setCurrentTower(tower);
    setCurrentScreen('game');
    setLives(3);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setHintUsesLeft(2);
    setFiftyFiftyUsesLeft(1);
    setHistory([]);
    setStartTime(Date.now());
    setIsSummaryOpen(false);
    setIsReviewOpen(false);
    setMilestoneCelebration({ isOpen: false, floor: 0, bonusPoints: 0 });
    setupFloor(tower, startFloor);
  };

  // Trigger high-impact milestone confetti celebration
  const triggerMilestoneConfetti = (isBoss: boolean) => {
    if (isBoss) {
      sound.playFanfare();
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#f59e0b', '#ec4899', '#3b82f6', '#10b981', '#fbbf24', '#ffffff'],
      });
      setTimeout(() => {
        confetti({
          particleCount: 120,
          angle: 60,
          spread: 70,
          origin: { x: 0 },
        });
        confetti({
          particleCount: 120,
          angle: 120,
          spread: 70,
          origin: { x: 1 },
        });
      }, 300);
    } else {
      sound.playCheckpoint();
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#3b82f6', '#10b981', '#fbbf24'],
      });
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
        });
      }, 250);
    }
  };

  // Select Option
  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    if (hiddenOptionIndices.includes(idx)) return;

    if (timerRef.current) clearInterval(timerRef.current);
    setSelectedAnswer(idx);
    setIsAnswerSubmitted(true);

    const isCorrect = idx === activeQuestion.correctIndex;
    const isTimed = gameMode === 'timed';
    const timeSpent = isTimed ? (90 - timeLeft) : 0;
    let earned = 0;

    if (isCorrect) {
      sound.playTing();
      const nextStreak = streak + 1;
      setStreak(nextStreak);
      setMaxStreak((prev) => Math.max(prev, nextStreak));

      // Multiplier
      let multiplier = 1.0;
      if (nextStreak >= 4) multiplier = 2.0;
      else if (nextStreak === 3) multiplier = 1.5;
      else if (nextStreak === 2) multiplier = 1.2;

      // Base points: 150 in timed mode (50% higher!), 100 in untimed mode (standard)
      const basePoints = isTimed ? 150 : 100;
      earned = Math.round(basePoints * multiplier);

      // Speed bonus: +40 points in timed mode when answered within first 20s
      if (isTimed && timeSpent <= 20) {
        earned += 40;
      }

      setScore((prev) => {
        const nextScore = prev + earned;
        updateStats(currentTower, currentFloor, nextScore);
        return nextScore;
      });

      // Special milestone checks (Floor 5, 10, 15, 20)
      if (currentFloor === 5 || currentFloor === 10 || currentFloor === 15 || currentFloor === 20) {
        triggerMilestoneConfetti(currentFloor === 20);
      }
    } else {
      sound.playBuzz();
      setStreak(0);
      const newLives = lives - 1;
      setLives(newLives);

      if (newLives <= 0) {
        setTotalTimeSpent(Math.round((Date.now() - startTime) / 1000));
        setIsSummaryOpen(true);
      }
    }

    setLastPointsEarned(earned);

    setHistory((prev) => [
      ...prev,
      {
        floor: currentFloor,
        question: activeQuestion.question,
        userAnswerIndex: idx,
        correctIndex: activeQuestion.correctIndex,
        isCorrect,
        timeSpent,
        scoreEarned: earned,
        explanation: activeQuestion.explanation,
      },
    ]);
  };

  // Next step after correct answer submission
  const handleNextStep = () => {
    const isCorrect = selectedAnswer === activeQuestion.correctIndex;

    if (isCorrect) {
      // Check if this floor is a major milestone to show celebratory popup
      if (currentFloor === 5 || currentFloor === 10 || currentFloor === 15 || currentFloor === 20) {
        const isTimed = gameMode === 'timed';
        let bonus = isTimed ? 75 : 50;
        if (currentFloor === 10) bonus = isTimed ? 150 : 100;
        else if (currentFloor === 15) bonus = isTimed ? 225 : 150;
        else if (currentFloor === 20) bonus = isTimed ? 450 : 300;

        setScore((prev) => {
          const nextScore = prev + bonus;
          updateStats(currentTower, currentFloor, nextScore);
          return nextScore;
        });

        setMilestoneCelebration({
          isOpen: true,
          floor: currentFloor,
          bonusPoints: bonus,
        });
        return;
      }

      // Normal floor advance
      sound.playWhoosh();
      setupFloor(currentTower, currentFloor + 1);
    }
  };

  // Continue after milestone modal
  const handleMilestoneContinue = () => {
    const floorJustCleared = milestoneCelebration.floor;
    setMilestoneCelebration({ isOpen: false, floor: 0, bonusPoints: 0 });

    if (floorJustCleared >= 20) {
      setTotalTimeSpent(Math.round((Date.now() - startTime) / 1000));
      updateStats(currentTower, 20, score);
      setIsSummaryOpen(true);
    } else {
      sound.playWhoosh();
      setupFloor(currentTower, floorJustCleared + 1);
    }
  };

  // Failure Action 1: Return to nearest checkpoint (Tầng 1, 6, 11, 16)
  const handleReturnToCheckpoint = () => {
    const cp = getCheckpointFloor(currentFloor);
    sound.playCheckpoint();
    setLives(3);
    setStreak(0);
    setIsSummaryOpen(false);
    setupFloor(currentTower, cp);
  };

  // Failure Action 2: Return to Floor 1
  const handleReturnToFloor1 = () => {
    sound.playWhoosh();
    setLives(3);
    setStreak(0);
    setIsSummaryOpen(false);
    setupFloor(currentTower, 1);
  };

  // Power-up 1: Hint
  const handleUseHint = () => {
    if (hintUsesLeft <= 0 || isAnswerSubmitted) return;
    setHintUsesLeft((prev) => prev - 1);
    sound.playPowerup();
    setIsHintOpen(true);
  };

  // Power-up 2: 50/50
  const handleUseFiftyFifty = () => {
    if (fiftyFiftyUsesLeft <= 0 || isAnswerSubmitted || hiddenOptionIndices.length > 0) return;
    setFiftyFiftyUsesLeft((prev) => prev - 1);
    sound.playPowerup();

    const wrongIndices = [0, 1, 2, 3].filter((i) => i !== activeQuestion.correctIndex);
    wrongIndices.sort(() => Math.random() - 0.5);
    setHiddenOptionIndices(wrongIndices.slice(0, 2));
  };

  // Toggle Mute
  const handleToggleMute = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
  };

  // Active stats
  const activeStats = currentTower === 'ucln' ? uclnStats : bcnnStats;
  const currentCheckpoint = getCheckpointFloor(currentFloor);
  const allTowerQuestions = getAllQuestions(currentTower);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 via-slate-50 to-sky-50/40 text-slate-800 flex flex-col font-['Outfit',sans-serif]">
      {/* If Mode Selection Screen */}
      {currentScreen === 'mode_select' && (
        <ModeSelect
          uclnStats={uclnStats}
          bcnnStats={bcnnStats}
          gameMode={gameMode}
          onSelectGameMode={setGameMode}
          onSelectTower={handleSelectTowerFromModeSelect}
          isMuted={isMuted}
          onToggleMute={handleToggleMute}
        />
      )}

      {/* If Game Screen */}
      {currentScreen === 'game' && (
        <div className="flex-1 flex flex-col p-2 sm:p-4 md:p-6 lg:p-8">
          
          {/* TOWER FORTRESS OUTER CASTLE FRAME (VIỀN NGOÀI CHỦ ĐỀ THÁP THÀNH) */}
          <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col rounded-3xl md:rounded-[2rem] border-4 md:border-[6px] border-amber-800/85 bg-white shadow-2xl overflow-hidden relative">
            
            {/* Top Castle Battlement Crenellations (Răng cưa mái tháp) */}
            <div className="h-4 bg-amber-900 border-b-2 border-amber-950 flex items-center justify-between px-3 select-none">
              <div className="flex space-x-2 text-[10px] text-amber-200 font-mono">
                <span>🏰 THÁP ĐÔI</span>
                <span>•</span>
                <span>CHUYÊN ĐỀ TOÁN 6</span>
              </div>
              <div className="flex space-x-1.5">
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="w-2.5 h-2 bg-amber-700 rounded-t-xs" />
                ))}
              </div>
              <div className="text-[10px] text-amber-200 font-mono">
                <span>VƯƠNG QUỐC SỐ HỌC</span>
              </div>
            </div>

            {/* In-Game Header Bar inside Fortress */}
            <header className="border-b-2 border-amber-200 bg-gradient-to-r from-amber-50 via-white to-sky-50 px-4 md:px-6 py-3 flex items-center justify-between sticky top-0 z-30 shadow-xs">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => {
                    if (confirm('Bạn có chắc muốn thoát ra màn hình chọn tháp?')) {
                      if (timerRef.current) clearInterval(timerRef.current);
                      setCurrentScreen('mode_select');
                    }
                  }}
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border-2 border-amber-300 bg-white hover:bg-amber-50 text-xs font-bold text-amber-900 transition cursor-pointer shadow-xs"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Chọn Tháp</span>
                </button>

                <div className="flex items-center space-x-2">
                  <span className="text-2xl filter drop-shadow-xs">
                    {currentTower === 'ucln' ? '🏛️' : '⚡'}
                  </span>
                  <div>
                    <h2 className="font-black text-sm md:text-base text-slate-900 tracking-tight flex items-center space-x-1.5">
                      <span>{currentTower === 'ucln' ? 'Tháp Phân Rã (ƯCLN)' : 'Tháp Bội Số (BCNN)'}</span>
                      <span className="hidden md:inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                        20 Tầng
                      </span>
                    </h2>
                  </div>
                </div>

                {/* Game Mode Badge in Header */}
                <div className="hidden sm:flex items-center ml-2">
                  {gameMode === 'timed' ? (
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-xl text-xs font-black bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xs">
                      <Clock className="w-3 h-3" />
                      <span>Có Hạn Giờ (Điểm x1.5 🔥)</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-xl text-xs font-black bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xs">
                      <InfinityIcon className="w-3 h-3" />
                      <span>Tự Do Nháp</span>
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                {/* Reopen Tower Guide/Briefing Button */}
                <button
                  onClick={() => {
                    setBriefingTower(currentTower);
                    setIsBriefingOpen(true);
                  }}
                  className="flex items-center space-x-1 px-3 py-1.5 rounded-xl border-2 border-amber-300 bg-amber-50 text-amber-900 text-xs font-bold hover:bg-amber-100 transition cursor-pointer shadow-xs"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Bí Kíp Tháp</span>
                </button>

                <button
                  onClick={downloadStandaloneHtmlFile}
                  title="Tải về file HTML đơn lẻ để mở offline"
                  className="hidden md:flex items-center space-x-1 px-3 py-1.5 rounded-xl border border-sky-300 bg-sky-50 text-sky-900 text-xs font-bold hover:bg-sky-100 transition cursor-pointer shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Xuất HTML</span>
                </button>

                <button
                  onClick={handleToggleMute}
                  className="p-2 rounded-xl border-2 border-slate-200 bg-white hover:bg-slate-100 text-slate-700 text-xs transition cursor-pointer shadow-xs"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-rose-500" /> : <Volume2 className="w-4 h-4 text-emerald-600" />}
                </button>
              </div>
            </header>

            {/* Main 2-column game layout within Tower Frame */}
            <main className="flex-1 w-full p-3 md:p-6 lg:p-7 grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-7 bg-slate-50/70">
              
              {/* Left Column: 20-Floor Tower Map (4 cols on lg) */}
              <div className="lg:col-span-4 flex flex-col">
                <TowerMap
                  currentFloor={currentFloor}
                  towerType={currentTower}
                  maxFloorEver={activeStats.maxFloor}
                />
              </div>

              {/* Right Column: Challenge Area (8 cols on lg) */}
              <div className="lg:col-span-8 flex flex-col space-y-4 md:space-y-5">
                {/* Status Bar */}
                <StatusBar
                  currentFloor={currentFloor}
                  lives={lives}
                  score={score}
                  streak={streak}
                  timeLeft={timeLeft}
                  gameMode={gameMode}
                  hintUsesLeft={hintUsesLeft}
                  fiftyFiftyUsesLeft={fiftyFiftyUsesLeft}
                  onUseHint={handleUseHint}
                  onUseFiftyFifty={handleUseFiftyFifty}
                  isAnswerSubmitted={isAnswerSubmitted}
                  isFiftyFiftyActive={hiddenOptionIndices.length > 0}
                />

                {/* Challenge Area (20% Larger text, options, and prominence) */}
                <ChallengeArea
                  question={activeQuestion}
                  currentFloor={currentFloor}
                  selectedAnswer={selectedAnswer}
                  isAnswerSubmitted={isAnswerSubmitted}
                  hiddenOptionIndices={hiddenOptionIndices}
                  onSelectOption={handleSelectOption}
                  onNextStep={handleNextStep}
                  checkpointFloor={currentCheckpoint}
                  onReturnToCheckpoint={handleReturnToCheckpoint}
                  onReturnToFloor1={handleReturnToFloor1}
                  lastPointsEarned={lastPointsEarned}
                  lives={lives}
                />
              </div>
            </main>

            {/* Fortress Foundation Bottom Trim */}
            <div className="bg-amber-900 border-t-2 border-amber-950 py-2 px-4 flex items-center justify-between text-[11px] text-amber-200">
              <span className="flex items-center space-x-1.5 font-semibold">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                <span>Trạm kiểm soát cứu sinh: Tầng 1 • 6 • 11 • 16</span>
              </span>
              <span className="hidden sm:inline font-mono text-amber-300 font-bold flex items-center space-x-1">
                <Sparkles className="w-3 h-3" />
                <span>Mốc thưởng: Tầng 5 • 10 • 15 • 20</span>
              </span>
            </div>

          </div>
        </div>
      )}

      {/* Tower Briefing & Knowledge Summary Modal (BẢNG THÔNG TIN HƯỚNG DẪN & BÍ KÍP) */}
      <TowerBriefingModal
        isOpen={isBriefingOpen}
        towerType={briefingTower}
        gameMode={gameMode}
        onSelectGameMode={setGameMode}
        onClose={() => setIsBriefingOpen(false)}
        onStartGame={() => handleStartGame(briefingTower, 1)}
      />

      {/* Factorization Hint Modal */}
      <HintModal
        isOpen={isHintOpen}
        onClose={() => setIsHintOpen(false)}
        hint={activeQuestion.hint}
        floor={currentFloor}
      />

      {/* Milestone Celebration Modal (HIỆU ỨNG VƯỢT MỐC QUAN TRỌNG) */}
      <MilestoneModal
        isOpen={milestoneCelebration.isOpen}
        floor={milestoneCelebration.floor}
        bonusPoints={milestoneCelebration.bonusPoints}
        onContinue={handleMilestoneContinue}
      />

      {/* Summary Modal (Victory or Game Over) */}
      <SummaryModal
        isOpen={isSummaryOpen}
        isCleared={currentFloor >= 20 && history.length > 0 && history[history.length - 1].isCorrect}
        floorReached={currentFloor}
        score={score}
        timeSpentSeconds={totalTimeSpent}
        maxStreak={maxStreak}
        rank={getRank(currentFloor)}
        towerType={currentTower}
        gameMode={gameMode}
        checkpointFloor={currentCheckpoint}
        onRespawnCheckpoint={handleReturnToCheckpoint}
        onRestart={() => handleStartGame(currentTower, 1)}
        onChangeTower={() => {
          setIsSummaryOpen(false);
          setCurrentScreen('mode_select');
        }}
        onReviewHistory={() => {
          setIsSummaryOpen(false);
          setIsReviewOpen(true);
        }}
      />

      {/* History and Solutions Review Modal */}
      <HistoryReviewModal
        isOpen={isReviewOpen}
        onClose={() => {
          setIsReviewOpen(false);
          if (lives <= 0 || (currentFloor >= 20 && isAnswerSubmitted)) {
            setIsSummaryOpen(true);
          }
        }}
        history={history}
        allQuestions={allTowerQuestions}
        towerName={currentTower === 'ucln' ? 'Tháp Phân Rã (ƯCLN)' : 'Tháp Bội Số (BCNN)'}
      />
    </div>
  );
}
