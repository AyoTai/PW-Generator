// Assignment Code
var generateBtn = document.querySelector("#generate");
var genPassword = '';
var passwordLength;
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "<", ">", "/", ",", "."];

// Functions
function chooseLength() {
  passwordLength = window.prompt('How many Characters would you like your password to be?')
  if (passwordLength < 8 || passwordLength > 128){
    window.alert('Length Must be 8 to 128 Characters.')
  } else {
    return passwordLength;
  }
}

// Selections
function chooseUppercase() {
  conUpperCase = window.confirm('Would you like to use uppercase letters?')
}

function chooseLowercase() {
  conLowerCase = window.confirm('Would you like to use lowercase letters?')
}

function chooseNumber() {
  conNumbers = window.confirm('Would you like to use numbers?')
}

function chooseSymbol() {
  conSymbols = window.confirm('Would you like to use special characters?')
}

// Generating Password
function upperPass() {
  return upper[Math.floor(Math.random() * upper.length)]
}
function lowerPass() {
  return lower[Math.floor(Math.random() * lower.length)];
}
function numberPass() {
  return number[Math.floor(Math.random() * number.length)];
}
// Randomly return one from the symbol array
function symbolPass() {
  return symbol[Math.floor(Math.random() * number.length)];
}

function createPassword() {
  for (i = 0; i < passwordLength; i++){
    var randomChars = [];
    if(conUpperCase === true){
      randomChars.push(upperPass());
    }
    if(conLowerCase === true){
      randomChars.push(lowerPass());
    }
    if(conNumbers === true){
      randomChars.push(numberPass());
    }
    // If user chooses symbols randomly pick one and add to temporary array
    if(conSymbols === true){
      randomChars.push(symbolPass());
    }
    // Randomly Choose 1 character from the four choices 
    genPassword += randomChars[Math.floor(Math.random() * randomChars.length)];
  }
}

function makePassword() {
  createPassword()
  return genPassword;
}

function generatePassword() {
  chooseLength();
  chooseUppercase();
  chooseLowercase();
  chooseNumber();
  chooseSymbol();
  return makePassword();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
