/* =============================================
   KARATE MODULE — Belt system, techniques, daily practice tracker, quiz
   ============================================= */

const KarateModule = {
  selectedBelt: 0,
  practiceState: {},

  render(container) {
    const today = new Date().toDateString();
    if (this.practiceState.date !== today) {
      this.practiceState = { date: today, done: [] };
    }

    container.innerHTML = `
      <div class="module-header fade-up">
        <h2 style="color:#FF3333">🥋 Karate Dojo</h2>
        <p>Train your body, focus your mind, honour your spirit.</p>
      </div>

      <!-- BELT PATH -->
      <div class="card mb-24 fade-up" style="border-color:rgba(255,51,51,0.2)">
        <div class="section-heading" style="color:#FF3333">🥋 Belt Progression Path</div>
        <div class="belt-row" id="belt-row">
          ${DATA.belts.map((b,i)=>`
            <div class="belt-chip ${i===this.selectedBelt?'active':''}"
                 style="background:${b.bg};border-color:${b.color};color:${b.color}"
                 onclick="KarateModule.selectBelt(${i})">${b.emoji} ${b.name}</div>`).join('')}
        </div>
        <div id="belt-detail" class="card" style="margin-top:0;border-color:rgba(255,255,255,0.07)">
          ${this.renderBeltDetail(this.selectedBelt)}
        </div>
      </div>

      <!-- DAILY PRACTICE -->
      <div class="card mb-24 fade-up" style="border-color:rgba(255,51,51,0.2)">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;margin-bottom:16px">
          <div class="section-heading" style="color:#FF3333;margin:0">📋 Daily Practice Tracker</div>
          <div id="practice-count" style="font-family:var(--font-display);font-size:1rem;color:#FF3333">
            ${this.practiceState.done?.length||0} / ${DATA.practiceItems.length} done
          </div>
        </div>
        <div class="daily-checklist" id="daily-checklist">
          ${DATA.practiceItems.map((item,i)=>`
            <div class="checklist-item ${this.practiceState.done?.includes(i)?'done':''}"
                 id="check-${i}" onclick="KarateModule.toggleCheck(${i})">
              <div class="check-box">${this.practiceState.done?.includes(i)?'✓':''}</div>
              <div class="check-label">${item.emoji} ${item.label}</div>
            </div>`).join('')}
        </div>
        <div id="practice-complete" style="display:${this.allDone()?'block':'none'};text-align:center;padding:16px">
          <div style="font-size:2rem;margin-bottom:8px">🏆</div>
          <div style="font-weight:900;color:#00FF88;margin-bottom:4px">Daily Training Complete!</div>
          <div style="color:var(--text-dim);font-size:0.85rem">Osu! Great discipline today, sensei!</div>
        </div>
      </div>

      <!-- TECHNIQUES -->
      <div class="card mb-24 fade-up" style="border-color:rgba(255,51,51,0.2)">
        <div class="section-heading" style="color:#FF3333">⚡ Karate Techniques</div>
        <div class="technique-cards">
          ${DATA.techniques.map((t,i)=>`
            <div class="technique-card" onclick="KarateModule.showTechDetail(${i})">
              <div class="tech-emoji">${t.emoji}</div>
              <div class="tech-name">${t.name}</div>
              <div class="tech-japanese">${t.japanese}</div>
            </div>`).join('')}
        </div>
      </div>

      <!-- QUIZ & FLASHCARDS -->
      <div class="card mb-24 fade-up" style="border-color:rgba(255,51,51,0.2)">
        <div class="section-heading" style="color:#FF3333">📝 Test Your Knowledge</div>
        <div class="gap-row">
          <button class="btn btn-danger" onclick="Quiz.open('karate')">🧠 Karate Quiz</button>
          <button class="btn btn-warning" onclick="Flashcard.open('karate')">🃏 Japanese Terms Flashcards</button>
        </div>
      </div>

      <!-- VIDEOS -->
      <div class="card mb-24 fade-up" style="border-color:rgba(255,51,51,0.2)">
        <div class="section-heading" style="color:#FF3333">🎥 Karate Training Videos</div>
        <div class="video-grid">
          ${[
            { title:'Basic Karate Kicks for Beginners',  emoji:'🦵', url:'https://www.youtube.com/results?search_query=karate+kicks+for+beginners+kids' },
            { title:'Karate Punches & Blocks',           emoji:'👊', url:'https://www.youtube.com/results?search_query=karate+punches+blocks+tutorial+kids' },
            { title:'Kata for Beginners',               emoji:'🥋', url:'https://www.youtube.com/results?search_query=karate+kata+for+kids+beginners' },
            { title:'Karate Warm-Up Stretches',         emoji:'🤸', url:'https://www.youtube.com/results?search_query=karate+warm+up+stretching+for+kids' },
          ].map(v=>`
            <div class="video-card">
              <div class="video-thumb" onclick="window.open('${v.url}','_blank')">
                <span style="font-size:3.5rem">${v.emoji}</span>
                <div class="play-overlay">▶️</div>
              </div>
              <div class="video-info"><h4>${v.title}</h4><p>Search on YouTube</p></div>
            </div>`).join('')}
        </div>
      </div>

      <!-- TECHNIQUE DETAIL MODAL (inline) -->
      <div id="tech-detail-modal" style="display:none" class="card fade-up" style="border-color:rgba(255,51,51,0.3)">
        <button onclick="document.getElementById('tech-detail-modal').style.display='none'" style="float:right;background:rgba(255,51,51,0.2);border:1px solid rgba(255,51,51,0.4);color:white;padding:4px 12px;border-radius:100px;cursor:pointer;font-weight:700">✕</button>
        <div id="tech-detail-content"></div>
      </div>

      <!-- DOJO RULES -->
      <div class="card fade-up" style="border-color:rgba(255,51,51,0.2)">
        <div class="section-heading" style="color:#FF3333">🌸 The Dojo Code</div>
        <div class="space-fun-facts">
          <div class="fun-fact-item"><div class="fun-fact-icon">🙏</div><div class="fun-fact-text"><strong>Respect (Rei):</strong> Bow when entering and leaving the Dojo. Show respect to your Sensei and fellow students.</div></div>
          <div class="fun-fact-item"><div class="fun-fact-icon">🧠</div><div class="fun-fact-text"><strong>Discipline (Seishin):</strong> Focus completely during training. Leave distractions outside the Dojo door.</div></div>
          <div class="fun-fact-item"><div class="fun-fact-icon">💪</div><div class="fun-fact-text"><strong>Perseverance (Nintai):</strong> Never give up, even when it's hard. Each day of practice makes you stronger.</div></div>
          <div class="fun-fact-item"><div class="fun-fact-icon">🤝</div><div class="fun-fact-text"><strong>Control (Jiko Seigyo):</strong> A true martial artist never uses karate to harm others — only to protect and defend.</div></div>
        </div>
      </div>
    `;
  },

  init() {},

  renderBeltDetail(idx) {
    const b = DATA.belts[idx];
    return `
      <div style="display:flex;align-items:flex-start;gap:16px;flex-wrap:wrap">
        <div style="font-size:3rem">${b.emoji}</div>
        <div style="flex:1">
          <div style="font-size:1.2rem;font-weight:900;color:${b.color};margin-bottom:6px">${b.name}</div>
          <div style="color:var(--text-dim);font-size:0.88rem;margin-bottom:14px;font-style:italic">"${b.desc}"</div>
          <div style="font-weight:800;margin-bottom:8px">Techniques to master:</div>
          <div style="display:grid;gap:6px">
            ${b.techniques.map(t=>`<div style="display:flex;align-items:center;gap:8px;font-size:0.88rem"><span style="color:${b.color}">▸</span> ${t}</div>`).join('')}
          </div>
        </div>
      </div>`;
  },

  selectBelt(idx) {
    this.selectedBelt = idx;
    document.querySelectorAll('.belt-chip').forEach((c,i) => c.classList.toggle('active', i===idx));
    document.getElementById('belt-detail').innerHTML = this.renderBeltDetail(idx);
    App.addXP(2);
  },

  toggleCheck(idx) {
    const done = this.practiceState.done || [];
    if (done.includes(idx)) {
      this.practiceState.done = done.filter(i => i !== idx);
    } else {
      this.practiceState.done = [...done, idx];
    }

    const el = document.getElementById(`check-${idx}`);
    const isDone = this.practiceState.done.includes(idx);
    el.classList.toggle('done', isDone);
    el.querySelector('.check-box').textContent = isDone ? '✓' : '';

    document.getElementById('practice-count').textContent =
      `${this.practiceState.done.length} / ${DATA.practiceItems.length} done`;

    if (isDone) App.addXP(5);

    if (this.allDone()) {
      document.getElementById('practice-complete').style.display = 'block';
      App.state.karateDays = (App.state.karateDays || 0) + 1;
      App.addXP(20);
      App.checkAchievement();
      App.saveState();
      App.showToast('🥋','Daily training complete! Osu! +20 XP');
    } else {
      document.getElementById('practice-complete').style.display = 'none';
    }

    localStorage.setItem('karate_practice', JSON.stringify(this.practiceState));
  },

  allDone() {
    return (this.practiceState.done || []).length >= DATA.practiceItems.length;
  },

  showTechDetail(idx) {
    const t = DATA.techniques[idx];
    const modal = document.getElementById('tech-detail-modal');
    document.getElementById('tech-detail-content').innerHTML = `
      <div style="padding:8px">
        <div style="font-size:2.5rem;margin-bottom:8px">${t.emoji}</div>
        <div style="font-size:1.3rem;font-weight:900;margin-bottom:4px;color:#FF3333">${t.name}</div>
        <div style="color:var(--text-dim);font-size:0.85rem;margin-bottom:14px;font-style:italic">Japanese: ${t.japanese}</div>
        <div style="font-size:0.95rem;line-height:1.7">${t.desc}</div>
        <button class="btn btn-danger mt-16" onclick="App.addXP(5);App.showToast('🥋','Technique studied! +5 XP')">✓ Practised this! +5 XP</button>
      </div>`;
    modal.style.display = 'block';
    modal.scrollIntoView({ behavior:'smooth', block:'nearest' });
    App.addXP(2);
  },
};

// Load saved practice state
try {
  const saved = localStorage.getItem('karate_practice');
  if (saved) {
    const parsed = JSON.parse(saved);
    if (parsed.date === new Date().toDateString()) {
      KarateModule.practiceState = parsed;
    }
  }
} catch(e) {}
