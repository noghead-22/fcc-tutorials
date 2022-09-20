// Math.random() can return a 0 but never a 1.

const num2 = Math.floor(Math.random() * 5);

console.log(num2);


function randomGenerate (min, max){
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    
    if(num >= min && num <= max){
        return num;
    }
}

console.log(randomGenerate(1, 10));

