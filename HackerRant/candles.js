function birthdayCakeCandles(ar) {
    var max = ar[0];
    var res = 0;
    
    for(var a in ar){
        max = (max < ar[a]) ? max = ar[a] : max = max;  //finds max
    }
    for(var i in ar){
        if(max == ar[i]){
            res++;
        }
    }

    console.log(res);
    

}
birthdayCakeCandles([3, 2, 1, 3])