/* =============================================
   APP — Core controller: navigation, XP, levels, achievements
   ============================================= */

const App = {
  state: {
    xp: 0, level: 1, streak: 0, lastVisit: null,
    achievements: [],
    pythonLesson: 0,
    mathCorrect: 0,
    quizzesDone: 0,
    karateDays: 0,
    tutorialsDone: 0,
    moduleVisits: {},
  },

  modules: {
    'about':         { module: AboutModule,       name: 'About Ahrar',    emoji: '👦' },
    'my-drawings':   { module: MyDrawingsModule,  name: 'My Drawings',    emoji: '🎨' },
    'python':        { module: PythonModule,      name: 'Python Coder',   emoji: '🐍' },
    'math':          { module: MathModule,        name: 'Math Adventure', emoji: '🔢' },
    'science':       { module: ScienceModule,     name: 'Science Lab',    emoji: '🔬' },
    'physics':       { module: PhysicsModule,     name: 'Physics Lab',    emoji: '⚛️' },
    'biology':       { module: BiologyModule,     name: 'Biology Lab',    emoji: '🧬' },
    'space':         { module: SpaceModule,       name: 'Space Explorer', emoji: '🚀' },
    'karate':        { module: KarateModule,      name: 'Karate Dojo',    emoji: '🥋' },
    'drawing-learn': { module: DrawingLearnModule,name: 'Drawing Studio', emoji: '✏️' },
  },

  init() {
    this.loadState();
    this.updateStreak();
    this.generateStars();
    this.startShootingStars();
    this.renderAchievements();
    this.updateHUD();

    document.querySelectorAll('.module-card').forEach(card => {
      card.addEventListener('click', () => {
        this.showModule(card.dataset.module);
      });
    });

    this.checkAchievement('first_visit');
    console.log('🚀 Ahrar\'s Galaxy loaded!');
  },

  /* ===== NAVIGATION ===== */
  showHome() {
    document.getElementById('home-screen').classList.add('active');
    document.getElementById('home-screen').classList.remove('hidden');
    document.getElementById('module-screen').classList.add('hidden');
    document.getElementById('module-screen').classList.remove('active');
    this.renderAchievements();
    this.updateHUD();
  },

  showModule(id) {
    const entry = this.modules[id];
    if (!entry) return;

    document.getElementById('home-screen').classList.remove('active');
    document.getElementById('home-screen').classList.add('hidden');
    const ms = document.getElementById('module-screen');
    ms.classList.remove('hidden');
    ms.classList.add('active');

    document.getElementById('module-breadcrumb').textContent = entry.emoji + ' ' + entry.name;
    document.getElementById('module-content').innerHTML = '';

    entry.module.render(document.getElementById('module-content'));
    if (typeof entry.module.init === 'function') entry.module.init();

    this.state.moduleVisits[id] = (this.state.moduleVisits[id] || 0) + 1;
    this.saveState();
    ms.scrollIntoView({ behavior: 'smooth', block: 'start' });
  },

  /* ===== XP & LEVELS ===== */
  addXP(amount, reason) {
    this.state.xp += amount;
    const needed = this.xpForLevel(this.state.level + 1);
    if (this.state.xp >= needed) {
      this.state.level++;
      this.showToast('🎉', `Level Up! You are now Level ${this.state.level} — ${DATA.levelNames[Math.min(this.state.level-1, DATA.levelNames.length-1)]}!`);
    }
    this.updateHUD();
    this.saveState();
    if (reason) this.checkAchievement(null);
  },

  xpForLevel(level) {
    return level * level * 50;
  },

  updateHUD() {
    const s = this.state;
    const lvlName = DATA.levelNames[Math.min(s.level-1, DATA.levelNames.length-1)];
    const thisLvlXP = this.xpForLevel(s.level);
    const nextLvlXP = this.xpForLevel(s.level+1);
    const pct = Math.min(100, ((s.xp - thisLvlXP) / (nextLvlXP - thisLvlXP)) * 100);

    document.getElementById('header-xp').textContent     = s.xp + ' XP';
    document.getElementById('header-level').textContent  = 'Level ' + s.level;
    document.getElementById('header-streak').textContent = s.streak + ' day streak';
    document.getElementById('home-level-label').textContent = `Level ${s.level} — ${lvlName}`;
    document.getElementById('home-xp-label').textContent    = `${s.xp} / ${nextLvlXP} XP`;
    const fill = document.getElementById('home-xp-fill');
    if (fill) fill.style.width = Math.max(0, pct) + '%';
  },

  /* ===== STREAK ===== */
  updateStreak() {
    const today = new Date().toDateString();
    if (this.state.lastVisit) {
      const last = new Date(this.state.lastVisit);
      const diff = (new Date() - last) / (1000*60*60*24);
      if (diff >= 1 && diff < 2) this.state.streak++;
      else if (diff >= 2) this.state.streak = 1;
    } else {
      this.state.streak = 1;
    }
    this.state.lastVisit = new Date().toISOString();
    this.saveState();
  },

  /* ===== ACHIEVEMENTS ===== */
  checkAchievement(id) {
    DATA.achievements.forEach(a => {
      if (!this.state.achievements.includes(a.id) && a.condition(this.state)) {
        this.state.achievements.push(a.id);
        this.showToast(a.emoji, a.desc);
        this.addXP(20);
        this.renderAchievements();
        this.saveState();
      }
    });
  },

  renderAchievements() {
    const row = document.getElementById('achievements-row');
    if (!row) return;
    row.innerHTML = '';
    this.state.achievements.forEach(id => {
      const a = DATA.achievements.find(x => x.id === id);
      if (!a) return;
      const el = document.createElement('div');
      el.className = 'achievement-badge';
      el.innerHTML = `<span>${a.emoji}</span><span>${a.title}</span>`;
      el.title = a.desc;
      row.appendChild(el);
    });
  },

  /* ===== TOAST ===== */
  showToast(icon, message) {
    const t = document.getElementById('achievement-toast');
    document.getElementById('toast-icon').textContent = icon;
    document.getElementById('toast-desc').textContent = message;
    t.classList.remove('hidden');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => t.classList.add('hidden'), 4000);
  },

  /* ===== STARS ===== */
  generateStars() {
    const container = document.getElementById('stars');
    const count = 80;
    for (let i = 0; i < count; i++) {
      const s = document.createElement('div');
      s.style.cssText = `position:absolute;width:${Math.random()*2+1}px;height:${Math.random()*2+1}px;
        background:rgba(255,255,255,${0.4+Math.random()*0.6});border-radius:50%;
        left:${Math.random()*100}%;top:${Math.random()*100}%;
        animation:twinkle ${2+Math.random()*4}s ease-in-out infinite;
        animation-delay:${Math.random()*5}s;`;
      container.appendChild(s);
    }
    const style = document.createElement('style');
    style.textContent = `@keyframes twinkle{0%,100%{opacity:0.3;transform:scale(1)}50%{opacity:1;transform:scale(1.3)}}`;
    document.head.appendChild(style);
  },

  startShootingStars() {
    const container = document.getElementById('shooting-stars');
    setInterval(() => {
      if (Math.random() > 0.6) return;
      const star = document.createElement('div');
      star.className = 'shooting-star';
      star.style.left  = Math.random() * 60 + '%';
      star.style.top   = Math.random() * 50 + '%';
      container.appendChild(star);
      setTimeout(() => star.remove(), 3000);
    }, 2500);
  },

  /* ===== PERSISTENCE ===== */
  saveState() {
    localStorage.setItem('ahrar_galaxy', JSON.stringify(this.state));
  },

  loadState() {
    try {
      const saved = localStorage.getItem('ahrar_galaxy');
      if (saved) {
        const parsed = JSON.parse(saved);
        Object.assign(this.state, parsed);
      }
    } catch(e) { console.warn('Could not load saved state'); }
  },
};

/* =============================================
   QUIZ ENGINE
   ============================================= */
const Quiz = {
  questions: [], current: 0, score: 0, answered: false, onComplete: null,

  open(topic, onComplete) {
    const bank = DATA.quizzes[topic];
    if (!bank) return;
    const shuffled = [...bank].sort(() => Math.random()-0.5).slice(0,8);
    this.questions = shuffled;
    this.current = 0;
    this.score = 0;
    this.answered = false;
    this.onComplete = onComplete;

    document.getElementById('quiz-modal').classList.remove('hidden');
    this.render();
  },

  render() {
    const q = this.questions[this.current];
    document.getElementById('qz-num').textContent   = this.current+1;
    document.getElementById('qz-total').textContent = this.questions.length;
    document.getElementById('qz-score').textContent  = this.score;
    document.getElementById('qz-question').textContent = q.q;
    document.getElementById('qz-feedback').textContent = '';
    document.getElementById('qz-next').classList.add('hidden');
    this.answered = false;

    const opts = document.getElementById('qz-options');
    opts.innerHTML = '';
    q.opts.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-opt';
      btn.textContent = opt;
      btn.onclick = () => this.answer(i);
      opts.appendChild(btn);
    });
  },

  answer(idx) {
    if (this.answered) return;
    this.answered = true;
    const q = this.questions[this.current];
    const opts = document.querySelectorAll('.quiz-opt');
    opts.forEach((b, i) => {
      b.style.cursor = 'default';
      if (i === q.ans) b.classList.add('correct');
      else if (i === idx) b.classList.add('wrong');
    });
    const fb = document.getElementById('qz-feedback');
    if (idx === q.ans) {
      this.score++;
      fb.textContent = '✅ Correct! Great job!';
      fb.style.color = '#6EE7B7';
      App.addXP(5);
      App.state.mathCorrect = (App.state.mathCorrect||0) + 1;
    } else {
      fb.textContent = '❌ Not quite. The answer was: ' + q.opts[q.ans];
      fb.style.color = '#FCA5A5';
    }
    document.getElementById('qz-next').classList.remove('hidden');
    document.getElementById('qz-score').textContent = this.score;
  },

  next() {
    this.current++;
    if (this.current >= this.questions.length) {
      this.finish();
    } else {
      this.render();
    }
  },

  finish() {
    const pct = Math.round((this.score/this.questions.length)*100);
    let grade = pct>=80?'⭐ Excellent!':pct>=60?'👍 Good job!':pct>=40?'📚 Keep practising!':'💪 Try again!';
    document.getElementById('qz-question').innerHTML = `<b>Quiz Complete!</b><br><br>You scored <b>${this.score}/${this.questions.length}</b> (${pct}%)<br><br>${grade}`;
    document.getElementById('qz-options').innerHTML = '';
    document.getElementById('qz-feedback').textContent = '';
    document.getElementById('qz-next').textContent = '✓ Close';
    document.getElementById('qz-next').onclick = () => this.close();
    document.getElementById('qz-next').classList.remove('hidden');
    App.addXP(this.score * 5 + 10);
    App.state.quizzesDone = (App.state.quizzesDone||0) + 1;
    App.checkAchievement();
    App.saveState();
    if (this.onComplete) this.onComplete(this.score, this.questions.length);
  },

  close() {
    document.getElementById('quiz-modal').classList.add('hidden');
  },

  closeOnOverlay(e) {
    if (e.target.id === 'quiz-modal') this.close();
  },
};

/* =============================================
   FLASHCARD ENGINE
   ============================================= */
const Flashcard = {
  cards: [], current: 0, flipped: false,

  open(topic) {
    const deck = DATA.flashcards[topic];
    if (!deck) return;
    this.cards = [...deck].sort(() => Math.random()-0.5);
    this.current = 0;
    this.flipped = false;
    document.getElementById('fc-modal').classList.remove('hidden');
    this.render();
  },

  render() {
    const c = this.cards[this.current];
    document.getElementById('fc-num').textContent   = this.current+1;
    document.getElementById('fc-total').textContent = this.cards.length;
    document.getElementById('fc-front').textContent = c.f;
    document.getElementById('fc-back').textContent  = c.b;
    this.flipped = false;
    document.getElementById('fc-card').classList.remove('flipped');
  },

  flip() {
    this.flipped = !this.flipped;
    document.getElementById('fc-card').classList.toggle('flipped', this.flipped);
    if (this.flipped) App.addXP(2);
  },

  prev() {
    this.current = (this.current - 1 + this.cards.length) % this.cards.length;
    this.render();
  },

  next() {
    this.current = (this.current + 1) % this.cards.length;
    this.render();
  },

  close() {
    document.getElementById('fc-modal').classList.add('hidden');
  },

  closeOnOverlay(e) {
    if (e.target.id === 'fc-modal') this.close();
  },
};

/* =============================================
   MIND MAP ENGINE
   ============================================= */
const MindMap = {
  open(topic) {
    const data = DATA.mindmaps[topic];
    if (!data) return;
    document.getElementById('mm-title').textContent = data.title;
    const container = document.getElementById('mm-container');
    container.innerHTML = '';

    const W = 600, H = 400, CX = W/2, CY = H/2;
    container.style.width  = W+'px';
    container.style.height = H+'px';

    const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('width',W); svg.setAttribute('height',H);
    svg.style.cssText='position:absolute;inset:0;';
    container.appendChild(svg);

    const addLine=(x1,y1,x2,y2,color)=>{
      const l=document.createElementNS('http://www.w3.org/2000/svg','line');
      Object.assign(l,{x1,y1,x2,y2});
      l.setAttribute('x1',x1);l.setAttribute('y1',y1);l.setAttribute('x2',x2);l.setAttribute('y2',y2);
      l.setAttribute('stroke',color||'rgba(255,255,255,0.2)');
      l.setAttribute('stroke-width','2');
      svg.appendChild(l);
    };

    const addNode=(label,x,y,color,center)=>{
      const n=document.createElement('div');
      n.className='mm-node'+(center?' center':'');
      n.style.cssText=`left:${x}px;top:${y}px;background:${color}22;border:1.5px solid ${color};color:#fff;`;
      n.textContent=label;
      container.appendChild(n);
      return n;
    };

    addNode(data.center.label, CX, CY, data.center.color, true);

    data.nodes.forEach(node => {
      const nx = (node.x/100)*W;
      const ny = (node.y/100)*H;
      addLine(CX, CY, nx, ny, node.color);
      const nEl = addNode(node.label, nx, ny, node.color, false);

      node.children.forEach((child,i) => {
        const angle = (i / node.children.length) * Math.PI - Math.PI/2;
        const dist = 80;
        const cx = nx + Math.cos(angle)*dist;
        const cy = ny + Math.sin(angle)*dist*0.7;
        addLine(nx, ny, cx, cy, node.color+'88');
        const cEl = document.createElement('div');
        cEl.className='mm-node';
        cEl.style.cssText=`left:${cx}px;top:${cy}px;background:rgba(255,255,255,0.04);border:1px solid ${node.color}55;color:${node.color};font-size:0.72rem;padding:6px 12px;`;
        cEl.textContent=child;
        container.appendChild(cEl);
      });
    });

    document.getElementById('mm-modal').classList.remove('hidden');
    App.addXP(5);
  },

  close() { document.getElementById('mm-modal').classList.add('hidden'); },
  closeOnOverlay(e) { if (e.target.id==='mm-modal') this.close(); },
};

/* ===== BOOT ===== */
document.addEventListener('DOMContentLoaded', () => App.init());
