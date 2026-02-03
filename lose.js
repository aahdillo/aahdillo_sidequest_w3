// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawLose() → what the lose screen looks like
// 2) input handlers → how the player returns to the start screen

// ------------------------------
// Main draw function for lose screen
// ------------------------------
// drawLose() is called from main.js
// only when currentScreen === "lose"
function loseScreen() {
  text(
    "The manager is not impressed.\nYou're fired.\nStress: " +
      stress +
      "\nClick to restart.",
    width / 2,
    height / 2
  );
}
