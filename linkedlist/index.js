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
        this.head = new Node(data, this.head);
    }

    size() {
        if(this.head === null) {
            return 0;
        }
        let pointer = this.head;
        let accumulatedSize = 1;
        while(pointer.next !== null){
            accumulatedSize += 1;
            pointer = pointer.next;
        }
        return accumulatedSize;         
    }

    getFirst() {
        return this.head;
    }
}

module.exports = { Node, LinkedList };
