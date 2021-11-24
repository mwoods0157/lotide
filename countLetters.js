//Function should take one argument - a string
//Should output a list object with count values from letters it returns
//Create a variable results inside the function to push letter/count pair
const countLetters = function(string) {
    const results = {};

    for (const letter of string) {
        
        if (results[letter]) {
            results[letter] += 1;
        } else {
            results[letter] = 1;
        }
    }
    return console.log(results);
}

const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅ ✅ ✅Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑 🛑 🛑Assertion Failed: ${actual} !== ${expected}`);
    }
};

countLetters(process.argv[2]);