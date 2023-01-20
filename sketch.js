
let canvas; 
let numOfCircles = 0;
let clicks = 0;

function setup() {
  canvas = createCanvas(400, 400);
  canvas.mouseClicked(checkClick);
}

function draw() {
  background(220);
  if (numOfCircles < 1000) {
    let x = random(width);
    let y = random(height);
    let diameter = random(50);
    let r = random(255);
    let g = random(255);
    let b = random(255);
    let alpha = random(80, 120);

    fill(r, g, b, alpha);
    ellipse(x, y, diameter);

    numOfCircles++;
  }
}

function checkClick() {
  if (dist(mouseX, mouseY, x, y) < diameter / 2) {
    clicks++;
    document.getElementById("clicks").innerHTML = clicks;
  }
}


