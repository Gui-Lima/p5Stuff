var bitcoin = new bitCoin;
var happiness;
var cookieCount;
var unicornsFont;
var button;
var nCows = 0;

function setup() {
	createCanvas(1280, 720);
    happy = loadImage("background1.jpg");
    unicornsFont = loadFont("Unicorns are Awesome - OTF.otf");
    cookieCount = 0;
}

function loadImages(){
    image(happy , 0 ,0 );
    bitcoin.show();
    textFont(unicornsFont, 100);
    text(cookieCount, 600, 90);
}

function draw() {
    background(200, 200, 200);
    loadImages();
    
}


function touchStarted(){
    
}

function raisePont(){
    cookieCout++;
}
