// function to sort and arrange these elements of the array in ascending order.

var someNumbers = [3, 4, 8, 2, 1, 2, 2, 6, 3, 4];

function sortAscending(array) {
  // Use the sort method with a compare function
  array.sort(function(a, b) {
    return a - b;
  });

  return array;
}

var sortedArray = sortAscending(someNumbers);
console.log(sortedArray);

//Modify the first array to make sure that it will also display the last 3 numbers and the first 3 numbers in front of the sorted array



