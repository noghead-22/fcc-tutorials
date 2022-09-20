// Write Concise Object Literal Declarations Using Object Property Shorthand

const getMousePosition = (x, y) => ({
    x: x,
    y: y
});

// this is the same function :
const getMosePosition = (a, b) => ({a, b});


const createPerson = (firstName, age, gender) => {
    return {
        firstName : firstName,
        age : age,
        gender : gender
    };
};

// using object literal shorhand, you can write it this way : 

const createePerson = (firstNamee, agee, genderr) => ({firstNamee, agee, genderr});