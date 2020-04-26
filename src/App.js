import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside'
import axios from 'axios';
import audioClips from './audioClips'
import { Howl, Howler } from 'howler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


// class component 
class App extends Component {

  constructor() {
    super();
    this.state = {
      breakBadArray: [],
    };
  };


  // creating a new Howl that will accept the audioClip array waiting for user click.
  BadSounds = (src) => {
    const sound = new Howl({
      src
    });
    sound.play();
  };


  componentDidMount() {
    this.getCharacters();
    
  };


  getCharacters = () => {
    axios.all([
      axios.get('https://www.breakingbadapi.com/api/characters/'),
      axios.get('https://www.breakingbadapi.com/api/death-count/'),
      axios.get('https://www.breakingbadapi.com/api/quotes/'),
    ]).axios.spread((characters, death, quotes) => {
      console.log(characters, death, quotes)
      this.setState({
        breakBadChar: characters,
        breakBadQuote: quotes,
        breakBadDeath: death
      })
    })
  };


  getCharacters = () => {
    const url = `https://www.breakingbadapi.com/api/characters/`
    axios({
      method: 'GET',
      url: url,
      params: {
        format: 'json',
        limit: 16
      }
    }).then(( results ) => {
      // console.log(results.data)
      this.setState({
        breakBadArray: results.data
      });
    });
  };



  render() {
    Howler.volume(0.5);
    return (
      <>
        <Header />
        <main>
          <h2 className="intro">Click an image to hear a quote from the character!</h2>
          <section>
            <h3 className="intro">Here are the Facts!</h3>
            <span className="wrapper flex space">
            { this.state.breakBadArray.map( ( bad, index ) => {
              return (
                <li className="characterBox" key={ index } onClick={ this.playAudio }>
                  <div>
                    <img src={ bad.img } alt={ bad.name }/>
                  </div>
                  <div className="infoBox">
                    <h2>{ bad.name }</h2>
                    <div className="infoP">
                      <h3>Nickname: { bad.nickname }</h3>
                      <p>Birthday: { bad.birthday }</p>
                      <p>Actor: { bad.portrayed }</p>
                      <p>Occupation: { bad.occupation } </p>
                      <p>Health Statue: { bad.status }</p> 
                      <p>Appearances: { bad.category }</p>
                    </div>
                    <div className="actorSounds" key={index} onClick={() => this.BadSounds(audioClips[bad.name].sound)}>
                      {bad.name} Quote
                    </div>
                  </div>
                </li>
              );
            })}
            </span>
          </section>
          <Aside />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
