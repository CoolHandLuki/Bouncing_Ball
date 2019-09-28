let balls = [];
let gravity;
let wind;
let friction;

function setup() {
  // put setup code here
	createCanvas(800,800);
	gravity = createVector(0, 0.3);
	friction = 0.95;


	for (let i = 0; i < 20; i++) { let size = random(4, 80);	i
		let position = createVector(size + random(0,width - size), size + random(0, height - size)); 
		// let velocity = createVector(random(-5,5), random(-5,5));
		let velocity = createVector(1,1);
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
		
		// multiply gravity by mass to cancel out the division by mass in applyForce
		let tempGravity = gravity.copy();
		balls[i].applyForce(tempGravity.mult(balls[i].mass));
		if (balls[i].position.y + balls[i].size < height) {
			balls[i].color = [255,255,0];
		} else {
			balls[i].color = [255,255,255];
			balls[i].applyForce(gravity);
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
