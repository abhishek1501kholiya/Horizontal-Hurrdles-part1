class Game{
    constructor(){

    }
 aboutToupdate(){

  gameref = database.ref('gameState');
 gameref.on("value",(data)=>{
  gameState = data.val();
  })
 }
 update(state){
   database.ref('/').update({
   gameState:state
   });
 }
 async start(){
   fill("red");
   jumper4 = createSprite(100,200);
 }
}