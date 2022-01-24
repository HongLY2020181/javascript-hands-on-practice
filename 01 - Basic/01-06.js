/*
 Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
*/
"use strict";

(function (year) {
    if ((year % 100 == 0) && (year % 400 == 0) && (year % 4 == 0)) {
        console.log(year, " is leap year in the Gregorian calendar.");
    }
    else {
        console.log(year, " is not leap year in the Gregorian calendar.");
    }
})(2000);