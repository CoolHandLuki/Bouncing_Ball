var balls = [];

function setup() {
  // put setup code here
	createCanvas(800,800);
	for (i = 0; i < 15; i++) {
		let size = 40;	
		let position = createVector(size + (50 * i), size + 5);
		let velocity = createVector(3, 6);
		balls.push(new Ball(position, velocity, size));
	}
}

function draw() {
  // put drawing code here
 	background(51);
  
	for (i = 0; i < balls.length; i++) {
		balls[i].move();
		balls[i].show();
	}
}
