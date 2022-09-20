/**
 * just like a regular function, you can pass arguments into an arrow function.
 * 
 * if an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.
 * 
 * it is possible to pass more than one argument into an arrow function.
 * 
 */


// concat() method

function addToArray(arr1, arr2){
    const result = arr1.concat(arr2);

    return result;
}

console.log(addToArray([1,2], [9,4]));


const addToArray2 = (arr1, arr2) => arr1.concat(arr2);
console.log(addToArray2([7,2], [8,6]));