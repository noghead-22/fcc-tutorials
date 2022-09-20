function abTest(a, b){
    if(a < 0 || b < 0){
        return;
    }
    return Math.pow((a+b), 2);
}

console.log(abTest(-1,2));


function cdTest(c, d){
    if(c < 0 || d < 0){
        return;
    }
    return Math.round(Math.pow(Math.sqrt(c)+Math.sqrt(d), 2));
}

console.log(cdTest(4,16));