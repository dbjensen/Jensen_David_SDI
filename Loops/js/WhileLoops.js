
 /*
David Jensen
SDI Section #3
for Loops
2015/01/26
 */
//alert("Testing to see if the JS file is attached to the HTML.");

 //while loops
 console.log("--------------------Loops--------------------");
 //while loops
var b = 10;                                 //sets up the index

 while (b > 0){                             //checks the condition
  console.log(b +" kegs on the wall");
  b --;                                     //increments or decrements the index
 }

 console.log("--------------------Do While Loops--------------------");
 //do while loops
var c = 10;

 do{
  console.log(c +" kegs on the wall");      //code runs before the condition
  c--;                                      //
 }
 while (c > 0);                             //runs after code

/*
NOTICED!!!   while: while this condition is true run those instructions.
NOTICED!!!   do while: do those instruction while this condition is true.
 */

//for loops
console.log("--------------------For Loops--------------------");

 for (var i= 10; i > 0; i --){
  console.log(i +" kegs on the wall.");
 }



//WORKING WITH LOOPS
 console.log("--------------------WHILE LOOPS--------------------");
 var a = 1;

 while (a < 1);{
  console.log(a);
  a++
 }

 //WORKING WITH LOOPS
 console.log("--------------------DO WHILE LOOPS--------------------");

 var a = 100;

 do{
  console.log(a);
  a++
 }while (a < 10);

 var i = 1;        //setup of index

 while (i < 10){   //check the condition
  //
  //
  //
  i++;             //incrementing the index
 }


 //WORKING WITH LOOPS
 console.log("--------------------FOR LOOPS--------------------");

for ( var i = 1 ; i < 10 ; i++ ){        //( setup index ; check condition ; increment index )
 //
 //
 //
}

// the "break".  Jumps us out of the loop

 for (var i = 1;i < 5000;i++){
  //
  //
  if (i == 101){
   break;
  }
  //
 }

// the "continue".  Done with current iteration, starts back up at top.









