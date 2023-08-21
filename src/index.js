let price = 4.5;

//JavaScript Math Challenge 1 - Rounded Value
console.log(Math.round(price));
//5

//JavaScript Math Challenge 2 - Round it up
console.log(Math.ceil(price));
//5

//JavaScript Math Challenge 3 - Round it down
console.log(Math.floor(price));
//4

//JavaScript Math Challenge 4
console.log(Math.min(4, 1, 3, 10));
//1

//JavaScript Math Challenge 5
console.log(Math.max(4, 1, 3, 10));
//10

//JavaScript Math Extra Practice - Round
//Math.round();
// Rounds a number to the nearest whole number.
// If the decimal part of the number is 0.5 or greater, it rounds up.
// If the decimal part of the number is less than 0.5, it rounds down.
let number = 2.4;
console.log(number);
//2.4
number = Math.round(number);
console.log(number);
//3
let number2 = 2.8;
number2 = Math.round(2.8);
console.log(number2);
//3
let number3 = 5.2;
number3 = Math.round(5.2);
console.log(number3);
//5

//JavaScript Math Extra Practice - Floor
let number4 = 7.5;
number4 = Math.floor(number4);
console.log(number4);
//7
let number5 = 13.8;
number5 = Math.floor(number5);
console.log(number5);
//13

//JavaScript Math Extra Practice - Ceil
//Math.ceil(): Always rounds a number up
//to the nearest whole number, irrespective of its decimal part.
let number6 = 16.7;
number6 = Math.ceil(number6);
console.log(number6);
//17
let number7 = 23.3;
number7 = Math.ceil(number7);
console.log(number7);
//24

// Difference between Math.min() and Math.max():
// These functions are used to determine the smallest and
//largest numbers in a given set of numbers respectively.
// Math.min():
// Returns the smallest of zero or more numbers.
//Math.max():
//Returns the largest of zero or more numbers.

//JavaScript Math Extra Practice - Min
console.log(Math.min(23.6, 22.6));
//22.6
console.log(Math.min(27.5, 32.6));
//27.5
console.log(Math.min(19.5, 25.7, 32.6));
//19.5

//JavaScript Math Extra Practice - Max
console.log(Math.max(21.9, 27.6));
//22.6
console.log(Math.max(41.5, 32.6));
//41.5
console.log(Math.max(34.5, 25.7, 32.6));
//34.5

//Math.random() is a built-in JavaScript function
//that returns a pseudo-random floating-point number
//in the range [0, 1), meaning it can return any number between 0 and 1.
//The number generated is always greater than or equal to 0 and less than 1.
//This number is a completely random number between 0 and 1.
//There is no way of predicting the number.

//JavaScript Math Extra Practice - Random
console.log(Math.random());
