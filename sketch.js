//More Moire
//P1xelboy Collab with Pablo Alpe
//January 2023

let varhash = fxrand()
let colHash = fxrand()
let paperCol
let paletteHash = fxrand()
let moireHash = fxrand()
let moireHash2 = fxrand()
let moireHash3 = fxrand()
let sz = rnd_int(18,32)
let col
let r,g,b
let cl=[];
let pal;
let typeHash = fxrand()
let type

if (typeHash > 0.75) type = "Square"
else if (typeHash > 0.5) type = "Circle"
else if (typeHash > 0.25) type = "Vertical Strips"
else type = "Horizontal Strips"

if (colHash > 0.8) cl[0]=[227,232,234], cl[1]=[192,192,192], cl[2]=[155,168,174], cl[3]=[112,122,126], cl[4]=[73,80,84], pal="Monochrome"
else if (colHash > 0.6) cl[0]=[155,136,22], cl[1]=[249,137,72], cl[2]=[93,58,0], cl[3]=[104,78,50], cl[4]=[249,234,154], pal="Seventies"
else if (colHash > 0.4) cl[0]=[185,227,198], cl[1]=[89,201,165], cl[2]=[216,30,91], cl[3]=[35,57,91], cl[4]=[255,253,152], pal="Dali"
else if (colHash > 0.2) cl[0]=[61,50,126], cl[1]=[209,245,255], cl[2]=[120,227,253], cl[3]=[52,246,242], cl[4]=[125,83,222], pal="Jazz"
else cl[0]=[120,1,22], cl[1]=[247,181,56], cl[2]=[219,124,38], cl[3]=[216,87,42], cl[4]=[195,47,39], pal="Flames"

let newCl = shuffle(cl)

if (moireHash > 0.5) moire = rnd_int(-12,-4)
else moire = rnd_int(4,12)

if (moireHash2 > 0.5) moire2 = rnd_int(-12,-4)
else moire2 = rnd_int(4,12)

if (moireHash3 > 0.5) moire3 = rnd_int(-12,-4)
else moire3 = rnd_int(4,12)

if (varhash > 0.50) bg = '#FFFFFF', paperCol = "White"
else bg = '#000000', paperCol = "Black"

function preload() {
  paperCol = window.$fxhashFeatures["Paper Color"]
  pal = window.$fxhashFeatures["Palette"]
  type = window.$fxhashFeatures["Arrangement Type"]
}

function setup() {
  createCanvas(4200, 4200);
  background(bg)
  noLoop();
  noFill()
  noStroke()
  ellipseMode(CORNER);
}

function draw() {
  makeMoire()
  if (type == "Square") rect(700,700,2800,2800)
  else if (type == "Circle") ellipse(700,700,2800,2800)
  else if (type == "Horizontal Strips") doubleRectH()
  else if (type == "Vertical Strips") doubleRectV()
  makeMoire2()
  makeMoire3()
}

function makeMoire() {
  let angle1 = radians(moire);
  rotate(angle1);
  makeGrid(newCl[0],width*2,width*2)
  rotate(-angle1);
}

function makeMoire2() {
  let angle2 = radians(moire2);
  rotate(angle2);
  makeGrid(newCl[1],width*2,width*2)
  rotate(-angle2);
}

function makeMoire3() {
  let angle3 = radians(moire3);
  rotate(angle3);
  makeGrid(newCl[2],width*2,width*2)
  rotate(-angle3);
}

window.$fxhashFeatures = {
"Paper Color": paperCol,
"Palette": pal,
"Arrangement Type": type
}

function keyPressed() {
	if (key == "s" || "S") save('Moire.png');
}

function makeGrid(r,a,e) {
  console.log(r)
  for (var x=0; x<a; x+=sz) {
     for (var y=0; y<e; y+=sz) {
       if (x/sz%2==0) col = y/sz%2==0 ? 255 : 0;
       else col = (y/sz%2==0) ? 0 : 255;
       fill(r[0],r[1],r[2],col);
       rect(x-width/2,y-height/2,sz);
     }
   }
}

function doubleRectV() {
  rect(800,700,1100,2800)
  rect(2300,700,1100,2800)
}

function doubleRectH() {
  rect(700,800,2800,1100)
  rect(700,2300,2800,1100)
}

function rnd_int(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(fxrand() * (max - min + 1)) + min;
}

function shuffle(o) {
      for(var j, x, i = 5, o = o.slice(); i; j = Math.floor(fxrand() * i), x = o[--i], o[i] = o[j], o[j] = x);
      console.log(j)
      return o;
}
