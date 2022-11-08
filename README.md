## A. Go Over:

1. [DOM](https://www.youtube.com/watch?v=KShnPYN-voI)
2. [DOM Events](https://www.youtube.com/watch?v=XF1_MlZ5l6M)
3. go over the class recording
4. go over our solutions of the homework file (hw1.js)
5. go over the class exercise (DOMManipulation.js)


## B. Practice:
1. color generator:
  * create 3 inputs for red, green, blue
      each input should have a range of 0-255:
    ```html
    <label>
      Red:
      <input  type="number" min="0" max="255" value="0" id="red">
    </label>
    <label>
      Green:
      <input type="number" min="0" max="255" value="0" id="green">
      </label>
      <label>
      Blue:
      <input type="number" min="0" max="255" value="0" id="blue">
      </label>
      ```
  * under the inputs create a div with the id of "colorDiv" 
  * under the div create a button with the id of "connectRGB" 
  * when the button is clicked, create a "div" element with width of 50vw, height of 100px, and background color of the rgb value of the inputs

2. colorize text:
  * assume you have a text in a `div` with the `id` of "text":
    ```html
    <div id="text">
      lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>

    ```
   * create a button with the id of "colorizeText"
   * when the button is clicked, highlight the words, in the text, with more then 7 characters with the color of the rgb value of the inputs (from the previous exercise)
   8 for example, if the inputs are: red: 255, green: 0, blue: 0, then the words with more then 7 characters should be highlighted with red color:

  <code>
      <div id="text" style="margin-left: 2rem">
          lorem ipsum dolor sit amet, <span style="color: rgb(255,0,0)"> consectetur </span> <span style="color: rgb(255,0,0)">adipiscing</span> elit, sed do eiusmod tempor <span style="color: rgb(255,0,0)">incididunt</span> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <span style="color: rgb(255,0,0)">exercitation</span> ullamco laboris nisi ut aliquip ex ea commodo <span style="color: rgb(255,0,0)">consequat.</span> Duis aute irure dolor in <span style="color: rgb(255,0,0)">reprehenderit</span> in <span style="color: rgb(255,0,0)">voluptate</span> velit esse cillum dolore eu fugiat nulla <span style="color: rgb(255,0,0)">pariatur.</span> <span style="color: rgb(255,0,0)">Excepteur</span> sint <span style="color: rgb(255,0,0)">occaecat</span> <span style="color: rgb(255,0,0)">cupidatat</span> non <span style="color: rgb(255,0,0)">proident,</span> sunt in culpa qui officia <span style="color: rgb(255,0,0)">deserunt</span> mollit anim id est laborum.
        </div>
    </code>

  **hints on how to achieve this (if you think you can do it without hints, then don't read this):**
    1. grab the inner text of #text
    2. use the `split` method to split the text into an array of words
    3. map the array of words and check if the length of the word is more then 7, if so, wrap the word with a span element with the color of the rgb value of the inputs
    4. and then use the `join` method to join the array back to a string
       1. the `join` should have space (`" "`) as a separator
    5. this will be the html string that you will set to the innerHTML of the #text div
  **solution:** [here](https://www.youtube.com/embed/EHF7xBUAmrQ?start=110&end=209)
  
## C. We'll learn next lesson:

1. dom manipulation (creating, adding and removing elements)
2. css manipulation (adding and removing classes)
3. bubbling vs capturing: stopPropagation
## D. next lesson material

1. [DOM manipulation](https://www.youtube.com/watch?v=y17RuWkWdn8)
