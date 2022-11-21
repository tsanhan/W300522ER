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
// const inputString= prompt("Enter a numbers (10 times): ");
// const splitted = inputString.split(" ");
// const nums = splitted.map(x => parseInt(x));

// const sum = nums.reduce((a, b) => a + b, 0);
// const avg = sum / nums.length;
// console.log("sum: " + sum);
// console.log("avg: " + avg);

let colors = ['red', 'blue', 'green'];
let len = colors.push('yellow'); // add to the end
console.log(len); // 4

let last = colors.pop(); // remove from the end
console.log(last); // yellow
console.log(colors); // ['red', 'blue', 'green']

colors.unshift('purple'); // add to the beginning
console.log(colors); // ['purple', 'red', 'blue', 'green']

colors.shift(); // remove from the beginning
console.log(colors); // ['red', 'blue', 'green']

console.log(colors.indexOf('blue')); // 1
console.log(colors.indexOf('yellow')); // -1

colors = ['red', 'blue', 'green', 'green'];
console.log(colors.indexOf('green')); // 2


// Exercise
colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'green', 'yellow', 'green'];
// write a function that accepts an array and a value to search,
// and return an array of locations in the array where the value is found
// if the value is not found, return an empty array
// example: search(colors, 'green') => 
const search = (arr, val) => {
    const rtn = [];
    let i = 0;
    while (true) {
        const idx = arr.indexOf(val, i);
        if (idx === -1) break;
        rtn.push(idx);
        i = idx + 1;
    }
    return rtn;
}
search(colors, 'green'); // [2, 6, 8]


// slice
const fruits = ['apple', 'banana', 'orange', 'watermelon', 'kiwi'];
const citrus = fruits.slice(1, 3); // banana, orange
const all = fruits.slice(); // copy the array
const fromSecond = fruits.slice(2); // orange, watermelon, kiwi

const lastTwo = fruits.slice(-2); // watermelon, kiwi

// splice
fruits.splice(1, 2); // banana, orange
console.log(fruits); // ['apple', 'watermelon', 'kiwi']

// Exercise With Vic (go to TodoList\script.js)

// 1. printReverse([1,2,3,4]);
// 4
// 3
// 2
// 1
function printReverse(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

// 2. isUniform([1,1,1,1]); // true
// isUniform([2,1,1,1]); // false
// isUniform(["a", "b", "p"]); // false
// isUniform(["b", "b", "b"]); // true
function isUniform(array) {
    const first = array[0];
    for (const inter of array) {
        if (inter !== first) return false;
    }
    return true;
}

// 3. sumArray([1,2,3]); // 6
// sumArray([10,3,10,4]); // 27
// sumArray([-5,100]); // 95
function sumArray(array) {
    let sum = 0;
    for (const currentItemInArray of array) {
        sum += currentItemInArray;
    }
    return sum;
}


// don't use Math.max:
// 4. max([1,2,3]); // 3
// max([10,3,10,4]); // 10
// max([-5,100]); // 100

function max(array) {
    let max = array[0];
    for (const currentItemInArray of array) {
        if (currentItemInArray > max) max = currentItemInArray;
    }
    return max;
}


// myForEach
[].forEach((item, index, array) => {
    console.log(item, index);
});

// version 1
function myForEach(array, func) {
    for (let i = 0; i < array.length; i++) {
        func(array[i], i, array);
    }
}
let qatarFootBallPlayers = ["Almoez", "Bounedjah", "Khoukhi", "Bounedjah"];

myForEach(qatarFootBallPlayers, (item, index, array) => {
    console.log(item, index);
});

// version 2

Array.prototype.myForEach = function (func) {
    for (let i = 0; i < this.length; i++) {
        func(this[i], i, this);
    }
};


["I", "have", "a", "dream"].forEach((item, index, array) => {
    console.log(item, index);
});

["I", "have", "a", "dream"].myForEach((item, index, array) => {
    console.log(item, index);
});

