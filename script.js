
// http://net-comber.com/charset.html


// DOM Elements
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};
// generate event listen
generateEl.addEventListener("click", () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol);
});

// Copy password to clipboard
clipboardEl.addEventListener("click", () => {
    const textArea = document.createElement("textArea");
    const password = resultEl.innerText;

    if(!password) {
        return;
    }
    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    alert("Password copied to clipboard!");
});

// Generate password function
function generatePassword(lower, upper, number, symbol, length) {
    // 1. /Initialize a password variable
    // 2. Filter out unchecked types
    // 3. Loop over length call generator function for each type
    // 4. Add final password to the variable and return it.

    let generatedPassword = " ";

    const typesCount = lower + upper + number + symbol;

    // console.log("typesCount: ", typesCount);

    const typesArray = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

    // console.log("typesArray", typesArray);

    if(typesCount === 0) {
        return " ";
    }

    for (let i = 0; i < length; i += typesCount){
        typesArray.forEach(type => {
            const funcName = Object.keys(type)[0];
            // console.log("funcName ", funcName)

            generatedPassword += randomFunc[funcName]();
        });
    }
    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
    console.log (finalPassword);
};



function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
    const symbols = "!@#$%^&*-_=+`~|;:'<,>.?/";
    return symbols[Math.floor(Math.random() * symbols.length)];

};

// function generate(length = 8) {
//     var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     var lowercase = "abcdefghijklmnopqrsttuvwxyz";
//     var numbers = "0123456789";
//     var symbols = "!@#$%^&*()-_=+`~[{]}|;:'<,>.?/";
//     var generateEl = document.querySelector("#generate");

//     var all = uppercase + lowercase + numbers + symbols;

//     var password = " ";

//     for (var i = 0; i < length; i++) {
//         var character = Math.floor(Math.random() * all.length);
//         password += all.substring(character, character + 1);
//     }
//     return password
// }

// window.onload = function () {
//     var generateButton = document.querySelector("#generate");
//     generateButton.addEventListener('click', function () {
//         document.querySelector("#password").value = generate()
//     });
// }

// MY CODE

// append??