function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * calculateFactorial(n - 1);
    }
}

const number = 5;
const result = calculateFactorial(number);
console.log("The factorial of 5 is " + result);