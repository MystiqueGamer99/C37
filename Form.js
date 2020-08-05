class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton('PLAY');
        this.greeting = createElement('h3');
    }

    display(){
        var title = createElement('h2', "CAR RACING GAME");
        title.position(displayWidth/2-50,20);
        this.input.position(displayWidth/2-40,displayHeight/2-80);       
        this.button.position(displayWidth/2-30,displayHeight/2-50);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("HELLO " + player.name);
            this.greeting.position(displayWidth/2-30,displayHeight/2-50);
        });
    }

    hide(){
        this.button.hide();
        this.input.hide();
        this.greeting.hide();
    }
}