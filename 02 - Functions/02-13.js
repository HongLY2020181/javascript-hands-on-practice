/*
Write a JavaScript function to compute the factors of a positive integer.
*/
"use strict";
(function () {
    function factors(pickedNumber) {
        var num_factor = [];
        for (var i = 1; i <= pickedNumber; i++) {
            if (pickedNumber % i === 0) {
                num_factor.push(i);
            }
        }
        return num_factor;
    }

    console.log(factors(15));
    
})();