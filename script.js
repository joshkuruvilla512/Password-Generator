function generate(length = 8){
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercase = "abcdefghijklmnopqrsttuvwxyz";
    var numbers = "0123456789";
    var symbols = "!@#$%^&*()-_=+`~[{]}|;:'<,>.?/";

    var all = uppercase + lowercase + numbers + symbols;

    var password = " ";

    for (var i = 0; i < length; i++) {
        var character = Math.floor(Math.random() * all.length);
        password += all.substring(character, character +1);
    }
    return password
}