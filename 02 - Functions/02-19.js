/*
Write a JavaScript function that returns array elements larger than a number.
*/

function largeEle(n, arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > n) {
            result.push(arr[i]);
        }
    }
    return result;
}

var arr = [65, 16, 0, 6, 64, 1, 68]
var n = 16;
console.log(largeEle(n, arr));

