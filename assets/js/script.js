// Assignment Code
var generateBtn = document.querySelector("#generate");
var upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lower = "qwertyuiopasdfghjklzxcvbnm";
var number = "1234567890";
var symbol = "!@#$%^&*(){}[]=<>/,.";



var pLength = prompt("How many Characters would you like your password to be?");

while (pLength < 8 || pLength > 128) {
pLength = prompt("Length Must be 8 to 128 Characters. How many Characters would you like your password to be?");
}

var conUpper = confirm("Do you want to use uppercase letters?");
var conLower = confirm("Do you want to use to use lowercase letters?");
var conNum = confirm("Do you want to use to use numbers?");
var conSymb = confirm("Do you want to use to use special characters?");

while (!(conUpper || conLower || conNum || conSymb)) {
  alert("You must select at least one character type!");
  conUpper = confirm("Do you want to use uppercase letters?");
  conLower = confirm("Do you want to use lowercase letters?");
  conNum = confirm("Do you want to use numbers?");
  conSymb = confirm("Do you want to use special characters?");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(upper, lower, number, symbol, pLength);
  var passwordText = document.querySelector("#password");
  
  for (var i = 0, n = generatePassword.length; i < length; ++i) {
    passwordText += password.charAt(Math.floor(Math.random() * n));
}
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());