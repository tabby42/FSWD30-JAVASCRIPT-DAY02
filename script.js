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








