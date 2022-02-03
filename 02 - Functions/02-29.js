/*
Write a JavaScript function to get the function name.
*/

function funcname() {
    console.log( arguments.callee.name );
}

funcname();
