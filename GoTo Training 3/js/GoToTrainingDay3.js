
 /*
David Jensen
SDI Section #3
Go To Training Day #3
2015/01/21
 */
//alert("Testing to see if the JS file is attached to the HTML.");

 //Use an alert to test if the js file is connected to the html
 //alert("Testing to see if connected.")
/*
 //Check how many pears are in a fruit bowl
 //Create our "Fruit bowl"
 //Use an array, variable that holds multiple variables
 var bowlOfFruit = ["apple", "pear", "peach"];

 console.log(bowlOfFruit);

 //Find out how many items are in an array.
 //length property - items in an array
 //Dot  Syntax - "use a period"
 console.log(bowlOfFruit.length);

 //Call upon a specific item in the array
 console.log(bowlOfFruit[2]);

 //Create a variable to hold the total number of pears
 var totalNumPears = 0;

 //if(condition to test){Code that will run if condition is true}

 /*
 if else statement
 if(condition){
      code to run if condition is true
  }else{
      code to run if condition is false
  */

 //"8" == 8 true
 //"8" === 8 false (data type is different)
 // = is ana ssignment operator
/*
 if(bowlOfFruit[0] === "pear"){
        //Count the fruit as a peach
        //add one to the total num of pears
        console.log("This is a pear.");
        totalNumPears++; //
 }else{
       //code to run if not a pear
       console.log("This fruit is not a pear.");
 }

 if(bowlOfFruit[1] === "pear"){
  //Count the fruit as a peach
  //add one to the total num of pears
  console.log("This is a pear.");
  totalNumPears++; //
 }else{
  //code to run if not a pear
  console.log("This fruit is not a pear.");
 }

 if(bowlOfFruit[2] === "pear"){
  //Count the fruit as a peach
  //add one to the total num of pears
  console.log("This is a pear.");
  totalNumPears++; //
 }else{
  //code to run if not a pear
  console.log("This fruit is not a pear.");
 }

 console.log("There are "+totalNumPears+" pear(s) in the fruit bowl");

 //Loop - repetitive code

 //For Loop
 // for (initialize a variable; condition to test; increment of change) { code to run each time that the condition is true}


 var pearNumber = 0;

 for(var i=0; i<5; i++) {
  console.log("Inside the loop");
  console.log(i);


  //***** for loop with an array!


  for (var j = 0; j < bowlOfFruit.length; j++) {
   //Use j, as the index #
   console.log(bowlOfFruit[j]);

   //test each fruit to see if it is a pear
   if(bowlOfFruit[j] ==="pear"){
   }else {
      //If the fruit is not a pear
      console.log("This is not a pear.");
   }
  }

 }

console.log("");

 //Validate prompts

 var userInput = prompt("Please type in you name:");

 //To make sure that it is not blank
 if(userInput === ""){
      console.log("Left it blank");
      //Reprompt  the use  - give thema second chance
      //to set the variable
      userInput = prompt("Please don't leave blank.  What is kyour name?")?
 }




//check if the user types in a number

 var age = prompt("Please type in your age:");

 //
 //

 console.log(isNaN("cat")); //returns true
 console.log(isNaN(7)); //returns false

 //test if age is a number
 if(isNaN(age)){
  //This means
  //
  age = prompt("Please only use numbers. What is your age?");
 }


var userYesNo = prompt("Please type in yes or no?");

 //Limit to just those choices
 if(userYesNo != "Yes" && userYesNo != "No" && userYesNo != "yes"){

 }
*/

 //Grade letter calc

 var grade = 59;

 // test what grade - normal grading scale
 //A = 100 - 90
 //B = 89 - 80
 //C = 79 - 70
 //D = 69 - 60
 //F = 59 and under

 // if else if else statement

 if(grade>=90){
     console.log("You have a "+grade+"% , which means you have earned a(n) A in the class!");
 }else if(grade>=80){
     console.log("You have a "+grade+"% , which means you have earned a(n) B in the class!");
 }else if(grade>=70){
     console.log("You have a "+grade+"% , which means you have earned a(n) C in the class!");
 }else if(grade>=60){
     console.log("You have a "+grade+"% , which means you have earned a(n) D in the class!");
 }else{
     console.log("You have a "+grade+"% , which means you have earned a(n) F in the class!");
 }


var results = (grade>=60)? "Yea you pass":"no you fail";
console.log(results);



























