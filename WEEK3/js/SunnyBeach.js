
 /*
David Jensen
SDI Section #3
Video: Nesting Logic
2015/01/20
 */
//alert("Testing to see if the JS file is attached to the HTML.");

 var choice1 = "goToTheBeach";                                          //Variable string.
 var choice2 = "goToTheMovies";                                         //Variable string.
 var wear1 = "swimTrunks";                                              //Variable string.
 var wear2 = "pantsShirt";                                              //Variable string.
 var temp = prompt("Please enter the high temperature for today:");     //Prompt for temperature.
 var wTemp = prompt("Please enter the temperature of the water:");       //Prompt for temperature of water.

 if(temp>=70){                                                          //Conditional statement.
  console.log(choice1);                                                 //Action code of true conditional.
  if(wTemp>=65){                                                        //Nesting conditional statement.
   console.log(wear1);
  }else console.log(wear2);
 }else {
  console.log(choice2+" "+wear2);                                       //Action code of false conditional.
 }