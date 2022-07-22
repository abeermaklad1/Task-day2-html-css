var ctx = myCanvas.getContext('2d');
//Rect
rectBtn.onclick = function () {
    myCanvas.onclick = function (e) {
        ctx.beginPath();
        ctx.fillStyle = `${colorValue.value}`;
        ctx.rect(e.offsetX, e.offsetY, 50, 50);
        ctx.fill();
        ctx.lineWidth = widthValue.value;
        ctx.stroke();
        console.log(myCanvas);
    }
}
//Circle
circleBtn.onclick = function () {
    myCanvas.onclick = function (e) {
        ctx.beginPath();
        ctx.fillStyle = `${colorValue.value}`;
        ctx.arc(e.offsetX, e.offsetX, 50, 0, 2 * Math.PI);
        ctx.lineWidth = widthValue.value;
        ctx.stroke();
        ctx.fill();

        console.log(myCanvas);
        console.log();
    }
}
//Line
lineBtn.onclick = function () {
    myCanvas.onclick = function (e) {
        ctx.beginPath();
        ctx.strokeStyle = `${colorValue.value}`;
        ctx.lineWidth = widthValue.value;
        ctx.moveTo(e.offsetX, e.offsetY);
        ctx.lineTo(e.offsetX+30, e.offsetY+30);
        ctx.stroke();
        console.log("hello");
    }
}

polygonBtn.onclick = function () {

    var clicked = false

    myCanvas.onmousedown = function () {
        clicked = true
    }

    myCanvas.onmouseup = function () {
        clicked = false
    }

    myCanvas.onmousemove = function (e) {
        if (clicked) {
            ctx.beginPath();
            ctx.fillStyle = `${colorValue.value}`;
            ctx.arc(e.offsetX, e.offsetY, widthValue.value , 0, 2 * Math.PI);
            ctx.fill();
        }
    }

}

//Clear
eraserBtn.onclick = function () {

    var clicked = false

    myCanvas.onmousedown = function () {
        clicked = true
    }

    myCanvas.onmouseup = function () {
        clicked = false
    }

    myCanvas.onmousemove = function (e) {
        if (clicked) {
            ctx.beginPath();
            ctx.fillStyle = "white";
            ctx.arc(e.offsetX, e.offsetY, widthValue.value , 0, 2 * Math.PI);
            ctx.fill();
        }
    }

}

