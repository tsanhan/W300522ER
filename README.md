## A. Go Over:

1. ***the lesson !!!!!!!***
2. [Promise](https://www.youtube.com/watch?v=DHvZLI7Db8E)
3. [Async Await](https://www.youtube.com/watch?v=V_Kr9OSfDeU)
4. [ES6 Modules](https://www.youtube.com/watch?v=cRHQNNcYf6s)
5. [Fetch API](https://www.youtube.com/watch?v=cuEtnrL9-H0)

## B. Practice Promise/async-await/modules/fetch: 
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
    *  if you want you can use a person image generator like this:
       *  https://randomuser.me/api/portraits/men/[some number].jpg
       *  change [some number] to some number and the link will return an image, you can use it for the image in the card
    * this means you need to create inner elements and add them using `appendChild`.
  
  #### 4. bootstrap
  * assuming you added bootstrap css file to the html page (using the link tag in the `link` tag), get to know/remember the [bootstrap grid system](https://getbootstrap.com/docs/5.2/layout/grid/)
  * loop over the collection of users you got from `fetchData` function and create card objects using `createUserHtmlElement` function.
  * fill the grid with these cards using `appendChild`
  * there should be 3 columns (`col-4` tags in the `row` tag)
   
  #### 5. get posts
  * back you `createUserHtmlElement` function, the html object that the function return should contain a button (just like in the bootstrap [documentation](https://getbootstrap.com/docs/5.2/components/card/#example))
  * on button click you need to go to the jsonplace to get the posts for this user
    * the api is https://jsonplaceholder.typicode.com/posts?userId=[the user id]
    * this will return all the posts for a cretin user id
    * you can get the user id in different ways:
      * you can save it as an id attribute in the button html (and get it using $event.target.id)
      ```html
      <button id="3"></button>  
      ```
      * you can insert the user id as a constant in the click event handler when you register to the click event
      ```js
      createUserHtmlElement(user) {
        //...code creating the card HTMLElement
        buttonElem.addEventListener('click', () => {
          const userId = user.id;
          // code handling click event
        })
        //...code finishing creating the card HTMLElement
      }
      ```
  #### 6. show posts
  * the posts for the user should be seen under the button in a [bootstrap list](https://getbootstrap.com/docs/5.2/components/list-group/#basic-example)
  * the list should contain only the post's title, nothing more 


## B. Practice Promise/async-await/modules/fetch Challenge:
  #### 1. posts's comments
  * on hover over the every post, go get the comments for this post
  * investigate the api go get the comments for the post
  * think of a nice way to show those comments (can be using an absulute position like what we did in with star wars)
  #### 2. save http calls
  * think of a way to save http calls.
  * if you allready got the posts for a user once, there is no need to go and get them again, right? same thing with the comments  
