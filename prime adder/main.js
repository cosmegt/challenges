var primer = function(n) {
    // Eratosthenes Sieve Algorithm //source:: wikipedia
    var array = [], upperLimit = Math.sqrt(n), output = [];

    // Make array from n #
    for (var i = 0; i < n; i++) {
        array.push(true);
    }
    console.log(array);
    // Remove multiples
    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    //The rest are primes
    for (var i = 2; i < n; i++) {
        if(array[i]) {
            output.push(i);
        }
    }

    return output;
};

var adder = function(n){
    //callback for primes
    var primes = primer(n);
    
    //w3 schools method to add array
    function getSum(total, num) {
        return total + num;
    }
    console.log(primes.reduce(getSum));
}


//as many primes youll like
adder(2000000);
