/**
 * equality operator ==
 * 1 == 1 } true
 * 1 == 2 } false
 * 1 == '1' } true
 * "3" == 3 } true
 * 
 * 
 * strict operator ===
 * 3 === 3 } true
 * 3 === '3' } false
 * 
 * 
 */


/**
 * [] functionEquality
 * [] functionStrict
 * [] what the user whant to check ? equal strict ? user enters eq st
 * [] user enters two values
 * [] if val1 == val2 console.log("equal");
 * [] if val1 === val2 console.log("strict equal");
 * 
 */
// const ask1 = require("prompt-sync")();
// let num1 = ask1("enter the num1: ");

// const ask2 = require("prompt-sync")();
// let num2 = ask2("enter the num2: ");

function check(val1, val2){
    if(val1 === val2){
        return "strict equal";
    }
    if(val1 == val2){
        return "normal equal";
    }
}

const result = check(2, 3);
console.log(result);


// function equalityOperator(val1, val2){

// }

// function strictEqualityOperator(val1, val2){

// }

// if()