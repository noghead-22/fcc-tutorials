/**
 * const declaration alone doesn't protect your data from mutation.
 * 
 * to ensure your data doesn't change, JavaScript provides a function Object.freeze to prevent data mutation.
 * 
 */

let obj = {
    lastName : "fcc",
    review : "awesome"
};
Object.freeze(obj);

obj.review = "bad";
obj.lastName = "ccf";

obj.newProp = "new property";
console.log(obj);