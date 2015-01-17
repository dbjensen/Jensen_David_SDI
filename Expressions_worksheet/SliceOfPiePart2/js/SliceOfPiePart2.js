
 /*
David Jensen
SDI Section #3
Slice of Pie Part 2
2015/01/16
 */
//alert("Testing to see if the JS file is attached to the HTML.");

//Calculate how many slices of pizza a number of students will get from a number of pizzas and a number or slices per pizza

 //Declaring variables and expressions

 var numStu = prompt("Please enter the number of students at the party:");         //Number of students.
 var numPiz = prompt("Please enter the number of pizza ordered:");                 //Number of pizzas ordered.
 var numSli = prompt("Please enter the number of slices per pizza:");              //Number of slices on each pizza.
 var numTot = numPiz * numSli;                                                     //Total number of pizza slices.
 var sliPerStu = numTot / numStu;                                                  //Total number of slices for each student.
 var wholeSlice;
 var remainder = numTot % numStu;


 //Console out the results

 console.log(numStu);
 console.log(numPiz);
 console.log(numSli);
 console.log(numTot);
 console.log(sliPerStu.toFixed(2));
 console.log(remainder);


 //alert() the number of slices each person at the party may eat

 //added toFixed to not have a lengthy decimal.

 //alert("Each person ate "+ sliPerStu.toFixed(2) +" slices of pizza at the party.");

 alert("Sparky got "+remainder.toFixed(0)+" slices of pizza.");