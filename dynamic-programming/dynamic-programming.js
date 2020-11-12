// 1. overlapping subproblems
// 2. optimal substructure

// fibonacci without dp
// terrible time complexity - O(2^n) - exponential

function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

// fibonacci with dp (memoization) - top down approach
// time complexity -> O(n)
function fib(n, memo = []) {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    let res = fib(n - 1, memo) + fib(n - 2, memo);
    memo[n] = res;
    return res;
}

// fibonacci using tabulation - bottom up approach
function fib(n) {
    if (n <= 2) return 1;
    let fibNums = [0, 1, 1];

    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }

    return fibNums[n]
}