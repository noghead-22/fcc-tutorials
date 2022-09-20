/**
 * in JS, template literals are one of the ways of creating string literals. They
 * are created by surrounding a string with backstick (``)
 * 
 * with the help of template literals you can perform :
 * creation of multiline string
 * string concatenation 
 * string interpolation
 * 
 */

// creation of multiline string

let message = "this \
is \
a \
multiline \
string ";

console.log(message);

let message2  = `this
is a 
multiline
message`;
console.log(message2);


///////////////////////////////////////////////////////////////////////


// how to concantenate string using template literals ? + operator or better solution placeholders ${}
let firstName = "yakup";
let lastName = "sipahi";
let city = "izmir";
let message3 = `hello, my name is ${firstName} and i am from ${city}`;
console.log(message3);

const person = {
    firstName : "probisk",
    lastName : "ksiborp",
    age : 26,
    skill : "wasting time"
};

const str = `my name is ${person.firstName} and i am good at ${person.skill}`;
console.log(str);