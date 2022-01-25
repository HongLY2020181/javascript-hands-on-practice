/*
Write a JavaScript function that returns a passed string with letters in alphabetical order.
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.
*/
"use strict";
function sorter(pickedWord) {
    // let sorted = pickedWord.split('').sort().join('');
    // console.log(sorted);
    for (let i = 0; i < pickedWord.length - 1; i++) {
        for (let j = i + 1; j < pickedWord.length - 1; j++) {
            if (pickedWord.charAt(i) < pickedWord.charAt(j)) {
                let temp = pickedWord.charAt(j);
                let temp1 = pickedWord.charAt(i);
                pickedWord.charAt(j) = temp1;
                pickedWord.charAt(i) = temp;
            }
        }
    }
    console.log(pickedWord);
 }

 sorter("webmaster");