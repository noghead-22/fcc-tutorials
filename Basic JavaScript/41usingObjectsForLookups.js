/**
 * objects can be thought of as a key/value storage, like a dictionary.
 * if you have tabular data, you can use an object to lookup values
 * rather than a switch or if-else chain.
 * this is most useful when you know that your input data is limited to a certain range.
 * 
 *  
 */

const alphabet = {
    1:"a",
    2:"b",
    3:"c",
    4:"d",
    5:"e",
    "bunaKarsilik":"Gelen"
};

const firstLetter = alphabet[1];
console.log(firstLetter);


const result = alphabet["bunaKarsilik"];
console.log(result);
