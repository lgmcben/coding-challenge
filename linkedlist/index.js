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
        if(index < 0) {
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

    removeAt(index) {
        if(!this.head) {
            return;
        }

        if(index === 0) {
            this.head = this.head.next;
            return;
        }

        let previousNode = this.getAt(index -1);

        if(!previousNode) {
            return;
        }

        if(!previousNode.next) {
            return;
        }

        previousNode.next = previousNode.next.next;
    }

    insertAt(data, index) {
        const newNode = new Node(data);

        // Empty linked list
        if(!this.head) {
            this.head = newNode;
            return;
        }

        // index = 0, head is not null
        if(index === 0) {
            const temp = this.head;
            this.head = newNode;
            this.head.next = temp;
            return;
        }

        const previousNode = this.getAt(index -1);

        // Target index out of bound
        if(!previousNode) { 
            const lastNode = this.getLast();
            lastNode.next = newNode;
            return;
        }
        
        // Target index is (the null) next to the last node
        if(!previousNode.next) {  
            previousNode.next = newNode;
            return;
        }

        // There's a node at target index
        if(previousNode.next) {
            const temp = previousNode.next;
            previousNode.next = newNode;
            newNode.next = temp;
            return;
        }
    }

    forEach(fn) {
        if(!this.head){
            return;
        }

        let pointer = this.head;

        while(pointer){
            // todo: research why 'this' variable is logged as some generic object
            fn.call(this, pointer);
            pointer = pointer.next;
        }
    }
}

	
const list = new LinkedList();
list.insertLast(1);
list.insertLast(2);
list.forEach((node) => {
    //console.log(this.toString());
    console.log(node.data);
});


module.exports = { Node, LinkedList };
