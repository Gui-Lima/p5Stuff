class rainDrop {
	constructor() {
		this.x = random(width);
		this.y = random(-100, -200);
		this.yspeed = random(1, 5);
		//this.color = color(random(255), random(255), random(255));
	}
	fall() {
		this.y = this.y + this.yspeed;
	}
	show() {
		stroke(100, 100, 100);
		//fill(this.color);
		line(this.x, this.y, this.x, this.y + 10);
	}
}

function setup() {
	createCanvas(1080, 720);
	drop1 = new rainDrop();
	drop2 = new rainDrop();
	drop3 = new rainDrop();
	drop4 = new rainDrop();
	drop5 = new rainDrop();
}

function draw() {
	background(230, 230, 260);
	drop1.fall();
	drop1.show();
	drop2.fall();
	drop2.show();
	drop3.fall();
	drop3.show();
	drop4.fall();
	drop4.show();
	drop5.fall();
	drop5.show();
}