function staircase(n) {
    for(var i = 1; i < n+1; i++){
        var str = "";
        for(var a = n; a > i; a--){
            str+=" "
        }
        for(var a = 0; a < i; a++){
            str += "#";
        }
        console.log(str); 
    }
}
staircase(6)