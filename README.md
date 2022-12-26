# HW:
1. go over the lesson
2. go over the following concepts in regex:
   1. non-capturing group
   2. positive lookahead
   3. negative lookahead
   4. escaped special characters

3. learn how to use regex in JS [here](https://www.youtube.com/watch?v=771oRok_Ynw)

4. What are the quantifiers and what will we use them for?
5. How to create a group in regex?

6. Is the Last Character an "N"?
   * write a regulatory expression that match a string that ends with the letter "n"
   * examples:
   ```js
   "Aiden" // true
   "Roxy" // false
   "Bert" // false
   "Dean" // true
   "Piet" // false
   ```
7. Amazing!
   * write a regulatory expression that will match a string that contains the word "Amazing"
   * examples:
   ```js
   "Amazing" // true
   "Amazin" // false
   "Amazing!" // true
   "Amazin!" // false
   "This is Amazing!" // true
   "This is Amazin!" // false
   ```
8. heck if the given input strings contain `two` irrespective of case.
   ```js
   let s1 = 'Their artwork is exceptional'
   let s2 = 'one plus tw0 is not three'
   let s3 = 'TRUSTWORTHY'

   const pat1 = YOUR REGEX HERE
   pat1.test(s1) // true
   pat1.test(s2) // false
   pat1.test(s3) // true
   ```
9. For the given array, filter all elements that do **not** contain `e`.
   ```js
   let arr = ['goal', 'new', 'user', 'sit', 'eat', 'dinner']

   const pat2 = YOUR REGEX HERE
   arr.filter(el => pat2.test(el)) // ["goal", "sit"]
   ```
# challanges:
1. write a regulatory expression that will search for a file name that begins with "david", after which may or may not appear: there is no ending of lowercase letters in English, and its extension is ".png"...
2. write a regular expression of a telephone number between nine and ten digits, starting with the digit 0, after the first two or three characters there may or may not be a dash or a space, and before the last three digits there may or may not be a space
3. Write a regular expression for an email
4. Write a regular expression of a password that will contain: at least one uppercase letter in English, one lowercase letter in English, four numbers and one of the following special characters: !@#$%^&*-


# Solutions (don't look if you don't want to see the answers):
1. `^david[A-Za-z0-9.-_!$^]*(\.png)$/g`
2. `/^0[0-9]{1,2}(\-?|\s?)[0-9]{3}(\-?|\s?)[0-9]{4}/g`
3. `/.+@.+\..{2,}/g`
4. `/((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/g`