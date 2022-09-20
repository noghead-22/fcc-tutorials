/**
 * push append data at the end of an array
 * pop  is used to pop a value off of the end of an array
 * shift removed the first element from an array
 * unshift adds the element at the beginning of an array
 */

const arr = [1, 2, "uc", 4];
arr.push("haha");

console.log(arr);


const arr2 = ["one", 2, 3];
const popped = arr2.pop();

console.log(popped);


const arr3 = ["A", 3, 4, ["mike", 11], "jason"];
const shifted = arr3.shift();

console.log(shifted);
console.log("arr3: " + arr3);


const arr4 = ["end"];
const unshifted = arr4.unshift("beginning");
console.log(unshifted);

console.log(arr4);