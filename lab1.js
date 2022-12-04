var canv= document.getElementById("canvas");
var getcolorcan = document.getElementById("getcolorcan");
console.log(getcolorcan.value);

function applycanvas(){
    for (let index = 0; index < 10; index++) {
    var ctx = canv.getContext("2d");
    ctx.fillStyle = getcolorcan.value;
    ctx.beginPath();
    var x = Math.random()*300
    var y = Math.random()*200
    var r = Math.random()*10
    ctx.arc(x, y, r, 2 * Math.PI ,false);
    ctx.fill();
    ctx.stroke();}

}




