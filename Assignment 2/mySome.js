// CUNY2x
// Assignment 2 - mySome implementation
// Author: Andrey Shtukenberg
// Returns true if encountered a requested condition from caller
//  array.

Array.prototype.mySome = function (callback, condition) {
    var i;
    for (i = 0; i < this.length; i++){
        if (callback.call(condition, this[i], i, this))
            return true;
    }
    return false;
};
