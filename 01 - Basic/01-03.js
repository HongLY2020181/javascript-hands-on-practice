/*
Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy 
*/
"use strict";
(function () {
    const date = new Date();

    function currentDate() {
        let days = date.getDate();
        let months = date.getMonth() + 1;
        let years = date.getYear();
        console.log(days, "-", months, "-", years);
    }

    currentDate();
    
})();