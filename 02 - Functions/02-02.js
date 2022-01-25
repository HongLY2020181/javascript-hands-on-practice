/*
Write a JavaScript function that checks whether a passed string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
*/
"use strict";
(function (x) {
    function isItPalindrome(word) {

        if (!Palindrome(word)) {
            console.log("The ", word, " is not palindrome.");
        }
        else 
            console.log("The ", word, " is palindrome.");
    }

    isItPalindrome(x);

    function Palindrome(str) {

        str = str.toLowerCase();

        for (var i = 0; i < str.length /2; i++) {
            if (str[i] !== str[str.length - 1 - i]) { 
                return false; 
            }
        return true;
        }
    }
          
})("madam");
