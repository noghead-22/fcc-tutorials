/**
 * scope refers to visibility of variables
 * variables which are defined outside of a function block have Global Scope 
 * they can be seen everywhere in your code
 * 
 * 
 */

let myGlobal = 10;
let oopsGlobal;

function func1(){
    oopsGlobal = 5;
}

function func2(){
    var output = "";
    if(typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal;
    }
    if(typeof oopsGlobal != "undefined"){
        output += "oopsGlobal: " + oopsGlobal;
    }
    return output;
}

console.log(func1(), func2());