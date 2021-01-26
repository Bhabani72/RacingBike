class Game {
  constructor(){

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
      }
      form = new Form()
      form.display();
    }

    rider1 = createSprite(100,720);
    rider1.addImage(rider1img);
    rider1.scale=0.5;
    rider2 = createSprite(100,720);
    rider2.addImage(rider2img) ;
    rider2.scale=0.5;
    rider3 = createSprite(100,720);
    rider3.addImage(rider3img) ;
    rider3.scale=0.5;
    rider4 = createSprite(100,720);
    rider4.addImage(rider4img) ;
    rider4.scale=0.5;
    riders = [rider1, rider2, rider3, rider4];

  }

  play(){
    form.hide();
background(backgroundImage)
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
    image(groundimg,-displayWidth*-4,600,displayWidth*-4,displayHeight)
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x;
      var y = 120;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the skater a little away from each other in x direction
        y = y + 200;
        //use data form the database to display the skater in y direction
        x = displayHeight - allPlayers[plr].distance;

        riders[index-1].x = x;
        riders[index-1].y = y;

        if (index === player.index){
          riders[index - 1].shapeColor = "red";
          camera.position.y = displayWidth/2;
          camera.position.x = riders[index-1].x
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance -=10
      player.update();
    }

if(player.distance>1000){
  text("You have reached the finish line",300,600)
  gameState = 2;
}
    drawSprites();
  }
  end(){
    console.log("Game End")
  }
}
