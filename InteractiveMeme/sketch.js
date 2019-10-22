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
     
    
      image (dog, width/600, 0, width/2, height );
      image (cat, width/2, 0, width/2, height);
      
      
        fill ("white");
      textSize(20);
      text ("WHY CAN'T I STOP CRYING", 20,230);
      
      textSize(20);
      text ("IS THAT A DOG, CRYING", 360, 230);
      text("LOL", 480, 250);
     
      
      strokeWeight(2);
	stroke("white");
	line(width/2, 0, width/2, height);
	
      
      
      
  }