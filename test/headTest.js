const head = require('../head');
//const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe('#head', () => {
    it('#1 returns 1 for [1, 2, 3]', () => {
        assert.strictEqual(head([1, 2, 3]), 1);
    })

    it('returns "5" for ["5"]', () => {
        assert.strictEqual(head(['5']), '5');
    });

    it('returns "2" for ["2", "3", "4"]', () => {
        assert.strictEqual(head(["2", "3", "4"]), "2");
    })
});

//assertEqual(head([5,6,7]), 5);
//assertEqual(head([4,6,7]), 5);