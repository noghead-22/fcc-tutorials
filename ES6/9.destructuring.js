/**
 * destructuring assignment to extract values from objects
 * it is for neatly assigning values taken directly from an object.
 */

// const user = {name: "doe", age:34};
// const name = user.name;
// const age = user.age;

// here is the equivalent assignment statement using ES6 syntax
const {name, age} = user;


// const HIGH_TEMPERATURES = {
//     yesterday : 75,
//     today : 77,
//     tomorrow : 80
// };

// const {today, tomorrow} = HIGH_TEMPERATURES;


const HIGH_TEMPERATURES = {
    yesterday : 75,
    today : 77,
    tomorrow : 80
};
const {today:highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;