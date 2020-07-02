Array.prototype.uniq = function() {
  let arr = [this[0]];
  for(let i = 0; i < this.length - 1; i++) {
    if(!(arr.includes(this[i]))) {
      arr.push(this[i])
    }
  }
  return arr;
}

// var array = [1,1,2,2,3,3];
// var result = array.uniq();
// console.log(array);
// console.log(result);
// console.log(array);

Array.prototype.twoSum = function() {
  let arr = [];
  for(let i = 0; i < this.length; i++) {
    for (let j = 1; j < this.length; j++) {
      if(this[i] + this[j] === 0 && j > i) {
        arr.push([i, j])
      }
    }
  }
  return arr;
}

// var array = [-1, 0, 1, 5, 3, -3]; // [[0,2], [4,5]]
// var result = array.twoSum();
// console.log(result);

Array.prototype.transpose = function() {
    var arr = [];
    for(let i = 0; i < this[0].length; i++) {
        let subArr = []
        for (let j = 0; j < this.length; j++) {
            subArr.push(this[j][i])
        }
        arr.push(subArr)
    }
    return arr;
}

// var array = [[1,2,3],[4,5,6]]; // [[1,4],[2,5],[3,6]]
// var result = array.transpose();
// console.log(result);

