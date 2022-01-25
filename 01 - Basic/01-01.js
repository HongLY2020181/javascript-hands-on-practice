/*
Write a JavaScript program to display the current day and time in the following format. 
Sample Output : Today is :
Current time is :  PM :  : 
*/

"use strict";

const date = new Date();

(function getCurrentDay() {
   let weeks = ["Sunday", "Monday", "Tuesday", "Wesdnesday", "Thursday", "Friday", "Saturday"];
   console.log("Today is : " + weeks[date.getDay()] + ".");
})();

(function getCurrentTime() {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    console.log("Current time is : ", hours, " PM : ", minutes, " : ", seconds);
})();