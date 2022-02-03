/*
Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
Sample arguments : 'w3resource.com', 'o'
Expected output : 2
*/

function countLetter(str, letter) {
    var count = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i] === letter) {
            count++;
        }
    }
    return console.log(count);
}

countLetter('w3resource.com', 'o');
