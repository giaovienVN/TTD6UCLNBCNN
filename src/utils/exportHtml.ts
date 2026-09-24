import { uclnQuestionsPool } from '../data/uclnQuestions';
import { bcnnQuestionsPool } from '../data/bcnnQuestions';

export function generateStandaloneHtml(): string {
  const uclnPoolJson = JSON.stringify(uclnQuestionsPool);
  const bcnnPoolJson = JSON.stringify(bcnnQuestionsPool);

  return `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chinh Phục Tháp Đôi Số Học: ƯCLN & BCNN</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Canvas Confetti CDN -->
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Outfit', sans-serif; }
    .font-mono { font-family: 'JetBrains Mono', monospace; }
    @keyframes avatar-bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-4px); }
    }
    .avatar-bounce { animation: avatar-bounce 1.5s infinite ease-in-out; }
    .custom-scrollbar::-webkit-scrollbar { width: 6px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: #f1f5f9; border-radius: 9999px; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
  </style>
</head>
<body class="bg-gradient-to-b from-amber-50/50 via-slate-50 to-sky-50/40 text-slate-800 min-h-screen flex flex-col selection:bg-amber-400 selection:text-slate-900">
  <div id="game-app" class="flex-1 flex flex-col"></div>

  <script>
    // Embedded Data: 3 questions per floor (60 UCLN + 60 BCNN = 120 questions)
    const UCLN_POOL = ${uclnPoolJson};
    const BCNN_POOL = ${bcnnPoolJson};

    // Sound Synthesizer via Web Audio API
    class SoundEngine {
      constructor() {
        this.ctx = null;
        this.isMuted = localStorage.getItem('arithmetic_tower_muted') === 'true';
      }
      init() {
        if (!this.ctx) {
          const AudioContextClass = window.AudioContext || window.webkitAudioContext;
          if (AudioContextClass) this.ctx = new AudioContextClass();
        }
        if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
      }
      playTing() {
        if (this.isMuted) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(587.33, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.36);
      }
      playBuzz() {
        if (this.isMuted) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.setValueAtTime(110, now + 0.15);
        gain.gain.setValueAtTime(0.35, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.41);
      }
      playCheckpoint() {
        if (this.isMuted) return;
        this.init();
        if (!this.ctx) return;
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, idx) => {
          const start = this.ctx.currentTime + idx * 0.08;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, start);
          gain.gain.setValueAtTime(0.25, start);
          gain.gain.exponentialRampToValueAtTime(0.001, start + 0.22);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(start);
          osc.stop(start + 0.23);
        });
      }
      playFanfare() {
        if (this.isMuted) return;
        this.init();
        if (!this.ctx) return;
        const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
        notes.forEach((freq, idx) => {
          const start = this.ctx.currentTime + idx * 0.12;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, start);
          gain.gain.setValueAtTime(0.3, start);
          gain.gain.exponentialRampToValueAtTime(0.001, start + 0.45);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(start);
          osc.stop(start + 0.46);
        });
      }
      playPowerup() {
        if (this.isMuted) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(350, now);
        osc.frequency.exponentialRampToValueAtTime(900, now + 0.2);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.26);
      }
      toggleMute() {
        this.isMuted = !this.isMuted;
        localStorage.setItem('arithmetic_tower_muted', String(this.isMuted));
        return this.isMuted;
      }
    }

    const sound = new SoundEngine();

    // Checkpoint helper (Tầng 1, 6, 11, 16)
    function getCheckpoint(floor) {
      if (floor >= 16) return 16;
      if (floor >= 11) return 11;
      if (floor >= 6) return 6;
      return 1;
    }

    // Rank helper
    function getRankTitle(floorCleared) {
      if (floorCleared >= 20) return 'Bậc Thầy Bội & Ước Tối Thượng';
      if (floorCleared >= 16) return 'Đại Sư Tính Toán';
      if (floorCleared >= 10) return 'Pháp Sư Ước Lượng';
      return 'Tập Sự Số Học';
    }

    // Random question from pool
    function pickRandomQuestion(tower, floor) {
      const pool = tower === 'ucln' ? UCLN_POOL[floor] : BCNN_POOL[floor];
      if (!pool || pool.length === 0) return null;
      const idx = Math.floor(Math.random() * pool.length);
      return pool[idx];
    }

    // App State
    const state = {
      screen: 'mode_select',
      tower: 'ucln',
      gameMode: 'timed', // 'timed' or 'untimed'
      briefingTab: 'knowledge',
      floor: 1,
      question: null,
      lives: 3,
      score: 0,
      streak: 0,
      maxStreak: 0,
      timeLeft: 90,
      hintUses: 2,
      fiftyFiftyUses: 1,
      selectedAnswer: null,
      isSubmitted: false,
      hiddenOptions: [],
      lastPoints: 0,
      history: [],
      startTime: 0,
      totalTime: 0,
      isHintOpen: false,
      isSummaryOpen: false,
      isMilestoneOpen: false,
      milestoneFloor: 0,
      milestoneBonus: 0,
      timerId: null
    };

    function setGameMode(mode) {
      sound.playPowerup();
      state.gameMode = mode;
      render();
    }

    function openBriefing(tower) {
      sound.playPowerup();
      state.tower = tower;
      state.screen = 'briefing';
      state.briefingTab = 'knowledge';
      render();
    }

    function startTimer() {
      stopTimer();
      if (state.gameMode !== 'timed') return;
      state.timerId = setInterval(() => {
        if (!state.isSubmitted && !state.isSummaryOpen && !state.isMilestoneOpen) {
          state.timeLeft -= 1;
          if (state.timeLeft <= 0) {
            state.timeLeft = 0;
            stopTimer();
            handleTimeout();
          } else {
            updateTimerDisplay();
          }
        }
      }, 1000);
    }

    function stopTimer() {
      if (state.timerId) {
        clearInterval(state.timerId);
        state.timerId = null;
      }
    }

    function handleTimeout() {
      sound.playBuzz();
      state.isSubmitted = true;
      state.selectedAnswer = null;
      state.lives -= 1;
      state.streak = 0;

      state.history.push({
        floor: state.floor,
        question: state.question.question,
        userAnswerIndex: null,
        correctIndex: state.question.correctIndex,
        isCorrect: false,
        timeSpent: 90,
        scoreEarned: 0,
        explanation: state.question.explanation
      });

      if (state.lives <= 0) {
        state.totalTime = Math.round((Date.now() - state.startTime) / 1000);
        state.isSummaryOpen = true;
      }
      render();
    }

    function enterFloor(floorNum) {
      state.floor = floorNum;
      state.question = pickRandomQuestion(state.tower, floorNum);
      state.selectedAnswer = null;
      state.isSubmitted = false;
      state.hiddenOptions = [];
      state.timeLeft = 90;
      state.isHintOpen = false;
      state.isMilestoneOpen = false;
      startTimer();
      render();
    }

    function startGame(tower, startFloor = 1) {
      state.tower = tower;
      state.screen = 'game';
      state.lives = 3;
      state.score = 0;
      state.streak = 0;
      state.maxStreak = 0;
      state.hintUses = 2;
      state.fiftyFiftyUses = 1;
      state.history = [];
      state.startTime = Date.now();
      state.isSummaryOpen = false;
      state.isMilestoneOpen = false;
      enterFloor(startFloor);
    }

    function triggerConfetti(isBoss) {
      if (!window.confetti) return;
      if (isBoss) {
        sound.playFanfare();
        window.confetti({ particleCount: 150, spread: 100, origin: { y: 0.5 } });
      } else {
        sound.playCheckpoint();
        window.confetti({ particleCount: 90, spread: 80, origin: { y: 0.6 } });
      }
    }

    function selectOption(idx) {
      if (state.isSubmitted || state.hiddenOptions.includes(idx)) return;
      stopTimer();
      state.selectedAnswer = idx;
      state.isSubmitted = true;

      const isCorrect = idx === state.question.correctIndex;
      const isTimed = state.gameMode === 'timed';
      const timeSpent = isTimed ? (90 - state.timeLeft) : 0;
      let earned = 0;

      if (isCorrect) {
        sound.playTing();
        state.streak += 1;
        state.maxStreak = Math.max(state.maxStreak, state.streak);

        let mult = 1.0;
        if (state.streak >= 4) mult = 2.0;
        else if (state.streak === 3) mult = 1.5;
        else if (state.streak === 2) mult = 1.2;

        const basePoints = isTimed ? 150 : 100;
        earned = Math.round(basePoints * mult);
        if (isTimed && timeSpent <= 20) earned += 40;

        state.score += earned;

        // save local highscore
        const keyScore = state.tower + '_high_score';
        const keyFloor = state.tower + '_max_floor';
        const currentHigh = parseInt(localStorage.getItem(keyScore) || '0', 10);
        const currentMaxF = parseInt(localStorage.getItem(keyFloor) || '0', 10);
        localStorage.setItem(keyScore, String(Math.max(currentHigh, state.score)));
        localStorage.setItem(keyFloor, String(Math.max(currentMaxF, state.floor)));

        if (state.floor === 5 || state.floor === 10 || state.floor === 15 || state.floor === 20) {
          triggerConfetti(state.floor === 20);
        }
      } else {
        sound.playBuzz();
        state.streak = 0;
        state.lives -= 1;

        if (state.lives <= 0) {
          state.totalTime = Math.round((Date.now() - state.startTime) / 1000);
          state.isSummaryOpen = true;
        }
      }

      state.lastPoints = earned;
      state.history.push({
        floor: state.floor,
        question: state.question.question,
        userAnswerIndex: idx,
        correctIndex: state.question.correctIndex,
        isCorrect,
        timeSpent,
        scoreEarned: earned,
        explanation: state.question.explanation
      });

      render();
    }

    function advanceNextFloor() {
      // Check milestone
      if (state.floor === 5 || state.floor === 10 || state.floor === 15 || state.floor === 20) {
        const isTimed = state.gameMode === 'timed';
        let bonus = isTimed ? 75 : 50;
        if (state.floor === 10) bonus = isTimed ? 150 : 100;
        else if (state.floor === 15) bonus = isTimed ? 225 : 150;
        else if (state.floor === 20) bonus = isTimed ? 450 : 300;

        state.score += bonus;
        state.milestoneFloor = state.floor;
        state.milestoneBonus = bonus;
        state.isMilestoneOpen = true;
        render();
        return;
      }

      enterFloor(state.floor + 1);
    }

    function continueAfterMilestone() {
      state.isMilestoneOpen = false;
      if (state.milestoneFloor >= 20) {
        state.totalTime = Math.round((Date.now() - state.startTime) / 1000);
        state.isSummaryOpen = true;
        render();
      } else {
        enterFloor(state.milestoneFloor + 1);
      }
    }

    function returnToCheckpoint() {
      const cp = getCheckpoint(state.floor);
      sound.playCheckpoint();
      state.lives = 3;
      state.streak = 0;
      state.isSummaryOpen = false;
      enterFloor(cp);
    }

    function returnToFloor1() {
      state.lives = 3;
      state.streak = 0;
      state.isSummaryOpen = false;
      enterFloor(1);
    }

    function useHint() {
      if (state.hintUses <= 0 || state.isSubmitted) return;
      state.hintUses -= 1;
      sound.playPowerup();
      state.isHintOpen = true;
      render();
    }

    function useFiftyFifty() {
      if (state.fiftyFiftyUses <= 0 || state.isSubmitted || state.hiddenOptions.length > 0) return;
      state.fiftyFiftyUses -= 1;
      sound.playPowerup();
      const wrong = [0, 1, 2, 3].filter(i => i !== state.question.correctIndex);
      wrong.sort(() => Math.random() - 0.5);
      state.hiddenOptions = wrong.slice(0, 2);
      render();
    }

    function updateTimerDisplay() {
      const timerEl = document.getElementById('timer-count');
      const timerBar = document.getElementById('timer-bar');
      if (timerEl) timerEl.innerText = state.timeLeft + 's';
      if (timerBar) {
        const pct = Math.max(0, (state.timeLeft / 90) * 100);
        timerBar.style.width = pct + '%';
        if (state.timeLeft <= 15) {
          timerBar.className = 'h-full bg-rose-500 rounded-full transition-all duration-300 animate-pulse';
        } else if (state.timeLeft <= 45) {
          timerBar.className = 'h-full bg-amber-500 rounded-full transition-all duration-300';
        } else {
          timerBar.className = 'h-full bg-emerald-500 rounded-full transition-all duration-300';
        }
      }
    }

    // Main Render Function
    function render() {
      const app = document.getElementById('game-app');
      if (!app) return;

      if (state.screen === 'mode_select') {
        const uMax = localStorage.getItem('ucln_max_floor') || '0';
        const uHigh = localStorage.getItem('ucln_high_score') || '0';
        const bMax = localStorage.getItem('bcnn_max_floor') || '0';
        const bHigh = localStorage.getItem('bcnn_high_score') || '0';

        app.innerHTML = \`
          <header class="border-b border-slate-200 bg-white px-4 md:px-8 py-3.5 flex items-center justify-between shadow-xs">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-indigo-600 flex items-center justify-center text-white font-black text-xl shadow-md">
                ⚡
              </div>
              <div>
                <h1 class="text-base md:text-lg font-black text-slate-900">CHINH PHỤC THÁP ĐÔI SỐ HỌC</h1>
                <p class="text-[11px] md:text-xs text-slate-500">Toán 6 • Chuyên đề ƯCLN & BCNN • 20 Tầng Thử Thách</p>
              </div>
            </div>
            <button onclick="sound.toggleMute(); render();" class="px-3 py-1.5 rounded-xl border border-slate-250 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-100 shadow-xs cursor-pointer">
              \${sound.isMuted ? '🔇 Bật âm' : '🔊 Âm thanh'}
            </button>
          </header>

          <main class="flex-1 max-w-6xl mx-auto w-full p-4 md:p-8 flex flex-col justify-center">
            <div class="text-center max-w-3xl mx-auto mb-8 md:mb-12">
              <span class="inline-block px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4">
                ✨ 2 Ngọn Tháp Thần • Mỗi Tầng 3 Câu Hỏi Ngẫu Nhiên
              </span>
              <h2 class="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
                Chọn Ngọn Tháp Để Bắt Đầu <br>
                <span class="bg-gradient-to-r from-indigo-600 via-sky-600 to-amber-600 bg-clip-text text-transparent">
                  Hành Trình Chinh Phục
                </span>
              </h2>
              <p class="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
                Khi thất bại ở bất kỳ tầng nào, bạn có thể quay lại Trạm gần nhất hoặc bắt đầu lại từ Tầng 1. Mỗi tầng gồm 3 câu hỏi ngẫu nhiên phong phú!
              </p>

              <!-- Game Mode Switcher: Timed vs Untimed -->
              <div class="mt-6 flex flex-col items-center">
                <div class="bg-white/90 backdrop-blur-sm p-1.5 rounded-2xl border-2 border-amber-300 shadow-md inline-flex items-center gap-1.5 flex-wrap justify-center">
                  <button onclick="setGameMode('timed')" class="flex items-center space-x-1.5 px-4 py-2 rounded-xl font-black text-xs md:text-sm cursor-pointer transition \${state.gameMode === 'timed' ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}">
                    <span>⏱️ Có Giới Hạn Thời Gian</span>
                    <span class="px-1.5 py-0.5 rounded-full text-[10px] bg-white/20 text-white border border-white/30">Điểm x1.5 🔥</span>
                  </button>
                  <button onclick="setGameMode('untimed')" class="flex items-center space-x-1.5 px-4 py-2 rounded-xl font-black text-xs md:text-sm cursor-pointer transition \${state.gameMode === 'untimed' ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}">
                    <span>🌿 Không Giới Hạn Thời Gian</span>
                    <span class="px-1.5 py-0.5 rounded-full text-[10px] bg-white/20 text-white border border-white/30">Tự Do Nháp</span>
                  </button>
                </div>
                <p class="text-xs text-slate-500 mt-2 font-medium">
                  \${state.gameMode === 'timed' ? '⚡ 90s/câu • Cơ bản <strong>150 điểm/câu</strong> (+50% điểm số!) + 40đ tốc độ' : '🌿 <strong>Không đếm ngược</strong> • Thư thả nháp và tư duy • Cơ bản 100 điểm/câu'}
                </p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
              <!-- Tower 1 -->
              <div class="bg-white border-2 border-indigo-200 hover:border-indigo-400 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl transition flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between mb-4">
                    <span class="px-3 py-1 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase">Ngọn Tháp 01</span>
                    <span class="text-3xl">🏛️</span>
                  </div>
                  <h3 class="text-2xl font-black text-slate-900 mb-2">Tháp Phân Rã (ƯCLN)</h3>
                  <p class="text-xs md:text-sm text-slate-600 mb-6">Ước chung lớn nhất, thừa số nguyên tố, bài toán chia tổ chia đất và phân số tối giản.</p>
                  
                  <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200 mb-8 space-y-2">
                    <div class="flex justify-between text-xs text-slate-600 font-semibold">
                      <span>Tiến độ:</span>
                      <span class="font-bold text-indigo-600 font-mono">\${uMax} / 20 Tầng</span>
                    </div>
                    <div class="flex justify-between text-xs text-slate-600 pt-1 border-t border-slate-200">
                      <span>Điểm cao nhất:</span>
                      <span class="font-mono font-bold text-amber-600">\${parseInt(uHigh).toLocaleString()} đ</span>
                    </div>
                  </div>
                </div>
                <button onclick="openBriefing('ucln')" class="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-700 hover:to-sky-700 text-white font-bold text-base shadow-md cursor-pointer transition transform active:scale-98">
                  Vào Chinh Phục Tháp Phân Rã ➔
                </button>
              </div>

              <!-- Tower 2 -->
              <div class="bg-white border-2 border-amber-200 hover:border-amber-400 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl transition flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between mb-4">
                    <span class="px-3 py-1 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase">Ngọn Tháp 02</span>
                    <span class="text-3xl">⚡</span>
                  </div>
                  <h3 class="text-2xl font-black text-slate-900 mb-2">Tháp Bội Số (BCNN)</h3>
                  <p class="text-xs md:text-sm text-slate-600 mb-6">Bội chung nhỏ nhất, chu kỳ xe buýt, trực nhật, xếp hàng và chia có dư nâng cao.</p>
                  
                  <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200 mb-8 space-y-2">
                    <div class="flex justify-between text-xs text-slate-600 font-semibold">
                      <span>Tiến độ:</span>
                      <span class="font-bold text-amber-600 font-mono">\${bMax} / 20 Tầng</span>
                    </div>
                    <div class="flex justify-between text-xs text-slate-600 pt-1 border-t border-slate-200">
                      <span>Điểm cao nhất:</span>
                      <span class="font-mono font-bold text-amber-600">\${parseInt(bHigh).toLocaleString()} đ</span>
                    </div>
                  </div>
                </div>
                <button onclick="openBriefing('bcnn')" class="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-base shadow-md cursor-pointer transition transform active:scale-98">
                  Vào Chinh Phục Tháp Bội Số ➔
                </button>
              </div>
            </div>
          </main>
        \`;
        return;
      }

      // Briefing Screen
      if (state.screen === 'briefing') {
        const isU = state.tower === 'ucln';
        const isTabKnowledge = state.briefingTab === 'knowledge';

        app.innerHTML = \`
          <div class="min-h-screen p-3 md:p-6 flex items-center justify-center bg-slate-900/60 backdrop-blur-md">
            <div class="max-w-3xl w-full bg-white border-4 border-amber-800 rounded-3xl md:rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
              
              <!-- Castle Top Battlement -->
              <div class="h-3 bg-amber-900 border-b border-amber-950 flex items-center justify-between px-3 text-[9px] text-amber-200 font-mono">
                <span>🏰 BẢNG HƯỚNG DẪN & BÍ KÍP THÁP</span>
                <span>TOÁN 6 • \${isU ? 'ƯỚC CHUNG LỚN NHẤT' : 'BỘI CHUNG NHỎ NHẤT'}</span>
              </div>

              <!-- Header Banner -->
              <div class="p-4 md:p-6 border-b-2 border-amber-200 flex items-center justify-between \${isU ? 'bg-gradient-to-r from-indigo-50 via-sky-50 to-white' : 'bg-gradient-to-r from-amber-50 via-orange-50 to-white'}">
                <div class="flex items-center space-x-3.5">
                  <div class="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center text-2xl md:text-3xl shadow-sm border-2 \${isU ? 'bg-indigo-100 border-indigo-300' : 'bg-amber-100 border-amber-300'}">
                    \${isU ? '🏛️' : '⚡'}
                  </div>
                  <div>
                    <div class="flex items-center space-x-2">
                      <span class="px-2.5 py-0.5 rounded-full text-[10px] md:text-xs font-black uppercase \${isU ? 'bg-indigo-600 text-white' : 'bg-amber-600 text-white'}">
                        \${isU ? 'Tháp 01: ƯCLN' : 'Tháp 02: BCNN'}
                      </span>
                      <span class="text-xs text-slate-500 font-bold font-mono">20 Tầng</span>
                    </div>
                    <h2 class="text-lg md:text-2xl font-black text-slate-900 mt-0.5">
                      \${isU ? 'Bí Kíp Tháp Phân Rã (ƯCLN)' : 'Bí Kíp Tháp Bội Số (BCNN)'}
                    </h2>
                  </div>
                </div>
                <button onclick="state.screen = 'mode_select'; render();" class="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition cursor-pointer text-lg font-bold">
                  ✕
                </button>
              </div>

              <!-- Game Mode Switcher Banner in Briefing -->
              <div class="px-4 md:px-6 pt-3 pb-2 bg-amber-50/70 border-b border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-2">
                <div class="text-left w-full sm:w-auto">
                  <span class="text-xs font-black uppercase text-amber-900">⚙️ Chế độ leo tháp:</span>
                  <p class="text-[11px] text-slate-600">
                    \${state.gameMode === 'timed' ? '<span class="font-bold text-amber-800">⏱️ 90s/câu • <strong class="text-orange-600 font-black">Điểm cao hơn (150đ + 40đ tốc độ) 🔥</strong></span>' : '<span class="font-bold text-emerald-800">🌿 Không hạn giờ • <strong class="text-emerald-700 font-black">Tự do nháp bài (100đ chuẩn)</strong></span>'}
                  </p>
                </div>
                <div class="inline-flex items-center bg-white p-1 rounded-xl border border-amber-300 shadow-xs">
                  <button onclick="setGameMode('timed')" class="px-3 py-1.5 rounded-lg text-xs font-black cursor-pointer transition \${state.gameMode === 'timed' ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'}">
                    ⏱️ Có Hạn Giờ (Điểm Cao)
                  </button>
                  <button onclick="setGameMode('untimed')" class="px-3 py-1.5 rounded-lg text-xs font-black cursor-pointer transition \${state.gameMode === 'untimed' ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'}">
                    🌿 Không Hạn Giờ
                  </button>
                </div>
              </div>

              <!-- Tabs -->
              <div class="flex items-center px-4 md:px-6 pt-3 border-b border-slate-200 bg-slate-50 gap-2 shrink-0">
                <button onclick="state.briefingTab = 'knowledge'; render();" class="px-4 py-2 rounded-t-xl font-bold text-xs md:text-sm border-t-2 border-x-2 cursor-pointer \${isTabKnowledge ? 'bg-white border-amber-300 text-amber-900 shadow-xs -mb-px' : 'border-transparent text-slate-500 hover:bg-slate-100'}">
                  🧠 Bí Kíp & Dạng Bài Tập Tháp
                </button>
                <button onclick="state.briefingTab = 'rules'; render();" class="px-4 py-2 rounded-t-xl font-bold text-xs md:text-sm border-t-2 border-x-2 cursor-pointer \${!isTabKnowledge ? 'bg-white border-amber-300 text-amber-900 shadow-xs -mb-px' : 'border-transparent text-slate-500 hover:bg-slate-100'}">
                  📜 Hướng Dẫn Cách Chơi & Điểm Thưởng
                </button>
              </div>

              <!-- Body -->
              <div class="p-4 md:p-6 overflow-y-auto custom-scrollbar flex-1 space-y-4 bg-white text-slate-700 text-xs md:text-sm leading-relaxed">
                \${isTabKnowledge ? (
                  isU ? \`
                    <!-- UCLN KNOWLEDGE -->
                    <div class="p-4 rounded-2xl bg-gradient-to-r from-indigo-50 to-sky-50 border-2 border-indigo-200">
                      <h4 class="font-black text-indigo-950 text-sm md:text-base mb-2">✨ 3 Bước Vàng Tìm ƯCLN (Ước Chung Lớn Nhất):</h4>
                      <ol class="list-decimal list-inside space-y-1.5 font-medium text-slate-800 ml-1">
                        <li><strong>Bước 1:</strong> Phân tích mỗi số ra thừa số nguyên tố.</li>
                        <li><strong>Bước 2:</strong> Chọn ra các thừa số nguyên tố <span class="underline font-bold text-indigo-700">CHUNG</span> (chỉ lấy thừa số có mặt ở tất cả các số).</li>
                        <li><strong>Bước 3:</strong> Lập tích các thừa số đã chọn, mỗi thừa số lấy với số mũ <span class="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-black">NHỎ NHẤT</span>.</li>
                      </ol>
                    </div>

                    <div class="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200">
                      <h5 class="font-bold text-amber-900 text-xs md:text-sm mb-1">⚡ Mẹo Nhẩm Nhanh & Tính Chất Trọng Tâm:</h5>
                      <ul class="space-y-1 text-slate-700 text-xs">
                        <li>• <strong>Hai số nguyên tố cùng nhau</strong>: Là hai số có ƯCLN bằng 1 (Ví dụ: 8 và 9, 15 và 16).</li>
                        <li>• <strong>Số chia hết</strong>: Nếu a chia hết cho b thì ƯCLN(a, b) = b.</li>
                        <li>• <strong>Tìm ƯC thông qua ƯCLN</strong>: Tập hợp các ƯC(a, b) chính là tập các ước của ƯCLN(a, b).</li>
                      </ul>
                    </div>

                    <div>
                      <h4 class="font-black text-slate-900 text-sm md:text-base mb-2.5">🎯 5 Dạng Bài Tập Bạn Sẽ Đối Mặt Trong 20 Tầng:</h4>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        <div class="p-3 rounded-xl border border-slate-200 bg-slate-50">
                          <span class="font-bold text-indigo-800 text-xs block mb-0.5">Dạng 1: Nhận diện thừa số & Tìm ƯCLN</span>
                          <p class="text-[11px] text-slate-600">Tìm ƯCLN từ phân tích thừa số nguyên tố hoặc của 2, 3 số tự nhiên.</p>
                        </div>
                        <div class="p-3 rounded-xl border border-slate-200 bg-slate-50">
                          <span class="font-bold text-indigo-800 text-xs block mb-0.5">Dạng 2: Rút gọn phân số tối giản</span>
                          <p class="text-[11px] text-slate-600">Chia cả tử và mẫu cho ƯCLN để đưa ngay về phân số tối giản.</p>
                        </div>
                        <div class="p-3 rounded-xl border border-slate-200 bg-slate-50">
                          <span class="font-bold text-indigo-800 text-xs block mb-0.5">Dạng 3: Bài toán chia tổ, chia quà nhiều nhất</span>
                          <p class="text-[11px] text-slate-600">"Chia đều vào nhiều phần nhất" ➔ Tìm ƯCLN của số lượng từng loại.</p>
                        </div>
                        <div class="p-3 rounded-xl border border-slate-200 bg-slate-50">
                          <span class="font-bold text-indigo-800 text-xs block mb-0.5">Dạng 4: Cắt đất / chia ô vuông lớn nhất</span>
                          <p class="text-[11px] text-slate-600">Chia khu đất hình chữ nhật thành các ô vuông bằng nhau lớn nhất ➔ Cạnh ô = ƯCLN(dài, rộng).</p>
                        </div>
                        <div class="p-3 rounded-xl border border-slate-200 bg-slate-50 md:col-span-2">
                          <span class="font-bold text-indigo-800 text-xs block mb-0.5">Dạng 5: Tìm x thỏa phép chia hết (Đỉnh cao HSG)</span>
                          <p class="text-[11px] text-slate-600">Tìm x lớn nhất biết a chia hết x, b chia hết x hoặc dạng chia có cùng số dư r (x &gt; r).</p>
                        </div>
                      </div>
                    </div>
                  \` : \`
                    <!-- BCNN KNOWLEDGE -->
                    <div class="p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200">
                      <h4 class="font-black text-amber-950 text-sm md:text-base mb-2">✨ 3 Bước Vàng Tìm BCNN (Bội Chung Nhỏ Nhất):</h4>
                      <ol class="list-decimal list-inside space-y-1.5 font-medium text-slate-800 ml-1">
                        <li><strong>Bước 1:</strong> Phân tích mỗi số ra thừa số nguyên tố.</li>
                        <li><strong>Bước 2:</strong> Chọn ra các thừa số nguyên tố <span class="underline font-bold text-orange-700">CHUNG VÀ RIÊNG</span> (lấy hết mọi thừa số xuất hiện).</li>
                        <li><strong>Bước 3:</strong> Lập tích các thừa số đã chọn, mỗi thừa số lấy với số mũ <span class="bg-amber-200 text-amber-950 px-1.5 py-0.5 rounded font-black">LỚN NHẤT</span>.</li>
                      </ol>
                    </div>

                    <div class="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-200">
                      <h5 class="font-bold text-indigo-900 text-xs md:text-sm mb-1">⚡ Công Thức Vàng & Mẹo Tính Nhanh:</h5>
                      <ul class="space-y-1 text-slate-700 text-xs">
                        <li>• <strong>Mối liên hệ kinh điển</strong>: ƯCLN(a, b) • BCNN(a, b) = a • b.</li>
                        <li>• <strong>Số chia hết</strong>: Nếu a chia hết cho b thì BCNN(a, b) = a.</li>
                        <li>• <strong>Nguyên tố cùng nhau</strong>: Nếu ƯCLN(a, b) = 1 thì BCNN(a, b) = a • b.</li>
                        <li>• <strong>Tìm BC thông qua BCNN</strong>: Bội chung của các số chính là các bội của BCNN.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 class="font-black text-slate-900 text-sm md:text-base mb-2.5">🎯 5 Dạng Bài Tập Bạn Sẽ Đối Mặt Trong 20 Tầng:</h4>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        <div class="p-3 rounded-xl border border-slate-200 bg-slate-50">
                          <span class="font-bold text-amber-800 text-xs block mb-0.5">Dạng 1: Tìm BCNN trực tiếp & Thừa số nguyên tố</span>
                          <p class="text-[11px] text-slate-600">Chọn thừa số chung và riêng với số mũ lớn nhất, tính BCNN của 2 hay 3 số.</p>
                        </div>
                        <div class="p-3 rounded-xl border border-slate-200 bg-slate-50">
                          <span class="font-bold text-amber-800 text-xs block mb-0.5">Dạng 2: Quy đồng mẫu số phân số</span>
                          <p class="text-[11px] text-slate-600">Mẫu số chung nhỏ nhất của các phân số chính là BCNN của các mẫu số.</p>
                        </div>
                        <div class="p-3 rounded-xl border border-slate-200 bg-slate-50">
                          <span class="font-bold text-amber-800 text-xs block mb-0.5">Dạng 3: Chu kỳ lặp lại & Cùng gặp nhau</span>
                          <p class="text-[11px] text-slate-600">"Xe buýt cùng rời bến", "chuông cùng reo", "cùng trực nhật" ➔ Tìm BCNN thời gian.</p>
                        </div>
                        <div class="p-3 rounded-xl border border-slate-200 bg-slate-50">
                          <span class="font-bold text-amber-800 text-xs block mb-0.5">Dạng 4: Bài toán xếp hàng vừa đủ</span>
                          <p class="text-[11px] text-slate-600">Xếp hàng 10, hàng 12, hàng 15 đều vừa đủ ➔ Số học sinh là BC(10, 12, 15).</p>
                        </div>
                        <div class="p-3 rounded-xl border border-slate-200 bg-slate-50 md:col-span-2">
                          <span class="font-bold text-amber-800 text-xs block mb-0.5">Dạng 5: Bài toán chia có dư & Bù trừ (Đỉnh cao HSG)</span>
                          <p class="text-[11px] text-slate-600">Xếp hàng thiếu 1 người ➔ (x + 1) chia hết cho các số; hoặc chia dư r ➔ (x - r) là bội chung.</p>
                        </div>
                      </div>
                    </div>
                  \`
                ) : \`
                  <!-- GAMEPLAY RULES -->
                  <div class="p-4 rounded-2xl bg-amber-50/80 border-2 border-amber-300">
                    <h5 class="font-black text-amber-900 text-xs md:text-sm mb-2.5">⚖️ Bảng So Sánh 2 Chế Độ Leo Tháp:</h5>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div class="p-3 bg-white rounded-xl border border-amber-200">
                        <div class="font-black text-amber-900 mb-1 flex items-center justify-between">
                          <span>⏱️ Có Hạn Giờ (Đua Top)</span>
                          <span class="text-[10px] bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-bold">Điểm x1.5 🔥</span>
                        </div>
                        <ul class="space-y-1 text-slate-600 text-[11px]">
                          <li>• Điểm đúng cơ bản: <strong>150 đ/câu</strong> (cao gấp rưỡi!)</li>
                          <li>• Thưởng tốc độ (< 20s): <strong>+40 đ</strong></li>
                          <li>• Thưởng mốc (5, 10, 15, 20): <strong>Lên đến +450 đ</strong></li>
                          <li>• Thời gian mỗi câu: <strong>90 giây đếm ngược</strong></li>
                        </ul>
                      </div>
                      <div class="p-3 bg-white rounded-xl border border-emerald-200">
                        <div class="font-black text-emerald-900 mb-1 flex items-center justify-between">
                          <span>🌿 Không Hạn Giờ (Luyện Tập)</span>
                          <span class="text-[10px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-bold">Chuẩn 100đ</span>
                        </div>
                        <ul class="space-y-1 text-slate-600 text-[11px]">
                          <li>• Điểm đúng cơ bản: <strong>100 đ/câu</strong></li>
                          <li>• Thưởng chuỗi combo: <strong>x1.2, x1.5, x2.0</strong></li>
                          <li>• Thưởng mốc (5, 10, 15, 20): <strong>Lên đến +300 đ</strong></li>
                          <li>• Thời gian: <strong>Vô hạn</strong>, tha hồ nháp và tư duy kĩ</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                      <div class="font-bold text-rose-700 text-xs md:text-sm">❤️ 3 Sinh Lực (Tim)</div>
                      <p class="text-[11px] text-slate-600 mt-1">Mỗi lần trả lời sai (hoặc hết giờ ở chế độ đếm ngược) bị trừ 1 mạng. Hết 3 mạng kết thúc lượt leo tháp.</p>
                    </div>
                    <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                      <div class="font-bold text-orange-700 text-xs md:text-sm">🔥 Chuỗi Thưởng Combo</div>
                      <p class="text-[11px] text-slate-600 mt-1">Đúng liên tiếp: 2 câu x1.2 • 3 câu x1.5 • Từ 4 câu trở lên x2.0 điểm số!</p>
                    </div>
                    <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                      <div class="font-bold text-indigo-700 text-xs md:text-sm">✨ 2 Bùa Hỗ Trợ</div>
                      <p class="text-[11px] text-slate-600 mt-1">💡 Gợi ý thừa số (2 lượt) • ⚡ Loại trừ 50/50 (1 lượt) loại bỏ 2 phương án sai.</p>
                    </div>
                    <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                      <div class="font-bold text-amber-700 text-xs md:text-sm">🛡️ Trạm Cứu Sinh (Checkpoint)</div>
                      <p class="text-[11px] text-slate-600 mt-1">Đặt tại Tầng 1, 6, 11, 16. Khi thua có thể hồi sinh tại trạm gần nhất!</p>
                    </div>
                  </div>
                \`}
              </div>

              <!-- Footer -->
              <div class="p-4 md:p-5 bg-slate-50 border-t-2 border-amber-200 flex items-center justify-between flex-wrap gap-3 shrink-0">
                <button onclick="state.screen = 'mode_select'; render();" class="px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs md:text-sm cursor-pointer">
                  ← Chọn Tháp Khác
                </button>
                <button onclick="startGame(state.tower, 1)" class="px-6 md:px-8 py-3 rounded-2xl font-black text-white text-sm md:text-base shadow-lg cursor-pointer transition transform hover:scale-102 \${isU ? 'bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-700' : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600'}">
                  Sẵn Sàng Tiến Vào Tháp! ➔
                </button>
              </div>

            </div>
          </div>
        \`;
        return;
      }

      // Game Screen
      const isU = state.tower === 'ucln';
      const cpFloor = getCheckpoint(state.floor);
      const isAns = state.isSubmitted;
      const isCor = state.selectedAnswer === state.question.correctIndex;
      const timerPct = Math.max(0, (state.timeLeft / 90) * 100);

      // Multiplier
      let multLabel = 'x1.0';
      if (state.streak >= 4) multLabel = 'x2.0 🔥';
      else if (state.streak === 3) multLabel = 'x1.5 ⚡';
      else if (state.streak === 2) multLabel = 'x1.2 ✨';

      // Floors map 20 down to 1
      let mapHtml = '';
      for (let f = 20; f >= 1; f--) {
        const isCur = f === state.floor;
        const isPass = f < state.floor;
        const isBoss = f === 20;
        const isCp = f === 1 || f === 6 || f === 11 || f === 16;
        const isMile = f === 5 || f === 10 || f === 15;

        let cls = 'bg-slate-50 border-slate-200 text-slate-600';
        if (isCur) cls = 'bg-amber-50 border-2 border-amber-500 text-amber-950 font-bold shadow-md';
        else if (isPass) cls = 'bg-emerald-50 border-emerald-300 text-emerald-900 font-medium';
        else if (isMile || isBoss) cls = 'bg-amber-50/50 border border-amber-200 text-amber-900';

        mapHtml += \`
          <div class="flex items-center justify-between p-2 rounded-2xl border text-xs \${cls}">
            <div class="flex items-center space-x-2">
              <span class="w-6 h-6 rounded-lg font-mono font-bold flex items-center justify-center text-[11px] \${isCur ? 'bg-amber-500 text-white' : isPass ? 'bg-emerald-200 text-emerald-900' : 'bg-white border border-slate-200 text-slate-500'}">
                \${f}
              </span>
              <span>\${isBoss ? '👑 ĐỈNH THÁP' : 'Tầng ' + f}</span>
              \${isCp ? '<span class="text-[9px] px-1 py-0.5 rounded bg-indigo-100 text-indigo-700 font-bold">Trạm</span>' : ''}
              \${isMile ? '<span class="text-[9px] px-1 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">Mốc</span>' : ''}
            </div>
            <div>
              \${isCur ? '<span class="avatar-bounce text-xs font-bold text-amber-600">🧙‍♂️ BẠN</span>' : isPass ? '<span class="text-emerald-600 font-bold">✓</span>' : '<span class="text-slate-400">\${isBoss ? "👑" : isMile ? "⭐" : "🔒"}</span>'}
            </div>
          </div>
        \`;
      }

      // Options HTML (20% LARGER)
      let optHtml = '';
      const letters = ['A', 'B', 'C', 'D'];
      state.question.options.forEach((opt, idx) => {
        const isHid = state.hiddenOptions.includes(idx);
        const isThisSel = state.selectedAnswer === idx;
        const isThisCor = idx === state.question.correctIndex;

        let bCls = 'bg-slate-50/80 border-2 border-slate-200 hover:border-amber-400 hover:bg-amber-50/30 text-slate-800';
        let bBad = 'bg-white border-2 border-slate-200 text-slate-700';

        if (isHid) {
          bCls = 'opacity-25 bg-slate-100 border-2 border-slate-200 text-slate-400 line-through cursor-not-allowed';
        } else if (isAns) {
          if (isThisCor) {
            bCls = 'bg-emerald-50 border-2 border-emerald-500 text-emerald-950 font-bold shadow-md';
            bBad = 'bg-emerald-600 text-white';
          } else if (isThisSel) {
            bCls = 'bg-rose-50 border-2 border-rose-500 text-rose-950 font-bold shadow-md';
            bBad = 'bg-rose-600 text-white';
          } else {
            bCls = 'opacity-35 bg-slate-50 border-2 border-slate-200 text-slate-500 cursor-not-allowed';
          }
        }

        optHtml += \`
          <button onclick="selectOption(\${idx})" \${isAns || isHid ? 'disabled' : ''} class="w-full p-4 md:p-5 rounded-2xl border text-left transition flex items-start space-x-3.5 cursor-pointer \${bCls}">
            <span class="w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center font-mono font-black text-sm md:text-base shrink-0 \${bBad}">
              \${letters[idx]}
            </span>
            <span class="text-base md:text-lg font-bold flex-1 pt-1">\${opt}</span>
          </button>
        \`;
      });

      // Feedback Box (20% LARGER)
      let feedbackHtml = '';
      if (isAns) {
        if (isCor) {
          feedbackHtml = \`
            <div class="mt-6 p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-950 shadow-md">
              <div class="flex items-center justify-between mb-3.5 flex-wrap gap-2">
                <span class="font-black text-emerald-700 text-base md:text-lg">✓ Chính xác! (+\${state.lastPoints} điểm)</span>
                <button onclick="advanceNextFloor()" class="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-sm md:text-base shadow-md cursor-pointer">
                  \${state.floor >= 20 ? 'Chinh Phục Đỉnh Tháp ➔' : 'Lên Tầng Tiếp Theo ➔'}
                </button>
              </div>
              <div class="bg-white p-3.5 rounded-xl border border-slate-200 text-sm text-slate-700">
                <strong class="text-indigo-700 block mb-1">📖 Lời giải chi tiết:</strong>
                \${state.question.explanation}
              </div>
            </div>
          \`;
        } else {
          feedbackHtml = \`
            <div class="mt-6 p-5 rounded-2xl bg-rose-50 border-2 border-rose-300 text-rose-950 shadow-md">
              <div class="flex items-center justify-between mb-3.5">
                <span class="font-black text-rose-700 text-base md:text-lg">✗ Chưa chính xác! (Bị trừ 1 mạng • Còn \${state.lives} tim)</span>
              </div>
              <div class="p-3.5 bg-white rounded-xl border border-rose-200 mb-3 shadow-xs">
                <div class="text-xs md:text-sm font-bold text-rose-800 mb-2">Quy tắc thất bại: Chọn trạm để quay lại tiếp tục leo tháp</div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button onclick="returnToCheckpoint()" class="py-3 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-xs md:text-sm shadow-md cursor-pointer">
                    🛡️ Về Trạm Gần Nhất (Tầng \${cpFloor})
                  </button>
                  <button onclick="returnToFloor1()" class="py-3 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs md:text-sm border border-slate-300 cursor-pointer">
                    🔄 Bắt Đầu Lại Từ Tầng 1
                  </button>
                </div>
              </div>
              <div class="bg-white p-3.5 rounded-xl border border-slate-200 text-sm text-slate-700">
                <strong class="text-indigo-700 block mb-1">📖 Lời giải chi tiết:</strong>
                \${state.question.explanation}
              </div>
            </div>
          \`;
        }
      }

      app.innerHTML = \`
        <div class="p-2 sm:p-4 md:p-6 lg:p-8 flex-1 flex flex-col">
          <!-- TOWER CASTLE OUTER BORDER FRAME -->
          <div class="max-w-7xl mx-auto w-full flex-1 flex flex-col rounded-3xl md:rounded-[2rem] border-4 md:border-[6px] border-amber-800 bg-white shadow-2xl overflow-hidden">
            
            <!-- Castle Wall Battlement Top -->
            <div class="h-4 bg-amber-900 border-b-2 border-amber-950 flex items-center justify-between px-3 text-[10px] text-amber-200 font-mono">
              <span>🏰 THÁP ĐÔI SỐ HỌC</span>
              <span>20 TẦNG THỬ THÁCH MA TRẬN</span>
              <span>TOÁN 6</span>
            </div>

            <!-- In-game Header -->
            <header class="border-b-2 border-amber-200 bg-gradient-to-r from-amber-50 via-white to-sky-50 px-4 md:px-6 py-3 flex items-center justify-between sticky top-0 z-30 shadow-xs">
              <div class="flex items-center space-x-3">
                <button onclick="if(confirm('Thoát ra màn hình chọn tháp?')) { stopTimer(); state.screen = 'mode_select'; render(); }" class="px-3 py-1.5 rounded-xl border-2 border-amber-300 bg-white text-xs font-bold text-amber-900 hover:bg-amber-50 cursor-pointer shadow-xs">
                  ← Chọn Tháp
                </button>
                <div class="flex items-center space-x-2">
                  <span class="font-black text-sm md:text-base text-slate-900">
                    \${isU ? '🏛️ Tháp Phân Rã (ƯCLN)' : '⚡ Tháp Bội Số (BCNN)'}
                  </span>
                  <span class="hidden sm:inline-block text-[10px] md:text-xs font-bold px-2 py-0.5 rounded-full \${state.gameMode === 'timed' ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-emerald-100 text-emerald-900 border border-emerald-300'}">
                    \${state.gameMode === 'timed' ? '⏱️ Có Hạn Giờ (Điểm x1.5 🔥)' : '🌿 Tự Do Nháp'}
                  </span>
                </div>
              </div>
              <div class="flex items-center space-x-2">
                <button onclick="openBriefing(state.tower)" class="px-3 py-1.5 rounded-xl border-2 border-amber-300 bg-amber-50 text-amber-900 text-xs font-bold hover:bg-amber-100 cursor-pointer shadow-xs">
                  📖 Bí Kíp Tháp
                </button>
                <button onclick="sound.toggleMute(); render();" class="p-2 rounded-xl border-2 border-slate-200 bg-white text-xs hover:bg-slate-100 cursor-pointer shadow-xs">
                  \${sound.isMuted ? '🔇' : '🔊'}
                </button>
              </div>
            </header>

            <main class="flex-1 max-w-7xl mx-auto w-full p-3 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-7 bg-slate-50/70">
              <!-- Left Map -->
              <div class="lg:col-span-4 bg-white border-2 border-amber-300 rounded-3xl p-4 flex flex-col h-[380px] lg:h-[calc(100vh-140px)] shadow-xs">
                <div class="flex justify-between items-center pb-2.5 border-b border-amber-200 mb-3">
                  <span class="font-black text-sm text-slate-900">🏰 Bản Đồ 20 Tầng</span>
                  <span class="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-300 text-amber-800">Tầng \${state.floor}/20</span>
                </div>
                <div class="flex-1 overflow-y-auto space-y-1.5 pr-1 custom-scrollbar">
                  \${mapHtml}
                </div>
              </div>

              <!-- Right Challenge Area (20% LARGER) -->
              <div class="lg:col-span-8 flex flex-col space-y-4 md:space-y-5">
                <!-- Status Bar -->
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <div class="bg-white border-2 border-slate-200 rounded-2xl p-3 shadow-xs">
                    <span class="text-xs text-slate-500 block mb-1 font-semibold">Sinh Lực</span>
                    <div class="flex space-x-1">
                      \${[0, 1, 2].map(i => \`<span class="text-lg \${i < state.lives ? 'text-rose-500' : 'text-slate-200'}">❤️</span>\`).join('')}
                    </div>
                  </div>

                  <div class="bg-white border-2 border-slate-200 rounded-2xl p-3 shadow-xs">
                    <span class="text-xs text-slate-500 block mb-1 font-semibold">Điểm Tích Lũy</span>
                    <span class="font-mono text-xl font-black text-amber-600">\${state.score.toLocaleString()} đ</span>
                  </div>

                  <div class="bg-white border-2 border-slate-200 rounded-2xl p-3 shadow-xs">
                    <div class="flex justify-between items-center text-xs text-slate-500 mb-1 font-semibold">
                      <span>Chuỗi Đúng</span>
                      <span class="text-[10px] text-orange-600 font-bold">\${multLabel}</span>
                    </div>
                    <span class="font-mono text-xl font-black text-orange-600">\${state.streak}</span>
                  </div>

                  \${state.gameMode === 'timed' ? \`
                  <div class="bg-white border-2 border-amber-200 rounded-2xl p-3 shadow-xs">
                    <div class="flex justify-between text-xs text-slate-500 mb-1 font-semibold">
                      <span>Thời Gian (x1.5 🔥)</span>
                      <span id="timer-count" class="font-mono font-bold text-amber-700">\${state.timeLeft}s</span>
                    </div>
                    <div class="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div id="timer-bar" class="h-full bg-emerald-500 rounded-full transition-all duration-300" style="width: \${timerPct}%"></div>
                    </div>
                  </div>
                  \` : \`
                  <div class="bg-white border-2 border-emerald-200 rounded-2xl p-3 shadow-xs flex flex-col justify-between">
                    <div class="flex justify-between text-xs text-emerald-800 font-bold">
                      <span>Thời Gian</span>
                      <span class="text-sm font-black">∞</span>
                    </div>
                    <div class="text-[11px] font-bold text-emerald-600 truncate">
                      🌿 Tự do nháp bài
                    </div>
                  </div>
                  \`}
                </div>

                <!-- Powerups -->
                <div class="bg-white border-2 border-slate-200 rounded-2xl p-2.5 flex items-center justify-between shadow-xs">
                  <span class="text-xs font-bold text-slate-700">✨ Bùa Hỗ Trợ:</span>
                  <div class="flex space-x-2">
                    <button onclick="useHint()" \${state.hintUses <= 0 || isAns ? 'disabled' : ''} class="px-3 py-1.5 rounded-xl border text-xs font-semibold cursor-pointer \${state.hintUses > 0 && !isAns ? 'bg-amber-50 border-amber-300 text-amber-800' : 'bg-slate-50 border-slate-200 text-slate-400 cursor-not-allowed'}">
                      💡 Gợi ý thừa số (\${state.hintUses})
                    </button>
                    <button onclick="useFiftyFifty()" \${state.fiftyFiftyUses <= 0 || isAns || state.hiddenOptions.length > 0 ? 'disabled' : ''} class="px-3 py-1.5 rounded-xl border text-xs font-semibold cursor-pointer \${state.fiftyFiftyUses > 0 && !isAns && state.hiddenOptions.length === 0 ? 'bg-sky-50 border-sky-300 text-sky-800' : 'bg-slate-50 border-slate-200 text-slate-400 cursor-not-allowed'}">
                      ⚡ Loại trừ 50/50 (\${state.fiftyFiftyUses})
                    </button>
                  </div>
                </div>

                <!-- Central Question Box (20% LARGER) -->
                <div class="bg-white border-2 border-amber-200 rounded-3xl p-6 md:p-8 shadow-md flex-1 flex flex-col justify-between">
                  <div>
                    <div class="flex justify-between items-center mb-5">
                      <span class="px-3.5 py-1.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs md:text-sm font-bold">
                        \${state.question.levelTitle}
                      </span>
                      <span class="text-xs md:text-sm text-slate-500 font-mono font-bold bg-slate-100 px-3 py-1 rounded-lg">
                        Tầng \${state.floor}/20
                      </span>
                    </div>

                    <!-- Question (20% LARGER) -->
                    <h3 class="text-xl md:text-2xl lg:text-[1.65rem] font-black text-slate-900 mb-7 leading-relaxed tracking-tight">
                      \${state.question.question}
                    </h3>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                      \${optHtml}
                    </div>
                  </div>
                  \${feedbackHtml}
                </div>
              </div>
            </main>

            <!-- Bottom Fortress Trim -->
            <div class="bg-amber-900 border-t-2 border-amber-950 py-2 px-4 flex items-center justify-between text-[11px] text-amber-200">
              <span>🛡️ Trạm cứu sinh: Tầng 1 • 6 • 11 • 16</span>
              <span>⭐ Mốc quan trọng: Tầng 5 • 10 • 15 • 20</span>
            </div>
          </div>
        </div>

        <!-- Milestone Celebration Modal -->
        \${state.isMilestoneOpen ? \`
          <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md">
            <div class="max-w-md w-full bg-white border-4 border-amber-600 rounded-3xl p-6 md:p-8 shadow-2xl text-center">
              <div class="text-6xl mb-3">\${state.milestoneFloor >= 20 ? '👑' : '⭐'}</div>
              <div class="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-black uppercase mb-2 border border-amber-300">
                HUY HIỆU VƯỢT MỐC QUAN TRỌNG
              </div>
              <h2 class="text-2xl font-black text-slate-900 mb-2">
                \${state.milestoneFloor >= 20 ? 'ĐẠI THẮNG ĐỈNH THÁP: TẦNG 20' : 'VƯỢT MỐC XUẤT SẮC: TẦNG ' + state.milestoneFloor}
              </h2>
              <p class="text-xs md:text-sm text-slate-600 mb-5 leading-relaxed">
                \${state.milestoneFloor >= 20 ? 'Bạn đã xuất sắc chinh phục toàn bộ 20 tầng tháp số học!' : 'Bạn đã chứng minh bản lĩnh tính toán số học đỉnh cao!'}
              </p>
              <div class="p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 mb-6 text-center">
                <span class="text-xs text-amber-800 font-bold uppercase block">Thưởng Vượt Cột Mốc</span>
                <span class="text-2xl font-black text-amber-700 font-mono">+\${state.milestoneBonus} Điểm</span>
              </div>
              <button onclick="continueAfterMilestone()" class="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-black text-base shadow-lg cursor-pointer">
                \${state.milestoneFloor >= 20 ? 'Xem Lễ Trao Danh Hiệu ➔' : 'Tiếp Tục Leo Tháp ➔'}
              </button>
            </div>
          </div>
        \` : ''}

        <!-- Hint Modal -->
        \${state.isHintOpen ? \`
          <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <div class="max-w-md w-full bg-white border border-amber-300 rounded-3xl p-6 shadow-2xl">
              <h3 class="font-bold text-lg text-slate-900 mb-2">💡 Gợi Ý Thừa Số & Hướng Dẫn</h3>
              <p class="text-xs text-amber-700 font-mono mb-4">Thử thách Tầng \${state.floor}</p>
              <div class="bg-amber-50 p-4 rounded-2xl border border-amber-200 text-sm text-slate-800 mb-6 leading-relaxed">
                \${state.question.hint}
              </div>
              <button onclick="state.isHintOpen = false; render();" class="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm cursor-pointer">
                Đã Hiểu, Tiếp Tục Trả Lời
              </button>
            </div>
          </div>
        \` : ''}

        <!-- Summary Modal -->
        \${state.isSummaryOpen ? \`
          <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
            <div class="max-w-xl w-full bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-2xl text-center text-slate-800 my-8">
              <div class="text-5xl mb-3">\${state.floor >= 20 && state.history[state.history.length-1].isCorrect ? '👑' : '🛡️'}</div>
              <h2 class="text-2xl md:text-3xl font-black text-slate-900 mb-1">
                \${state.floor >= 20 && state.history[state.history.length-1].isCorrect ? 'CHINH PHỤC ĐỈNH THÁP THÀNH CÔNG!' : 'HẾT MẠNG - DỪNG BƯỚC TẠI TẦNG ' + state.floor}
              </h2>
              <div class="flex items-center justify-center space-x-2 text-xs text-slate-500 mb-4">
                <span>\${isU ? 'Tháp Phân Rã (ƯCLN)' : 'Tháp Bội Số (BCNN)'}</span>
                <span>•</span>
                <span>Thời gian: \${state.totalTime}s</span>
                <span>•</span>
                <span class="font-bold px-2 py-0.5 rounded-full \${state.gameMode === 'timed' ? 'bg-amber-100 text-amber-900' : 'bg-emerald-100 text-emerald-900'}">
                  \${state.gameMode === 'timed' ? '⏱️ Có Hạn Giờ' : '🌿 Không Hạn Giờ'}
                </span>
              </div>
              
              <div class="p-4 rounded-2xl bg-amber-50 border border-amber-200 mb-6">
                <span class="text-[11px] uppercase tracking-wider text-amber-800 font-bold block mb-1">Danh Hiệu Đạt Được</span>
                <span class="text-xl md:text-2xl font-black text-amber-900">« \${getRankTitle(state.floor)} »</span>
              </div>

              <div class="grid grid-cols-3 gap-3 mb-6">
                <div class="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                  <span class="text-xs text-slate-500 block mb-1 font-semibold">Tổng Điểm</span>
                  <span class="font-mono text-lg font-black text-amber-600">\${state.score.toLocaleString()} đ</span>
                </div>
                <div class="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                  <span class="text-xs text-slate-500 block mb-1 font-semibold">Tầng Vượt</span>
                  <span class="font-mono text-lg font-black text-sky-600">\${state.floor}/20</span>
                </div>
                <div class="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                  <span class="text-xs text-slate-500 block mb-1 font-semibold">Chuỗi Kỷ Lục</span>
                  <span class="font-mono text-lg font-black text-orange-600">\${state.maxStreak}</span>
                </div>
              </div>

              <div class="space-y-2.5">
                \${!(state.floor >= 20 && state.history[state.history.length-1].isCorrect) ? \`
                  <button onclick="returnToCheckpoint()" class="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm shadow-md cursor-pointer">
                    🛡️ Hồi sinh từ Trạm Kiểm Soát (Tầng \${cpFloor})
                  </button>
                \` : ''}
                <button onclick="returnToFloor1()" class="w-full py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm border border-slate-300 cursor-pointer">
                  🔄 Bắt Đầu Lại Từ Tầng 1
                </button>
                <button onclick="state.isSummaryOpen = false; state.screen = 'mode_select'; render();" class="w-full py-2.5 rounded-xl bg-white border border-slate-250 text-slate-700 text-xs font-semibold hover:bg-slate-100 cursor-pointer">
                  🏛️ Chọn Tháp Khác
                </button>
              </div>
            </div>
          </div>
        \` : ''}
      \`;
    }

    // Initialize App
    window.addEventListener('DOMContentLoaded', () => {
      render();
    });
  </script>
</body>
</html>`;
}

export function downloadStandaloneHtmlFile() {
  const htmlContent = generateStandaloneHtml();
  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Chinh-Phuc-Thap-Doi-So-Hoc-UCLN-BCNN.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
