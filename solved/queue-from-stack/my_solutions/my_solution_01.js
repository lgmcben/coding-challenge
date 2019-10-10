// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.mainStack = new Stack();
        this.buffer = new Stack();
    }
    

    add(record) {
        while(this.mainStack.peek()){
            this.buffer.push(this.mainStack.pop());
        }

        this.mainStack.push(record);

        while(this.buffer.peek()){
            this.mainStack.push(this.buffer.pop());
        }
    }

    remove() {
        return this.mainStack.pop();
    }

    peek() {
        return this.mainStack.peek();
    }
}

module.exports = Queue;
