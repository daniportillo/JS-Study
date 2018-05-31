        
var canvas = document.querySelector('.myCanvas');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, width, height);

function random(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function Shape(x, y, velX, velY, color, size) {
   this.x = x;
   this.y = y;
   this.velX = velX;
   this.velY = velY;
   this.color = color;
   this.size = size;
}

function Ball(x, y, velX, velY) {
  var exists;

  this.x = Shape.x;
  this.y = Shape.y;
  this.velX = Shape.velX;
  this.velY = Shape.velY;

  exists = Shape.constructor;
}

Shape.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}

// New ball instance

var testBall = new Shape(50, 100, 4, 4, 'blue', 10);

testBall.x
testBall.size
testBall.color
testBall.draw();

// Update position
Shape.prototype.update = function() {
    if ((this.x + this.size) >= width) {
      this.velX = -(this.velX);
    }
  
    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }
  
    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }
  
    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }
  
    this.x += this.velX;
    this.y += this.velY;
  }

  // Animating the ball
  var balls = [];


  function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);
  
    while (balls.length < 5) {
      var ball = new Shape(
        random(0,width),
        random(0,height),
        random(-7,7),
        random(-7,7),
        'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
        random(10,20)
      );
      balls.push(ball);
    }
  
    for (var i = 0; i < balls.length; i++) {
        
      balls[i].draw();
      balls[i].update();
    }
  
    requestAnimationFrame(loop);
  }

  loop();