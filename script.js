// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "[", "]", ".", "/", "|", "{", "}", ":", "<", ">", "?"];


function generatePassword() {

  var uLength = prompt("How long do you want your password to be?");
  var parslength = Number.parseInt(uLength)
  //console.log(isNaN(uLength))

  if (isNaN(parslength)) {
    // if it is true this means that it is not a number
    alert("The entry must a number");
    return;

  }

  if (parslength < 8 || parslength > 128) {

    alert("Error!! Your password must be at least 8 characters, but no more than 128.");

    return;

  }

  var lCase = confirm("Would you like to include lowercase letters?");
  // console.log(lCase);
  var uCase = confirm("Would you like to include uppercase letters?");
  // console.log(uCase);
  var nCase = confirm("Would you like to include numbers?");
  // console.log(nCase);
  var sCase = confirm("Would you like to include special characters?");
  // console.log(sCase);

  if (lCase == false && uCase == false && nCase == false && sCase == false) {
    alert("Error!! You need to include at least one type of character.");
    return

  }

  var result = [];
  var passwordChars = [];
  //var guaranteedChars = [];

  if (lCase) {
    passwordChars = passwordChars.concat(lowerCase);
    result.push(randomIndex(lowerCase))
   // guaranteedChars.push(randomIndex(lowerCase))
  }

  if (uCase) {
    passwordChars = passwordChars.concat(upperCase);
    result.push(randomIndex(upperCase))
    //guaranteedChars.push(randomIndex(upperCase))

  }

  if (nCase) {
    passwordChars = passwordChars.concat(numbers);
    result.push(randomIndex(numbers))
    //guaranteedChars.push(randomIndex(numbers))

  }

  if (sCase) {
    passwordChars = passwordChars.concat(specialCharacters);
    result.push(randomIndex(specialCharacters))
    //guaranteedChars.push(randomIndex(specialCharacters))

  }

  console.log(passwordChars)

  for (let i = result.length; i < parslength; i++) {
    console.log(result)
    result.push(randomIndex(passwordChars))

  }

   //for (let i = 0; i < guaranteedChars.length; i++) {
   //result[i] = guaranteedChars[i]

//  }




  return result.join("")

}

function randomIndex(arr) {

  // console.log("getting random index", arr)
  var idx = arr[Math.floor(Math.random() * arr.length)]
  return idx

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password")

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



