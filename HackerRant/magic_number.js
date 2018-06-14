function formingMagicSquare(s) {
    function checkSquare(){
        const rows = []; //summing rows
        for(var x in s){
            var row = 0;
            for(var a in s){
                row += s[x][a]
            }
            rows.push(row);
        }

        const columns = [] //summing columns
        for(var x in s){
            var column = 0;
            for(var a in s){
                column += s[a][x]
            }
            columns.push(column)
        }
    }
}

var square=[
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 5]
]
formingMagicSquare(square);