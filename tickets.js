let sorted = tickets.sort((a, b) => a - b);
// set start point and the current maximum length
let start = 0;
let maxLength = 0;

// iterate over sorted array starting at index of 1 so we can check element before it (no index of -1)
// if the difference between sorted[i] and sorted[i - 1] is greater than 1 set our current length to be
// i - start, this gives us the current length of subsequent numbers
// check if that current length is greater than our current max length and if so it becomes the new max
// move our starting pointer to the index we left off at
for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] - sorted[i - 1] > 1) {
        let currentLength = i - start;
        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
        start = i;
    }
}

// return our maximum length
return maxLength;

// A quality agent is responsible for inspecting samples of the finished products in the production line. Each sample contains defective and non-defective products represented by 1 and 0 respectively. After placing the product samples sequentially in a two-dimensional square matrix of product samples, determine the size of the largest square area of defective products.

var maximalSquare = function (matrix) {
    let max = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) continue;
            if (i > 0 && j > 0)
                matrix[i][j] =
                    Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]) + 1;
            max = Math.max(matrix[i][j], max);
        }
    }
    return max;
};

function largestArea(samples) {
    // Write your code here
    // check edge case if matrix doesnt exist
    if (!samples || !samples[0]) return 0;

    let cache = [...samples],
        height = samples.length,
        width = samples[0].length,
        max = 0;

    for (let i = 0; i < samples.length; i++) {
        // handle other edge case
        max = Math.max(max, samples[i][0]);
    }

    // check each row
    for (let row = 1; row < height; row++) {
        // check each column
        for (let col = 1; col < width; col++) {
            if (samples[row][col] === 1) {
                // update cache after checking its neighbors (check left, top left, and top cells)
                // adding one keeps track of the size of the square as it increases
                cache[row][col] = Math.min(cache[row - 1][col], cache[row][col - 1], cache[row - 1][col - 1]) + 1;
                // compare to our current max and update if neccesary
                max = Math.max(cache[row][col], max);
            }
        }
    }

    return max
}