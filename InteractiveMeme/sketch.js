/* meme version 1 
10/3/2019

*/

var dog;
var cat;


 function preload(){
     dog= loadImage( "dog1.jpeg");
     cat= loadImage("cat1.jpeg");
     
 }


function setup() { 
 createCanvas (640,300);
    background("black");
   
   
    
}



  function draw() { 
     
    if(mouseIsPressed){
        background('#89D197');
    }else{
        background('#6CBFE0');
    }      
      
      image (dog, width/600, 0, width/2, 200 );
      image (cat, width/2, 0, width/2, 200);
      
      
        fill ("white");
      textSize(20);
      text ("WHY CAN'T I STOP CRYING", 20, 250);
      
      textSize(20);
      text ("IS THAT A DOG, CRYING", 360, 250);
      text("LOL", 480, 270);
     
      
      strokeWeight(2);
	stroke("white");
	line(width/2, 0, width/2, height);
	
      fill('white');
      text( "PRESS TO CHANGE", 250, 30);
      text(" BACKGROUND COLOR", 230,50)
      
      // text that indicates to press the canvas
      
  }