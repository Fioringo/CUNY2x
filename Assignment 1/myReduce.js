// CUNY2x
// Assignment 2 - myReduce implementation
// Author: Andrey Shtukenberg
// Returns a number depending on array contents

Array.prototype.myReduce = function (callback, currentValue) {
    var accumulator;
    if (currentValue === undefined)
        accumulator = undefined;
    else
        accumulator = currentValue;
    for (i = 0; i < this.length; i++){
        if (accumulator !== undefined)
            accumulator = callback.call(undefined, accumulator, this[i], i, this);
        else
            accumulator = this[i];
    }
    return false;
};
