angle = 0;
wave = [];
let input, button, greeting;
function setup() {
  createCanvas(windowWidth, windowHeight);
  title = createElement('h1','Fourier Series');
  title.position(560,1)
  n_value = createElement('h2', 'Enter N value: ');
  n_value.position(20, 65);
  input = createInput();
  input.position(20, 125);
}
function draw() {
  background(255);
  translate(200,360);
  x = 0;
  y = 0;

  for(let i=0; i<input.value(); i++){
    prevx = x;
    prevy = y;
    let n = 2*i + 1;

    let radius = 5 * ( 4 / n * PI) ;
    x += radius * cos(n * angle);
    y += radius * sin(n * angle);
    

    noFill();
    stroke(0,120);
    ellipse(prevx,prevy,radius * 2)
    line(prevx,prevy,x,y);
    // ellipse(x, y, 8);
    
    
  }
  wave.unshift(y)
  translate(150,0);
  line(x-150,y,0,wave[0]) 
  stroke(0)
  beginShape();
  noFill();
  for(let i = 0; i<wave.length; i++){
    vertex(i,wave[i]);
  }
  endShape();
  

  angle += 0.03;
}
