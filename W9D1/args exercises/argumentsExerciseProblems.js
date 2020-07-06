// sum
// Write a sum function that takes any number of arguments:

// sum(1, 2, 3, 4) === 10;
// sum(1, 2, 3, 4, 5) === 15;
// Solve it first using the arguments keyword, then rewrite your solution to use the ...rest operator.

function sumArg() {
    let sum = 0;
    for( let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    
    return sum;
}

// console.log(sumArg());

function sumArg2(...nums) {
    let sum = 0;
    // nums.forEach(ele => sum += ele)
    nums.forEach(function(ele) {
        sum += ele;
    });
    return sum;
    // console.log(nums);
}

// console.log(sumArg2(1,2,3));

// --------------------------------------------------------------------

// bind with args
// Rewrite your myBind method so that it can take both bind - time arguments and call - time arguments.

// A few examples:

class Cat {
    constructor(name) {
        this.name = name;
    }
    
    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");


let meow = "meow";
Function.prototype.myBind = function (ctx) {
    let that = this;


    let args1 = Array.prototype.slice.call(arguments);
    args1 = args1.slice(1);

    return function () {
        let args2 = Array.prototype.slice.call(arguments);
        // let args = [...args1, ...args2]
        args1 = args1.concat(args2);
        return that.apply(ctx, args1);
    }
}

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// --------------------------------------------------------------------

// Hint: curriedSum(numArgs) should:

// Define an empty array, numbers.
// Defines a function, _curriedSum that:
// Closes over numArgs and numbers.
// Takes a single number as an argument.
// Appends this to numbers each time.
// If numbers.length === numArgs, it sums the numbers in the array and returns the result.
//     Else, it returns itself.
// Returns _curriedSum.
// If you're confused, think of it this way: _curriedSum keeps collecting arguments and returning itself until it has enough arguments, at which point it actually does the required work of summing.

function curriedSum(numsArgs) {
    let numbers = [];
    return function _curriedSum(num) {
        numbers.push(num);
        if (numbers.length === numsArgs) {
            let sum = 0;
            for (let i = 0; i <numbers.length; i++) {
                sum += numbers[i];
            }
            return sum;
        } else {
            return _curriedSum;
        }
    }
}

// with apply 
Function.prototype.curry = function (numArgs) {
    let numbers = [];
    that = this;
    // console.log(this);
    return function _curry(num) {
        numbers.push(num);
        if (numArgs === numbers.length) {
            return that.apply(null, numbers);
            // console.log(this);
        } else {
            return _curry;
        }   
    }
}


// With ... and call. 
Function.prototype.curry2 = function (numArgs) {
    let numbers = [];
    that = this;
    // console.log(this);
    return function _curry(num) {
        numbers.push(num);
        if (numArgs === numbers.length) {
            return that.call(null, ...numbers);
            // console.log(this);
        } else {
            return _curry;
        }
    }
}
const sum = sumArg.curry2(2);
sum(10);
console.log(sum(2));
// sum(2);
// sumArg(1)(2);
// console.logsumArg(2);
// const sum = curriedSum(4);
// console.log(sum(5)(20)(1));
// console.log(sum(30));

// --------------------------------------------------------------------


// Function.prototype.curry
// Write a method Function.prototype.curry(numArgs).This should return a function that will:

// Collect up arguments until there are numArgs of them,
//     If there are too few arguments still, it should return itself.
// When there are numArgs arguments, it should call the original function.
// Write a version that uses Function.prototype.apply and 
// another one that uses ... (the spread operator).

