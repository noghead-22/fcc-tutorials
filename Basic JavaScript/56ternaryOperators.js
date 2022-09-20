function compare (num1, num2){
    if(num1 > num2){
        return "num1 > num2";
    } else {
        return "num2 > num1";
    }
}

console.log(compare(3,2));



function comparee(a, b){
    return a > b ? "a > b " : a < b ? "a < b" : "a == b";
}

console.log(comparee(2,3));