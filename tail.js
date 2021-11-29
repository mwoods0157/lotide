const tail = function(array) {
    let newArray = [];
    for (let i = 1; i < array.length; i++) {
        newArray.push(array[i]);
    }
    return newArray;
}

/*const tail = function(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (i === 0) {
            continue;
        } else {
            newArray.push(array[i]);
        }
    }
    return newArray;
};*/
module.exports = tail;