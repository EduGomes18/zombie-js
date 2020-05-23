let canvas = document.getElementById("zombie");
let context = canvas.getContext("2d");

let map = document.getElementById("map");
let mapContext = map.getContext("2d");

let box = 32;

let zombie = [];

zombie[0] = {
  x: 8 * box,
  y: 8 * box,
};

let zombieTest = [];

zombieTest[0] = {
  x: 10 * box,
  y: 10 * box,
};

let direction = "right";

let corpse = {
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box,
};

let srcX;
let srcY;
let sheetWidth = 210;
let sheetHeight = 42;

let cols = 4;
let rows = 1;

let framWidth = sheetWidth / cols;
let framHeight = sheetHeight / rows;

let currentFrame = 0;

/**
 * depois de declarar as variaveis passando o tanto de colunas e
 * linhas, utilizamos a formula que consiste em dividir o frame atual pelo numero total de colunas,
 **/

let newZombie = new Image();
newZombie.src = "zombie_01.png";

function updateFrame(x, y) {
  currentFrame = ++currentFrame % cols;
  srcX = currentFrame * framWidth;
  srcY = 0;

  mapContext.clearRect(0, 0, framWidth, framHeight);
}

function timer(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

function drawZombie() {
  let i = 0;
  do {
    task(i);
    i++;
  } while (i < zombieTest.lenght && zombieTest[0].x !== zombieTest[i].x);
}

// function drawZombie() {
//   for (let i = 0; i < zombieTest.length; i++) {
//     task(i);
//   }
// }

function task(i) {
  setTimeout(function () {
    updateFrame(zombieTest[i].x - 22, zombieTest[i].y - 64);
    mapContext.drawImage(
      newZombie,
      srcX,
      srcY,
      framWidth,
      framHeight,
      zombieTest[i].x,
      zombieTest[i].y,
      framWidth,
      framHeight
    );
  }, i * 10000);
}

function createBg() {
  context.fillStyle = "#f1f";
  context.fillRect(0, 0, 16 * box, 16 * box);
}

function createZombie() {
  for (i = 0; i < zombie.length; i++) {
    context.fillStyle = "green";
    context.fillRect(zombie[i].x, zombie[i].y, box, box);
  }
}

function drawCorpse() {
  context.fillStyle = "red";
  context.fillRect(corpse.x, corpse.y, box, box);
}

document.addEventListener("keydown", update);

function update() {
  if (event.keyCode === 37 && direction !== "right") direction = "left";
  if (event.keyCode === 38 && direction !== "down") direction = "up";
  if (event.keyCode === 39 && direction !== "left") direction = "right";
  if (event.keyCode === 40 && direction !== "up") direction = "down";
}

function gameStart() {
  if (zombie[0].x > 15 * box && direction === "right") zombie[0].x = 0;
  if (zombie[0].x < 0 && direction === "left") zombie[0].x = 16 * box;
  if (zombie[0].y > 15 * box && direction === "down") zombie[0].y = 0;
  if (zombie[0].y < 0 && direction === "up") zombie[0].y = 16 * box;

  // if (zombieTest[0].x > 15 * box && direction === "right") zombieTest[0].x = 0;
  // if (zombieTest[0].x < 0 && direction === "left") zombieTest[0].x = 16 * box;
  // if (zombieTest[0].y > 15 * box && direction === "down") zombieTest[0].y = 0;
  // if (zombieTest[0].y < 0 && direction === "up") zombieTest[0].y = 16 * box;

  // for (i = 1; i < zombie.length; i++) {
  //   if (zombie[0].x === zombie[i].x && zombie[0].y === zombie[i].y) {
  //     clearInterval(game);
  //     alert("Game over D:");
  //   }
  // }

  createBg();
  // createZombie();
  drawCorpse();
  drawZombie();

  let zombieX = zombie[0].x;
  let zombieY = zombie[0].y;

  let zombieXTeste = zombieTest[0].x;
  let zombieYTeste = zombieTest[0].y;

  if (direction === "right") zombieX += box;
  if (direction === "left") zombieX -= box;
  if (direction === "down") zombieY += box;
  if (direction === "up") zombieY -= box;

  // if (direction === "right") zombieXTeste += box;
  // if (direction === "left") zombieXTeste -= box;
  // if (direction === "down") zombieYTeste += box;
  // if (direction === "up") zombieYTeste -= box;

  // if (zombieX !== corpse.x || zombieY !== corpse.y) {
  //   zombie.pop();
  // } else {
  //   corpse.x = Math.floor(Math.random() * 15 + 1) * box;
  //   corpse.y = Math.floor(Math.random() * 15 + 1) * box;
  // }

  // if (zombieXTeste !== corpse.x || zombieYTeste !== corpse.y) {
  //   zombieTest.pop();
  // } else {
  //   corpse.x = Math.floor(Math.random() * 15 + 1) * box;
  //   corpse.y = Math.floor(Math.random() * 15 + 1) * box;
  // }

  // zombieTest.pop();

  let newZombie = {
    x: zombieX,
    y: zombieY,
  };

  let newZombieTeste = {
    x: zombieXTeste,
    y: zombieYTeste,
  };

  zombie.unshift(newZombie);

  // zombieTest.unshift(newZombieTeste);
}

let game = setInterval(gameStart, 100);
