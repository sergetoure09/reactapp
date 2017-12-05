import React from 'react';
import ReactDOM from 'react-dom';
import st from './st.jpg'
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

var root=document.querySelector('#root')

  /*
  first_name={state.first_name} last_name={state.last_name} 
    position={state.position} img={st} width={state.avatar.width} height={state.avatar.height}  
    bio={state.bio} age={state.age}*/

ReactDOM.render(<App />, root)
registerServiceWorker();



document.title='AppToure'


