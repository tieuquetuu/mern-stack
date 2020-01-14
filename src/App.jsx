var rootNode = document.querySelector("#root");
const continents = ['Africa','America','Asia','Australia','Europe'];
const message = continents.map(c => `Hello ${c}!`).join(' ');
var component = <p>{message}</p>
ReactDOM.render(component, rootNode);


