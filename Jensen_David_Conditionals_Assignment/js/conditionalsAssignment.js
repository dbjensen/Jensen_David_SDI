
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
 blindsType = prompt("Would you like thin or wide blinds?");
 //Make answers lower case
 blindsType = blindsType.toLowerCase();
 //Validating user input for blindsType
 if(blindsType != "thin" && blindsType != "wide"){
     //Answer was not thin or wide
     blindsType = prompt("Please type thin or wide");
 }else if(blindsType === ""){
     //Was the answer left blank
     blindsType = prompt("Please do not leave blank. Type thin or wide.");
 }else{
     //console.log out the answer
     console.log("Client wants the "+blindsType+" blinds");
 }

 //Prompt user for number of windows to treat
 winNum = prompt("How many windows will be treated?");
 //Validating user input for winNum
 if(isNaN(winNum)){
     //Was winNum a number
     winNum = prompt("Please use only a number and don't leave blank.  How many windows will be treated?");
 }else if(winNum === ""){
     //Was the answer left blank
     winNum = prompt("Please do not leave empty.  How many windows will be treated?");
 }else{
     //console.log out the answer
     console.log("Client wants "+winNum+" windows treated");
 }

 //Prompt for Boolean will the whole house be treated
 completeCare = prompt("Will the whole building be treated, Please answer with yes or no");
 //Make answers lower case
 completeCare = completeCare.toLowerCase();
 //Validating user input for completeCare
 if(completeCare != "yes" && completeCare != "no"){
    //Answer was not yes or no
    completeCare = prompt("Please answer with yes or no. Will the whole building be treated?");
 }else if(completeCare === ""){
    //Answer was left blank
    completeCare = prompt("Please do not leave blank. Will the whole building be treated? Answer with yes or no");
 }else{
    //console.log out the answer
    console.log("Client answered "+completeCare+" to having all windows treated.");
 }


 //Validating user input for material
 material = prompt("We offer either wood or vinyl");
 //
 if(material != "wood" && material != "vinyl"){
  material = prompt("Please type wood or vinyl");
 }else{
  console.log("Client wants the "+material+" type of blinds");
 }




