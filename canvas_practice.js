var canvas = document.getElementById("maze");
let w = (h = canvas.width = canvas.height = 500);
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#0099f9";
ctx.fillRect(0, 0, w, h);

canvas.addEventListener("mousemove", (e) => {
  let x = e.pageX - canvas.offsetLeft;
  let y = e.pageY - canvas.offsetTop;
  let x_grid = Math.floor(x / 50);
  let y_grid = Math.floor(y / 50);
  let str = "X: " + x_grid + ", Y: " + y_grid;

  ctx.fillStyle = "#0099f9";
  ctx.fillRect(0, 0, w, h);

  draw();

  ctx.fillStyle = "#000";
  if (x <= 350) ctx.fillRect(x + 50, y - 10, 100, 25);
  else ctx.fillRect(x - 100, y - 10, 100, 25);

  ctx.fillStyle = "#0099f9";
  ctx.font = "bold 20px verdana";
  if (x <= 350) ctx.fillText(str, x + 60, y + 7, 80);
  else ctx.fillText(str, x - 90, y + 7, 80);
});

function draw() {
  if (canvas.getContext) {
    var context = canvas.getContext("2d");

    context.moveTo(500, 500);
    context.lineTo(500, 0);

    for (var x = 50; x < 500; x += 50) {
      context.moveTo(x, 0);
      context.lineTo(x, 500);
    }

    for (var y = 50; y < 500; y += 50) {
      context.moveTo(0, y);
      context.lineTo(500, y);
    }

    context.strokeStyle = "#000";
    context.lineWidth = 2;
    context.stroke();
  }
}
