//const assertArraysEqual = require('../assertArraysEqual');
//const eqArrays = require('./eqArrays');
const middle = require('../middle');
const assert = require('chai').assert;

describe('#middle', () => {
    it('#1 returns "[3]" given an input of "[1, 2, 3, 4, 5]"', () => {
        assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
    })

    it('#2 returns "[3, 4]" given an input of "[1, 2, 3, 4, 5, 6]"', () => {
        assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
    })

    //This should return an error because the middle value of the array is 3. Testing to see if the function is jsut passing true for everything
    it('#3 returns "[4]" give an input of "[1, 2, 3, 4, 5]"', () => {
        assert.deepEqual(middle([1, 2, 3, 4, 5]), [4]);
    })
})

//console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])); //Should return true
//console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [4])); //Should return false


