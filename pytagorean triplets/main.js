function sqr(n, g) {
    if (!g) {
        // Take an initial guess at the square root
        g = n / 2.0;
    }
    var d = n / g;              // Divide our guess into the number
    var ng = (d + g) / 2.0;     // Use average of g and d as our new guess
    if (g == ng) {          
        // The new guess is the same as the old guess; further guesses
        // can get no more accurate so we return this guess
        return g;
    }
    // Recursively solve for closer and closer approximations of the square root
    return sqr(n, ng);
}

console.log(sqr(256)); // 6.48074069840786
// console.log(Math.sqrt(42)) about the same speed
