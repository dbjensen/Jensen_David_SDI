/*
David Jensen
SDI Section #3
Go To Training Day #2
2015/01/16
 */
// alert("Testing to see if the JS file is attached to the HTML.");

// Create an age calculator

// Ask the user their name
var name = prompt("Please type in your name:");

// console.log out the name
console.log(name);

// Welcome the user with an alert
alert("Welcom "+name+"!  Let's figure out how old you are.");

//Ask the user what year they are born
//age = current year subtract the year they were born
//Create a variable to catch the promted answer
var yearBorn=prompt("What year were you born");
console.log(yearBorn);

//What is the current Year?
var currentYear=2015;

//Calculate the age - create a variable for results
var age=currentYear-yearBorn-1;

console.log(name+" you are "+age+" years old.");
alert(name+" you are "+age+" years old.");