/* =============================================
   SCIENCE MODULE — Animals, nature, flashcards, videos, quizzes
   ============================================= */

const ScienceModule = {
  activeTab: 'animals',

  render(container) {
    container.innerHTML = `
      <div class="module-header fade-up">
        <h2 style="color:#FF8C00">🔬 Science Lab</h2>
        <p>Discover amazing facts about animals, nature and the world!</p>
      </div>

      <div class="science-tabs fade-up">
        <div class="sci-tab active" data-tab="animals" onclick="ScienceModule.switchTab('animals')">🐾 Animals</div>
        <div class="sci-tab" data-tab="flashcards" onclick="ScienceModule.switchTab('flashcards')">🃏 Flashcards</div>
        <div class="sci-tab" data-tab="quiz" onclick="ScienceModule.switchTab('quiz')">📝 Quizzes</div>
        <div class="sci-tab" data-tab="videos" onclick="ScienceModule.switchTab('videos')">🎥 Videos</div>
        <div class="sci-tab" data-tab="mindmap" onclick="ScienceModule.switchTab('mindmap')">🗺️ Mind Map</div>
      </div>

      <!-- ANIMALS TAB -->
      <div class="sci-tab-content active fade-up" id="tab-animals">
        <div class="highlighted mb-16">
          <p>🐾 Click on any animal to learn amazing facts about it!</p>
        </div>
        <div class="animal-cards" id="animal-cards-grid"></div>
        <div id="animal-detail" style="display:none;margin-top:20px" class="card">
          <button onclick="ScienceModule.closeAnimalDetail()" style="float:right;background:rgba(255,140,0,0.2);border:1px solid rgba(255,140,0,0.4);color:white;padding:4px 12px;border-radius:100px;cursor:pointer;font-weight:700">✕ Close</button>
          <div style="font-size:3rem;margin-bottom:12px" id="ad-emoji"></div>
          <div id="ad-name" style="font-size:1.3rem;font-weight:900;margin-bottom:4px;color:#FF8C00"></div>
          <div id="ad-type" style="color:var(--text-dim);font-size:0.82rem;margin-bottom:14px"></div>
          <div id="ad-fact" style="font-size:0.95rem;line-height:1.7"></div>
          <button class="btn btn-warning mt-16" onclick="App.addXP(5);App.showToast('🔬','Science fact learned! +5 XP')">✓ I learned this! +5 XP</button>
        </div>
      </div>

      <!-- FLASHCARDS TAB -->
      <div class="sci-tab-content" id="tab-flashcards">
        <div class="section-heading mb-16">🃏 Choose a Flashcard Deck</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px">
          <div class="math-game-card" onclick="Flashcard.open('animals')">
            <div class="game-emoji">🐾</div>
            <div class="game-name">Animals</div>
            <div class="game-desc">${DATA.flashcards.animals.length} cards about incredible creatures</div>
          </div>
          <div class="math-game-card" onclick="Flashcard.open('science')">
            <div class="game-emoji">🔬</div>
            <div class="game-name">Science Facts</div>
            <div class="game-desc">${DATA.flashcards.science.length} cards on key science concepts</div>
          </div>
          <div class="math-game-card" onclick="Flashcard.open('space')">
            <div class="game-emoji">🚀</div>
            <div class="game-name">Space</div>
            <div class="game-desc">${DATA.flashcards.space.length} cards about the cosmos</div>
          </div>
          <div class="math-game-card" onclick="Flashcard.open('karate')">
            <div class="game-emoji">🥋</div>
            <div class="game-name">Karate Terms</div>
            <div class="game-desc">${DATA.flashcards.karate.length} cards on karate vocabulary</div>
          </div>
        </div>
      </div>

      <!-- QUIZ TAB -->
      <div class="sci-tab-content" id="tab-quiz">
        <div class="section-heading mb-16">📝 Science Quizzes</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px">
          <div class="math-game-card" onclick="Quiz.open('science')">
            <div class="game-emoji">🔬</div>
            <div class="game-name">General Science Quiz</div>
            <div class="game-desc">${DATA.quizzes.science.length} questions on science</div>
          </div>
          <div class="math-game-card" onclick="Quiz.open('animals')">
            <div class="game-emoji">🐾</div>
            <div class="game-name">Animal Quiz</div>
            <div class="game-desc">${DATA.quizzes.animals.length} questions about animals</div>
          </div>
          <div class="math-game-card" onclick="Quiz.open('space')">
            <div class="game-emoji">🚀</div>
            <div class="game-name">Space Quiz</div>
            <div class="game-desc">${DATA.quizzes.space.length} space science questions</div>
          </div>
          <div class="math-game-card" onclick="Quiz.open('math')">
            <div class="game-emoji">🔢</div>
            <div class="game-name">Maths Quiz</div>
            <div class="game-desc">${DATA.quizzes.math.length} maths questions</div>
          </div>
        </div>
      </div>

      <!-- VIDEOS TAB -->
      <div class="sci-tab-content" id="tab-videos">
        <div class="section-heading mb-16">🎥 Educational Science Videos</div>
        <div class="drawings-info mb-16">
          🔗 These links open YouTube in a new tab. Watch with a parent nearby!
        </div>
        <div class="video-grid">
          ${[
            { title:'How Animals Adapt', desc:'SciShow Kids explains animal adaptations', emoji:'🐾', url:'https://www.youtube.com/results?search_query=scishow+kids+animals+adaptations' },
            { title:'The Human Body', desc:'How your body works — for kids!', emoji:'🫀', url:'https://www.youtube.com/results?search_query=human+body+for+kids+crash+course' },
            { title:'Photosynthesis', desc:'How plants make their own food', emoji:'🌿', url:'https://www.youtube.com/results?search_query=photosynthesis+for+kids' },
            { title:'Water Cycle', desc:'Rain, clouds, evaporation explained', emoji:'💧', url:'https://www.youtube.com/results?search_query=water+cycle+for+kids' },
            { title:'Dinosaurs', desc:'All about prehistoric creatures', emoji:'🦕', url:'https://www.youtube.com/results?search_query=dinosaurs+for+kids+educational' },
            { title:'Electricity Explained', desc:'What is electricity and how does it work?', emoji:'⚡', url:'https://www.youtube.com/results?search_query=electricity+for+kids' },
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
        <div class="section-heading mt-24 mb-16">🌐 Top Science Websites for Kids</div>
        <div class="ext-resources">
          <a href="https://kids.nationalgeographic.com" target="_blank" class="resource-card">
            <div class="resource-icon">🌍</div>
            <div class="resource-info"><h4>Nat Geo Kids</h4><p>Animals, science & adventure</p></div>
          </a>
          <a href="https://www.dkfindout.com/uk/science/" target="_blank" class="resource-card">
            <div class="resource-icon">📚</div>
            <div class="resource-info"><h4>DK Find Out</h4><p>Science encyclopaedia for kids</p></div>
          </a>
          <a href="https://www.bbc.co.uk/cbbc/quizzes/science-quiz" target="_blank" class="resource-card">
            <div class="resource-icon">🎯</div>
            <div class="resource-info"><h4>BBC Science Quiz</h4><p>Test your science knowledge!</p></div>
          </a>
          <a href="https://www.khanacademy.org/science" target="_blank" class="resource-card">
            <div class="resource-icon">🎓</div>
            <div class="resource-info"><h4>Khan Academy Science</h4><p>Free science video lessons</p></div>
          </a>
        </div>
      </div>

      <!-- MIND MAP TAB -->
      <div class="sci-tab-content" id="tab-mindmap">
        <div class="section-heading mb-16">🗺️ Science Mind Maps</div>
        <div class="highlighted mb-16">
          <p>Mind maps help you see how everything connects! Explore the map to discover science topics.</p>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px">
          <div class="math-game-card" onclick="MindMap.open('science')">
            <div class="game-emoji">🔬</div>
            <div class="game-name">Science Overview</div>
            <div class="game-desc">Animals, Plants, Earth, Human Body</div>
          </div>
          <div class="math-game-card" onclick="MindMap.open('space')">
            <div class="game-emoji">🚀</div>
            <div class="game-name">Space Explorer</div>
            <div class="game-desc">Planets, Stars, Galaxies, Travel</div>
          </div>
        </div>
      </div>
    `;

    this.renderAnimals();
  },

  init() {
    this.activeTab = 'animals';
  },

  renderAnimals() {
    const grid = document.getElementById('animal-cards-grid');
    if (!grid) return;
    grid.innerHTML = DATA.animals.map((a, i) => `
      <div class="animal-card" onclick="ScienceModule.showAnimalDetail(${i})">
        <div class="a-emoji">${a.emoji}</div>
        <div class="a-name">${a.name}</div>
        <div class="a-type">${a.type}</div>
      </div>`).join('');
  },

  showAnimalDetail(idx) {
    const a = DATA.animals[idx];
    document.getElementById('ad-emoji').textContent = a.emoji;
    document.getElementById('ad-name').textContent  = a.name;
    document.getElementById('ad-type').textContent  = a.type;
    document.getElementById('ad-fact').textContent  = a.fact;
    const detail = document.getElementById('animal-detail');
    detail.style.display = 'block';
    detail.scrollIntoView({ behavior:'smooth', block:'center' });
    App.addXP(3);
  },

  closeAnimalDetail() {
    document.getElementById('animal-detail').style.display = 'none';
  },

  switchTab(tab) {
    this.activeTab = tab;
    document.querySelectorAll('.sci-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    document.querySelectorAll('.sci-tab-content').forEach(c => c.classList.toggle('active', c.id === `tab-${tab}`));
  },
};
