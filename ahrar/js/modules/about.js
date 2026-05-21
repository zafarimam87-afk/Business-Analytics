/* =============================================
   ABOUT MODULE — Profile, photos, fun facts
   ============================================= */

const AboutModule = {
  render(container) {
    const age = this.calculateAge('2018-10-18');

    container.innerHTML = `
      <div class="module-header fade-up">
        <h2 style="color:#FFD700">👦 About Ahrar</h2>
        <p>All about the amazing Ahrar Zafar!</p>
      </div>

      <!-- HERO -->
      <div class="about-hero card mb-24 fade-up">
        <div class="about-photo-main" id="main-photo-slot">
          <span id="main-photo-emoji">👨‍🚀</span>
        </div>
        <div class="about-details">
          <div class="about-name">Ahrar Zafar</div>
          <div class="about-sub">Explorer · Artist · Karate Kid · Space Scientist</div>
          <div class="info-grid">
            <div class="info-chip"><span>Full Name</span><strong>Ahrar Zafar</strong></div>
            <div class="info-chip"><span>Date of Birth</span><strong>18 Oct 2018</strong></div>
            <div class="info-chip"><span>Age</span><strong>${age} years old</strong></div>
            <div class="info-chip"><span>Star Sign</span><strong>♎ Libra</strong></div>
            <div class="info-chip"><span>Favourite Subject</span><strong>Space Science</strong></div>
            <div class="info-chip"><span>Superpower</span><strong>Curiosity ✨</strong></div>
          </div>
        </div>
      </div>

      <!-- INTERESTS -->
      <div class="card mb-24 fade-up">
        <div class="section-heading">⭐ Interests & Passions</div>
        <div class="interests-row">
          <span class="interest-tag" style="color:#AA00FF;border-color:#AA00FF44">🚀 Space Science</span>
          <span class="interest-tag" style="color:#4FC3F7;border-color:#4FC3F744">⚛️ Quantum Physics</span>
          <span class="interest-tag" style="color:#FF8C00;border-color:#FF8C0044">🐾 Animals & Creatures</span>
          <span class="interest-tag" style="color:#FF3333;border-color:#FF333344">🥋 Karate</span>
          <span class="interest-tag" style="color:#00BCD4;border-color:#00BCD444">✏️ Drawing & Art</span>
          <span class="interest-tag" style="color:#00FF88;border-color:#00FF8844">🐍 Coding (Python)</span>
          <span class="interest-tag" style="color:#FFD700;border-color:#FFD70044">🔬 Science Experiments</span>
        </div>
      </div>

      <!-- PHOTO GALLERY -->
      <div class="card mb-24 fade-up">
        <div class="section-heading">📸 Photo Gallery</div>
        <div class="drawings-info">
          📂 To add Ahrar's photos: save image files into the <strong>photos/ahrar/</strong> folder next to index.html.<br>
          Name them photo1.jpg, photo2.jpg, photo3.jpg, etc.
        </div>
        <div class="photo-gallery" id="photo-gallery"></div>
      </div>

      <!-- FUN FACTS -->
      <div class="card mb-24 fade-up">
        <div class="section-heading">💡 Fun Facts About Ahrar</div>
        <div class="space-fun-facts">
          <div class="fun-fact-item"><div class="fun-fact-icon">🌍</div><div class="fun-fact-text">Ahrar is a curious explorer who wants to understand how the <strong>entire universe</strong> works — from the tiniest quantum particle to the largest galaxy!</div></div>
          <div class="fun-fact-item"><div class="fun-fact-icon">🥋</div><div class="fun-fact-text">Karate is not just about kicks and punches — Ahrar is learning <strong>discipline, focus, and respect</strong> through martial arts.</div></div>
          <div class="fun-fact-item"><div class="fun-fact-icon">🎨</div><div class="fun-fact-text">Art is a superpower! Ahrar's drawings show an <strong>incredible imagination</strong> and a unique way of seeing the world.</div></div>
          <div class="fun-fact-item"><div class="fun-fact-icon">🐍</div><div class="fun-fact-text">Learning Python at age ${age} is amazing! Most professional coders didn't start until they were teenagers or adults. Ahrar is <strong>way ahead!</strong></div></div>
          <div class="fun-fact-item"><div class="fun-fact-icon">⭐</div><div class="fun-fact-text">The name <strong>Ahrar</strong> means "noble" and "free" — perfect for someone with such an adventurous spirit!</div></div>
        </div>
      </div>

      <!-- ACHIEVEMENTS -->
      <div class="card fade-up">
        <div class="section-heading">🏆 My Achievements</div>
        <div id="about-achievements" class="achievements-row"></div>
        <p id="no-achievements" style="color:var(--text-dim);font-size:0.85rem">Complete activities to earn achievements! Start with the Python module or take a quiz.</p>
      </div>
    `;

    this.loadPhotos();
    this.renderAboutAchievements();
  },

  init() {},

  calculateAge(dob) {
    const birth = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
    return age;
  },

  loadPhotos() {
    const gallery = document.getElementById('photo-gallery');
    if (!gallery) return;
    gallery.innerHTML = '';

    const photoNames = Array.from({length:18}, (_,i) => `photo${i+1}`);
    const exts = ['jpg','jpeg','png','webp'];

    photoNames.forEach(name => {
      const slot = document.createElement('div');
      slot.className = 'photo-slot';

      const img = document.createElement('img');
      img.style.display = 'none';

      let loaded = false;
      exts.forEach(ext => {
        if (!loaded) {
          const src = `photos/ahrar/${name}.${ext}`;
          const testImg = new Image();
          testImg.onload = () => {
            if (!loaded) {
              loaded = true;
              img.src = src;
              img.style.display = 'block';
              slot.querySelector('.slot-icon')?.remove();
              slot.querySelector('span')?.remove();
            }
          };
          testImg.src = src;
        }
      });

      const icon = document.createElement('div');
      icon.className = 'slot-icon';
      icon.textContent = '📷';
      const label = document.createElement('span');
      label.textContent = name;

      slot.appendChild(img);
      slot.appendChild(icon);
      slot.appendChild(label);
      gallery.appendChild(slot);
    });
  },

  renderAboutAchievements() {
    const row = document.getElementById('about-achievements');
    const noA = document.getElementById('no-achievements');
    if (!row) return;
    const earned = App.state.achievements;
    row.innerHTML = '';
    if (earned.length > 0 && noA) noA.style.display = 'none';
    earned.forEach(id => {
      const a = DATA.achievements.find(x => x.id === id);
      if (!a) return;
      const el = document.createElement('div');
      el.className = 'achievement-badge';
      el.innerHTML = `<span>${a.emoji}</span><span>${a.title}</span>`;
      el.title = a.desc;
      row.appendChild(el);
    });
  },
};
