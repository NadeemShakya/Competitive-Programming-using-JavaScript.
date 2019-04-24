## Write a function to check whether or not a number is a valid Nepali Mobile Number.
### For example: 9779843203311 is valid and 9789843203311 is not valid.
## Solution

* Initialze a function named <b>isValidNumber()</b>

```javascript
function isValidNumber() {
  ...
}
```

* I'll be checking 2 parts in the number: <br/>
** The country code,
```javascript
  if(number.slice(0, 3) === '977') {
    ...
  }
```
** Whether the remaining digits are exactly 10 numbers or not.
```javascript
  if(/^\d{10}$/.test(number.slice(3, 13))) {
    ...
  }
```

<br/> Here I've used RegExp in JavaScript. <i> If you're unfamiliar about <b>Regular Expressions</b>, learn it from here: </i> <https://www.w3schools.com/jsref/jsref_obj_regexp.asp>

* The completed function then looks like this: 
```javascript
  function isValidNumber(number) {
    if(/^\d{10}$/.test(number.slice(3, 13)) && number.slice(0, 3) === '977') {
        console.log(number + ' is a valid Nepali Mobile Number.');
    }else {
        console.log(number + ' is an invalid Nepali Mobile Number');
    }
}
```
* Now, testing our function with user inputs: 
  ```javascript
    isValidNumber('9779843203311');
    // Output: 9779843203311 is a valid Nepali Mobile Number.

    isValidNumber('9789843203311');
    // Output: 9789843203311 is an invalid Nepali Mobile Number
  ```
