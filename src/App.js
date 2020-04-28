import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside'
import axios from 'axios';
import audioClips from './audioClips'
import { Howl, Howler } from 'howler';


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


  // getCharacters = () => {
  //   axios.all([
  //     axios.get('https://www.breakingbadapi.com/api/characters/'),
  //     axios.get('https://www.breakingbadapi.com/api/death-count/'),
  //     axios.get('https://www.breakingbadapi.com/api/quotes/'),
  //   ]).axios.spread((characters, death, quotes) => {
  //     console.log(characters, death, quotes)
  //     this.setState({
  //       breakBadChar: characters,
  //       breakBadQuote: quotes,
  //       breakBadDeath: death
  //     })
  //   })
  // };


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
          <h2 className="intro">Albuquerques Most Wanted List</h2>
          <section>
            <h3 className="hover">If you've seen them, call DEA</h3>
            <h3 className="hover">*click to hear your favourite character*</h3>
            <div className="wrapper flex space">
            { this.state.breakBadArray.map( ( bad, index ) => {
              return (
                <div className="actorSound" key={index} onClick={() => this.BadSounds(audioClips[bad.name].sound)}>
                  <li className="characterBox" key={ index }>
                    <div>
                      <img src={ bad.img } alt={ bad.name }/>
                    </div>
                    <div className="infoBox">
                      <h2>{ bad.name }</h2>
                      <div className="infoP">
                        <h3><span className="infoStats">Nickname:</span> { bad.nickname }</h3>
                        <p><span className="infoStats">Birthday:</span> { bad.birthday }</p>
                        <p><span className="infoStats">Actor:</span> <a href={audioClips[bad.name].link}>{bad.portrayed}</a></p>
                        <p><span className="infoStats">Occupation:</span> { bad.occupation } </p>
                        <p><span className="infoStats">Health Statue:</span> { bad.status }</p> 
                        <p><span className="infoStats">Appearances:</span> { bad.category }</p>
                        <p><span className="infoStats">Quote:</span>  "{audioClips[bad.name].quote}"</p>
                      </div>
                    </div>
                    <span className="pin">O</span>
                  </li>
                </div>
              );
            })}
            </div>
          </section>
          <Aside />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
