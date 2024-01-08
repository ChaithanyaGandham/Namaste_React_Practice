import React from "react";
import ReactDOM from "react-dom/client";

// Nested Header Element using React.createElement

// const nestedReactElement = React.createElement("div", {className: "title"}, [
//     React.createElement("h1", {}, "I am h1 tag"),
//     React.createElement("h2", {}, "I am h2 tag"),
//     React.createElement("h3", {}, "I am h3 tag")
// ]);

// Nested Header Element using JSX!

// const nestedReactElement = (
//     <div className="title">
//         <h1>I am h1 tag!</h1>
//         <h2>I am h2 tag!</h2>
//         <h3>I am h3 tag!</h3>
//     </div>
// )

// Create a functional Component for the nested HTML and passing attributes into the tag.

const Component = () => {
    return (
        <div className="title">
            <h1 id="h1">I am h1 tag!</h1>
            <h2 tabIndex="2">I am h2 tag!</h2>
            <h3 className="h3">I am h3 tag!</h3>
        </div>
    )
}

// Component Composition!

const Component2 = () => {
    return (
        <div className="sub">
            <span>Welcome to the React series!</span>
            <Component />
            <Component></Component>
            {Component()}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component2 />);