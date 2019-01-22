/**
 * initialize your data structure here.
 */
// var MinStack = function() {
//   this.stack = [];
// };

// /**
//  * @param {number} x
//  * @return {void}
//  */
// MinStack.prototype.push = function(x) {
//   this.stack.push(x);
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {
//   this.stack.pop();
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {
//   return this.stack[this.stack.length - 1];
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {
//   if (this.stack.length === 0) {
//     return;
//   }
//   const min = this.stack.reduce((acc, cur) => {
//     return Math.min(acc, cur);
//   }, Number.MAX_VALUE);

//   return min;
// };

export class MinStack {
  constructor() {
    this.stack = [];
  }

  push(number) {
    this.stack.push(number);
  }

  pop() {
    return this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    const min = this.stack.reduce((acc, cur) => {
      return Math.min(acc, cur);
    }, Number.MAX_VALUE);
    return min;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
