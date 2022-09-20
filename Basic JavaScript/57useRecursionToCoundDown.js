// use recursion to create countdown


// count up
function arrUp(n){
    if(n < 1){
        return [];
    } else {
        console.log(n);
        const arr = arrUp(n-1);
        arr.push(n);

        return arr;
    }
}

console.log(arrUp(5));


function arrDown(m){
    if(m < 1){
        return [];
    } else {
        const arr2 = arrDown(m-1);
        arr2.unshift(m);
        return arr2;
    }
}

console.log(arrDown(5));