// Chapter 2, example 7.
// TRY IT OUT: Converting Strings to Numbers.

var myString = "56.02 degrees centigrade";
var myInt;
var myFloat;

document.write("\"" + myString + "\" is " + parseInt(myString) + " as an integer" + "<BR>");

myInt = parseInt(myString);
document.write("\"" + myString + "\" when converted to an integer equals " + myInt + "<BR>");

myFloat = parseFloat(myString);
document.write("\"" + myString + "\" when converted to a floating point number equals " + myFloat);