// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


// Recursive solution
// Note: I only try to produce results for fib(0), fib(1) and fib(2). 
// Turns out this is one of the working solution.
function fib(n) {
    if(n === 0) {
        return 0;
    } else if(n === 1) {
        return 1;
    } else if (n > 1) {
        return fib(n-1) + fib(n-2);
    }
}

console.log(fib(5));

module.exports = fib;
