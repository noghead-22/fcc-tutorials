//Use Destructuring Assignment to Assign Variables from Arrays
const [x, y] = [1,2,3,4,5];
console.log(x, y);

const [,a, , ,b , , c] = [1,2,3,4,5,6,7,8,9,10];
console.log(a,b,c);


let num1 = 5, num2 = 10;
[num1, num2] = [num2, num1];
console.log(num1, num2);