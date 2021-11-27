const flatten = function(array) {
    let arrString = array.toString();
    let newArray = [];
    for (let str of arrString) {
        if (str === ',') {
            continue;
        } else {
            
            newArray.push(parseInt(str));
        }
    }
    return console.log(newArray);
}

flatten([1, 2, [3, 4], 5, [6]]);

