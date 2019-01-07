// CUNY2x
// Assignment 2 - myMap implementation
// Author: Andrey Shtukenberg
// Creates a new array of the same length as the caller

Array.prototype.myMap = function (callback) {
    var a = [];
    var i;
    for (i = 0; i < this.length; i++) {
        a.push(callback(this[i], i, this));
    }
    return a;
};
