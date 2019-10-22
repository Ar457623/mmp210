/* transformation
10/22/2019

*/

var x= 100;
var y=100;
var speed= 1;
var cat;
var dog;
var r, g, b;

function preload(){
     dog= loadImage( "dog1.jpeg");
     cat= loadImage("cat1.jpeg");
     
 }


function setup() { 
 createCanvas (640,700);
   	r = random(0,255);
	g = random(0,255);
	b = random(0,255);
   
   
   
    
}



  function draw() {
       background("#9A6265 ");
      
    
        if (frameCount % 30 === 0) {
		r = random(0,300);
		g = random(0,100);
		b = random(0,250);
	}
	fill(r, g, b);
      text ("WHY CAN'T I", 200,130);
      text("STOP CRYING",190,250)
       
      
      textSize(50);
      text ("IS THAT A DOG, CRYING", 20, 650);
      text("LOL", 300, 700);
     
      
      
      
      image(cat, x, height/2, width, height/2)
      
      
     x += speed;
	if (x > width || x < 0) {
		speed *=-1;
        
	}
      
   
      image(dog, x, height/230, width, height/2);
       x += speed;
	if (x > width || x < 0) {
		speed *= 1;
	}
        
        
        
      	strokeWeight(1);
	stroke("white");
		line(0, height/2, width, height/2);
      
      
      
      
      
      
     
        if (frameCount % 30 === 0) {
		r = random(0,255);
		g = random(0,255);
		b = random(0,255);
	}
	fill(r, g, b);
      text ("WHY CAN'T I", 200,130);
      text("STOP CRYING",190,250)
       
      
      textSize(50);
      text ("IS THAT A DOG, CRYING", 20, 650);
      text("LOL", 300, 700);
      
      
      
      
      
      
      
  }