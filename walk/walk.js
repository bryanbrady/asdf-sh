function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var height = window.innerHeight;
var width = window.innerWidth;
var x = width / 2;
var y = height / 2;
var d = 20;

function init() {
    var canvas = document.createElement("canvas");
    canvas.className  = "canvas";
    canvas.id = "canvas";
    canvas.height = height;
    canvas.width = width;
    document.getElementsByTagName('body')[0].appendChild(canvas);
}

function draw() {
  if ( x < 0 )       { x += width; }
  if ( y < 0 )       { y += height; }
  if ( x >= width  ) { x = x % width; }
  if ( y >= height ) { y = y % height; }

  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(x,y);
    x += getRandomInt(-d,d);
    y += getRandomInt(-d,d);
    ctx.lineTo(x, y);
    ctx.stroke();
  }
  window.requestAnimationFrame(draw);
}

init();
window.requestAnimationFrame(draw);
console.log("hello!")

