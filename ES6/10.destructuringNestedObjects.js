const user = {
    johnDoe : {
        age: 32,
        mail: "lvashy86@gmail.com"
    }
};

const {johnDoe :{age, mail}} = user;

const {johnDoe : {age:userAge, mail:userMail}} = user;
console.log(user);


const LOCAL_FORECAST = {
    yesterday : {low:22, high:45},
    today : {low:32, high:43},
    tomorrow : {low:20, high:55}
};

const {today : {low:todayLow, high:todayHigh}} = LOCAL_FORECAST;


