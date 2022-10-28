A. array algorithms

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
> 11 + 15 = 26 = true
> 15 + 6 = 21 = false
> 6 + 8 = 14 = true
> 8+ 9 = 17 = false
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

1. next lesson material

2. learn next lesson recursion