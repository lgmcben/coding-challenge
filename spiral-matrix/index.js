// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function isTurningPoint(array, row, column) {
    if(row >= array.length || column >= array[0].length || row < 0 || column < 0){
        return true;
    } else if(array[row][column] !== undefined) {
        return true;
    } 
}

function matrix(n) {
    let myarray = new Array(n);

    for(let i=0; i<n ; i++){
        myarray[i] = new Array(n);
    }
    // console.log(myarray.length);
    // console.log(myarray[0].length);

    let lastNumber = n*n;
    let row = 0;
    let column = 0;
    let directions = ['right', 'down', 'left', 'up'];

    for(let count = 1; count <= lastNumber ; count++) {
        myarray[row][column]=count;
        // console.log(`(${row},${column}) = ${myarray[row][column]}`);
        // console.log(directions);
        if(directions[0] === 'right'){
            column++;
            if(isTurningPoint(myarray,row,column)){
                column--;
                row++;
                directions.push(directions.shift());
            }
        } else if (directions[0] === 'down'){
            row++;
            if(isTurningPoint(myarray,row,column)){
                row--;
                column--;
                directions.push(directions.shift());
            }
        } else if (directions[0] === 'left'){
            column--;
            if(isTurningPoint(myarray,row,column)){
                column++
                row--;
                directions.push(directions.shift());
            }
        } else if (directions[0] === 'up'){
            row--;
            if(isTurningPoint(myarray,row,column)){
                row++;
                column++;
                directions.push(directions.shift());
            }
        }
    }
    return myarray;
}

let answer = matrix(3);
debugger; // Stops execution here to inspect the answer
