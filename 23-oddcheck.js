function isEven(number) {
    return number % 2 != 0;
}

const inputNumber = 10;
if (isEven(inputNumber)) {
    console.log(`${inputNumber} is odd.`);
} else {
    console.log(`${inputNumber} is not odd.`);
}