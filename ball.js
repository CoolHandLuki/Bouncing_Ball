class Ball {
	constructor(position, _velocity, _size,) {
		this.position = position;
		this.velocity = _velocity;
		this.acceleration = createVector(0,0);
		this.size = floor(_size);
		this.mass = _size; // setting mass equal to size for now
		this.color = [255,255,255]; 
	}

	applyForce(force) {
		this.acceleration.add(force);	
	}

	checkEdges(_friction) {
		// check for collisions with the canvas boundries 
		if (this.position.x < 0 + (this.size / 2))	{
			this.position.x = 0 + (this.size / 2);
			this.velocity.x *= -_friction; 
		} else if (this.position.x > width - this.size/2) {
			this.position.x = width - (this.size / 2);
			this.velocity.x *= -_friction;
		}
	  if (this.position.y < 0 + this.size / 2) {
			this.position.y = 0 + (this.size / 2);
			this.velocity.y *= -_friction;
		} else if (this.position.y > height - this.size / 2) {
			this.position.y = height - (this.size / 2);
			this.velocity.y *= -_friction;
			// let invertAcceleration = createVector(0, this.acceleration.y *= -1);
			// this.applyForce(invertAccelertion);
		}
	}
	
	move(_friction) {
		// move the ball to it's new position by adding velocity to position	
		this.velocity.add(this.acceleration);	
		this.position.add(this.velocity);
		this.floorVector(this.position); 
		this.acceleration *= 0;
		this.checkEdges(_friction);
	}

	show() {
			noStroke();
			fill(this.color);
  		ellipse(this.position.x, this.position.y, this.size);
			stroke(255,0,0);
			line(this.position.x, this.position.y, this.position.x, this.position.y + this.size / 2);
	}

	isColliding(other) {
		let d = this.position.dist(other.position);
		// size equals to the diameter but since position is at the center of the ellipse we need to divive by 2 to get the circles radii
		return (d < this.size / 2 + other.size / 2);
	}

	floorVector(_vector) {
		_vector.x = floor(_vector.x);
		_vector.y = floor(_vector.y);
	}
}
