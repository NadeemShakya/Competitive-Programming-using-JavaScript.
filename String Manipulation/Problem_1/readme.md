##  Write a function to check whether or not an English words uses all vowels in alphabetical order.
### For example: "facetious" has all vowels in aeiou order.

## Solution:

* Initialize a temporary Array.

```javascript
// Initialize an empty array.
let tempArray = [];
```
* We will create a function named 'checker'

```javascript
// The main funtion.
function checker() {



}
```

* Iterate through the letters of the word in increasing order of index and check if the letter is an vowel or not. <br/>
If it's a vowel , then add it to the 'tempArray' array.

```javascript
    for(let i = 0; i < word.length; i++) {
        if(word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u') {
            tempArray.push(word[i]);
        }
    }
```

* Now, join these elements of the 'tempArray' array to a single word using Array.prototype.join() method.<i>If you're unfamiliar about <b>Array.prototype.join()</b>, learn it from here:  </i> <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join>

```javascript
    // store the word into a variable named 'wordSequence'
    let wordSequence = tempArray.join("");
```

* Finally, check if the wordSequence is the vowel in 'aeiou' order or not:

```javascript
    if(wordSequence === "aeiou") {
        console.log("The word " + word + " has vowels in order.");
    }else {
        console.log("The word " + word + " doesn't has vowels in order.");
    }
```
* Our final code looks like this: 
```javascript

// Initialize an empty array.
let tempArray = [];
// The main funtion.
function checker(word) {
    // iterate through the letters to check if it's a vowel or not.
    // if a vowel, then add it to the tempArray array.
    for(let i = 0; i < word.length; i++) {
        if(word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u') {
            tempArray.push(word[i]);
        }
    }
    // join the array elements to form a word.
    let wordSequence = tempArray.join("");
    // check if the wordSequence matches the vowel order 'aeiou'
    if(wordSequence === "aeiou") {
        console.log("The word " + word + " has vowels in order.");
    }else {
        console.log("The word " + word + " doesn't has vowels in order.");
    }
}
// calling functions
checker("facetious");
checker("precious");
```
* Let's call and check our function:


```javascript
checker("facetious");
Outputs: 'The word facetious has vowels in order.'

checker("precious");
Outputs: "The word precious doesn't has vowels in order."

```

<b>View the working code here: <https://jsbin.com/keparos/edit?js,console></b>
