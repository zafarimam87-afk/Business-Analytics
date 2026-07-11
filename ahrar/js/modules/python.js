/* =============================================
   PYTHON MODULE — Gamified coding lessons with Skulpt runner
   ============================================= */

const PythonModule = {
  currentLesson: null,

  render(container) {
    const lessons = DATA.pythonLessons;
    const done = App.state.pythonLesson || 0;

    container.innerHTML = `
      <div class="module-header fade-up">
        <h2 style="color:#00FF88">🐍 Python Coder</h2>
        <p>Teach the computer to do amazing things! Every mission earns XP — and mistakes are how real coders learn. 💪</p>
      </div>

      <div class="card mb-24 fade-up" style="border-color:rgba(0,255,136,0.2)">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px">
          <div>
            <div class="section-heading" style="color:#00FF88;margin:0">🚀 Your Coding Journey</div>
            <div style="color:var(--text-dim);font-size:0.85rem;margin-top:4px">Complete lessons to become a Space Coder!</div>
          </div>
          <div style="font-family:var(--font-display);font-size:1.4rem;font-weight:900;color:#00FF88">${done}/${lessons.length} done</div>
        </div>
        <div style="margin-top:14px">
          <div class="xp-track"><div class="xp-fill" style="width:${Math.round((done/lessons.length)*100)}%;background:linear-gradient(90deg,#00FF88,#00BCD4)"></div></div>
        </div>
      </div>

      <!-- LESSON LIST -->
      <div id="python-lesson-list" class="fade-up">
        <div class="section-heading">📚 Lessons</div>
        <div class="python-lessons">
          ${lessons.map((l,i) => {
            const isUnlocked = i <= done;
            const isDone = i < done;
            return `
              <div class="lesson-card ${isDone?'completed':''} ${!isUnlocked?'locked':''}"
                   onclick="${isUnlocked?`PythonModule.openLesson(${i})`:'PythonModule.showLocked()'}">
                <div class="lesson-num">${isDone?'✓':isUnlocked?l.emoji:'🔒'}</div>
                <div class="lesson-info">
                  <div class="lesson-title">Lesson ${i+1}: ${l.title}</div>
                  <div class="lesson-desc">${l.concept}</div>
                </div>
                <div class="lesson-xp">+${l.xp} XP</div>
              </div>`;
          }).join('')}
        </div>
      </div>

      <!-- LESSON VIEW (hidden initially) -->
      <div id="python-lesson-view" style="display:none" class="fade-up">
        <div class="gap-row mb-24">
          <button class="btn btn-info" onclick="PythonModule.backToList()">← All Lessons</button>
          <span id="py-lesson-title" style="font-weight:800;font-size:1.1rem"></span>
        </div>

        <div class="card mb-24" style="border-color:rgba(0,255,136,0.2)">
          <div id="py-story" style="font-size:0.95rem;line-height:1.7;margin-bottom:14px;color:#c8ffd8"></div>
          <div class="highlighted" style="background:rgba(0,255,136,0.07);border-color:rgba(0,255,136,0.3)">
            <p id="py-instruction" style="color:#00FF88!important"></p>
          </div>
        </div>

        <div class="editor-area mb-16">
          <div class="editor-header">
            <span class="editor-title">📝 Code Editor</span>
            <div class="editor-btns">
              <button class="btn btn-warning" style="padding:6px 14px;font-size:0.8rem" onclick="PythonModule.showHint()">💡 Hint</button>
              <button class="btn btn-primary" style="padding:6px 14px;font-size:0.8rem" onclick="PythonModule.toggleCheatSheet()">🪄 Magic Words</button>
              <button class="btn btn-success" style="padding:6px 14px;font-size:0.8rem" onclick="PythonModule.runCode()">▶ Run Code</button>
            </div>
          </div>
          <textarea id="python-editor" spellcheck="false" autocorrect="off" autocapitalize="off" placeholder="# Write your Python code here..."></textarea>
          <div class="editor-footer">
            <button class="btn btn-success" style="font-size:1rem;padding:12px 28px" onclick="PythonModule.runCode()">▶ RUN MY CODE! 🚀</button>
            <button class="btn btn-danger" style="background:rgba(239,68,68,0.2);border:1px solid rgba(239,68,68,0.3)" onclick="PythonModule.clearCode()">🗑 Clear</button>
            <button class="btn btn-primary" style="padding:8px 14px;font-size:0.8rem" onclick="PythonModule.loadStarterCode()">📋 Load Example</button>
          </div>
        </div>

        <div class="hint-box" id="py-hint">
          <p id="py-hint-text"></p>
        </div>

        <!-- MAGIC WORDS CHEAT SHEET -->
        <div id="py-cheatsheet" style="display:none;margin-bottom:16px" class="card">
          <div style="font-weight:900;color:#00FF88;margin-bottom:12px;font-size:1.05rem">🪄 Magic Words — Python Spell Book</div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:10px;font-size:0.85rem">
            <div style="background:rgba(0,255,136,0.06);border:1px solid rgba(0,255,136,0.2);border-radius:10px;padding:10px">
              <code style="color:#00FF88">print("hello")</code>
              <div style="color:var(--text-dim);margin-top:4px">📢 Makes the computer SAY something</div>
            </div>
            <div style="background:rgba(0,255,136,0.06);border:1px solid rgba(0,255,136,0.2);border-radius:10px;padding:10px">
              <code style="color:#00FF88">name = "Ahrar"</code>
              <div style="color:var(--text-dim);margin-top:4px">📦 Puts something in a labelled box</div>
            </div>
            <div style="background:rgba(0,255,136,0.06);border:1px solid rgba(0,255,136,0.2);border-radius:10px;padding:10px">
              <code style="color:#00FF88">if fuel == 0:</code>
              <div style="color:var(--text-dim);margin-top:4px">🤔 Asks a question — do this ONLY if true</div>
            </div>
            <div style="background:rgba(0,255,136,0.06);border:1px solid rgba(0,255,136,0.2);border-radius:10px;padding:10px">
              <code style="color:#00FF88">for i in range(5):</code>
              <div style="color:var(--text-dim);margin-top:4px">🔁 Repeats code 5 times — no copy-paste!</div>
            </div>
            <div style="background:rgba(0,255,136,0.06);border:1px solid rgba(0,255,136,0.2);border-radius:10px;padding:10px">
              <code style="color:#00FF88">def my_spell():</code>
              <div style="color:var(--text-dim);margin-top:4px">⚙️ Creates your OWN magic word!</div>
            </div>
            <div style="background:rgba(0,255,136,0.06);border:1px solid rgba(0,255,136,0.2);border-radius:10px;padding:10px">
              <code style="color:#00FF88">toys = ["car", "ball"]</code>
              <div style="color:var(--text-dim);margin-top:4px">📋 A list — one box holding many things</div>
            </div>
          </div>
          <div style="margin-top:12px;padding:10px;background:rgba(255,215,0,0.08);border:1px solid rgba(255,215,0,0.25);border-radius:10px;font-size:0.82rem">
            ⚠️ <b>Top secret coder rules:</b> Python words are always <b>lowercase</b> (print, not Print!) · Text needs <b>"quotes"</b> · Lines inside if/for/def start with <b>4 spaces</b>
          </div>
        </div>

        <div class="section-heading">💻 Output</div>
        <div id="python-output">Press ▶ Run Code to see your output here!</div>

        <div id="py-success-msg" style="display:none;margin-top:16px" class="card">
          <div style="text-align:center;padding:20px">
            <div style="font-size:3rem;margin-bottom:12px">🎉</div>
            <div style="font-family:var(--font-display);font-size:1.3rem;color:#00FF88;margin-bottom:8px">Mission Complete!</div>
            <div style="color:var(--text-dim);margin-bottom:16px" id="py-success-detail"></div>
            <button class="btn btn-success" id="py-next-btn" onclick="PythonModule.nextLesson()">Next Lesson →</button>
          </div>
        </div>
      </div>

      <!-- PYTHON RESOURCES -->
      <div class="card mt-24 fade-up">
        <div class="section-heading">🌐 External Python Resources</div>
        <div class="ext-resources">
          <a href="https://scratch.mit.edu" target="_blank" class="resource-card">
            <div class="resource-icon">😺</div>
            <div class="resource-info"><h4>Scratch</h4><p>Block-based coding for beginners</p></div>
          </a>
          <a href="https://code.org" target="_blank" class="resource-card">
            <div class="resource-icon">💻</div>
            <div class="resource-info"><h4>Code.org</h4><p>Free coding lessons & games</p></div>
          </a>
          <a href="https://www.codewizardshq.com/python-for-kids/" target="_blank" class="resource-card">
            <div class="resource-icon">🧙</div>
            <div class="resource-info"><h4>Python for Kids</h4><p>Beginner Python guides</p></div>
          </a>
          <a href="https://hourofcode.com" target="_blank" class="resource-card">
            <div class="resource-icon">⏰</div>
            <div class="resource-info"><h4>Hour of Code</h4><p>1-hour coding adventures</p></div>
          </a>
        </div>
      </div>
    `;
  },

  init() {},

  openLesson(idx) {
    this.currentLesson = idx;
    const l = DATA.pythonLessons[idx];
    document.getElementById('python-lesson-list').style.display = 'none';
    document.getElementById('python-lesson-view').style.display = 'block';
    document.getElementById('py-lesson-title').textContent = `Lesson ${idx+1}: ${l.title}`;
    document.getElementById('py-story').innerHTML = l.story;
    document.getElementById('py-instruction').textContent = l.instruction;
    document.getElementById('py-hint-text').textContent = l.hint;
    document.getElementById('py-hint').classList.remove('visible');
    document.getElementById('python-output').textContent = 'Press ▶ Run Code to see your output here!';
    document.getElementById('python-output').classList.remove('output-error');
    document.getElementById('py-success-msg').style.display = 'none';
    this.loadStarterCode();
  },

  backToList() {
    document.getElementById('python-lesson-list').style.display = 'block';
    document.getElementById('python-lesson-view').style.display = 'none';
    this.currentLesson = null;
  },

  loadStarterCode() {
    if (this.currentLesson === null) return;
    const l = DATA.pythonLessons[this.currentLesson];
    document.getElementById('python-editor').value = l.code;
  },

  clearCode() {
    document.getElementById('python-editor').value = '';
    document.getElementById('python-output').textContent = '';
  },

  showHint() {
    document.getElementById('py-hint').classList.toggle('visible');
  },

  toggleCheatSheet() {
    const cs = document.getElementById('py-cheatsheet');
    cs.style.display = cs.style.display === 'none' ? 'block' : 'none';
  },

  /* Turn scary Python errors into friendly kid language */
  friendlyError(err) {
    const raw = err.toString();
    const line = (raw.match(/line (\d+)/) || [])[1];
    const where = line ? ` (look at line ${line})` : '';
    let msg;

    if (/ParseError|SyntaxError|bad input|EOF/.test(raw)) {
      msg = `🤔 Oops! Python got a bit confused${where}.\n\n` +
            `🔍 Detective checklist:\n` +
            `  • Are your quote marks in pairs? "like this"\n` +
            `  • Are your brackets in pairs? (like this)\n` +
            `  • Did you forget a : at the end of an if/for/def line?`;
    } else if (/NameError/.test(raw)) {
      const word = (raw.match(/name '([^']+)'/) || [])[1];
      msg = `🔍 Python doesn't know the word${word ? ` "${word}"` : ''}${where}!\n\n` +
            `💡 Remember:\n` +
            `  • Python words are lowercase: print ✅  Print ❌\n` +
            `  • Text needs quotes: print("hello") ✅  print(hello) ❌\n` +
            `  • Check your spelling — computers can't guess!`;
    } else if (/IndentationError|expected an indented block/.test(raw)) {
      msg = `📏 The spaces at the start of lines matter${where}!\n\n` +
            `💡 Lines inside if, for or def need exactly 4 spaces at the start:\n` +
            `  if fuel == 0:\n` +
            `      print("no fuel!")  ← 4 spaces before print`;
    } else if (/TypeError/.test(raw)) {
      msg = `🔀 Python got mixed up joining different things${where}!\n\n` +
            `💡 To join text and numbers, wrap the number in str():\n` +
            `  print("I am " + str(7))  ✅`;
    } else if (/ZeroDivision/.test(raw)) {
      msg = `😵 Whoa! You can't divide by zero — not even a supercomputer can!\n\nTry dividing by a different number.`;
    } else if (/TimeLimitError|execLimit/.test(raw)) {
      msg = `⏰ Your code ran for too long — it might be stuck in a loop that never ends!\n\n💡 Check your loop has a way to finish.`;
    } else {
      msg = `🤖 Something surprised Python${where}!\n\n💡 Try the 💡 Hint button, or press 📋 Load Example to start fresh.`;
    }

    const cheers = [
      '💪 Mistakes make your brain grow — every great coder sees errors all day!',
      '🌟 Bug hunting is a coder superpower. You can find it!',
      '🚀 Even NASA engineers fix errors every day. Keep going!',
      '🥋 A black belt is a white belt who never gave up. Try again!',
    ];
    return msg + '\n\n' + cheers[Math.floor(Math.random() * cheers.length)];
  },

  showLocked() {
    App.showToast('🔒','Complete the previous lesson to unlock this one!');
  },

  runCode() {
    const code = document.getElementById('python-editor').value;
    const output = document.getElementById('python-output');
    output.textContent = '';
    output.classList.remove('output-error');

    if (!code.trim()) {
      output.textContent = '⚠️ Please write some code first!';
      return;
    }

    if (typeof Sk === 'undefined') {
      this.runFallback(code, output);
      return;
    }

    let out = '';
    Sk.configure({
      output: txt => { out += txt; output.textContent = out; },
      read: x => {
        if (Sk.builtinFiles?.files?.[x] !== undefined) return Sk.builtinFiles.files[x];
        throw new Error(`File not found: '${x}'`);
      },
      execLimit: 5000,
    });

    Sk.misceval.asyncToPromise(() =>
      Sk.importMainWithBody('<stdin>', false, code, true)
    ).then(() => {
      this.checkOutput(out.trim());
    }).catch(err => {
      output.textContent = this.friendlyError(err);
      output.classList.add('output-error');
    });
  },

  runFallback(code, output) {
    output.textContent = '🔌 The Python engine is still waking up!\n\n1. Check you are connected to the internet 📶\n2. Refresh the page (press F5)\n3. Press RUN again — your code is safe!';
  },

  checkOutput(actual) {
    if (this.currentLesson === null) return;
    const l = DATA.pythonLessons[this.currentLesson];
    const expected = l.expectedOutput.trim();

    const normalize = s => s.replace(/\s+/g,' ').trim().toLowerCase();
    const isCorrect = normalize(actual).includes(normalize(expected.split('\n')[0]));

    if (isCorrect || actual.length > 5) {
      const isDone = this.currentLesson < (App.state.pythonLesson || 0);
      if (!isDone) {
        App.state.pythonLesson = (App.state.pythonLesson || 0) + 1;
        App.addXP(l.xp);
        App.checkAchievement();
        App.saveState();
      }
      const praise = [
        '🌟 AMAZING! You just talked to a computer — and it listened!',
        '🚀 WOW! Real coding power! NASA would be proud!',
        '🥋 HI-YA! You karate-chopped that mission!',
        '🧠 Your coder brain is growing bigger!',
        '⚡ Super speedy! You are becoming unstoppable!',
      ];
      const detail = document.getElementById('py-success-detail');
      detail.textContent = (isDone
        ? 'Already completed — great practice! +2 XP'
        : `${praise[Math.floor(Math.random()*praise.length)]} You earned +${l.xp} XP!`);
      if (isDone) App.addXP(2);
      document.getElementById('py-success-msg').style.display = 'block';
      document.getElementById('py-success-msg').scrollIntoView({ behavior:'smooth', block:'center' });
      document.getElementById('py-next-btn').style.display =
        this.currentLesson < DATA.pythonLessons.length-1 ? 'inline-flex' : 'none';
    }
  },

  nextLesson() {
    const next = this.currentLesson + 1;
    if (next < DATA.pythonLessons.length) {
      this.openLesson(next);
    } else {
      App.showToast('🎓','All Python lessons complete! You are a Python Graduate!');
      this.backToList();
    }
  },
};
