// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {

    if(min !== null){
        if(node.data < min) return false;
    }

    if(max !== null){
        if(node.data > max) return false;
    }

    if(node.left) {
        max = node.data;
        return validate(node.left, min, max);
    }

    if(node.right) {
        min = node.data;
        return validate(node.right, min, max);
    }

    return true;
    
}

module.exports = validate;
