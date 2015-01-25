
 /*
David Jensen
SDI Section #3
Functions - Function vs Procedure
2015/01/25
 */
//alert("Testing to see if the JS file is attached to the HTML.");

//This is a function
 function calcAreaF(width, height){
  var area = width * height;
  return area;
 }

//This is a procedure
 function calcAreaP(width, height){
  var area = width * height;
  console.log(area);     //Nothing returned
 }

