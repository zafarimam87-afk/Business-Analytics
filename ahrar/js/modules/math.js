/* =============================================
   MATH MODULE — Interactive games & quizzes
   ============================================= */

const MathModule = {
  gameState: null,

  render(container) {
    container.innerHTML = `
      <div class="module-header fade-up">
        <h2 style="color:#4FC3F7">🔢 Math Adventure</h2>
        <p>Train your brain with numbers, games and challenges!</p>
      </div>

      <!-- GAMES GRID -->
      <div id="math-home">
        <div class="section-heading fade-up">🎮 Choose a Game</div>
        <div class="math-games-grid fade-up">
          <div class="math-game-card" onclick="MathModule.startGame('blitz')">
            <div class="game-emoji">⚡</div>
            <div class="game-name">Math Blitz</div>
            <div class="game-desc">Answer as many as you can in 60 seconds!</div>
          </div>
          <div class="math-game-card" onclick="MathModule.startGame('survival')">
            <div class="game-emoji">❤️</div>
            <div class="game-name">Survival Mode</div>
            <div class="game-desc">3 lives — how far can you go?</div>
          </div>
          <div class="math-game-card" onclick="MathModule.startGame('multiplication')">
            <div class="game-emoji">✖️</div>
            <div class="game-name">Times Tables</div>
            <div class="game-desc">Master all your multiplication tables</div>
          </div>
          <div class="math-game-card" onclick="Quiz.open('math', MathModule.onQuizDone)">
            <div class="game-emoji">📝</div>
            <div class="game-name">Math Quiz</div>
            <div class="game-desc">Multiple-choice maths questions</div>
          </div>
        </div>

        <div class="section-heading mt-24 fade-up">🔢 Number Facts</div>
        <div class="card fade-up" style="border-color:rgba(79,195,247,0.2)">
          <div class="space-fun-facts">
            <div class="fun-fact-item"><div class="fun-fact-icon">🌀</div><div class="fun-fact-text">Pi (π) starts with 3.14159… and goes on <strong>forever without repeating!</strong> Mathematicians have calculated it to over 100 trillion digits.</div></div>
            <div class="fun-fact-item"><div class="fun-fact-icon">♾️</div><div class="fun-fact-text">There are <strong>infinitely many prime numbers</strong>! A prime number is only divisible by 1 and itself (2, 3, 5, 7, 11, 13...).</div></div>
            <div class="fun-fact-item"><div class="fun-fact-icon">🌿</div><div class="fun-fact-text">The <strong>Fibonacci sequence</strong> (1,1,2,3,5,8,13,21…) appears in sunflowers, pinecones, shells, and even your fingers!</div></div>
            <div class="fun-fact-item"><div class="fun-fact-icon">0️⃣</div><div class="fun-fact-text">The number zero was <strong>invented in India!</strong> Before zero, doing maths or large numbers was much harder.</div></div>
          </div>
        </div>

        <div class="section-heading mt-24 fade-up">🌐 Learn More</div>
        <div class="ext-resources fade-up">
          <a href="https://www.khanacademy.org/math" target="_blank" class="resource-card">
            <div class="resource-icon">📚</div>
            <div class="resource-info"><h4>Khan Academy Maths</h4><p>Free lessons for every level</p></div>
          </a>
          <a href="https://www.mathplayground.com" target="_blank" class="resource-card">
            <div class="resource-icon">🛝</div>
            <div class="resource-info"><h4>Math Playground</h4><p>Maths games & puzzles</p></div>
          </a>
          <a href="https://www.coolmathgames.com" target="_blank" class="resource-card">
            <div class="resource-icon">🎮</div>
            <div class="resource-info"><h4>Cool Math Games</h4><p>Fun maths adventures</p></div>
          </a>
        </div>
      </div>

      <!-- GAME ARENA -->
      <div id="math-arena" style="display:none" class="fade-up">
        <div class="gap-row mb-24">
          <button class="btn btn-info" onclick="MathModule.exitGame()">← Back to Games</button>
          <span id="math-game-name" style="font-weight:800;font-size:1.1rem"></span>
        </div>

        <div class="math-score-bar card mb-16" style="border-color:rgba(79,195,247,0.2)">
          <div class="math-score-item"><div class="val" id="math-score" style="color:#00FF88">0</div><div class="lbl">Score</div></div>
          <div class="math-score-item"><div class="val" id="math-streak-val" style="color:#FF8C00">0</div><div class="lbl">Streak 🔥</div></div>
          <div class="math-score-item" id="lives-display"><div class="val" id="math-lives">❤️❤️❤️</div><div class="lbl">Lives</div></div>
          <div class="math-score-item" id="timer-display"><div class="val" id="math-timer" style="color:#4FC3F7">60</div><div class="lbl">Seconds</div></div>
        </div>

        <div class="math-problem" id="math-problem">Get Ready!</div>
        <div id="math-level-tag" style="text-align:center;margin-bottom:12px;color:var(--text-dim);font-size:0.85rem"></div>
        <input type="number" class="math-answer-input" id="math-answer" placeholder="Type your answer…"
               onkeydown="if(event.key==='Enter')MathModule.submitAnswer()" autocomplete="off" />
        <div style="text-align:center;display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
          <button class="btn btn-success" onclick="MathModule.submitAnswer()">✓ Submit</button>
          <button class="btn btn-warning" onclick="MathModule.skipQuestion()">Skip →</button>
        </div>
        <div id="math-feedback" style="text-align:center;margin-top:16px;font-size:1.1rem;font-weight:800;min-height:32px"></div>
      </div>

      <!-- TIMES TABLES -->
      <div id="times-table-area" style="display:none" class="fade-up">
        <div class="gap-row mb-24">
          <button class="btn btn-info" onclick="MathModule.exitGame()">← Back</button>
          <span style="font-weight:800;font-size:1.1rem">✖️ Times Tables Practice</span>
        </div>
        <div class="card mb-16" style="border-color:rgba(79,195,247,0.2)">
          <div class="section-heading" style="margin-bottom:14px">Choose a table to practise:</div>
          <div style="display:flex;flex-wrap:wrap;gap:10px">
            ${Array.from({length:12},(_,i)=>`<button class="btn btn-info" onclick="MathModule.showTimesTable(${i+1})">${i+1}×</button>`).join('')}
          </div>
        </div>
        <div id="times-table-display"></div>
      </div>
    `;
  },

  init() {},

  onQuizDone(score, total) {
    App.showToast('📐', `Maths Quiz done! ${score}/${total} correct!`);
  },

  startGame(mode) {
    this.gameState = {
      mode, score: 0, streak: 0, lives: 3,
      timeLeft: 60, active: true,
    };

    document.getElementById('math-home').style.display = 'none';
    document.getElementById('times-table-area').style.display = 'none';
    document.getElementById('math-arena').style.display = 'block';

    const names = { blitz:'⚡ Math Blitz', survival:'❤️ Survival Mode', multiplication:'✖️ Times Tables Blitz' };
    document.getElementById('math-game-name').textContent = names[mode] || mode;

    document.getElementById('timer-display').style.display = mode==='blitz'?'flex':'none';
    document.getElementById('lives-display').style.display = mode==='survival'?'flex':'none';

    this.updateGameHUD();
    this.nextQuestion();

    if (mode === 'blitz') {
      this.gameState.timer = setInterval(() => {
        this.gameState.timeLeft--;
        document.getElementById('math-timer').textContent = this.gameState.timeLeft;
        if (this.gameState.timeLeft <= 0) this.endGame();
      }, 1000);
    }

    setTimeout(() => document.getElementById('math-answer').focus(), 100);
  },

  nextQuestion() {
    const gs = this.gameState;
    if (!gs || !gs.active) return;

    let a, b, op, answer;
    const level = Math.min(Math.floor(gs.score / 5), 3);
    const ops = level < 1 ? ['+','-'] : level < 2 ? ['+','-','×'] : ['+','-','×','÷'];
    op = ops[Math.floor(Math.random()*ops.length)];

    if (gs.mode === 'multiplication') op = '×';

    const maxNum = level === 0 ? 10 : level === 1 ? 20 : level === 2 ? 12 : 15;

    switch(op) {
      case '+': a = r(1,maxNum); b = r(1,maxNum); answer = a+b; break;
      case '-': a = r(maxNum/2,maxNum); b = r(1,Math.floor(a)); answer = a-b; break;
      case '×': a = r(1,12); b = r(1,12); answer = a*b; break;
      case '÷': b = r(2,10); answer = r(1,10); a = b*answer; break;
    }

    gs.current = { a, b, op, answer };
    document.getElementById('math-problem').textContent = `${a} ${op} ${b} = ?`;
    document.getElementById('math-answer').value = '';
    document.getElementById('math-answer').classList.remove('correct','wrong');
    document.getElementById('math-feedback').textContent = '';

    const levelNames = ['Starter','Explorer','Ninja','Genius'];
    document.getElementById('math-level-tag').textContent = `Level: ${levelNames[level]}`;
  },

  submitAnswer() {
    const gs = this.gameState;
    if (!gs || !gs.active) return;

    const input = document.getElementById('math-answer');
    const val = parseInt(input.value);
    if (isNaN(val)) { input.focus(); return; }

    const fb = document.getElementById('math-feedback');

    if (val === gs.current.answer) {
      gs.score++;
      gs.streak++;
      input.classList.add('correct');
      fb.textContent = ['✅ Correct! +1','🎉 Brilliant!','⭐ Amazing!','🔥 On fire!'][Math.min(Math.floor(gs.streak/3),3)];
      fb.style.color = '#00FF88';
      App.addXP(gs.streak >= 5 ? 3 : 1);
      App.state.mathCorrect = (App.state.mathCorrect||0) + 1;
      App.checkAchievement();
    } else {
      gs.streak = 0;
      input.classList.add('wrong');
      fb.textContent = `❌ The answer was ${gs.current.answer}`;
      fb.style.color = '#FCA5A5';
      if (gs.mode === 'survival') {
        gs.lives--;
        this.updateGameHUD();
        if (gs.lives <= 0) { setTimeout(() => this.endGame(), 1000); return; }
      }
    }

    this.updateGameHUD();
    setTimeout(() => this.nextQuestion(), 800);
  },

  skipQuestion() {
    this.gameState.streak = 0;
    this.updateGameHUD();
    this.nextQuestion();
  },

  updateGameHUD() {
    const gs = this.gameState;
    if (!gs) return;
    document.getElementById('math-score').textContent = gs.score;
    document.getElementById('math-streak-val').textContent = gs.streak;
    document.getElementById('math-lives').textContent = '❤️'.repeat(gs.lives) || '💀';
    document.getElementById('math-timer').textContent = gs.timeLeft;
  },

  endGame() {
    const gs = this.gameState;
    if (!gs) return;
    gs.active = false;
    clearInterval(gs.timer);
    App.addXP(gs.score * 2);
    App.saveState();

    document.getElementById('math-problem').innerHTML =
      `<div style="font-size:0.6em;line-height:1.8">
        Game Over!<br>
        <span style="color:#00FF88">Score: ${gs.score}</span><br>
        <button class="btn btn-success" style="font-size:0.5em;margin-top:12px" onclick="MathModule.exitGame()">Play Again</button>
      </div>`;
  },

  exitGame() {
    if (this.gameState?.timer) clearInterval(this.gameState.timer);
    this.gameState = null;
    document.getElementById('math-arena').style.display = 'none';
    document.getElementById('times-table-area').style.display = 'none';
    document.getElementById('math-home').style.display = 'block';
  },

  showTimesTable(n) {
    document.getElementById('math-home').style.display = 'none';
    document.getElementById('times-table-area').style.display = 'block';
    const div = document.getElementById('times-table-display');
    div.innerHTML = `
      <div class="card" style="border-color:rgba(79,195,247,0.2)">
        <div class="section-heading" style="color:#4FC3F7">${n} Times Table</div>
        <div style="display:grid;gap:8px">
          ${Array.from({length:12},(_,i)=>`
            <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:rgba(79,195,247,0.06);border-radius:8px;font-family:var(--font-display);font-size:1rem">
              <span style="color:var(--text-dim)">${n} × ${i+1}</span>
              <span style="font-size:1.2rem;font-weight:900;color:#4FC3F7">= ${n*(i+1)}</span>
            </div>`).join('')}
        </div>
        <div style="margin-top:16px">
          <button class="btn btn-success" onclick="MathModule.startGame('blitz')">Practice ${n}× in Blitz!</button>
        </div>
      </div>`;
  },
};

function r(min, max) { return Math.floor(Math.random()*(max-min+1))+min; }
