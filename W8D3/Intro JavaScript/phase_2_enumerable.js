Array.prototype.myEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

// const SayHello = function(ele) {
//     console.log("hello!");
// }
// const Doubler = function(ele) {
//     console.log(ele * 2);
// }
// const Arr = [1,2,3];
// // Arr.myEach(SayHello);
// Arr.myEach(Doubler);

Array.prototype.myMap = function (callback) {
    const mapped = [];
    this.myEach(ele => mapped.push(callback(ele)));
    return mapped;
}

// const Doubler = function(ele) {
//     return (ele * 2);
// }
// const Arr = [1,2,3];
// let results = Arr.myMap(Doubler);
// console.log(results);

Array.prototype.myReduce = function(callback, initialValue) {
    var array = this.slice(0); 
    if (initialValue === undefined) {
        initialValue = array[0]
        array = array.slice(1)
    }
    let accum = initialValue;
    array.myEach(ele => accum = callback(accum, ele));
    return accum;
}

// var injector = function(acc, el) {
//     return acc + el;
// }
// var arr = [1,2,3,4]; // 10
// var result = arr.myReduce(injector, 10);
// console.log(result);