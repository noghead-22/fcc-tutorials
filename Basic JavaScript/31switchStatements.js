function check(val){
    let answer = "";

    switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
    }
    return answer;
}

console.log(check(2));
