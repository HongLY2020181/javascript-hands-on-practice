/*
Write a function for searching JavaScript arrays with a binary search.
Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
*/

function binarySearch(arr, begin, last, key) {
    if (last >= begin) {
        var mid = (last - begin) / 2;

        if (arr[mid] === key) {
            return mid;
        }

        else if (arr[mid] > key) {
            return (arr, begin, mid - 1, key);
        }

        else {
            return (arr, mid + 1, last, key);
        }

    }

    return -1;
}

let arr = [ 2, 3, 4, 10, 40 ];
let x = 2;
let result = binarySearch(arr, 0, arr.length - 1, x);

if (result == -1) {
    console.log(x, "is not in the array.")
}

else {
    console.log(x, "is in the array which is in the index position", result);
}
