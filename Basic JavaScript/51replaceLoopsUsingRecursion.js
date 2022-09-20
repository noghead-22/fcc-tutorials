/**
 * recursion is a concept that a function can be expressed in terms of itself
 * to help to understand this :
 * multiply the first n elements of an array to create the product of those elements
 * 
 * 
 * multiply(arr, n) == multiply(n-1) * arr[n-1];
 * 
 */


// function multiply(arr, n){
//     let product = 1;

//     for(let i = 0; i < n; i++){
//         product *= arr[i];
//     }
//     return product;
// }

// const result = multiply([3, 4, 6, 2, 5], 2);
// console.log(result);



// function addition(arr, n){
//     if (n <= 0){
//         return 1; // base case 
//     } else {
//         return multiply(arr, n-1) * arr[n-1];
//     }
// }

// let add = addition([3, 4, 6, 2, 5], 2);
// console.log(add);


// TASK : write a recursive function, sum(arr, n), that returns the sum of the first n
//        elements of an array


let total = 0;

function sum(arr, n){
    if(n <= 0){
        return 0;
    } else {
        return sum(arr, n-1) + arr[n-1];
    }
}

console.log(sum([5,6,7, 2, 3], 3));