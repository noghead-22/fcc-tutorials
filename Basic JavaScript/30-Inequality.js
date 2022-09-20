function test(num1, num2){
    if(num1 !== num2){
        return "not equal";
    } else if(num1 === num2){
        return "strict equal";
    } else {
        return "i dont know";
    }
}

const result = test('2',2);
console.log(result);