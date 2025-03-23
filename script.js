let generateBtn = document.getElementById("gen-btn").addEventListener('click' ,()=> {
    const displayOutput = document.getElementById("display-output");
      // Check if a previous password div exists
      const existingPassword = document.getElementById("password");
      if (existingPassword) {
          displayOutput.removeChild(existingPassword);
      }

    let length = parseInt(document.getElementById("length").value);
    let hasUpperCaseChecked = document.getElementById("uppercase").checked;
    let hasNumberChecked = document.getElementById("numbers").checked;
    let hasSymbolChecked = document.getElementById("symbols").checked;

    const password = generatePassword(hasUpperCaseChecked,hasNumberChecked,hasSymbolChecked,length);
    
    const displayPassword = document.createElement("div");
    displayPassword.id = "password"
    displayPassword.textContent = password; 

    
    displayOutput.appendChild(displayPassword); // append to dom

      // change the bottom colour flag to green
      let bottomBar = document.getElementById("bottom-bar");
      bottomBar.style.backgroundColor = "greenyellow"; 

})

function generatePassword(hasUpperCaseChecked,hasNumberChecked,hasSymbolChecked,length){
    // defining all characterset
    const lowercase = "abcdefghijklmnopqrstwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTWXYZ";
    const numbers = "0123456789";
    const symbols = "~`!@#$%^&*()_:;?/><.,|";

      // creating password pool by looking users choice
      let passwordPool = ""; 
      passwordPool += lowercase; // by default lowercase included in password
      if(hasUpperCaseChecked) passwordPool += uppercase;
      if(hasNumberChecked) passwordPool += numbers;
      if(hasSymbolChecked) passwordPool += symbols;
      
      let password = "";
      for(let i = 1; i <= length; i++){
        let randomIdx = Math.floor(Math.random() * (passwordPool.length)); /*randomIdx goes choose from (0 -> passwordPool.length-1)*/ 
        password += passwordPool.charAt(randomIdx);
      }
      return password;
}

let resetBtn = document.getElementById("reset-btn").addEventListener('click',() => {
    // remove output
    const displayOutput = document.getElementById("display-output");
      // Check if a previous password div exists
      const existingPassword = document.getElementById("password");
      if (existingPassword) {
          displayOutput.removeChild(existingPassword);
      }
    // remove all customized options
    let length = document.getElementById("length").value = "";
    let hasUpperCaseChecked = document.getElementById("uppercase").checked = false;
    let hasNumberChecked = document.getElementById("numbers").checked = false;
    let hasSymbolChecked = document.getElementById("symbols").checked = false;

    // reset bottom bar colour to red
    let bottomBar = document.getElementById("bottom-bar");
      bottomBar.style.backgroundColor = "red"; 
})

// copy to clip\board
let copyBtn = document.getElementById("copy-btn").addEventListener('click', () => {
    const passwordDiv = document.getElementById("password");
    if (passwordDiv) {
        const passwordText = passwordDiv.textContent;

        // Use Clipboard API
        navigator.clipboard.writeText(passwordText)
    .then(
        // resolve function
        () => {
            alert("Password copied to clipboard! ✅");
        }, 
        // reject function
        (err) => {
            console.error("Failed to copy!", err);
        }
    );
    } else {
        alert("No password to copy! ❌");
    }
})

