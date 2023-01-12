//More Moire
//P1xelboy Collab
//January 2023

let varhash = fxrand()
let paperCol
let paperHash = fxrand()
let moireHash = fxrand()
let moireHash2 = fxrand()
let sz = rnd_int(8,14)
let col
let r,g,b

function rnd_btw(min, max) {
    return fxrand() * (max - min) + min;
}

if (moireHash > 0.5) moire = rnd_int(-10,-3)
else moire = rnd_int(3,11)

if (moireHash2 > 0.5) moire2 = rnd_int(-10,-3)
else moire2 = rnd_int(3,11)

if (varhash > 0.50) bg = '#FFFFFF', paperCol = "White"
else bg = '#000000', paperCol = "Black"

function preload() {
  paperCol = window.$fxhashFeatures["Paper Color"]
}

function setup() {
  createCanvas(4200, 4200);
  background(bg)
  noLoop();
  strokeWeight(1);
  noFill()
}

function draw() {
  makeMoire()
  makeMoire2()
  makeCentre()
}

function makeMoire() {
  let angle1 = radians(moire);
  rotate(angle1);
  makeGrid(220,220,0,width*2,width*2)
  rotate(-angle1);
}

function makeMoire2() {
  let angle2 = radians(moire2);
  rotate(angle2);
  makeGrid(0,220,220,width*2,width*2)
  rotate(-angle2);
}

function makeCentre() {
  makeGrid(220,0,220,width,width)
}

function rnd_int(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(fxrand() * (max - min + 1)) + min;
}

window.$fxhashFeatures = {
"Paper Color": paperCol
}

function keyPressed() {
	if (key == "s" || "S") save('Moire.jpeg');
}

function makeGrid(r,g,b,a,e) {
  for (var x=0; x<a; x+=sz) {
     for (var y=0; y<e; y+=sz) {
       if (x/sz%2==0) col = y/sz%2==0 ? 255 : 0;
       else col = (y/sz%2==0) ? 0 : 255;
       fill(r,g,b,col);
       rect(x-width/2,y-height/2,sz);
     }
   }
}
