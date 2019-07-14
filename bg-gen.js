var style = document.querySelector("h3");
var colorOne = document.querySelector(".color-one");
var colorTwo = document.querySelector(".color-two");
var body = document.getElementById("body-bg");

function createGradient(){
	body.style.background = 
	"linear-gradient(to right,"
	+ colorOne.value
	+ ", "
	+ colorTwo.value 
	+ ")";

	style.textContent = body.style.background + ";";
}

colorOne.addEventListener("input", createGradient);

colorTwo.addEventListener("input", createGradient);