/* ==========================================================================
   DONNÉES DU JEU
   ========================================================================== */
const houses = {
  gryffondor: { name: "GRYFFONDOR", icon: "img/gryffondor.png" },
  serdaigle: { name: "SERDAIGLE", icon: "img/serdaigle.png" },
  poufsouffle: { name: "POUFSOUFFLE", icon: "img/poufsouffle.png" },
  serpentard: { name: "SERPENTARD", icon: "img/serpentard.png" }
};

const questions = [
  [
    "Tu trouves une porte mystérieuse dans un couloir interdit. Que fais-tu ?",
    [
      ["Je l'ouvre immédiatement. L'aventure m'appelle !", "gryffondor"],
      ["Je cherche d'abord des indices et des livres.", "serdaigle"],
      ["Je vais chercher un ami pour explorer ensemble.", "poufsouffle"],
      ["J'observe discrètement avant de décider.", "serpentard"]
    ]
  ],
  [
    "Un camarade est mis à l'écart pendant un jeu. Tu…",
    [
      ["Je vais le défendre, même si ça attire l'attention.", "gryffondor"],
      ["Je cherche une solution juste et intelligente.", "serdaigle"],
      ["Je l'invite à rejoindre notre équipe.", "poufsouffle"],
      ["Je trouve la meilleure façon de retourner la situation.", "serpentard"]
    ]
  ],
  [
    "Quel objet magique choisirais-tu ?",
    [
      ["Une épée légendaire.", "gryffondor"],
      ["Un livre qui répond à toutes les questions.", "serdaigle"],
      ["Une cape qui rend tout le monde heureux.", "poufsouffle"],
      ["Une bague donnant un grand pouvoir.", "serpentard"]
    ]
  ],
  [
    "Pour réussir un défi difficile, tu comptes surtout sur…",
    [
      ["Ton courage.", "gryffondor"],
      ["Ton intelligence.", "serdaigle"],
      ["Tes amis et ta persévérance.", "poufsouffle"],
      ["Ta détermination et ta stratégie.", "serpentard"]
    ]
  ],
  [
    "Le Choixpeau hésite entre deux maisons. Que lui dis-tu ?",
    [
      ["Choisis celle où je pourrai vivre les plus grandes aventures !", "gryffondor"],
      ["Prends celle qui correspond le mieux à ma façon de penser.", "serdaigle"],
      ["Je veux une maison où l'on prend soin les uns des autres.", "poufsouffle"],
      ["Je veux une maison qui me permettra d'aller loin.", "serpentard"]
    ]
  ]
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
  end: ["26_fin.mp3", "27_felicitations.mp3", "28_a_bientot.mp3"]
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
  questionIndex: 0,
  score: { gryffondor: 0, serdaigle: 0, poufsouffle: 0, serpentard: 0 },
  results: [],
  availableReactions: [],
  availableThinking: []
};

// Tire un élément aléatoire et le retire du tableau pour ne jamais le répéter
function pullUniqueRandom(array) {
  if (!array || array.length === 0) return null;
  const index = Math.floor(Math.random() * array.length);
  return array.splice(index, 1)[0];
}

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(el => el.classList.remove("active"));
  const target = $(screenId);
  if (target) target.classList.add("active");
}

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
  if (!inputName) return;

  audio.stop();
  state.name = inputName;
  state.questionIndex = 0;
  state.score = { gryffondor: 0, serdaigle: 0, poufsouffle: 0, serpentard: 0 };

  // Copie indépendante des listes audio pour tirage sans remise pendant la session
  state.availableReactions = [...audioFiles.reaction];
  state.availableThinking = [...audioFiles.thinking];

  await audio.playSequence(audioFiles.name, 500);
  startQuestion();
};

$("nameInput").addEventListener("keydown", e => {
  if (e.key === "Enter") $("nameBtn").click();
});

// 3. Affichage d'une question
function startQuestion() {
  const q = questions[state.questionIndex];

  $("studentName").textContent = state.name;
  $("progress").textContent = `QUESTION ${state.questionIndex + 1} / ${questions.length}`;
  $("questionText").textContent = q[0];
  $("hatText").textContent = "Le Choixpeau réfléchit…";
  $("answers").innerHTML = "";

  q[1].forEach(([text, houseKey]) => {
    const btn = document.createElement("button");
    btn.className = "answer";
    btn.textContent = text;
    btn.onclick = () => handleAnswer(houseKey);
    $("answers").appendChild(btn);
  });

  showScreen("question");

  // Son de réflexion unique par question
  const thinkingSound = pullUniqueRandom(state.availableThinking);
  if (thinkingSound) {
    audio.playSequence([thinkingSound]);
  }
}

// 4. Traitement d'une réponse
async function handleAnswer(houseKey) {
  audio.stop();

  document.querySelectorAll(".answer").forEach(b => b.disabled = true);

  state.score[houseKey]++;
  $("hatText").textContent = "Hmmm… le Choixpeau prend note…";

  // Réaction unique tirée sans remise
  const reactionSound = pullUniqueRandom(state.availableReactions);
  if (reactionSound) {
    await audio.playSequence([reactionSound], 400);
  }

  if (state.questionIndex < questions.length - 1) {
    state.questionIndex++;
    startQuestion();
  } else {
    showReveal();
  }
}

// 5. Révélation de la Maison
async function showReveal() {
  audio.stop();

  const maxScore = Math.max(...Object.values(state.score));
  const candidates = Object.keys(state.score).filter(k => state.score[k] === maxScore);
  const nameHash = [...state.name].reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const winningHouse = candidates[Math.abs(nameHash) % candidates.length];

  state.results.push({ name: state.name, house: winningHouse });

  // Utilisation d'une balise <img> pour le résultat
  $("revealText").innerHTML = `
    <img src="${houses[winningHouse].icon}" alt="${houses[winningHouse].name}" class="house-badge-huge">
    <span>${houses[winningHouse].name} !</span>
  `;
  $("houseReveal").textContent = "Le Choixpeau a parlé.";
  showScreen("reveal");

  await audio.playSequence(audioFiles.reveal, 600);
  await audio.playSequence([audioFiles.houses[winningHouse]], 800);
  await audio.playSequence([audioFiles.after], 0);
}

// 6. Continuer ou Finir
$("nextBtn").onclick = () => {
  audio.stop();
  const choice = confirm("Un autre sorcier veut-il passer sous le Choixpeau ?\n\nOK = Oui, suivant\nAnnuler = Voir la cérémonie finale");

  if (choice) {
    resetForNextStudent();
  } else {
    showFinalResults();
  }
};

function resetForNextStudent() {
  state.name = "";
  state.questionIndex = 0;
  state.score = { gryffondor: 0, serdaigle: 0, poufsouffle: 0, serpentard: 0 };
  state.availableReactions = [];
  state.availableThinking = [];
  $("nameInput").value = "";
  showScreen("name");
  setTimeout(() => $("nameInput").focus(), 150);

  audio.playSequence(audioFiles.next, 500);
}

// 7. Écran Final
async function showFinalResults() {
  audio.stop();

  const grouped = { gryffondor: [], serdaigle: [], poufsouffle: [], serpentard: [] };
  state.results.forEach(res => {
    if (grouped[res.house]) grouped[res.house].push(res.name);
  });

  // Affichage des cartes de maisons avec leur blason
  $("results").innerHTML = Object.entries(grouped).map(([houseKey, students]) => `
    <div class="house-card">
      <img src="${houses[houseKey].icon}" alt="${houses[houseKey].name}" class="house-badge">
      <h3>${houses[houseKey].name}</h3>
      <p>${students.length ? students.map(n => n.replace(/[<>&"]/g, "")).join(", ") : "—"}</p>
    </div>
  `).join("");

  showScreen("final");
  await audio.playSequence(audioFiles.end, 600);
}

// Recommencer tout le jeu
$("restartBtn").onclick = () => {
  audio.stop();
  state.results = [];
  resetForNextStudent();
};

// Activer / Désactiver le son
$("soundBtn").onclick = () => {
  audio.soundEnabled = !audio.soundEnabled;
  $("soundBtn").textContent = audio.soundEnabled ? "🔊" : "🔇";
  if (!audio.soundEnabled) {
    audio.stop();
  }
};