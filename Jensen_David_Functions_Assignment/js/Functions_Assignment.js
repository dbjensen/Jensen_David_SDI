
 /*
David Jensen
SDI Section #3
Functions_Assignment
2015/01/27
 */
//alert("Testing to see if the JS file is attached to the HTML.");


//Calculator to estimate how much chlorine is needed to be in a pool.  User input to get size of pool and find the amount of gallons it can hold.


 //User input Name
 var name = prompt("Please type your name!");                                                                           //Declaring name with prompt.
 do{
   name = prompt("Please do not leave your name blank. Please type your name!")
 }while (name === "" = true);


 while(name != (isNaN)) {
  do name = prompt("Please do not type numbers here. Please type your name!")
 }
 console.log("Hello " + name + ".");
 //User input pool type (Rectangular or circular).
 //User input pool measurements.
 var rectanglePool;                                                                                                     //Declaring pool type rectangle.
 var circlePool;
                                                                                                       //Declaring pool type circle.
 var totalRVolume = function(length, width, height){                                                                    //Declaring volume and function to hold for rectangular pool.
  var volumeR = length * width * height;                                                                                //Declaring parameters .
  return volumeR;                                                                                                       //Returning volume of rectangular pool.
 }

 var totalCVolume = function(radius, height){
  var volumeC = Math.PI * radius.Math.sqrt(2) * height;
  return volumeC;
 }




 var totalSVolume;                                                                                                      //Declaring volume to hold for circular pool.










 //Function call to calculate size of pool and volume of water to hold.
 //Function call (anonymous) to find total chlorine to add to pool. (A pool with l = 15, and w = 7, and h = 4 has 420 cubic feet and can hold about 3,141 gallons of water).

