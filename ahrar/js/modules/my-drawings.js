/* =============================================
   MY DRAWINGS MODULE — Gallery of Ahrar's artwork
   ============================================= */

const MyDrawingsModule = {
  render(container) {
    container.innerHTML = `
      <div class="module-header fade-up">
        <h2 style="color:#FF69B4">🎨 My Drawings</h2>
        <p>A gallery of all my amazing artwork!</p>
      </div>

      <div class="drawings-info fade-up">
        🖼️ <strong>How to add your drawings:</strong> Save your drawing images into the <strong>drawings/</strong> folder next to index.html.<br>
        Name them: drawing1.jpg, drawing2.jpg … or drawing1.png etc. They will appear here automatically!
      </div>

      <div class="card mb-24 fade-up">
        <div class="section-heading">🎨 Ahrar's Art Gallery</div>
        <div class="drawings-grid" id="drawings-grid"></div>
      </div>

      <div class="card fade-up">
        <div class="section-heading">📊 My Art Stats</div>
        <div class="info-grid">
          <div class="info-chip"><span>Drawings Found</span><strong id="drawing-count">0</strong></div>
          <div class="info-chip"><span>Art Style</span><strong>Creative Explorer</strong></div>
          <div class="info-chip"><span>Favourite Topic</span><strong>Space & Animals</strong></div>
          <div class="info-chip"><span>Medium</span><strong>Pencil & Digital</strong></div>
        </div>
      </div>

      <!-- Lightbox -->
      <div id="lightbox" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:500;display:none;align-items:center;justify-content:center;padding:20px" onclick="MyDrawingsModule.closeLightbox()">
        <div style="position:relative;max-width:90vw;max-height:90vh;text-align:center">
          <img id="lightbox-img" src="" style="max-width:100%;max-height:80vh;border-radius:12px;box-shadow:0 0 40px rgba(255,105,180,0.3)" />
          <div id="lightbox-label" style="margin-top:12px;font-size:1.1rem;font-weight:800;color:#FF69B4"></div>
          <button onclick="MyDrawingsModule.closeLightbox()" style="position:absolute;top:-16px;right:-16px;width:36px;height:36px;border-radius:50%;background:#FF69B4;border:none;color:white;font-size:1.2rem;cursor:pointer">✕</button>
        </div>
      </div>
    `;

    this.loadDrawings();
  },

  init() {},

  loadDrawings() {
    const grid = document.getElementById('drawings-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const drawingNames = Array.from({length:20}, (_,i) => `drawing${i+1}`);
    const exts = ['jpg','jpeg','png','webp','gif'];
    let found = 0;
    const labels = [
      'My Rocket 🚀','Space Drawing 🌌','Animal Art 🐾','Karate Kick 🥋','Planet Earth 🌍',
      'Cool Dragon 🐉','My Favourite Animal','Space Station','Superhero','My Family',
      'Underwater World','Forest Friends','Robot Friend','Space Explorer','My Dream',
      'Magical Castle','Ocean Adventure','Sky High','Rainbow World','Special Creation'
    ];

    let pending = drawingNames.length;
    const foundCards = [];

    drawingNames.forEach((name, idx) => {
      const testImg = new Image();
      let loaded = false;
      exts.forEach(ext => {
        if (!loaded) {
          const src = `drawings/${name}.${ext}`;
          const t = new Image();
          t.onload = () => {
            if (!loaded) {
              loaded = true;
              found++;
              foundCards.push({ src, label: labels[idx] || name });
              document.getElementById('drawing-count').textContent = found;
              const card = document.createElement('div');
              card.className = 'drawing-card';
              card.innerHTML = `<img src="${src}" alt="${labels[idx]}" /><div class="drawing-label">${labels[idx]||name}</div>`;
              card.onclick = () => this.openLightbox(src, labels[idx]||name);
              grid.appendChild(card);
            }
          };
          t.src = src;
        }
      });
      pending--;
    });

    setTimeout(() => {
      if (document.getElementById('drawing-count').textContent === '0') {
        grid.innerHTML = `
          <div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-dim)">
            <div style="font-size:3rem;margin-bottom:12px">🎨</div>
            <div style="font-weight:800;margin-bottom:8px">No drawings yet!</div>
            <div style="font-size:0.85rem">Add your drawings to the <strong>drawings/</strong> folder<br>and they will appear here.</div>
          </div>`;
        const addCard = document.createElement('div');
        addCard.className = 'drawing-add-card';
        addCard.style.cssText = 'grid-column:1/-1;padding:40px';
        addCard.innerHTML = `<div class="add-icon">+</div><div>Add drawings to the <strong>drawings/</strong> folder</div>`;
        // grid.appendChild(addCard);
      }
    }, 1500);
  },

  openLightbox(src, label) {
    const lb = document.getElementById('lightbox');
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox-label').textContent = label;
    lb.style.display = 'flex';
    App.addXP(2);
  },

  closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
  },
};
