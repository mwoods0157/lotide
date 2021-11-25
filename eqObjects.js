
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

//The current function only goes through primative values
const eqObjects = function(object1, object2) {
    const properties1 = Object.keys(object1);
    const properties2 = Object.keys(object2);
    if (properties1.length !== properties2.length) {
        return console.log(false);
    } else {
        for (let key of properties1) {
            if (typeof object1[key] === "object" || typeof object2[key] === "object") {
                if(!(eqArrays(object1[key], object2[key]))) {
                    return console.log(false);
                }
            } else if (object1[key] !== object2[key]) {
                return console.log(false);
            }
        }
    }
    return console.log(true);
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2);