//function that display pattern in  way

function displayPattern(rows) {
    for (let i = 0; i < rows; i++) {
        let row = "";
        for (let j = 0; j < rows; j++) {
            if (j >= i) {
                row += "1 ";
            } else {
                row += "0 ";
            }
        }
        console.log(row.trim());
    }
}
displayPattern(4,4)


