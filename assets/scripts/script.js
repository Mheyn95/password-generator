var lowerCaseStr = "abcdefghijklmnopqrstuvwxyz"
var upperCaseStr = lowerCaseStr.toUpperCase()
var numStr = "0123456789"
var specialCharStr = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~\"\'"
// Assignment code here

function generatePassword() {
  var passLength = window.prompt("How long do you want your password to be? Please choose a number between 8 and 128");
  
  if (passLength < 8 || passLength > 128) {
    window.alert("Please try again, invalid length");
    generatePassword();
  }
  else {
    passLength = parseInt(passLength);
  }
  
  window.alert("Please select what you would like to include in your password.")
  var lowerCase = window.confirm("Would you like to use lower-case letters in your password?");
  var upperCase = window.confirm("Would you like to use upper-case letters in your password?");
  var numPass = window.confirm("Would you like to use numbers in your password?");
  var specialChar = window.confirm("Would you like to use special characters in your password?");
  
  if (!lowerCase && !upperCase && !numPass && !specialChar) {
    window.alert("Please try again, must select at least one option for password inclusion.")
    // maybe write another function so we do not have to start all over from the beginning?
    generatePassword();
  }
  else  if (lowerCase && !upperCase && !numPass && !specialChar) {
    //they only want to use lowercase
    var mainList = lowerCaseStr;
    var password = ""
    for(i=0; i < passLength; i++) {
      var newChar = Math.floor(Math.random() * mainList.length);
      newChar = mainList[newChar];
      password = password + newChar;
    }
  }
  else  if (!lowerCase && upperCase && !numPass && !specialChar) {
    //they only want to use uppercase
    var mainList = upperCaseStr;
    var password = ""
    for(i=0; i < passLength; i++) {
      var newChar = Math.floor(Math.random() * mainList.length);
      newChar = mainList[newChar];
      password = password + newChar;
    }
  }
  else  if (!lowerCase && !upperCase && numPass && !specialChar) {
    //they only want to use numbers
    var mainList = numStr;
    var password = ""
    for(i=0; i < passLength; i++) {
      var newChar = Math.floor(Math.random() * mainList.length);
      newChar = mainList[newChar];
      password = password + newChar;
    }
  }
  else  if (!lowerCase && !upperCase && !numPass && specialChar) {
    //they only want to use special characters
    var mainList = specialCharStr;
    var password = ""
    for(i=0; i < passLength; i++) {
      var newChar = Math.floor(Math.random() * mainList.length);
      newChar = mainList[newChar];
      password = password + newChar;
    }
  }
  else  if (lowerCase && upperCase && !numPass && !specialChar) {
    //they only want to use lowercase and uppercase
    var mainList = lowerCaseStr + upperCaseStr;
    var password = ""
    for(i=0; i < passLength; i++) {
      var newChar = Math.floor(Math.random() * mainList.length);
      newChar = mainList[newChar];
      password = password + newChar;
    }
  }
  else  if (lowerCase && !upperCase && numPass && !specialChar) {
    //they only want to use lowercase and numbers
    var mainList = lowerCaseStr + numStr;
    var password = ""
    for(i=0; i < passLength; i++) {
      var newChar = Math.floor(Math.random() * mainList.length);
      newChar = mainList[newChar];
      password = password + newChar;
    }
  }
  else  if (lowerCase && !upperCase && !numPass && specialChar) {
    //they only want to use lowercase and special characters
    var mainList = lowerCaseStr + specialCharStr;
    var password = ""
    for(i=0; i < passLength; i++) {
      var newChar = Math.floor(Math.random() * mainList.length);
      newChar = mainList[newChar];
      password = password + newChar;
    }
  }
  else  if (!lowerCase && upperCase && numPass && !specialChar) {
    //they only want to use uppercase and numbers
    var mainList = upperCaseStr + numStr;
    var password = ""
    for(i=0; i < passLength; i++) {
      var newChar = Math.floor(Math.random() * mainList.length);
      newChar = mainList[newChar];
      password = password + newChar;
    }
  }
  else  if (!lowerCase && upperCase && !numPass && specialChar) {
    //they only want to use uppercase and special characters
    var mainList = upperCaseStr + specialCharStr;
    var password = ""
    for(i=0; i < passLength; i++) {
      var newChar = Math.floor(Math.random() * mainList.length);
      newChar = mainList[newChar];
      password = password + newChar;
    }
  }
  else if (!lowerCase && !upperCase && numPass && specialChar) {
    //they only want to use numbers and special characters
    var mainList = numStr + specialCharStr;
    var password = ""
    for(i=0; i < passLength; i++) {
      var newChar = Math.floor(Math.random() * mainList.length);
      newChar = mainList[newChar];
      password = password + newChar;
    }
  }
  else if (lowerCase && upperCase && numPass && !specialChar) {
    //they want to use everything but special characters
    var mainList = lowerCaseStr + upperCaseStr + numStr;
    var password = ""
    for(i=0; i < passLength; i++) {
      var newChar = Math.floor(Math.random() * mainList.length);
      newChar = mainList[newChar];
      password = password + newChar;
    }
  }
  else if (lowerCase && !upperCase && numPass && specialChar) {
    //they want to use everything but uppercase
    var mainList = lowerCaseStr + numStr + specialCharStr;
    var password = ""
    for(i=0; i < passLength; i++) {
      var newChar = Math.floor(Math.random() * mainList.length);
      newChar = mainList[newChar];
      password = password + newChar;
    }
  }
  else if (lowerCase && upperCase && !numPass && specialChar) {
    //they want to use everything but numbers
    var mainList = lowerCaseStr + upperCaseStr + specialCharStr;
    var password = ""
    for(i=0; i < passLength; i++) {
      var newChar = Math.floor(Math.random() * mainList.length);
      newChar = mainList[newChar];
      password = password + newChar;
    }
  }
  else if (!lowerCase && upperCase && numPass && specialChar) {
    //they want to use everything but lowercase
    var mainList = upperCaseStr + numStr + specialCharStr;
    var password = ""
    for(i=0; i < passLength; i++) {
      var newChar = Math.floor(Math.random() * mainList.length);
      newChar = mainList[newChar];
      password = password + newChar;
    }
  }
  else {
    //they want to use all
    var mainList = lowerCaseStr + upperCaseStr + numStr + specialCharStr;
    var password = ""
    for(i=0; i < passLength; i++) {
      var newChar = Math.floor(Math.random() * mainList.length);
      newChar = mainList[newChar];
      password = password + newChar;
    }
  }
  
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
