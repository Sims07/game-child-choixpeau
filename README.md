# 🎩 Le Choixpeau Magique

Une application web interactive et sonore qui récrée la célèbre cérémonie de répartition de Poudlard. Les jeunes sorciers répondent à une série de questions pour découvrir leur maison (*Gryffondor*, *Serdaigle*, *Poufsouffle* ou *Serpentard*), guidés par la voix et les réactions du Choixpeau magique.

---

## ✨ Fonctionnalités

* 🔊 **Expérience sonore dynamique** : Séquences vocales immersives gérées de manière fluide et séquentielle.
* 🎲 **Réactions variées** : Tirage audio sans remise pour éviter la répétition des répliques lors d'une même session.
* 👥 **Gestion multi-élèves** : Possibilité de faire passer plusieurs sorciers à la suite et d'afficher le récapitulatif final de la promotion.
* 📱 **Interface responsive** : Thème sombre et magique adapté aux ordinateurs, tablettes et mobiles.

---

## 🛠️ Technologies utilisées

* **HTML5** & **CSS3** (Variables CSS, Flexbox/Grid, Animations)
* **JavaScript ES6+** (Programmation asynchrone `async/await`, API Audio HTML5)
* Fichiers audio au format **MP3**

---

## 📁 Structure du projet

```text
├── audio/            # Les 28 fichiers audio MP3 de la cérémonie
├── img/              # Visuels (choixpeau.png, etc.)
├── index.html        # Structure de l'application
├── style.css         # Styles, thème Poudlard et animations
├── app.js            # Moteur logique et gestionnaire audio
└── README.md         # Documentation