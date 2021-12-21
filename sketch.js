var fade;
var fadeAmount = 1

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  background(255);
  //blendMode(LIGHTEST)
  fade = 0
}
function draw() {
  noStroke();
  fill(frameCount%360, 70,100, fade);
  ellipse(random()*windowWidth, random()*windowHeight,50, 50);
  
   if (fade<0) fadeAmount=1; 
 
  if (fade>255) fadeAmount=-10; 
 
  fade += fadeAmount; 
  print(fade)
}