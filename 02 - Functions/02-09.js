/*
Write a JavaScript function which accepts an argument and returns the type.
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
*/

"use strict";
(function () {
    function type(value) {
        var dtypes = [Function, undefined, Number, String, Boolean, Object], x, len;
    
        if (typeof value === "object" || typeof value === "function") {
            for (x = 0, len = dtypes.length; x < len; x++) {
                if (value instanceof dtypes[x]) {
                    return dtypes[x];
                }
            }
        }
    
        return typeof value;
    }
    console.log(type(12));
    console.log(type('w3resource'));
    console.log(type(false));
})();
