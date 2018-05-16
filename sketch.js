let x1, y1, x2, y2

function setup() {
	createCanvas(windowWidth,windowHeight)
	background(211)
	direct_line_drawing(10, 10, 150, 180)
}

function draw() {

}

function direct_line_drawing(x1, y1, x2, y2) {
	let m = (y2 - y1) / (x2 - x1)
	let x = x1, y = y1
	let c = y - (m * x)
	if (abs(m) < 1) {
		while (x <= x2) {
			x = x + 1
			y = (m * x) + c
			point (x, y)
		}
	} else {
		while (y <= y2) {
			y = y + 1
			x = (y - c) / m
			point (x, y)
		}
	}
}
