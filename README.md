## A. Go Over:

1. ***the lesson !!!!!!!***
2. go to 'object' branch and finish the homework there
3. [Classes and Inheritance](https://www.youtube.com/watch?v=RBLIm5LMrmc)

## B. Practice inheritance:
### Shape 1 
  * In this task we provide you with the start of a definition for a `Shape` class. It has three properties: `name`, `sides`, and `sideLength`. This class only models shapes for which all sides are the same length, like a square or an equilateral triangle.
  We'd like you to:
    *  Add a constructor to this class. The constructor takes arguments for the `name`, `sides`, and `sideLength` properties, and initializes them.
    *  Add a new method `calcPerimeter()` method to the class, which calculates its perimeter (the length of the shape's outer edge) and logs the result to the console.
    *  Create a new instance of the `Shape` class called `square`. Give it a `name` of `square`, `4` `sides`, and a `sideLength` of `5`.
    *  Call your `calcPerimeter()` method on the instance, to see whether it logs the calculation result to the browser's console as expected.
    *  Create a new instance of `Shape` called `triangle`, with a `name` of `triangle`, `3` `sides` and a `sideLength` of `3`.
    * Call `triangle.calcPerimeter()` to check that it works OK.
    * start with the code below:
    ```js
    class Shape {
      name;
      sides;
      sideLength;
    } 
    ```
### Shape 2
  * Next I'd like you to create a `Square` class that inherits from `Shape`, and adds a `calcArea()` method that calculates the square's area. Also set up the constructor so that the `name` property of `Square` object instances is automatically set to `square`, and the `sides` property is automatically set to `4`. When invoking the constructor, you should therefore just need to provide the `sideLength` property.
  * Create an instance of the `Square` class called `square` with appropriate property values, and call its `calcPerimeter()` and `calcArea()` methods to show that it works OK.

## B. Practice Destructuring:

### 
```js
/**
Exercise 1
Rewrite the code below to use array destructuring instead of assigning each value to a variable.
*/
{
  console.log("EXERCISE 1");

  let item = ["Egg", 0.25, 12];

  let name = item[0];
  let price = item[1];
  let quantity = item[2];

  console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);
  console.log();
}

/**
Exercise 2
Rewrite the code below to assign each number to the right variable.
*/
{
  console.log("EXERCISE 2");

  let numbers = [3, 5, 4, 2, 6, 1];

  let [one, two, three, four, five, six] = numbers;

  console.log(`One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`);
  console.log();
}

/**
Exercise 3
We have an object called 'user'.
Write the destructuring assignment that reads:
- 'name' property into the variable 'name'.
- 'years' property into the variable 'age'.
- 'isAdmin' property into the variable 'isAdmin' (false, if no such property)
*/
{
  console.log("EXERCISE 3");

  let user = { name: "John", years: 30 };

  // your code to the left side:
  let {} = user;

  console.log(name); // John
  console.log(age); // 30
  console.log(isAdmin); // false
  console.log();
}

/**
Exercise 4
Rewrite the code below to use array destructuring instead of assigning each value to a variable.
*/
{
  console.log("EXERCISE 4");

  let person = [12, "Chris", "Owen"];

  let firstName = person[1];
  let lastName = person[2];
  let age = person[0];

  console.log(`Person - Age: ${age}, Name: ${firstName} ${lastName}`);
  console.log();
}

/** 
Exercise 5
Rewrite the code below to use array destructuring instead of assigning each value to a variable.
Make sure not to have unused variables.
Hint: https://untangled.io/in-depth-es6-destructuring-with-assembled-avengers
*/
{
  console.log("EXERCISE 5");

  let person = ["Chris", 12, "Owen"];

  let firstName = person[0];
  let lastName = person[2];

  console.log(`Name: ${firstName} ${lastName}`);
  console.log();
}

/** 
Exercise 6
Using Array Destructuring get the last name from the array. 
Hint: https://untangled.io/in-depth-es6-destructuring-with-assembled-avengers
*/
{
  console.log("EXERCISE 6");

  const students = ['Christina', 'Jon', 'Alexandare'];

  // Write your code here
  const [] = students;

  console.log(lastName);
  console.log();
}

/**
Exercise 7
Using Array Destructuring get all of the names from this Nested Array
Hint: https://untangled.io/in-depth-es6-destructuring-with-assembled-avengers
*/
{
  console.log("EXERCISE 7");

  const moreStudents = [
    'Chris', 
    ['Ahmad', 'Antigoni'], 
    ['Toby', 'Sam']
  ];

  // Write your code here
  const [] = moreStudents;

  console.log(student1, student2, student3, student4, student5);
  console.log();
}
```
## C. We'll learn next lesson:
* Promise, Async Await
* Fetch API
* ES6 Modules

## D. next lesson material
* [Promise](https://www.youtube.com/watch?v=DHvZLI7Db8E)
* [Async Await](https://www.youtube.com/watch?v=V_Kr9OSfDeU)
* [Fetch API](https://www.youtube.com/watch?v=cuEtnrL9-H0)
* [ES6 Modules](https://www.youtube.com/watch?v=cRHQNNcYf6s)
