
function mood(){
	var box = document.getElementById('b');
	var num = Math.random();
	document.getElementById('t').innerHTML = num;
	if (num < 0.3) {
		box.innerHTML = "<circle class=\"happy\" cx=\"25\" cy=\"25\" r=\"23.23\"/><circle class=\"happy\" cx=\"17.61\" cy=\"22\" r=\"2.02\"/><circle class=\"happy\" cx=\"32.39\" cy=\"22\" r=\"2.02\"/><path class=\"happy\" d=\"M21.5,31.33A3.75,3.75,0,0,0,25,34.19a3.75,3.75,0,0,0,3.5-2.85\"/>";
		document.getElementById('t').innerHTML = "happy";
		$("#t").css("color","#3d8");
	} 
	else if (num < 0.6) {
		box.innerHTML = "<circle class=\"sad\" cx=\"25\" cy=\"25\" r=\"23.23\"/><circle class=\"sad\" cx=\"17.61\" cy=\"22\" r=\"2.02\"/><circle class=\"sad\" cx=\"32.39\" cy=\"22\" r=\"2.02\"/><path class=\"sad\" d=\"M28.5,34.19A3.75,3.75,0,0,0,25,31.33a3.75,3.75,0,0,0-3.5,2.85\"/>";
		document.getElementById('t').innerHTML = "sad";
		$("#t").css("color","#d66");
	}
	else {
		box.innerHTML = "<circle class=\"neut\" cx=\"25\" cy=\"25\" r=\"23.23\"/><circle class=\"neut\" cx=\"17.61\" cy=\"22\" r=\"2.02\"/><circle class=\"neut\" cx=\"32.39\" cy=\"22\" r=\"2.02\"/><line class=\"neut\" x1=\"20.84\" y1=\"32.06\" x2=\"29.16\" y2=\"32.06\"/>";
		document.getElementById('t').innerHTML = "neutral";
		$("#t").css("color","#ec5");
	};
}
mood();
$('.rerun').click(function(){	mood();});