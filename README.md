## A. Go Over:

1. [DOM](https://www.youtube.com/watch?v=KShnPYN-voI)
2. [DOM Events](https://www.youtube.com/watch?v=XF1_MlZ5l6M)


## B. Practice:
1. continuing our lesson, create a an event listener for the `input#inputText` element so that on every key pressed, the `output#outputText` element will show the value of the input element (`input#inputText`)

2. create a button that when clicked, it will change the background color of the page to a random color.
   * the color can be picked from an array of colors
   * for example: 
    ```js
    const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange', 'black', 'white']`
    ```
  * the location in the array can be randomly picked using `Math.random()`
   Hint: example to change to red:
    ```js
    document.body.style.backgroundColor = "red";
    ```

4. create a button with text `1` on it,
   for example: <button>1</button>
   * on every click, it will increase the text by `1` (so after after one click: <button>2</button>, after 2 clicks: <button>3</button>) 
   
5. create a table with have 3 rows and 3 columns
   * on every cell in the first 2 columns there should be a number
   for example, the html should look like this:
      |2|3|   |
      |-|-|---|
      |3|4|   |
      |5|5|   |
    under the table there should be a button with the text "sum"
    when the user clicks the button, the sum of the numbers in the first 2 columns should be displayed in the third column
    for example, if the user clicks the button, the html should look like this:
      |2|3|5|
      |-|-|-|
      |3|4|7|
      |5|5|10|
    Hint: code to enter the number for the first column:
    ```js
    const firstRowFirstColumn = document.querySelectorAll("table tr:nth-child(1) td:nth-child(1)");
    const firstRowSecondColumn = document.querySelectorAll("table tr:nth-child(2) td:nth-child(1)");
    const firstRowThirdColumn = document.querySelectorAll("table tr:nth-child(3) td:nth-child(1)");
    firstRowThirdColumn.innerText = firstRowFirstColumn.innerText + firstRowSecondColumn.innerText;
    ```


## C. We'll learn next lesson:
1. dom manipulation (creating, adding and removing elements)
2. css manipulation (adding and removing classes)
3. bubbling vs capturing: stopPropagation
## D. next lesson material

1. [DOM manipulation](https://www.youtube.com/watch?v=y17RuWkWdn8)
