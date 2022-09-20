let answer = "";

function testSpeed(car){
    switch(car){
        case "ferrari":
        case "bugatti":
            answer = "fast";
            break;
        case "pejo":
            answer = "slow";
            break;
        default:
            answer = "poor";
            break;
    }
    return answer;
}

console.log(testSpeed("ferrari"));