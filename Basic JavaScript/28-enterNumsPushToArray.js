let count = 1;
let arr = [];

const ask = require("prompt-sync")();
while(count <= 5){
    
    let num2 = ask("enter the numbers: ");
    count++;
    arr.push(num2);
}

console.log(arr);