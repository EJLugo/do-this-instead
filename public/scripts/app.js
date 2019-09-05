console.log('Hello!');

// let template = <p>This is JSX from app.js</p>;
let appRoot = document.getElementById('app');
var template = React.createElement(
    "h1",
    { id : "someid"},
    "something new"
);

ReactDOM.render(template, appRoot);