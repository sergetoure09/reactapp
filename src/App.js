import React, { Component } from 'react';
import './App.css';
import '../node_modules/bulma/css/bulma.css'


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:props.first_name,
      last_name:props.last_name,
      position:props.position,
      avatar:{
        img:props.img,
        width:props.width,
        height:props.height
      },
      bio:props.bio,
      age:props.age
    }

  }

  update(state){
    this.setState({
      first_name:state.last_name,
      last_name:state.last_name,
      position:state.position,
      avatar:{
        img:state.img,
        width:state.avatar.width,
        height:state.avatar.height},

      bio:state.bio,
      age:state.age
    })
  }
  render(){
    return (
      <div>
        <div>
        <img src={this.state.avatar.img} alt="" width={this.state.avatar.width} height={this.state.avatar.height} />
        </div>
        <div>
        <h1>{this.state.first_name} {this.state.last_name}</h1>
        <span>{this.state.age}</span> ans <h2><strong>{this.state.position}</strong></h2>
        <h3>BIO</h3>
        <p className="content">{this.state.bio}</p>
        </div>
        
      </div>
    ) 
   }
}
  


export default App;
