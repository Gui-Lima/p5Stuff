

function preLoad(){
    
}


function bitCoin() {
    this.x = 375;
    this.y = 150;
    this.click = function (){
    }
    this.show = function(){
        var bc = loadImage("bitcoin.png");
        image(bc, this.x , this.y);
    }
}

