## A. Go Over:

1. ***the lesson !!!!!!!***
2. go to 'object' branch and finish the homework there
3. [Promise](https://www.youtube.com/watch?v=DHvZLI7Db8E)
4. [Async Await](https://www.youtube.com/watch?v=V_Kr9OSfDeU)

## B. Practice Async Await 101:
### exercise from class:  
  #### 1. create a function named compareToTen, accepts a number as a parameter (num)
   * the function return a Promise which:
   * if the num > 10, resolve with the string "YAY!"
   * if the num <= 10, reject with the string "NAY!"
   * use random number between 1-20 to test your function

  #### 2. create a function named arrayCounter which accepts an array (arr) as a parameter
   * the function return a Promise which:
   * if the array length is less than 5, reject with the string "array is too short"
   * if the array length is more/equal than 5, resolve with the string "array is too long"
   * declare a variable that named 'data' (const data = [1,2,3,4,5,6,7,8,9,10])
   * invoke the arrayCounter function and pass the variable 'data' as a parameter
   * use async await to handle the promise
   * the handle should go like this:
       * if the promise is resolved, create a list on the DOM with the array elements
       * if the promise is rejected, write a error message in an alert 

  #### 3. create two Promise objects (p1, p2) which:
   * both promises will resolve after a second.
   * p1 will resolve with the string "p1"
   * p2 will resolve with the string "p2"
   * the order of the code chan change.
   * how can you make sure the print order is the same as the promises order? (p1 then p2)
   * write code to make sure the order is correct, even if you switch the places of the promises code.
   * don't use async await* 😉

  #### 4. create a function named getDog which accepts a number as a parameter (num)
   * the function return a Promise which:
   * if the num is even, resolve with the string "dog"
   * if the num is odd, reject with the string "cat"
   * use async await to handle the promise
   * the handle should go like this:
       * if the promise is resolved, write a success message in an alert
       * if the promise is rejected, write a error message in an alert 
   * use random number between 1-20 to test your function

  #### 5. do the same as the previous exercise (4), but...
   * this time the random number should be resolved from a Promise object
   * create a function named getRandom which accepts a number as a parameter (num)
   * the function return a Promise that will resolve after 1 second.
   * the Promise will contain a random number between 0 and the number passed to getRandom function (num);

   * use `.then` to chain the result from the getRandom function to the getDog function.
   * after you succeeded with the `.then` chain, try to do the same with `async await`

 
   
## B. Practice Async Await Challange:
### 1. take the HW from the previous lesson and convert it to async await 
  * don't look at the solution we did during the class

### 2. do #5 from `Practice Async Await 101` in the previous section but...
  * create another funtion named isRandom witch dose not accept any parameters.
  * this function will return a Promise that will resolve after 1 second.
  * the Promise will contain a boolean value (true/false)
  * the boolean value will be random, (floor(rand * 1000) % 2 === 0) will return true or false
  * if the boolean will be `true`, Promise will resolve with true, and will be chained to another function (handler) that will generation a random number (between 20-40), THAT number will be the `getRandom` function parameter, meaning it will the the number  `getRandom` need to continue the chain to handle the promise like #4 from `Practice Async Await 101`
  * if the boolean is `false`, Promise will reject with false, and will be chained to another function (handler) that will generation a constant number (21), THAT number will be the `getRandom` function parameter, meaning it will the the number  `getRandom` need to continue the chain to handle the promise like #4 from `Practice Async Await 101`


## C. We'll learn next lesson:
* ES6 Modules
* Fetch API

## D. next lesson material
* [ES6 Modules](https://www.youtube.com/watch?v=cRHQNNcYf6s)
* [Fetch API](https://www.youtube.com/watch?v=cuEtnrL9-H0)
