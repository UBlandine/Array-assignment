//function that divide numbers

function divideNumbers(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Cannot divide by zero";
    }
}
var quotient = divideNumbers(10,5);
console.log(quotient);