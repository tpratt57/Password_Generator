// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var capChar =["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters =["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
var numericCharacters =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
function question() {
  var charLen = prompt("how many charters do you want? (between 8-128)");
  console.log(charLen);
  if (charLen < 8) {
    alert("please enter a number higher than 8!");
    return question();
  } else if (charLen > 128){
    alert("please enter a number lower than 129!");
    return question();
  }
  var lowerCase = confirm("Would you like to use Lowercase characters?");
  console.log(lowerCase);
  var specialCase = confirm("Would you like to use Special Characters?");
  console.log(specialCase);
  var numerCharacters = confirm("Would you like to use Numeric Characters?");
  console.log(numerCharacters);
  var capChar = confirm("Would you like to use Uppercase Characters?");
  if (lowerCase === false && specialCase === false && numerCharacters === false && charLen === false){
    alert("please choice at least one!");
    return question();
  }
  var userInput = {
    charLen: charLen,
    capChar: capChar,
    lowerCase: lowerCase,
    specialCase: specialCase,
    numerCharacters: numerCharacters,
  }
  return userInput ;
}

function random(input) {
  var link = Math.floor(Math.random() * input.length);
  var orange = input[link];
  return orange;
}
 function generatePassword() {
   var result = []
   var popCorn = question()
   var pastel = []
  var walker = []

  if(popCorn.capChar){
    pastel = pastel.concat(capChar)
    walker.push(random(capChar));
    console.log(walker);
    console.log(pastel);
  }
  if(popCorn.lowerCase){
    pastel = pastel.concat(lowerChoice)
    walker.push(random(lowerChoice));
    console.log(walker);
    console.log(pastel);
  }
  if(popCorn.specialCase){
    pastel = pastel.concat(specialCharacters)
    walker.push(random(specialCharacters));
    console.log(pastel);
    console.log(walker);
  }
  if(popCorn.numerCharacters){
    pastel = pastel.concat(numericCharacters)
    walker.push(random(numericCharacters));
    console.log(pastel);
    console.log(walker);
  }

  for (var i = 0; i < popCorn.charLen; i++){
    var upper = random(pastel)
    result.push(walker);
    console.log(pastel);
    console.log(walker);
  }
  for ( var i = 0; i < walker.length; i++){
    result[i] = walker[i]
  }
  console.log(walker);
  return result.join("")
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
   passwordText.value = password;

   }



// Add event listener to generate button
//adding comment code to create another push
generateBtn.addEventListener("click", writePassword);