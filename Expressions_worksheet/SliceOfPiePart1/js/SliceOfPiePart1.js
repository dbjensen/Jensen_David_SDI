
 /*
David Jensen
SDI Section #3
Slice of Pie Part 1
2015/01/16
 */
//alert("Testing to see if the JS file is attached to the HTML.");

//Calculate how many slices of pizza a number of students will get from a number of pizzas and a number or slices per pizza

 //Declaring variables and expressions

 var numStu = prompt("Please enter the number of students at the party:");
 var numPiz = prompt("Please enter the number of pizza ordered:");
 var numSli = prompt("Please enter the number of slices per pizza:");
 var numTot = numPiz * numSli;
 var sliPerStu = numTot / numStu;

 //Console out the results

 console.log(numStu);
 console.log(numPiz);
 console.log(numSli);
 console.log(numTot);
 console.log(sliPerStu.toFixed(2));

 //alert() the number of slices each person at the party may eat

 //added toFixed to not have a lengthy decimal.

 alert("Each person ate "+ sliPerStu.toFixed(2) +" slices of pizza at the party.");