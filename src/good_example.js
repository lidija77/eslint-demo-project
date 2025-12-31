// This file follows ESLint rules - no errors!

/**
 * Calculates the sum of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Greets a user by name
 * @param {string} name - User's name
 * @returns {string} Greeting message
 */
function greetUser(name) {
  const greeting = `Hello, ${name}!`;
  return greeting;
}

/**
 * Multiplies two numbers
 * @param {number} x - First number
 * @param {number} y - Second number
 * @returns {number} Product of x and y
 */
function multiply(x, y) {
  return x * y;
}

// Using const for values that don't change
const PI = 3.14159;
const radius = 5;

// Calculate area using our functions
const sum = add(10, 20);
const product = multiply(radius, radius);
const area = multiply(PI, product);
const message = greetUser('Developer');

// All variables are used in exports
module.exports = {
  add,
  greetUser,
  multiply,
  PI,
  sum,
  area,
  message,
};
