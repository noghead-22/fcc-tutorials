/**
 * nested objects can be accessed by chaining together the dot or bracket notation
 * 
 */


const homeStorage = {
    "desk":{
        "drawer":"stapler",
    },
    "cabinet":{
        "topDrawer":{
            "folder1":"a file",
            "folder2":"b file",
        },
        "bottomDrawer": "soda"
    }
};


const result = homeStorage.cabinet["topDrawer"].folder1;
console.log(result);