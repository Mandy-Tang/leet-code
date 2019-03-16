// /**
//  * Initialize your data structure here.
//  */
// var MyStack = function() {
//   this.queueA = [];
//   this.queueB = [];
// };

// /**
//  * Push element x onto stack.
//  * @param {number} x
//  * @return {void}
//  */
// MyStack.prototype.push = function(x) {
//   if (this.queueA.length !== 0) {
//     this.queueA.push(x);
//   } else {
//     this.queueB.push(x);
//   }
// };

// /**
//  * Removes the element on top of the stack and returns that element.
//  * @return {number}
//  */
// MyStack.prototype.pop = function() {
//   if (this.queueA.length === 0 && this.queueB.length === 0) {
//     return;
//   }

//   let preEmptyQueue, preStoreQueue;
//   if (this.queueA.length === 0) {
//     preEmptyQueue = this.queueA;
//     preStoreQueue = this.queueB;
//   } else {
//     preEmptyQueue = this.queueB;
//     preStoreQueue = this.queueA;
//   }

//   while (preStoreQueue.length > 1) {
//     const head = preStoreQueue.shift();
//     preEmptyQueue.push(head);
//   }

//   const last = preStoreQueue.shift();
//   return last;
// };

// /**
//  * Get the top element.
//  * @return {number}
//  */
// MyStack.prototype.top = function() {
//   if (this.queueA.length === 0 && this.queueB.length === 0) {
//     return;
//   }

//   let preEmptyQueue, preStoreQueue;
//   if (this.queueA.length === 0) {
//     preEmptyQueue = this.queueA;
//     preStoreQueue = this.queueB;
//   } else {
//     preEmptyQueue = this.queueB;
//     preStoreQueue = this.queueA;
//   }

//   let head;

//   while (preStoreQueue.length > 0) {
//     head = preStoreQueue.shift();
//     preEmptyQueue.push(head);
//   }

//   return head;
// };

// /**
//  * Returns whether the stack is empty.
//  * @return {boolean}
//  */
// MyStack.prototype.empty = function() {
//   return this.queueA.length === 0 && this.queueB.length === 0;
// };

// export { MyStack };

export class MyStack {
  constructor() {
    this.queueA = [];
    this.queueB = [];
  }

  empty() {
    return this.queueA.length === 0 && this.queueB.length === 0;
  }

  push(x) {
    if (this.queueA.length !== 0) {
      this.queueA.push(x);
    } else {
      this.queueB.push(x);
    }
  }

  pop() {
    if (this.empty()) {
      return;
    }

    let preEmptyQueue, preStoreQueue;
    if (this.queueA.length === 0) {
      preEmptyQueue = this.queueA;
      preStoreQueue = this.queueB;
    } else {
      preEmptyQueue = this.queueB;
      preStoreQueue = this.queueA;
    }

    while (preStoreQueue.length > 1) {
      const head = preStoreQueue.shift();
      preEmptyQueue.push(head);
    }

    const last = preStoreQueue.shift();
    return last;
  }

  top() {
    if (this.empty()) {
      return;
    }

    let preEmptyQueue, preStoreQueue;
    if (this.queueA.length === 0) {
      preEmptyQueue = this.queueA;
      preStoreQueue = this.queueB;
    } else {
      preEmptyQueue = this.queueB;
      preStoreQueue = this.queueA;
    }

    let head;

    while (preStoreQueue.length > 0) {
      head = preStoreQueue.shift();
      preEmptyQueue.push(head);
    }

    return head;
  }
}
