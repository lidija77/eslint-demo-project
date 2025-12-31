// This file demonstrates common security issues that ESLint can catch

// Security Risk: Using eval
function dangerousEval(userInput) {
  eval(userInput); // Never do this!
}

// Security Risk: Command injection possibility
const { exec } = require('child_process');

function runCommand(userInput) {
  // Dangerous: user input directly in command
  exec(`ls ${userInput}`, (error, stdout) => {
    console.log(stdout);
  });
}

// Security Risk: SQL injection possibility
function getUserData(userId) {
  // Dangerous: string concatenation in SQL
  const query = `SELECT * FROM users WHERE id = ${userId}`;
  return query;
}

//  SECURITY RISK: Weak random for security purposes
function generateToken() {
  // Math.random() is NOT cryptographically secure
  return Math.random().toString(36).substring(7);
}

//  BETTER: Using crypto for secure random
const crypto = require('crypto');

function generateSecureToken() {
  return crypto.randomBytes(32).toString('hex');
}

module.exports = {
  generateSecureToken,
};
