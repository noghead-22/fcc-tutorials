// i have a multidimensional array
// what do i do ?
// don't worry...


const arr = [[1,2], [3,4], [5,6]];

let total = 0;

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
        //console.log(arr[i][j]);
    }
}

//, [3,4,5], [6]

const array = [[3,2]];

let result = 1;

for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array[i].length; j++){
        result *= array[i][j];
    }
}

console.log(result);