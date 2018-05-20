function setup() {
	createCanvas(800, 600);
}

function draw() {
	background (211,211,211);
	//for front wall colour brown
	scale(2); //to zoom the canvas
	stroke (0, 0, 0); //to give line it's colour
	fill (0, 0, 255); //to fill colour inside the surface covered by the lines
	rect (100, 200, 200, 75);
	//for side wall colour green;
	stroke (0, 0, 0);
	fill (0, 255, 0);
	rect (45, 200, 55, 75);
	//for roof colour white
	stroke (0, 0, 0);
	fill (255, 255, 255);
	quad(100, 200, 70, 170, 270, 175, 300, 200);
	triangle(45, 200, 69.7, 170, 101, 200);
	//for door and windows colour brown
	stroke (0, 0, 0);
	fill (165, 42, 42);
	rect (60, 230, 20, 45);
	rect (150, 225, 100, 30);
	//loop for window vertical lines
	var x = 170;
	while (x <= 230) {
		line (x, 225, x, 255);
		x = x + 20;
	}
	line (150, 240, 250, 240);

	var w = displayWidth + " * " + displayHeight;
	text(w, 10, 10);
}
