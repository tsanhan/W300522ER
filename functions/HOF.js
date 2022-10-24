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


// HW: 
// ***1***. learn the functions: 
// forEach: https://www.w3schools.com/jsref/jsref_foreach.asp
// map:     https://www.w3schools.com/jsref/jsref_map.asp
// filter:  https://www.w3schools.com/jsref/jsref_filter.asp
// reduce:  https://www.w3schools.com/jsref/jsref_reduce.asp

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Estonia'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
***2***
1. Explain the difference between forEach, map, filter, and reduce.
2. Define a callback function before you use it in forEach, map, filter or reduce.
3. Use forEach to console.log each country in the countries array.
4. Use forEach to console.log each name in the names array.
5. Use forEach to console.log each number in the numbers array.

6. Use map to create a new array by changing each country to uppercase in the countries array.
7. Use map to create an array of countries length from countries array.
8. Use map to create a new array by changing each number to square in the numbers array
9. Use map to change to each name to uppercase in the names array

10. Use filter to filter out countries containing land.
11. Use filter to filter out countries having six character.
12. Use filter to filter out country start with 'E'

13. Use reduce to sum all the numbers in the numbers array.
14. Use reduce to concatenate all the countries and to produce this sentence: Finland, Sweden, Sweden, Denmark, Norway, Estonia, and IceLand are north European countries

*/

