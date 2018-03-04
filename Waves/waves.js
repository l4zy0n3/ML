function sig( angle){
  return (1/(1+exp(angle*-1)));
}

function setup() {
  createCanvas( PI*200, PI*200);
  background(0);
  noFill();
  strokeWeight(1);
  stroke(255, 80, 0);
  line( width/2, 0, width/2, height);
  line( 0, height/2, width, height/2);
  var baseValue = -TWO_PI;
  var inr = TWO_PI/50;
  stroke(80, 255, 0);
  strokeWeight(3);
  beginShape();
  for (var x = 0; x <= width; x += PI*2) {
    var y = map(sig(baseValue),1,-1,0,height);
    vertex(x,y);
    baseValue += inr;
  } 
  endShape(); 
}

function draw() {
}