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
        let pointer = this.head;
        let accumulatedSize = 0;
        while(pointer !== null){
            accumulatedSize += 1;
            pointer = pointer.next;
        }
        return accumulatedSize;         
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if(this.head === null){
            return null;
        }

        let pointer = this.head;
        
        while(pointer.next !== null) {
            pointer = pointer.next;
        }
        return pointer;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if(this.head === null) {
            return;
        }
        this.head = this.head.next;
    }

    removeLast() {
        if(this.head === null) {
            return;
        }

        if(this.head.next === null) {
            this.head = null;
            return;
        }

        let previousNode = this.head;
        let currentNode = this.head.next;

        while(currentNode.next !== null){
            previousNode = currentNode;
            currentNode = currentNode.next;
        } 

        previousNode.next = null;
    }

    insertLast(data) {
        let newNode = new Node(data);
        if(this.head === null) {
            this.head = newNode;
        } else {
            this.getLast().next = newNode;
        } 
    }

    getAt(index) {
        if(index < 0){
            return null;
        }

        if(!this.head) {
            return null;
        }

        let node = this.head;
        let counter = 0;

        while(counter < index) {
            if(node.next === null){
                return null;
            }
            node = node.next;
            counter++;
        }
        return node;
    }
}

module.exports = { Node, LinkedList };
