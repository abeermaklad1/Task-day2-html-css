
//Rect
rectBtn.onclick =function(){
    mySvg.onclick=function(e){
        var rect = document.createElementNS("http://www.w3.org/2000/svg" , "rect");
        rect.setAttribute("x" ,`${e.offsetX}`);
        rect.setAttribute("y" ,`${e.offsetY}`);
        rect.setAttribute("width" ,"60");
        rect.setAttribute("height" ,"60");
        rect.setAttribute("fill" ,"#31859c");
        mySvg.appendChild(rect);
    }   
}
//Circle
circleBtn.onclick =function(){
    mySvg.onclick=function(e){
        var circle = document.createElementNS("http://www.w3.org/2000/svg" , "circle");
        circle.setAttribute("cx" ,`${e.offsetX}`);
        circle.setAttribute("cy" ,`${e.offsetY}`);
        circle.setAttribute("r" ,"40");
        circle.setAttribute("fill" ,"#31859c");
        mySvg.appendChild(circle);
    }   
}
//Line
lineBtn.onclick =function(){
    mySvg.onclick=function(e){
        var path = document.createElementNS("http://www.w3.org/2000/svg","path");
        path.setAttribute("stroke", '#31859c');
        path.setAttribute('stroke-width', '2');
        path.setAttribute('d', `m${e.offsetX} ${e.offsetY} l${e.offsetX+10} ${e.offsetY+10}`);   
        mySvg.appendChild(path);
        console.log(mySvg);

    }    
}