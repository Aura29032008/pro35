class Form{
    constructor(){

    }
    display(){
        var title=createElement('h2');
        title.html("Car Racing Game");
        title.position(130,0);
        var button=createButton("Play");
        button.position(250,200);
        var input=createInput("Name");
        input.position(130,160);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount=playerCount+1;
            player.update(name);
            player.updatePlayerCount(playerCount);
            var greetingMsg=createElement('h3');
            greetingMsg.html("hello"+name);
            greetingMsg.position(130,160);
        

        })
        

        
    }
}