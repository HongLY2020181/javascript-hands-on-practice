/*
Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*/
"use strict";
(function () {
    function primer(pickedNumber) {
        function checkNumber(n) {
            if (n===1) {
                return false;
            }
            else if(n === 2) {
                return true;
            }
            else {
                for(var x = 2; x < n; x++) {
                    if(n % x === 0) {
                        return false;
                    }
                }
                return true;  
            }
        }

        if (checkNumber(pickedNumber)) {
           console.log(pickedNumber, "is a prime number.");
        } 

        else {
            console.log(pickedNumber, "is not a prime number.")
        }
    }

    primer(6);
})();