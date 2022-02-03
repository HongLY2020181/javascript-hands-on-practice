/*
Write a JavaScript function to find longest substring in a given a string without repeating characters.
*/

function noRepeat(names) {
    var string = "";
    var rs = "";
    namestring = names.split("");

    for(let i = 0; i < namestring.length; i++) {

        for(let j = i; j < namestring.length; j++) {

            if(string.includes(namestring[j]))
                break;
            else
                string += namestring[j];

         }
         if(rs.length < string.length)
         rs = string;

         string = "";
    }

    return rs;
}

console.log(noRepeat("google.com"));
