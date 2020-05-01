import React, { Component } from 'react';
import './App.css';
import { Howl, Howler } from 'howler'
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside'
import './Setup.css';
import axios from 'axios';
import audioClips from './audioClips';
import ReviewBox from './ReviewBox'

class App extends Component {

  constructor() {
    super();
    this.state = {
      breakBadArray: [],
      charArray: [],
      quoteArray: [],
      deathArray: [],
      epArray: [],
      isAnswerShowing: false,
      isSaulThere: false,
      isBadThere: true,
      endpoint1: true,
      endpoint2: false,
      endpoint3: false,
      previousButton: '',
      nextButton: '',
    };
  };

  componentDidMount() {
    this.getApiData();
  }

  getApiData = () => {
    let characters =`https://www.breakingbadapi.com/api/characters?limit=16`
    let quotes = `https://www.breakingbadapi.com/api/quotes/`
    let death = `https://www.breakingbadapi.com/api/deaths/`
    let episodes = `https://www.breakingbadapi.com/api/episodes/`
    const requestOne = axios.get(characters);
    const requestTwo = axios.get(quotes);
    const requestThree = axios.get(death);
    const requestFour = axios.get(episodes)

    axios.all([requestOne, requestTwo, requestThree, requestFour]).then(axios.spread((...responses) => {
      const infoOne = responses[0];
      const infoTwo = responses[1];
      const infoThree = responses[2];
      const infoFour = responses[3];
      // console.log(infoOne, infoTwo, infoThree, infoFour, responses)
      this.setState({
        breakBadArray: responses,
        charArray: [infoOne],
        quoteArray: [infoTwo],
        deathArray: [infoThree],
        epArray: [infoFour]

      })
    })).catch(errors => {
      console.log(errors, 'it didnt work!')
    })
  }

  CreateSounds = (src) => {
    const characterSounds = src;
    const random = characterSounds[Math.floor(Math.random() * characterSounds.length)];
    this.BadSounds(random)
  }


  // creating a new Howl that will accept the audioClip array waiting for user click.
  BadSounds = (src) => {
    const sound = new Howl({
      src
    });
    // console.log(sound)
    // if previous sound is already playing, pause it. if not, play new click.
    sound.play()
  };


  scrollUp = () => {
    window.scrollTo(0,0)
  }


  render(){
    Howler.volume(0.5);
    console.log(audioClips)
    return (
      <>
      <Header />
      <main>
        <section>
            <h1 className="intro">Albuquerques Most Wanted List</h1>
            <h3 className="hover">If you've seen them, call DEA</h3>
            <h3 className="hover">*click to hear your favourite character*</h3>
            <div>
              <button 
              className="topicButtons" 
              onClick={() => this.setState({endpoint3: !this.state.endpoint3, endpoint1: false, endpoint2: false})}
              >Shows</button>
              <button 
              className="topicButtons" 
              onClick={()=> this.setState({endpoint1 : !this.state.endpoint1, endpoint2: false, endpoint3: false})}
              >Sound Board</button>
              <button 
              className="topicButtons" 
              onClick={() => this.setState({endpoint2: !this.state.endpoint2, endpoint1: false, endpoint3: false})}
              >Deaths</button>
            </div>
          <div className="wrapper flex space">
            <span className={this.state.endpoint1 ? "flex" : "endpoint1"}>
            {this.state.charArray.map((allBadInfo, index)=>{
              const results = allBadInfo.data
              return(
                results.map((deeper)=>{
                  return(
                    <div className="actorSound" key={index} onClick={() => this.CreateSounds(audioClips[deeper.name].sound)}>
                      <li className="characterBox" key={index}>
                        <div>
                          <img src={deeper.img} alt="" />
                        </div>
                        <div className="infoBox">
                          <h2>{deeper.name}</h2>
                          <div className="infoP">
                            <h3><span className="infoStats">Nickname:</span> {deeper.nickname}</h3>
                            <p><span className="infoStats">Birthday:</span> {deeper.birthday}</p>
                            <p><span className="infoStats">Actor:</span><a href={audioClips[deeper.name].link}> {deeper.portrayed}</a> </p>
                            <p><span className="infoStats">Occupation:</span> {deeper.occupation} </p>
                            <p><span className="infoStats">Health Statue:</span> {deeper.status}</p>
                            <p><span className="infoStats">Appearances:</span> {deeper.category}</p>
                            <p><span className="infoStats">Quote:</span> {audioClips[deeper.name].quote}</p>
                          </div>
                        </div>
                        <span className="pin">O</span>
                      </li>
                    </div>
                  )
                })
              )
            })}

            {/* Quote Endpoint */}
            <div className="quoteBox">

              <h2 className="quoteTop">Guess who said it?!</h2>        
              {this.state.quoteArray.map((quoteStuff)=>{
                const quoteResults = quoteStuff.data
                
                return(
                  
                  quoteResults.map((singleQuote)=>{
                    if(singleQuote.quote_id <= '9' && singleQuote.quote_id >= '7') {
                      return(
                        <div className="quoteQuestions">
                        <h2>"{singleQuote.quote}"</h2>
                        <div className={ this.state.isAnswerShowing ? "displayNone" : "quizChoices"}>
                          <label for="quotes1"><input type="radio" id="quotez1" name="tinyQuiz1"/> Saul Goodman</label>
                          <label for="quotes2"><input type="radio" id="quotez2" name="tinyQuiz2" /> Jesse Pinkman</label>
                          <label for="quotes3"><input type="radio" id="quotez3" name="tinyQuiz3" /> Walter White</label>
                        </div>
                        <h3 className={ this.state.isAnswerShowing ? "quoteAnswers" : "displayNone"}>Answer: {singleQuote.author}</h3>
                        </div>
                      )
                    }
                  })
                  )
                })}
                <button 
                className="quoteButton"
                onClick={() => {
                  this.setState({
                    isAnswerShowing: !this.state.isAnswerShowing
                  })}}>Click here to find out</button>
              </div>
            </span>


            {/* deaths endpoint */}
            <div className={this.state.endpoint2 ? "" : "endpoint2"}>
              <h2 className="deathTitle">Death List</h2>
              <h3 className="spoilers">*Warning: SPOILERS*</h3>
                <div className="flex">
                {this.state.deathArray.map((deathStuff) => {
                  const deathResults = deathStuff.data
                  // console.log(deathResults)
                  return (
                    deathResults.map((singleDeath) => {
                      return (
                        <div className="BscDiv">
                          <h3 className="deathInfoT">Deceased: </h3>
                          <h3 className="deathInfoT"> <span className="whoDied">{singleDeath.death}</span></h3>
                          <p className="deathInfo">Cause of Death: {singleDeath.cause} </p>
                          <p className="deathInfo">Responsible: { singleDeath.responsible } </p>
                          <p className="deathInfo">Last words: "{singleDeath.last_words}"</p>
                          <p className="deathInfo"> Cause of Death: { singleDeath.cause } </p>
                          <p className="deathInfo">What episode: Season {singleDeath.season}, Episode {singleDeath.episode}</p>
                        </div>
                      )
                    })
                  )
                })}
              </div>
            </div>


            {/* Seasons Endpoint */}
            <div className={this.state.endpoint3 ? "" : "endpoint3"}>

            <h2 className="deathTitle">Season Breakdown</h2>
            <div>
            <button 
              className="topicButtons"
              onClick={()=> this.setState({isBadThere : !this.state.isBadThere, isSaulThere: false})}
              >Breaking Bad
            </button>
            <button 
              className="topicButtons"
              onClick={() => this.setState({ isSaulThere: !this.state.isSaulThere, isBadThere: false })}
              >Better Call Saul
            </button>
            </div>
            <div className="flex">
            {this.state.epArray.map((tvStuff)=>{
              let tvResults = tvStuff.data
              return(
                tvResults.map((singleEp)=>{
                  if (singleEp.series === 'Breaking Bad'){
                    return(
                      <>
                        <div className={this.state.isBadThere ? "BBDiv" : 'breakingBadDiv'}>
                          <h2>Season: {singleEp.season}, Episode #{singleEp.episode}</h2>
                          <p>Title: {singleEp.title}</p>
                          <p>Release Date: {singleEp.air_date}</p>
                          <p> Characters Involved:</p>
                          <p>{singleEp.characters}</p>
                        </div>
                      </>
                    )
                  } else if (singleEp.series === 'Better Call Saul') {
                    return(
                      <>
                        <div className={this.state.isSaulThere ? "BBDiv2" : "betterCallSaulDiv"}>
                          <h2>Season: {singleEp.season}, Episode #{singleEp.episode}</h2>
                          <p>Title: {singleEp.title}</p>
                          <p>Release Date: {singleEp.air_date}</p>
                          <p> Characters Involved:</p>
                          <p>{singleEp.characters}</p>
                        </div>
                      </>
                    )
                  }
                })
              )
            })}
                </div>
            </div>
            <h2 className="scrollUp" onClick={this.scrollUp}>Click to go back to the top</h2>
          </div>
          <ReviewBox />
        </section>
        <Aside />
      </main>
      <Footer />
      </>
    );
  }
}

export default App;