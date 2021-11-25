//The current function only goes through primative values
const eqObjects = function(object1, object2) {
    const properties1 = Object.keys(object1);
    const properties2 = Object.keys(object2);
    if (properties1.length !== properties2.length) {
        return false;
    } else {
        for (let key of properties1) {
            if (typeof object1[key] === "object" || typeof object2[key] === "object") {
                if(!(eqArrays(object1[key], object2[key]))) {
                    return false;
                }
            } else if (object1[key] !== object2[key]) {
                return false;
            }
        }
    }
    return true;
}

const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect;
    eqObjects(actual, expected) ? console.log(`✅ ✅ ✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`🛑 🛑 🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
}




const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertObjectsEqual(ab, ba);

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

