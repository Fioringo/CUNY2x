// CUNY2x
// Assignment 2 - myEach implementation
// Author: Andrey Shtukenberg
// Does something to each element of an array

Array.prototype.myEach = function (callback) {
    var i;
    for ( i = 0; i < this.length; i++)
        callback(this[i], i, this);
};
