/* meme version 1 
10/3/2019

*/

var Bear;
 function preload(){
     Bear= loadImage( "../Bear.jpg");
 }





function setup() { 
 createCanvas (640,300);
 background("black");
     fill("blue") ;
    textSize(80);
     text ("Alex Romero",100,100);
    
    
}



  function draw() { 
     
      fill ("red");
      textSize(70);
      text ("MMP210", 150,350);
      textFont( "Times New Roman");
  
      
      image (Bear, 0,0 );
      
      
      
      
  }