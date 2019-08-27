class Ball {
	constructor(position, velocity, size) {
		this.position = position;
		this.velocity = velocity;
		this.size = size;
	}
	move() {
		checkEdges();
		// move the ball to it's new position by adding velocity to position	
		this.position.add(this.velocity);
	}

	checkEdges() {
		// check for collisions with the canvas boundries 
		if (this.position.x <= 0 + this.size/2 || this.position.x >= width - this.size/2)	{
			this.velocity.x *= -1; 
		} 
	  if (this.position.y <= 0 + this.size/2 || this.position.y >= height - this.size/2) {
			this.velocity.y *= -1;
		} 
	}
	
	show() {
  		ellipse(this.position.x, this.position.y, this.size);
	}

	isColliding(other) {
		let d = this.position.dist(other.position);
		// size equals to the diameter but since position is at the center of the ellipse we need to divive by 2 to get the circles radii
		return (d < this.size / 2 + other.size / 2);
	}
}
