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

best.nickName = "fsociety";
console.log(best);
console.log("\n---------------------------");


best["money"] = "so much";
console.log(best);
console.log("\n---------------------------");


best.favColors[0] = "black";
console.log(best);

best.favColors.shift();
console.log(best);

