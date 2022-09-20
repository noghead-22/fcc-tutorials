/**
 * sometimes it is useful to check if the property of a given
 * object exists or not.
 * 
 */

 const best = {
    "nickName" : "probisk",
    "tvSeries" : "brooklyn 99",
    "food" : "pizza",
    "drink" : "cola",
    "laptop" : "thinkpad", 
    "money" : 0,
    "life" : "happy", 
    "favColors":["red", "pink", "blue"]
};

const result = best.hasOwnProperty("nickName");
console.log(result);

const result2 = best.hasOwnProperty("job");
console.log(result2);