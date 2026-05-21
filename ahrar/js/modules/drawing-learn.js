/* =============================================
   DRAWING LEARN MODULE — Step-by-step tutorials, canvas, resources
   ============================================= */

const DrawingLearnModule = {
  activeTutorial: null,
  drawing: false,
  lastX: 0, lastY: 0,
  color: '#222222', size: 6, tool: 'pen',

  render(container) {
    container.innerHTML = `
      <div class="module-header fade-up">
        <h2 style="color:#00BCD4">✏️ Drawing Studio</h2>
        <p>Learn to draw step by step, then practise on the canvas!</p>
      </div>

      <!-- TUTORIALS -->
      <div id="drawing-tutorials-section" class="fade-up">
        <div class="section-heading">📚 Step-by-Step Tutorials</div>
        <div class="drawing-tutorials mb-24">
          ${DATA.tutorials.map((t,i)=>`
            <div class="tutorial-card" onclick="DrawingLearnModule.openTutorial(${i})">
              <div class="tutorial-emoji">${t.emoji}</div>
              <div class="tutorial-title">${t.title}</div>
              <div class="tutorial-steps">${t.steps.length} steps · ${t.difficulty}</div>
            </div>`).join('')}
        </div>
      </div>

      <!-- STEP VIEW -->
      <div id="step-view" style="display:none" class="fade-up">
        <div class="gap-row mb-16">
          <button class="btn btn-teal" onclick="DrawingLearnModule.closeTutorial()">← All Tutorials</button>
          <span id="tutorial-title-display" style="font-weight:800;font-size:1.1rem"></span>
        </div>
        <div class="card mb-16" style="border-color:rgba(0,188,212,0.2)">
          <div class="section-heading" style="color:#00BCD4">Follow these steps:</div>
          <div class="steps-container" id="steps-container"></div>
          <button class="btn btn-teal mt-16" onclick="DrawingLearnModule.completeTutorial()">✓ I drew it! +15 XP</button>
        </div>
      </div>

      <!-- DRAWING CANVAS -->
      <div class="card mb-24 fade-up" style="border-color:rgba(0,188,212,0.2)">
        <div class="section-heading" style="color:#00BCD4">🖌️ Free Drawing Canvas</div>
        <p style="color:var(--text-dim);font-size:0.85rem;margin-bottom:14px">Draw anything you like! Use the tools below.</p>
        <div class="draw-tools">
          <button class="draw-tool-btn active" id="tool-pen" onclick="DrawingLearnModule.setTool('pen')">✏️ Pen</button>
          <button class="draw-tool-btn" id="tool-eraser" onclick="DrawingLearnModule.setTool('eraser')">🧹 Eraser</button>
          <button class="draw-tool-btn" id="tool-fill" onclick="DrawingLearnModule.setTool('fill')">🪣 Fill</button>
          <input type="color" id="color-picker" value="#222222" onchange="DrawingLearnModule.setColor(this.value)" title="Colour" />
          <label style="display:flex;align-items:center;gap:8px;font-size:0.82rem;color:var(--text-dim)">
            Size:
            <input type="range" id="brush-size" min="2" max="40" value="6" oninput="DrawingLearnModule.setSize(this.value)" />
            <span id="size-display">6</span>
          </label>
          <button class="draw-tool-btn" onclick="DrawingLearnModule.clearCanvas()">🗑️ Clear</button>
          <button class="draw-tool-btn" onclick="DrawingLearnModule.saveCanvas()">💾 Save</button>
        </div>
        <div class="drawing-canvas-wrap">
          <canvas id="draw-canvas" width="800" height="480"></canvas>
        </div>
        <div class="gap-row">
          <div class="tag" id="tool-display">Tool: ✏️ Pen</div>
          <div class="tag" id="color-display">Colour: ■ Black</div>
          <div class="tag" id="canvas-size-display">Canvas: 800 × 480</div>
        </div>
      </div>

      <!-- DRAWING PROMPTS -->
      <div class="card mb-24 fade-up" style="border-color:rgba(0,188,212,0.2)">
        <div class="section-heading" style="color:#00BCD4">🎲 Random Drawing Prompt</div>
        <div id="prompt-display" class="card" style="text-align:center;padding:24px;font-size:1.3rem;font-weight:900;border-color:rgba(0,188,212,0.2);margin-bottom:14px;color:#00BCD4">
          Click the button to get a drawing challenge!
        </div>
        <button class="btn btn-teal" onclick="DrawingLearnModule.newPrompt()">🎲 New Prompt</button>
      </div>

      <!-- TECHNIQUES -->
      <div class="card mb-24 fade-up" style="border-color:rgba(0,188,212,0.2)">
        <div class="section-heading" style="color:#00BCD4">🎨 Drawing Tips & Techniques</div>
        <div class="space-fun-facts">
          <div class="fun-fact-item"><div class="fun-fact-icon">👁️</div><div class="fun-fact-text"><strong>Observe first:</strong> Before drawing anything, look at it carefully. Notice shapes, shadows, and proportions.</div></div>
          <div class="fun-fact-item"><div class="fun-fact-icon">📐</div><div class="fun-fact-text"><strong>Start with basic shapes:</strong> Break everything into circles, squares, and triangles first. Add details later!</div></div>
          <div class="fun-fact-item"><div class="fun-fact-icon">✏️</div><div class="fun-fact-text"><strong>Light first, dark later:</strong> Draw lightly first. You can always press harder for darker lines. It's easier to fix light lines!</div></div>
          <div class="fun-fact-item"><div class="fun-fact-icon">🔄</div><div class="fun-fact-text"><strong>Practise every day:</strong> Even 10 minutes of drawing each day will make you significantly better within weeks!</div></div>
          <div class="fun-fact-item"><div class="fun-fact-icon">🎨</div><div class="fun-fact-text"><strong>Mistakes = Art:</strong> There are no mistakes in art, only happy accidents! Some of the best art started as a "mistake".</div></div>
        </div>
      </div>

      <!-- RESOURCES -->
      <div class="card fade-up" style="border-color:rgba(0,188,212,0.2)">
        <div class="section-heading" style="color:#00BCD4">🌐 Drawing Resources</div>
        <div class="ext-resources">
          <a href="https://www.youtube.com/@ArtforKidsHub" target="_blank" class="resource-card">
            <div class="resource-icon">🎨</div>
            <div class="resource-info"><h4>Art for Kids Hub</h4><p>Best drawing tutorials for kids on YouTube</p></div>
          </a>
          <a href="https://www.youtube.com/results?search_query=how+to+draw+for+kids+easy" target="_blank" class="resource-card">
            <div class="resource-icon">📺</div>
            <div class="resource-info"><h4>How to Draw Videos</h4><p>Step-by-step drawing on YouTube</p></div>
          </a>
          <a href="https://www.sketchpad.net" target="_blank" class="resource-card">
            <div class="resource-icon">🖥️</div>
            <div class="resource-info"><h4>SketchPad</h4><p>Free online drawing tool</p></div>
          </a>
          <a href="https://www.drawingforall.net" target="_blank" class="resource-card">
            <div class="resource-icon">✏️</div>
            <div class="resource-info"><h4>Drawing For All</h4><p>Hundreds of drawing tutorials</p></div>
          </a>
        </div>
      </div>
    `;

    this.setupCanvas();
  },

  init() {},

  openTutorial(idx) {
    this.activeTutorial = idx;
    const t = DATA.tutorials[idx];
    document.getElementById('drawing-tutorials-section').style.display = 'none';
    document.getElementById('step-view').style.display = 'block';
    document.getElementById('tutorial-title-display').textContent = t.title;

    const sc = document.getElementById('steps-container');
    sc.innerHTML = t.steps.map((s,i)=>`
      <div class="step-item">
        <div class="step-number">${i+1}</div>
        <div class="step-text">${s.text}</div>
        <div class="step-emoji">${s.icon}</div>
      </div>`).join('');

    App.addXP(5);
  },

  closeTutorial() {
    this.activeTutorial = null;
    document.getElementById('step-view').style.display = 'none';
    document.getElementById('drawing-tutorials-section').style.display = 'block';
  },

  completeTutorial() {
    App.addXP(15);
    App.state.tutorialsDone = (App.state.tutorialsDone||0) + 1;
    App.checkAchievement();
    App.saveState();
    App.showToast('🎨','Tutorial complete! +15 XP. Now try it on the canvas!');
    this.closeTutorial();
  },

  /* ===== CANVAS ===== */
  setupCanvas() {
    const canvas = document.getElementById('draw-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const getPos = e => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      const src = e.touches ? e.touches[0] : e;
      return {
        x: (src.clientX - rect.left) * scaleX,
        y: (src.clientY - rect.top)  * scaleY,
      };
    };

    const startDraw = e => {
      e.preventDefault();
      this.drawing = true;
      const p = getPos(e);
      this.lastX = p.x; this.lastY = p.y;

      if (this.tool === 'fill') {
        ctx.fillStyle = this.color;
        ctx.fillRect(0,0,canvas.width,canvas.height);
        this.drawing = false;
        return;
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, ctx.lineWidth/2, 0, Math.PI*2);
      ctx.fillStyle = this.tool==='eraser'?'white':this.color;
      ctx.fill();
    };

    const draw = e => {
      e.preventDefault();
      if (!this.drawing) return;
      const p = getPos(e);
      ctx.beginPath();
      ctx.moveTo(this.lastX, this.lastY);
      ctx.lineTo(p.x, p.y);
      ctx.strokeStyle = this.tool==='eraser' ? 'white' : this.color;
      ctx.lineWidth = this.size * (this.tool==='eraser' ? 3 : 1);
      ctx.lineCap = 'round';
      ctx.stroke();
      this.lastX = p.x; this.lastY = p.y;
    };

    const endDraw = () => { this.drawing = false; };

    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', endDraw);
    canvas.addEventListener('mouseleave', endDraw);
    canvas.addEventListener('touchstart', startDraw, {passive:false});
    canvas.addEventListener('touchmove', draw, {passive:false});
    canvas.addEventListener('touchend', endDraw);
  },

  setTool(tool) {
    this.tool = tool;
    document.querySelectorAll('.draw-tool-btn[id^="tool-"]').forEach(b => b.classList.remove('active'));
    const btn = document.getElementById(`tool-${tool}`);
    if (btn) btn.classList.add('active');
    const labels = { pen:'✏️ Pen', eraser:'🧹 Eraser', fill:'🪣 Fill' };
    const disp = document.getElementById('tool-display');
    if (disp) disp.textContent = `Tool: ${labels[tool]||tool}`;
  },

  setColor(c) {
    this.color = c;
    const disp = document.getElementById('color-display');
    if (disp) disp.innerHTML = `Colour: <span style="color:${c}">■</span>`;
  },

  setSize(s) {
    this.size = parseInt(s);
    const disp = document.getElementById('size-display');
    if (disp) disp.textContent = s;
  },

  clearCanvas() {
    const canvas = document.getElementById('draw-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,canvas.width,canvas.height);
  },

  saveCanvas() {
    const canvas = document.getElementById('draw-canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `ahrar-drawing-${Date.now()}.png`;
    link.href = canvas.toDataURL();
    link.click();
    App.addXP(10);
    App.showToast('🎨','Drawing saved! +10 XP');
  },

  /* ===== PROMPTS ===== */
  prompts: [
    '🚀 Draw a rocket flying past Saturn','🐉 Draw a friendly dragon','🌍 Draw Earth from outer space',
    '🦁 Draw a lion in the jungle','🥋 Draw a karate fighter doing a kick','🌊 Draw an underwater scene',
    '🏠 Draw your dream house','🐙 Draw a giant octopus','🌈 Draw a rainbow over mountains',
    '🦋 Draw a butterfly on a flower','🤖 Draw a friendly robot','🐋 Draw a blue whale swimming',
    '⚡ Draw a superhero flying','🌙 Draw a night sky full of stars','🦅 Draw an eagle flying high',
    '🎪 Draw a circus tent','🦕 Draw a friendly dinosaur','🌺 Draw a magical flower garden',
    '🐺 Draw a wolf howling at the moon','🏖️ Draw a beach with a sandcastle',
  ],

  newPrompt() {
    const p = this.prompts[Math.floor(Math.random()*this.prompts.length)];
    const disp = document.getElementById('prompt-display');
    if (disp) {
      disp.style.opacity = '0';
      setTimeout(() => {
        disp.textContent = p;
        disp.style.opacity = '1';
        disp.style.transition = 'opacity 0.3s';
      }, 150);
    }
    App.addXP(2);
  },
};
