var x = 60
var speed = 5



//preloading assets
function preload (){
  terrorism = loadImage ('assets/terrorism.jpg')
  peace = loadImage ('assets/peace0.png')
  police = loadSound ('assets/police.mp3')
  showpeace = 0;
  peacepos = [];
  
  
}

function setup() {
  createCanvas (windowWidth, windowHeight);
  noCursor ();
}

function draw() {
  frameRate (15);
  background (terrorism);
  textFont (BOLD);
  textSize (60);
  fill (random (1,255),(0,255,0), (0,0,255));
  text ("STOP GUN VIOLENCE",x,70);
  //image (peace,200,200);
  for (var i=0; i<showpeace;i++) {
    image (peace,peacepos [i*2-2],peacepos[i*2-1]);
    //text ('https://nationalcompassionfund.org/', 150,700);
  }

  
  if (x < 20) {
    speed = 5;
  }
  
  if (x > 400) {
    speed = -5;
  }
  x = x + speed

}

function mousePressed () {
 showpeace ++;
 peacepos[showpeace*2-2] = random (width);
 peacepos[showpeace*2-1] = random (height);
 //police.play();
}

function keyPressed () {
  if(keyCode == 32) {
    police.play();
  }
}

function windowResized () {
  resizeCanvas (windowWidth, windowHeight);
}
