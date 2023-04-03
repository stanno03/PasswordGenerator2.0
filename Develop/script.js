// create arrays to store valid characters
let lowerKeys =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upperKeys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',' K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numericValues = ['1','2','3','4','5','6','7','8','9','0'];
let specialChars = ["!", "@", "#" , "$", "%","^", "&", "*", "(", ")", "-","+"];

// tarverse dom to find the form
const form = document.getElementById('form');
const password = document.getElementById('passwordlength')
const requiredChars = document.getElementById('passwordlength');
// traverse dom to get checkbox true/false values
const lowerCaseCheckbox = document.getElementById('lowercase');
const upperCaseCheckbox = document.getElementById('uppercase');
const numericCheckbox = document.getElementById('numeric');
const specialCharsCheckbox = document.getElementById('specialchars');
// traverse dom for error message div
const errorMessage = document.getElementById('errorMessage');

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  const passwordGenerated = [];
    let validChars = [];
    let passwordGeneratedString = "";
     

  var passwordLength = prompt("How many characters are required?", "Pick a value between 8 and 128")

  if(passwordLength <= 7 || passwordLength > 128){
    alert("Error! Please select a value between 8 and 128 Characters");
    return;
}
// write a condition to check only numbers have been entered.
  // if(password.contains())

  confirm("Do you require Lowercase Characters??")
    if(confirm){
      validChars = validChars.concat(lowerKeys);
  }
  confirm("Do you require Uppercase Characters??")
  if(confirm){
    validChars = validChars.concat(upperKeys);
  }
  confirm("Do you require numeric values (0-9)")
  if(confirm){
    validChars = validChars.concat(numericValues);
  }
  confirm("Do you require Special Characters ()")
  if(confirm){
    validChars = validChars.concat(specialChars);
  }
  
for(let i = 0; i < passwordLength; i++){
    let randomChar = validChars[Math.floor(Math.random() * validChars.length)];
    passwordGenerated.push(randomChar);
}

passwordGeneratedString = passwordGenerated.join("");

alert(passwordGeneratedString)
// return passwordGeneratedString;

}

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


