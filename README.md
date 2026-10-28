# Rumble Roads (web build)

A turn-based, dice-driven battler in three lanes. Two players spend one budget on towers and characters, draft their side, then fight to break the enemy base. You choose the action first, then roll; the roll only makes it stronger.

This repository holds only the published web build. The game's source lives in a separate private project.

## Play

**https://hopkinscameron.github.io/rumble-roads-game/**

On an iPhone, open the link in Safari, wait for the game to load, then tap **Share → Add to Home Screen** to play full-screen like an app. Hold the phone sideways for now.

## Alpha notes

- This is an early alpha. It works offline only: Practice, Local Multiplayer, the Tutorial and Playground. The online modes come later.
- The only map is Forest Valley.
- Progress is saved in the browser. Clearing Safari's website data deletes it.

## Updating

Replace every file except `.git`, `README.md` and `.nojekyll` with a new Web Release build, then commit and push. GitHub Pages republishes within a minute or two.
