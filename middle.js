//function needs to take an array
//For arrays with 1 || 2 elements return an empty array
//For arrays with odd number of elements return a single middle element
//For arrays with even number of elements return a double array

const middle = function(array) {
    let middleValue = [];
    //test whether the values are 1||2
    if (array.length === 1 || array.length === 2) {
        return middleValue;
    //Create the two conditions
    } else if (array.length % 2 === 1) {
        middleValue.push(array[(array.length / 2) - 0.5])
    } else if (array.length % 2 === 0) {
        middleValue.push(array[(array.length / 2) - 1]);
        middleValue.push(array[(array.length / 2)]);
    }
    return middleValue;
}

const assertArraysEqual = function(actual, expected) {
    return (eqArrays(actual, expected) ? console.log(`✅ ✅ ✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑 🛑 🛑Assertion Failed: ${actual} !== ${expected}`));
}

const eqArrays = function(actual, expected) {
    for (let i = 0; 0 < actual.length; i++) {
        if (actual[i] !== expected[i]) {
            return false;
        }
    }
    return true;
}