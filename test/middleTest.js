const assertArraysEqual = require('../assertArraysEqual');
//const eqArrays = require('./eqArrays');
const middle = require('../middle');

console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])); //Should return true
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [4])); //Should return false


