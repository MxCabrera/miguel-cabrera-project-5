import React, { Component } from 'react';
import './App.css';
import './MediaQueries.css';
import './Setup.css';
import Particles from 'react-particles-js';
import intro from './assets/introSong.mp3';


class Header extends Component {

    // function that plays audio when called
    // scrolls the webpage to desired location.
    badStart = () => {    
        // new audio variable
        this.audio = new Audio(intro);
        this.audio.volume = 0.1;
        // scroll down 800px
        window.scrollTo(0, 640);
        // play audio 
        this.audio.play();
    };

    render() {
        return (
            <>
                {/* particle.js library was used for header  */}
                <header id="particles-js" className="flex">
                <Particles className="transparency" params={{
                    // parameters to change the functionality of the interactive header
                    "particles": {
                        "number": {
                            "value": 37
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
                        <h2 className="headerD">The Informational Sound Board Generator </h2>
                        {/* initial start button that calls badStart function when clicked */}
                        <button className="headerButton" onClick={this.badStart}>Play Me</button>
                    </div>
                </header>
            </>
        );
    };
};

export default Header;