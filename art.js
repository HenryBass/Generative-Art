var gap = Math.random() * 100 + 5;
var x = 0;
var y = 0;
var strokeMult = Math.random() * 10 + 1;
var varriedStroke =  Math.random() >= 0.5;

function rbool() {
  n = Math.random();

  if (n <= 0.33) {
    n = 1;
  } else if (n <= 0.66) {
    n = 0;
  } else if (n <= 1) {
    n = -1;
  }
  
  return n;
}

class Shape {
  constructor(x, y) {

    this.x = rbool();
    this.y = rbool();

  }
}

var shapes = [new Shape(), new Shape(), new Shape(), new Shape()];

function setup() {
  var width = displayWidth;
  var height = displayHeight;
  createCanvas(width, height)
  background(Math.random() * 255, Math.random() * 255, Math.random() * 255);
  strokeWeight(Math.random() * strokeMult);

}

function draw() {

  while (y < height) {

  if(varriedStroke){
    strokeWeight(Math.random() * strokeMult);
    }

  let shape = shapes[Math.round(Math.random() * 4)];
  try {
    line(x, y, x + (gap * shape.x), y + (gap * shape.y));
  } catch (error) {

  }


  if(x >= width){
    y += gap;
    x = 0;
  } else{
    x += gap;
  }

  }

}
