const letterPositions = function(sentence) {
    //Creates empty array
    const results = {};
    //Starts the iterative count
    let count = 0;
    //For of loop to loop through sentence
    for (const letter of sentence) {
        //If letter is empty string increase count and skip
        if(letter === " ") {
            count += 1;
            continue;
        //If the letter already exists in the results 
        } else if (results[letter]) {
        //If the results[letter] does exist already push the count value to its position array
            results[letter].push(count);
            count += 1;
        } else {
        //If the results[letter] doesnt exist already create it and push its first value
            results[letter] = [count];
            count += 1;
        }

    }
    //Return the list with key/array values
    return console.log(results);
}

const eqArrays = function(actual, expected) {
    for (let i = 0; 0 < actual.length; i++) {
        if (actual[i] !== expected[i]) {
            return false;
        }
    }
    return true;
}

const assertArraysEqual = function(actual, expected) {
    return (eqArrays(actual, expected) ? console.log(`✅ ✅ ✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑 🛑 🛑Assertion Failed: ${actual} !== ${expected}`));
}

letterPositions("lighthouse in the house");