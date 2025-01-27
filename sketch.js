
let Table;
let x = 0;
let y = 0;
let output;
let output2;
let origin=0;

function setup() {
  frameRate(420)
  createCanvas(400, 400);
   setInterval(() => { 
 output = -(Table.getString(x, 0));
  x++}, 1);//col1
  setInterval(() => { 
    output2 = (Table.getString(y, 1));
     y++}, 1);//col2
}

function preload () {
  Table = loadTable ('Soft play.csv', 'csv', 'header');
}

function draw() {
  background(220);
  text(output + 'dB', 10, 20);
  text(output2+ 'dB', 10, 380);
  translate(200, 200);
  for (origin = 0; origin < width; origin +=10) {
  // while (origin < width) {
  push()
    line(origin, 0, 0, output*3);
    line(origin, 0, 0, output*3);
    line(origin,0, 0, output*3);
    line(origin, 0, 0, output2*3);
    line(-origin, 0, 0, output*3);//centre screen left begins here
    line(-origin, 0, 0, output*3);
    line(-origin,0, 0, output2*3);
    line(-origin, 0, 0, output2*3);
    // pop() //this could be written more succintly as a loop
  }
  }
