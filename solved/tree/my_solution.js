// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter(element => {
            if(element.data === data){
                return false;
            }
            return true;
        });
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    
    traverseBF(fn) {
        if(!this.root) {
            return;
        }

        let holder = [this.root];

        while(holder.length > 0) {
            const node = holder.shift();
            holder = [...holder, ...node.children];
            fn(node);
        }
    }
}


const node1 = new Node(10);
node1.add(10);
node1.add(20);
node1.add(30);
node1.children[0].add(40);
node1.children[0].add(50);
node1.children[0].add(60);
node1.children[1].add(70);
node1.children[1].add(80);
node1.children[1].add(90);

const tree = new Tree();
tree.root = node1;
tree.traverseBF((node)=>console.log(`current node data = ${node.data}`) );

module.exports = { Tree, Node };
