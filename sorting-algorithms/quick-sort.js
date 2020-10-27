// time complexity: best/average - O(n log n), worst - O(n^2)
// space complexity: O(log n)

function pivot(arr, start = 0, end = arr.length + 1) {
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    // defaulting pivot to first item for simplicity, however could have consequences for big O down the line

    // if the entire array is sorted and we pick the first item (lowest value), each decomposition is only one item leading to O(n^2) time complexity - same thing goes for choosing maximum array

    // to avoid, choose a random element or something like average median
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    swap(arr, start, swapIdx);
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIdx = pivot(arr, left, right);
        // left side
        quickSort(arr, left, pivotIdx - 1);
        // right side
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
}


quickSort([4, 6, 1, 3, 8, 99, 54, 23, 1])