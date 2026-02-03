// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawStart() → what the start/menu screen looks like
// 2) input handlers → what happens on click / key press on this screen
// 3) a helper function to draw menu buttons

// ------------------------------------------------------------
// Start screen visuals
// ------------------------------------------------------------
// drawStart() is called from main.js only when:
// currentScreen === "start"
function startScreen() {
  text("Coffee Shop Simulator\nClick to Start", width / 2, height / 2);
}

function handleClicks() {
  if (state === "start") {
    state = "instructions";
  }
}
