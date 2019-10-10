// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }
  
  peek() {
    // console.log('length = ' + this.data.length);
    // console.log('data[-1] = ' + this.data[-]);
    return this.data[this.data.length-1];

  }
}

let queue = new Queue();
// queue.add(1);
// queue.add(2);
// console.log(queue.pop())

module.exports = Queue;
