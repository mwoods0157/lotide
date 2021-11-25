const words = ["ground", "control", "to", "major", "tom"];

const eqArrays = function(array1, array2) {
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
}

const map = function(array, callback) {
    const results = [];
    for (let item of array) {
        results.push(callback(item));
    }
    return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);



const assertArraysEqual = function(actual, expected) {
    return (eqArrays(actual, expected) ? console.log(`✅ ✅ ✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑 🛑 🛑Assertion Failed: ${actual} !== ${expected}`));
}

console.log(assertArraysEqual(["ground", "control", "to", "major", "tom"], ["ground", "control", "to", "major", "tom"]));
console.log(eqArrays([1, 2], [1, 2]));