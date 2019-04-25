## From a given array, find out all the repeated elements in it.
### Solution:

* I'll be using a function named <b>findRepeated</b>.

```javascript
function findRepeated() {
  ...
}
```

* Declare an array to store all repeated elements in it. 
```javascript
function findRepeated() {
  let repeated = [];
}
```

* The main logics are: 
1) Loop all elements in the array[except the last element].
2) First check, if that element already exists in the 'repeated' array.
3) If not present in the repeated array, check if it's repeated in the original array. If repeated, place it in the 'repeated' array, else, do nothing.

```javascript
function findRepeated(original) {
    let repeated = [];
    // Loop all the elements excluding the last element.
    for(let i = 0; i < original.length - 1; i++) {
        // Check if the element already exists in the repeated array.
        if(repeated.indexOf(original[i]) === -1) {
            // Check if the element is repeated.
            for(let j = i + 1; j < origin.length; j++) {
                // If repeated, then push it into the 'repeated' array.
                if(original[i] === original[j]) {
                    repeated.push(original[i]);
                }
            }
        }
    }
    // return the 'repeated' array.
    return repeated;
    
}
```
* Calling our function:

```javascript
let initialArray = [2, 3, 6, 2, 7, 8, 3, 7];
let repeatedArray = findRepeated(initialArray);
console.log(`The repeated elements in [${initialArray}] are: ${repeatedArray}`)

```
<b> View the working code and play around with it here: <https://jsbin.com/kimurus/edit?js,console></b>
