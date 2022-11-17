## A. Go Over:
1. the lesson.

## Learn some methods at home (don;t we'll go over it in class)
1. push/pop
2. shift/unshift
3. indexOf
4. slice
5. splice
   
## B. Practice:
1. easy:
  1.1. Return the First Element in an Array:
    * Create a function that takes an array containing only numbers and return the first element.
    * Examples:
      * getFirstValue([1, 2, 3]) ➞ 1
      * getFirstValue([80, 5, 100]) ➞ 80
      * getFirstValue([-500, 0, 50]) ➞ -500
    * Notes
      * The first element in an array always has an index of 0.
  1.2. Pair Management
    * Given two arguments, return an array which contains these two arguments.
    * Examples:
      * makePair(1, 2) ➞ [1, 2]
      * makePair(51, 21) ➞ [51, 21]
      * makePair(512124, 215) ➞ [512124, 215]
  1.3. Drop the First Elements of an Array
    * create a function that accepts an array and create a slice of an array with n elements dropped from the beginning.
    * Examples:
      * drop([1, 2, 3], 1) ➞ [2, 3]
      * drop([1, 2, 3], 2) ➞ [3]
      * drop([1, 2, 3], 5) ➞ []
      * drop([1, 2, 3], 0) ➞ [1, 2, 3]
  1.4. Reverse an Array
    * Write a function to reverse an array.
    * Examples:
      * reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
      * reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
      * reverse([]) ➞ []
  1.5. Find the Smallest and Biggest Numbers
    * Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
    * Examples:
      * minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
      * minMax([2334454, 5]) ➞ [5, 2334454]
      * minMax([1]) ➞ [1, 1]
    * Notes
      * All test arrays will have at least one element and are valid.
  1.6. Find the Index (Part 1)
    * Create a function that finds the index of a given item (do not use indexOf).
    * Examples:
      * search([1, 5, 3], 5) ➞ 1
      * search([9, 8, 3], 3) ➞ 2
      * search([1, 2, 3], 4) ➞ -1
    * Notes
      * If the item is not present, return -1.
  1.7. Check if One Array can be Nested in Another
    * Create a function that returns true if the first array can be nested inside the second.
    * arr1 can be nested inside arr2 if:
      * arr1's min is greater than arr2's min.
      * arr1's max is less than arr2's max.
    * Examples:
      * canNest([1, 2, 3, 4], [0, 6]) ➞ true
      * canNest([3, 1], [4, 0]) ➞ true
      * canNest([9, 9, 8], [8, 9]) ➞ false
      * canNest([1, 2, 3, 4], [2, 3]) ➞ false
    * Notes
      * Note the strict inequality

2. medium
  * 2.1. How Much is True?
    * Create a function which returns the number of true values there are in an array.
    * Examples:
      * countTrue([true, false, false, true, false]) ➞ 2
      * countTrue([false, false, false, false]) ➞ 0
      * countTrue([]) ➞ 0
    * Notes
      * Return 0 if given an empty array.
      * All array items are of the type bool (true or false).
  
  * 2.2. Converting Objects to Arrays
    * Create a function that converts an object into an array of keys and values.
    * Examples:
      * toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
      * toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
      * toArray({}) ➞ []
    * Notes
      * Return an empty array if the object is empty.
  
  * 2.3. Convenience Store
    * Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.
  
    * for information: 
      * 4 quarters = 1$ (1 quarter = 25 cents / $0.25)
      * 10 dimes = 1$ (1 dime = 10 cents / $0.10)
      * 20 nickels = 1$ (1 nickel = 5 cents / $0.05)
      * 100 pennies = 1$ (1 penny = 1 cent / $0.01)
    
    * To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

    Examples: 
      * changeEnough([2, 100, 0, 0], 14.11) ➞ false
      * changeEnough([0, 0, 20, 5], 0.75) ➞ true
      * changeEnough([30, 40, 20, 5], 12.55) ➞ true
      * changeEnough([10, 0, 0, 50], 3.85) ➞ false
      * changeEnough([1, 0, 5, 219], 19.99) ➞ false

  * 2.4. Array of Multiples
    * Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
    * Examples:
      * arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
      * arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
      * arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]


## C. We'll learn next lesson:
1. push/pop
2. shift/unshift
3. indexOf
4. slice
5. splice
6. random numbers
   
## D. next lesson material
