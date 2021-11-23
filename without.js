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

//create a function that takes two arrays and returns a new array
//This new array should be firstArray - secondArray
const without = function(source, itemsToRemove) {
    let newArray = source;
    for (let i = 0; i < source.length; i++) {
        for (let j = 0; j < itemsToRemove.length; j++) {
            if (source[i] === itemsToRemove[j]) {
                newArray.splice(i, 1);
            }
        } 
    }
    return newArray;
}


//iterate through i (source)
//iterate through j (items)
//if source[i] === item[j], splice out the newArray value at that element
//return newArray

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);