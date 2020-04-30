import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js'
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
        <>
                <header id="particles-js" className="flex">
                <Particles className="transparency" params={{
                    "particles": {
                        "number": {
                            "value": 100
                        },
                        "size": {
                            "value": 4
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }, 
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            },
                            resize: true,
                        }
                    }
                }}/>
                    <div className="wrapper">
                        <h1 className="headerTitle">Breaking down the Bad</h1>
                        {/* <img src={Logo} alt="Breaking Bad Logo"/> */}
                        <h2 className="headerD">The Informational Sound Board Generator </h2>
                        <button className="headerButton" onClick={this.badStart}>Play Me</button>
                    </div>
                </header>
            </>
        );
    };
};

export default Header;