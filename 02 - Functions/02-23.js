/*
Write a JavaScript function to find the first not repeated character.
Sample arguments : 'abacddbec'
Expected output : 'e'
*/

function notRepeat(str) {
    for (let i = 0; i < str.length; i++) {
        var count = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                count++;
            }
        }
       
        if (count < 2) {
            return console.log(str[i]);
        }
    }

    return console.log("There aren't any single character.");
}

notRepeat('abacddbec');
