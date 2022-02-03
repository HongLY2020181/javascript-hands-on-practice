/*
Write a JavaScript function that generates a string id (specified length) of random characters.
Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
*/

function randomID(len) {
    var charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var rs = "";
    var x = 0;
    while (x < len) {
        let random = Math.floor(Math.random() * charList.length);
        rs += charList.charAt(random);
        x++;
    }
    return console.log(rs);
}

randomID(5);