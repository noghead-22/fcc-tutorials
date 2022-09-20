/**
 * We have an array of objects representing different people in our contacts lists.
 * A lookUpProfile function that takes name and a property (prop) as arguments.
 * 
 * 
 * [] the function should look through the contacts list for the given firstName parameter
 * [x] function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
 * [x] If both are true, then return the "value" of that property.
 * [] If name doesn't correspond to any contacts then return the string "No such contact"
 * [] If prop doesn't correspond to any valid properties of a contact found to match name then return the string "No such property".
 */

 const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];


  console.log(contacts[0].firstName); // akira
  console.log(contacts[0]["firstName"]); // akira
  console.log(contacts[1].likes); // hogwarts magic hagrid

  for(let ii = 0; ii < contacts.length; ii++){
    console.log(contacts[ii].likes);
  }




function lookUpProfile (name, prop){
    for(let i = 0; i < contacts.length; i++){
        if (contacts[i].firstName === name){
          if(contacts[i].hasOwnProperty(prop)){
            return contacts[i][prop];
          }
          return "No such property";
        }
      }
      return "No such contact";
}

const result = lookUpProfile("Kristian", "lastName");
console.log(result);

/*
  * 
  * [] the function should look through the contacts list for the given firstName parameter
  * [x] function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
  * [x] If both are true, then return the "value" of that property.
  * [] If name doesn't correspond to any contacts then return the string "No such contact"
  * [] If prop doesn't correspond to any valid properties of a contact found to match name then return the string "No such property".
  */