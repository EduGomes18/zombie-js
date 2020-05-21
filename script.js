let canvas = document.getElementById("zombie");
let context = canvas.getContext("2d");
let box = 32;

let zombie = [];

zombie[0] = {
  x: 8 * box,
  y: 8 * box,
};

let direction = "right";

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

function gameStart() {
  createBg();
  createZombie();

  let zombieX = zombie[0].x;
  let zombieY = zombie[0].y;

  if (direction === "right") zombieX += box;
  if (direction === "left") zombieX -= box;
  if (direction === "down") zombieY += box;
  if (direction === "up") zombieY -= box;

  zombie.pop();

  let newZombie = {
    x: zombieX,
    y: zombieY,
  };

  zombie.unshift(newZombie);
}

let game = setInterval(gameStart, 100);
