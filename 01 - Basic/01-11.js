/*
Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in celsius and f = temperature in fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C 
*/
"use strict";
(function () {
    function convert(cels, far) {
        celToFar(cels);
        farToCel(far);
    }

    function celToFar(cels) {
        let far = (cels * 9)/5 + 32;
        console.log(cels , "°C is " , far  ,"°F");
    }

    function farToCel(far) {
        let cel = ((far-32)/9) * 5;
        console.log(far , "°F is " , cel , "°C");
    }

    convert(60, 45);
   
})();