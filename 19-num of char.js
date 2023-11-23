function countCharacters(inputString) {
    // Remove spaces from the string
    const stringWithoutSpaces = inputString.replace(/\s/g, '');

    // Count the number of characters in the string without spaces
    const numCharacters = stringWithoutSpaces.length;

    return numCharacters;
}


const inputString = "Hello World";
const result = countCharacters(inputString);
console.log("`The number of characters is: " + result);
