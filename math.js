//Absolute
const number = -5;
const absolute = Math.abs(number);
console.log(absolute);

// Ceil,Floor, Random

const floor = 6.7;
const num = Math.floor(floor);
console.log(num);

const ceil = 7.7;
const num2 = Math.ceil(ceil);
console.log(num2);

const randomNumber = Math.random() * 6;
const rounded = Math.round(randomNumber);
console.log(rounded);

// Random number using loop

for (let i = 0; i <= 30; i++){
    const randomNumber = Math.random() * 6;
    const rounded = Math.round(randomNumber);
    console.log(rounded);
}