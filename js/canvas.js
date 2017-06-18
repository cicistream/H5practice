var gravel=new Image();
gravel.src="img/stone.jpg";
gravel.onload =function(){
	drawDiadlog();
}
function creatCanopyPath(context){
	context.beginPath();
	context.moveTo(-25,-50);
	context.lineTo(-10,-80);
	context.lineTo(-20,-80);
	context.lineTo(-5,-110);
	context.lineTo(-15,-110);
	
	context.lineTo(0,-140);
	
	context.lineTo(15,-110);
	context.lineTo(5,-110);
	context.lineTo(20,-80);
	context.lineTo(10,-80);
	context.lineTo(25,-50);
	
	context.closePath();
}
function drawTree(context){
	
	creatCanopyPath(context);
	
	context.lineWidth=4;
	context.lineJoin='round'; //bevel|round|miter
	//context.linCap butt|round|square
	context.strokeStyle='#663300';
	context.stroke();
	context.fillStyle='#390';
	context.fill();
	context.fillStyle='#630';
	
	var trunkGradient=context.createLinearGradient(-5,-50,5,-50);
	trunkGradient.addColorStop(0,'#630');
	trunkGradient.addColorStop(0.4,'#960');
	trunkGradient.addColorStop(1,'#520');
	context.fillStyle=trunkGradient;
	context.fillRect(-5,-50,10,50);
	
	var canopyShadow=context.createLinearGradient(0,-50,0,0);
	canopyShadow.addColorStop(0,'rgba(0,0,0,0.5)');
	canopyShadow.addColorStop(0.2,'rgba(0,0,0,0.0)');
	context.fillStyle= canopyShadow;
	context.fillRect(-5,-50,10,50);
	//context.drawImage(bark,-5,-50,10,50);
	context.transform(1,0,-0.5,1,0,0);
	context.scale(1,0.6);
	context.fillStyle='rgba(0,0,0,0.2)';
	context.fillRect(-5,-50,10,50);
	creatCanopyPath(context);
	context.fill();
	context.restore();
	
	context.save();
	context.font='60px impact';
	context.fillStyle='#960';
	context.textAlign='center';
	context.shadowColor ='rgba(0,0,0,0.1)';
	context.shadowOffsetX=15;
	context.shadowOffsetY=-10;
	context.shadowBlur=2;
	context.fillText('Happy Trails!',200,60,400);
	context.restore();
	
}
function drawDiadlog(){
	var canvas=document.getElementById("dialog1");
	var context=canvas.getContext('2d');
	
	context.save();
	context.translate(130,250);
    drawTree(context);
	context.restore();
	
	context.save();
	context.translate(260,500);
	context.scale(2,2);
	drawTree(context);
	context.restore();
	
//	context.save();
//	context.transform(1,0,0.5,1,0,0);
//	context.scale(1,0.6);
//	context.fillStyle='rgba(0,0,0,0.2)';
//	context.fillRect(-5,-50,10,50);
//	creatCanopyPath(context);
//	context.fill();
//	context.restore();
	
	context.save();
	context.translate(-10,350);
	context.beginPath();
	context.moveTo(0,0);
	context.quadraticCurveTo(170,-50,260,-190);
	context.quadraticCurveTo(310,-250,410,-250);
	context.strokeStyle=context.createPattern(gravel,'repeat')
	context.lineWidth=20;
	context.stroke();
	context.restore();
}

//window.addEventListener("load",drawDiadlog,true);