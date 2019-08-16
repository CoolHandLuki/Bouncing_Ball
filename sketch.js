let balls = [];
// let myBall = new Ball(createVector(width/2, height/2), createVector(0,0), 80); 

function setup() {
  // put setup code here
	createCanvas(800,800);
	for (let i = 0; i < 8; i++) {
		let size = random(40, 120);	
		let position = createVector(size + random(0,width - size), size + random(0, height - size));
		let velocity = createVector(random(-10,10), random(-10,10));
		balls.push(new Ball(position, velocity, size));
	}
 } 

function draw() {
  // put drawing code here
 	background(51);
	for (let i = 0; i < balls.length; i++) {
		for (let j = i + 1; j < balls.length; j++) {
			//console.log(i, j);
			//console.log(balls[i].isColliding(balls[j]));
			if (balls[i].isColliding(balls[j])) {
				balls[i].velocity.mult(-1);
				balls[j].velocity.mult(-1);
			}
		}
		balls[i].move();
		balls[i].show();
	}
}
