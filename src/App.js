import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
