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
//2015 - "1975" - 1  = 36
var age=currentYear-yearBorn-1;

console.log(name+" you are "+age+" years old.");
alert(name+" you are "+age+" years old.");

//Make it MORE complex

//Ask user how many years in the future they would like to know their age.

var yearsMore = prompt("How many years in the future would you like to know your age?");

console.log(yearsMore);

//Calculate future age

// + plus sign does double duty - ADDition and Concatenation

//prompts ONLY return text strings!

// 10 - returns "10"

//"3910" not equal #3910

//Casting or Parsing an integer

//Casting - Number() is when we treat one variable type as another temporarily

//parseInt() looks for a leading number in a text string

var futureAge = Number(age)+parseInt(yearsMore);
console.log(futureAge);

//Create a final out text string variable
var finalOutput = "You will be "+futureAge+" in "+yearsMore+" years.";

console.log(finalOutput);
alert(finalOutput);

/*
var a = Number("40 years old");
console.log(a);

var b = Number("40");
console.log(b);
//Returns NaN - Not a Number

var c = parseInt("40");
console.log(c);

var d = parseInt("40 years old");
console.log(d);

var f = parseInt("I am 40 years old");
console.log(f);
*/
