/*
    when variables are defined, they have an initial value of undefined.
    if you do a mathematical operation on an undefined variable your result will be NaN.
    NaN means Not a Number.
    if you concatenate a string with an undefined variable, you will get a string of undefined.

    undefined variable
    var a;
*/

var a;
var b = a + "hi";

console.log(a+2); // NaN

console.log(a); // undefined

console.log(b);