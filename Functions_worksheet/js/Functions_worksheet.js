
 /*
David Jensen
SDI Section #3
Functions_worksheet
2015/01/16
 */
//alert("Testing to see if the JS file is attached to the HTML.");

 /*
 CIRCUMFERENCE 2(pi)R
 Parameter - Radius of the circle
 Return - Circumference of the circle
 Result to print to console - "The circumference of the circle is X"
 */

 var radius = prompt("Please enter a number to represent the radius of a circle.");                 //Declaring r by asking for user input for the radius distance.
 var circleDist = circumference(radius);                                                            //Declaring variable function name with argument from user input.

 function circumference(r){                                                                         //Parameter r accepting value of radius..
  var circle = 2 * Math.PI * (r);                                                                   //Declaring circle and using r to pick up radius.
  return circle;                                                                                    //Returning value of circle to variable circleDist.
 }
 console.log("The circumference of the circle is "+circleDist+".");                                 //Console out the results.



 /*
 STUNG
 Given: Victim's weight (in pounds)
 Parameters - Victim's weight (in pounds)
 Return - Number of Bee stings
 Result to print to the console - "It takes X bee stings to kill this animal."
  */

 var lbs = prompt("Please enter a number to represent the weight of an animal in pounds.");          //Declaring lbs by asking for user input for the weight of an animal.
 var beeNum = beePerPound(lbs);                                                                      //Declaring variable function name containing argument from input.

 function beePerPound(wUnit){                                                                        //Parameter wUnit accepts argument.
  var stingPerPound = 8.666666667;                                                                   //Declaring stings per pound variable.
  var beeStingNum = stingPerPound * wUnit;                                                           //Expression weight time bee stings per pound is total number of bee stings.
  return beeStingNum;                                                                                //Returning value of beeStingNum to variable beePerPound.
 }
 console.log("It takes "+beeNum+" bee stings to kill this animal.");                                 //Console out results.


//Sorry, I forgot all about the git-hub commits.