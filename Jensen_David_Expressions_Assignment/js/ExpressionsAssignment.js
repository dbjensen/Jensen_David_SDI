/*
David Jensen
SDI Section #3
Expressions Assignment
2015/01/17
 */

//Boat Rental.
//Number of persons in party (adults and children).
//Number of life-vests.
//Speed boat (3 sizes, 3 different costs).
//Engine type (3 types, 3 speeds, 3 different costs).
//Number of days requested (price per day).

//Declaring Variables
alert("Welcome to your boat rental service.  Let's get started.");
var adultNum = prompt("Please tell us how many adults are in your group:");                 //Number of adults.
var childNum = prompt("Please tell us how many children are in your group:");               //Number of children.
var totalNum = parseInt(adultNum) + parseInt(childNum);                                                         //Total number of patrons.
var vestPrice = [10.00, 5.00];                                                              //Array of adult and child live vest prices.
var adultVest = prompt("Please tell us how many adult size life vests you need:");          //Number of adult life vests needed.
var childVest = prompt("Please tell us how many child size life vests you need:");          //Number of child life vests needed.
var totalVest = (adultVest * vestPrice[0]) + (childVest * vestPrice[1]);                    //Total cost of all life vest rentals per day.
var boatSize = {sBoat:30.00, mBoat:55.00, lBoat:70.00};                                     //Boat sizes with assigned variables.
var boatChoice;
//Available boat sizes depend on the total group size.
alert("Please be aware that the number of patrons in your group directly effect your available minimum and maximum sized rental boat.");
//Using the else if statement to determine boatSize. "small, 1-4 seats" "medium, 5-8 seats" "large, 9-12 seats"
if (1 <= totalNum <= 4) {
 boatChoice = boatSize[0];
}  else if (5 <= totalNum <= 8) {
 boatChoice = boatSize[1];
}  else if (9 <= totalNum <= 12) {
 boatChoice = boatSize[2];
}  else {
 console.log("We are sorry to inform you that you can not have more than 12 patrons total per boat.  Please divide up your group and start over.");
}

var dayNum = prompt("Please tell us how many days you will be renting the boat:");          //Number of days renting all equipment.
var pricePerDay = totalVest + boatChoice;                                                   //Total price per day rental of all equipment.
var totalCost = pricePerDay * dayNum;
console.log("There are a total of "+adultNum+" adults in your group.");
console.log("There are a total of "+childNum+" children in your group.");
console.log("There are a total of "+totalNum+" persons in your group.");
console.log("You told us that you need "+adultVest+" adult vests for your group.");
console.log("You told us that you need "+childVest+" children's vests for your group.");
console.log("The total cost of all adult and child life vest rental is $"+totalVest+" per day.")
console.log("With "+totalNum+" patron(s) in your group we are offering you the $"+boatChoice.value+" boat which will seat all of your patrons. The total cost comes to $"+totalCost+".");

