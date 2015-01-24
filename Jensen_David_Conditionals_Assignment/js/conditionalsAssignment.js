
 /*
 David Jensen
 SDI Section #3
 Conditionals Assignment
 2015/01/22
 */
 //alert("Testing to see if the JS file is attached to the HTML.");

//Declaring  and assigning variables
 var clientName = prompt("Please type your name");     //Prompt for user name
 var blindsType;                                       //Thin or wide
 var winNum;                                           //Number of windows to treat
 var completeCare;                                     //Yes or no
 var material;                                         //Wood or vinyl

 //array set for rateArray
 var rateArray = ["woodWideFlatRate", "woodSkinnyFlatRate", "woodWidePerWin", "woodSkinnyPerWin", "vinylWideFlatRate", "vinylSkinnyFlatRate", "vinylWidePerWin", "vinylSkinnyPerWin"];
 var subCost;                                          //subCost is rateArray * winNum
 var totalCost;                                        //totalCost = subCost - discount
 var discount;                                         //25% off totalCost only if all windows will be treated


 //Declaring and assigning variables for rate array
 rateArray[0] = 60.00;
 rateArray[1] = 50.00;
 rateArray[2] = 70.00;
 rateArray[3] = 60.00;
 rateArray[4] = 40.00;
 rateArray[5] = 30.00;
 rateArray[6] = 50.00;
 rateArray[7] = 40.00;

 //Validate user input for name using ternary.
 if(clientName === ""){
  clientName = prompt("Please do not leave blank.  What is your name?");
 }

 //Validate to see if user typed in a number
 if(isNaN(clientName) != true){
  clientName = prompt("Please do not type numbers here.  What is your name?");
 }

 console.log("Welcome "+clientName+".");

 //Prompt user for thin or wide blinds
 //Validating user input for blindsType
 //do while statement
 do{
  blindsType = prompt("Would you like thin or wide blinds? Please answer with the words thin or wide.");
  //Make answers lower case
  blindsType = blindsType.toLowerCase();
 }
 while (blindsType != "thin" && blindsType != "wide" === true);
 //Write answer to console.log
 console.log("- requesting wants the "+blindsType+" blinds");

 //Prompt user for number of windows to treat
 //Validating user input as a number
 //do while statement
 do{
  winNum = prompt("How many windows will be treated? Please answer with a number.");
 }
 while (isNaN(winNum) == true);
 //Write answer to console.log
 console.log("- requesting wants "+winNum+" windows treated.");

 //Prompt for user for yes or no. Will the whole house be treated?
 //Validating user input for completeCare
 //do while statement
 do{
  completeCare = prompt("Will the whole building be treated? Please answer with the words yes or no.");
  //Make answers lower case
  completeCare = completeCare.toLowerCase();
 }
 while (completeCare != "yes" && completeCare != "no" ===true);
 //Write answer to console.log
 console.log("- requesting answered "+completeCare+" to having all windows treated.");

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
 console.log("- requesting wants the "+material+" type of blinds");

 //else if statement to combine flatRate versus perWin and wood versus vinyl and wide versus thin blades, comparing user input choices
 if(winNum >= 5 && material === "wood" && blindsType === "wide"){
  console.log("Client wants "+winNum+" windows treated with "+blindsType+" "+material+" blinds at $"+parseInt(rateArray[0])+" per window.");          //rate[0]:60.00 Flat rate
  subCost = parseInt(rateArray[0]) * winNum;

  (completeCare === "yes")? discount = parseInt(subCost) * 0.25: discount = parseInt(subCost) - parseInt(subCost);
  totalCost = parseInt(subCost) - parseInt(discount);
 }else if(winNum >= 5 && material === "wood" && blindsType === "thin"){
  console.log("Client wants "+winNum+" windows treated with "+blindsType+" "+material+" blinds at $"+parseInt(rateArray[1])+" per window.");        //rate[1]:50.00 Flat rate
  subCost = parseInt(rateArray[1]) * winNum;

  (completeCare === "yes")? discount = parseInt(subCost) * 0.25: discount = parseInt(subCost) - parseInt(subCost);
  totalCost = parseInt(subCost) - parseInt(discount);
 }else if(winNum < 5 && material === "wood" && blindsType === "wide"){
  console.log("Client wants "+winNum+" windows treated with "+blindsType+" "+material+" blinds at $"+parseInt(rateArray[2])+" per window.");            //rate[2]:70.00 per window rate
  subCost = parseInt(rateArray[2]) * winNum;

  (completeCare === "yes")? discount = parseInt(subCost) * 0.25: discount = parseInt(subCost) - parseInt(subCost);
  totalCost = parseInt(subCost) - parseInt(discount);
 }else if(winNum < 5 && material === "wood" && blindsType === "thin"){
  console.log("Client wants "+winNum+" windows treated with "+blindsType+" "+material+" blinds at $"+parseInt(rateArray[3])+" per window.");          //rate[3]:60.00 per window rate
  subCost = parseInt(rateArray[3]) * winNum;

  (completeCare === "yes")? discount = parseInt(subCost) * 0.25: discount = parseInt(subCost) - parseInt(subCost);
  totalCost = parseInt(subCost) - parseInt(discount);
 }else if(winNum >= 5 && material === "vinyl" && blindsType === "wide"){
  console.log("Client wants "+winNum+" windows treated with "+blindsType+" "+material+" blinds at $"+parseInt(rateArray[4])+" per window");          //rate[4]:40.00 Flat rate
  subCost = parseInt(rateArray[4]) * winNum;

  (completeCare === "yes")? discount = parseInt(subCost) * 0.25: discount = parseInt(subCost) - parseInt(subCost);
  totalCost = parseInt(subCost) - parseInt(discount);
 }else if(winNum >= 5 && material === "vinyl" && blindsType === "thin"){
  console.log("Client wants "+winNum+" windows treated with "+blindsType+" "+material+" blinds at $"+parseInt(rateArray[5])+" per window.");       //rate[5]:30.00 Flat rate
  subCost = parseInt(rateArray[5]) * winNum;

  (completeCare === "yes")? discount = parseInt(subCost) * 0.25: discount = parseInt(subCost) - parseInt(subCost);
  totalCost = parseInt(subCost) - parseInt(discount);
 }else if(winNum < 5 && material === "vinyl" && blindsType === "wide"){
  console.log("Client wants "+winNum+" windows treated with "+blindsType+" "+material+" blinds at $"+parseInt(rateArray[6])+" per window.");           //rate[6]:50.00 per window rate
  subCost = parseInt(rateArray[6]) * winNum;

  (completeCare === "yes")? discount = parseInt(subCost) * 0.25: discount = parseInt(subCost) - parseInt(subCost);
  totalCost = parseInt(subCost) - parseInt(discount);
 }else{
  console.log("Client wants "+winNum+" windows treated with "+blindsType+" "+material+" blinds at $"+parseInt(rateArray[7])+" per window.");          //rate[7]:40.00 per window rate
  subCost = parseInt(rateArray[7]) * winNum;

  (completeCare === "yes")? discount = parseInt(subCost) * 0.25: discount = parseInt(subCost) - parseInt(subCost);
  totalCost = parseInt(subCost) - parseInt(discount);
 }



 (completeCare === "yes")? discount = parseInt(subCost) * 0.25: discount = parseInt(subCost) - parseInt(subCost);
 totalCost = parseInt(subCost) - parseInt(discount);

 console.log("____________________________________________");
 console.log(clientName+" here are the final numbers:");
 console.log("Subtotal is $"+subCost.toFixed(2)+".");
 console.log("Discount is $"+parseInt(discount).toFixed(2)+".");
 console.log("Total cost is $"+parseInt(totalCost).toFixed(2)+".");
 console.log("____________________________________________");



 /*
  Welcome david.
  conditionalsAssignment.js:56 Client wants the thin blinds
  conditionalsAssignment.js:66 Client wants 8 windows treated.
  conditionalsAssignment.js:78 Client answered yes to having all windows treated.
  conditionalsAssignment.js:90 Client wants the wood type of blinds
  conditionalsAssignment.js:100 Client wants 8 windows treated with thin wood blinds at $50 per window.
  conditionalsAssignment.js:148 ____________________________________________
  conditionalsAssignment.js:149 david here are the final numbers:
  conditionalsAssignment.js:150 Subtotal is $400.00.
  conditionalsAssignment.js:151 Discount is $100.00.
  conditionalsAssignment.js:152 Total cost is $300.00.
  conditionalsAssignment.js:153 ____________________________________________
  */

















