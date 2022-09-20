function test(fruit){
    let answer = "";

    switch(fruit){
        case "apple":
            answer = "best";
            break;
        case "kiwi":
            answer = "okay";
            break;
        default:
            answer = "sorry";
           
    }
    return answer;
}

console.log(test("orange"));