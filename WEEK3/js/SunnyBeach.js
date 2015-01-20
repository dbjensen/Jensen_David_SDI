
 /*
David Jensen
SDI Section #3
Video: Logic Operators
2015/01/20
 */
//alert("Testing to see if the JS file is attached to the HTML.");

 var budget = 300;
 var iPhonePrice = 199.99;
 var wonLottery = true;

 //if the price of the phone is less than our budget AND if our paycheck is over 300
 if(iPhonePrice < budget || wonLottery){
   console.log("We can buy the phone!");
 }else{
   console.log("No phone for you!!");
 }
/*
a === b === c is not the proper way to compare all three variables.  The boolean result from a === b is true but true === c will give you an error.
Instead write this: a === b && b === c.
Relational Operators go in between PAIRS of objects.
Logical Operators go in between Relational Expressions or Boolean values.
 */