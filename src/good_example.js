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
const greetUser = (name) => {
    const greeting = `Hello, ${name}!`;
    return greeting;
};

// Using const for values that don't change
const PI = 3.14159;
const result = add(5, 3);

// Proper equality check
if (result === 8) {
    console.log('Math works!');
}

// Export functions
module.exports = {
    add,
    greetUser,
    PI
};