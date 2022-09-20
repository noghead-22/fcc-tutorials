/**
 * nested object
 * 
 * nested array
 */

const basicObject = {
    name2:"yako",
    "age":26,
    "height":187,
    "girlfriend":false,
    "tired":"never",
    "favoriteTVseries" : ["b99", "12 monkey", "walking dead"],
    "favColors":["blue", "green","black"]
};

console.log(basicObject["name2"]);
console.log(basicObject.favoriteTVseries[1]);
console.log(basicObject["favColors"]);


console.log('-----------------------------\n');

const storage = {
    "desk":{
        "drawer":"stapler"
    },
    "cabinet":{
        "topDrawer":{
            "folder1":"case file",
            "folder2":"myNotes"
        },
        "bottomDrawer":"snack"
    }
};
console.log("what is in the desk drawer? " + storage.desk.drawer);
console.log("what is in the cabinet bottom drawer? " + storage.cabinet["bottomDrawer"]);


const myPets = [
  {
    animalType : "cat",
    names : ["meow", "suzzy", "kitcat"]
  },
  {
    animalType : "dog",
    names : ["spot", "bowser", "whity"]
  }
];

console.log(myPets[1].names[0]);
console.log(myPets[0].names[2]);