const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
const color1 = document.querySelector(".color1");

ctx.strokeStyle = '#67BFDE';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 40;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let direction = true;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

function draw(e) {
  if (!isDrawing) return; 
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    // update position
    [lastX, lastY] = [e.offsetX, e.offsetY];
}
    
function cleardrawing() {
    const context = canvas.getContext('2d');
    context.beginPath();
    context.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";    
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

function changeColor(){
  ctx.strokeStyle = color1.value;
}
// addEventListener
color1.addEventListener ("input", changeColor);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

// update slider value to stroke width
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function(){
    output.innerHTML = this.value;
    ctx.lineWidth = this.value;
}
