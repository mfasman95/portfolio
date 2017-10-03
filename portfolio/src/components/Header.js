import React, { Component } from 'react';
import profilePic from './../media/me-icon.png';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <Link to='/'>
          <img src={profilePic} className="App-logo" alt="logo" />
        </Link>
        <h1 className="App-title">Matthew Fasman's Portfolio</h1>
      </header>
    );
  }
}

export default Header;

