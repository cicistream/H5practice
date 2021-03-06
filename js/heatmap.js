var points={};
var SCALE=3;
var x=-1,y=-1;
function reset(){
	points={};
	context.clearRect(0,0,300,300);
	x=-1;
	y=-1;
}
function loadDemo(){
	document.getElementById("resetButton").onclick=reset;
	
	canvas=document.getElementById("heatmap");
    context=canvas.getContext('2d');
	context.globalAlpha=0.2;
	context.globalCompositeOperation='ligtht';
	
	function sample(){
		if(x!=-1){
			addToPoint(x,y);
		}
		setTimeout(sample,100);
	}
	canvas.onmousemove=function(e){
		x=e.clientX-e.target.offsetLeft;
		y=e.clientY-e.target.offsetTop;
//x=e.clientX;
//y=e.clientY;
		addToPoint(x,y);
	}
	sample();
}
function getColor(intensity){
	var colors=["#07293","#2E4045","#8C593B","B2814E","FAC268","FAD237"];
	return colors[Math.floor(intensity/2)];
}
function drawPoint(x,y,radius){
	context.fillStyle=getColor(radius);
	radius=Math.sqrt(radius)*6;
	context.beginPath();
	context.arc(x,y,radius,0,Math.PI*2,true);
	context.closePath();context.fill();
}
function addToPoint(x,y){
	x=Math.floor(x/SCALE);
	y=Math.floor(y/SCALE);
	if(!points[[x,y]])
	{
		points[[x,y]]=1;
	}
	else if(points[[x,y]]==10)
	{return }
	else{points[[x,y]]++;}
	drawPoint(x*SCALE,y*SCALE,points[[x,y]]);
}
window.addEventListener("load",loadDemo,true);
