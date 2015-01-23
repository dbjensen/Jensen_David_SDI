
 /*
 David Jensen
 SDI Section #3
 Conditionals Assignment
 2015/01/22
 */
 //alert("Testing to see if the JS file is attached to the HTML.");

//Declaring  and assigning variables
 var blindsType;
 var winNum;
 var material = ["wood", "aluminum", "vinyl"];
 var completeCare;
 var woodFlatRate = 60.00;
 var woodPerWin = 70.00;
 var vinylWideFlatRate = 40.00;
 var vinylWidePerWin = 50.00;
 var vinylThinFlatRate;
 var
 var aBlindFlatRate;

 blindsType = prompt("Please type whether you want thin or wide blinds.");
 if(blindsType != "thin" && blindsType != "wide"){
  blindsType = prompt("Please type thin or wide");
 }else{
  console.log(blindsType);
 }

 winNum = prompt("How many windows will be treated?");
 if(isNaN(winNum) || winNum === ""){
  prompt("Please use only a number and don't leave blank.  How many windows will be treated?");
 }else{
  console.log(winNum);
 }

 material = ;
 completeCare;
 //Assigning variable through prompt for blindsTyp
 blindsType = blindsType.toLowerCase();






/*
 if(blindsType != "thin" || blindsType != wide){
  prompt("Please type, thin or wide.");
 }else if(blindsType === ""){
  prompt("Please don't leave black. Type thin or wide.");
 }else{
  console.log(blindsType);
 }


 winNum = prompt("How many windows are getting blinds?");

 if(isNaN(winNum)){
  prompt("Please only use a number");
 }else if(winNum === ""){
  prompt("Please do not leave blank. Type a number");
 }else{
  console.log(winNum);
 }

 material = ["wood", "aluminum", "vinyl"];
                                                                                                                            //Declaring variable (only specific material is available
 completeCare = prompt("Please tell if all of the windows of your house will be treated by typing all or partly.");                         //Assigning variable through prompt for completeCare

 if(material != material[0]){
  if(material != material[1]){
   if(material != material[2]){
    prompt("Please type either "+material[0]+", "+material[1]+", or "+material[2]);
   }
  }
 }

 console.log(material);
 console.log(blindsType);                                                                                                                         //checking results
 console.log(winNum);                                                                                                                             //checking results
 console.log(completeCare);                                                                                                                       //checking results
*/
