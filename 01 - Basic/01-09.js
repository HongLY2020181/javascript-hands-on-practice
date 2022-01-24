/*
Write a JavaScript program to calculate days left until next Christmas
*/
"use strict";
(function () {
    var ChristmasDate = new Date("25 Dec 2022");
    const currentDate = new Date();

    const totalsecond = (ChristmasDate - currentDate) / 1000;

    const dayleft = Math.floor(totalsecond / 3600 / 24);

    console.log(totalsecond);

    console.log("There are ", dayleft, " days left until Christmas.");
    

    
})();