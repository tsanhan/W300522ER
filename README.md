
HW: 
***1***. learn the functions: 
forEach: https://www.w3schools.com/jsref/jsref_foreach.asp
map:     https://www.w3schools.com/jsref/jsref_map.asp
filter:  https://www.w3schools.com/jsref/jsref_filter.asp
reduce:  https://www.w3schools.com/jsref/jsref_reduce.asp

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Estonia'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


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
14. Use reduce to concatenate all the countries and to produce this sentence: Finland, Sweden, Denmark, Norway, IceLand, and Estonia are north European countries


***3***
High Order Functions:
what those functions print:

1. 
const higherOrder = function(n) {
  const doSomething = function(m) {
    const doWhatEver = function(t) {
      return 2 * n + 3 * m + t
    }
    return doWhatEver
  }
  return doSomething
}
console.log(higherOrder(2)(3)(10))


2.
const numbers = [1, 2, 3, 4, 5]
const sumArray = function(arr) {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum
}
console.log(sumArray(numbers))

3. 
const numbers = [1, 2, 3, 4]

const sumArray = function(arr) {
  let sum = 0
  arr.forEach(function(element) {
    sum += element
  })
  return sum
}
console.log(sumArray(numbers))
