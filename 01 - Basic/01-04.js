/*
 Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
 Heron's Formula
*/

(function area(a, b, c) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    console.log(area);
})(5, 6, 7);