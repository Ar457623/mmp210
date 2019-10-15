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
     
    
      image (dog, 0,0 );
      image (cat, 360,0);
      
      
        fill ("white");
      textSize(40);
      text ("I'm a dog crying", 20,240);
      text ("I'm a cat dont click on me",  40 ,260);
     
  
      
      
      
  }