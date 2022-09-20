/**
 * when you declare a variable with the var keyword, it is declared globally,
 * or locally if declared inside a function.
 * 
 * when you declare a variable with the let keyword inside a block, 
 * statement, or expression, its scope is limited to that block, statement, or expression.
 * 
 */

var print;
for(var i = 0; i < 3; i++){
    if (i===2){
        print = function () {
            return i;
        };
    }
}
console.log(print());
//console.log(typeof(print));


let print2;
for(let i = 0; i < 3; i++){
    if(i === 2){
        print2 = function () {
            return i;
        };
    }
}
console.log(print2());
console.log(i);

