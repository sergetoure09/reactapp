import React from 'react';
import ReactDOM from 'react-dom';
import st from './st.jpg'

import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

var root=document.querySelector('#root')
var state={
    first_name:"Serge Aboubacar",
    last_name:"Toure",
    age:32,
    position:"Senior project manager",
    avatar:{
        img:{st},
        width:"200px",
        height:"200px"
    },

    bio:"A result oriented professional with 8+ years of experience in information system with a focus on gathering business, IT and project management skills.With strong technical background in Information Technology, i have got tangible knowledge, interpersonal skills and experience to walk through complexity of your business and add value while transforming and managing risk to your information system. A talented, self-driven, motivated and confident engineer looking for real challenge in a leading international organization"


}

ReactDOM.render(<App first_name={state.first_name} last_name={state.last_name} position={state.position} img={st} width={state.avatar.width} height={state.avatar.height}   bio={state.bio} age={state.age} />, root)
registerServiceWorker();



document.title='serge'


