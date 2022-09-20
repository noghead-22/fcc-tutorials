/**
 * it is possible to have both local and global variables with the same name
 * the local variable takes precedence over the global variable
 * whic means local variable comes before the global variable
 */

let onBody = "bra"; // global variable

function clothing(){
    const onBody = "t-shirt"; // local variable
    return onBody;
}

console.log(clothing());