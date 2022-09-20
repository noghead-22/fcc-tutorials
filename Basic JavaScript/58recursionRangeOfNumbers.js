// use recursion to create a range of numbers
// [] We have defined a function named rangeOfNumbers with two parameters. 
// [] The function should return an array of integers 
// [] which begins with startNum and ends with endNum parameter. 
// [] The starting number will always be less than or equal to the ending number.
// [] Your function must use recursion by calling itself and not use loops of any kind. 
// [] It should also work for cases where both startNum and endNum are the same.

function rangeOfNumbers(startNum, endNum){ 
    if(endNum < startNum){
        return [];
    } else {
        const numbers = rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);

        return numbers;
    }
}
console.log(rangeOfNumbers(5, 20));