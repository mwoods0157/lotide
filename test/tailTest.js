const tail = require('../tail');
//const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe('#tail', () => {
    it('#1 returns "[3, 4]" if input is "[2, 3, 4]"', () => {
        assert.deepEqual(tail([2, 3, 4]), [3, 4]);
    })

    it('#2 returns "[1, 2, 3]" if the input is "[0, 1, 2, 3]"', () => {
        assert.deepEqual(tail([0, 1, 2, 3,]), [1, 2, 3]);
    })

    it('#3 returns "[1, 2, 4]" if the input is "[6, 1, 2, 4]"', () => {
        assert.deepEqual(tail([9, 1, 2, 4]), [1, 2, 4]);
    })
})

//assertArraysEqual(tail([2, 3, 4], [3, 4]));
//assertArraysEqual(tail([2, 3, 4], [2, 4]));
