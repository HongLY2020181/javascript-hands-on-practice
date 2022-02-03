/*
Write a JavaScript function to  get the number of occurrences of each letter in specified string.
*/

function occur(str) {

    for (var i = 0; i < str.length; i++) {
        var count = 0; 
        for (var j = 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                count++;
            }
        }
        console.log(str[i] + " has " + count + " occurences.");
    }
}

occur("thequickbrownfoxjumpsoverthelazydog");