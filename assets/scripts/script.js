//defining the strings of different char types that we can use in the password
var lowerCaseStr = "abcdefghijklmnopqrstuvwxyz"
var upperCaseStr = lowerCaseStr.toUpperCase()
var numStr = "0123456789"
var specialCharStr = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~\"\'"

// Assignment code here
function generatePassword() {
  passLength = window.prompt("How long do you want your password to be? Please choose a number between 8 and 128");
  
  //run check to see if the user chose a name between 8 and 128
  if (passLength < 8 || passLength > 128) {
    window.alert("Please try again, invalid length");
    
    //Run same function again to 'restart'
    generatePassword();
  }
  
  else {
    //turn the password length from a string into an integer
    passLength = parseInt(passLength);
  }

  window.alert("Please select what you would like to include in your password.")
  
  //promts asking the user what type of characters they want in their password
  var lowerCase = window.confirm("Would you like to use lower-case letters in your password?");
  var upperCase = window.confirm("Would you like to use upper-case letters in your password?");
  var numPass = window.confirm("Would you like to use numbers in your password?");
  var specialChar = window.confirm("Would you like to use special characters in your password?");
  
  //check to see if user selected at least ONE of the above options
  if (!lowerCase && !upperCase && !numPass && !specialChar) {
    window.alert("Please try again, must select at least one option for password inclusion.");
    // rerun function so the user can choose a valid option
    generatePassword();
  }
  
  else if (lowerCase && !upperCase && !numPass && !specialChar) {
    //user only wants to use lowercase
    mainList = lowerCaseStr;
    var password = ""
    for(i=0; i < passLength; i++) {
      var newChar = Math.floor(Math.random() * mainList.length);
      newChar = mainList[newChar];
      password = password + newChar;
    }
  }
  
  else if (!lowerCase && upperCase && !numPass && !specialChar) {
    //user only wants to use uppercase
    mainList = upperCaseStr;
    var password = ""
    for(i=0; i < passLength; i++) {
      var newChar = Math.floor(Math.random() * mainList.length);
      newChar = mainList[newChar];
      password = password + newChar;
    }
  }
  
  else if (!lowerCase && !upperCase && numPass && !specialChar) {
    //user only wants to use numbers
    mainList = numStr;
    var password = ""
    for(i=0; i < passLength; i++) {
      var newChar = Math.floor(Math.random() * mainList.length);
      newChar = mainList[newChar];
      password = password + newChar;
    }
  }
  
  else if (!lowerCase && !upperCase && !numPass && specialChar) {
    //user only wants to use special characters
    mainList = specialCharStr;
    var password = ""
    for(i=0; i < passLength; i++) {
      var newChar = Math.floor(Math.random() * mainList.length);
      newChar = mainList[newChar];
      password = password + newChar;
    }
  }
  
  else if (lowerCase && upperCase && !numPass && !specialChar) {
    //user only wants to use lowercase and uppercase
    mainList = lowerCaseStr + upperCaseStr;
    var password = ""
    for(i=0; i < passLength; i++) {
      var newChar = Math.floor(Math.random() * mainList.length);
      newChar = mainList[newChar];
      password = password + newChar;
    }
  }
  
  else if (lowerCase && !upperCase && numPass && !specialChar) {
    //user only wants to use lowercase and numbers
    mainList = lowerCaseStr + numStr;
    var password = ""
    for(i=0; i < passLength; i++) {
      var newChar = Math.floor(Math.random() * mainList.length);
      newChar = mainList[newChar];
      password = password + newChar;
    }
  }
  
  else if (lowerCase && !upperCase && !numPass && specialChar) {
    //user only wants to use lowercase and special characters
    mainList = lowerCaseStr + specialCharStr;
    var password = ""
    for(i=0; i < passLength; i++) {
      var newChar = Math.floor(Math.random() * mainList.length);
      newChar = mainList[newChar];
      password = password + newChar;
    }
  }
  
  else if (!lowerCase && upperCase && numPass && !specialChar) {
    //user only wants to use uppercase and numbers
    mainList = upperCaseStr + numStr;
    var password = ""
    for(i=0; i < passLength; i++) {
      var newChar = Math.floor(Math.random() * mainList.length);
      newChar = mainList[newChar];
      password = password + newChar;
    }
  }
  
  else if (!lowerCase && upperCase && !numPass && specialChar) {
    //user only wants to use uppercase and special characters
    mainList = upperCaseStr + specialCharStr;
    var password = ""
    for(i=0; i < passLength; i++) {
      var newChar = Math.floor(Math.random() * mainList.length);
      newChar = mainList[newChar];
      password = password + newChar;
    }
  }
  
  else if (!lowerCase && !upperCase && numPass && specialChar) {
    //user only wants to use numbers and special characters
    mainList = numStr + specialCharStr;
    var password = ""
    for(i=0; i < passLength; i++) {
      var newChar = Math.floor(Math.random() * mainList.length);
      newChar = mainList[newChar];
      password = password + newChar;
    }
  }
  
  else if (lowerCase && upperCase && numPass && !specialChar) {
    //user wants to use everything but special characters
    mainList = lowerCaseStr + upperCaseStr + numStr;
    var password = ""
    for(i=0; i < passLength; i++) {
      var newChar = Math.floor(Math.random() * mainList.length);
      newChar = mainList[newChar];
      password = password + newChar;
    }
  }
  
  else if (lowerCase && !upperCase && numPass && specialChar) {
    //user wants to use everything but uppercase
    mainList = lowerCaseStr + numStr + specialCharStr;
    var password = ""
    for(i=0; i < passLength; i++) {
      var newChar = Math.floor(Math.random() * mainList.length);
      newChar = mainList[newChar];
      password = password + newChar;
    }
  }
  
  else if (lowerCase && upperCase && !numPass && specialChar) {
    //user wants to use everything but numbers
    mainList = lowerCaseStr + upperCaseStr + specialCharStr;
    var password = ""
    for(i=0; i < passLength; i++) {
      var newChar = Math.floor(Math.random() * mainList.length);
      newChar = mainList[newChar];
      password = password + newChar;
    }
  }
  
  else if (!lowerCase && upperCase && numPass && specialChar) {
    //user wants to use everything but lowercase
    mainList = upperCaseStr + numStr + specialCharStr;
    var password = ""
    for(i=0; i < passLength; i++) {
      var newChar = Math.floor(Math.random() * mainList.length);
      newChar = mainList[newChar];
      password = password + newChar;
    }
  }
  
  else {
    //user wants to use all
    mainList = lowerCaseStr + upperCaseStr + numStr + specialCharStr;
    var password = ""
    for(i=0; i < passLength; i++) {
      var newChar = Math.floor(Math.random() * mainList.length);
      newChar = mainList[newChar];
      password = password + newChar;
    }
  }
  //function will return the variable password from any of the if statements above at the end of the function.
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
