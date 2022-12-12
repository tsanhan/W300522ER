## A. Go Over:

1. ***the lesson !!!!!!!***
2. [Promise](https://www.youtube.com/watch?v=DHvZLI7Db8E)
3. [Async Await](https://www.youtube.com/watch?v=V_Kr9OSfDeU)
4. [ES6 Modules](https://www.youtube.com/watch?v=cRHQNNcYf6s)
5. [Fetch API](https://www.youtube.com/watch?v=cuEtnrL9-H0)
## B. Practice Promise/async-await/modules/fetch:
### exercise from class:  
  #### 1. get date from jsonplaceholder api:
  * investigate and try out some of the code snippits in the jsonplaceholder [api page](https://jsonplaceholder.typicode.com/guide/)
  #### 2. fetch data
  * create an async function named `fetchData` which accepts a url as a parameter (url) and return a Promise, the Promise will resolve with the data from the url. (use fetch api)
  * put this function in a file called dataAccess.js, and export it
  * in the main module (the file being referenced in the html file) import the function and use it to fetch data from the [`/users` route](https://jsonplaceholder.typicode.com/users) 
  * print the data to the console

  #### 3. create html elements:
  * use [bootstrap cdn](https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css) to style the html using bootstrap 
  * create a function named `createUserHtmlElement` which accepts a user JSON object as a parameter (user) and return an html element (div) with the user data in it.
    * use document.createElement to create the element
    * you can get the html for the card [here](https://getbootstrap.com/docs/5.2/components/card/)
    *  this element should contain the user data in it, like the name, email, phone, etc.
    * this means you need to create inner elements and add them using `appendChild`.
   
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




