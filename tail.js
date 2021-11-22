const assertEqual = function(actual, expected) {
    for (let j = 0; j < actual.length; j++) {
        if (actual === expected) {
            console.log(`✅ ✅ ✅Assertion Passed: ${actual[j]} === ${expected[j]}`);
        } else {
            console.log(`🛑 🛑 🛑Assertion Failed: ${actual[j]} !== ${expected[j]}`);
        }
    }
};

const tail = function(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (i === 0) {
            continue;
        } else {
            newArray.push(array[i]);
        }
    }
    return newArray;
};



