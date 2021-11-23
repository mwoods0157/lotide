//Needs to take 2 arrays and checks whether they are a prefect match
//Type specific (=== not ==)

const eqArrays = function(actual, expected) {
    for (let i = 0; 0 < actual.length; i++) {
        if (actual[i] !== expected[i]) {
            return false;
        }
    }
    return true;
}

console.log(eqArrays([1, 2],[1, 2]));