var Canvas ;

var jumper1 , jumper2 , jumper3 , jumper4 ;
var Hurdle1;

var playerCount = 0;
var game;
var form;
var playername;
var gameState = 0;
var ground;
//var gameref;
//var playeref;
function setup (){
Canvas = createCanvas(800,400);

playerCount = 0;
player = new Player();
game = new Game();
form = new Form();
jumper1 = new Jumper(200,340,20,80);
}
function draw(){
background(255);
if(gameState===0){
 console.log(playerCount);
  form.display();
}
if(playerCount===1){
  form.hide();
  console.log("working");
gameState =1;
}

if(gameState===1){
  ground = createSprite(200,200,5,100);
  jumper1.display();
  if(keyIsDown(UP_ARROW)){
    jumper1.x = jumper1.x + 5;
    jumper1.move(2);
  }
  if(keyIsDown(32)){
    jumper1.y = jumper1.y - 5;
  }
 
  
 }
}



