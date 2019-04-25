## From a given array, reverse the array without using a new array i.e. Your code must be an In-place algorithm.

### Solution: 

<b>What is an In-place Algorithm? </b>
<br/>
An in-place algorithm is an algorithm that does not need an extra space and produces an output in the same memory that contains the data by transforming the input ‘in-place’. 
However, a small constant extra space used for variables is allowed.
<br/>
<i>Source: <https://www.geeksforgeeks.org/in-place-algorithm/></i>

* I'll be using a function named 'reverser'.
```javascript
function reverser(tempArray) {
// Get the length of the tempArray .
let n = tempArray.length;
  for(let i = 0; i < n; i++) {
    ...
  } 
}
```

* The sorting can be done in multiple ways. The way I'll be using is an effective way, where we'll be using a single loop. <br/>
  If 'n' be the length of the array which we want to reverse, then we can swap the two elements in the following pattern:<br/>
  1) Swap 'First' & 'Last' element <br/>
  2) Swap 'Second' & 'Second Last' element. 
And so on... <br>
If we look at this pattern, we can get these two elements as: 
```javascript
// 'i' is the loop counter starting from 0 to n - 1.
let elem1 = i;
let elem2 = (n - 1) - i; 
// (Not elem2 = (n) - i, because array index starts from 0.)
```

* To make the loop more efficient, we might want to use a flagger as:

```javascript
if(elem1 <= elem2) {
  // swap the elements.
     [tempArray[elem2], tempArray[elem1]] = [tempArray[elem1], tempArray[elem2]];
}else if(elem1 > elem2) {
  // all elements have been swapped, so stop and return the loop.
      return tempArray;
}
```
<i>Here I've used Array Destructuring ES6 syntax. If you're not familiar with this syntax, learn it from here: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment></i>

* The complete code upto now looks like this:

```javascript
function reverser(tempArray) {
    let n = tempArray.length;
    for(let i = 0; i < n; i++) {
        let elem1 = i;
        let elem2 = (n - 1) - i;
        if(elem1 <= elem2) {
            [tempArray[elem2], tempArray[elem1]] = [tempArray[elem1], tempArray[elem2]];
        }else {
            return tempArray;
        }
    }
}

```

* Let's call our function.

```javascript

let reversedArray = reverser([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(`The reversed array is [${reversedArray}]`);
// Output: The reversed array is [9,8,7,6,5,4,3,2,1]
```
<b>View the working code and play around with it here: <https://jsbin.com/pihiwub/edit?js,console></b>
