// create arrays to store valid characters
let lowerKeys =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upperKeys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numericValues = ['1','2','3','4','5','6','7','8','9','0'];
let specialChars = ["!", "@", "#" , "$", "%","^", "&", "*", "(", ")", "-","+", "", ",", ".", "/", ":",";","<","=",">","?","@", "[", "]","_", "`","{","}","|", "~"];

var generateBtn = document.querySelector("#generate");

// funtion to check a string only contains numbers*not written :(*
// function validateOnlyNumbers(str)
  

// function that runs when generate password button is clicked and prompts for inputs to generate then display the password
function writePassword() {
  const passwordGenerated = [];
    let validChars = [];
    let passwordGeneratedString = "";
  
  // take user input and make into a var so we can store the value and use for the length of the password. 
  var passwordLength = prompt("How many characters are required?", "Pick a value between 8 and 128")

  // validate the given length is within the specified requirements
  if(passwordLength <= 7 || passwordLength > 128){
    alert("Error! Please select a value between 8 and 128 Characters");
    return;
}
// check if lowercase chars are required if true contcat lowercase[] to validChar and store confrim value(true or false)
  var lowerCaseConfirm = confirm("Do you require Lowercase Characters??")
    if(lowerCaseConfirm){
      validChars = validChars.concat(lowerKeys);
  }
  // check if uppercase chars are required if true contcat uppercase[] to validChar
  var upperCaseConfirm = confirm("Do you require Uppercase Characters??")
  if(upperCaseConfirm){
    validChars = validChars.concat(upperKeys);
  }
  // check if numeric chars are required if true contcat numeric[] to validChar
  var numericValuesconfirm = confirm("Do you require numeric values (0-9)??")
  if(numericValuesconfirm){
    validChars = validChars.concat(numericValues);
  }
  // check if special chars are required if true contcat specialChars[] to validChar
  var specialCharsConfirm = confirm("Do you require Special Characters ()??")
  if(specialCharsConfirm){
    validChars = validChars.concat(specialChars);
  }
  
  // validation: check if no parameters where selected and display an error if non where selected
  if(!lowerCaseConfirm && !upperCaseConfirm && !numericValuesconfirm &&!specialCharsConfirm){
    alert("You have selected no parameters please select at least one parameter");
    return;
  }
// generate the password using the now appended validChars[] and the passwordLength value. 
for(let i = 0; i < passwordLength; i++){
    let randomChar = validChars[Math.floor(Math.random() * validChars.length)];
    passwordGenerated.push(randomChar);
}
// convert the passwordGenerated [] into a string with no spaces.
passwordGeneratedString = passwordGenerated.join("");

// display generated password
alert(passwordGeneratedString)

}
// handler for generatepassword button
generateBtn.addEventListener("click", writePassword);


