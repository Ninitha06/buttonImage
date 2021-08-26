var backgroundImg, option1, option2, backgroundImg1, backgroundImg2, interval;
var chosenChar = "harry";
var gameState = "start";

var displayMsg = false;

var countDown,
  countDownValue = 5;

var button;

function preload() {
  backgroundImg2 = loadImage("hogwarts2.png");
  backgroundImg1 = loadImage("hogwarts.jpg");
}

function setup() {
  createCanvas(800, 400);
  backgroundImg = backgroundImg2;
  option1 = createImg("tile004.png", () => {
    option1.size(150, 150);
  });
  option1.position(100, 100);
  option2 = createImg("ducking4.png", () => {
    option2.size(150, 150);
  });
  option2.position(500, 100);
  button = createButton("Play");
  button.position(350, 150);
  button.class("customButton");

  countDown = createElement("h1");
  countDown.position(400, 50);
  countDown.class("countDown");
}

function draw() {
  background(backgroundImg);

  option1.mousePressed(() => {
    option1.class("addBorder");
    option2.class("noBorder");
    chosenChar = "harry";
  });

  option2.mousePressed(() => {
    option2.class("addBorder");
    option1.class("noBorder");
    chosenChar = "ginny";
  });

  if (displayMsg) {
    countDown.html(countDownValue);
  }

  if (countDownValue === 0) {
    countDown.hide();
    gameState = "play";
    backgroundImg = backgroundImg1;
  }

  button.mousePressed(() => {
    option1.hide();
    option2.hide();
    displayMsg = true;
    button.hide();
    functionInitated = true;
    setTimeout(countDownTicks, 1000);
  });
  drawSprites();
}

function countDownTicks() {
  countDownValue = countDownValue - 1;
  if (countDownValue > 0) setTimeout(countDownTicks, 1000);
}
