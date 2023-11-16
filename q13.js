//functin that display pattern row

function displayPattern(rows) {
    for (let i = 0; i < rows; i++) {
        let row = "";
        for (let j = 0; j < rows; j++) {
            if (i === 0 || i === rows - 1 || j === 0 || j === rows - 1) {
                row += "1 ";
            } else {
                row += "0 ";
            }
        }
        console.log(row);
    }
}
displayPattern(5);

































































































