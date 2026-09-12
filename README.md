# 🎩 Le Choixpeau Magique

Une application web interactive et sonore qui récrée la célèbre cérémonie de répartition de Poudlard. Les jeunes sorciers répondent à 2 questions tirées au hasard puis expriment un vœu pour découvrir leur maison (*Gryffondor*, *Serdaigle*, *Poufsouffle* ou *Serpentard*), guidés par la voix et les réactions du Choixpeau magique.

---

## ✨ Fonctionnalités

* 🎯 **2 questions aléatoires + 1 vœu décisif** : à chaque cérémonie, 2 questions sont tirées au hasard dans un pool de 9, puis une dernière question demande à l'élève sa maison préférée — le Choixpeau respecte toujours ce vœu (comme dans les livres), pour ne jamais frustrer un enfant.
* 🔊 **Expérience sonore dynamique** : Séquences vocales immersives gérées de manière fluide et séquentielle.
* 🎲 **Réactions variées** : Tirage audio sans remise pour éviter la répétition des répliques lors d'une même session.
* 👥 **Gestion multi-élèves** : Possibilité de faire passer plusieurs sorciers à la suite (via une modale stylée) et d'afficher le récapitulatif final de la promotion.
* 🗣️ **Questions lues à voix haute** : Chaque question est narrée automatiquement dès son affichage (fichiers audio à déposer dans `audio/questions/`).
* 🧙 **Personnages sorcier/sorcière** : L'élève choisit son avatar (sorcier ou sorcière) avant la cérémonie ; le personnage correspondant à sa maison apparaît ensuite lors de la révélation, dans le récapitulatif et sur le certificat imprimé.
* 🖨️ **Souvenirs imprimables** : Un bouton sur l'écran final génère un certificat individuel par enfant (nom, personnage, emblème, maison) prêt à imprimer et à emporter.
* 📱 **Interface responsive** : Thème sombre et magique adapté aux ordinateurs, tablettes et mobiles, correctement centré sur tous les écrans.

---

## 🛠️ Technologies utilisées

* **HTML5** & **CSS3** (Variables CSS, Flexbox/Grid, Animations)
* **JavaScript ES6+** (Programmation asynchrone `async/await`, API Audio HTML5)
* Fichiers audio au format **MP3**

---

## 📁 Structure du projet

```text
├── audio/            # Les 28 fichiers audio MP3 de la cérémonie
├── img/              # Visuels (choixpeau.png, emblèmes, personnages sorcier-*.png / sorciere-*.png)
├── index.html        # Structure de l'application
├── style.css         # Styles, thème Poudlard et animations
├── app.js            # Moteur logique et gestionnaire audio
└── README.md         # Documentation
```

### Personnages requis dans `img/`

Pour chaque maison (`gryffondor`, `serdaigle`, `poufsouffle`, `serpentard`), déposer deux images nommées ainsi :

```
img/sorcier-gryffondor-legami.png    img/sorciere-gryffondor-legami.png
img/sorcier-serdaigle-legami.png     img/sorciere-serdaigle-legami.png
img/sorcier-poufsouffle-legami.png   img/sorciere-poufsouffle-legami.png
img/sorcier-serpentard-legami.png    img/sorciere-serpentard-legami.png
```

### Voix des questions dans `audio/questions/`

Chaque question du jeu est lue automatiquement dès qu'elle s'affiche, si le fichier audio correspondant existe. Tant qu'un fichier n'est pas déposé, le jeu continue normalement sans bloquer (juste sans narration pour cette question précise). Déposer les fichiers suivants dans `audio/questions/` :

| Fichier | Texte à enregistrer |
|---|---|
| `q01-porte-mysterieuse.mp3` | Tu trouves une porte mystérieuse dans un couloir interdit. Que fais-tu ? |
| `q02-camarade-ecarte.mp3` | Un camarade est mis à l'écart pendant un jeu. Tu… |
| `q03-objet-magique.mp3` | Quel objet magique choisirais-tu ? |
| `q04-defi-difficile.mp3` | Pour réussir un défi difficile, tu comptes surtout sur… |
| `q05-choixpeau-hesite.mp3` | Le Choixpeau hésite entre deux maisons. Que lui dis-tu ? |
| `q06-creature-blessee.mp3` | Une créature magique est blessée dans la forêt interdite. Tu… |
| `q07-plat-prefere.mp3` | Ton plat préféré à la Grande Salle ressemble à… |
| `q08-projet-professeur.mp3` | Un professeur te propose un projet en plus des cours. Tu… |
| `q09-qualite-admiree.mp3` | Quelle qualité admires-tu le plus chez un sorcier ? |
| `q10-voeu.mp3` | Le Choixpeau te laisse le choix. Dans quelle maison aimerais-tu aller ? |

Seul le texte de la question doit être lu (pas les 4 réponses).