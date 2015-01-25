
 /*
David Jensen
SDI Section #3
Functions - Variable Scope
2015/01/24
 */
//alert("Testing to see if the JS file is attached to the HTML.");

 function outPutMsg(){
  console.log("Hello World");
 }

var width = 5;

function calcArea(){
 var width = 20;
 var height = 30;
 var area = width * height;
 console.log(area);
}

 calcArea();

 console.log(width);


