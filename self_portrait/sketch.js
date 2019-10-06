function setup() {
    createCanvas(600, 400);
}

function draw() {
    background("DarkSlateGrey ");
    
    fill("Bisque")
    noStroke();
	ellipse(300, 200, 300, 400); //face 
    
   
    fill("White")
    ellipse(400, 180, 98); //right eye
    fill("Black")
    ellipse(400, 180, 60) //right eye 
    
    fill("White")
    ellipse(199, 180, 98); //left eye
    fill("Black")
    ellipse(198, 180, 60)
    

    arc(300, 300, 145, 100, 0, PI); //mouth
    fill("BlanchedAlmond ")
    strokeWeight(10);
    arc(300, 210,  70, 100, 0, PI); //nose
    
    fill("	#3c6090")
    arc(300, 100, 300, 100, 0, PI); //hat 
    ellipse(300, 50, 250, 150);//hat
    ellipse(240, 50, 250, 150);//hat
    ellipse(360, 50, 250, 150);//hat
    
    fill("#987676")
    rect(124, 30, 355, 55, 20);
    
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
}