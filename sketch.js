function setup() {
  // put setup code here
  createCanvas(800,800);
  b = new Ball(createVector(40,40), createVector(5,1.5), 40);
  
}

function draw() {
  // put drawing code here
  background(51);
  b.move();
  b.show();
  
//  for (let i = 0; i < 150; i++) {
//    rect(i * 10, i * 10, 40, 40); }
}
