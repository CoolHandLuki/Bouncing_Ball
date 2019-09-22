let balls = [];
let gravity;
let wind;
let friction;

function setup() {
  // put setup code here
	createCanvas(600,600);
	gravity = createVector(0, 01);
	friction = 0.9;


	for (let i = 0; i < 2; i++) {
		let size = random(40, 80);	
		let position = createVector(size + random(0,width - size), size + random(0, height - size));
		let velocity = createVector(random(-5,5), random(-5,5));
		balls.push(new Ball(position, velocity, size));
	}
 } 

function draw() {
  // put drawing code here
 	background(51);

	for (let i = 0; i < balls.length; i++) {
		for (let j = i + 1; j < balls.length; j++) {
			 if (balls[i].isColliding(balls[j])) {
			 	balls[i].velocity.mult(-friction);
			 	balls[j].velocity.mult(-friction);
			 }
		}
		if (balls[i].position.y > (height - (balls[i].size) / 2) + 5) {
			balls[i].color = [255,255,0];
		} else {
			balls[i].color = [255,255,255];
			// balls[i].applyForce(gravity);
			balls[i].acceleration = gravity;
		}
	//	if (floor(balls[i].position.y) == 300) {
	//		console.log('Ball is at: ', floor(balls[i].position.y));
	//		balls[i].setColor([0,255,0]);
	//		balls[i].applyForce(gravity);
	//		}
	//	else {
	//		balls[i].setColor([125, 125, 0]);
	//	}
		// console.log(floor(balls[i].position.y));
		balls[i].move(friction);
		balls[i].show();
	}
}
