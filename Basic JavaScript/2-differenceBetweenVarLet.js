/** the problem with the var keyword is that you can easily overwrite variable declarations
 * 
 * unlike var, when you see let, a variable with the same name can only be declared once.
 */

var name = "yako";
var name = "probis";

// in the code above, the name variable is originally declared as "yako"
// and is then overriden to be "probis" console displays "probis"

let lastName = "sipahi";
//let lastName = "hi"; // cannot redeclare