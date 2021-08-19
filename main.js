canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d");

var mouseEvent = "";
var oldX;
var oldY;



canvas.addEventListener("mousedown", myMouseDown);

function myMouseDown(e) {
    mouseEvent = "mousedown";
    console.log("Hi");
    Radius = document.getElementById("enterRadius").value;
    Width = document.getElementById("enterWidth").value;
    Color = document.getElementById("enterColor").value;
}

canvas.addEventListener("mouseup", myMouseUp);

function myMouseUp(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", myMouseLeave);

function myMouseLeave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", myMouseMove);

function myMouseMove(e) {
    currentX = e.clientX - canvas.offsetLeft;
    currentY = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = Color;
        ctx.lineWidth = Width;
        ctx.arc(currentX, currentY, Radius, 0, 2 * Math.PI);
        ctx.moveTo(oldX, oldY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
    }
    oldX = currentX;
    oldY = currentY;

}