import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { Howl, Howler } from 'howler';

// audio imports 
import walterWhite from './assets/walterWhite1.mp3';
import jessePinkman from './assets/jessePinkman2.mp3';
import hank from './assets/Hank.mp3';
import gusFring from './assets/gusFring.mp3';
import skylarWhite from './assets/skylarWhite2.mp3';
import walterJr from './assets/walterJr.mp3';
import mikeE from './assets/mikeEhrmantraut2.mp3';
import saulGoodman from './assets/saulGoodman.mp3';
import hectorS from './assets/hectorSalamanca.mp3';
import tucoS from './assets/tucoSalamanca.mp3';
import lydiaR from './assets/lydiaRodarte.mp3';
import todd from './assets/toddAlquist.mp3';
import jane from './assets/janeMargolis1.mp3';
import marie from './assets/marieSchrader.mp3';
import domingo from './assets/domingoMolina.mp3';
import salamanca from './assets/salamanca.mp3';

// audio array

const audioClips = [
  {sound: walterWhite, label: 'Walter White'},
  {sound: jessePinkman, label: 'Jesse Pinkman'},
  {sound: skylarWhite, label: 'Skylar White'},
  {sound: walterJr, label: 'Walter White Jr'},
  {sound: hank, label: 'Hank Schrader'},
  {sound: marie, label: 'Marie Schrader'},
  {sound: mikeE, label: 'Mike Ehramtraut'},
  {sound: saulGoodman, label: 'Saul Goodman'},
  {sound: gusFring, label: 'Gustavo Fring'},
  {sound: hectorS, label: 'Hector Salamanca'},
  {sound: domingo, label: 'Domingo Molina'},
  {sound: tucoS, label: 'Tuco Salamanca'},
  {sound: salamanca, label: 'Marco & Lionel S'},
  {sound: lydiaR, label: 'Lydia Rodarte'},
  {sound: todd, label: 'Todd Alquist'},
  {sound: jane, label: 'Jane Margolis'},
];

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
  // populating the array of sounds in span tags
  showSounds = () => {
    return audioClips.map(( voiceObject, index ) => {
      return (
          <span className="actorSounds" key={ index } onClick={ () => this.BadSounds( voiceObject.sound )}>
            { voiceObject.label }
          </span>
      );
    });
  };

  componentDidMount() {
    this.getCharacters();
    
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
      this.setState({
        breakBadArray: results.data
      });
    });
  };

  // handleClick = (e) => {
  //   // figure out which button was clicked
  //   console.log(e.target.id)
  //   // update the userQuery in state, you can create a secondary parameter in this method and that will give us a call back function. You can call the this.getArt() as the 2nd parameter
  //   this.setState({
  //     userQuery: e.target.id
  //   }, () => this.getCharacters())
  // };


  render() {
    Howler.volume(0.5);
    return (
      <>
        <Header />
        <main>
          <h2 className="intro">Click an image to hear a quote from the character!</h2>
          {/* <nav>
            <ul className="flex">
              <li><button id="good" onClick={this.handleClick}>Good Guys</button></li>
              <li><button id="bad" onClick={this.handleClick}>Bad Guys</button></li>
              <li><button id="men" onClick={this.handleClick}>Men</button></li>
              <li><button id="women" onClick={this.handleClick}>Women</button></li>
            </ul>
          </nav>*/}
          <section>
            <div className="wrapper flex">
              { this.showSounds() }
            </div>
              <h3 class="intro">Here are the Facts!</h3>
            <span className="wrapper flex space">
            { this.state.breakBadArray.map( ( bad, index ) => {
              return (
                <li className="characterBox" key={ index } onClick={ this.playAudio }>
                    <div>
                      <img src={ bad.img } alt={ bad.name }/>
                    </div>
                    <div className="infoBox">
                      <h2>Name: { bad.name }</h2>
                      <h3>Nickname: { bad.nickname }</h3>
                      <p>Birthday: { bad.birthday }</p>
                      <p>Actor: { bad.portrayed }</p>
                      <p>Occupation: { bad.occupation } </p> 
                      <p>Health Statue: { bad.status }</p> 
                      <p>Appearances: { bad.category }</p>
                    </div>
                  </li>
              );
            })}
            </span>
          </section>
          <aside>
            <h3>Breaking Bad API was used to create this App. Photos and audio files are not mine, and are owned by there respective creators</h3>
          </aside>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
