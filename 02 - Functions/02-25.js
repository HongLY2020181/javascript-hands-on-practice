/*
Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output : "United States of America"
*/
function Longest_Country_Name(arr) {
    var rs = arr[1];
    for (let i = 1; i < arr.length; i++) {
        if (rs.length < arr[i].length) {
            rs = arr[i];
        }
    }
    return console.log(rs);
}


Longest_Country_Name(["Australia", "Germany", "United States of America"])