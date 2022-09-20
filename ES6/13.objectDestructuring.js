function displayName({firstName, lastName}){
    console.log(`${firstName} ${lastName}`);
}

const person = {
    firstName : "elon",
    lastName : "musk",
    twitter : "@elonmusk",
    company : "space x"
}
displayName(person);
