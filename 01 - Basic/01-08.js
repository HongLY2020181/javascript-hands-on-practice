/*
Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".
*/


let user = prompt("choose a number between 1 to 10: ");

let guess = Math.floor(Math.random() * 11);

if (user === guess) {
    console.log("Good Work");
}

else {
    console.log("Not matched");
}