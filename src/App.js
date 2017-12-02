import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Serge Toure React App</h1>
        </header>
        <p className="App-intro">
          <code>Let's have fun!</code> 
        </p>
      </div>
    );
  }
}

export default App;
