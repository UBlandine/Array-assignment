function displayPattern(rows){
    for(let i=0; i<rows; i++){
        var row = "";
        for(let j=rows; j>=0; j--){
            if(j===i){
                row += "1 ";
            }
            else{
                row += "  ";
            }
            
        }
        console.log(row);
       
    }
}
displayPattern(4);