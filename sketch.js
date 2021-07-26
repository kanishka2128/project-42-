var iss, spacecraft
var hasDocked = false
var spacecraft1,spacecraft2,spacecraft3,spacecraft4

function preload() {
  iss_img = loadImage("iss.png");
  spacebg = loadImage("spacebg.jpg")
  spacecraft1 = loadImage("spacecraft1.png")
  spacecraft2 = loadAnimation("spacecraft1.png" , "spacecraft2.png")
  spacecraft3 = loadAnimation("spacecraft1.png" , "spacecraft3.png")
  spacecraft4 = loadAnimation("spacecraft1.png" , "spacecraft4.png")
}

function setup() {
  createCanvas(1200,600);
  iss = createSprite(400, 180, 50, 50);
  iss.addImage("issImage", iss_img)
  iss.scale = 0.7

  spacecraft = createSprite(400,400,50,50);
  spacecraft.addImage("img1", spacecraft1);
  spacecraft.scale = 0.2

}

function draw() {
  background(spacebg);  
  drawSprites();

  if (!hasDocked) {
    //spacecraft.x = Math.round(random(0,600))
    fill("orange")
    textSize(15)
    text("x position : " + spacecraft.x, 50,50)

    fill("orange")
    textSize(15)
    text("y position : " + spacecraft.y, 50,70)

    fill("orange")
    textSize(15)
    text("docking y position (230) distance  : " + (230 - spacecraft.y), 10,90)

    fill("orange")
    textSize(15)
    text("docking x position (350) distance  : " + (350 - spacecraft.x), 10,110)


    if (keyDown(LEFT_ARROW)) {
      spacecraft.addAnimation("animation1", spacecraft3)
      spacecraft.x  = spacecraft.x - 1
    }

    if (keyDown(RIGHT_ARROW)) {
      spacecraft.addAnimation("animation2", spacecraft4)
      spacecraft.x  = spacecraft.x + 1
    }

    if (keyDown(UP_ARROW)) {
      spacecraft.addAnimation("animation3", spacecraft2)
      spacecraft.y  = spacecraft.y - 1
    }

    if (keyDown(DOWN_ARROW)) {
      spacecraft.y  = spacecraft.y +1 
    }

  }

  if (spacecraft.x === 350 && spacecraft.y === 230) {
    hasDocked = true

    fill("white")
    textSize(30)
    text("Docking complete!", 200,500)
  } 

 


}