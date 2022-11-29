## A. Go Over:

1. ***the lesson !!!!!!!***
2. [Object literals](https://www.youtube.com/watch?v=QB_oKKb4L3c)
3. [JavaScript objects](https://www.youtube.com/watch?v=BRSg22VacUA)
4. [Javascript Classes](https://www.youtube.com/watch?v=_D6ilsRB9tw)
5. [LocalStorage](https://www.youtube.com/watch?v=fYTTUBa-lPc)

## B. Practice arrays:
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

## B. Practice Objects:
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

#### 3. from class
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



## B. Practice Sets and Maps:
### easy:
#### 1. Return Sole Element in a Set:
  * Given a set containing an element, return the sole element.
  Examples:
  ```js
  const first = new Set();
  first.add(1); 
  elementSet(first) ➞ 1

  const second = new Set();
  second.add("apple"); 
  elementSet(second) ➞ "apple"

  const third  = new Set();
  third.add(false); 
  elementSet(third) ➞ false
  ```

#### 2. What does the following codes return? (make sure you understand the "why", not only the "what")
  * 2.1. 
  ```js
   new Set([1,1,2,2,3,4])
  ``` 
  * 2.2. 
  ```js 
  [...new Set("referee")].join("")
  ```

#### 3. What does the Map m look like after running the following code? (make sure you understand the "why", not only the "what")
  ```js
  let m = new Map();
  m.set([1,2,3], true);
  m.set([1,2,3], false);
  ```

#### 4. hasDuplicate
  * Write a function called hasDuplicate which accepts an array 
    and returns true or false if that array contains a duplicate:
  ```js
  hasDuplicate([1,3,2,1]) // true
  hasDuplicate([1,5,-1,4]) // false
  ```
#### 5. print nicely
  * create an array of objects, every object will represent a book (lets say: title, imageUrl, ISBN, author, year, plot)
  * loop over this array and print the books nicely on the page (use CSS to make this look nice)

### medium:
#### 1. Vowel Count

  Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels(`a`, `e`, `i`, `o`, `u`) in the string.
  ```js
  vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
  vowelCount('Colt') // Map { 'o' => 1 }
  ```
## B. Practice Classes:

### easy:

#### 1. simple class creation:
  * create a class containing the properties:
    * `name`
    * `color`
    * `age`
  * create an object from the class and print it's properties to the console

#### 2. Circle
  * create a Circle class, this class will accept `diameter`
  * this class will also contain a method: `Scope()`
    * this method calculate and return the Circle's scope.
  * create an object from the class and print it's scope
  
#### 3. Dot
  * a dot in 2D plane can be represented by 2 numbers: X and Y
  * two dots can create a rectangle
  * create a class called `Dot` that hold 2 numbers (x and y of the dot)
  * create a class called `Rectangle` that hold 2 Dots
    * the `Rectangle` class will have two methods:
      1. `Scope()` that calculate return the rectangle's scope
      2. `Area()` that calculate return the rectangle's area
  * create an object from the Rectangle and print it's scope and area to the console

#### 4. upgrade exercises 2 and 3
  * get all the inputs for creation from the UI (html)
  * add method `drow` to the `Rectangle` and `Circle` and accept the selector where to draw the shape
#### 5. Classes For Fetching Information on a Sports Player
  * Create a class that takes the following four arguments for a particular football player:
    * `name`
    * `age`
    * `height`
    * `weight`
  * Also, create three functions for the class that returns the following strings:
    * `getAge()` returns "`name` is `age` age"
    * `getHeight()` returns "`name` is `height` cm"
    * `getWeight()` returns "`name` weighs `weight` kg"
  * Examples:
  ```js
  p1 = new Player("David Jones", 25, 175, 75)

  p1.getAge() ➞ "David Jones is age 25"
  p1.getHeight() ➞ "David Jones is 175cm"
  p1.getWeight() ➞ "David Jones weighs 75kg"
  ```
### medium:
#### 1. 2D Array
  * Create a class called `Matrix` that represents a 2D array. It should take in a 2D array as an argument to the constructor, and have the following methods:
    * `print()`: prints the matrix
    * `alter(row, col, num)`: changes the value at the given row and column to the given number
    * `get(row, col)`: returns the value at the given row and column
  * Examples:
  ```js
  let matrix = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  matrix.print();
  // 1 2 3
  // 4 5 6
  // 7 8 9
  matrix.alter(0, 0, 9);
  matrix.print();
  // 9 2 3
  // 4 5 6
  // 7 8 9
  console.log(matrix.get(1, 1)); // 5
  ```
## C. We'll learn next lesson:
ES6

## D. next lesson material
* [ES6](https://www.youtube.com/watch?v=NCwa_xi0Uuc)
