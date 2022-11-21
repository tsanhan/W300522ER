## A. Go Over:

1. the lesson.

## B. Practice:

### medium/easy:
  1.  Compact:
  * create a function called `compact`, the funtion will accept an array and returnan array with all falsey values removed. The values false, null, 0, "", undefined,and NaN are falsey.
  * Examples:
  ```js
  compact([0, 1, false, 2, "", 3]);   // => [1, 2, 3]
  ```

  2. Find the Second Largest Number
  * Create a function that takes an array of numbers and returns the second largest number.
  * Examples:
  ```js
  secondLargest([10, 40, 30, 20, 50]) // => 40
  secondLargest([25, 143, 89, 13, 105]) // => 105
  secondLargest([54, 23, 11, 17, 10]) // => 23
  ```
  
### hard:  
  1. Sort the Unsortable:
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

  2. Fix the Error: Flattening an Array
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


## C. We'll learn next lesson:

1. push/pop
2. shift/unshift
3. indexOf
4. slice
5. splice
6. random numbers

## D. next lesson material
