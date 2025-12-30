// React component example (requires React ESLint plugin to fully lint)
// This shows what React-specific rules would catch

//  Missing React import (in older React versions)
//  Component not using proper naming convention
function myComponent() {
    return <div>Hello</div>;
}

//  Missing prop-types
function UserCard(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.email}</p>
        </div>
    );
}

//  Missing dependency in useEffect
function ExampleComponent({ count }) {
    useEffect(() => {
        console.log(count);
    }, []); // Missing 'count' in dependency array

    return <div>{count}</div>;
}