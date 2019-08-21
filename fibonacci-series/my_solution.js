// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    let series = [0,1];

    let index = 2;

    while(index <= n) {
        const nextNumber = series[index-1] + series[index-2];
        series.push(nextNumber);
        index++;
    }

    return series[n];
}

const answer = fib(9);

debugger;

module.exports = fib;
