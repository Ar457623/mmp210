/* meme version 1 
10/3/2019

*/

var dog;

 function preload(){
     dog= loadImage( "dog1.jpeg");
     
     
 }






function setup() { 
 createCanvas (640,300);
    background("black");
    
   
    
}



  function draw() { 
     
      fill ("White");
      textSize(30);
      text ("The Face You Make When You", 120,220);
      text ("Have 5 Midterms This Week",  140 ,270);
      textFont( );
  
      
      image (dog, 200, 0 );
      
      
      
      
  }