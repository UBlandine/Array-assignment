var someNumbers = [3, 4, 8, 2, 1, 2, 2, 6, 3, 4];

// Extract the last three numbers
var lastThree = someNumbers.slice(-3);

// Extract the first three numbers
var firstThree = someNumbers.slice(0, 3);

// Sort the original array
var sortedArray = someNumbers.sort(function (a, b) {
    return a - b;
});

// Concatenate the last three, sorted array, and first three
var modifiedArray = lastThree.concat(sortedArray, firstThree);

console.log(modifiedArray);
