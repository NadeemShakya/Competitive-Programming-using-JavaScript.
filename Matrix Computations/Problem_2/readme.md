## Find the largest element from an N*N sized matrix and multiply the matrix with this largest element.
### Solution

* Initialze an arbitrary matrix of size N * N. Here I've created a 3 * 3 sized matrix.
```javascript
// Initialzing an arbitrary matrix of size N * N. 
let mat = [
    [5, 6, 3],
    [9, 12, -6],
    [7, 15, 0]
];
```

* Initialze a temporary matrix to hold the largest element of each row of the original matrix.
```javascript
// Temporary Matrix to hold largest number of each row.
let tempMat = [];
```

* A temporary variable to hold the largest element value.
```javascript
// Variable to store the largest number from the array.
let largestNumber;
```

* For each row of the original matrix, compute the largest element from the row and store them in the temporary matrix named 'tempMat'.
<br/>
<i>Here I've used spread syntax ES6 syntax. If you're not familiar with spread syntax, learn it from here: <br/>
[Spread Syntax in ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) </i>

```javascript
// Compute largest elements from each row of the matrix and store them in the 'tempMat' array.

for(let i = 0; i < mat.length; i++) {
    let temp = Math.max(...mat[i]);
    tempMat.push(temp);
}
```

* Now compute the largest element fro the tempMat, which will give us the required largest element from the original matrix.

```javascript
// Compute the largest element from tempMat.
largestNumber = Math.max(...tempMat);
```

* Finally, multiply each and every element of the original array with the largest element of the array.

```javascript
/* Multiply and modify each elements in the 
array by the largest element in the array */
for(let i = 0; i < mat.length; i++) {
    for(let j = 0; j < mat[i].length; j++) {
        mat[i][j] *= largestNumber;
    }
}
```

<b>View and play around with the code to try it yourself : <https://jsbin.com/zaruzap/edit?js,console></b>
