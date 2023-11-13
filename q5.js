// 5. Function to return the sum of all elements in an array

function sumOfArray(arr){
    var sum=0;
    for(let n=0; n<arr.length ; n++){
     sum += arr[n];
    }
    return sum;
 }
 let arr=[10,20,30,40,50];
 let result= sumOfArray(arr);
 console.log(result);