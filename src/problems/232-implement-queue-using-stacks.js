/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.stack = [];
  this.reversedStack = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (this.reversedStack.length === 0) {
    if (this.stack.length === 0) {
      return;
    } else {
      const stackLength = this.stack.length;
      for (let i = 0; i < stackLength; i++) {
        this.reversedStack.push(this.stack.pop());
      }
    }
  }

  return this.reversedStack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (this.reversedStack.length === 0) {
    if (this.stack.length === 0) {
      return;
    } else {
      const stackLength = this.stack.length;
      for (let i = 0; i < stackLength; i++) {
        this.reversedStack.push(this.stack.pop());
      }
    }
  }

  return this.reversedStack[this.reversedStack.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.stack.length === 0 && this.reversedStack.length === 0;
};

export { MyQueue };
