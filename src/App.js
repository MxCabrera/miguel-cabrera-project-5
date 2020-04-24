import React, { Component } from 'react';
import './App.css';
import Main from './Main'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      breakBadArray: [],
    };
  }

  componentDidMount(){
    this.getCharacters();
    
  }
  playAudio = () => {
    // let audioEl = document.getElementsByClassName("audio-element");
    // audioEl.play()
    console.log('heyyyyyyyyyy')
  }
  getCharacters = () => {
    // const breakingBadWords = ['death-count', 'characters', 'quotes', 'random']
    // const category = this.state
    const url = `https://www.breakingbadapi.com/api/characters/`
    axios({
      method: 'GET',
      url: url,
      params: {
        format: 'json',
        limit: 15
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
    // call the getArt after the id has changes once the button has been clicked
  }
  render(){
    return (
      <>
        <Header /> 
        <nav>
          <ul className="flex">
            <li><button id="good" onClick={this.handleClick}>Good Guys</button></li>
            <li><button id="bad" onClick={this.handleClick}>Bad Guys</button></li>
            <li><button id="men" onClick={this.handleClick}>Men</button></li>
            <li><button id="women" onClick={this.handleClick}>Women</button></li>
          </ul>
        </nav>     
        <Main />
        <section>
          {this.state.breakBadArray.map((bad, i)=>{
            // console.log(bad)
            return(
              <div className="wrapper flex">
                <li key={i} onClick={this.playAudio}>
                  <audio className="audio-element">
                    <source src="https://api.coderrocketfuel.com/assets/pomodoro-times-up.mp3"></source>
                  </audio>
                  <h2>Name: {bad.name}</h2>
                  <img src={bad.img} alt={bad.name}/>
                  <h3>Nickname: {bad.nickname}</h3>
                  <p>Actor: {bad.portrayed}</p>
                  <p>Occupation: {bad.occupation} </p> 
                </li>
              </div>
            )
          })}
        </section>
        <Footer />
      </>
    );
  }
}

export default App;
