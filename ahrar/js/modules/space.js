/* =============================================
   SPACE MODULE — Animated solar system, planet explorer, quiz, facts
   ============================================= */

const SpaceModule = {
  canvas: null, ctx: null, animFrame: null,
  planets: [], time: 0, paused: false,

  render(container) {
    container.innerHTML = `
      <div class="module-header fade-up">
        <h2 style="color:#AA00FF">🚀 Space Explorer</h2>
        <p>Journey through our Solar System and beyond!</p>
      </div>

      <!-- SOLAR SYSTEM -->
      <div class="card mb-24 fade-up" style="border-color:rgba(170,0,255,0.2)">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;flex-wrap:wrap;gap:10px">
          <div class="section-heading" style="margin:0;color:#AA00FF">☀️ Our Solar System</div>
          <div class="gap-row">
            <button class="btn btn-primary" style="padding:6px 14px;font-size:0.8rem" onclick="SpaceModule.togglePause()" id="pause-btn">⏸ Pause</button>
            <span style="font-size:0.8rem;color:var(--text-dim)">Click a planet for facts!</span>
          </div>
        </div>
        <div class="solar-system-wrapper">
          <canvas id="solar-canvas"></canvas>
        </div>
      </div>

      <!-- PLANET FACT CARDS -->
      <div class="card mb-24 fade-up" style="border-color:rgba(170,0,255,0.2)">
        <div class="section-heading" style="color:#AA00FF">🪐 Explore the Planets</div>
        <div class="planet-facts-grid">
          ${DATA.planets.map((p,i)=>`
            <button class="planet-btn" onclick="SpaceModule.showPlanetDetail(${i})" style="--pc:${p.color}">
              <span class="planet-icon">${p.emoji}</span>
              <span>${p.name}</span>
            </button>`).join('')}
        </div>
      </div>

      <!-- FUN FACTS -->
      <div class="card mb-24 fade-up" style="border-color:rgba(170,0,255,0.2)">
        <div class="section-heading" style="color:#AA00FF">🌟 Amazing Space Facts</div>
        <div class="space-fun-facts">
          ${DATA.spaceFacts.map(f=>`
            <div class="fun-fact-item">
              <div class="fun-fact-icon">${f.icon}</div>
              <div class="fun-fact-text">${f.text}</div>
            </div>`).join('')}
        </div>
      </div>

      <!-- QUIZ & FLASHCARDS -->
      <div class="card mb-24 fade-up" style="border-color:rgba(170,0,255,0.2)">
        <div class="section-heading" style="color:#AA00FF">🎮 Test Your Space Knowledge</div>
        <div class="gap-row">
          <button class="btn btn-primary" onclick="Quiz.open('space')">🧠 Space Quiz</button>
          <button class="btn btn-info" onclick="Flashcard.open('space')">🃏 Space Flashcards</button>
          <button class="btn btn-warning" onclick="MindMap.open('space')">🗺️ Space Mind Map</button>
        </div>
      </div>

      <!-- VIDEO & RESOURCES -->
      <div class="card mb-24 fade-up" style="border-color:rgba(170,0,255,0.2)">
        <div class="section-heading" style="color:#AA00FF">🎥 Space Videos & Resources</div>
        <div class="video-grid mb-16">
          ${[
            { title:'Tour of the Solar System', emoji:'🪐', url:'https://www.youtube.com/results?search_query=solar+system+tour+for+kids+nasa' },
            { title:'What is a Black Hole?',    emoji:'🕳️', url:'https://www.youtube.com/results?search_query=black+hole+explained+for+kids' },
            { title:'Space Exploration History',emoji:'🚀', url:'https://www.youtube.com/results?search_query=space+exploration+history+kids' },
            { title:'Stars & Galaxies',         emoji:'🌌', url:'https://www.youtube.com/results?search_query=stars+and+galaxies+for+kids+educational' },
          ].map(v=>`
            <div class="video-card">
              <div class="video-thumb" onclick="window.open('${v.url}','_blank')">
                <span style="font-size:3.5rem">${v.emoji}</span>
                <div class="play-overlay">▶️</div>
              </div>
              <div class="video-info"><h4>${v.title}</h4><p>Click to search on YouTube</p></div>
            </div>`).join('')}
        </div>
        <div class="ext-resources">
          <a href="https://spaceplace.nasa.gov" target="_blank" class="resource-card">
            <div class="resource-icon">🛸</div>
            <div class="resource-info"><h4>NASA Space Place</h4><p>NASA's official kids space site</p></div>
          </a>
          <a href="https://kids.nationalgeographic.com/space" target="_blank" class="resource-card">
            <div class="resource-icon">🌌</div>
            <div class="resource-info"><h4>Nat Geo Space</h4><p>Space facts & stunning photos</p></div>
          </a>
          <a href="https://www.esa.int/kids/en/home" target="_blank" class="resource-card">
            <div class="resource-icon">🇪🇺</div>
            <div class="resource-info"><h4>ESA Kids</h4><p>European Space Agency for kids</p></div>
          </a>
          <a href="https://www.skyandtelescope.org/astronomy-resources/stargazing/" target="_blank" class="resource-card">
            <div class="resource-icon">🔭</div>
            <div class="resource-info"><h4>Stargazing Guide</h4><p>How to watch the night sky</p></div>
          </a>
        </div>
      </div>
    `;

    this.initCanvas();
  },

  init() {},

  initCanvas() {
    this.canvas = document.getElementById('solar-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.canvas.addEventListener('click', e => this.handleCanvasClick(e));
    this.animate();
  },

  resize() {
    if (!this.canvas) return;
    const wrapper = this.canvas.parentElement;
    this.canvas.width  = wrapper.clientWidth;
    this.canvas.height = wrapper.clientHeight || 320;
  },

  togglePause() {
    this.paused = !this.paused;
    document.getElementById('pause-btn').textContent = this.paused ? '▶ Resume' : '⏸ Pause';
    if (!this.paused) this.animate();
  },

  animate() {
    if (this.paused) return;
    cancelAnimationFrame(this.animFrame);
    this.animFrame = requestAnimationFrame(() => {
      this.draw();
      this.animate();
    });
  },

  draw() {
    const c = this.ctx;
    const W = this.canvas.width;
    const H = this.canvas.height;
    const CX = W/2, CY = H/2;
    const scale = Math.min(W, H*2) / 1100;

    this.time += 0.008;
    c.clearRect(0,0,W,H);

    // Background stars
    c.fillStyle = '#06061a';
    c.fillRect(0,0,W,H);
    if (!this._bgStars) {
      this._bgStars = Array.from({length:80}, () => ({
        x: Math.random()*1400-200, y: Math.random()*700-100,
        r: Math.random()*1.2+0.3, o: Math.random()*0.8+0.2
      }));
    }
    this._bgStars.forEach(s => {
      c.beginPath();
      c.arc(s.x, s.y, s.r, 0, Math.PI*2);
      c.fillStyle = `rgba(255,255,255,${s.o})`;
      c.fill();
    });

    // Sun glow
    const sunR = 28 * scale;
    const sunGlow = c.createRadialGradient(CX,CY,0,CX,CY,sunR*3);
    sunGlow.addColorStop(0,'rgba(255,220,50,0.4)');
    sunGlow.addColorStop(1,'transparent');
    c.fillStyle = sunGlow;
    c.fillRect(0,0,W,H);

    // Sun
    const sunGrad = c.createRadialGradient(CX-8,CY-8,2,CX,CY,sunR);
    sunGrad.addColorStop(0,'#fff7a0');
    sunGrad.addColorStop(0.5,'#FFD700');
    sunGrad.addColorStop(1,'#FF8C00');
    c.beginPath();
    c.arc(CX, CY, sunR, 0, Math.PI*2);
    c.fillStyle = sunGrad;
    c.fill();

    // Planets
    DATA.planets.forEach((p, i) => {
      const orbitR = p.orbitPx * scale;
      const speed  = 1 / p.periodS;
      const angle  = this.time * speed * Math.PI * 2;
      const px     = CX + Math.cos(angle) * orbitR;
      const py     = CY + Math.sin(angle) * orbitR * 0.4;
      const pr     = p.sizePx * scale * 0.5;

      // Orbit ellipse
      c.beginPath();
      c.ellipse(CX, CY, orbitR, orbitR*0.4, 0, 0, Math.PI*2);
      c.strokeStyle = 'rgba(255,255,255,0.06)';
      c.lineWidth = 1;
      c.stroke();

      // Planet shadow
      c.beginPath();
      c.arc(px, py+pr*0.6, pr*0.8, 0, Math.PI*2);
      c.fillStyle = 'rgba(0,0,0,0.3)';
      c.fill();

      // Planet body
      const grad = c.createRadialGradient(px-pr*0.3,py-pr*0.3,pr*0.1,px,py,pr);
      grad.addColorStop(0, '#ffffff55');
      grad.addColorStop(0.3, p.color);
      grad.addColorStop(1, p.color + '88');
      c.beginPath();
      c.arc(px, py, pr, 0, Math.PI*2);
      c.fillStyle = grad;
      c.fill();

      // Saturn rings
      if (p.name === 'Saturn') {
        c.save();
        c.translate(px, py);
        c.scale(1, 0.35);
        c.beginPath();
        c.ellipse(0,0,pr*2.2,pr*2.2,0,0,Math.PI*2);
        c.strokeStyle = `${p.color}88`;
        c.lineWidth = pr*0.7;
        c.stroke();
        c.restore();
      }

      // Planet label
      c.fillStyle = 'rgba(255,255,255,0.85)';
      c.font = `bold ${Math.max(9,11*scale)}px Nunito, sans-serif`;
      c.textAlign = 'center';
      c.fillText(p.name, px, py - pr - 5);

      // Store position for click detection
      p._px = px; p._py = py; p._pr = pr;
    });
  },

  handleCanvasClick(e) {
    const rect = this.canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    DATA.planets.forEach((p, i) => {
      if (!p._px) return;
      const dx = mx - p._px, dy = my - p._py;
      if (Math.sqrt(dx*dx+dy*dy) < p._pr + 12) {
        this.showPlanetDetail(i);
      }
    });
  },

  showPlanetDetail(idx) {
    const p = DATA.planets[idx];
    document.getElementById('planet-detail-content').innerHTML = `
      <div class="planet-detail-content">
        <span class="planet-detail-emoji">${p.emoji}</span>
        <div class="planet-detail-name" style="color:${p.color}">${p.name}</div>
        <div class="tag mb-16">${p.type}</div>
        <div class="planet-detail-grid">
          <div class="planet-stat"><span>Diameter</span><strong>${p.diameter}</strong></div>
          <div class="planet-stat"><span>Distance from Sun</span><strong>${p.distanceSun}</strong></div>
          <div class="planet-stat"><span>Moons</span><strong>${p.moons}</strong></div>
          <div class="planet-stat"><span>Type</span><strong>${p.type}</strong></div>
        </div>
        <div class="planet-fact-text">${p.fact}</div>
        <button class="btn btn-primary mt-16" onclick="App.addXP(5);App.showToast('🚀','Planet fact learned! +5 XP')">✓ I know this now! +5 XP</button>
      </div>`;
    document.getElementById('planet-modal').classList.remove('hidden');
    App.addXP(3);
  },

  closePlanetModal(e) {
    if (!e || e.target.id === 'planet-modal' || !e.target) {
      document.getElementById('planet-modal').classList.add('hidden');
    }
  },
};
