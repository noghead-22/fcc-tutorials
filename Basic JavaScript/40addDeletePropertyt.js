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
console.log(best);
console.log("\n---------------------------");

// adding a new property
best["job"] = "noJob";

console.log(best);
best["job"] = "yes";
console.log(best);

// you add the new property in the same way of adding



// deleting a property

delete best["job"];
console.log(best);

delete best.money;
console.log(best);