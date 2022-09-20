/**
 * in JS we often don't need to name functions.
 * especially when passing a function as an argument to another function.
 * we don't need to name these functions because we don't reuse them anywhere else
 * 
 * 
*/


const myFunc = function() {
    const myVar = "value";

    return myVar;
}


// in ES6 there is a cleaner way to do this

const myFunc2 = () => {
    const myVar2 = "value2";

    return myVar2;
}

const myFunc3 = () => "value3";
