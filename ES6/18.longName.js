//Use class Syntax to Define a Constructor Function

// ES6 provides a new syntax to create objects, using the class keyword.
// It should be noted that the class syntax is just syntax, 
// and not a full-fledged class-based implementation of an object-oriented paradigm

//  in ES5, we usually define a constructor function and use the new keyword to 
// instantiate an object

// var spaceShuttle = function (targetPlanet) {
//     this.targetPlanet = targetPlanet;
// }

// var zeus = new spaceShuttle('jupiter');

class SpaceShuttle {
    constructor (targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
const zeus = new SpaceShuttle('jupiter');
console.log(zeus.targetPlanet);

// class keyword declares a new function, to which a constructor is added.
// this constructor is invoked when new is called to create a new object.


// Use the class keyword and write a constructor to create the Vegetable class.
// The Vegetable class allows you to create a vegetable object 
// with a property name that gets passed to the constructor.

class Vegetable {
    constructor(name){
        this.name = name;
    }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name);