/*
Write a JavaScript program to pass a 'JavaScript function' as parameter.
*/

function FullName(firstName, Name)
{
    const n = Name();
    console.log(firstName, n);
}

function lastName() {
    return 'Hong';
}

FullName("Ly", lastName);

