//logo starting point
let x;
let y;

//logo speed
let xspeed;
let yspeed;

//logo
let dvd;
let dvdWidth = 80;
let dvdHeight = 80;

//logo colors
let currentColor;
let colors;

//michael
let michael;
let michaelWidth = 250;
let michaelHeight = 250;

//andy
let andy;
let andyWidth;
let andyHeight;

//image loading and random colors
function preload() {
  dvd = loadImage("dvd.svg");
  colors = ["blue", "red", "green", "violet"];
  currentColor = random(colors);
  michael = loadImage("faces/michael_win.png");
  andy = loadImage("faces/andy.png");
}

function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
  andyWidth = 100;
  andyHeight = 100;
  x = 600;
  y = 200;
  xspeed = 2;
  yspeed = -2;
}

function draw() {
  background(0);

  push();
  imageMode(CENTER);
  translate(width / 2, height / 2);
  rotate(frameCount * 2);
  scale(sin(frameCount));
  image(andy, 0, 0, andyWidth, andyHeight);
  textSize(20);
  textAlign(CENTER);
  fill(255, 255, 255);
  textFont("AmericanTypewriter");
  text("AAAH! COME ON!!", 10, 70);
  pop();

  push();
  noStroke();
  fill(currentColor);
  rect(x, y, dvdWidth, dvdHeight);
  image(dvd, x, y, dvdWidth, dvdHeight);
  x = x + xspeed;
  y = y + yspeed;

  if (x + dvdWidth >= width || x <= 0) {
    xspeed = -xspeed;
    currentColor = random(colors);
  }

  if (y + dvdHeight >= height || y <= 0) {
    yspeed = -yspeed;
    currentColor = random(colors);
  }
  pop();

  if (
    (x == 0 && y == 0) ||
    (x + dvdWidth == 800 && y == 0) ||
    (x + dvdWidth == 800 && y + dvdHeight == 600) ||
    (x == 0 && y + dvdHeight == 600)
  ) {
    winGame();
  }
}

function winGame() {
  background(0);
  push();
  imageMode(CENTER);
  translate(400, 250);
  image(michael, 0, 0, michaelWidth, michaelHeight);
  pop();

  push();
  textSize(32);
  textAlign(CENTER);
  fill(255, 255, 255);
  textFont("AmericanTypewriter");
  text("Some days I'm just ON FIRE!", 400, 425);
  pop();
  noLoop();
}
