function func(){
    let str = "something";
    console.log(str);
}

func();
console.log(str); // will throw an error, as str is not defined outside of the function

