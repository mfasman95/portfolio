import React, { Component } from 'react';
import './css/App.css';
import Router from './components/Router';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Router/>
      </div>
    );
  }
}

export default App;
