# Changelog

Each web build pushed here gets a version (`0.MINOR.PATCH-alpha`: minor for a batch of changes, patch for fixes only) and a branch named `build/v<version>-<what-changed>`. The version and commit show at the top left of the game; five taps on them open the diagnostics panel.

## 0.3.0-alpha — Nov 9, 2026
Branch `build/v0.3.0-alpha-minimal-battle-hud` · stamp `0.3.0-alpha+2c93ff55` · data 28.0 MB

**Changed**
- Minimal battle HUD, top bar and rows: a slimmer top bar with both castles' HP, the active side's AP dots and a clock showing the time and round. The turn banner and turn line are gone. Their row is hidden until you tap its button. Your row and the action feed tuck behind round buttons, and a yellow dot shows when there's a new event (D402).
- One small tray replaces the big unit card, aim panel and move panel. The roll stamp is now a die chip that drops in, shows the face and fades. On touch, "Tap again to attack" shows above the tray. The CPU's aim shows as a tray with no buttons (D403).
- Desktop: your row sits beside the tray and the die chip sits under the top bar. Icon-only buttons have mouse tooltips. Lessons open tucked parts while they point at them (D404).

**Test on the phone**
- A battle against the CPU, folded and unfolded, held upright and sideways: the top bar, AP dots and clock; selecting a unit (tray), aiming (tray, "Tap again to attack"), moving, and the die chip after a roll.
- Tuck and untuck your row, their row and the feed. Check the new-event dot, and that the tucks are remembered next match.
- Press and hold a unit for the inspect card (role, level and stats now live there).
- Local two-player: the handoff curtain between turns.
- Text size: whether the 11-pt round line, feed tag and tray small line read well (open question 44).
- Hold End turn; pause from the pill (shows match time); the camera panel.

## 0.2.1-alpha — Nov 9, 2026 (rebuilt)
Branch `build/v0.2.1-alpha-phone-taps-sounds-scroll` · stamp `0.2.1-alpha+33c63ae.dirty` · data 28.0 MB (first build Nov 8: `0.2.1-alpha+562caeb.dirty`, couldn't show the bases on the unfolded phone)

**Changed**
- Taps work in a match again: picking a base and every battle tap. The level can't be dragged until the draft is done (D395).
- Every button clicks again, locked ones play the denied sound, nothing clicks twice, and the map-select flight no longer whooshes (D396).
- Scroll areas drag from anywhere, not just from a button, and keep their place when the screen redraws. On narrow screens the CPU level buttons shrink, then scroll sideways (D397).
- Unfolded phone held sideways (and 4:3 windows): the draft and battle sit in a side panel with the board beside it and pause at the top left. The base pick is one card (bases, then details, Lock in at the bottom), the tower card leaves the whole board visible, the character cards fit three to a row, and the battle's top bar and unit rows no longer collide. Practice is one scrolling card, so "Veteran" and "Play vs CPU" fit (D400, replaces D399).
- Unfolded phone held upright: the phone layout scales to fit the screen's height, so the bases, character cards and Lock in buttons all show (D400).

**Test on the phone**
- Base pick and battle taps, in the Home Screen app and in Safari.
- Button clicks and the denied sound on locked buttons; no click when the map-select flight plays.
- Scrolling lists by dragging on empty space; tap something far down and check the list stays put.
- Unfolded phone held sideways: Practice; the base pick (pick one: its details scroll into view); Place a tower (glowing pads visible beside the card); character picks; the battle's top row and pause button.
- Unfolded phone held upright: the same screens; everything shows, slightly smaller.
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
