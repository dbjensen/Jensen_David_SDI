
 /*
David Jensen
SDI Section #3
Functions_Assignment
2015/01/27
 */
//alert("Testing to see if the JS file is attached to the HTML.");

//Calculator to estimate how much chlorine is needed to be in a pool.  User input to get size of pool and find the amount of gallons it can hold.

 var name = prompt("Please type your name: ");                                                                           //Declaring name and defining with prompt.
 var rVolL;                                                                                                              //Declaring pool type rectangle.
 var rVolW;                                                                                                              //Declaring pool type rectangle.
 var rVolH;                                                                                                              //Declaring pool type rectangle.
 var cVolD;                                                                                                              //Declaring pool type circle.
 var cVolH;                                                                                                              //Declaring pool type circle.
 var poolType;                                                                                                           //Declaring poolType variable.

 while(name === "" || (!isNaN(name))){                                                                                   //Using validating conditionals.
  if(name === ""){                                                                                                       //"if statement" within a "while statement" co continue loop and validation.
   name = prompt("Please do not leave blank. Please type your name: ");                                                  //Re-prompting to type name.
  }else{                                                                                                                 //else second condition.
   name = prompt("Please do not use numbers here. Please type your name: ");                                             //Re-prompting to match second condition.
  }                                                                                                                      //Close if.
 }                                                                                                                       //Close while.
 console.log("Clients name is "+name+".");                                                                               //Console log Client name.


 poolType = prompt(name+", please choose your pool type.\nType either R for rectangle or C for circle:");
 poolType = poolType.toLowerCase();

 while(poolType === "" || (!isNaN(poolType)) || poolType != "r" || poolType != "c"){
  if(poolType === ""){
   poolType = prompt(name+", please do not leave this blank. Type either R for rectangular or C for circular:");
  }else if(!isNaN(poolType)){
   poolType = prompt(name+", please do not use numbers here. Type either R for rectangular or C for circular:");
  }else if(poolType != "r"){
   poolType = prompt(name+", please only use the correct letters as listed. Type either R for rectangular or C for circular:");
  }else if(poolType != "c"){
   poolType = prompt(name+", please only use the correct letters as listed. Type either R for rectangular or C for circular:");
  }else{
   console.log(poolType);
  }
 }
 




/*
 poolType = prompt(name+" please type the shape of the pool you have,\ntype R for rectangular or\ntype C for circular.");//Defining poolType be prompting user to type "R" for rectangular or "C" for circular.

 if(poolType === "" || poolType != "r" || poolType != "c"){                                                              //Using validating conditionals.                                       //"if statement" within a "while statement" co continue loop and validation.
   poolType = prompt("Please do not leave blank.\nPlease type either R for rectangular or C for circular.");             //Re-prompting for poolType.
  }else{                                                                                                                 //else if second or third condition.
   poolType = prompt("Please type either R for rectangular or C for circular.");                                         //Re-prompting for poolType.
 }                                                                                                                       //Close if.
 console.log(poolType);

 if(poolType === "r"){                                                                                                   //"if statement" to validate pool type.
  console.log(name+", you have declared your type of pool to be a rectangular pool");                                    //Console log rectangle pool.
  rVolL = prompt("We will need the size of your pool. Please give the length of the pool in inches:");
  rVolW = prompt("Please give the width of the pool in inches:");
  rVolH = prompt("Please five the height of the pool in inches:");
  cVolD = 0;
  cVolH = 0;
 }else{                                                                                                                  //Else second condition.
  console.log(name+", you have declared your type of pool to be a circular pool");                                       //Console log rectangle pool.
  cVolD = prompt("We will need the size of your pool. Please give the diameter of the pool in inches:");
  cVolH = prompt("Please give the width of the pool in inches:");
  rVolL = 0;
  rVolW = 0;
  rVolH = 0;
 }                                                                                                                       //Close if.


 //console.log(rVol);
 //console.log(cVol);


 //User input pool measurements.

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

*/