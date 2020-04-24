import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  badStart = () => {
    window.scrollTo(0, 800)
  }
  render() {
    return (
        <header className="flex">
            <div className="wrapper">
                <h1>Breaking down the Bad</h1>
                <p>Based on the 2014 Best Tv Series - Breaking Bad </p>
                <button onClick={this.badStart}>Click here to start</button>
            </div>
        </header>
    )
  }
}

export default Header;