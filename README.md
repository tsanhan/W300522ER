## A. array algorithms and higher order functions

1. Create a function that takes an array and returns the types of values (data types) in a new array.
examples:
> arrayValuesTypes([1, 2, "null", []])
> ➞ ["number", "number", "string", "object"]
> 
> arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
> ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]
> 
> arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
> ➞ ["number", "string", "string", "object", "object", "boolean", "number"]



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
> oddSum([11, 15, 6, 8, 9, 10]) ➞ [true, false, true, false, false]
> 
> oddSum([12, 21, 5, 9, 65, 32]) ➞ [false, true, true, true, false]
> 
> oddSum([1, 2, 3, 4, 5, 6]) ➞ [false, false, false, false, false]

Notes
Remember that the length of all the arrays will be an even number, so it is not necessary to measure lengths.


   
3. Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.

If `f` returns the larger number, return the string `"f"`.
If `g` returns the larger number, return the string `"g"`.
If the functions return the same number, return the string `"neither"`.

Examples:
> whichIsLarger(() => 5, () => 10) ➞ "g"
> 
> whichIsLarger(() => 25,  () => 25) ➞ "neither"
> 
> whichIsLarger(() => 505050, () => 5050) ➞ "f"


4. Create a function that takes a string as input and capitalizes a letter if its ASCII code is even and returns its lower case version if its ASCII code is odd.

> sciiCapitalize("to be or not to be!") ➞ "To Be oR NoT To Be!"
> 
> asciiCapitalize("THE LITTLE MERMAID") ➞ "THe LiTTLe meRmaiD"
> 
> asciiCapitalize("Oh what a beautiful morning.") ➞ "oH wHaT a BeauTiFuL moRNiNg."


5. Create a function that takes a "base number" as an argument. This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.

Please check the examples below for a clearer representation of the behavior expected.

> // Calling makePlusFunction(5) returns a new function that takes an input,
> // and returns the result when adding 5 to it.
> 
> const plusFive = makePlusFunction(5)
> 
> plusFive(2) ➞ 7
> 
> plusFive(-8) ➞ -3
> 
> // Calling makePlusFunction(10) returns a new function that takes an input,
> // and returns the result when adding 10 to it.
> 
> const plusTen = makePlusFunction(10)
> 
> plusTen(0) ➞ 10
> 
> plusTen(188) ➞ 198
> 
> plusFive(plusTen(0)) ➞ 15

note: All inputs will be valid numbers.

6. Write a function that returns an anonymous function, which transforms its input by adding a particular `suffix` at the end.
Examples:
> add_ly = add_suffix("ly")
> 
> add_ly("hopeless") ➞ "hopelessly"
> add_ly("total") ➞ "totally"
> 
> add_less = add_suffix("less")
> 
> add_less("fear") ➞ "fearless"
> add_less("ruth") ➞ "ruthless"


7. Create a function that takes the age in years and returns the age in days.


## B. next lesson material

8. learn next lesson recursion