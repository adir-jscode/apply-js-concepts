function isFactorial(numbers) {
    var factorial = 1;
    var i = 1;
    while (i <= numbers) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
    
}

var number = 5;
var checkFactorial = isFactorial(number);
console.log(checkFactorial);

// reverse way

function reverseFactorial(number) {
    var fact = 1; 
    var i = number;
    while (i >= 1) {
        fact = fact * i;
        i--;
    }
    return fact;
}

var num = 5;
var reverseFactorial = reverseFactorial(num);
console.log(reverseFactorial);