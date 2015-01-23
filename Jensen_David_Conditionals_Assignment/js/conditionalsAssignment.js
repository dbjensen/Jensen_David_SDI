
 /*
 David Jensen
 SDI Section #3
 Conditionals Assignment
 2015/01/22
 */
 //alert("Testing to see if the JS file is attached to the HTML.");


 var blindsType;
 var winNum;
 var material;
 var completeCare;

 blindsType = prompt("Please type whether you want thin or wide blinds.");                                                           //Assigning variable through prompt for blindsTyp
 blindsType = blindsType.toLowerCase();

 if(blindsType != "thin" && blindsType != "wide"){
  console.log("Incorrect option");
  blindsType = prompt("Please type thin or wide");
 }else if(blindsType === "" ){
  blindsType = prompt("Oops! Please don't leave blank. Type thin or wide");
 }else{
  console.log(blindsType);
 }



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
