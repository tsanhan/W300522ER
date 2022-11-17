const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';
const friend4 = 'Bob';

let friends = ['Michael', 'Steven', 'Peter', 'Bob'];

friends[0] // Michael
friends[1] // Steven
friends[4] = 'Jay';
friends[5000] = 'John';

// create arrays
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
friends = ['Michael', 'Steven', 'Peter'];
const random_collection = [1991, 'Michael', true];
random_collection.length; // 3

// Exercise
//get the character 's'
const arr_ex1 = ["asd"]
console.log(arr_ex1[0][1])

//Exercise, get 'y'
const arr_ex2 = ["asd", "qwe", ["zxc", "rty"]]
console.log(arr_ex2[2][1][2]);


//Exercise, what will be the output?
var arr_ex3 = [1, 2, 3, 4, 5];
console.log(arr_ex3[arr_ex3.length]); // undefined


var friendGroups = [
    ["Harry", "Ron", "Hermione"],
    ["Malfoy", "Crabbe", "Goyle"],
    ["Mooney", "Wormtail", "Prongs"]
];
console.log(friendGroups[2][0]);

// class exercise:
// 1. get 10 numbers from the user (prompt)
// 2. put them in an array
// 3. calculate the average and sum of the numbers
// 4. print the average and sum

// 1. get 10 numbers from the user (prompt)
const inputString= prompt("Enter a numbers (10 times): ");
const splitted = inputString.split(" ");
const nums = splitted.map(x => parseInt(x));

const sum = nums.reduce((a, b) => a + b, 0);
const avg = sum / nums.length;
console.log("sum: " + sum);
console.log("avg: " + avg);

