/*
Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development'
*/

"use strict";
(function () {
    function longestWord(pickedSentence) {
        var array1 = pickedSentence.split(' ');
        var result = array1[0];
      
        for(var x = 1 ; x < array1.length ; x++)
        {
          if(result.length < array1[x].length)
          {
          result = array1[x];
          } 
        }
        return result;
        
    }

    console.log(longestWord("Web Development Tutorial"));
    
})();