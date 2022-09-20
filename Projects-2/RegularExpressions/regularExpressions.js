let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log(result);

let petString = "james has a pet cat.";
let petRegex = /dog|cat|fish|bird/;
let result2 = petRegex.test(petString);
console.log(result2);

let str = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result3 = fccRegex.test(str);

console.log(result3);


let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result4 = extractStr.match(codingRegex);
console.log(result4);


let testStr = "Repeat, Repeat, RepEat, RepeaT, rEPEAT";
let repeatRegex = /repeat/gi;
let test = testStr.match(repeatRegex);
console.log(test);

let humStr ="I'll hum a song";
let hugStr = "Bear hug";
huRegex = /hu./

let findM = huRegex.test(humStr);
let findG = huRegex.test(hugStr);

console.log(findM, findG);

console.log('------------------------------');



let str1 ="big";
let str2 = "bug";
let str3 = "bag";
let str4 = "bog";

let bgRegex = /b[aui]g/;

console.log(str1.match(bgRegex));
console.log(str2.match(bgRegex));
console.log(str3.match(bgRegex));
console.log(str4.match(bgRegex));

