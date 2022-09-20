/**
 * a function can include a return statement but it doesn't have to.
 * in the case that the function doesn't have a return statement,
 * when you call it, the function processes the inner code but the
 * return value is undefined.
 */


let sum = 0;

function addFour(num){
    sum += num;
}

console.log(addFour(4));