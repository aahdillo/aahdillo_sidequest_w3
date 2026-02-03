// ------------------------------------------------------------
// main.js = the “router” (traffic controller) for the whole game
// ------------------------------------------------------------
//
// Idea: this project has multiple screens (start, instructions, game, win, lose).
// Instead of putting everything in one giant file, each screen lives in its own
// file and defines two main things:
//   1) drawX()         → how that screen looks
//   2) XMousePressed() / XKeyPressed() → how that screen handles input
//
// This main.js file does 3 important jobs:
//   A) stores the current screen in a single shared variable
//   B) calls the correct draw function each frame
//   C) sends mouse/keyboard input to the correct screen handler

let state = "start";
let stress = 0;

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  textSize(25);
}

function draw() {
  background("lightblue");
  if (state === "start") startScreen();
  if (state === "instructions") instructionsScreen();
  if (state === "game") gameScreen();
  if (state === "win") winScreen();
  if (state === "lose") loseScreen();
}

function mousePressed() {
  handleClicks();
}

function handleClicks() {
  if (state === "start") state = "instructions";
  else if (state === "instructions") state = "game";
  else if (state === "game") {
    if (mouseX < width / 2) {
      state = "win";
    } else {
      stress += 2;
      state = "lose";
    }
  } else if (state === "win" || state === "lose") {
    stress = ":0";
    state = "start";
  }
}
