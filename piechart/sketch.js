let xc, yc, r
let x1, y1, x2, y2
let diameter, data

function setup() {
	createCanvas(windowWidth,windowHeight)
	background(211)
	midpoint_circle_drawing(500, 350, 250)
	//bresenham_line_drawing(500, 350, 600, 173)
	bresenham_line_drawing(500, 350, 550, 650)
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
		let p = (2 * dy) - dx;
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
		let p = (2 * dx) - dy;
		while (i <= dy) {
			if (p < 0) {
				y = y + 1
				p = p + (2 * dx)
			} else {
				x = x + 1
				y = y + 1
				p = p + (2 * dx) - (2 * dy);
			}
			point(x, y)
			i++;
		}
	}
}

function pie_chart(diameter, data) {
	let lastAngle = 0;
	for (let i = 0; i < data.length; i++) {
	  let gray = map(i, 0, data.length, 0, 255);
	  fill(gray);
	  arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
	  lastAngle += radians(angles[i]);
	}
}

function draw() {

}
