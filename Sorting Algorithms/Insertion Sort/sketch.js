var a = 0;
var b = 0;
var arr = [];

function setup(){
    createCanvas(640, 360);
    
    for(var i = 0;i<30;i++){
        arr[i] = random(100);
        rect(10 + 12*i, height - arr[i], 10, arr[i] );
    }
    
    var timeEachIteration = 100;
    setInterval(loop, timeEachIteration);
}


function draw(){ 
    console.log(a);
    console.log(b);
    if(arr[a] > arr[b]){
        var temp = arr[b];
        arr[b] = arr[a];
        arr[a] = temp;
        clear();
        for(var i = 0;i<30;i++){
            rect(10 + 12*i, height - arr[i], 10, arr[i] );
        }
    }
    a++;
    if(a==30){
        a=0;
        b++;
        if(b == 30){
            b=29;
        }
    }
    //to loop just once
    noLoop();
}