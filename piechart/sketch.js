let xc, yc, r
let x1, y1, x2, y2

function setup() {
	createCanvas(windowWidth,windowHeight)
	background(211)
	stroke(0, 0, 0)
	midpoint_circle_drawing(500, 350, 250)
	stroke(0, 0, 255)
	bresenham_line_drawing(500, 350, 650, 153)
	stroke(255, 0, 0)
	bresenham_line_drawing(500, 350, 450, 595)
	stroke(0, 255, 0)
	bresenham_line_drawing(500, 350, 255, 300)
}

function midpoint_circle_drawing(xc, yc, r) {
	let x = 0, y = r
	let p
	point(x + xc, y + yc)
	if (Number.isInteger) {
		p = 1 - r
	} else {
		p = (5/4) - r
	}
	while (x <= y) {
		if (p < 0) {
			x = x + 1
			p = p + (2 * x) + 1
		} else {
			x = x + 1
			y = y - 1
			p = p + (2 * x) - (2 * y) + 1
		}
		point(x + xc, y + yc)
		point(-x + xc, y + yc)
		point(x + xc, -y + yc)
		point(-x + xc, -y + yc)
		point(y + xc, x + yc)
		point(-y + xc, x + yc)
		point(y + xc, -x + yc)
		point(-y + xc, -x + yc)
	}
}

function bresenham_line_drawing(x1, y1, x2, y2) {
	let m = (y2 - y1) / (x2 - x1)
	let dx = abs(x2 - x1)
	let dy = abs(y2 - y1)
	let x = x1, y = y1
	let i = 1
	point(x, y)
	if (abs(m) < 1) {
		let p = (2 * dy) - dx
		while (i <= dx) {
			if (p < 0) {
				x = x + 1
				p = p + (2 * dy)
			} else {
				x = x + 1
				y = y + 1
				p = p + (2 * dy) - (2 * dx)
			}
			point(x, y)
			i++
		}
	} else { 
		let p = (2 * dx) - dy
		while (i <= dy) {
			if (p < 0) {
				y = y + 1
				p = p + (2 * dx)
			} else {
				x = x + 1
				y = y + 1
				p = p + (2 * dx) - (2 * dy)
			}
			point(x, y)
			i++
		}
	}
}

function draw() {

}
