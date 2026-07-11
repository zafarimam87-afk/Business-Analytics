/* =============================================
   PHYSICS MODULE — Forces, energy, quantum world, home experiments
   ============================================= */

const PhysicsModule = {
  activeTab: 'concepts',

  render(container) {
    container.innerHTML = `
      <div class="module-header fade-up">
        <h2 style="color:#00E5FF">⚛️ Physics Lab</h2>
        <p>Discover the invisible forces that run the universe — gravity, light, magnets and the weird quantum world!</p>
      </div>

      <div class="science-tabs fade-up">
        <div class="sci-tab active" data-tab="concepts" onclick="PhysicsModule.switchTab('concepts')">⚛️ Big Ideas</div>
        <div class="sci-tab" data-tab="experiments" onclick="PhysicsModule.switchTab('experiments')">🧪 Try at Home</div>
        <div class="sci-tab" data-tab="flashcards" onclick="PhysicsModule.switchTab('flashcards')">🃏 Flashcards</div>
        <div class="sci-tab" data-tab="quiz" onclick="PhysicsModule.switchTab('quiz')">📝 Quiz</div>
        <div class="sci-tab" data-tab="videos" onclick="PhysicsModule.switchTab('videos')">🎥 Videos</div>
        <div class="sci-tab" data-tab="mindmap" onclick="PhysicsModule.switchTab('mindmap')">🗺️ Mind Map</div>
      </div>

      <!-- CONCEPTS TAB -->
      <div class="sci-tab-content active fade-up" id="tab-concepts">
        <div class="highlighted mb-16">
          <p>⚛️ Click any card to discover how the universe works!</p>
        </div>
        <div class="animal-cards" id="physics-cards-grid"></div>
        <div id="physics-detail" style="display:none;margin-top:20px" class="card">
          <button onclick="PhysicsModule.closeDetail()" style="float:right;background:rgba(0,229,255,0.2);border:1px solid rgba(0,229,255,0.4);color:white;padding:4px 12px;border-radius:100px;cursor:pointer;font-weight:700">✕ Close</button>
          <div style="font-size:3rem;margin-bottom:12px" id="phd-emoji"></div>
          <div id="phd-name" style="font-size:1.3rem;font-weight:900;margin-bottom:4px;color:#00E5FF"></div>
          <div id="phd-type" style="color:var(--text-dim);font-size:0.82rem;margin-bottom:14px"></div>
          <div id="phd-fact" style="font-size:0.95rem;line-height:1.7"></div>
          <button class="btn btn-info mt-16" onclick="App.addXP(5);App.showToast('⚛️','Physics fact learned! +5 XP')">✓ I learned this! +5 XP</button>
        </div>
      </div>

      <!-- EXPERIMENTS TAB -->
      <div class="sci-tab-content" id="tab-experiments">
        <div class="section-heading mb-16">🧪 Real Experiments You Can Do at Home</div>
        <div class="drawings-info mb-16">
          👨‍👩‍👦 Ask a grown-up to join in — real scientists work in teams!
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:14px">
          ${DATA.physicsExperiments.map((e,i)=>`
            <div class="card" style="border-color:rgba(0,229,255,0.25)">
              <div style="font-size:2.5rem;margin-bottom:8px">${e.emoji}</div>
              <div style="font-weight:900;font-size:1.05rem;color:#00E5FF;margin-bottom:6px">${e.name}</div>
              <div style="font-size:0.8rem;color:var(--text-dim);margin-bottom:10px">🎒 You need: ${e.needs}</div>
              <div style="font-size:0.88rem;line-height:1.6">${e.steps}</div>
              <button class="btn btn-info mt-16" style="font-size:0.8rem;padding:8px 14px"
                onclick="App.addXP(10);App.showToast('🧪','Experiment done! You are a real scientist! +10 XP');this.disabled=true;this.textContent='✓ Done! Great job!'">
                🧪 I did this experiment! +10 XP
              </button>
            </div>`).join('')}
        </div>
      </div>

      <!-- FLASHCARDS TAB -->
      <div class="sci-tab-content" id="tab-flashcards">
        <div class="section-heading mb-16">🃏 Physics Flashcards</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px">
          <div class="math-game-card" onclick="Flashcard.open('physics')">
            <div class="game-emoji">⚛️</div>
            <div class="game-name">Physics Facts</div>
            <div class="game-desc">${DATA.flashcards.physics.length} cards — gravity, light, quantum & more</div>
          </div>
          <div class="math-game-card" onclick="Flashcard.open('space')">
            <div class="game-emoji">🚀</div>
            <div class="game-name">Space</div>
            <div class="game-desc">${DATA.flashcards.space.length} cards about the cosmos</div>
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
        <div class="section-heading mb-16">📝 Physics Quizzes</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px">
          <div class="math-game-card" onclick="Quiz.open('physics')">
            <div class="game-emoji">⚛️</div>
            <div class="game-name">Physics Quiz</div>
            <div class="game-desc">${DATA.quizzes.physics.length} questions on forces & energy</div>
          </div>
          <div class="math-game-card" onclick="Quiz.open('space')">
            <div class="game-emoji">🚀</div>
            <div class="game-name">Space Quiz</div>
            <div class="game-desc">${DATA.quizzes.space.length} space science questions</div>
          </div>
        </div>
      </div>

      <!-- VIDEOS TAB -->
      <div class="sci-tab-content" id="tab-videos">
        <div class="section-heading mb-16">🎥 Physics Videos for Kids</div>
        <div class="drawings-info mb-16">
          🔗 These links open YouTube in a new tab. Watch with a parent nearby!
        </div>
        <div class="video-grid">
          ${[
            { title:'What is Gravity?',        desc:'Why things fall down — explained for kids', emoji:'🍎', url:'https://www.youtube.com/results?search_query=gravity+for+kids+scishow' },
            { title:'Magnets & Magnetism',     desc:'The invisible pulling force',               emoji:'🧲', url:'https://www.youtube.com/results?search_query=magnets+for+kids+science' },
            { title:'Light & Rainbows',        desc:'How light makes colours',                   emoji:'🌈', url:'https://www.youtube.com/results?search_query=light+and+rainbows+for+kids' },
            { title:'Sound Waves',             desc:'How sound travels to your ears',            emoji:'🔊', url:'https://www.youtube.com/results?search_query=sound+waves+for+kids' },
            { title:'Quantum Physics for Kids',desc:'The weird world of tiny particles!',        emoji:'⚛️', url:'https://www.youtube.com/results?search_query=quantum+physics+for+kids+explained' },
            { title:'Simple Machines',         desc:'Levers, wheels & pulleys',                  emoji:'⚙️', url:'https://www.youtube.com/results?search_query=simple+machines+for+kids' },
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
        <div class="section-heading mt-24 mb-16">🌐 Great Physics Websites</div>
        <div class="ext-resources">
          <a href="https://www.physics4kids.com" target="_blank" class="resource-card">
            <div class="resource-icon">⚛️</div>
            <div class="resource-info"><h4>Physics4Kids</h4><p>Motion, energy, light & more</p></div>
          </a>
          <a href="https://www.dkfindout.com/uk/science/" target="_blank" class="resource-card">
            <div class="resource-icon">📚</div>
            <div class="resource-info"><h4>DK Find Out</h4><p>Science encyclopaedia for kids</p></div>
          </a>
          <a href="https://mysteryscience.com" target="_blank" class="resource-card">
            <div class="resource-icon">🔍</div>
            <div class="resource-info"><h4>Mystery Science</h4><p>Fun science mysteries & lessons</p></div>
          </a>
          <a href="https://www.khanacademy.org/science/physics" target="_blank" class="resource-card">
            <div class="resource-icon">🎓</div>
            <div class="resource-info"><h4>Khan Academy</h4><p>Free physics video lessons</p></div>
          </a>
        </div>
      </div>

      <!-- MIND MAP TAB -->
      <div class="sci-tab-content" id="tab-mindmap">
        <div class="section-heading mb-16">🗺️ Physics Mind Maps</div>
        <div class="highlighted mb-16">
          <p>See how all the physics ideas connect together!</p>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px">
          <div class="math-game-card" onclick="MindMap.open('physics')">
            <div class="game-emoji">⚛️</div>
            <div class="game-name">Physics Overview</div>
            <div class="game-desc">Forces, Energy, Matter, Quantum</div>
          </div>
          <div class="math-game-card" onclick="MindMap.open('space')">
            <div class="game-emoji">🚀</div>
            <div class="game-name">Space Explorer</div>
            <div class="game-desc">Planets, Stars, Galaxies, Travel</div>
          </div>
        </div>
      </div>
    `;

    this.renderConcepts();
  },

  init() {
    this.activeTab = 'concepts';
    App.checkAchievement();
  },

  renderConcepts() {
    const grid = document.getElementById('physics-cards-grid');
    if (!grid) return;
    grid.innerHTML = DATA.physicsConcepts.map((c, i) => `
      <div class="animal-card" onclick="PhysicsModule.showDetail(${i})">
        <div class="a-emoji">${c.emoji}</div>
        <div class="a-name">${c.name}</div>
        <div class="a-type">${c.type}</div>
      </div>`).join('');
  },

  showDetail(idx) {
    const c = DATA.physicsConcepts[idx];
    document.getElementById('phd-emoji').textContent = c.emoji;
    document.getElementById('phd-name').textContent  = c.name;
    document.getElementById('phd-type').textContent  = c.type;
    document.getElementById('phd-fact').textContent  = c.fact;
    const detail = document.getElementById('physics-detail');
    detail.style.display = 'block';
    detail.scrollIntoView({ behavior:'instant', block:'center' });
    App.addXP(3);
  },

  closeDetail() {
    document.getElementById('physics-detail').style.display = 'none';
  },

  switchTab(tab) {
    this.activeTab = tab;
    document.querySelectorAll('#module-content .sci-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    document.querySelectorAll('#module-content .sci-tab-content').forEach(c => c.classList.toggle('active', c.id === `tab-${tab}`));
  },
};
