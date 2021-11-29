const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(tail([2, 3, 4], [3, 4]));
assertArraysEqual(tail([2, 3, 4], [2, 4]));
