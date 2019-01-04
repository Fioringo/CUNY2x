// CUNY2x
// Assignment 2 - myEvery implementation
// Author: Andrey Shtukenberg
// Returns true until a false item encountered (based on condition
//  from the caller array)

Array.prototype.myEvery = function (callback, condition) {
    var i;
    for(i = 0; i < this.length; i++){
        if(!callback.call(condition, this[i], i, this))
            return false;
    }
    return true;
};
