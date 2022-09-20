/**
 * the spread operator, allows us to expand arrays and other expressions in places where
 * multiple parameters or elements are expected.
 * 
 */
const arrr = [3, 87, 22, 45];
const maximus = Math.max(...arrr);

console.log(maximus);

// spread operator spreads out the elements of an iterable.
// the rest parameter puts multiple function arguments into an array.


let arr1 = [1,2,3,4,5];
let arr2 = [6, 7, 8];

let arr = [...arr1, ...arr2];
console.log(arr);
// you can see that the spread operator has unpacked all the elements of arr1 and arr2



function fn(a, b, c, ...args){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(args);
}
fn(1,2,3,4,5,6,7,8,9);

function sum(a, b, c){
    return a+b+c;
}
let arrrr = [1,2,3];
let addition = sum(...arrrr);
console.log("sum is: "+addition);
console.log(`sum is ${addition}`);


const months = ["JAN", "feb", "march"];
let newMonths = [...months];
console.log(newMonths);

const a = [1,2,3];
const b = [4,5,6];
const c = [...a, "probis", ...b];
console.log(c);

const d = [1,2,3];
const e = [4,5,6];
const f = d.concat(e);
console.log(f);