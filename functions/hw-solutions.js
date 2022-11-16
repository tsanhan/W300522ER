const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Estonia'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//3. Use forEach to console.log each country in the countries array.
countries.forEach(function (country) {
    console.log(country);
});
//4. Use forEach to console.log each name in the names array.
names.forEach(function (name) {
    console.log(name);
});

//5. Use forEach to console.log each number in the numbers array.
numbers.forEach(function (number) {
    console.log(number * 2);
});

//6. Use map to create a new array by changing each country to uppercase in the countries array.
const countriesUppercase = countries.map(function (country) {
    return country.toUpperCase();
});

//7. Use map to create an array of countries length from countries array.
const countriesLength = countries.map(function (country) {
    return country.length;
});

//8. Use map to create a new array by changing each number to square in the numbers array
const numbersSquare = numbers.map(function (number) {
    return number * number;
});

//9. Use map to change to each name to uppercase in the names array
const namesUppercase = names.map(function (name) {
    return name.toUpperCase();
});

//10. Use filter to filter out countries containing 'land'.
const countriesLand = countries.filter(function (country) {
    return !(country.includes('land') || country.includes('Land'));
});

//11. Use filter to filter out countries having six character.
const countriesSixChar = countries.filter(function (country) {
    return country.length !== 6;
});

//12. Use filter to filter out country start with 'E'
const countriesStartWithE = countries.filter(function (country) {
    return country[0] !== 'E';
});


//13. Use reduce to sum all the numbers in the numbers array.
const accFunc = function (acc, number) {
    return acc + number;
};
const numbersSum = numbers.reduce(accFunc, 0);
console.log(numbersSum);

//14. Use reduce to concatenate all the countries and to produce this sentence: 
// Finland, Sweden, Denmark, Norway, IceLand, and Estonia are north European countries
const reduceFunc = function (acc, country, i) {
    // am I the last country?
    if (countries.length - 1 === i) {
        return acc + 'and ' + country + ' are north European countries';
    }
    return acc + country + ', ';
}
const countriesSentence = countries.reduce(reduceFunc, "");

console.log(countriesSentence);

const higherOrder = function (n) {
    console.log(`I am a higherOrder function`, n);
    const doSomething = function (m) {
        console.log(`I am in a doSomething function`, m);
        const doWhatEver = function (t) {
            console.log(`I am in a doWhatEver function`, t);
            return 2 * n + 3 * m + t
        }
        return doWhatEver
    }
    return doSomething
}

const c = higherOrder(2)(3)(4);
console.log(c);



// const outerFunc = function () {

//     // console.log(`hello lauser`);

//     //when we see'return':
//     //1. the function stop running
//     //2. the function return the value ON THE WAY OUT!
//     return function () {
//         console.log(`I am a innerFunc`);
//     }

//     // this will never run, we have 'return' above
//     console.log(`hello lauser`);

// }

// const someFunc = outerFunc();

// someFunc();


// const nums = [1, 2, 3, 4, 5]
// const sumArray = function(arr) {
//   let sum = 0
//   const callback = function(element) {
//     sum += element
//   }
//   arr.forEach(callback)
//   return sum;
// }
// console.log(sumArray(nums))


const nums = [1, 2, 3, 4]

const sumArray = function(arr) {
  let sum = 0
  arr.forEach(function(element) {
    sum += element
  })
  return sum
}
console.log(sumArray(nums))


