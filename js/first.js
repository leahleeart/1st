let backgroundimage;
let score = 1;
let button;

//images
let tree1;
let tree2;
let solar;
let wind;
let bicycle;

//select
let brushtree1 = false;
let brushtree2 = false;
let brushsolar = false;
let brushwind = false;
let brushbicycle = false;

//mouse
let tree1mouse;
let tree2mouse;
let solarmouse;
let windmouse;
let bicyclemouse;

//XY
let tree1X = [];
let tree1Y = [];

let tree2X = [];
let tree2Y = [];

let solarX = [];
let solarY = [];

let windX = [];
let windY = [];

let bicycleX = [];
let bicycleY = [];

//menu
let menutree1;
let menutree2;
let menusolar;
let menuwind;
let menubicycle;


function preload(){
  //backgound
  backgroundimage = loadImage('images/background1.jpg');

  //images
  tree1 = loadImage("images/tree1.png");
  tree2 = loadImage("images/tree2.png");
  wind = loadImage("images/wind.png");
  solar = loadImage("images/solar.png");
  bicycle = loadImage("images/bicycle.png");

  //mouse images (when pressed)
  tree1mouse = loadImage("images/tree1.png");
  tree2mouse = loadImage("images/tree2.png");
  windmouse = loadImage("images/wind.png");
  solarmouse = loadImage("images/solar.png");
  bicyclemouse = loadImage("images/bicycle.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode (CENTER);
  imageMode(CENTER);

  menutree1 = createImg("images/mtree1.png", "menu tree")
  menutree1.mouseReleased(menutree1print);
  menutree1.position (30,100);

  menutree2 = createImg("images/mtree2.png", "menu tree2")
  menutree2.mouseReleased(menutree2print);
  menutree2.position (30,215);

  menusolar = createImg("images/msolar.png", "menu solar")
  menusolar.mouseReleased(menusolarprint);
  menusolar.position (25,310);

  menuwind = createImg("images/mwind.png", "menu wind")
  menuwind.mouseReleased(menuwindprint);
  menuwind.position (25,430);

  menubicycle = createImg("images/mbicycle.png", "menu wind")
  menubicycle.mouseReleased(menubicycleprint);
  menubicycle.position (30,520);

  button = createButton('End Game');
  button.position(windowWidth/1.15, windowHeight/1.25)
  button.mousePressed(gotolink)
}

function gotolink() {
	window.open('https://leahleeart.github.io/3rd/index');
}

function menutree1print(){
  brushtree1 = true;
  brushtree2 = false;
  brushsolar = false;
  brushwind = false;
  brushbicycle = false;
}

function menutree2print(){
  brushtree1 = false;
  brushtree2 = true;
  brushsolar = false;
  brushwind = false;
  brushbicycle = false;
}

function menusolarprint(){
  brushtree1 = false;
  brushtree2 = false;
  brushsolar = true;
  brushwind = false;
  brushbicycle = false;
}

function menuwindprint(){
  brushtree1 = false;
  brushtree2 = false;
  brushsolar = false;
  brushwind = true;
  brushbicycle = false;
}

function menubicycleprint(){
  brushtree1 = false;
  brushtree2 = false;
  brushsolar = false;
  brushwind = false;
  brushbicycle = true;
}


function draw() {
  //background image settings
  background(backgroundimage, 0,0);
  imageMode(CORNERS);
  background(backgroundimage, 0,0);

  imageMode(CENTER);
  rectMode(CENTER);

  fill(0, 0, 0);
  noStroke ();
  textAlign (LEFT);
  textSize(18);
  textFont('Roboto');
  text("Annual global CO2 emission (in tons): " + score, 30, 50);
    if(score > 0){
      score ++;
    }

  fill(0, 0, 0);
  noStroke ();
  textAlign (RIGHT, CENTER);
  textSize(16);
  text('Press X to deselect', windowWidth/1.1, 50);
  text('Press ESC to restart', windowWidth/1.1, 75);
  text('Press S to take a screenshot', windowWidth/1.1, 100);

  textSize (14);
  fill(38,105,116);
  if(dist(mouseX, mouseY, windowWidth/1.1, windowHeight/1.25) < 50){
  fill(0,0,0);
}
  // noStroke ();
  // rect(windowWidth/1.1, windowHeight/1.25, 100, 55, 20);
  // fill(0, 0, 0);
  // textSize(16);
//
//   if(dist(mouseX, mouseY, windowWidth/1.1, windowHeight/1.25) < 50){
// }
//   noStroke ();
//   textAlign(CENTER, CENTER);
//   fill(225,225,225);
//   text('End Game', windowWidth/1.1, windowHeight/1.25);
//

  if(brushtree1 == true){
    image(tree1mouse, mouseX, mouseY);

}

  for (let i = 0; i < tree1X.length; i++) {
    image(tree1, tree1X[i], tree1Y[i]);
}


if(brushtree2 == true){
  image(tree2mouse, mouseX, mouseY);
}

for (let i = 0; i < tree2X.length; i++) {
    image(tree2, tree2X[i], tree2Y[i]);
}


if(brushsolar == true){
  image(solarmouse, mouseX, mouseY);
}

for (let i = 0; i < solarX.length; i++) {
    image(solar, solarX[i], solarY[i]);
}

if(brushwind == true){
  image(windmouse, mouseX, mouseY);
}

for (let i = 0; i < windX.length; i++) {
    image(wind, windX[i], windY[i]);
}

if(brushbicycle == true){
  image(bicyclemouse, mouseX, mouseY);
}

for (let i = 0; i < bicycleX.length; i++) {
    image(bicycle, bicycleX[i], bicycleY[i]);
}

if(dist(mouseX, mouseY, 40, 150) < 70){
textSize (16);
fill(249,253,201);
noStroke ();
rect(windowWidth/2, 80, 600, 55, 20);
fill(0, 0, 0);
noStroke ();
textAlign(CENTER, CENTER);
text('A mature tree absorbs carbon dioxide at a rate of 48 pounds per year. (0.021 t.)', windowWidth/2, 80);
}

if(dist(mouseX, mouseY, 40, 290) < 70){
textSize (16);
fill(249,253,201);
noStroke ();
rect(windowWidth/2, 80, 600, 55, 20);
fill(0, 0, 0);
noStroke ();
textAlign(CENTER, CENTER);
text('A mature tree absorbs carbon dioxide at a rate of 48 pounds per year. (0.021 t.)', windowWidth/2, 80);
}

if(dist(mouseX, mouseY, 40, 410) < 70){
textSize (16);
fill(249,253,201);
noStroke ();
rect(windowWidth/2, 80, 600, 55, 20);
fill(0, 0, 0);
noStroke ();
textAlign(CENTER, CENTER);
text('Solar Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod', windowWidth/2, 80);
}

if(dist(mouseX, mouseY, 40, 530) < 70){
textSize (16);
fill(249,253,201);
noStroke ();
rect(windowWidth/2, 80, 600, 55, 20);
fill(0, 0, 0);
noStroke ();
textAlign(CENTER, CENTER);
text('Wind Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod', windowWidth/2, 80);
}

if(dist(mouseX, mouseY, 40, 630) < 70){
textSize (14);
fill(249,253,201);
noStroke ();
rect(windowWidth/2, 80, 600, 55, 20);
fill(0, 0, 0);
noStroke ();
textAlign(CENTER, CENTER);
text('Bicycle Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod', windowWidth/2, 80);

}
}

function mousePressed(){

  if(brushtree1 == true && mouseX > 100){
			tree1X.push(mouseX);
		  tree1Y.push(mouseY);
      score -= 0.021;;
  }

  if(brushtree2 == true && mouseX > 100){
			tree2X.push(mouseX);
		  tree2Y.push(mouseY);
      score -= 0.021;;
  }

  if(brushsolar == true && mouseX > 100){
			solarX.push(mouseX);
		  solarY.push(mouseY);
      score -= 0.021;;
  }

  if(brushwind == true && mouseX > 100){
			windX.push(mouseX);
		  windY.push(mouseY);
      score -= 0.021;;
  }

  if(brushbicycle == true && mouseX > 100){
      bicycleX.push(mouseX);
      bicycleY.push(mouseY);
      score -= 0.021;;
  }


}

function keyPressed(){
if(key == 'Escape') {
  tree1X.splice(0, tree1X.length);
  tree1Y.splice(0, tree1Y.length);

  tree2X.splice(0, tree2X.length);
  tree2Y.splice(0, tree2Y.length);

  solarX.splice(0, solarX.length);
  solarY.splice(0, solarY.length);

  windX.splice(0, windX.length);
  windY.splice(0, windY.length);

  bicycleX.splice(0, bicycleX.length);
  bicycleY.splice(0, bicycleY.length);
  }

if(key == 'x') {
    cursor();
    brushtree1=false;
    brushtree2=false;
    brushsolar=false;
    brushwind=false;
    brushbicycle=false;
  }

  if (key == 's') {
    save('myCanvas.png');
}
}
