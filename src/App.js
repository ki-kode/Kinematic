import React, { Component } from 'react';
import tontsi from './Tontsi.jpg';
import Header from './Header.js';
import Footer from './Footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <img src={tontsi} className="Tontsi" alt="" />
          <Footer />
      </div>
    );
  }
}

export default App;
