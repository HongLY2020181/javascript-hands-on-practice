/*
Write a JavaScript function that reverse a number.
Example x = 32243;
Expected Output : 34223
*/
"use strict";
(function (pickedNumber) {

   let str = pickedNumber.toString();
    let temp = "";
    for(let i = str.length - 1; i >= 0; i--) {
        temp += str[i];
    }
    console.log(temp);

})(32243);
