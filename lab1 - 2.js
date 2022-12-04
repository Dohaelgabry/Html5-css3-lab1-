var canv= document.getElementById("canvas");
var getcolorcan = document.getElementById("getcolorcan");
var numbercan = document.getElementById("numbercan");
var ctx = canv.getContext("2d");
 var n = 0;
 
function addcanvas(){
     
        ctx.fillStyle = getcolorcan.value;
        var x = numbercan.value;
        var b = canv.height -x; 
        ctx.beginPath();
        ctx.rect(n ,b,30,x);   
        n+=40;  
        ctx.fill();
        ctx.closePath(); 
    }

