function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}

var dadiInches = 146;
var feet = inchToFeet(dadiInches);
console.log(feet);

// Miles to Km

function mileToKm(miles) {
    var km = miles * 1.60934;
    return km;

}

var mile = 42;
var km = mileToKm(mile);
console.log(km);