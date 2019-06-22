function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var height = window.innerHeight;
var width = window.innerWidth;
var x = width / 2;
var y = height / 2;
var d = 10;

function init() {
    var canvas = document.createElement("canvas");
    canvas.className  = "canvas";
    canvas.id = "canvas";
    canvas.height = height;
    canvas.width = width;
    document.getElementsByTagName('body')[0].appendChild(canvas);
}

function draw() {
  if (x < 0 || y < 0 || x > width || y > height) {
      x = width / 2;
      y = height / 2;
  }
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(x,y);
    x += getRandomInt(-d,d+1);
    y += getRandomInt(-d,d+1);
    ctx.lineTo(x, y);
    ctx.stroke();
  }
  window.requestAnimationFrame(draw);
}

init();
window.requestAnimationFrame(draw);
console.log("hello!")

