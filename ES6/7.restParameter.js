function howMany(...args){
    return "you have passed " + args.length + " arguments";
}
console.log(howMany(1, "two", null, {}, ["hi"]));


function sum(...args){
    let total = 0;
    for(let num of args){
        total += num;
    }
    return total;
}
console.log(sum(1,2,3,4,5,6));

function print(...args){
    console.log(args);
}
print(1,2,3,4);



const arr = [6, 89, 3, 45];
const maximum = Math.max(...arr);
console.log(maximum);

function sum2(...args){
    let total = 0;
    for(let a of args){
        total += a;
    }
    return total;
}

console.log(sum2(2,3,4,5));

// the rest parameter must be the last parameter of the function.

function manyArgs(arg1, arg2, ...args){
    console.log("arg1: "+arg1);
    console.log("arg2: "+arg2);
    console.log(args);
}
manyArgs(1, 2, 3, 4, 5,6);