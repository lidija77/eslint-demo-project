// React component example (requires React ESLint plugin to fully lint)
// This demonstrates that ESLint needs proper parser configuration for JSX

// Without React parser: ESLint cannot parse JSX syntax (the < character)
// This parsing error shows why framework specific ESLint configuration is important

// WITH React ESLint plugins installed, these issues would be caught:
// - Missing React import (in older React versions)
// - Component naming (should start with capital letter)
// - Missing prop-types validation
// - Missing useEffect dependencies

// Parsing error: JSX syntax not recognized
function MyButton() {
    return <button>Click me</button>;
}

// More JSX that cannot be parsed
function Greeting({ name }) {
    return <h1>Hello, {name}!</h1>;
}

// JSX with event handlers
function Counter() {
    return (
        <div>
            <p>Count: 0</p>
            <button onClick={() => {}}>Increment</button>
        </div>
    );
}

module.exports = {
    MyButton,
    Greeting,
    Counter,
};