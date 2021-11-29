const eqArrays = require('./eqArrays');

/* const eqArrays = function(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    } else {
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) {
                return false;
            }
        }
    }
    return true;
} */

//Takes two arrays: actual and expected
//Returns console.log with appropriate message.Template literal string
//Should also make sure of the eqArray() function
//Should not use strict equality operator (===)

const assertArraysEqual = function(actual, expected) {
    return (eqArrays(actual, expected) ? console.log(`✅ ✅ ✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑 🛑 🛑Assertion Failed: ${actual} !== ${expected}`));
}

//console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
module.exports = assertArraysEqual;
