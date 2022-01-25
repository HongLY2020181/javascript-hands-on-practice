/*
 Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '
*/
"use strict";
function capitalise(pickedSentence) {
    let split = pickedSentence.split(" ");
    for (var i = 0; i < split.length; i++) {
        split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
    }

    let str = split.join(" ");

    console.log(str);

        
       
}

capitalise("the quick brown fox");
