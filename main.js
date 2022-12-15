import React from 'react';
import ReactDOM from 'react-dom';

function App () {
    return (
        <div>Hejka</div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));

const newEl = document.createElement("p");
newEl.innerHTML = "dziala";
document.getElementById('test').appendChild(newEl);