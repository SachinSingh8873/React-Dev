// <div id="parent">
// <div id="child">
// <h1 id="heading">I am heading <\h1>
// </div>
// </div>
// 
// 
const parent=React.createElement("div", {id:"parent"},
    React.createElement("div", {id:"child"},
        React.createElement("h1", {id:"heading"},"I am Heading")));
        const ele=ReactDOM.createRoot(document.getElementById("rot"));
// const heading = React.createElement("h1", {id:"heading"}, "Hello world from react!");
// const root = ReactDOM.createRoot(document.getElementById("rot"));
ele.render(parent);