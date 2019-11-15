
var serial;
var portName = "COM3";
var sensorValue;




function setup() {
    createCanvas(600, 400);
    
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
    
    
    
     fill("Bisque")
    noStroke();
	ellipse(sensorValue,300, 200, 300, 400); //hand 
    
   
    fill("White")
    ellipse(sensorValue,500, 180, 98); //hand
    fill("Blue")
    ellipse(sensorValue,400, 180, 60) //hand
  
    
        fill ("black");
      textSize(50);
      text ("HELLO THERE", 130, 130);
      
    
    
    
    
  
    
    
 
    
    
    
    
    
    
    
    
    
    
    
}