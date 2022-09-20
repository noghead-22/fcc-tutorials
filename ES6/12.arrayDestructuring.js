// let salesRecords = [12000, 6832, 9766];
// let januarySales = salesRecords[0],
//     februarySales = salesRecords[1],
//     marchSales = salesRecords[2];

// let salesRecords = [12000, 6832, 9766];
// // using array destructuring, you can directly access the elements of an array easily.
// let [januarySales, februarySales, marchSales] = salesRecords;

// console.log(januarySales);


// rest operator in array destructuring

let salesRecords =  [12000, 6832, 10361, 10000, 9243, 13287];
let [january, february, march, ...secondQuarter] = salesRecords;

console.log(january);
console.log(february);
console.log(march);

console.log(secondQuarter);

let firstQuarterSales = [100, 200, 300];
let [jan, feb, mar, apr = 0] = firstQuarterSales;
console.log(`jan: ${jan}`);
console.log(feb);
console.log(mar);
console.log(apr);
