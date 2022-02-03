/*
Write a JavaScript function which returns the n rows by n columns identity matrix.
*/
"use strict";
(function () {
    function identityMatrix(n) {
        for (let i = 0; i < n; i++) {
            var matrix = "";
            for (let j = 0; j < n; j++) {
                if (i === j)
                    matrix += '1';
                else 
                    matrix += '0';
            }
            console.log(matrix);
        }
    }

    identityMatrix(5);
    
})();