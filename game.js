class Game{
    constructor(){


    }
    getGameState(){
      var gameStateref=database.ref('gameState');
      gameStateref.on("value",function(data){
          gameState=data.val();
      })
    }
    updateGameState(state){
        databaseref.on('/').update({
           gameState:state
        })
    }
    start(){
        if(gameState===0){
            player=new Player();
            player.getPlayerCount();
            form= new Form();
            form.display();
        }
    }

    
}
    