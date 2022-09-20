// ES6 provides default parameters

const greeting = (name = "anonymous") => "hello" + name;
console.log(greeting("probis"));
console.log(greeting());

const addition = (num, value = 1) => num+value;
console.log(addition(5,6));
console.log(addition(3));
