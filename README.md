## A. Go Over:

- [the `return` keyword](https://www.youtube.com/watch?v=FioqUnOGlq8)
- [higher order functions](https://www.youtube.com/watch?v=0aKZvNNf8BA)
- [closure](https://www.youtube.com/watch?v=71AtaJpJHw0)
- [arrow functions](https://www.youtube.com/watch?v=mrYMzpbFz18)
- [functions (in general)](https://www.youtube.com/watch?v=gigtS_5KOqo)
- [iife](https://www.youtube.com/watch?v=8GDk8sj0YgQ)
- [recursion](https://www.youtube.com/watch?v=LteNqj4DFD8)

## B. array algorithms and higher order functions

### higher order functions

1. Create a function that takes an array and returns the types of values (data types) in a new array.
   examples:

   > `arrayValuesTypes([1, 2, "null", []])`
   > ➞ `["number", "number", "string", "object"]`
   >
   > `arrayValuesTypes(["214", true, false, 2, 2.15, [], null])`
   > ➞ `["string", "boolean", "boolean", "number", "number", "object", "object"]`
   >
   > `arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])`
   > ➞ `["number", "string", "string", "object", "object", "boolean", "number"]`

2. Given an array with an even amount of numbers, return `true` if the sum of two numbers in the array is even and `false` if the sum of two numbers in the array is odd.

example:

> array = [11, 15, 6, 8, 9, 10]
>
> 11 + 15 = 26 = true
>
> 15 + 6 = 21 = false
>
> 6 + 8 = 14 = true
>
> 8+ 9 = 17 = false
>
> 9 + 10 = 19 = false

Therefore, solution = `[true, false, true, false, false]`

examples:

> `oddSum([11, 15, 6, 8, 9, 10])` ➞ [true, false, true, false, false]
>
> `oddSum([12, 21, 5, 9, 65, 32])` ➞ `[false, true, true, true, false]`
>
> `oddSum([1, 2, 3, 4, 5, 6])` ➞ `[false, false, false, false, false]`

Notes
Remember that the length of all the arrays will be an even number, so it is not necessary to measure lengths.

3. Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.

If `f` returns the larger number, return the string `"f"`.
If `g` returns the larger number, return the string `"g"`.
If the functions return the same number, return the string `"neither"`.

Examples:

> `whichIsLarger(() => 5, () => 10)` ➞ `"g"`
>
> `whichIsLarger(() => 25, () => 25)` ➞ `"neither"`
>
> `whichIsLarger(() => 505050, () => 5050)` ➞ `"f"`

4. Create a function that takes a string as input and capitalizes a letter if its ASCII code is even and returns its lower case version if its ASCII code is odd.

> `sciiCapitalize("to be or not to be!")` ➞ `"To Be oR NoT To Be!"`
>
> `asciiCapitalize("THE LITTLE MERMAID")` ➞ `"THe LiTTLe meRmaiD"`
>
> `asciiCapitalize("Oh what a beautiful morning.")` ➞ `"oH wHaT a BeauTiFuL moRNiNg."`

5. Create a function that takes a "base number" as an argument. This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.

Please check the examples below for a clearer representation of the behavior expected.

> // Calling makePlusFunction(5) returns a new function that takes an input,
> // and returns the result when adding 5 to it.
>
> `const plusFive = makePlusFunction(5)`
>
> `plusFive(2)` ➞ `7`
>
> `plusFive(-8)` ➞ `-3`
>
> // Calling makePlusFunction(10) returns a new function that takes an input,
> // and returns the result when adding 10 to it.
>
> `const plusTen = makePlusFunction(10)`
>
> `plusTen(0)` ➞ `10`
>
> `plusTen(188)` ➞ `198`
>
> `plusFive(plusTen(0))` ➞ `15`

note: All inputs will be valid numbers.

6. Write a function that returns an anonymous function, which transforms its input by adding a particular `suffix` at the end.
   Examples:
   > `add_ly = add_suffix("ly")`
   >
   > `add_ly("hopeless")` ➞ `"hopelessly"` > `add_ly("total")` ➞ `"totally"`
   >
   > `add_less = add_suffix("less")`
   >
   > `add_less("fear")` ➞ `"fearless"` > `add_less("ruth")` ➞ `"ruthless"`

### Array algorithms

7. Create a function that takes the age in years and returns the age in days.
   Examples:
   > `calcAge(65)` ➞ `23725`
   >
   > `calcAge(0)` ➞ `0`
   >
   > `calcAge(20)` ➞ `7300`
   >
   > Notes:

- Use 365 days as the length of a year for this challenge.
- Ignore leap years and days between last birthday and now.
- Expect only positive integer inputs.

8. Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
   Examples:

> `addUp(4)` ➞ `10`
>
> `addUp(13)` ➞ `91`
>
> `addUp(600)` ➞ `180300`

## C. Recursion
1. Write a JavaScript program to compute the sum of an array of integers.
Example : var array = [1, 2, 3, 4, 5, 6]
Expected Output : 21




[explanation + solution](https://www.w3resource.com/javascript-exercises/javascript-recursion-function-exercise-4.php)

2. Sum
Write a function that finds the sum of the first n natural numbers. Make your function recursive.
Examples:
> `sum(5)` ➞ `15` // 1 + 2 + 3 + 4 + 5 = 15
> `sum(1)` ➞ `1`
> `sum(12)` ➞ `78`
Notes:
- Assume the input number is always positive.

3. Write a JavaScript program to calculate the factorial of a number.
   In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120

[solution + explanation](https://www.w3resource.com/javascript-exercises/javascript-recursion-function-exercise-1.php)

4. Length of a String
   Write a function that returns the length of a string. Make your function recursive.
   Examples:
   > length("apple") ➞ 5
   >
   > length("make") ➞ 4
   >
   > length("a") ➞ 1
   >
   > length("") ➞ 0

solution:

> function length(str, num = 0) {
> if(str[num] === undefined) {
> return num
> }
> return length(str, num + 1)
> }

5. Count the Vowels
   Create a function that takes a string and returns the number (count) of vowels contained within it.
   Examples:
   > countVowels("Celebration") ➞ 5
   >
   > countVowels("Palm") ➞ 1
   >
   > countVowels("Prediction") ➞ 4

solution: no solution 🤷‍♂️

6. Write a JavaScript program to get the integers in range (x, y)
   Example : range(2, 9)
   Expected Output : [3, 4, 5, 6, 7, 8]

[solution + explanation](https://www.w3resource.com/javascript-exercises/javascript-recursion-function-exercise-3.php)

7. Find the Index:
   Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return `-1`.

Examples
> `search([1, 2, 3, 4], 3)` ➞ `2`
> `search([2, 4, 6, 8, 10], 8)` ➞ `3`
> `search([1, 3, 5, 7, 9], 11)` ➞ `-1`
Notes:
If the item is not present, return `-1`.
The given array is ordered.

solution:
> function search(arr, item, pos = 0) {
>     if (pos >= arr.length) return -1;
>     if (arr[pos] === item) return pos;
>     return search(arr, item, pos + 1);
> };

8. Reverse a String
Write a function that reverses a string. Make your function recursive.

Examples
>  reverse("hello") ➞ "olleh"
>  reverse("world") ➞ "dlrow"
>  reverse("a") ➞ "a"
>  reverse("") ➞ ""
> 
Notes:
For non-base cases, your function must call itself at least once.

solution:
const reverse = (str) => {
  return str === "" ? "" : reverse(str.substr(1)) + str.charAt(0)
}


## D. next lesson material

1. [recursion](https://www.youtube.com/watch?v=LteNqj4DFD8)
2. [DOM](https://www.youtube.com/watch?v=KShnPYN-voI)
3. [DOM manipulation](https://www.youtube.com/watch?v=y17RuWkWdn8)
4. [DOM events](https://www.youtube.com/watch?v=0fy9TCcX8Uc)
