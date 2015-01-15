// Video Casting: Treating Strings Like Numbers and Vice Versa

var stringVar = "6";
var result = 7 + Number(stringVar);         // Temporary treat stringVar as a number

console.log(result);

var areaCode = 407;
var preFix = 203;
var fourLast = 4529;

var phoneNo = "(" + String(areaCode) + ")" + " " + String(preFix) + "-" + String(fourLast);
console.log(phoneNo)