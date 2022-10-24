// Higher Order Functions - Functions are First Class Citizens - Functions can be passed as arguments to other functions

function SayHello(func, name) {
    console.log(typeof func);
    
    const message = func();
    console.log(`${message}, ${name}`);
}

function MayThe4th() {
    return "May the force be with you";
}

function Empire() {
    return "Long live the Empire";
}

const NameToPass = "Luke";

SayHello(MayThe4th, NameToPass);

// ex1:
// create a function (destination) that accepts a function as an argument,
// the accepted function should return the destination name
// the destination function should print " you are at <destination name>"
