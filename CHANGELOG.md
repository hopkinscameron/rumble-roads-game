# Changelog

Each web build pushed here gets a version (`0.MINOR.PATCH-alpha`: minor for a batch of changes, patch for fixes only) and a branch named `build/v<version>-<what-changed>`. The version and commit show at the top left of the game; five taps on them open the diagnostics panel.

## 0.2.1-alpha — Nov 8, 2026
Branch `build/v0.2.1-alpha-phone-taps-sounds-scroll` · stamp `0.2.1-alpha+562caeb.dirty` · data 28.0 MB

**Changed**
- Taps work in a match again: picking a base and every battle tap. The level can't be dragged until the draft is done (D395).
- Every button clicks again, locked ones play the denied sound, nothing clicks twice, and the map-select flight no longer whooshes (D396).
- Scroll areas drag from anywhere, not just from a button, and keep their place when the screen redraws. On narrow screens the CPU level buttons shrink, then scroll sideways (D397).
- Nearly square windows, like the unfolded phone, use the tall phone layout (D399).

**Test on the phone**
- Base pick and battle taps, in the Home Screen app and in Safari.
- Button clicks and the denied sound on locked buttons; no click when the map-select flight plays.
- Scrolling lists by dragging on empty space; tap something far down and check the list stays put.
- Unfolded phone held sideways: the phone layout on the menus, draft and battle; the CPU level buttons fit or scroll.
- Still owed from 0.2.0: name entry upright and sideways, folded and unfolded (field above the keyboard, screen slides back); whether the stamp is easy to tap; diagnostics Copy text on the main menu, during a map-select flight and mid-battle.

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
