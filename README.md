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
  * print the data to the console, so you'll know it was received

  #### 3. create html elements:
  * use [bootstrap 5 cdn](https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css) to style the html using bootstrap 
  * create a function named `createUserHtmlElement` which accepts a user JSON object as a parameter (user) and return an html element (div) with the user data in it.
    * use document.createElement to create the element
    * you can get the html for the card [here](https://getbootstrap.com/docs/5.2/components/card/)
    *  this element should contain the user data in it, like the name, email, phone, etc.
    * this means you need to create inner elements and add them using `appendChild`.
  
  #### 4. bootstrap
  * assuming you added bootstrap css file to the html page (using the link tag in the `link` tag), get to know/remember the [bootstrap grid system](https://getbootstrap.com/docs/5.2/layout/grid/)
  * loop over the collection of users you got from `fetchData` function and create card objects using `createUserHtmlElement` function.
  * fill the grid with these cards using `appendChild`
  * there should be 3 columns (`col-4` tags in the `row` tag)
   
## B. Practice Async Await Challange:

