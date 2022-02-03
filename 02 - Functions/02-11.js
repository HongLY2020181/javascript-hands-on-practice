/*
Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
Sample array : [1,2,3,4,5]
Expected Output : 2,4
*/
"use strict";
(function () {
    function greLow(sampleArray) {
        sampleArray.sort();   
        console.log(sampleArray[1], sampleArray[sampleArray.length - 2]);
        
    }

    greLow([2, 4, 6, 9, 7, 8]);
    
})();