var bullet, wall;

var speed, weight, thickness, damage;

function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(100, 200, 75, 10);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite(1100, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);
}

function draw() {
  background(0);

  damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);
  
  if (hasCollided(bullet, wall) === true) {
    bullet.velocityX = 0;
    
    if (damage > 10) {
      wall.shapeColor = color(250, 0, 0);
    }

    if (damage < 10) {
      wall.shapeColor = color(0, 255, 0);
    }
  }

  drawSprites();
}

function hasCollided(bulletObject, wallObject) {
  bulletObjectRightEdge = bulletObject.x + bulletObject.width;
  wallObjectLeftEdge = wallObject.x;
  if (bulletObjectRightEdge >= wallObjectLeftEdge) {
    return true;
  }
  else {
    return false;
  }
}