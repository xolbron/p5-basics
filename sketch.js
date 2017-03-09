var a = 50;
var b = 0;
var newHeight = 50;
var newWidth = 50;
var katniss;
var peeta;
var effie;
var x;
var y;

// setup function executes once
function setup(){
    createCanvas(displayWidth, displayHeight);
    katniss = random(0,255);
    background(katniss,katniss,katniss);
}

//draw function loops forever
function draw(){
    //background(50);
    if(mouseIsPressed){
        noStroke();
        katniss = random(y,x);
        peeta = random(0,effie);
        effie = random(0,255);
        x = random(0,150);
        y = random(0,255);
        fill(peeta, katniss, x, katniss);
        ellipse(mouseX,mouseY,x,y);
    } 
    else{
        background(y, x, effie, peeta);
        
    }
}
