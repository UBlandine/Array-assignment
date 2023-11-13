// 8. Function to return the average of numbers in an array
function arrayAddition(array) {
    var sum = 0;
    var average;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
        average = sum / array.length;
    }
    return average;
}
var array = [1, 2, 3, 4, 5, 6, 7];
let average = arrayAddition(array);
console.log("The average is : "+average);