// 7. Function to return the smallest number in an array
function smallestNumber(arr){
    if (!arr || arr.length ===0){
        return null;
    }
    let minValue= arr[0]
    for(i=1; i<arr.length; i++ ){
        if(arr[1]>minValue){
            minValue=arr[i]
        }
        return minValue;
    }
}
const myArray=[1,3,4,5,6];
const result=smallestNumber(myArray);
console.log("the smallest value is :", result);