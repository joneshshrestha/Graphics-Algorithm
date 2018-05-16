let x1, y1, x2, y2

function setup() {
	createCanvas(windowWidth,windowHeight)
	background(211)
	//direct_line_drawing(10, 10, 150, 180)
	//DDA_line_drawing(10, 10, 150, 180)
	bresenham_line_drawing(10, 10, 150, 180)
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

function DDA_line_drawing(x1, y1, x2, y2) {
	let dx = x2 - x1
	let dy = y2 - y1
	let stepSize
	if (abs(dy) > abs(dx)) {
		stepSize = dy
	} else {
		stepSize = dx
	}
	let xInc = dx / stepSize
	let yInc = dy / stepSize
	let x = x1, y = y1
	point(x, y)
	while (x < x2 && y < y2) {
		x = x + xInc
		y = y + yInc
		point(x, y)
	}

}

function bresenham_line_drawing(x1, y1, x2, y2) {
	let dx = x2 - x1
	let dy = y2 - y1
	let p = 2 * dy - dx
	let x = x1, y = y1
	let i = 1
	point(x, y)
	while (i <= dx) {
		if (p < 0) {
			x = x + 1
			p = p + 2 * dy
			point(x, y)
			i++
		} else {
			x = x + 1
			y = y + 1
			p = p + (2 * dy) - (2 * dx)
			point(x, y)
			i++
		}	
	}

}