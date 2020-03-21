//make variable for the mouse pointer
var paddle;





function setup() {


  //create canvas
  createCanvas(500, 400);

  //create the mouse pointer
  paddle = createSprite(20, 200, 20, 20);


}


function draw() {

  //clear the background
  background(255);

  //move the mouse pointer with mouse in x position
  paddle.x = mouseX;


  //write the conditions to change the background color with the movement of mouse pointer . set the colors symmetrically
  if (paddle.x > 0) {
    background("orange");
  }

  if (paddle.x > 50) {
    background("red");
  }


  if (paddle.x > 100) {
    background("darkred");
  }

  if (paddle.x > 150) {
    background("darkviolet");
  }

  if (paddle.x > 200) {
    background("violet");
  }

  if (paddle.x > 250) {
    background("darkblue");
  }

  if (paddle.x > 300) {
    background("lightblue");
  }

  if (paddle.x > 350) {
    background("darkgreen");
  }

  if (paddle.x > 400) {
    background("lightgreen");
  }

  if (paddle.x > 450) {
    background("yellow");
  }





  //create draw sprites
  drawSprites();
}