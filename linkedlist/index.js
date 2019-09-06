// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(_data, _next = null) {
        this.data = _data;
        this.next = _next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        if(this.head === null) {
            this.head = new Node(data);
        } else {
            this.head = new Node(data, this.head);
        }
    }
}

module.exports = { Node, LinkedList };
