//variables
var lowercaseLetters = [
  "q",
  "a",
  "z",
  "w",
  "s",
  "x",
  "e",
  "d",
  "c",
  "r",
  "f",
  "v",
  "t",
  "g",
  "b",
  "y",
  "h",
  "n",
  "u",
  "j",
  "m",
  "i",
  "k",
  "o",
  "l",
  "p",
];
var uppercaseLetters = [
  "Q",
  "A",
  "Z",
  "W",
  "S",
  "X",
  "E",
  "D",
  "C",
  "R",
  "F",
  "V",
  "T",
  "G",
  "B",
  "Y",
  "H",
  "N",
  "U",
  "J",
  "M",
  "I",
  "K",
  "O",
  "L",
  "P",
];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "+",
  "-",
  ".",
  "/",
  "<",
  ">",
  "?",
  "|",
];

function generatePassword() {
  var passwordLength = parseInt(
    prompt("Password Length? (Choose 8-128 characters)")
  );
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    return alert("Password length should be between 8 and 128 characters");
  }
  var wantsLowercase = window.confirm("lowercase letters?");
  var wantsUppercase = window.confirm("uppercase Letters?");
  var wantsNumbers = window.confirm("numbers?");
  var wantsSpecialCharacters = window.confirm("special Characters?");

  //function adding variables into "allcharacters"
  var allcharacters = ""; 
  if (wantsLowercase) {
    allcharacters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (wantsUppercase) {
    allcharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (wantsNumbers) {
    allcharacters += "1234567890";
  }
  if (wantsSpecialCharacters) {
    allcharacters += "~!@#$%^&*()_+`-={}|[]:'<>?,./:";
  } 
  var password = ""
  for(var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random()*allcharacters.length)
    var randomCharacter = allcharacters[randomIndex]
    password+=randomCharacter
  }
  return password
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

//need to know how to randomize and add from all selected character types
