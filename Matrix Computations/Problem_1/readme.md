## From an N * N sized matrix, compute the smallest elements from the two diagonals, and output the multiplication of these two smallest numbers.


```
// Extract all elements from first diagonal and place in 'smallestFirst' array.
for(let i = 0; i < arr.length; i++) {
    smallestFirst.push(arr[i][i]);
}
```
