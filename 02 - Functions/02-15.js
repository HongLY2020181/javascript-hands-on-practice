/*
Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
*/
"use strict";
(function (b, n) {
    function expon(b, n) {
        var ans = 1;
        for (var i =1; i <= n; i++)
        {
                ans = b * ans;        
        }
        return ans;
    }

    console.log(expon(b, n));
})(2, 3);