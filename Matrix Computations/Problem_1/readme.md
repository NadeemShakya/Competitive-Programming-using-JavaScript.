## From an N * N sized matrix, compute the smallest elements from the two diagonals, and output the multiplication of these two smallest numbers.

### Solution: 

* Initialize an N * N array. Let's take a 3 * 3 array.
```javascript
let arr = [
    [22, 4, 1],
    [7, 9, 5],
    [12, 4, 3]
]
```
* Initialize all the necessary variables at the start.

```javascript
// Array to hold the elements from first diagonal.
let smallestFirst = [];
// Array to hold the elements from second diagonal.
let smallestSecond = [];
// Variables to hold the first smallest and second smallest numbers.
let number1, number2;
// Extract all elements from first diagonal and place in 'smallestFirst' array.
```
* The first diagonal are the elements correspoding to the array indices of [0][0], [1][1] etc. , i.e. where firstIndex == secondIndex. So, 

```javascript
// Extract all elements from first diagonal and place in 'smallestFirst' array.
for(let i = 0; i < arr.length; i++) {
    smallestFirst.push(arr[i][i]);
}
```
* The second diagonal are the elements corresponding to array indices of [0][2], [1][1], [2][0],
<br/> i.e. where firstIndex + secondIndex = (N - 1), where N is the dimension of matrix.

```javascript
// Extract all elements from second diagonal and place in 'smallestSecond' array.
for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
        if(i + j === (arr.length - 1)) {
            smallestSecond.push(arr[i][j]);
        }
    }
}
```

