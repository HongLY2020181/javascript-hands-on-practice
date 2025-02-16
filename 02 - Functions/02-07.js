/*
 Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
Example string : 'The quick brown fox'
Expected Output : 5
*/
"use strict";
(function () {
    function countVowels(pickedSentence) {
        var vowels = ['a', 'e', 'i', 'o', 'u'];
        var count = 0;
        for (let i in pickedSentence) {
            for (let j in vowels) {
                if (pickedSentence[i] == vowels[j]) {
                    count += 1;
                }
            }
        }
        return count;
    }

    console.log(countVowels("The quick brown fox"));
   
})();