Array.prototype.range = function(start, end) {
    var arr = [];
    arr.push(this[start]);
    if(start === end) {
        return arr;
    }
    return arr.concat(this.range(start + 1, end));
}

// var array = [1,2,3,4,5];
// console.log(array.range(1,3));

Array.prototype.sumRec = function() {
  var sum = 0;
  sum = sum + this[0];
  if(this.length === 0) {
    return 0;
  }
  return sum + this.slice(1).sumRec();
}

// var array = [1,2,3];
// console.log(array.sumRec());

const exponent = function(base, exp) {
    if (exp === 0) {
        return 1;
    }
    return base * exponent(base, exp - 1);
}

// console.log(exponent(2,5));

const fibonacci = function(n) {
  if (n === 1) {
    return [1];
  }
  if (n === 2) {
    return [1,1];
  }
  let fibs = fibonacci(n - 1);
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  return fibs;
}

// console.log(fibonacci(7));

Array.prototype.deepDup = function() {
    var deepDupped = [];
    let arr = this.slice(0);
    for(let i = 0; i < arr.length; i++) {
        if (arr[i].isArray) {
            deepDupped.push(arr[i].deepDup());
        } else {
            deepDupped.push(arr[i]);
        }
    }
    return deepDupped;
}

// arr.map {|ele| ele.is_a?(array)? deepDup(ele) : ele}

var arr = [1,[2,3], 3, 4,[5]];
let dup = arr.deepDup();
// let dup = arr
// dup.deepDup();
arr[4].push(6);
console.log(dup);
console.log(arr);