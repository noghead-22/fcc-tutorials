# ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6


# Create Strings using Template Literals

Template literals allow you to create multi-line strings and to use string interpolation features to create strings.

const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);

# another example

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  const failureItems = [];
  for(let i=0; i<arr.length; i++){
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }

  return failureItems;
}

const failuresList = makeList(result.failure);

# Write Concise Object Literal Declarations Using Object Property Shorthand
ES6 adds some nice support for easily defining object literals.
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});

const getMousePosition = (x, y) => ({ x, y });

# Write Concise Declarative Functions with ES6
When defining functions within objects in ES5, we have to use the keyword function as follows:
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};

With ES6, you can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax:
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};

# Use class Syntax to Define a Constructor Function
ES6 provides a new syntax to create objects, using the class keyword. It should be noted that the class syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm. 

In ES5, we usually define a constructor function and use the new keyword to instantiate an object.

var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');

In ES6 ::: 

class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');

Use the class keyword and write a constructor to create the Vegetable class.

The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor.

class Vegetable {
  constructor(name){
    this.name = name;
  }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name); 

# Use getters and setters to Control Access to an Object
Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.

Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.

# Create a module script
ES6 introduced a way to easily share code among JavaScript files. This involves exporting parts of a file for use in one or more other files, and importing the parts you need, where you need them. In order to take advantage of this functionality, you need to create a script in your HTML document with a type of module. Here’s an example:
<script type="module" src="fileName.js"></script>



# Use export to Share a Code Block
Imagine a file called math_functions.js that contains several functions related to mathematical operations. One of them is stored in a variable, add, that takes in two numbers and returns their sum. You want to use this function in several different JavaScript files. In order to share it with these other files, you first need to export it.

export const add = (x, y) => {
    return x+y;
}

The above is a common way to export a single function, but you can achieve the same thing like this:

const add = (x, y) => {
    return x+y;
}
export { add };

When you export a variable or function, you can import it in another file and use it without having to rewrite the code. You can export multiple things by repeating the first example for each thing you want to export, or by placing them all in the export statement of the second example, like this:

export { add, subtract };


this is how you can import it : 
import { add } from './math_functions.js';

# Reuse JavaScript Code Using import
import allows you to choose which parts of a file or module to load. In the previous lesson, the examples exported add from the math_functions.js file. Here's how you can import it to use in another file:

import { add } from './math_functions.js';

Here, import will find add in math_functions.js, import just that function for you to use, and ignore the rest. The ./ tells the import to look for the math_functions.js file in the same folder as the current file. The relative file path (./) and file extension (.js) are required when using import in this way.

You can import more than one item from the file by adding them in the import statement like this:

import { add, subtract } from './math_functions.js';



# Use * to Import Everything from a File
Suppose you have a file and you wish to import all of its contents into the current file. This can be done with the import * as syntax.

import * as myMathModule from "./math_functions.js";

# Create an Export Fallback with export default
In the export lesson, you learned about the syntax referred to as a named export. This allowed you to make multiple functions and variables available for use in other files.

There is another export syntax you need to know, known as export default. Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.

Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with var, let, or const

export default function add(x, y) {
  return x + y;
}

export default function(x, y) {
  return x + y;
}


# Import a Default Export
In the last challenge, you learned about export default and its uses. To import a default export, you need to use a different import syntax. In the following example, add is the default export of the math_functions.js file. Here is how to import it:

import add from "./math_functions.js";


# Create a JavaScript Promise
A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise. The syntax looks like this:

const myPromise = new Promise((resolve, reject) => {

});


# Complete a Promise with resolve and reject
A promise has three states: pending, fulfilled, and rejected. The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the promise.The resolve and reject parameters given to the promise argument are used to do this. resolve is used when you want your promise to succeed, and reject is used when you want it to fail. These are methods that take an argument, as seen below.

# TO ANKI
Make the promise handle success and failure. If responseFromServer is true, call the resolve method to successfully complete the promise. Pass resolve a string with the value We got the data. If responseFromServer is false, use the reject method instead and pass it the string: Data not received.

const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});


# Handle a Fulfilled Promise with then
Promises are most useful when you have a process that takes an unknown amount of time in your code, often a server request.
When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. 
This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve.
Here’s an example:

myPromise.then(result => {
  
});


# TO ANKI
Add the then method to your promise. Use result as the parameter of its callback function and log result to the console.

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
      console.log(result);
});


# Handle a Rejected Promise with catch
catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. Here’s the syntax:

myPromise.catch(error => {
  
});


# To Anki
Add the catch method to your promise. Use error as the parameter of its callback function and log error to the console.

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error);
});