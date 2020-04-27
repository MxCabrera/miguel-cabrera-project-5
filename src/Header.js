import React, { Component } from 'react';
import './App.css';
import Logo from './assets/breakingBad1.png';
import intro from './assets/introSong.mp3';

class Header extends Component {
    badStart = () => {    
        this.audio = new Audio(intro);
        window.scrollTo(0, 800);
        this.audio.play();
    };

    render() {
        return (
            <header className="flex">
                {/* <div class="nav">
                    <nav>
                        <ul class="flex">
                            <li><a href="">Breaking Bad API</a></li>
                            <li><a href="">My Portfolio</a></li>
                            <li><a href="">Official Website</a></li>
                        </ul>
                    </nav>
                </div> */}
                <div className="wrapper">
                    <h1 className="headerTitle">Breaking down the Bad</h1>
                    {/* <img src={Logo} alt="Breaking Bad Logo"/> */}
                    <h2 className="headerD">The Informational Sound Board Generator </h2>
                    <button className="headerButton" onClick={this.badStart}>Play Me</button>
                </div>
            </header>
        );
    };
};

export default Header;