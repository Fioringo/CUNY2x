// CUNY2x
// Assignment 2 - myFilter implementation
// Author: Andrey Shtukenberg
// Returns a new array with items appropriate to condition
//  in call from caller array

Array.prototype.myFilter = function (callback, condition) {
    var a = [];
    var i;
    for (i = 0; i < this.length; i++){
        if (callback.call(condition, this[i], i, this))
            a.push(this[i]);
    }
    return a;
};
