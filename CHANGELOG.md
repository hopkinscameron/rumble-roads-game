# Changelog

Each web build pushed here gets a version (`0.MINOR.PATCH-alpha`: minor for a batch of changes, patch for fixes only) and a branch named `build/v<version>-<what-changed>`. The version and commit show at the top left of the game; five taps on them open the diagnostics panel.

## 0.4.2-alpha — Nov 12, 2026
Branch `build/v0.4.2-alpha-tutorial-phone-fixes` · stamp `0.4.2-alpha+7e3f816b` · data 30.9 MB

**Changed**
- Tutorial fixes from the 0.4.1-alpha phone test (D425):
- During a task the coach card shrinks to a one-line strip (the coach's face, the task and an expand arrow). It tucks itself on your first tap outside it, or with its minimize button. It opens again by itself for the next task, or waits with a pulsing "new tip" before the next talk step (D425).
- The draft lesson keeps the castle reveal through Next, asks you to toss the coin, then glows your home pads, the enemy's and the contested middle on a whole-board view (D425).
- End turn tasks say "Hold End turn" while you have AP left and "Tap End turn" when you have none. Lesson 1 explains the hold (D425).
- The Types lesson rings the Strong and Weak target chips; the Statuses lines point at the health bar (D425).
- The lesson 4 task now reads "Down the Healer: keep attacking it." and fits on one line on desktop (D426).

**Test on the phone**
- The minimize strip in each lesson, upright and sideways: it tucks on the first tap outside, the minimize button works, it reopens for the next task, and "new tip" pulses before a talk step.
- Lesson 7 (draft): the coin task, then the three pad-zone lines on the whole board.
- Does the selected unit's yellow outline still crawl (open question 49)?

## 0.4.1-alpha — Nov 11, 2026
Branch `build/v0.4.1-alpha-tutorial-mobile-pass` · stamp `0.4.1-alpha+f985646b` · data 30.9 MB

**Changed**
- Tutorial fixes from the 0.4.0-alpha phone test (D423):
- The glowing spaces are hex outlines, like the battle's (D423).
- The coach frames what it talks about between its card and your units: a move shows the mover and every yellow hex it can reach, an attack shows the attacker and its target, and the castles pull back on a narrow screen (D423).
- With a finger, the coach talks about dragging, pinching, the Follow button and tapping, not keys and the mouse. Every task fits on one line (D423).
- "Yellow hexes" and "spaces" replace "green rings" and "markers" (D423).
- The round base and type plaque under each character are gone; the team still shows on the sash (D423).
- On the phone, the selected unit's outline is thinner and a softer yellow (D423).
- Holding the phone sideways (or on desktop), the coach card sits on the left and the camera now frames everything in the strip to its right, including castles, lanes, glows and move hexes (D424).
- In the draft lesson on a sideways phone, the coach card sits at the top left, so every button, the coin and your tower pads stay clear (D424).

**Test on the phone**
- Lesson 1 upright: the glowing spaces are hexes, and pressing Move shows every yellow hex above the units bar.
- Lesson 1 sideways: the castle lines, the lanes and the "You rolled a 4" step show right of the coach card, never under it.
- Lesson 1's camera steps with a finger: the coach says drag, pinch and twist, and the Follow task says to tap Follow.
- The draft lesson sideways: you can reach Lock, the + buttons, the coin and the tower pads with the card showing.
- Select a character and hold still: does its yellow outline still crawl (open question 49)?

## 0.4.0-alpha — Nov 11, 2026
Branch `build/v0.4.0-alpha-3d-art-pass` · stamp `0.4.0-alpha+4dac168e` · data 31.0 MB

**Changed**
- The 3D art pass, slices A0 to A12 (D409–D422):
- Pieces regraded to warm stone and kraft, with an ink outline and team marks (D409). The ten types use the UI's colours, each with a dark and a light shade (D410).
- Every attacker, defender and support has its own silhouette: helms, hoods, halos, weapons and staffs (D411–D413).
- All ten towers have their own tops, two-sided crest banners and type props (D414, D415). The Engineer's cogs, the Booster's dice and the Cleanser's diamonds circle their towers (D419).
- The castles' side keeps nest the type towers, and the castle owner flags fly sideways (D416, D417). Bigger gate banners and a trim band across the gatehouse (D420).
- One-handed weapons and the wand are held up while idle. The heal sends up 1, 2, 3 or 5 pink hearts, depending on the roll tier (D421).
- Menu islands: the castles are the battle castles (side keep, tower, crests, dressing, home plate with team rim and owner flags). The islands are bigger (D422).

**Test on the phone**
- Main menu: is it smooth while swiping between islands? The first island now draws about 3,300 calls (2,485 before). If it's choppier than 0.3.4, say so; the next step would be merging each island's ground.
- Menu castles: the blue rim and flags are on the first castle and the red on the second; the Engineer's cogs turn.
- Start a match. From the battle camera, check that each type reads by silhouette and colour, the crests and gate banners show, and the tower extras move.
- Heal with low and high rolls: more hearts at higher tiers.
- Armory: the character and tower pictures match the new looks.

## 0.3.4-alpha — Nov 10, 2026
Branch `build/v0.3.4-alpha-app-icon-splash` · stamp `0.3.4-alpha+3128fc81` · data 29.4 MB

**Changed**
- New app icon, the Road R: favicon, home-screen icon and the web app manifest's icons (including Android's maskable ones). The theme colour, manifest colours and page background are road yellow (D408).
- New loading splash in place of the old loading bar: the R's centre line paints in as the game loads, under a status phrase and percentage, then "Tap to play" starts the game. A failed load shows "Couldn't load the game" with Try again (D408).

**Test on the phone**
- Remove the old home-screen app, then Share → Add to Home Screen: the icon is the yellow Road R.
- Launch it: yellow from the first frame (no white or black flash, yellow behind the status bar), the R paints in, a pause near 90% is expected.
- Tap to play starts the game and the menu buttons make sound.
- Turn the phone sideways while it loads: R on the left, text on the right.
- With Settings → Accessibility → Motion → Reduce Motion on: no marker dot, no fade.
- Is the white build stamp at the top left readable on the yellow?

## 0.3.3-alpha — Nov 10, 2026
Branch `build/v0.3.3-alpha-short-sound-attack` · stamp `0.3.3-alpha+33d28345` · data 29.4 MB

**Changed**
- Button clicks and the other short sounds start 50 ms in, so the web build's audio encoding keeps their sharp start. In 0.3.2 the click came out almost silent (checked in a desktop browser: the click now plays at full level instead of about 2%) (D406).

**Test on the phone**
- Menu buttons (Settings, Done, Account, Back) click; the very first tap of a session may still be silent.
- Selecting a unit plays its tick; the "can't" sound on a disabled button; the last five seconds of the turn timer tick.
- The clicks don't feel late after a tap.

## 0.3.2-alpha — Nov 10, 2026
Branch `build/v0.3.2-alpha-short-sounds-round-bars` · stamp `0.3.2-alpha+ca43c267` · data 29.4 MB

**Changed**
- Button clicks and other short sounds should now play on the iPhone: every sound under 0.3 s plays a copy with silence added at the end (iPhone Safari drops very short clips), and they load at start so the first click isn't lost (D406).
- Health bars over units on the board have rounded fills, matching the HUD's bars when zoomed in (D406).

**Test on the phone**
- Menu buttons (Settings, Done, Account, Back) click, including the very first tap.
- Selecting a unit plays its tick; the "can't" sound on a disabled button; the last five seconds of the turn timer tick.
- Zoom onto a unit: its bar is a rounded pill, full and after taking damage.

## 0.3.1-alpha — Nov 10, 2026
Branch `build/v0.3.1-alpha-hud-fixes-sound-logs` · stamp `0.3.1-alpha+8c51d7af` · data 28.0 MB

**Changed**
- Sound logs for the silent button clicks: each button press logs whether it asked for a click, each click logs its clip's load state and volume, and the diagnostics Copy text ends with the browser's audio state (suspended or running).
- Phone held sideways (folded or unfolded): the unit, aim and move trays and the hint sit above your row, so the portrait, name and words fit (D405).
- Smaller HUD lines: the clock's round line 9 pt; the feed note, tray small line and tray button words 10 pt (D405).
- "Your turn" / "Their turn" shows for a moment where the hint sits when the turn changes; their action-point dots go down as they act (D405).
- The board's Blocked chip is now a red lock beside the pinned unit's health bar (D405).
- After picking a move, only the picked space stays lit until the unit gets there (D405).
- Music pauses in the pause menu and carries on from the same spot (D405).
- The aim tray adds the status chance or cleanse reach ("Pick a target · Chills on 4–6"); the inspect card gives the full sentence (D405).
- Tower placement says "Pick a tower, then tap a glowing pad. Or pass." (D405).

**Test on the phone**
- **Sound logs (first):** open the game, tap the main menu's Play, Practice and Back buttons a few times, then tap the stamp five times, press Copy and paste the text. The lines starting `[Sound]` and the last line, `Audio …`, show where the click goes missing.
- Phone held sideways, folded and unfolded: tap a unit (tray above your row), Attack (the note after "Pick a target"), Move.
- End your turn: "Their turn", their dots emptying; then "Your turn".
- A pinned unit (an enemy on its space): the red lock by its health bar.
- Open pause: the music stops, and carries on when you resume.
- Still owed from 0.3.0: inspect by press and hold, and the local-play handoff curtain.

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
