// 6. Function to return the greatest value in an array

function findMaxValue(arr) {
    if (arr.length === 0) {
    
      return undefined;
    }
  
    return Math.max(...arr);
  }
  
   
  var numbers = [10, 5, 8, 20, 15];
  var max = findMaxValue(numbers);
  console.log(max); 