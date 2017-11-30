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
    "<br><hr>Width of window: " + width + "<br>" + 
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
capitalize("hello weekend!<br><hr>");

//Time convert
function timeConvert (minutes) {
	var hours = Math.floor(minutes / 60);
	var restminutes = minutes % 60;
	document.getElementById("output-advanced").innerHTML +=
	minutes + " minutes are " + hours + " hours and " + 
	restminutes + " minutes.<br><hr>";
}

timeConvert(378);

//calc Date
var calcYesterday = (function ( datestring ) {
	var ms = Date.parse(datestring);
	var d = new Date(ms);
	d.setDate(d.getDate()-1);
	return d.toDateString();	
});

document.getElementById("output-advanced").innerHTML +=
calcYesterday("May 1, 2017") +  "<br><hr>";

//Dynamic Background
//number.toString(radix) -->
//Which base to use for representing a numeric value. Must be an integer between 2 and 36
function randomBackground () {
	var red = Math.floor((Math.random() * 255) + 1);
	var blue = Math.floor((Math.random() * 255) + 1);
	var green = Math.floor((Math.random() * 255) + 1);
	document.body.style.backgroundColor = "rgb(" + red + ","  + green + ","  +blue + ")";
	document.getElementById("color").innerHTML = "rgb(" + red + ","  + green + ","  + blue + ")<br>"
	+ "HEX: #" + red.toString(16) + green.toString(16) + blue.toString(16);

}

window.addEventListener('load', randomBackground);
setInterval(randomBackground, 2000);

// String.prototype.toRGB = function() {
//   var rgb = this.split( ',' ) ;
//   this.r=parseInt( rgb[0].substring(4) ) ; // skip rgb(
//   this.g=parseInt( rgb[1] ) ; // this is just g
//   this.b=parseInt( rgb[2] ) ; // parseInt scraps trailing )
// }
//hexString = yourNumber.toString(16);
//console.log(num.toString(16));






