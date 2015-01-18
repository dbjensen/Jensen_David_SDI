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
var totalNum = adultNum + childNum;                                                         //Total number of patrons.
var adultVest = prompt("Please tell us how many adult size life vests you need:");          //Number of adult life vests needed.
var childVest = prompt("Please tell us how many child size life vests you need:");          //Number of child life vests needed.
var vestPrice = [10.00, 5.00];                                                              //Array of adult and child live vest prices.
var tvestPrice = adultVest + childVest;                                                     //Total cost of all life vest rentals per day.
var boatSize = ["small, 1-3 seats", "medium, 4-6 seats", "large, 7-8 seats"];               //Array of the 3 boat sizes.
var boatPrice = [30.00, 55.00, 70.00];                                                      //Array of the 3 boat prices per day.
var dayNum = prompt("Please tell us how many days you will be renting the boat:");          //Number of days renting all equipment.
var pricePerDay = parseFloat(tvestPrice.toFixed(2) + boatPrice.toFixed(2)) * dayNum;        //Total price per day rental of all equipment.
