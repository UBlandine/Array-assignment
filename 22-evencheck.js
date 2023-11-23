function isEven(number) {
    return number % 2 === 0;
}

const inputNumber = 10;
if (isEven(inputNumber)) {
    console.log(`${inputNumber} is even.`);
} else {
    console.log(`${inputNumber} is not even.`);
}