let x1, y1, x2, y2
let xc, yc, r
let rx, ry
let tx, ty

function setup() {
	createCanvas(windowWidth,windowHeight)
	background(211)
	//direct_line_drawing(10, 10, 150, 180)
	//DDA_line_drawing(10, 10, 150, 180)
	//bresenham_line_drawing(10, 10, 150, 180)
	//cartesian_circle_drawing(300, 200, 200)
	//polar_circle_drawing(300, 200, 200)
	//midpoint_circle_drawing(300, 200, 200)
	//cartesian_ellipse_drawing(300, 300, 100, 200)
	//polar_ellipse_drawing(300, 300, 100, 200)
	//midpoint_ellipse_drawing(300, 300, 100, 200)
	translation(30, 75, 58, 20, 86, 75, 100, 100)
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
	let m = (y2 - y1) / (x2 - x1)
	let dx = x2 - x1
	let dy = y2 - y1
	let x = x1, y = y1
	let i = 1
	point(x, y)
	if (abs(m) < 1) {
		let p = 2 * dy - dx
		while (i <= abs(dx)) {
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
	} else { 
		let p = 2 * dx - dy
		while (i <= abs(dy)) {
			if (p < 0) {
				y = y + 1
				p = p + 2 * dx
				point(x, y)
				i++
			} else {
				x = x + 1
				y = y + 1
				p = p + (2 * dx) - (2 * dy)
				point(x, y)
				i++
			}	
		}
	}
}

function cartesian_circle_drawing(xc, yc, r) {
	let x = 0, y = r
	point(x + xc, y + yc)
	while (x <= y) {	//upto x = y line
		x = x + 1
		y = Math.sqrt((r * r) - (x * x))
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

function polar_circle_drawing(xc, yc, r) {
	let theta = 0
	while (theta <= (2 * Math.PI)) {
		x = xc + r * Math.cos(theta)
		y = yc + r * Math.sin(theta)
		theta = theta + (Math.PI/180)
		console.log(theta)
		point(x, y)
	}
}

function midpoint_circle_drawing(xc, yc, r) {
	let x = 0, y = r
	let p
	point(x + xc, y + yc)
	if (Number.isInteger(r)) {
		p = 1 - r
	} else {
		p = (5 / 4) - r
	}
	while (x <= y) {
		if (p < 0) {
			x = x + 1
			p = p + 2 * x + 1
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

function cartesian_ellipse_drawing(xc, yc, rx, ry) {
	//1st region
	let x1 = 0, y1 = ry
	while (rx*rx*y1 >= ry*ry*x1) {
		point(x1 + xc, y1 + yc)
		point(-x1 + xc, y1 + yc)
		point(x1 + xc, -y1 + yc)
		point(-x1 + xc, -y1 + yc)
		x1 = x1 + 1
		y1 = (1/rx) * Math.sqrt(rx*rx*ry*ry - ry*ry*x1*x1)	
	}
	//2nd region
	let x2 = rx, y2 = 0
	while (rx*rx*y2 <= ry*ry*x2) {
		point(x2 + xc, y2 + yc)
		point(-x2 + xc, y2 + yc)
		point(x2 + xc, -y2 + yc)
		point(-x2 + xc, -y2 + yc)
		x2 = (1/ry) * Math.sqrt(rx*rx*ry*ry - rx*rx*y2*y2)
		y2 = y2 + 1		
	}
}

function polar_ellipse_drawing(xc, yc, rx, ry) {
	let theta = 0
	while (theta <= 2 * Math.PI) { 
		x = xc + rx * Math.cos(theta)
		y = yc + ry * Math.sin(theta)
		theta = theta + Math.PI/180
		point(x, y)
	}
}

function midpoint_ellipse_drawing(xc, yc, rx, ry) {
	let x = 0, y = ry
	point(x + xc, y + yc)
	point(-x + xc, y + yc)
	point(x + xc, -y + yc)
	point(-x + xc, -y + yc)
	let p1, p2
	// for region 1
	p1 = (ry * ry) - (rx * rx * ry)+ (0.25 * rx * rx)
	while ((2 * ry * ry * x) <= (2 * rx * rx * y)) {
		if (p1 < 0) {
			x = x + 1
			p1 = p1 + (2 * ry * ry * x) + (ry * ry) 
		} else {
			x = x + 1
			y = y - 1
			p1 = p1 + (2 * ry * ry * x) - (2 * rx * rx * y) + (ry * ry)
		}
		point(x + xc, y + yc)
		point(-x + xc, y + yc)
		point(x + xc, -y + yc)
		point(-x + xc, -y + yc)
	}
	// for region 2
	p2 = ((x + 0.5) * (x + 0.5) * ry * ry) + ((y - 1) * (y - 1) * rx * rx) - (rx * rx * ry * ry)
	while (y != 0) {
		if (p2 > 0) {
			y = y - 1
			p2 = p2 - (2 * y * rx * rx) + (rx * rx) 
		} else {
			x = x + 1
			y = y - 1
			p2 = p2 - (2 * y * rx * rx) + (2 * x * ry * ry) + (rx * rx)  
		}
		point(x + xc, y + yc)
		point(-x + xc, y + yc)
		point(x + xc, -y + yc)
		point(-x + xc, -y + yc)
	}
}

function translation(x1, y1, x2, y2, x3, y3, tx, ty) {
	triangle(x1, y1, x2, y2, x3, y3)
	x1 = x1 + tx
	y1 = y1 + ty
	x2 = x2 + tx
	y2 = y2 + ty
	x3 = x3 + tx 
	y3 = y3 + ty
	triangle(x1, y1, x2, y2, x3, y3)
}