/* transformation
10/22/2019

*/


var cat;
var dog;
var r, g, b;


function preload(){
     dog= loadImage( "dog1.jpeg");
     cat= loadImage("cat1.jpeg");
     
 }


function setup() { 
 createCanvas (640,700);
   
   
   
    
}



  function draw() {
       background("#9A6265 ");
      
      
   
      
        if (frameCount % 30 === 0) {
		r = random(0,345);
		g = random(0,255);
		b = random(0,255);
	}
    
        
	   
    
  
      
      
      
 
        
     
    
   
      image(cat, 0, height/2, width, height/2);
    
    
      image(dog, 0, height/230, width, height/2);
      
     
        
        
        
      	strokeWeight(1);
	stroke("BLACK");
		line(0, height/2, width, height/2);
      
      
      
      
      
      
    
	fill(r, g, b);
      translate(0, 0);
	var r = frameCount / 500 * PI;
	shearX(r);
      text ("I HATE CATS", 200,130);
     
       
      
      textSize(70);
    
      text ("LMAOOO", 20, 650);
     text ("LMAOOO", 20, 550);
    
      
  
     
      
  }