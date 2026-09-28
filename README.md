# GDevelop Ultimate Starter Kits 🎮

This repository contains **three complete, functional, and production-ready starter kits** for GDevelop 5. It uses the **Multi-file project** format, meaning you can examine, tweak, and use individual game mechanics or scenes directly.

---

## 🚀 Templates Included

1. **Metroidvania Kit (`layouts/MetroidvaniaScene.json`)**
   * **Features:** Advanced movement script, double jump controller, and wall-sliding physics.
2. **Turn-Based Roguelike Kit (`layouts/RoguelikeScene.json`)**
   * **Features:** 32x32 pixel rigid grid movement, strict player-to-enemy turn lifecycle management.
3. **Card Deckbuilder Kit (`layouts/DeckbuilderScene.json`)**
   * **Features:** Dynamic deck system array, random Fisher-Yates card shuffling logic, and UI spawn layouts.

---

## 📂 Project Directory Structure

Create these files and folders inside your repository exactly as structured below:

```text
├── game.gdevelop                           <-- Double-click this to open the engine
├── .gitignore                              <-- Keeps your GitHub repository clean
├── README.md                               <-- This file right here
├── extensions/
│   ├── PlatformerAdvancedMechanics.json     <-- Metroidvania jump/slide JavaScript engine
│   └── CardSystemController.json           <-- Deckbuilder card draw JavaScript arrays
└── layouts/
    ├── MainMenuScene.json                  <-- Interactive hub to select templates
    ├── MetroidvaniaScene.json              <-- Platformer action sandbox scene
    ├── RoguelikeScene.json                 <-- Turn-based dungeon grid scene
    └── DeckbuilderScene.json               <-- Card combat layout scene
```

---

## 🔧 How to Use This Project

### 1. Download or Clone
Download this repository as a `.zip` file to your computer and extract it, or clone it using git:
```bash
git clone https://github.com
```

### 2. Launching in GDevelop
1. Launch **GDevelop 5**.
2. Click on **Open a project** from the homepage interface.
3. Browse your local files and choose the file named **`game.gdevelop`** from the root folder.
4. GDevelop will automatically find, parse, and load all the related layout levels and extension systems.

### 3. Testing the Mechanics
* Press **Preview** (the play icon) on `MainMenuScene` to open the game hub.
* Click on any of the three buttons on the screen to switch into that specific engine template.

---

## ⌨️ Controls & Testing Keys

* **Main Menu:** Left-click on any template button to enter.
* **Metroidvania:** Use **Left / Right Arrows** to run. Press **Spacebar** to Jump or Double Jump. Hold arrow keys against a wall while falling to Wall Slide.
* **Roguelike:** Press **Left / Right Arrows** to step exactly 32 pixels on the grid. Every movement triggers the AI enemy action turn instantly.
* **Deckbuilder:** Left-click the **DrawButton** on the screen to draw 3 card items randomly from your backend JavaScript array pile.

(you scrolled so down and your pickaxe broked, take a new one) --> <img width="360" height="360" alt="image" src="https://github.com/user-attachments/assets/666c0f70-b22e-4b92-8af2-e2257086869c" />
