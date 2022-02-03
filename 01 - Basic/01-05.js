/*
 Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
*/

"use strict";
function wordRotate(string) {
    let split = [...string];
    let rWord = "";
    split.unshift(split[split.length-1]);
    split.pop();
    for ( var i = 0 ; i <= split.length-1; i++) {
        rWord += split[i];
    }

    console.log(rWord);
    
}
console.log(setInterval(wordRotate("w3resource"), 1000));
//does not really work

  