var someNumbers = [3, 4, 8, 2, 1, 2, 2, 6, 3, 4];

// Extract the last three numbers
var lastThree = someNumbers.slice(-3);

// Extract the first three numbers
var firstThree = someNumbers.slice(0, 3);

// Sort the original array
var sortedArray = someNumbers.slice().sort(function (a, b) {
    return a - b;
});

// Extract the first three numbers from the sorted array
var firstThreeFromSorted = sortedArray.slice(0, 3);

// Concatenate the last three, sorted array, first three, and first three from the sorted array
var modifiedArray = lastThree.concat(sortedArray, firstThree, firstThreeFromSorted);

console.log(modifiedArray);
