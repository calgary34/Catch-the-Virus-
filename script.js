let circleY;
let circleX;
let drawCircle;
let virus_img;
let cell_img;
let score;
function distance(x1,y1,x2,y2){
  return Math.sqrt(Math.abs((x1-x2)**2+(y1-y2)**2))
}
function setup() {
  let canvas=createCanvas(500, 500);
  canvas.parent=document.getElementById("sketch")
  circleY = 0;
  circleX=Math.floor(Math.random() * 500);
  drawCircle=true;
  virus_img=loadImage('virus.png');
  cell_img=loadImage('cell.png');  
  score=0;
}

function draw() {
  document.getElementById("score").innerHTML="Score: "+score.toString();
  // clear out old frames
  noStroke();
  background(0);

  // draw current frame based on state
  if (drawCircle){
    virus_img.resize(50,50);
    image(virus_img, circleX-25, circleY-25);
    circleY = circleY + 1;
  }
  else{
    circleY = 0;
    circleX=Math.floor(Math.random() * 500);
    drawCircle=true;
  }
  cell_img.resize(width,height*0.25);
  image(cell_img,0,height*0.75)
  if(circleY > height*0.75) {
    document.getElementById('txt').innerHTML="You lost lol"
  }
  if (mouseIsPressed) {
    if (distance(mouseX,mouseY,circleX,circleY)<=25){
      drawCircle=false;
      score+=1;
    }
  }
}