// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(isSum50)

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(isTwoOdd)

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(isOver25)

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(isUnique)

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
console.log(isValid)

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);



  // const n1 = 10;
  // const n2 = 15;
  // const n3 = 20;
  // const n4 = 5;
  
//   Check if all numbers are divisible by 5. Cache the result in a variable.
let divisibleBy5 = (n1 % 5 && n2 % 5 && n3 % 5 && n4 % 5) == 0;
console.log(divisibleBy5);

// Check if the first number is larger than the last. Cache the result in a variable.
let firstIsBigger = n1 > n4
console.log(firstIsBigger);

// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
let firstQuest = n2 -n1
console.log(firstQuest)

// Multiply the result by the third number.
let secondQuest = firstQuest * n3
console.log(secondQuest)

// Find the remainder of dividing the result by the fourth number.
let forthQuest = secondQuest % n4
console.log(forthQuest)

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
let under25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
console.log (under25)


// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.
// Set up a program to answer the following questions:

// How many gallons of fuel will you need for the entire trip?
let fuel1 = 1500 / 30;
console.log (fuel1)

let fuel2 = 1500 / 28;
console.log (fuel2)

let fuel3 = 1500 / 23;
console.log (fuel3)

let fuel4 = (fuel1 + fuel2 + fuel3) / 3;
console.log ('You will need atleast' + ' $ ' + fuel4 + ' for the trip ')

// Will your budget be enough to cover the fuel expense?
let budget = 175
let expense = ( budget - fuel4)
console.log (expense)
// How long will the trip take, in hours?
const distance1 = 1500 / 55;
console.log (distance1)

let distance2 = 1500 / 60;
console.log (distance2)

let distance3 = 1500 / 75;
console.log (distance3)
// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
let result1 = 175 - distance1
console.log (result1)

let result2 = 175 - distance2
console.log (result2)

let result3 = 175 - distance3
console.log (result3)

console.log ("option two makes the best sense")

// Log the results of your calculations using string concatenation or template literals.


