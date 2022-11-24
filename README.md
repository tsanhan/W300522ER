## A. Go Over:

1. the lesson.

## B. Practice:

### medium/easy:
####  1. Index Multiplier
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
  
####  2. Finding Nemo
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
  
####  3. Clone an Array
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

####  4.  Compact:
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
####  1. Currying Functions
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
  
####  2. Sort the Unsortable:
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

####  3. Fix the Error: Flattening an Array
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

####  4. class exsersises:
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

## B. Practice (Objects):
### easy:

#### 1. Upvotes vs Downvotes
   
  * Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

  * Examples:

  ```js
  getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

  getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

  getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0
  ```
  * Notes:
    - You can expect only positive integers for vote counts.

#### 2. 50-30-20 Strategy
  
  * The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.
  * Given the after-tax income as (`ati`), what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.
  * Examples
  ```js
  fiftyThirtyTwenty(10000) ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }

  fiftyThirtyTwenty(50000) ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }

  fiftyThirtyTwenty(13450) ➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }
  ```

####  3. from class
  * create a simple db (array) of objects (movie)
  * each movie should have: title (string), rating (number), hasWatched (boolean)
  * print out the movies using forEach
  output:
  ```js 
  'you have watched "In Bruges" - 5 stars'
  'you have not seen "Frozen" - 4.5 stars'
  'you have watched "Mad Max Fury Road" - 5 stars'
  'you have not seen "Les Miserables" - 3.5 stars'
  ```

#### 4. Volume of a Box
  * Create a function that takes an object argument sizes (contains `width`, `length`, `height` keys) and returns the volume of the box.
  * Examples:
  ```js
  volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10

  volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16

  volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30
  ```
  * Notes:
    * Don't forget to `return` the result.
    * Remember that the values are in an object.
    * Volume is length * width * height.
  
#### 5. Luke, I Am Your ...
  * Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.
  * | Person | Relation |
    | --- | --- |
    |Darth Vader|father|
    |Leia|sister|
    |Han|brother in law|
    |R2D2|droid|
  * Examples:
  ```js
  relationToLuke("Darth Vader") ➞ "Luke, I am your father."

  relationToLuke("Leia") ➞ "Luke, I am your sister."

  relationToLuke("Han") ➞ "Luke, I am your brother in law."
  ```


### medium:
#### 1. Which Generation Are You?
  * Try finding your ancestors and offspring with code.

  * Create a function that takes a number `x` and a character `y` (`"m"` for male, `"f"` for female), and returns the **name of an ancestor (m/f) or descendant (m/f)**.

    * If the number is **negative**, return the **related ancestor**.
    * If **positive**, return the **related descendant**.
    * You are generation `0`. In the case of `0` (male or female), return `"me!"`.
  * Examples
  ```js
  generation(2, "f") ➞ "granddaughter"

  generation(-3, "m") ➞ "great grandfather"

  generation(1, "f") ➞ "daughter"
  ```
## C. We'll learn next lesson:

1. random numbers
2. objects

## D. next lesson material
* [random numbers](https://www.youtube.com/watch?v=UZqSpuUJPa0)
* [Object literals](https://www.youtube.com/watch?v=QB_oKKb4L3c)
* [JavaScript objects](https://www.youtube.com/watch?v=BRSg22VacUA)
