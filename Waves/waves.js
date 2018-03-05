function sig( x){
  return (1/(1+exp(-x)));
}

function func( x){
  return (x**2+2*x+3);
}

function setup() {
  createCanvas( 800, 600);
  background(0);
  noFill();
  strokeWeight(1);
  stroke(255, 80, 0);
  line( width/2, 0, width/2, height);
  line( 0, height/2, width, height/2);
  line( 1, 0, 1, height);
  stroke(80, 255, 0);
  strokeWeight(3);
  translate( width/2, height/2);
  beginShape();
  for( var x = -width/2; x <= width/2; x += width/128){
    var y = map( tan(x*PI/360), 10, -10, -height/2, height/2);
    vertex( x, y);
  }
  endShape();
}

function draw() {
  
}