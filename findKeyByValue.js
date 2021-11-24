const findKeyByValue = function(object, value) {
    //literates over the keys
    for (const key in object) {
        //If the object[key] is the same as the value, return the key
        if(object[key] === value) {
            return key;
        }
    }
    //If no key is found return undefined
    return undefined;
}


const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅ ✅ ✅Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑 🛑 🛑Assertion Failed: ${actual} !== ${expected}`);
    }
};