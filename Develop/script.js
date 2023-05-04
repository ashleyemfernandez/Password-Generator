//variables
var lowercaseLetters = ['q', 'a', "z", "w", "s","x","e","d","c","r","f","v","t","g","b","y","h","n","u","j","m","i","k","o","l","p"];
var uppercaseLetters = ["Q", "A","Z","W","S","X","E","D","C","R","F","V","T","G","B","Y","H","N","U","J","M","I","K","O","L","P"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-",".", "/", "<", ">","?","|"]

function generatePassword() {
  var passwordLength = prompt ("Password Length? (Choosee 8-128 characters)");
  if (isNumeric)(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    return alert (
      "Password length should be between 8 and 128 characters"
    )
  }
}

//confirming characters to add to password
var lowercaseLetters = confirm("lowercaseletters?");
var uppercaseLetters = confirm("uppercaseLetters?");
var numbers = confirm("numbers?");
var specialCharacters = confirm("specialCharacters?");

//function adding variables into "allcharacters"
var allcharacters = "";
if (lowercaseLetters) allcharacters += "abcdefghijklmnopqrstuvwxyz";
if (uppercaseLetters) allcharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if (numbers) allcharacters += "1234567890";
if (specialCharacters) all characters += "~!@#$%^&*()_+`-={}|[]\:"'<>?,./:";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//need to know how to randomize and add from all selected character types