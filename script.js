let canvas = document.getElementById("zombie");
let context = canvas.getContext("2d");
let box = 32;

let zombie = [];

zombie[0] = {
  x: 8 * box,
  y: 8 * box,
};

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

createBg();
createZombie();
