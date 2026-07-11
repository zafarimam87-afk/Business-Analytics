/* =============================================
   BIOLOGY MODULE — Human body, cells, life cycles, nature
   ============================================= */

const BiologyModule = {
  activeTab: 'body',

  render(container) {
    container.innerHTML = `
      <div class="module-header fade-up">
        <h2 style="color:#8BC34A">🧬 Biology Lab</h2>
        <p>Explore your amazing body, tiny cells, and how living things grow and change!</p>
      </div>

      <div class="science-tabs fade-up">
        <div class="sci-tab active" data-tab="body" onclick="BiologyModule.switchTab('body')">🫀 My Body</div>
        <div class="sci-tab" data-tab="lifecycles" onclick="BiologyModule.switchTab('lifecycles')">🦋 Life Cycles</div>
        <div class="sci-tab" data-tab="flashcards" onclick="BiologyModule.switchTab('flashcards')">🃏 Flashcards</div>
        <div class="sci-tab" data-tab="quiz" onclick="BiologyModule.switchTab('quiz')">📝 Quiz</div>
        <div class="sci-tab" data-tab="videos" onclick="BiologyModule.switchTab('videos')">🎥 Videos</div>
        <div class="sci-tab" data-tab="mindmap" onclick="BiologyModule.switchTab('mindmap')">🗺️ Mind Map</div>
      </div>

      <!-- MY BODY TAB -->
      <div class="sci-tab-content active fade-up" id="tab-body">
        <div class="highlighted mb-16">
          <p>🫀 Click any part to discover the superpowers inside your own body!</p>
        </div>
        <div class="animal-cards" id="body-cards-grid"></div>
        <div id="body-detail" style="display:none;margin-top:20px" class="card">
          <button onclick="BiologyModule.closeDetail()" style="float:right;background:rgba(139,195,74,0.2);border:1px solid rgba(139,195,74,0.4);color:white;padding:4px 12px;border-radius:100px;cursor:pointer;font-weight:700">✕ Close</button>
          <div style="font-size:3rem;margin-bottom:12px" id="bd-emoji"></div>
          <div id="bd-name" style="font-size:1.3rem;font-weight:900;margin-bottom:4px;color:#8BC34A"></div>
          <div id="bd-type" style="color:var(--text-dim);font-size:0.82rem;margin-bottom:14px"></div>
          <div id="bd-fact" style="font-size:0.95rem;line-height:1.7"></div>
          <button class="btn btn-success mt-16" onclick="App.addXP(5);App.showToast('🧬','Body fact learned! +5 XP')">✓ I learned this! +5 XP</button>
        </div>
      </div>

      <!-- LIFE CYCLES TAB -->
      <div class="sci-tab-content" id="tab-lifecycles">
        <div class="section-heading mb-16">🦋 Amazing Life Cycles</div>
        <div class="highlighted mb-16">
          <p>Watch how living things transform as they grow — nature's real-life magic tricks!</p>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:14px">
          ${DATA.lifeCycles.map(lc=>`
            <div class="card" style="border-color:rgba(139,195,74,0.25)">
              <div style="font-size:2.5rem;margin-bottom:8px">${lc.emoji}</div>
              <div style="font-weight:900;font-size:1.05rem;color:#8BC34A;margin-bottom:12px">${lc.name} Life Cycle</div>
              <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
                ${lc.stages.map((s,i)=>`
                  <div style="display:flex;align-items:center;gap:10px">
                    <div style="background:rgba(139,195,74,0.15);border:1px solid rgba(139,195,74,0.3);min-width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:900;color:#8BC34A">${i+1}</div>
                    <div style="font-size:0.88rem">${s}</div>
                  </div>
                  ${i < lc.stages.length-1 ? '<div style="margin-left:12px;color:#8BC34A;font-size:0.8rem">⬇</div>' : ''}
                `).join('')}
              </div>
              <div style="font-size:0.82rem;line-height:1.6;color:var(--text-dim);border-top:1px solid rgba(255,255,255,0.08);padding-top:10px">💡 ${lc.fact}</div>
              <button class="btn btn-success mt-16" style="font-size:0.8rem;padding:8px 14px"
                onclick="App.addXP(5);App.showToast('🦋','Life cycle learned! +5 XP');this.disabled=true;this.textContent='✓ Learned!'">
                ✓ I learned this cycle! +5 XP
              </button>
            </div>`).join('')}
        </div>
      </div>

      <!-- FLASHCARDS TAB -->
      <div class="sci-tab-content" id="tab-flashcards">
        <div class="section-heading mb-16">🃏 Biology Flashcards</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px">
          <div class="math-game-card" onclick="Flashcard.open('biology')">
            <div class="game-emoji">🧬</div>
            <div class="game-name">Body & Cells</div>
            <div class="game-desc">${DATA.flashcards.biology.length} cards — heart, brain, DNA & more</div>
          </div>
          <div class="math-game-card" onclick="Flashcard.open('animals')">
            <div class="game-emoji">🐾</div>
            <div class="game-name">Animals</div>
            <div class="game-desc">${DATA.flashcards.animals.length} cards about incredible creatures</div>
          </div>
          <div class="math-game-card" onclick="Flashcard.open('science')">
            <div class="game-emoji">🔬</div>
            <div class="game-name">Science Facts</div>
            <div class="game-desc">${DATA.flashcards.science.length} cards on key concepts</div>
          </div>
        </div>
      </div>

      <!-- QUIZ TAB -->
      <div class="sci-tab-content" id="tab-quiz">
        <div class="section-heading mb-16">📝 Biology Quizzes</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px">
          <div class="math-game-card" onclick="Quiz.open('biology')">
            <div class="game-emoji">🧬</div>
            <div class="game-name">Body Quiz</div>
            <div class="game-desc">${DATA.quizzes.biology.length} questions about your body</div>
          </div>
          <div class="math-game-card" onclick="Quiz.open('animals')">
            <div class="game-emoji">🐾</div>
            <div class="game-name">Animal Quiz</div>
            <div class="game-desc">${DATA.quizzes.animals.length} questions about animals</div>
          </div>
        </div>
      </div>

      <!-- VIDEOS TAB -->
      <div class="sci-tab-content" id="tab-videos">
        <div class="section-heading mb-16">🎥 Biology Videos for Kids</div>
        <div class="drawings-info mb-16">
          🔗 These links open YouTube in a new tab. Watch with a parent nearby!
        </div>
        <div class="video-grid">
          ${[
            { title:'How Your Heart Works',  desc:'The amazing pump inside you',          emoji:'❤️', url:'https://www.youtube.com/results?search_query=how+the+heart+works+for+kids' },
            { title:'Your Brilliant Brain',  desc:'The control centre of your body',      emoji:'🧠', url:'https://www.youtube.com/results?search_query=brain+for+kids+how+it+works' },
            { title:'What is DNA?',          desc:'The instruction book of life',         emoji:'🧬', url:'https://www.youtube.com/results?search_query=dna+for+kids+explained' },
            { title:'Cells: Building Blocks',desc:'The tiny bricks that build YOU',       emoji:'🦠', url:'https://www.youtube.com/results?search_query=cells+for+kids+science' },
            { title:'Butterfly Life Cycle',  desc:'From caterpillar to butterfly',        emoji:'🦋', url:'https://www.youtube.com/results?search_query=butterfly+life+cycle+for+kids' },
            { title:'Your Immune System',    desc:"Your body's germ-fighting army!",     emoji:'🛡️', url:'https://www.youtube.com/results?search_query=immune+system+for+kids' },
          ].map(v=>`
            <div class="video-card">
              <div class="video-thumb" onclick="window.open('${v.url}','_blank')">
                <span style="font-size:3.5rem">${v.emoji}</span>
                <div class="play-overlay">▶️</div>
              </div>
              <div class="video-info">
                <h4>${v.title}</h4>
                <p>${v.desc}</p>
              </div>
            </div>`).join('')}
        </div>
        <div class="section-heading mt-24 mb-16">🌐 Great Biology Websites</div>
        <div class="ext-resources">
          <a href="https://kids.nationalgeographic.com" target="_blank" class="resource-card">
            <div class="resource-icon">🌍</div>
            <div class="resource-info"><h4>Nat Geo Kids</h4><p>Animals, nature & the body</p></div>
          </a>
          <a href="https://www.biology4kids.com" target="_blank" class="resource-card">
            <div class="resource-icon">🧬</div>
            <div class="resource-info"><h4>Biology4Kids</h4><p>Cells, systems & living things</p></div>
          </a>
          <a href="https://www.dkfindout.com/uk/human-body/" target="_blank" class="resource-card">
            <div class="resource-icon">🫀</div>
            <div class="resource-info"><h4>DK Human Body</h4><p>Explore the body in pictures</p></div>
          </a>
          <a href="https://www.khanacademy.org/science/biology" target="_blank" class="resource-card">
            <div class="resource-icon">🎓</div>
            <div class="resource-info"><h4>Khan Academy</h4><p>Free biology video lessons</p></div>
          </a>
        </div>
      </div>

      <!-- MIND MAP TAB -->
      <div class="sci-tab-content" id="tab-mindmap">
        <div class="section-heading mb-16">🗺️ Biology Mind Maps</div>
        <div class="highlighted mb-16">
          <p>See how everything in the living world connects!</p>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px">
          <div class="math-game-card" onclick="MindMap.open('biology')">
            <div class="game-emoji">🧬</div>
            <div class="game-name">Biology Overview</div>
            <div class="game-desc">Body, Cells, Life Cycles, Nature</div>
          </div>
          <div class="math-game-card" onclick="MindMap.open('science')">
            <div class="game-emoji">🔬</div>
            <div class="game-name">Science Overview</div>
            <div class="game-desc">Animals, Plants, Earth, Human Body</div>
          </div>
        </div>
      </div>
    `;

    this.renderBodyParts();
  },

  init() {
    this.activeTab = 'body';
    App.checkAchievement();
  },

  renderBodyParts() {
    const grid = document.getElementById('body-cards-grid');
    if (!grid) return;
    grid.innerHTML = DATA.bodyParts.map((b, i) => `
      <div class="animal-card" onclick="BiologyModule.showDetail(${i})">
        <div class="a-emoji">${b.emoji}</div>
        <div class="a-name">${b.name}</div>
        <div class="a-type">${b.type}</div>
      </div>`).join('');
  },

  showDetail(idx) {
    const b = DATA.bodyParts[idx];
    document.getElementById('bd-emoji').textContent = b.emoji;
    document.getElementById('bd-name').textContent  = b.name;
    document.getElementById('bd-type').textContent  = b.type;
    document.getElementById('bd-fact').textContent  = b.fact;
    const detail = document.getElementById('body-detail');
    detail.style.display = 'block';
    detail.scrollIntoView({ behavior:'smooth', block:'center' });
    App.addXP(3);
  },

  closeDetail() {
    document.getElementById('body-detail').style.display = 'none';
  },

  switchTab(tab) {
    this.activeTab = tab;
    document.querySelectorAll('#module-content .sci-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    document.querySelectorAll('#module-content .sci-tab-content').forEach(c => c.classList.toggle('active', c.id === `tab-${tab}`));
  },
};
