// N * N sized [square] user array.
let arr = [
    [22, 4, 1],
    [7, 9, 5],
    [12, 4, 3]
]
// Array to hold the elements from first diagonal.
let smallestFirst = [];
// Array to hold the elements from second diagonal.
let smallestSecond = [];
// Variables to hold the first smallest and second smallest numbers.
let number1, number2;
// Extract all elements from first diagonal and place in 'smallestFirst' array.
for(let i = 0; i < arr.length; i++) {
    smallestFirst.push(arr[i][i]);
}
// Extract all elements from second diagonal and place in 'smallestSecond' array.
for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
        if(i + j === (arr.length - 1)) {
            smallestSecond.push(arr[i][j]);
        }
    }
}
// Smallest number from first diagonal.
number1 = Math.min(...smallestFirst);
// Smallest number from second diagonal.
number2 = Math.min(...smallestSecond);
// Output the multiplication of two smallest numbers.
console.log(number1 * number2);
