## A. Go Over:

1. ***the lesson !!!!!!!***
2. go to 'object' branch and finish the homework there
3. [Promise](https://www.youtube.com/watch?v=DHvZLI7Db8E)
4. [Async Await](https://www.youtube.com/watch?v=V_Kr9OSfDeU)

## B. Practice Async Await:
### exercise from class:  
  1. create a function named compareToTen, accepts a number as a parameter (num)
   * the function return a Promise which:
   * if the num > 10, resolve with the string "YAY!"
   * if the num <= 10, reject with the string "NAY!"
   * use random number between 1-20 to test your function

  2. create a function named arrayCounter which accepts an array (arr) as a parameter
   * the function return a Promise which:
   * if the array length is less than 5, reject with the string "array is too short"
   * if the array length is more/equal than 5, resolve with the string "array is too long"
   * declare a variable that named 'data' (const data = [1,2,3,4,5,6,7,8,9,10])
   * invoke the arrayCounter function and pass the variable 'data' as a parameter
   * use async await to handle the promise
   * the handle should go like this:
       * if the promise is resolved, create a list on the DOM with the array elements
       * if the promise is rejected, write a error message in an alert 

  3. create two Promise objects (p1, p2) which:
   * both promises will resolve after a second.
   * p1 will resolve with the string "p1"
   * p2 will resolve with the string "p2"
   * the order of the code chan change.
   * how can you make sure the print order is the same as the promises order? (p1 then p2)
   * write code to make sure the order is correct, even if you switch the places of the promises code.
   * don't use async await* 😉

## C. We'll learn next lesson:
* ES6 Modules
* Fetch API

## D. next lesson material
* [ES6 Modules](https://www.youtube.com/watch?v=cRHQNNcYf6s)
* [Fetch API](https://www.youtube.com/watch?v=cuEtnrL9-H0)
