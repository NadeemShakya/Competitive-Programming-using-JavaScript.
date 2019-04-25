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
function reverser() {
  ...
}
```

* The sorting can be done in multiple ways. The way I'll be using is an effective way, where we'll be using a single loop. <br/>
  If 'n' be the length of the array which we want to reverse, then we can swap the elements in the following pattern:
  ** Swap 'First' & 'Last' element
  *** Swap 'Second' & 'Second Last' element. 
And so on...
