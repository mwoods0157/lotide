const eqArrays = function(actual, expected) {
    for (let i = 0; 0 < actual.length; i++) {
        if (actual[i] !== expected[i]) {
            return false;
        }
    }
    return true;
}
//Takes two arrays: actual and expected
//Returns console.log with appropriate message.Template literal string
//Should also make sure of the eqArray() function
//Should not use strict equality operator (===)

const assertArraysEqual = function(actual, expected) {
    return (eqArrays(actual, expected) ? console.log(`✅ ✅ ✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑 🛑 🛑Assertion Failed: ${actual} !== ${expected}`));
}