/*
Write a JavaScript program to calculate multiplication and division of two numbers (input from user)
*/

// var num1 = prompt("Enter the first number: ");
// var num2 = prompt("Enter the second number: ");
const cal = function(num1, num2) {
    var division = num1 / num2;
    var multiplication = num1 * num2;

    console.log(division);
    console.log(multiplication);
}

cal(10, 2);