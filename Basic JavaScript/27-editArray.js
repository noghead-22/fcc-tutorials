/**
 * push append data at the end of an array
 * pop  is used to pop a value off of the end of an array
 * shift removed the first element from an array
 * unshift adds the element at the beginning of an array
 */

/**
 * [x] user enters the operation "user push, pop, shift, unshift"
 * [x] user enters the "value"
 * [x] and does the operation based on ppsu
 * [] while input != exit continues to ask for what operation
 * [] if input == "printArray" then prints the current array
 */


let arr = [];
const askOperation = require("prompt-sync")();
const askValue = require("prompt-sync")();

while(true){
    let operation = askOperation("enter operation: ");
    let value = askValue("enter the value: ");

    switch(operation){
        case "push":
            arr.push(value);
            break;
        case "shift":
            arr.shift();
            break;
        case "pop":
            arr.pop(value);
            break;
        case "unshift":
            arr.unshift(value);
            break;
        case "exit":
            return;
    }
    console.log(arr);
}
console.log(arr);



