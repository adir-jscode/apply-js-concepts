function isFactorial(number) {
    var factorial = 1
    for (var i = 1; i <= number; i++) {
        factorial = factorial * i;
        
    }
    return factorial;
}

var factorial = isFactorial(5);
console.log(factorial);
