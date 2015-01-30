
 /*
David Jensen
SDI Section #3
Functions_Assignment
2015/01/27
 */
//alert("Testing to see if the JS file is attached to the HTML.");

//Calculator to estimate how many gallons of water can fit in a pool.  User input to get size of pool and find the amount of gallons it can hold.

 var name = prompt("Please type your name: ");                                                                           //Declaring name and defining with prompt.

 var rVolL;                                                                                                              //Declaring pool type rectangle.
 var rVolW;                                                                                                              //Declaring pool type rectangle.
 var rVolH;                                                                                                              //Declaring pool type rectangle.
 var cVolD;                                                                                                              //Declaring pool type circle.
 var cVolH;                                                                                                              //Declaring pool type circle.
 var poolType;                                                                                                           //Declaring poolType variable.
 var galChange = 0.004329;

 while(name === "" || (!isNaN(name))){                                                                                   //Using validating conditionals.
  if(name === ""){                                                                                                       //"if statement" within a "while statement" co continue loop and validation.
   name = prompt("Please do not leave blank. Please type your name: ");                                                  //Re-prompting to type name.
  }else{                                                                                                                 //else second condition.
   name = prompt("Please do not use numbers here. Please type your name: ");                                             //Re-prompting to match second condition.
  }                                                                                                                      //Close if.
 }                                                                                                                       //Close while.

 console.log("Clients name is "+name+".");                                                                               //Console log Client name.

 poolType = prompt("Please choose your pool type.\nType either R for rectangle or C for circle:");                       //Prompting user for pool type.
 poolType = poolType.toLowerCase();                                                                                      //Make poolType value all lower case.

 while(poolType != "r" && poolType != "c"){                                                                              //"while loop" validating poolType results.
  poolType = prompt("Please enter only R for Rectangle or C for Circle.");                                               //Re-prompting for poolType.
 }                                                                                                                       //Close "while loop".

 if(poolType != "r"){                                                                                                    //validate poolType and assignment for the action of the "if statement".
  cVolD = prompt("Please type in the diameter of the pool in inches:");                                                  //Prompting for diameter of pool in inches.
  cVolH = prompt("Please type in the height of the pool in inches:");                                                    //Prompting for height of pool in inches.
  console.log("You have a circular pool with a diameter of "+cVolD+" inches and a height of "+cVolH+" inches.");         //Console log verification poolType and measurements.
 }                                                                                                                       //Close "if statement".

 if(poolType != "c"){                                                                                                    //validate poolType and assignment for the action of the "if statement".
  rVolL = prompt("Please type in the length of the pool in inches:");                                                    //Prompting for length of pool in inches.
  rVolW = prompt("Please type in the width of the pool in inches:");                                                     //Prompting for width of pool in inches.
  rVolH = prompt("Please type in the height of the pool in inches:");                                                    //Prompting for height of pool in inches.
  //Console log verification poolType and measurements.
  console.log("You have a rectangular pool with the length of "+rVolL+" inches, width of "+rVolW+" inches, and height of "+rVolH+" inches.");
 }                                                                                                                       //Close "if statement".

 function poolVolRectangle(rectangleLength, rectangleWidth, rectangleHeight){                                            //Function to calculate volume of rectangular pool in cubic inches.
  var rectangleVolume = Number(rectangleLength * rectangleWidth * rectangleHeight);                                      //Expression for Volume by use of user input.
  return rectangleVolume;                                                                                                //Returning volume of rectangle.
 }                                                                                                                       //Close "if statement".

 function poolVolCircle(circleDiameter, circleHeight){                                                                   //Function to calculate volume of circular pool in cubic inches.
  var circleVolume = Number(Math.PI * ((circleDiameter / 2) * (circleDiameter / 2)) * circleHeight);                     //Expression for Volume by use of user input.
  return circleVolume;                                                                                                   //Returning volume of circle.
 }                                                                                                                       //Close "if statement".

 if(poolType != "c"){                                                                                                    //"if statement".
  var resultsR = poolVolRectangle(rVolL, rVolW, rVolH);                                                                  //Declaring function variables calling function for rectangular pool.
  //Console log in cubic inches and calculated to gallons.
  console.log("Your pool can hold "+resultsR+" cubic inches of water.\n This is the same as "+Math.round(resultsR * galChange)+" gallons.");
 }else{                                                                                                                  //"else statement second option.
  var resultsC = poolVolCircle(cVolD, cVolH);                                                                            //Declaring function variables calling function for circular pool.
  //Console log in cubic inches and calculated to gallons.
  console.log("Your pool can hold "+Math.round(resultsC)+" cubic inches of water.\n This is the same as "+Math.round(resultsC * galChange)+" gallons.");
 }                                                                                                                       //Close "if statement".

/*
 My tests

 Clients name is David.
 Functions_Assignment.js:50 You have a rectangular pool with the length of 400 inches, width of 200 inches, and height of 50 inches.
 Functions_Assignment.js:66 Your pool can hold 4000000 cubic inches of water.
 This is the same as 17316 gallons.

 You have a circular pool with a diameter of 500 inches and a height of 50 inches.
 Functions_Assignment.js:70 Your pool can hold 9817477 cubic inches of water.
 This is the same as 42500 gallons.
 */



