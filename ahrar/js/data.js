/* =============================================
   DATA — All quiz questions, flashcards, lessons, planet info, etc.
   ============================================= */

const DATA = {

  /* ===== QUIZ BANKS ===== */
  quizzes: {

    math: [
      { q:'What is 6 + 8?',         opts:['12','13','14','15'],        ans:2 },
      { q:'What is 15 - 7?',        opts:['6','7','8','9'],            ans:2 },
      { q:'What is 4 × 3?',         opts:['10','11','12','13'],        ans:2 },
      { q:'What is 20 ÷ 4?',        opts:['4','5','6','7'],            ans:1 },
      { q:'What is 9 + 9?',         opts:['16','17','18','19'],        ans:2 },
      { q:'What is 7 × 7?',         opts:['42','47','49','56'],        ans:2 },
      { q:'What is 100 - 37?',      opts:['53','63','73','83'],        ans:1 },
      { q:'What is 8 × 6?',         opts:['42','46','48','54'],        ans:2 },
      { q:'What is 36 ÷ 9?',        opts:['3','4','5','6'],            ans:1 },
      { q:'What is half of 50?',    opts:['20','25','30','35'],        ans:1 },
      { q:'What is 12 × 12?',       opts:['124','134','144','154'],    ans:2 },
      { q:'Round 47 to the nearest ten?', opts:['40','45','50','60'], ans:2 },
      { q:'What is 3 + 4 × 2?',     opts:['10','11','14','18'],        ans:1 },
      { q:'What is 1/2 + 1/4?',     opts:['1/6','2/6','3/4','1/4'],   ans:2 },
      { q:'How many sides does a hexagon have?', opts:['5','6','7','8'], ans:1 },
    ],

    science: [
      { q:'What do plants use to make their own food?',          opts:['Water','Sunlight','Insects','Soil'],    ans:1 },
      { q:'What is the fastest land animal?',                    opts:['Lion','Cheetah','Horse','Leopard'],     ans:1 },
      { q:'How many legs does a spider have?',                   opts:['6','7','8','10'],                       ans:2 },
      { q:'Which gas do humans breathe in to stay alive?',       opts:['Hydrogen','Nitrogen','Oxygen','CO2'],  ans:2 },
      { q:'What is the largest land animal?',                    opts:['Hippo','Elephant','Giraffe','Rhino'],   ans:1 },
      { q:'What process do plants use to make food?',            opts:['Respiration','Photosynthesis','Digestion','Osmosis'], ans:1 },
      { q:'How many bones does an adult human body have?',       opts:['106','206','306','406'],                ans:1 },
      { q:'What is the hardest natural substance on Earth?',     opts:['Gold','Iron','Diamond','Quartz'],       ans:2 },
      { q:'Which animal is the largest mammal?',                 opts:['Elephant','Blue Whale','Giraffe','Shark'], ans:1 },
      { q:'What do caterpillars turn into?',                     opts:['Moths','Bees','Butterflies','Flies'],   ans:2 },
    ],

    space: [
      { q:'Which is the largest planet in our Solar System?',    opts:['Saturn','Neptune','Jupiter','Uranus'],   ans:2 },
      { q:'How many planets are in our Solar System?',           opts:['7','8','9','10'],                        ans:1 },
      { q:'What is the name of our galaxy?',                     opts:['Andromeda','Milky Way','Cosmos','Nebula'], ans:1 },
      { q:'Which planet is known as the Red Planet?',            opts:['Venus','Mars','Mercury','Jupiter'],       ans:1 },
      { q:'What is the closest star to Earth?',                  opts:['Sirius','Alpha Centauri','The Sun','Polaris'], ans:2 },
      { q:'Which planet has the most moons?',                    opts:['Jupiter','Saturn','Neptune','Uranus'],   ans:1 },
      { q:'What is a light-year?',                               opts:['A very fast year','Distance light travels in one year','Age of a star','A planet orbit'], ans:1 },
      { q:'Which planet spins on its side?',                     opts:['Neptune','Saturn','Uranus','Mars'],       ans:2 },
      { q:'What is the name of the first human to walk on the Moon?', opts:['Buzz Aldrin','Neil Armstrong','Yuri Gagarin','John Glenn'], ans:1 },
      { q:'How long does it take Earth to orbit the Sun?',       opts:['24 hours','1 month','365 days','7 days'], ans:2 },
    ],

    karate: [
      { q:'What does "Sensei" mean?',              opts:['Student','Teacher','Master','Warrior'],          ans:1 },
      { q:'What colour is a beginner\'s belt?',    opts:['Blue','Yellow','White','Green'],                 ans:2 },
      { q:'What does "Kiai" mean?',                opts:['Run','Loud shout of energy','Bow','Block'],      ans:1 },
      { q:'What is the highest belt in karate?',   opts:['Brown','Blue','Black','Red'],                   ans:2 },
      { q:'What does "Dojo" mean?',                opts:['Practice weapon','Training hall','Punch','Medal'], ans:1 },
      { q:'What does "Kata" mean?',                opts:['A jump kick','A sparring match','A set of movements','A competition'], ans:2 },
      { q:'How do karate students greet their Sensei?', opts:['Wave','Bow (Rei)','Shake hands','Clap'],   ans:1 },
      { q:'What is the karate punch called?',      opts:['Tsuki','Uke','Geri','Keri'],                    ans:0 },
    ],

    animals: [
      { q:'What is a group of lions called?',         opts:['Pack','Flock','Pride','Herd'],              ans:2 },
      { q:'How do sharks breathe?',                   opts:['Lungs','Gills','Skin','Nose'],              ans:1 },
      { q:'What is the only mammal that can fly?',    opts:['Squirrel','Bat','Bird','Flying fish'],      ans:1 },
      { q:'How many hearts does an octopus have?',    opts:['1','2','3','4'],                            ans:2 },
      { q:'What is a baby kangaroo called?',          opts:['Cub','Joey','Pup','Kid'],                   ans:1 },
      { q:'Which animal can change its colour?',      opts:['Lizard','Frog','Chameleon','Snake'],        ans:2 },
      { q:'What is the largest bird in the world?',   opts:['Eagle','Ostrich','Penguin','Albatross'],    ans:1 },
      { q:'Which insect makes honey?',                opts:['Ant','Butterfly','Bee','Wasp'],             ans:2 },
    ],
  },

  /* ===== FLASHCARD DECKS ===== */
  flashcards: {

    space: [
      { f:'What is the Sun?',                     b:'The Sun is a star at the centre of our Solar System. It is so massive that about 1.3 million Earths could fit inside it!' },
      { f:'How far is the Moon from Earth?',       b:'About 384,400 km! If you drove there at 100 km/h it would take around 160 days non-stop.' },
      { f:'What is a Black Hole?',                 b:'A black hole is a region in space where gravity is so strong that nothing — not even light — can escape from it.' },
      { f:'What is a nebula?',                     b:'A nebula is a giant cloud of gas and dust in space. Stars are born inside nebulae! The word means "mist" in Latin.' },
      { f:'What are asteroids?',                   b:'Asteroids are rocky objects that orbit the Sun. Most are found in the Asteroid Belt between Mars and Jupiter.' },
      { f:'What is a comet?',                      b:'A comet is an icy body from the outer Solar System. When it comes near the Sun, it develops a glowing tail of gas and dust.' },
      { f:'What is the International Space Station?', b:'The ISS is a spacecraft that orbits Earth. Astronauts live and do experiments there. It travels at 28,000 km/h!' },
      { f:'What is gravity?',                      b:'Gravity is the force that pulls objects toward each other. The bigger the object, the stronger its gravity. Earth\'s gravity keeps us on the ground!' },
      { f:'What is a star?',                       b:'A star is a giant ball of hot, glowing gas that produces light and heat through nuclear fusion. Our Sun is a medium-sized star!' },
      { f:'What is the Milky Way?',                b:'The Milky Way is our home galaxy — a spiral galaxy containing over 200 billion stars. Our Solar System lives about 26,000 light-years from its centre.' },
    ],

    animals: [
      { f:'What is the largest animal on Earth?',    b:'The Blue Whale! It can grow up to 30 metres long and weigh 180 tonnes — as heavy as 25 elephants!' },
      { f:'How do dolphins communicate?',            b:'Dolphins use clicks, whistles, and body language. Each dolphin has a unique "signature whistle" — like a name!' },
      { f:'Why do cats purr?',                       b:'Cats purr to communicate happiness, but also when they\'re stressed or in pain. Purring vibrations may even help heal bones!' },
      { f:'How long can a tortoise live?',           b:'Giant tortoises can live over 150 years! The oldest recorded tortoise lived to 188 years.' },
      { f:'What makes frogs different from toads?',  b:'Frogs have smooth moist skin and long legs for jumping. Toads have bumpy dry skin and shorter legs. Both are amphibians!' },
      { f:'Why do elephants have big ears?',         b:'African elephant ears act like giant fans! They flap them to cool their blood and keep cool in the hot savanna.' },
      { f:'How do bats see in the dark?',            b:'Bats use echolocation — they make high-pitched sounds that bounce off objects, telling them where things are.' },
      { f:'What is a marsupial?',                    b:'Marsupials carry their young in pouches! Kangaroos, koalas, and wombats are all marsupials. Most live in Australia.' },
    ],

    science: [
      { f:'What is photosynthesis?',    b:'Plants use sunlight, water, and CO₂ to make their own food (sugar) and release oxygen. It\'s how plants "eat"!' },
      { f:'What are atoms?',            b:'Everything in the universe is made of atoms — tiny particles so small that millions fit on a full stop. Atoms are made of protons, neutrons, and electrons.' },
      { f:'What is the water cycle?',   b:'Water evaporates from oceans and lakes, rises as vapour, forms clouds, then falls as rain or snow — then starts again!' },
      { f:'What are fossils?',          b:'Fossils are the preserved remains of ancient living things. Bones, shells, and even footprints can become fossils over millions of years.' },
      { f:'Why is the sky blue?',       b:'Sunlight contains all colours. When it hits Earth\'s atmosphere, blue light scatters the most — so the sky looks blue to us!' },
      { f:'What is electricity?',       b:'Electricity is the flow of electrons through a conductor. It powers lights, phones, and everything electronic.' },
      { f:'What are the three states of matter?', b:'Solid, Liquid, and Gas! Ice is solid, water is liquid, and steam is gas — they\'re all the same molecule (H₂O) in different states.' },
      { f:'What is DNA?',               b:'DNA is the "instruction manual" inside every living cell. It contains all the information that makes you YOU — your eye colour, height, and more!' },
    ],

    karate: [
      { f:'Kiai',          b:'A powerful shout used when delivering a technique. It focuses energy, startles opponents, and protects you by tightening core muscles.' },
      { f:'Rei',           b:'The bow of respect. Done before and after training, before sparring, and when entering/leaving the Dojo.' },
      { f:'Kata',          b:'A choreographed sequence of movements practised solo. It teaches technique, balance, timing, and discipline.' },
      { f:'Kumite',        b:'Sparring with a partner. Kumite helps practise techniques in a realistic setting with control and respect.' },
      { f:'Uchi',          b:'A strike — typically using the hand or arm to hit the opponent.' },
      { f:'Geri',          b:'A kick! Mawashi-geri is a roundhouse kick. Mae-geri is a front kick. Yoko-geri is a side kick.' },
      { f:'Uke',           b:'A block — used to deflect an incoming attack. Examples: age-uke (rising block), soto-uke (outside block).' },
      { f:'Kihon',         b:'Basic techniques — the building blocks of karate. Practising kihon drills builds muscle memory and perfect form.' },
      { f:'Dojo',          b:'The training hall where martial arts are practised. Treat it with respect — shoes off, bow when entering!' },
      { f:'Obi',           b:'The belt worn in karate. Its colour shows your rank and progress on the martial arts journey.' },
    ],
  },

  /* ===== PYTHON LESSONS ===== */
  pythonLessons: [
    {
      id: 1,
      title: '🌍 Hello, World!',
      emoji: '🌍',
      story: 'Welcome to Mission Control, Space Coder Ahrar! Your first mission: make the computer say something. We use print() to display text on screen.',
      instruction: 'Type the code below exactly and press RUN!',
      code: 'print("Hello, World!")',
      expectedOutput: 'Hello, World!',
      hint: 'Use print() with your message inside quote marks: print("Hello, World!")',
      xp: 10,
      concept: 'print() displays text on screen.'
    },
    {
      id: 2,
      title: '📦 Variables',
      emoji: '📦',
      story: 'A variable is like a labelled box that stores information. You can put anything inside and use it later!',
      instruction: 'Run this code to store your name and age!',
      code: 'name = "Ahrar"\nage = 7\nprint("My name is", name)\nprint("I am", age, "years old")',
      expectedOutput: 'My name is Ahrar\nI am 7 years old',
      hint: 'name = "Ahrar" creates a variable. Use print() to show it!',
      xp: 15,
      concept: 'Variables store data. name = "value" or number = 7'
    },
    {
      id: 3,
      title: '🔢 Numbers & Maths',
      emoji: '🔢',
      story: 'Python is an amazing calculator! You can use + - * / to do maths.',
      instruction: 'Let Python calculate some space distances!',
      code: 'moon_distance = 384400\nprint("Moon is", moon_distance, "km away")\nprint("In miles:", moon_distance * 0.621)\nprint("Days to drive there:", moon_distance // 1000)',
      expectedOutput: 'Moon is 384400 km away\nIn miles: 238732.4\nDays to drive there: 384',
      hint: '* means multiply, // means divide and round down.',
      xp: 20,
      concept: '+ add, - subtract, * multiply, / divide, ** power'
    },
    {
      id: 4,
      title: '🔁 Loops',
      emoji: '🔁',
      story: 'Loops repeat code without you having to type it many times. A for loop counts for you!',
      instruction: 'Countdown to rocket launch!',
      code: 'print("Rocket Launch Countdown!")\nfor i in range(10, 0, -1):\n    print(i, "...")\nprint("BLAST OFF! 🚀")',
      expectedOutput: 'Rocket Launch Countdown!\n10 ...\n9 ...\n8 ...\n7 ...\n6 ...\n5 ...\n4 ...\n3 ...\n2 ...\n1 ...\nBLAST OFF! 🚀',
      hint: 'range(10, 0, -1) counts from 10 down to 1. The colon : starts the loop body.',
      xp: 25,
      concept: 'for i in range(5): repeats code 5 times!'
    },
    {
      id: 5,
      title: '🤔 If / Else',
      emoji: '🤔',
      story: 'Computers can make decisions! If something is true, do one thing. Else, do something different.',
      instruction: 'Check if a planet is in our Solar System!',
      code: 'planet = "Mars"\nif planet == "Mars":\n    print(planet, "is in our Solar System!")\n    print("It is the Red Planet!")\nelse:\n    print(planet, "is not in our Solar System")',
      expectedOutput: 'Mars is in our Solar System!\nIt is the Red Planet!',
      hint: 'Use == to check if two things are equal. The if block runs when it\'s True.',
      xp: 30,
      concept: 'if condition: ... else: ... makes decisions'
    },
    {
      id: 6,
      title: '📋 Lists',
      emoji: '📋',
      story: 'A list stores many items in one variable. Use square brackets []!',
      instruction: 'Make a list of planets!',
      code: 'planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"]\nprint("I know", len(planets), "planets:")\nfor planet in planets:\n    print("  -", planet)',
      expectedOutput: 'I know 5 planets:\n  - Mercury\n  - Venus\n  - Earth\n  - Mars\n  - Jupiter',
      hint: 'planets[0] gets the first item. len(planets) counts how many there are.',
      xp: 30,
      concept: 'Lists: my_list = [1, 2, 3]. Access with my_list[0]'
    },
    {
      id: 7,
      title: '⚙️ Functions',
      emoji: '⚙️',
      story: 'A function is a reusable block of code. Define it once, call it whenever you need it!',
      instruction: 'Create a greeting function!',
      code: 'def greet(name, hobby):\n    print("Hello, " + name + "!")\n    print("I heard you love", hobby + "!")\n\ngreet("Ahrar", "space")\ngreet("Mum", "reading")',
      expectedOutput: 'Hello, Ahrar!\nI heard you love space!\nHello, Mum!\nI heard you love reading!',
      hint: 'def name(parameters): defines a function. Call it by typing its name with ().',
      xp: 35,
      concept: 'def my_function(): defines a reusable block of code'
    },
    {
      id: 8,
      title: '🎲 Random!',
      emoji: '🎲',
      story: 'Python can pick random numbers and make games! Use the random module.',
      instruction: 'Make a space fact randomiser!',
      code: 'import random\nfacts = [\n    "Jupiter has 95 moons!",\n    "Light takes 8 minutes to reach Earth from the Sun!",\n    "A day on Venus is longer than its year!",\n    "Saturn could float on water!"\n]\nfact = random.choice(facts)\nprint("Random Space Fact:")\nprint(fact)',
      expectedOutput: 'Random Space Fact:\nJupiter has 95 moons!',
      hint: 'import random lets you use random functions. random.choice(list) picks one item.',
      xp: 40,
      concept: 'import module adds extra features. random.randint(1,10) picks a number.'
    },
    {
      id: 9,
      title: '🚀 Rocket Safety Check',
      emoji: '🚀',
      story: 'Real rockets never launch without fuel! Let\'s build a smart rocket that checks for fuel first — and tells a FUNNY story if the tank is empty. This uses if/else to make decisions!',
      instruction: 'Run the code. The first time you\'ll meet a sleepy turtle! Then change fuel = 0 to fuel = 5 and run again to BLAST OFF! 🚀',
      code: '# 🚀 Captain Ahrar\'s Smart Rocket\nfuel = 0   # try changing this to 5 later!\n\ndef start_rocket():\n    # Safety check: do we have fuel?\n    if fuel == 0:\n        print("🐢 The rocket sputtered: putt... putt... pfffft...")\n        print("🐢 A sleepy turtle climbed out of the empty fuel tank!")\n        print("🐢 \'Excuse me, where is the fuel?\' he asked.")\n    else:\n        print("🎯 Mission Control: Launch sequence!")\n        for n in [5, 4, 3, 2, 1]:\n            print("   ..." + str(n) + "...")\n        print("🔥🔥🔥 BLAST OFF! 🚀🚀🚀")\n\nstart_rocket()',
      expectedOutput: '🐢 The rocket sputtered',
      hint: 'Functions are defined with def name():. The if statement checks something — if it\'s true, run those lines. else runs different lines.',
      xp: 45,
      concept: 'def my_function(): + if/else lets your code make smart decisions and tell stories.'
    },
    {
      id: 10,
      title: '🥋 Karate Belt Journey',
      emoji: '🥋',
      story: 'In karate, you climb a ladder of belts from White (beginner) all the way to Black (master)! Let\'s use a list to track your journey and find your next goal automatically.',
      instruction: 'Run the code to see your karate path. Then change my_belt = "White" to "Green" or "Brown" and run again — Python finds your next belt for you!',
      code: '# 🥋 The Karate Belt Path\nbelts = ["White", "Yellow", "Orange", "Green", "Blue", "Purple", "Brown", "Black"]\nmy_belt = "White"   # change this to any belt!\n\n# Find where you are in the belt ladder\nposition = belts.index(my_belt)\nremaining = len(belts) - position - 1\n\nprint("🥋 Current belt: " + my_belt)\nprint("📊 You are #" + str(position + 1) + " of " + str(len(belts)) + " belts")\n\nif my_belt == "Black":\n    print("👑 You are a MASTER! There is no higher belt!")\nelse:\n    next_belt = belts[position + 1]\n    print("🎯 Your next goal: " + next_belt + " belt!")\n    print("⏳ " + str(remaining) + " belts to reach BLACK!")',
      expectedOutput: '🥋 Current belt: White',
      hint: 'belts.index("White") returns 0 because White is at position 0. Lists start counting at 0! belts[position + 1] gets the NEXT item.',
      xp: 50,
      concept: 'list.index(item) finds where something is. list[n] gets the item at position n.'
    },
    {
      id: 11,
      title: '🎨 Drawing Gallery',
      emoji: '🎨',
      story: 'Every picture you draw goes into your gallery! Let\'s build a list of drawings, add new ones with .append(), then walk through every drawing with a for loop to show them.',
      instruction: 'Run the code to see your gallery. Then add YOUR OWN drawings with my_drawings.append("...") — try silly ones like "a banana riding a rocket"!',
      code: '# 🎨 Ahrar\'s Art Gallery\nmy_drawings = []   # start with an empty gallery\n\n# Add some drawings (try adding more of your own!)\nmy_drawings.append("a rocket with googly eyes")\nmy_drawings.append("a karate cat 🐱🥋")\nmy_drawings.append("Mom and Dad on planet Mars")\n# my_drawings.append("YOUR IDEA HERE")\n\n# Safety check: is the gallery empty?\nif len(my_drawings) == 0:\n    print("🖼️ The gallery is empty! Just a sleeping cat 🐱")\nelse:\n    print("🖼️ ===== AHRAR\'S ART GALLERY ===== 🖼️")\n    number = 1\n    for picture in my_drawings:\n        print("  #" + str(number) + ": " + picture)\n        number = number + 1\n    print("🌟 Total masterpieces: " + str(len(my_drawings)))',
      expectedOutput: '🖼️',
      hint: 'my_list.append(item) adds something to the end of a list. The for loop walks through every item one by one.',
      xp: 50,
      concept: 'list.append(x) adds to a list. for item in list: visits every item.'
    },
    {
      id: 12,
      title: '🌌 Galaxy Mission Playground',
      emoji: '🌌',
      story: '🎊 FINAL MISSION! 🎊 You\'ve learned functions, if/else, lists, and loops — time to combine them ALL into your own Galaxy adventure with rockets 🚀, karate 🥋, and drawing 🎨. This is YOUR sandbox — change the bottom of the code and play forever!',
      instruction: 'Press Run to see the full mission. Then scroll to the bottom (after "# 🎮 YOUR ADVENTURE") and write your own commands! Try: do_chop(), fill_fuel(3), land_on("Pluto"), draw("a dragon")',
      code: '# 🌌 AHRAR\'S GALAXY MISSION 🌌\n# Your backpack holds everything you collect!\nbag = {"xp": 0, "fuel": 0, "belt": "White", "art": []}\nBELTS = ["White","Yellow","Orange","Green","Blue","Purple","Brown","Black"]\n\ndef add_xp(n, reason):\n    bag["xp"] = bag["xp"] + n\n    print("✨ +" + str(n) + " XP for " + reason + "! (Total: " + str(bag["xp"]) + ")")\n\ndef fill_fuel(tanks):\n    bag["fuel"] = bag["fuel"] + tanks\n    print("⛽ Glug glug! +" + str(tanks) + " tanks loaded! 🚀")\n    add_xp(5, "fuelling up")\n\ndef launch():\n    if bag["fuel"] == 0:\n        print("🐢 Putt... pfffft... a turtle says \'Where\'s the fuel?\'")\n        return\n    bag["fuel"] = bag["fuel"] - 1\n    print("🔥 5...4...3...2...1... 🚀 BLAST OFF!")\n    add_xp(20, "launching")\n\ndef land_on(planet):\n    print("🪂 Touching down on " + planet + "! Flag planted! 🚩")\n    add_xp(15, "exploring " + planet)\n\ndef do_chop():\n    print("🥋 HI-YAAA! 🪓 A pretend watermelon explodes! 🍉")\n    add_xp(10, "a karate chop")\n\ndef earn_belt():\n    spot = BELTS.index(bag["belt"])\n    if spot == len(BELTS) - 1:\n        print("👑 You are already a BLACK BELT, Master Ahrar!")\n        return\n    bag["belt"] = BELTS[spot + 1]\n    print("🎉 NEW BELT: " + bag["belt"] + "! 🥋")\n    add_xp(50, "earning " + bag["belt"] + " belt")\n\ndef draw(what):\n    bag["art"].append(what)\n    print("🎨 You drew: " + what + " ✏️ 10/10!")\n    add_xp(8, "art")\n\ndef show_bag():\n    print("📜 ===== AHRAR\'S BACKPACK ===== 📜")\n    print("   ✨ XP: " + str(bag["xp"]))\n    print("   ⛽ Fuel: " + str(bag["fuel"]) + " tanks")\n    print("   🥋 Belt: " + bag["belt"])\n    print("   🎨 Drawings: " + str(len(bag["art"])))\n    print("================================")\n\n# 🎮 YOUR ADVENTURE — change anything below!\nprint("👋 Welcome Captain Ahrar! 🌟")\nlaunch()           # fails — no fuel!\nfill_fuel(2)\nlaunch()           # works!\nland_on("Mars")\ndo_chop()\nearn_belt()\ndraw("a rocket with googly eyes")\nshow_bag()',
      expectedOutput: '👋 Welcome Captain Ahrar',
      hint: 'Try adding new lines at the bottom! Each function call does something. Combine them like LEGO bricks: fill_fuel(5), launch(), launch(), launch(), land_on("Saturn")...',
      xp: 100,
      concept: '🏆 MASTER LEVEL! Dictionaries + lists + functions + if/else + for loops — all working together!'
    },
  ],

  /* ===== PLANETS ===== */
  planets: [
    {
      name: 'Mercury', emoji: '⚫', color: '#b5b5b5', sizePx: 14, orbitPx: 100, periodS: 4,
      type: 'Rocky', moons: 0, diameter: '4,879 km', distanceSun: '57.9 million km',
      fact: 'Mercury is the smallest planet and closest to the Sun. A year on Mercury is only 88 Earth days! Temperatures swing from -180°C to 430°C.',
    },
    {
      name: 'Venus', emoji: '🟡', color: '#ffc649', sizePx: 22, orbitPx: 145, periodS: 7,
      type: 'Rocky', moons: 0, diameter: '12,104 km', distanceSun: '108.2 million km',
      fact: 'Venus is the hottest planet even though it\'s not the closest to the Sun! Its thick clouds trap heat. A day on Venus is longer than its year!',
    },
    {
      name: 'Earth', emoji: '🌍', color: '#4fc3f7', sizePx: 24, orbitPx: 195, periodS: 10,
      type: 'Rocky', moons: 1, diameter: '12,742 km', distanceSun: '149.6 million km',
      fact: 'Our beautiful home! Earth is the only known planet with life. It has liquid water, breathable air, and a protective magnetic field. 71% of Earth\'s surface is ocean!',
    },
    {
      name: 'Mars', emoji: '🔴', color: '#ff5722', sizePx: 18, orbitPx: 250, periodS: 15,
      type: 'Rocky', moons: 2, diameter: '6,779 km', distanceSun: '227.9 million km',
      fact: 'The Red Planet! Mars has the tallest volcano in the Solar System — Olympus Mons, 3× taller than Mount Everest. NASA rovers are exploring it right now!',
    },
    {
      name: 'Jupiter', emoji: '🪐', color: '#c88b3a', sizePx: 52, orbitPx: 330, periodS: 25,
      type: 'Gas Giant', moons: 95, diameter: '139,820 km', distanceSun: '778.5 million km',
      fact: 'The giant king of planets! Jupiter is so big that 1,321 Earths could fit inside it. Its famous Great Red Spot is a storm bigger than Earth that has lasted 350+ years!',
    },
    {
      name: 'Saturn', emoji: '🪐', color: '#e8c97e', sizePx: 46, orbitPx: 410, periodS: 35,
      type: 'Gas Giant', moons: 146, diameter: '116,460 km', distanceSun: '1.43 billion km',
      fact: 'Saturn\'s beautiful rings are made of ice and rock! Saturn is so light it could float on water. It has 146 moons — more than any other planet. Titan is its largest moon!',
    },
    {
      name: 'Uranus', emoji: '🔵', color: '#7de8e8', sizePx: 34, orbitPx: 480, periodS: 50,
      type: 'Ice Giant', moons: 28, diameter: '50,724 km', distanceSun: '2.87 billion km',
      fact: 'Uranus spins on its side like a rolling ball! It\'s the coldest planet in the Solar System at -224°C. Its rings are tilted nearly vertically.',
    },
    {
      name: 'Neptune', emoji: '🔵', color: '#4169e1', sizePx: 32, orbitPx: 545, periodS: 70,
      type: 'Ice Giant', moons: 16, diameter: '49,244 km', distanceSun: '4.5 billion km',
      fact: 'Neptune has the strongest winds in the Solar System — up to 2,100 km/h! It takes 165 Earth years to orbit the Sun. Triton, its largest moon, orbits backwards!',
    },
  ],

  /* ===== KARATE BELTS ===== */
  belts: [
    { name:'White Belt',  color:'#f0f0f0', bg:'rgba(240,240,240,0.1)', emoji:'🤍', desc:'The beginning of the journey. Empty mind, ready to learn.', techniques:['Horse stance (Kiba-dachi)','Front punch (Gyaku-tsuki)','Rising block (Age-uke)','Front kick (Mae-geri)'] },
    { name:'Yellow Belt', color:'#FFD700', bg:'rgba(255,215,0,0.1)',   emoji:'💛', desc:'You are beginning to see the light. Your basics are forming.', techniques:['Walking stance (Ayumi-ashi)','Knife hand block (Shuto-uke)','Side kick (Yoko-geri)','Two-hand block'] },
    { name:'Orange Belt', color:'#FF8C00', bg:'rgba(255,140,0,0.1)',   emoji:'🧡', desc:'The roots grow stronger. Your power is developing.', techniques:['Back stance (Kokutsu-dachi)','Back kick (Ushiro-geri)','Outside block (Soto-uke)','Elbow strike (Empi-uchi)'] },
    { name:'Green Belt',  color:'#4CAF50', bg:'rgba(76,175,80,0.1)',   emoji:'💚', desc:'A plant pushing toward the sunlight. Skills are growing rapidly.', techniques:['Cat stance (Neko-ashi-dachi)','Spinning heel kick','Double block','Jump front kick'] },
    { name:'Blue Belt',   color:'#2196F3', bg:'rgba(33,150,243,0.1)',  emoji:'💙', desc:'The sky above. Your martial art reaches ever higher.', techniques:['Basic sparring (Kumite)','Combination attacks','Sweep (Ashi-barai)','Counter-attack timing'] },
    { name:'Purple Belt', color:'#9C27B0', bg:'rgba(156,39,176,0.1)', emoji:'💜', desc:'The earth meets sky. Advanced techniques are within reach.', techniques:['Advanced kata','Flying kicks','Multiple opponent defence','Full contact combinations'] },
    { name:'Brown Belt',  color:'#795548', bg:'rgba(121,85,72,0.1)',  emoji:'🤎', desc:'The ripening of knowledge. Almost at the top.', techniques:['Complex kata mastery','Sparring with control','Teaching junior belts','Mental discipline'] },
    { name:'Black Belt',  color:'#212121', bg:'rgba(255,255,255,0.05)', emoji:'🖤', desc:'The night sky — not the end, but the beginning of true mastery.', techniques:['All previous techniques','Leadership & teaching','Spiritual discipline','Continuous improvement (Kaizen)'] },
  ],

  /* ===== KARATE DAILY PRACTICE ===== */
  practiceItems: [
    { label:'10 minutes stretching', emoji:'🤸' },
    { label:'Horse stance – hold 60 seconds', emoji:'🦵' },
    { label:'20 front punches (each hand)', emoji:'👊' },
    { label:'20 front kicks (each leg)', emoji:'🦶' },
    { label:'10 rising blocks (each arm)', emoji:'🛡️' },
    { label:'Kata practice (×3)', emoji:'🥋' },
    { label:'Meditation – 5 minutes', emoji:'🧘' },
    { label:'Cool-down stretches', emoji:'😌' },
  ],

  /* ===== KARATE TECHNIQUES ===== */
  techniques: [
    { name:'Front Kick',      japanese:'Mae-geri',      emoji:'🦵', desc:'Lift knee up, thrust foot forward, pull back fast!' },
    { name:'Side Kick',       japanese:'Yoko-geri',     emoji:'👟', desc:'Lift knee up, extend leg to the side, hit with heel.' },
    { name:'Back Kick',       japanese:'Ushiro-geri',   emoji:'🦶', desc:'Look over shoulder, kick backwards with heel.' },
    { name:'Roundhouse Kick', japanese:'Mawashi-geri',  emoji:'💫', desc:'Swing leg in a circular arc, hit with the top of the foot.' },
    { name:'Front Punch',     japanese:'Gyaku-tsuki',   emoji:'👊', desc:'Drive fist forward from hip, rotate at the last second.' },
    { name:'Knife Hand',      japanese:'Shuto-uchi',    emoji:'🖐️', desc:'Strike with the outer edge of an open, rigid hand.' },
    { name:'Rising Block',    japanese:'Age-uke',       emoji:'🛡️', desc:'Sweep arm upward to deflect attacks to the head.' },
    { name:'Outside Block',   japanese:'Soto-uke',      emoji:'✋', desc:'Sweep arm inward to block middle-level attacks.' },
    { name:'Horse Stance',    japanese:'Kiba-dachi',    emoji:'🐴', desc:'Feet wide apart, knees bent, back straight — like riding a horse!' },
    { name:'Cat Stance',      japanese:'Neko-ashi-dachi',emoji:'🐱',desc:'90% weight on back leg, front foot lightly touching. Ready to kick!' },
  ],

  /* ===== DRAWING TUTORIALS ===== */
  tutorials: [
    {
      title:'Draw a Rocket 🚀', emoji:'🚀', difficulty:'Easy',
      steps:[
        { text:'Draw a tall rectangle for the rocket body', icon:'▬' },
        { text:'Add a triangle on top for the nose cone', icon:'▲' },
        { text:'Draw two triangles on each side as fins', icon:'◁▷' },
        { text:'Add a circle window near the middle', icon:'⭕' },
        { text:'Draw flame shapes coming out the bottom', icon:'🔥' },
        { text:'Add stars and planets around your rocket!', icon:'⭐' },
      ]
    },
    {
      title:'Draw a Planet 🪐', emoji:'🪐', difficulty:'Easy',
      steps:[
        { text:'Draw a large circle in the centre of your paper', icon:'⭕' },
        { text:'Add a wide oval ring around the middle of the circle', icon:'🔵' },
        { text:'Draw smaller circles on the planet for craters', icon:'⚫' },
        { text:'Add light wavy lines across the planet for bands', icon:'〰️' },
        { text:'Draw tiny moons orbiting your planet', icon:'🌙' },
        { text:'Colour it in — make it yellow and brown like Saturn!', icon:'🎨' },
      ]
    },
    {
      title:'Draw a Dragon 🐉', emoji:'🐉', difficulty:'Medium',
      steps:[
        { text:'Draw an oval for the head and a long S-curve for the neck', icon:'🔵' },
        { text:'Add a large oval body connected to the neck', icon:'⭕' },
        { text:'Draw a long pointed tail curling from the body', icon:'〰️' },
        { text:'Add two large pointed wings on the back', icon:'⬛' },
        { text:'Draw four short stubby legs with claws', icon:'🦶' },
        { text:'Add horns, spines down the back, and fire from the mouth!', icon:'🔥' },
      ]
    },
    {
      title:'Draw a Karate Kick 🥋', emoji:'🥋', difficulty:'Medium',
      steps:[
        { text:'Draw a stick figure head — a circle at the top', icon:'⭕' },
        { text:'Draw the body — a short line down from the head', icon:'|' },
        { text:'Add both arms stretched out for balance', icon:'↔️' },
        { text:'Draw one leg straight down (the standing leg)', icon:'|' },
        { text:'Draw the kicking leg — knee bent up, then foot forward', icon:'⬆️' },
        { text:'Add a karate gi (uniform), belt, and action lines for power!', icon:'⚡' },
      ]
    },
    {
      title:'Draw a Cheetah 🐆', emoji:'🐆', difficulty:'Medium',
      steps:[
        { text:'Draw a small oval for the head', icon:'⭕' },
        { text:'Add a long oval body stretching behind the head', icon:'🔵' },
        { text:'Draw four long thin legs — cheetahs are built for speed!', icon:'🦵' },
        { text:'Add a long tail curling at the end', icon:'〰️' },
        { text:'Draw small round ears, eyes, and a pointy nose', icon:'👃' },
        { text:'Add black spot markings all over the body and face', icon:'⚫' },
      ]
    },
    {
      title:'Draw Earth from Space 🌍', emoji:'🌍', difficulty:'Easy',
      steps:[
        { text:'Draw a large circle for planet Earth', icon:'⭕' },
        { text:'Inside, draw curved blob shapes for continents', icon:'🗺️' },
        { text:'Fill the rest with blue for the oceans', icon:'💧' },
        { text:'Add white swirly cloud shapes on top', icon:'☁️' },
        { text:'Draw a glow around the planet for atmosphere', icon:'🌟' },
        { text:'Add stars all around in the black space background!', icon:'✨' },
      ]
    },
  ],

  /* ===== ANIMAL FACTS ===== */
  animals: [
    { name:'Cheetah',    emoji:'🐆', type:'Mammal',  fact:'Fastest land animal! Can run up to 120 km/h in short bursts. Uses its tail for steering at high speed.' },
    { name:'Blue Whale', emoji:'🐋', type:'Mammal',  fact:'Largest animal ever! Up to 30m long, 180 tonnes. Its heart is the size of a small car and beats only 8 times per minute!' },
    { name:'Eagle',      emoji:'🦅', type:'Bird',    fact:'Can spot a rabbit from 3 km away! Their eyes are 4-8× sharper than human eyes. Some eagles live over 30 years.' },
    { name:'Octopus',   emoji:'🐙', type:'Mollusc', fact:'Has 3 hearts, blue blood, and 8 arms with suction cups. Can change colour and texture in milliseconds to camouflage!' },
    { name:'Shark',      emoji:'🦈', type:'Fish',    fact:'Has 5-7 gill slits and can detect one drop of blood in 100 litres of water. Sharks have been on Earth for 450 million years!' },
    { name:'Chameleon',  emoji:'🦎', type:'Reptile', fact:'Changes colour to communicate feelings, not to hide! Each eye can move independently. Tongue shoots out 1.5× body length.' },
    { name:'Elephant',   emoji:'🐘', type:'Mammal',  fact:'Largest land animal. Can live 70 years. Uses infrasound to communicate miles away. Remembers locations and friends for life!' },
    { name:'Dolphin',    emoji:'🐬', type:'Mammal',  fact:'Highly intelligent! Uses echolocation like sonar. Has its own unique "whistle" name. Dolphins mourn their dead.' },
    { name:'Butterfly',  emoji:'🦋', type:'Insect',  fact:'Tastes with its feet! Starts as a caterpillar that completely dissolves inside a chrysalis before reforming as a butterfly.' },
    { name:'Polar Bear', emoji:'🐻‍❄️', type:'Mammal', fact:'Fur looks white but is actually transparent (hollow tubes). Can swim 97 km non-stop. Under the fur, skin is black!' },
    { name:'Clownfish',  emoji:'🐠', type:'Fish',    fact:'Can change sex! All clownfish are born male. If the dominant female dies, the dominant male changes into a female.' },
    { name:'Bat',        emoji:'🦇', type:'Mammal',  fact:'The only mammal that truly flies! Uses echolocation to navigate in complete darkness. Can eat 1,000 mosquitoes in an hour!' },
  ],

  /* ===== SPACE FUN FACTS ===== */
  spaceFacts: [
    { icon:'🌡️', text:'Venus is hotter than Mercury despite being farther from the Sun — its thick clouds trap heat like a greenhouse.' },
    { icon:'⏱️', text:'A day on Venus lasts 243 Earth days, but a year on Venus is only 225 Earth days. Days are longer than years!' },
    { icon:'🏋️', text:'If you weigh 30 kg on Earth, you would weigh only 5 kg on the Moon because Moon\'s gravity is 6× weaker.' },
    { icon:'🔊', text:'There is no sound in space! Sound waves need air to travel. Explosions in space would be completely silent.' },
    { icon:'👣', text:'The footprints left by Apollo astronauts on the Moon will last millions of years — there\'s no wind to blow them away!' },
    { icon:'🌌', text:'There are more stars in the observable universe than grains of sand on all of Earth\'s beaches combined!' },
    { icon:'🚀', text:'Light travels at 300,000 km per second. It takes 8 minutes 20 seconds for sunlight to reach Earth.' },
    { icon:'🌊', text:'The gravity of the Moon causes Earth\'s ocean tides to rise and fall twice every day.' },
  ],

  /* ===== MINDMAP DATA ===== */
  mindmaps: {
    space: {
      title:'Space Explorer Mind Map',
      center: { label:'Space 🚀', color:'#AA00FF' },
      nodes: [
        { label:'Planets 🪐',  color:'#7C3AED', x:50, y:15,  children:['Mercury','Venus','Earth','Mars','Jupiter','Saturn'] },
        { label:'Stars ⭐',    color:'#F59E0B', x:80, y:50,  children:['Our Sun','Red Giants','White Dwarfs','Neutron Stars'] },
        { label:'Galaxies 🌌', color:'#0EA5E9', x:50, y:82,  children:['Milky Way','Andromeda','Spiral','Elliptical'] },
        { label:'Space Travel',color:'#10B981', x:20, y:50,  children:['Rockets','Satellites','ISS','Moon Landing'] },
      ]
    },
    science: {
      title:'Science Mind Map',
      center: { label:'Science 🔬', color:'#FF8C00' },
      nodes: [
        { label:'Animals 🐾',  color:'#EF4444', x:50, y:15,  children:['Mammals','Reptiles','Birds','Fish','Insects'] },
        { label:'Plants 🌿',   color:'#22C55E', x:80, y:50,  children:['Photosynthesis','Roots','Leaves','Flowers'] },
        { label:'Earth 🌍',    color:'#3B82F6', x:50, y:82,  children:['Water Cycle','Volcanoes','Earthquakes','Rocks'] },
        { label:'Human Body',  color:'#A855F7', x:20, y:50,  children:['Heart','Brain','Bones','Muscles'] },
      ]
    },
  },

  /* ===== LEVEL NAMES ===== */
  levelNames: [
    'Space Cadet','Explorer','Junior Scientist','Astronaut Trainee',
    'Star Navigator','Quantum Learner','Galaxy Ranger','Cosmic Master',
    'Universe Champion','Legendary Genius'
  ],

  /* ===== ACHIEVEMENTS ===== */
  achievements: [
    { id:'first_visit',   emoji:'🌟', title:'Welcome!',          desc:'Opened Ahrar\'s Galaxy for the first time',   condition: s => true },
    { id:'python_start',  emoji:'🐍', title:'Code Initiate',     desc:'Started the Python learning journey',          condition: s => (s.pythonLesson||0) >= 1 },
    { id:'python_half',   emoji:'💻', title:'Half-Way Coder',    desc:'Completed 4 Python lessons',                   condition: s => (s.pythonLesson||0) >= 4 },
    { id:'python_done',   emoji:'🏆', title:'Python Graduate',   desc:'Completed all Python lessons!',                condition: s => (s.pythonLesson||0) >= 8 },
    { id:'math_10',       emoji:'🔢', title:'Maths Whiz',        desc:'Answered 10 maths questions correctly',        condition: s => (s.mathCorrect||0) >= 10 },
    { id:'math_50',       emoji:'🧮', title:'Maths Champion',    desc:'Answered 50 maths questions correctly!',       condition: s => (s.mathCorrect||0) >= 50 },
    { id:'space_quiz',    emoji:'🚀', title:'Astronomer',        desc:'Completed a space quiz',                       condition: s => (s.quizzesDone||0) >= 1 },
    { id:'quiz_5',        emoji:'🎓', title:'Quiz Master',       desc:'Completed 5 quizzes',                         condition: s => (s.quizzesDone||0) >= 5 },
    { id:'karate_log',    emoji:'🥋', title:'Dojo Student',      desc:'Checked off all daily karate practice items',  condition: s => (s.karateDays||0) >= 1 },
    { id:'drawing_done',  emoji:'🎨', title:'Little Artist',     desc:'Completed a drawing tutorial',                 condition: s => (s.tutorialsDone||0) >= 1 },
    { id:'xp_100',        emoji:'⚡', title:'Energised!',        desc:'Earned 100 XP',                               condition: s => (s.xp||0) >= 100 },
    { id:'xp_500',        emoji:'🌠', title:'Star Earner',       desc:'Earned 500 XP',                               condition: s => (s.xp||0) >= 500 },
  ],
};
