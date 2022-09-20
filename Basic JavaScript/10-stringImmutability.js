/**
 * what is string immutability ?
 * String values are immutable, which means that they cannot be altered once created.
 */

let str = "roy";
str[0] = "a";

console.log(str);

/**
 * this doesn't mean that str cannot be changed.
 * just the individual characters of a string literal cannot be changed.
 * the only way to change str would be to assign it with a new string.
 */

let str2 = "roy";
str2 = "joy";
console.log(str2);