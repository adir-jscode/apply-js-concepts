function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

number = 4;
var even = isEven(number);
console.log(even);

// Check odd

function isOdd(number) {
    if (number % 2 != 0) {
        return true;
    }
    else {
        return false;
    }
}

var number = 3;
var odd = isOdd(number);
console.log( number + " is  odd ", odd);