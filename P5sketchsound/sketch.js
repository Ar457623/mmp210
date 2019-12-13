// final project game reflex 
var serial;
var portName = "COM5";
var sensorValue;
var serialAvailable;
 var r, g, b ;

 
function setup() {
    createCanvas(600, 400);
    r = random(0,255);
	g = random(0,255);
	b = random(0,255);
   
    
    	serial = new p5.SerialPort();
	serial.on('connected', serverConnected);
	serial.on('open', portOpen);
	serial.on('data', serialEvent);
	serial.on('error', serialError);
	serial.on('close', portClose);
	
	serial.open(portName);
}

function serverConnected() {
	console.log('connected to server.');
}

function portOpen() {
	console.log('the serial port opened.')
}

function portClose() {
	console.log('The serial port closed.');
}
    
function serialError() {
    console.log("error");
}

function serialEvent() {
	var currentString = serial.readLine(); // read the incoming string
	trim(currentString); // remove any trailing whitespace
	if (!currentString) {
		return; // if the string is empty, do no more
	}
	sensorValue = currentString; // save it for the draw method
}
function draw() {
   background(r,g,b);
     if (frameCount % 100 === 0) {
		r = random(0,255);
		g = random(0,255);
		b = random(0,255);
	}
    
    
        
fill("Black");
    noStroke();
    ellipse(252, 120, 72, 72);
    
    fill(255);
  ellipse(550, 290, 72, 72);
    
    
    fill("white");
  ellipse(50, 90, 72, 72);
    
    fill("Black");
  ellipse(50, 350, 72, 72);
    
    
   fill(255);
  ellipse(250, 330, 72, 72);
    
    fill("Black");
  ellipse(530, 50, 72, 72);
    
   fill("White");
  rect(130, 20, 63, 63);
    
    fill("White");
  rect(380, 60, 33, 93);
    
    fill("white");
  rect(125, 300, 43, 95);
    
    fill("Black");
  rect(360, 310, 80, 30);
    
    
    triangle(30, 75, 58, 20, 86, 75);
    
    fill("White");
    triangle(100, 100, 100, 200, 10, 290);
    
      
    fill("Black");
    triangle(500, 200, 400, 200, 550, 290);
    
	
    fill("black");
     textSize(40);
     textAlign(CENTER, CENTER);
    text(sensorValue, width/2, height/2);
       
	
}

 
    
    
    
    
    
    
    
    
    
    
    
