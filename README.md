## A. Go Over:

1. the lesson.

## B. Practice:

### medium/easy:
  1. Index Multiplier
  * Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return `0`.
  * Examples:
  ```js
  indexMultiplier([1, 2, 3, 4, 5]) ➞ 40
  // (1*0 + 2*1 + 3*2 + 4*3 + 5*4)

  indexMultiplier([-3, 0, 8, -6]) ➞ -2
  // (-3*0 + 0*1 + 8*2 + -6*3)
  ```
  * Notes
    * All items in the array will be integers.
  
  2. Finding Nemo
  * You're given a string of words. You need to find the word "Nemo", and return a string like this: `I found Nemo at [the order of the word you find Nemo]!`.

  * If you can't find Nemo, return `I can't find Nemo :(`.
  * Examples:
  ```js
  findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

  findNemo("Nemo is me") ➞ "I found Nemo at 1!"

  findNemo("I Nemo am") ➞ "I found Nemo at 2!"
  ```
  * Notes:
    * `! , ? .` are always separated from the last word.
    * Nemo will always look like Nemo, and not NeMo or other capital variations.
    * Nemo's, or anything that says Nemo with something behind it, doesn't count as Finding Nemo.
    * If there are multiple Nemo's in the sentence, only return the first one.
  
  3. Clone an Array
  * the following code  attempts to add a clone of an array to itself. There is no error message, but the results are not as expected. Can you fix the code?
  ```js
  function clone(arr) {
    arr.push(arr)
    return arr
  }
  ```
  expected results:
  ```js
  clone([1, 1]) ➞ [1, 1, [1, 1]]
  clone([1, 2, 3]) ➞ [1, 2, 3, [1, 2, 3]]
  clone(["x", "y"]) ➞ ["x", "y", ["x", "y"]]
  ```

  4.  Compact:
  * create a function called `compact`, the funtion will accept an array and returnan array with all falsey values removed. The values false, null, 0, "", undefined,and NaN are falsey.
  * Examples:
  ```js
  compact([0, 1, false, 2, "", 3]);   // => [1, 2, 3]
  ```

  5. Find the Second Largest Number
  * Create a function that takes an array of numbers and returns the second largest number.
  * Examples:
  ```js
  secondLargest([10, 40, 30, 20, 50]) // => 40
  secondLargest([25, 143, 89, 13, 105]) // => 105
  secondLargest([54, 23, 11, 17, 10]) // => 23
  ```
  
### hard:  
  1. Currying Functions
  * Victor was reading about [currying functions](https://stackoverflow.com/questions/36314/what-is-currying). He needs your help to multiply an array of numbers using currying functions.
  * Create a function which takes a array `arr` of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

  * The returned array should consist of each of the elements from the first array multiplied by the integer.
  * Examples:
  ```js
  multiply([1, 2, 3])(2) ➞ [2, 4, 6]

  multiply([4, 6, 5])(10) ➞ [40, 60, 50]

  multiply([1, 2, 3])(0) ➞ [0, 0, 0]
  ```
  * Notes:
    * Your function must be called `multiply`.
  
  2. Sort the Unsortable:
  * In this challenge you will be given an array similar to the following:
  ```js
  [[3], 4, [2], [5], 1, 6]
  ```
  * In words, elements of the array are either an integer or an array containing a single integer. We humans can clearly see that this array can reasonably be sorted according to "the content of the elements" as:
  ```js
  [1, [2], [3], 4, [5], 6]
  ```
  * Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".
  * Examples:
  ```js
  sortIt([4, 1, 3]) ➞ [1, 3, 4]

  sortIt([[4], [1], [3]]) ➞ [[1], [3], [4]]

  sortIt([4, [1], 3]) ➞ [[1], 3, 4]

  sortIt([[4], 1, [3]]) ➞ [1, [3], [4]]

  sortIt([[3], 4, [2], [5], 1, 6]) ➞ [1, [2], [3], 4, [5], 6]
  ```  

  3. Fix the Error: Flattening an Array
  * I'm trying to write a function to flatten an array of subarrays into one array. (Suppose I am unware there is a `.flat()` method in the Array prototype). In other words, I want to transform this: `[[1, 2], [3, 4]]` into `[1, 2, 3, 4]`.
  * Here is my code:
  ```js
  function flatten(arr) {
    arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      arr2.concat(arr[i]);
    }
    return arr2;
  }
  ```
  * But...it doesn't seem to be working! Fix my code so that it correctly flattens the array.
  * Examples:
  ```js
  flatten([[1, 2], [3, 4]]) ➞ []
  // Expected: [1, 2, 3, 4]

  flatten([["a", "b"], ["c", "d"]]) ➞ []
  // Expected: ["a", "b", "c", "d"]

  flatten([[true, false], [false, false]]) ➞ []
  // Expected: [true, false, false, false]
  ```

  4. class exsersises:
  * remember the class excersizes?
  ```js
    // 1. printReverse([1,2,3,4]);
    // 4
    // 3
    // 2
    // 1

    // 2. isUniform([1,1,1,1]); // true
    // isUniform([2,1,1,1]); // false
    // isUniform(["a", "b", "p"]); // false
    // isUniform(["b", "b", "b"]); // true

    // 3. sumArray([1,2,3]); // 6
    // sumArray([10,3,10,4]); // 27
    // sumArray([-5,100]); // 95

    // don't use Math.max:
    // 4. max([1,2,3]); // 3
    // max([10,3,10,4]); // 10
    // max([-5,100]); // 100
  ```
  * try to solve them again, but this time use recurcive functions.
    * that means that that you don't use loops (nor any Araay methods like reduce/filter/etc... those are loops too), you use the function itself to call itself.
  
## C. We'll learn next lesson:

1. random numbers
2. objects

## D. next lesson material
[random numbers](https://www.youtube.com/watch?v=UZqSpuUJPa0)
[Object literals](https://www.youtube.com/watch?v=QB_oKKb4L3c)
[JavaScript objects](https://www.youtube.com/watch?v=BRSg22VacUA)
