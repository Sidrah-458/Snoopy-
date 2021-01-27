class Game {

constructor() {
}



getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
  }
update(state){
    database.ref('/').update({
      gameState: state
    });
}
  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      
      form = new Form ();
      }

      snoopy = createSprite(50,50) ;
      snoopy.addImage(snoopy1Image);
      
      woodstock = createSprite(50,100);
      woodstock.addImage(woodstockImage);
      
      sadSnoopy = createSprite(60,60);
      sadSnoopy.addImage(sadSnoopyImage);
      
      happySnoopy = createSprite(60,60);
      happySnoopy.addImage(happySnoopyImage);

      sadWoodstock = createSprite (30,30);
      sadWoodstock.addImage(sadWoodstockImage);

      happyWoodstock = createSprite(40,40);
      happyWoodstock.addImage(happyWoodstockImage);
      
      ball = createSprite(30,30);
      ball.addImage(ballImage);

      background = createSprite(500,500);
      background.addImage(backgroundImage);

      
    }
    
    play(){
    form.hide();
  textSize(20);
  text("Game Start", 100, 100);
  Player.getPlayerInfo();
  if(allPlayers !== undefined){

    var displayPosition = 120;
    for(var plr in allPlayers){

      if(plr === "player" + player.index )
      fill("blue") 
      else
      fill("orange");
    }
  }
displayPosition += 20;
textSize(10);
  
}

if (keyIsDown(UP_arrow && player.index!== null){


  player.distance +=50;
  player.update;

}
    
}

}