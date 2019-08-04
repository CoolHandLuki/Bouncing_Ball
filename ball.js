class Ball {
	constructor(position, velocity, size) {
		this.position = position;
		this.velocity = velocity;
		this.size = size;
	}
	move() {
		// check for collisions with the canvas boundries 
		if (this.position.x <= 0 + this.size/2 || this.position.x >= width - this.size/2)
			{ this.velocity.x *= -1; } 
	  	if (this.position.y <= 0 + this.size/2 || this.position.y >= height - this.size/2) 			{ this.velocity.y *= -1; } 
		
		// move the ball to it's new position by adding velocity to position	
		this.position.add(this.velocity);
	}
	show() {
  		ellipse(this.position.x, this.position.y, this.size);
	}
}
