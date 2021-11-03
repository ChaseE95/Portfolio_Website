var canvas = document.getElementById("myCanvas"); 
var ctx = canvas.getContext("2d");

let x = canvas.width/2;
let y = canvas.height - 30;

let dx = 2;
let dy = -2;

const ballRadius = 10;

let color = "#000";

function drawBall() {

    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#" + color;
    ctx.fill();
    ctx.closePath();

}

function draw() {
   
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    x += dx;
    y += dy;
    
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius){
        dy = -dy;
        color = Math.floor(Math.random()*16777215).toString(16);    
    }

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
        color = Math.floor(Math.random()*16777215).toString(16);
    }


}
setInterval(draw, 10);

