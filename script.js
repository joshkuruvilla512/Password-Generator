function generate(length = 8) {
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercase = "abcdefghijklmnopqrsttuvwxyz";
    var numbers = "0123456789";
    var symbols = "!@#$%^&*()-_=+`~[{]}|;:'<,>.?/";
    var generateEl = document.querySelector("#generate");

    var all = uppercase + lowercase + numbers + symbols;

    var password = " ";

    for (var i = 0; i < length; i++) {
        var character = Math.floor(Math.random() * all.length);
        password += all.substring(character, character + 1);
    }
    return password
}

window.onload = function () {
    var generateButton = document.querySelector("#generate");
    generateButton.addEventListener('click', function () {
        document.querySelector("#password").value = generate()
    });
}
