// final project game reflex 
var serial;
var portName = "COM4";
var sensorValue;
var Hit;
 var r, g, b ;
function preload(){
    Hit = loadSound('Hit_hurt 1')
}
 
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
   background("#004d1a");
    
    fill(255);
     textSize(40);
     textAlign(CENTER, CENTER);
    text(sensorValue, width/2, height/2);
    
    
	fill(r, g, b);
	ellipse(width/2, height/2, 200, 200);
}
function mousePressed() {
    var d = dist(mouseX, mouseY, width/2, height/2);
	if (d < 100) {
		r = random(0, 255);
		g = random(0, 255);
		b = random(0, 255);
		Hit.play();
	}
 
    
    
    
    
    
    
    
    
    
    
    
}