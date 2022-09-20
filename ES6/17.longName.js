// Write Concise Declarative Functions with ES6


// when defining functions within objects in ES5, we have to use the keyword function 
const person = {
    namee : "taylor",
    sayHello : function () {
        return `hello, my name is ${this.namee}`;
    }
};

console.log(person.sayHello());

// with ES6, you can remove the function keyword and colon altogether when defining
// functions in objects 

const newPerson = {
    firstName : "yako",
    sayHi () {
        return `hi, ${this.firstName}`;
    }
};

console.log(newPerson.sayHi());