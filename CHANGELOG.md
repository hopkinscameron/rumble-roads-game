# Changelog

Each web build pushed here gets a version (`0.MINOR.PATCH-alpha`: minor for a batch of changes, patch for fixes only) and a branch named `build/v<version>-<what-changed>`. The version and commit show at the top left of the game; five taps on them open the diagnostics panel.

## 0.2.0-alpha — Nov 8, 2026
Branch `build/v0.2.0-alpha-keyboard-slide-stamp` · stamp `0.2.0-alpha+bd52072.dirty` · data 29.4 MB

**Changed**
- Typing a name: the screen slides up so the name field sits just above the phone keyboard, and slides back down when the keyboard closes. Applies to the first-run name, Account and Local Multiplayer's Player Two (D393).
- The build stamp sits further down and in from the top-left corner, with a bigger tap area (D393).
- Includes the performance pass since 0.1.0: Phone quality level, merged clouds and island backdrops, a simpler far forest, and the game sized to the visible window in a Home Screen app (D390–D392).

**Test on the phone**
- Name entry upright and sideways, folded and unfolded: the field and what you type stay visible above the keyboard; Done/Return brings the screen back down.
- Five taps on the stamp open the diagnostics panel. Copy its text on the main menu, during a map-select flight, and mid-battle.
- Frame feel on the menu, map select and in battle.
