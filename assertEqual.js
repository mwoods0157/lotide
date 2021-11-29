const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅ ✅ ✅Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑 🛑 🛑Assertion Failed: ${actual} !== ${expected}`);
    }
};

//assertEqual("Lighthouse", "Bootcamp");
//assertEqual("Lighthouse", "Lighthouse");

//Notice that we are passing the variable assertEqual, calling it
module.exports = assertEqual;

