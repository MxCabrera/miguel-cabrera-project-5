import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import axios from 'axios';
import walterWhite from './assets/walterWhite1.mp3';
import jessePinkman from './assets/jessePinkman2.mp3';
import hank from './assets/Hank.mp3';
import gusFring from './assets/gusFring.mp3';
import skylarWhite from './assets/skylarWhite2.mp3'
import { Howl, Howler } from 'howler';

const audioClips = [

  {sound: walterWhite, label: 'Walter White'},
  {sound: jessePinkman, label: 'Jesse Pinkman'},
  {sound: hank, label: 'Hank Schrader'},
  {sound: gusFring, label: 'Gus Fring' },
  { sound: skylarWhite, label: 'Skylar White'}
]

class App extends Component {
  constructor(){
    super();
    this.state = {
      breakBadArray: [],
    };
  }

  BadSounds = (src) => {
    const sound = new Howl({
      src
    })
    sound.play()
  }

  RenderButtonAndSound = () => {
    return audioClips.map((soundObject, index) => {
      return(
        <span className="actorSounds" key={index} onClick={() => this.BadSounds(soundObject.sound)}>
          {soundObject.label}
        </span>
      )
    })
  }

  componentDidMount(){
    this.getCharacters();
    
  }

  getCharacters = () => {
    const url = `https://www.breakingbadapi.com/api/characters/`
    axios({
      method: 'GET',
      url: url,
      params: {
        format: 'json',
        limit: 16
      }
    }).then((results) => {
      this.setState({
        breakBadArray: results.data
      })
    })
  }


  handleClick = (e) => {
    // figure out which button was clicked
    console.log(e.target.id)
    // update the userQuery in state, you can create a secondary parameter in this method and that will give us a call back function. You can call the this.getArt() as the 2nd parameter
    this.setState({
      userQuery: e.target.id
    }, () => this.getCharacters())
  };


  render(){
    Howler.volume(1.0)
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
          </nav>      */}
          <section>
              {this.RenderButtonAndSound()}
            <span className="wrapper flex space">
            {this.state.breakBadArray.map((bad, i)=>{
              return(
                <li className="characterBox" key={i} onClick={this.playAudio}>
                    {/* <audio className="audio-element">
                      <source src="https://api.coderrocketfuel.com/assets/pomodoro-times-up.mp3"></source>
                    </audio> */}
                    <div>
                    <img src={bad.img} alt={bad.name}/>
                    </div>
                    <div className="infoBox">
                      <h2>Name: {bad.name}</h2>
                      <h3>Nickname: {bad.nickname}</h3>
                      <p>Birthday: {bad.birthday}</p>
                      <p>Actor: {bad.portrayed}</p>
                      <p>Occupation: {bad.occupation} </p> 
                      <p>Health Statue: {bad.status}</p> 
                      <p>Appearances: {bad.category}</p>
                    </div>
                  </li>
              )
            })}
            </span>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
