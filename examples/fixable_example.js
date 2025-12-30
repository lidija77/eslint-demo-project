// This file has violations that ESLint can auto-fix with 'npm run lint:fix'

// Issues: var, double quotes, no semicolon
var message = "Hello World"

// Issues: spacing, semicolon
function calculate(){
    var x=5+3
    return x
}

// Issue: let instead of const
let config = {
    name: "demo",
    version: 1
}

// Issue: inconsistent quotes
var firstName = 'John'
var lastName = "Doe"

console.log(message)