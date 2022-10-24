// Higher Order Functions - Functions are First Class Citizens - Functions can be passed as arguments to other functions
 
// function that takes a function as an argument
function SayHello(funcToExecute, forceUserName) {    
    // funcToExecute is a callback function
    const message = funcToExecute();
    console.log(`${message}, ${forceUserName}`);
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
// the destination function should print "you are at <destination name>"

// function that returns a function

function createSchool(warrior) {
    // ternary operator
    // const teacher = warrior === 'Jedi' ? 'Yoda' : 'Darth Sidious';
    let teacher;
    let schoolToReturn;
    if (warrior === 'jedi') {
        teacher = 'Yoda';
        schoolToReturn = function () {
            // closure - lexical scope
            console.log(`You are at the Jedi Temple, your teacher is ${teacher}`);
        }
    }
    else if (warrior === 'sith') {
        teacher = 'Darth Sidious';
        schoolToReturn = function () {
            console.log(`You are at the Sith Temple, your teacher is ${teacher}`);
        }
    }
    return schoolToReturn;
}

// createSchool('jedi')(); also an option
const jediSchool = createSchool('jedi');
jediSchool();

/*

*/

