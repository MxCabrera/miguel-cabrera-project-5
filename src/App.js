import React, { Component } from 'react';
import './App.css';
import Main from './Main'

class App extends Component {
  constructor(){
    super();
    this.state = {}
  }
  render(){
    return (
      <header>
        <h1>Miguel Cabrera - React Project 5</h1>
          <Main />
      </header>
    );
  }
}

export default App;
