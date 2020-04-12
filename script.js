var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");//class
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var btn = document.createElement("button");

function setGradient() {
	//syntax same as in CSS
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

btn.onclick = function() {
	var minm = 100000;
	var maxm = 999999;
	color1.value = "#"+ (Math.floor(Math.random()*(maxm - minm +1))+minm);
	color2.value = "#"+ (Math.floor(Math.random()*(maxm - minm +1))+minm);
	setGradient();
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
//we dont add () bc we want function to be launched affter every input

//Random color button
btn.innerHTML = "Random Color";
document.body.appendChild(btn);

