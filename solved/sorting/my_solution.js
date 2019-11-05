// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    let length = arr.length;
    while(length>0){
        for(let i = 0; i<length ; i++) {
            if(arr[i] > arr[i+1]){
                const temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
        length--;
    }
    return arr;
}

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

let array = [100, -40, 500, -124, 0, 21, 7];

bubbleSort(array);

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
