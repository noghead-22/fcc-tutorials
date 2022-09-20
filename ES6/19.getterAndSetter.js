// You can obtain values from an object 
// and set the value of a property within an object.
// these are clasically called getters and setters.


// Use the class keyword to create a Thermostat class. 
// The constructor accepts a Fahrenheit temperature.

// In the class, create a getter to obtain the temperature in Celsius and
// a setter to set the temperature in Celsius.

// Remember that C = 5/9 * (F - 32) and
// F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit,
// and C is the value of the same temperature in Celsius.

// Note: When you implement this, 
// you will track the temperature inside the class in one scale, 
// either Fahrenheit or Celsius.

// class Thermostat {
//     constructor (fahrenheit){
//         this.fahrenheit = fahrenheit;
//     }

//     get temperature(){
//         return (5/9) * (this.fahrenheit - 32);
//     }

//     set temperature(celsius){
//         this.fahrenheit = (celsius * 9.0 / 5) + 32;
//     }
// }

// const thermos = new Thermostat(76);
// let temp = thermos.temperature;
// thermos.temperature = 26;
// temp = thermos.temperature;


// console.log(thermos);


class Book {
    constructor (author){
        this.author = author;
    }
    get writer(){
        return this.author;
    }
    set writer(updateAuthor) {
        this.author = updateAuthor;
    }
}

const novel = new Book("anonymous");
console.log(novel.writer);
novel.writer = "newAuthor";
console.log(novel.writer);