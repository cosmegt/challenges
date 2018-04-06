const term = 10;
var seq = [1,2];
var sum = 0; 

for(var i = 0; i < term; i++){
    if(seq[i-2] == null || seq[i-1] == null){}
    else{
        num = seq[i-1] + seq[i-2]
        seq[i] = num;
        sum += num + sum;
    }
}

console.log(seq);
console.log("sum: " + sum);

