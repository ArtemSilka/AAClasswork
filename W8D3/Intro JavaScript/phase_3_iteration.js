// bubble sort 

Array.prototype.bubbleSort = function() {
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < this.length - 1; i++) {
        if (this[i] > this[i + 1]) {
            // (this[i], this[i + 1]) = (this[i + 1], this[i]);
            let a = this[i];
            let b = this[i + 1];
            this[i] = b;
            this[i + 1] = a;
            sorted = false;
        }
    }
  }
  return this;
}

console.log([6,4,1,3,2,5].bubbleSort());

// substrings

String.prototype.substrings = function() {
  let subs = [];
  for(let i = 0; i < this.length; i++) {
    for(let j = 0; j < this.length; j++) {
      if(j > i) {
        subs.push(this.slice(i, j));
      }
    }
  }
  return subs;
}

console.log("abcdef".substrings());
