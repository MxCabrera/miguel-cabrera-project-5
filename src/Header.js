import React, { Component } from 'react';
import './App.css';
import Logo from './assets/breakingBad1.png'

class Header extends Component {
    badStart = () => {
    window.scrollTo(0, 800);
    };
    render() {
        return (
            <header className="flex">
                <div className="wrapper">
                    <h1 className="headerTitle">Breaking down the Bad</h1>
                    {/* <img src={Logo} alt="Breaking Bad Logo"/> */}
                    <h2 class="headerD">Sound Board Generator </h2>
                    <button className="headerButton" onClick={this.badStart}>Click to Start</button>
                </div>
            </header>
        )
    }
}

export default Header;