# HW:
1. go over the lesson
2. go over the following concepts in regex:
   1. non-capturing group
   2. positive lookahead
   3. negative lookahead
   4. escaped special characters

3. What are the quantifiers and what will we use them for?
4. How to create a group in regex?

5. Is the Last Character an "N"?
   * write a regulatory expression that match a string that ends with the letter "n"
   * examples:
   ```js
   "Aiden" // true
   "Roxy" // false
   "Bert" // false
   "Dean" // true
   "Piet" // false
   ```
6. Amazing!
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