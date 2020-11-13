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
  else {
    switch
  }
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