/* ==========================================================================
   DONNÉES DU JEU
   ========================================================================== */
const houses = {
  gryffondor: { name: "GRYFFONDOR", icon: "img/gryffondor.jpg", color: "#e2a13d", printColor: "#9c3b23", tagline: "Bravoure, courage et un cœur de lion." },
  serdaigle: { name: "SERDAIGLE", icon: "img/serdaigle.jpg", color: "#7ea8d8", printColor: "#2a5d94", tagline: "Sagesse, esprit vif et soif de savoir." },
  poufsouffle: { name: "POUFSOUFFLE", icon: "img/poufsouffle.jpg", color: "#f0d264", printColor: "#8a6d0f", tagline: "Loyauté, patience et un grand cœur." },
  serpentard: { name: "SERPENTARD", icon: "img/serpentard.jpg", color: "#5fae7c", printColor: "#1f6b3f", tagline: "Ambition, ruse et détermination." }
};

const questions = [
  [
    "Tu trouves une porte mystérieuse dans un couloir interdit. Que fais-tu ?",
    [
      ["Je l'ouvre immédiatement. L'aventure m'appelle !", "gryffondor"],
      ["Je cherche d'abord des indices et des livres.", "serdaigle"],
      ["Je vais chercher un ami pour explorer ensemble.", "poufsouffle"],
      ["J'observe discrètement avant de décider.", "serpentard"]
    ],
    "questions/q01-porte-mysterieuse.mp3"
  ],
  [
    "Un camarade est mis à l'écart pendant un jeu. Tu…",
    [
      ["Je vais le défendre, même si ça attire l'attention.", "gryffondor"],
      ["Je cherche une solution juste et intelligente.", "serdaigle"],
      ["Je l'invite à rejoindre notre équipe.", "poufsouffle"],
      ["Je trouve la meilleure façon de retourner la situation.", "serpentard"]
    ],
    "questions/q02-camarade-ecarte.mp3"
  ],
  [
    "Quel objet magique choisirais-tu ?",
    [
      ["Une épée légendaire.", "gryffondor"],
      ["Un livre qui répond à toutes les questions.", "serdaigle"],
      ["Une cape qui rend tout le monde heureux.", "poufsouffle"],
      ["Une bague donnant un grand pouvoir.", "serpentard"]
    ],
    "questions/q03-objet-magique.mp3"
  ],
  [
    "Pour réussir un défi difficile, tu comptes surtout sur…",
    [
      ["Ton courage.", "gryffondor"],
      ["Ton intelligence.", "serdaigle"],
      ["Tes amis et ta persévérance.", "poufsouffle"],
      ["Ta détermination et ta stratégie.", "serpentard"]
    ],
    "questions/q04-defi-difficile.mp3"
  ],
  [
    "Le Choixpeau hésite entre deux maisons. Que lui dis-tu ?",
    [
      ["Choisis celle où je pourrai vivre les plus grandes aventures !", "gryffondor"],
      ["Prends celle qui correspond le mieux à ma façon de penser.", "serdaigle"],
      ["Je veux une maison où l'on prend soin les uns des autres.", "poufsouffle"],
      ["Je veux une maison qui me permettra d'aller loin.", "serpentard"]
    ],
    "questions/q05-choixpeau-hesite.mp3"
  ],
  [
    "Une créature magique est blessée dans la forêt interdite. Tu…",
    [
      ["Je fonce l'aider, tant pis pour le danger.", "gryffondor"],
      ["J'observe ses blessures pour comprendre comment la soigner.", "serdaigle"],
      ["Je reste avec elle pour qu'elle ne soit pas seule.", "poufsouffle"],
      ["Je vois ce que je peux en tirer avant d'agir.", "serpentard"]
    ],
    "questions/q06-creature-blessee.mp3"
  ],
  [
    "Ton plat préféré à la Grande Salle ressemble à…",
    [
      ["Un plat copieux, digne d'un grand banquet.", "gryffondor"],
      ["Quelque chose de raffiné et original.", "serdaigle"],
      ["Un plat réconfortant, comme à la maison.", "poufsouffle"],
      ["Le plat le plus impressionnant de la table.", "serpentard"]
    ],
    "questions/q07-plat-prefere.mp3"
  ],
  [
    "Un professeur te propose un projet en plus des cours. Tu…",
    [
      ["Je fonce, même si c'est risqué.", "gryffondor"],
      ["J'accepte si ça me permet d'apprendre quelque chose de nouveau.", "serdaigle"],
      ["J'accepte si je peux le faire avec des amis.", "poufsouffle"],
      ["J'accepte si ça peut m'aider à me démarquer.", "serpentard"]
    ],
    "questions/q08-projet-professeur.mp3"
  ],
  [
    "Quelle qualité admires-tu le plus chez un sorcier ?",
    [
      ["Le courage face au danger.", "gryffondor"],
      ["La soif de savoir.", "serdaigle"],
      ["La fidélité envers les siens.", "poufsouffle"],
      ["L'ambition et la détermination.", "serpentard"]
    ],
    "questions/q09-qualite-admiree.mp3"
  ]
];

// Question finale : le souhait de l'élève, toujours respecté par le Choixpeau
const wishQuestion = [
  "Le Choixpeau te laisse le choix. Dans quelle maison aimerais-tu aller ?",
  [
    ["Gryffondor, pour vivre de grandes aventures !", "gryffondor"],
    ["Serdaigle, pour nourrir ma curiosité.", "serdaigle"],
    ["Poufsouffle, pour la loyauté et l'amitié.", "poufsouffle"],
    ["Serpentard, pour accomplir de grandes choses.", "serpentard"]
  ],
  "questions/q10-voeu.mp3"
];

const audioFiles = {
  welcome: ["01_bienvenue.mp3", "02_la_ceremonie.mp3"],
  name: ["03_approche.mp3", "04_assieds_toi.mp3"],
  thinking: ["05_hmmm.mp3", "12_difficile.mp3", "13_je_reflechis.mp3", "14_peut_etre.mp3", "15_mais.mp3"],
  reaction: ["06_interessant.mp3", "07_je_vois.mp3", "08_courage.mp3", "09_intelligence.mp3", "10_loyaute.mp3", "11_ambition.mp3"],
  reveal: ["16_silence.mp3", "17_jai_trouve.mp3"],
  houses: {
    gryffondor: "18_gryffondor.mp3",
    serdaigle: "19_serdaigle.mp3",
    poufsouffle: "20_poufsouffle.mp3",
    serpentard: "21_serpentard.mp3"
  },
  after: "22_bienvenue_maison.mp3",
  next: ["23_suivant.mp3", "24_approche_suivant.mp3"],
  last: "25_dernier.mp3",
  end: ["26_fin.mp3", "27_felicitations.mp3", "28_a_bientot.mp3"],
  treasureHunt: ["chasse/01_annonce.mp3", "chasse/02_regles.mp3", "chasse/03_bonne_chance.mp3"],
  treasureOpen: ["chasse/04_ouverture.mp3"]
};

/* ==========================================================================
   GESTIONNAIRE AUDIO (STRICT ET ISOLÉ)
   ========================================================================== */
class SoundEngine {
  constructor() {
    this.player = new Audio();
    this.soundEnabled = true;
    this.currentPlaybackId = 0;
  }

  stop() {
    this.currentPlaybackId++;
    this.player.pause();
    this.player.currentTime = 0;
  }

  playFile(filename) {
    if (!this.soundEnabled || !filename) return Promise.resolve();

    return new Promise((resolve) => {
      const myPlaybackId = this.currentPlaybackId;

      this.player.pause();
      this.player.currentTime = 0;
      this.player.src = "audio/" + filename;

      const cleanup = () => {
        this.player.onended = null;
        this.player.onerror = null;
      };

      this.player.onended = () => {
        cleanup();
        resolve();
      };

      this.player.onerror = () => {
        console.warn("Fichier audio introuvable ou illisible :", filename);
        cleanup();
        resolve();
      };

      setTimeout(() => {
        if (this.currentPlaybackId === myPlaybackId && !this.player.paused) {
          cleanup();
          resolve();
        }
      }, 12000);

      const p = this.player.play();
      if (p && p.catch) {
        p.catch(() => {
          cleanup();
          resolve();
        });
      }
    });
  }

  async playSequence(files, gapMs = 300) {
    const playbackIdAtStart = ++this.currentPlaybackId;
    const list = (Array.isArray(files) ? files : [files]).filter(Boolean);

    for (const file of list) {
      if (this.currentPlaybackId !== playbackIdAtStart) break;
      await this.playFile(file);
      if (this.currentPlaybackId !== playbackIdAtStart) break;
      if (gapMs > 0) await new Promise(r => setTimeout(r, gapMs));
    }
  }
}

const audio = new SoundEngine();

/* ==========================================================================
   LOGIQUE DU JEU
   ========================================================================== */
const $ = id => document.getElementById(id);

let state = {
  name: "",
  gender: null,            // "sorcier" ou "sorciere", choisi avant la cérémonie
  questionIndex: 0,
  score: { gryffondor: 0, serdaigle: 0, poufsouffle: 0, serpentard: 0 },
  results: [],
  availableReactions: [],
  selectedQuestions: [],   // les 2 questions tirées au hasard pour cette session
  wishHouse: null          // la maison souhaitée par l'élève (question finale, décisive)
};

// Retourne le chemin de l'illustration du personnage pour un genre + une maison donnés
function getCharacterImage(gender, houseKey) {
  const g = gender === "sorciere" ? "sorciere" : "sorcier";
  return `img/${g}-${houseKey}-legami.png`;
}

// Tire un élément aléatoire et le retire du tableau pour ne jamais le répéter
function pullUniqueRandom(array) {
  if (!array || array.length === 0) return null;
  const index = Math.floor(Math.random() * array.length);
  return array.splice(index, 1)[0];
}

// Tire `count` questions distinctes au hasard dans le pool, sans le modifier
function pickRandomQuestions(pool, count) {
  const indices = pool.map((_, i) => i);
  const picked = [];
  for (let i = 0; i < count && indices.length; i++) {
    const rand = Math.floor(Math.random() * indices.length);
    picked.push(pool[indices[rand]]);
    indices.splice(rand, 1);
  }
  return picked;
}

// Modale de confirmation stylée (remplace confirm() natif du navigateur)
function showConfirmModal(text) {
  return new Promise(resolve => {
    $("modalText").textContent = text;
    $("confirmModal").classList.remove("hidden");

    const cleanup = (result) => {
      $("confirmModal").classList.add("hidden");
      $("modalYesBtn").onclick = null;
      $("modalNoBtn").onclick = null;
      resolve(result);
    };

    $("modalYesBtn").onclick = () => cleanup(true);
    $("modalNoBtn").onclick = () => cleanup(false);
  });
}

// Regroupe les résultats enregistrés par maison
function groupResultsByHouse() {
  const grouped = { gryffondor: [], serdaigle: [], poufsouffle: [], serpentard: [] };
  state.results.forEach(res => {
    if (grouped[res.house]) grouped[res.house].push(res);
  });
  return grouped;
}

// Génère le HTML des cartes de maisons (réutilisé par l'écran final et la modale de détail)
function renderHouseCardsHTML(badgeClass) {
  const grouped = groupResultsByHouse();
  return Object.entries(grouped).map(([houseKey, students]) => {
    const house = houses[houseKey];
    const studentsHTML = students.length
      ? `<div class="student-chips">${students.map(s => `
          <span class="student-chip">
            <img src="${getCharacterImage(s.gender, houseKey)}" alt="" class="student-chip-avatar">
            ${s.name.replace(/[<>&"]/g, "")}
          </span>
        `).join("")}</div>`
      : `<p>—</p>`;
    return `
      <div class="house-card">
        <img src="${house.icon}" alt="${house.name}" class="${badgeClass}">
        <h3>${house.name}</h3>
        ${studentsHTML}
      </div>
    `;
  }).join("");
}

// Met à jour le badge de compteur en direct des maisons
function updateLiveCounter() {
  const grouped = groupResultsByHouse();
  $("countGryffondor").textContent = grouped.gryffondor.length;
  $("countSerdaigle").textContent = grouped.serdaigle.length;
  $("countPoufsouffle").textContent = grouped.poufsouffle.length;
  $("countSerpentard").textContent = grouped.serpentard.length;
  $("liveCounter").classList.toggle("hidden", state.results.length === 0);
}

// Ouvre / ferme la modale de détail de la répartition en cours
function openLiveDetails() {
  if (state.results.length === 0) return;
  $("liveDetailsGrid").innerHTML = renderHouseCardsHTML("house-badge-large");
  $("liveDetailsModal").classList.remove("hidden");
}
$("liveCounter").addEventListener("click", openLiveDetails);
$("liveCounter").addEventListener("keydown", e => {
  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLiveDetails(); }
});
$("liveDetailsCloseBtn").onclick = () => $("liveDetailsModal").classList.add("hidden");

// Déclenche une pluie de confettis aux couleurs de la maison révélée
function launchConfetti(color) {
  const container = $("confettiContainer");
  if (!container) return;
  container.innerHTML = "";

  const palette = [color, "#f6df9b", "#ffffff"];
  const pieceCount = 46;

  for (let i = 0; i < pieceCount; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    const size = 6 + Math.random() * 6;
    piece.style.width = `${size}px`;
    piece.style.height = `${size * 1.6}px`;
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = palette[Math.floor(Math.random() * palette.length)];
    piece.style.animationDuration = `${1.8 + Math.random() * 1.4}s`;
    piece.style.animationDelay = `${Math.random() * 0.4}s`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    container.appendChild(piece);
  }

  // Nettoyage après l'animation pour ne pas accumuler d'éléments en mémoire
  setTimeout(() => { container.innerHTML = ""; }, 3600);
}

let screenHistory = [];
let currentScreenId = null;

function showScreen(screenId, options = {}) {
  const { recordHistory = true } = options;

  if (recordHistory && currentScreenId && currentScreenId !== screenId) {
    screenHistory.push(currentScreenId);
  }
  currentScreenId = screenId;
  updateBackButton();

  document.querySelectorAll(".screen").forEach(el => el.classList.remove("active"));
  const target = $(screenId);
  if (target) target.classList.add("active");
}

// Revient à l'écran précédemment affiché (bouton "← Retour", global à toute l'app)
function goBack() {
  if (screenHistory.length === 0) return;
  const previous = screenHistory.pop();
  audio.stop();
  showScreen(previous, { recordHistory: false });
}

function updateBackButton() {
  $("backBtn").classList.toggle("hidden", screenHistory.length === 0);
}

$("backBtn").onclick = goBack;

/* --- DÉROULEMENT DU JEU --- */

// 1. Accueil
$("startBtn").onclick = async () => {
  audio.stop();
  showScreen("name");
  $("nameInput").value = "";
  setTimeout(() => $("nameInput").focus(), 150);

  await audio.playSequence(audioFiles.welcome, 600);
};

// 2. Validation du nom
$("nameBtn").onclick = async () => {
  const inputName = $("nameInput").value.trim();
  if (!inputName || !state.gender) return;

  audio.stop();
  state.name = inputName;
  state.questionIndex = 0;
  state.score = { gryffondor: 0, serdaigle: 0, poufsouffle: 0, serpentard: 0 };
  state.wishHouse = null;
  state.selectedQuestions = pickRandomQuestions(questions, 2);

  // Copie indépendante des listes audio pour tirage sans remise pendant la session
  state.availableReactions = [...audioFiles.reaction];

  await audio.playSequence(audioFiles.name, 500);
  startQuestion();
};

$("nameInput").addEventListener("keydown", e => {
  if (e.key === "Enter") $("nameBtn").click();
});

document.querySelectorAll(".gender-btn").forEach(btn => {
  btn.onclick = () => {
    state.gender = btn.dataset.gender;
    document.querySelectorAll(".gender-btn").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
  };
});

// 3. Affichage d'une question
function startQuestion() {
  const totalSteps = state.selectedQuestions.length + 1; // +1 pour la question de vœu
  const isWishQuestion = state.questionIndex >= state.selectedQuestions.length;
  const q = isWishQuestion ? wishQuestion : state.selectedQuestions[state.questionIndex];

  $("studentName").textContent = state.name;
  $("progress").textContent = `QUESTION ${state.questionIndex + 1} / ${totalSteps}`;
  $("questionText").textContent = q[0];
  $("hatText").textContent = "Le Choixpeau réfléchit…";
  $("answers").innerHTML = "";

  q[1].forEach(([text, houseKey]) => {
    const btn = document.createElement("button");
    btn.className = "answer";
    btn.textContent = text;
    btn.onclick = (e) => handleAnswer(houseKey, e.currentTarget);
    $("answers").appendChild(btn);
  });

  showScreen("question");

  // Lecture de la question par la voix. Si le fichier audio n'existe pas encore,
  // la séquence continue normalement (voir SoundEngine.playFile) : rien ne bloque le jeu.
  audio.playSequence([q[2]].filter(Boolean));
}

// 4. Traitement d'une réponse
async function handleAnswer(houseKey, btnEl) {
  audio.stop();

  document.querySelectorAll(".answer").forEach(b => {
    b.disabled = true;
    b.classList.add("answer-disabled");
  });
  if (btnEl) btnEl.classList.add("answer-selected");

  const totalSteps = state.selectedQuestions.length + 1;
  const isWishQuestion = state.questionIndex >= state.selectedQuestions.length;

  if (isWishQuestion) {
    // La question de vœu ne compte pas dans le score : elle décide directement
    state.wishHouse = houseKey;
  } else {
    state.score[houseKey]++;
  }

  $("hatText").textContent = "Hmmm… le Choixpeau prend note…";

  // Réaction unique tirée sans remise
  const reactionSound = pullUniqueRandom(state.availableReactions);
  if (reactionSound) {
    await audio.playSequence([reactionSound], 400);
  }

  if (state.questionIndex < totalSteps - 1) {
    state.questionIndex++;
    startQuestion();
  } else {
    showReveal();
  }
}

// 5. Révélation de la Maison
async function showReveal() {
  audio.stop();

  // Le vœu exprimé par l'élève est toujours respecté (comme dans les livres,
  // le Choixpeau tient compte du souhait). Le score des 2 premières questions
  // ne sert que de filet de sécurité si jamais aucun vœu n'a été enregistré.
  const winningHouse = state.wishHouse || (() => {
    const maxScore = Math.max(...Object.values(state.score));
    const candidates = Object.keys(state.score).filter(k => state.score[k] === maxScore);
    return candidates[Math.floor(Math.random() * candidates.length)];
  })();

  state.results.push({ name: state.name, house: winningHouse, gender: state.gender });
  updateLiveCounter();

  // Rien n'est encore révélé : on garde le suspense tant que le Choixpeau n'a pas "parlé"
  $("revealText").textContent = "Le Choixpeau a parlé.";
  $("houseReveal").innerHTML = "";
  showScreen("reveal");

  // Suspense sonore avant toute révélation visuelle
  await audio.playSequence(audioFiles.reveal, 600);

  // Révélation visuelle, synchronisée avec l'annonce vocale de la maison :
  // c'est ici que doit apparaître la mise en avant spectaculaire
  const house = houses[winningHouse];
  const characterSrc = getCharacterImage(state.gender, winningHouse);
  $("houseReveal").innerHTML = `
    <div class="reveal-visuals">
      <img src="${characterSrc}" alt="${house.name}" class="reveal-character">
      <img src="${house.icon}" alt="${house.name}" class="house-badge-huge">
    </div>
    <span style="color:${house.color};text-shadow:0 0 40px ${house.color}66">${house.name} !</span>
  `;
  launchConfetti(house.color);

  await audio.playSequence([audioFiles.houses[winningHouse]], 800);
  await audio.playSequence([audioFiles.after], 0);
}

// 6. Continuer ou Finir
$("nextBtn").onclick = async () => {
  audio.stop();
  const choice = await showConfirmModal("Un autre sorcier veut-il passer sous le Choixpeau ?");

  if (choice) {
    resetForNextStudent();
  } else {
    showFinalResults();
  }
};

function resetForNextStudent() {
  state.name = "";
  state.gender = null;
  state.questionIndex = 0;
  state.score = { gryffondor: 0, serdaigle: 0, poufsouffle: 0, serpentard: 0 };
  state.wishHouse = null;
  state.selectedQuestions = [];
  state.availableReactions = [];
  $("nameInput").value = "";
  document.querySelectorAll(".gender-btn").forEach(b => b.classList.remove("selected"));
  showScreen("name");
  setTimeout(() => $("nameInput").focus(), 150);

  audio.playSequence(audioFiles.next, 500);
}

// 7. Écran Final
async function showFinalResults() {
  audio.stop();
  $("liveCounter").classList.add("hidden");

  $("results").innerHTML = renderHouseCardsHTML("house-badge-large");

  showScreen("final");
  await audio.playSequence(audioFiles.end, 600);
}

// Recommencer tout le jeu
$("restartBtn").onclick = () => {
  audio.stop();
  state.results = [];
  updateLiveCounter();
  resetForNextStudent();
};

// Imprimer un diplôme individuel pour chaque enfant,
// avec une zone dédiée au coup de tampon du sceau et une ligne de signature
$("printBtn").onclick = () => {
  if (state.results.length === 0) return;

  const cardsHTML = state.results.map(res => {
    const house = houses[res.house];
    const safeName = res.name.replace(/[<>&"]/g, "");
    const titre = res.gender === "sorciere" ? "Diplôme de Sorcière" : "Diplôme de Sorcier";
    const statut = res.gender === "sorciere" ? "officiellement sorcière" : "officiellement sorcier";

    return `
      <div class="certificate">
        <img src="${house.icon}" alt="${house.name}" class="certificate-badge">
        <p class="certificate-kicker">Poudlard · École de Sorcellerie</p>
        <h1 class="certificate-title">${titre}</h1>
        <p class="certificate-subtitle">Cérémonie de répartition</p>

        <p class="certificate-awarded-to">Ce diplôme est décerné à</p>
        <p class="certificate-name">${safeName}</p>
        <p class="certificate-body">reconnu(e) ${statut} de la maison</p>
        <p class="certificate-house" style="color:${house.printColor}">${house.name}</p>
        <p class="certificate-tagline">${house.tagline}</p>

        <div class="certificate-signatures">
          <div class="certificate-sign-block">
            <div class="certificate-seal"><span>Sceau de la maison</span></div>
          </div>
          <div class="certificate-sign-block">
            <div class="certificate-sign-line"></div>
            <p class="certificate-sign-label">Signature</p>
          </div>
        </div>
      </div>
    `;
  }).join("");

  $("printArea").innerHTML = `<div class="print-grid">${cardsHTML}</div>`;
  window.print();
};

// Activer / Désactiver le son
$("soundBtn").onclick = () => {
  audio.soundEnabled = !audio.soundEnabled;
  $("soundBtn").textContent = audio.soundEnabled ? "🔊" : "🔇";
  if (!audio.soundEnabled) {
    audio.stop();
  }
};

// Lancer l'écran de la chasse au trésor : le Choixpeau explique les règles
$("treasureHuntBtn").onclick = () => {
  audio.stop();
  showScreen("treasureHunt");
  audio.playSequence(audioFiles.treasureHunt, 600);
};

// ==========================================================================
// CADENAS DU TRÉSOR (3 chiffres)
// ==========================================================================
const LOCK_CODE_STORAGE_KEY = "choixpeau-lock-code";
let lockDigits = [0, 0, 0];

// Le code est sauvegardé sur cet appareil (localStorage) pour ne pas avoir
// à le ressaisir à chaque lancement de la cérémonie.
function getLockCode() {
  const stored = localStorage.getItem(LOCK_CODE_STORAGE_KEY);
  return stored && /^\d{3}$/.test(stored) ? stored : "000";
}

function setLockCode(code) {
  localStorage.setItem(LOCK_CODE_STORAGE_KEY, code);
}

function renderLockDigits() {
  lockDigits.forEach((val, i) => {
    $(`lockDigit${i}`).textContent = val;
  });
}

document.querySelectorAll(".lock-arrow").forEach(btn => {
  btn.addEventListener("click", () => {
    const i = Number(btn.dataset.index);
    const delta = btn.classList.contains("lock-up") ? 1 : -1;
    lockDigits[i] = (lockDigits[i] + delta + 10) % 10;
    renderLockDigits();
    $("lockFeedback").textContent = "";
  });
});

// "C'est parti !" : ouvre le cadenas à 3 chiffres, remis à zéro
$("treasureHuntStartBtn").onclick = () => {
  audio.stop();
  lockDigits = [0, 0, 0];
  renderLockDigits();
  $("lockFeedback").textContent = "";
  showScreen("lockScreen");
};

$("lockValidateBtn").onclick = () => {
  const entered = lockDigits.join("");
  const lockEl = document.querySelector(".lock");

  if (entered === getLockCode()) {
    $("lockFeedback").textContent = "";
    showScreen("congrats");
    launchConfetti("#f6df9b");
    audio.playSequence(audioFiles.treasureOpen, 0);
  } else {
    $("lockFeedback").textContent = "Ce n'est pas le bon code... essayez encore !";
    lockEl.classList.remove("shake");
    void lockEl.offsetWidth; // force le redémarrage de l'animation
    lockEl.classList.add("shake");
  }
};

// Réglage du code (accès discret, réservé aux adultes)
$("lockSettingsBtn").onclick = () => {
  $("lockSettingsInput").value = getLockCode();
  $("lockSettingsModal").classList.remove("hidden");
};
$("lockSettingsCloseBtn").onclick = () => $("lockSettingsModal").classList.add("hidden");
$("lockSettingsInput").addEventListener("input", () => {
  $("lockSettingsInput").value = $("lockSettingsInput").value.replace(/\D/g, "").slice(0, 3);
});
$("lockSettingsSaveBtn").onclick = () => {
  const val = $("lockSettingsInput").value.trim();
  if (!/^\d{3}$/.test(val)) {
    $("lockSettingsInput").focus();
    return;
  }
  setLockCode(val);
  $("lockSettingsModal").classList.add("hidden");
};

$("congratsRestartBtn").onclick = () => {
  showScreen("welcome");
};