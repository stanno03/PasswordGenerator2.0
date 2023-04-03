// create arrays to store valid characters
let lowerKeys =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upperKeys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',' K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numericValues = ['1','2','3','4','5','6','7','8','9','0'];
let specialChars = ["!", "@", "#" , "$", "%","^", "&", "*", "(", ")", "-","+"];

var generateBtn = document.querySelector("#generate");
// function that runs when generate password button is clicked and prompts for inputs to generate then display the password
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

  var lowercaseConfirm = confirm("Do you require Lowercase Characters??")
    if(lowercaseConfirm){
      validChars = validChars.concat(lowerKeys);
  }
  var upperCaseConfirm = confirm("Do you require Uppercase Characters??")
  if(upperCaseConfirm){
    validChars = validChars.concat(upperKeys);
  }
  var numericValuesconfirm = confirm("Do you require numeric values (0-9)??")
  if(numericValuesconfirm){
    validChars = validChars.concat(numericValues);
  }
  var specialCharsConfirm = confirm("Do you require Special Characters ()??")
  if(specialCharsConfirm){
    validChars = validChars.concat(specialChars);
  }
  
for(let i = 0; i < passwordLength; i++){
    let randomChar = validChars[Math.floor(Math.random() * validChars.length)];
    passwordGenerated.push(randomChar);
}

passwordGeneratedString = passwordGenerated.join("");

alert(passwordGeneratedString)

}
// handler for generatepassword button
generateBtn.addEventListener("click", writePassword);


