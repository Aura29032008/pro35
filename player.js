class Player {
    constructor(){

}
getPlayerCount(){
 var playerCountref=database.ref('playerCount');
 playerCountref.on("value", function(data){
     playerCount=data.val();
 }
 )
}
updatePlayerCount(count){
    database.ref('/').update({
        playerCount:count
    })

 
    
}
update(name){
    var playerIndex="player"+playerCount
    database.ref(playerIndex).set({
    name:name
    })

    

    
}

}