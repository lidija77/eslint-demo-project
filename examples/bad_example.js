// This file has MANY ESLint violations - try running 'npm run lint:examples' to see them!

//  Using var instead of const/let
var userName = "Alice"

//  Using double quotes instead of single quotes
var city = "Vienna"

//  Missing semicolons
var age = 25

//  Unused variable
var unusedVariable = "This is never used"

//  Using == instead of ===
if (age == "25") {
    console.log("Age check")
}

//  Variable never changes but using let
let constantValue = 42
console.log(constantValue)

//  Inconsistent function declaration
function badFunction(){
    //  Poor spacing
    var x=5+3
    return x
}

//  Console.log in production code
console.log("Debug statement left in code")

//  Unreachable code
function unreachableExample() {
    return true
    console.log("This will never execute")
}

//  Using eval (security risk)
var userInput = "alert('test')"
// eval(userInput) // Uncomment to see ESLint error

//  Not using arrow functions for callbacks
var numbers = [1, 2, 3, 4, 5]
var doubled = numbers.map(function(n) {
    return n * 2
})