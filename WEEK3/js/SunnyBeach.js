
 /*
David Jensen
SDI Section #3
Video: else if
2015/01/20
 */
//alert("Testing to see if the JS file is attached to the HTML.");

 var kidHeight = 46;
 var minHeight = 48;
 var wParentHeight = 45;        //the height of the kid with the parent

 //if the child is old enough, print to he console "you can ride!"
 //if the kid is over 48 inches in height.
 if(kidHeight > minHeight){
  //code performed if condition is true.
  console.log("you can ride the coaster!");
 }else if(kidHeight > wParentHeight){
  //You can ride with a parent present.
  console.log("You can ride, but only with a parent present!");
 }else{
  //sorry you have growing to do.
  console.log("Sorry kid, you've got some growing to do first!");
 }