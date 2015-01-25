
 /*
David Jensen
SDI Section #3
Functions - Function vs Procedure
2015/01/25
 */
//alert("Testing to see if the JS file is attached to the HTML.");

 /*
 var functionName = function(){
    "code the function runs;
 }
 functionName();
  */
 //var functionName = function (){
   //code to run
 //}
 //functionName();

 var calcArea = function(width, height){    //defining function THIS HAS TO BE FIRST
  //code for function to run
  var area = width * height;
  return area;
 }

 var a  = calcArea(20, 30);                 //invoking function THIS MUST COME AFTER DEFINING

 console.log(a);




