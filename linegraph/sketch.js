let x;
let y;

function setup() {
createCanvas(windowWidth,windowHeight);
background(211);
//for y-axis
x = 100;
y = 100;
let x1 = 100;
let y1 = 140;
let x2 = 100;
let y2 = 650;
drawline(x1, y1, x2, y2);
textSize(13);
text('sales', 20, 350);
text('(in millions)', 5, 370);
//for x-axis
x = 100;
y = 610;
let x3 = -50;
let y3 = 700;
let x4 = 700;
let y4 = 700;
drawline(x3, y3, x4, y4);
textSize(13);
text('months', 400, 660);
//for vertical dashes
x = 95;
y = 560;
let x5 = 100;
let y5 = 700;
let x6 = 110;
let y6 = 700;
var i = 0;
var a = 615;
while (y >= 100) {
drawline(x5, y5, x6, y6);
textSize(13);
text(i, 80, a = a - 50);
i = i + 1;
y = y - 50;
x = 95;
}
//for horizontal dashes
x = 150;
y = 605;
let x7 = 700;
let y7 = 100;
let x8 = 700;
let y8 = 110;
var i = 0;
var a = 83;
var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
while (x <= 850) {
drawline(x7, y7, x8, y8);
textSize(13);
text(month[i], a = a + 60, 630);
i = i + 1;
x = x + 60;
y = 605;
}
//for Jan - Feb
x = 200;
y = 470;
let x9 = 90;
let y9 = 130;
let x10 = 140;
let y10 = 40;
drawline(x9, y9, x10, y10);
//for Feb - Mar
x = 200;
y = 470;
let x11 = 90;
let y11 = 130;
let x12 = 160;
let y12 = 110;
drawline(x11, y11, x12, y12);
//for Mar - Apr
x = 330;
y = 360;
let x13 = 90;
let y13 = 130;
let x14 = 150;
let y14 = 40;
drawline(x13, y13, x14, y14);
//for Apr - May
x = 330;
y = 360;
let x15 = 90;
let y15 = 130;
let x16 = 30;
let y16 = 40;
drawline(x15, y15, x16, y16);
//for May - Jun
x = 450;
y = 360;
let x17 = 90;
let y17 = 130;
let x18 = 150;
let y18 = 40;
drawline(x17, y17, x18, y18);
//for Jun - Jul
x = 450;
y = 360;
let x19 = 100;
let y19 = 170;
let x20 = 160;
let y20 = 155;
drawline(x19, y19, x20, y20);
//for Jul - Aug
x = 570;
y = 255;
let x21 = 90;
let y21 = 130;
let x22 = 150;
let y22 = 40;
drawline(x21, y21, x22, y22);
//for Aug - Sep
x = 570;
y = 255;
let x23 = 100;
let y23 = 170;
let x24 = 160;
let y24 = 155;
drawline(x23, y23, x24, y24);
//for Sep - Oct
x = 630;
y = 240;
let x25 = 90;
let y25 = 130;
let x26 = 30;
let y26 = 40;
drawline(x25, y25, x26, y26);
//for Oct - Nov
x = 750;
y = 240;
let x27 = 90;
let y27 = 130;
let x28 = 150;
let y28 = 40;
drawline(x27, y27, x28, y28);
//for Nov - Dec
x = 750;
y = 240;
let x29 = 90;
let y29 = 130;
let x30 = 160;
let y30 = 110;
drawline(x29, y29, x30, y30);
}


function drawline(x1, y1, x2, y2) {
let dx = x2 - x1;
let dy = y2 - y1;
let stepsize;
let Xinc = 0;
let Yinc = 0;
if (Math.abs(dx) > Math.abs(dy)) {
stepsize = dx;
} else {
stepsize = dy;
}
Xinc = dx / stepsize;
Yinc = dy / stepsize;
for(var i = 0; i < Math.abs(stepsize); i++) {
x = x + Xinc;
y = y + Yinc;
point(x, y);
}
}
