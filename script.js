//Write a function named crystalGazer() 
//that takes four arguments, number of children, 
//partner's name, geographic location and job title
function crystalGazer( numChildren, partner, location, jobTitle ) {
	document.getElementById("output-basic").innerHTML = 
	"You will be a " + jobTitle +  " in " + location + 
	" and married to " +  partner + " with " +  numChildren + " children.<br><hr>";
}

crystalGazer(  2, "Joe", "Timbuktu", "gardener");

//Write a function called ageCalculator() 
//that takes two arguments birth year and current year
function ageCalculator(birthYear, currYear) {
	var age = currYear - birthYear;
	document.getElementById("output-basic").innerHTML +=
	"You are either " + (age - 1) + " or " + age + " years old.<br><hr>"; 
}

ageCalculator(1978, 2017);

function ageCalculatorImproved ( birthYear ) {
	var date = new Date();
	var currYear = date.getFullYear();
	var age = currYear - birthYear;
	document.getElementById("output-basic").innerHTML +=
	"You are either " + (age - 1) + " or " + age + " years old.<br><hr>"; 
}

ageCalculatorImproved(1907);

//function that converts degrees to radians
//degrees * (pi/180)
function degreeToRadians ( degree ) {
	return degree * (Math.PI / 180);
}

document.getElementById("output-basic").innerHTML +=
"37 degrees are " + degreeToRadians(37).toFixed(4) + " radians.<br><hr>";

//return volume and area of box
function boxAreaVolume ( width, height, depth) {
	var area = width * height;
	var volume = area * depth;
	return [area, volume];
}

document.getElementById("output-basic").innerHTML +=
"The area of the box is: " + boxAreaVolume(2,7, 5)[0] + 
"<br>The volume of the box is: " + boxAreaVolume(2, 7, 5)[1] + "<br><hr>";

//calc average
function calcAverage (gradeMath, gradePh, gradeEn) {
	var sum = gradeMath + gradePh + gradeEn;
	var avg = sum / 3;
	return [sum, avg];
}

document.getElementById("form").addEventListener("submit", function(e){
	e.preventDefault();
    var math = document.getElementsByName('math')[0].value;
    var physics = document.getElementsByName('physics')[0].value;
    var english = document.getElementsByName('english')[0].value;
    document.getElementById("form").innerHTML +=
    "<br>Sum: " + calcAverage(Number(math), Number(physics), Number(english))[0] + "<br>" +
    "Average: " + calcAverage(Number(math), Number(physics), Number(english))[1] + "<br><hr>";
});

//show window size
function windowSize() {
    var width = this.innerWidth;
    var height = this.innerHeight;
    document.getElementById("w-size").innerHTML =
    "Width of window: " + width + "<br>" + 
    "Height of window: " + height;
    
}

window.addEventListener('load', windowSize);
window.addEventListener('resize', windowSize);

//capitalize
//string.slice(start, end) 
//The slice() method extracts parts of a string and 
//returns the extracted parts in a new string
var capitalize = (function ( string ) {
	return string.charAt(0).toUpperCase() + string.slice(1);
});

document.getElementById("caps").innerHTML =
capitalize("hello weekend!");





