
 /*
 David Jensen
 SDI Section #3
 Conditionals Assignment
 2015/01/22
 */
 //alert("Testing to see if the JS file is attached to the HTML.");

//Declaring  and assigning variables
 var blindsType;                                 //Thin or wide
 var winNum;                                     //Number of windows to treat
 var completeCare;                               //Yes or no
 var material;                                   //Wood or vinyl

 //array set for rate
 var rate = [woodWideFlatRate, woodSkinnyFlatRate, woodWidePerWin, woodSkinnyPerWin, vinylWideFlatRate, vinylSkinnyFlatRate, vinylWidePerWin, vinylSkinnyPerWin];
 var subCost;                                    //subCost is rate * winNum
 var discount = 0.25;                            //25% off totalCost only if all windows will be treated
 var totalCost = subCost - discount;             //totalCost = subCost - discount

 //Declaring and assigning variables for rate array
 var woodWideFlatRate = 60.00;
 var woodSkinnyFlatRate = 50.00;
 var woodWidePerWin = 70.00;
 var woodSkinnyPerWin = 60.00;
 var vinylWideFlatRate = 40.00;
 var vinylSkinnyFlatRate = 30.00;
 var vinylWidePerWin = 50.00;
 var vinylSkinnyPerWin = 40.00;

 //Prompt user for thin or wide blinds
 //Validating user input for blindsType
 //do while statement
 do{
  blindsType = prompt("Please answer with the words thin or wide. Would you like thin or wide blinds?");
  //Make answers lower case
  blindsType = blindsType.toLowerCase();
 }
 while (blindsType != "thin" && blindsType != "wide" === true);
 //Write answer to console.log
 console.log("Client wants the "+blindsType+" blinds");

 //Prompt user for number of windows to treat
 //Validating user input as a number
 //do while statement
 do{
  winNum = prompt("Please answer with a number. How many windows will be treated?");
 }
 while (isNaN(winNum) == true);
 //Write answer to console.log
 console.log("Client wants "+winNum+" windows treated.");

 //Prompt for user for yes or no. Will the whole house be treated?
 //Validating user input for completeCare
 //do while statement
 do{
  completeCare = prompt("Please answer with the words yes or no. Will the whole building be treated?");
  //Make answers lower case
  completeCare = completeCare.toLowerCase();
 }
 while (completeCare != "yes" && completeCare != "no" ===true);
 //Write answer to console.log
 console.log("Client answered "+completeCare+" to having all windows treated.");

 //Prompt user for wood or vinyl
 //Validating user input for material
 //do while statement
 do{
  material = prompt("Please answer with the words wood or vinyl. Would you like wood or vinyl blinds?");
  //Make answers lower case
  material = material.toLowerCase();
 }
 while (material != "wood" && material != "vinyl" === true);
 //Write answer to console.log
 console.log("Client wants the "+material+" type of blinds");

 //else if statement to combine flatRate versus perWin and wood versus vinyl comparing user input choices
 if(winNum >= 5 && material === "wood" && blindsType === "wide"){
  console.log("Client wants "+winNum+" windows treated with "+material+" blinds at $"+woodWideFlatRate+" per window.");
 }else if(winNum >= 5 && material === "wood" && blindsType === "thin"){
  console.log("Client wants "+winNum+" windows treated with "+material+" blinds at $"+woodSkinnyFlatRate+" per window.");
 }else if(winNum < 5 && material === "wood" && blindsType === "wide"){
  console.log("Client wants "+winNum+" windows treated with "+material+" blinds at $"+woodWidePerWin+" per window.");
 }else if(winNum < 5 && material === "wood" && blindsType === "thin"){
  console.log("Client wants "+winNum+" windows treated with "+material+" blinds at $"+woodSkinnyPerWin+" per window.");
 }else if(winNum >= 5 && material === "vinyl" && blindsType === "wide"){
  console.log("Client wants "+winNum+" windows treated with "+material+" blinds at $"+vinylWideFlatRate+" per window");
 }else if(winNum >= 5 && material === "vinyl" && blindsType === "thin"){
  console.log("Client wants "+winNum+" windows treated with "+material+" blinds at $"+vinylSkinnyFlatRate+" per window.");
 }else if(winNum < 5 && material === "vinyl" && blindsType === "wide"){
  console.log("Client wants "+winNum+" windows treated with "+material+" blinds at $"+vinylWidePerWin+" per window.");
 }else{
  console.log("Client wants "+winNum+" windows treated with "+material+" blinds at $"+vinylSkinnyPerWin+" per window.")
 }



 //else if statement to separate wide from thin blinds
 //if(console.log())






















