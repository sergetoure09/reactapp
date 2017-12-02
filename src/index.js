import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

var main=document.querySelector('#main')
var root=document.getElementById('root')
var content=document.getElementById('content')



ReactDOM.render(<App />, root)
registerServiceWorker();

const serguey={
    firstname:'Serge',
    lastname:'Toure'
}

function formatName(user){
    return user.lastname+' '+user.firstname
}

const element=(<h1>
    This guy is awesome and his name is {formatName(serguey)}
    </h1>);  


ReactDOM.render(element,main);

function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(
      element,
      content
    );
  }
  
  setInterval(tick, 5000);


document.title='serge'


