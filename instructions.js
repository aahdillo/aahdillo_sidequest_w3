// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawInstr() → what the instructions screen looks like
// 2) input handlers → how the player returns to the start screen
// 3) helper functions specific to this screen

// ------------------------------
// Main draw function for instructions screen
// ------------------------------
// drawInstr() is called from main.js
// only when currentScreen === "instr"
function instructionsScreen() {
  text(
    "Make choices to survive your first shift!\nClick to continue.",
    width / 2,
    height / 2
  );
}
