function isLeapYear(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        return true;
    }
    else {
        return false;
    }
}

var year = 2100;
var checkLeap = isLeapYear(year);
console.log(year + " is a leap year",checkLeap);