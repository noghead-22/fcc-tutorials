const arr = [10, 9, 8, 7, 6];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}


const arr2 = [10, 20, 30, 40];

let total = 0;

for(let i = 0; i < arr2.length; i++){
    total = total + arr2[i];
}
console.log(total);


const arr3 = [2,2,2,2,2,2];

let total2 = 1;

for(let ii = 0; ii < arr3.length; ii++){
    total2 *= arr3[ii];
}
console.log(total2);