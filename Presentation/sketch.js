/*
    final project presentation
    11.19.2019
    
    sensor
    interaction
    theme
*/

var slideNumber = 0;
var totalSlides = 4;

var nextBtnX = 700;
var nextBtnY = 500;
var nextBtnSize = 50;

var prevBtnX = 100;
var prevBtnY = 500;
var prevBtnW = 100;
var prevBtnH = 50;


function setup() {
    createCanvas(800, 600);
}

function draw() {
    background("#004d1a");
 
    if (slideNumber == 0) {
        // content for slide number 0
        fill(255);
        textSize(50);
        textAlign(CENTER, CENTER);
        text("Final Project Pitch", width/2, height/2);
        
        textSize(30);
        text("by Alex", width/2, height/2 + 50);
        
    } else if (slideNumber == 1) {
        // content for slide number 1
        
        fill(255);
        textSize(50);
        textAlign(CENTER, CENTER);
        text("Materials Needed", width/2, 100);
        
        
        textSize(30);
        text("1 Arduino",400,150);
        text("1 Breadboard",400,200);
        text("1 USB-A to Mini-USB Cable",400,250);
        text("10 Jumper Wires",400,300);
        text("1 LED",400,350);
        text("1 Resistor 220 ohm",400,400);
        text("1 Resistor 10k ohm",400,450);
        text("1 Pushbutton Swith",400,500);
    } else if (slideNumber == 2) {
        
       fill("white");
        textSize(50);
        textAlign(CENTER, CENTER);
        text("MISSION", 400, 100);
    
    
    } else if (slideNumber == 3) {
        
        fill("white");
        textSize(50);
        textAlign(CENTER, CENTER);
        text("IMPACT ON SKETCH", 400, 100);
        
        
        
    
    } else if (slideNumber == 4) {
        
        
         fill("white");
        textSize(50);
        textAlign(CENTER, CENTER);
        text("HOW SENSOR WILL WORK", 400, 100);
         
    }

    /* drawing buttons */
    
    // next btn
    if (slideNumber < totalSlides - 1) {
        fill(255);
        noStroke();
        ellipse(nextBtnX, nextBtnY, nextBtnSize);
        fill(0);
        textSize(20);
        textAlign(CENTER, CENTER);
        text("Next", nextBtnX, nextBtnY);
    }
    
    
    // prev btn
    if (slideNumber > 0) {
       fill(255);
        noStroke();
        rect(prevBtnX, prevBtnY, prevBtnW, prevBtnH);
        fill(0);
        textSize(20);
        textAlign(LEFT, TOP);
        text("Previous", prevBtnX + 10, prevBtnY + 10);  
    }
   
    
}

function mousePressed() {
    
    // next btn
    var d = dist(mouseX, mouseY, nextBtnX, nextBtnY);
    if (d < nextBtnSize/2 && slideNumber < totalSlides - 1) {
        slideNumber++;    
    }
    
    // prev btn
    if (mouseX > prevBtnX &&
       mouseX < prevBtnX + prevBtnW &&
       mouseY > prevBtnY &&
       mouseY < prevBtnY + prevBtnH &&
       slideNumber > 0) {
        slideNumber--;    
    }
}
