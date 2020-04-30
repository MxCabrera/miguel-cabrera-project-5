import React, { Component } from 'react';
import './App.css';
import { Howl, Howler } from 'howler'
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside'
import './Setup.css';
import axios from 'axios';
import audioClips from './audioClips'

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
      endpoint3: false
    };
  };

  componentDidMount() {
    this.getApiData()
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
    const sound = new Howl({
      src
    });
    this.BadSounds(src)
    sound.stop()
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


  render(){
    Howler.volume(0.5);
    return (
      <>
      <Header />
      <main>
        <section>
            <h2 className="intro">Albuquerques Most Wanted List</h2>
            <h3 className="hover">If you've seen them, call DEA</h3>
            <h3 className="hover">*click to hear your favourite character*</h3>
            <div>
              <button onClick={() => this.setState({endpoint3: !this.state.endpoint3, endpoint1: false, endpoint2: false})}>Shows</button>
              <button onClick={()=> this.setState({endpoint1 : !this.state.endpoint1, endpoint2: false, endpoint3: false})}>Sound Board</button>
              <button onClick={() => this.setState({endpoint2: !this.state.endpoint2, endpoint1: false, endpoint3: false})}>Deaths</button>
            </div>
          <div className="wrapper flex space">
            <span className={this.state.endpoint1 ? "flex" : "endpoint1"}>
            {this.state.charArray.map((allBadInfo, index)=>{
              // console.log(allBadInfo.data)
              const results = allBadInfo.data
              return(
                results.map((deeper)=>{
                  // console.log(deeper)
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
                            <p><span className="infoStats">Actor:</span>{deeper.portrayed}</p>
                            <p><span className="infoStats">Occupation:</span> {deeper.occupation} </p>
                            <p><span className="infoStats">Health Statue:</span> {deeper.status}</p>
                            <p><span className="infoStats">Appearances:</span> {deeper.category}</p>
                            <p><span className="infoStats">Quote:</span>{deeper.quote}</p>
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

              <h1 className="quoteTop">Who said it?!</h1>        
              {this.state.quoteArray.map((quoteStuff)=>{
                const quoteResults = quoteStuff.data
                
                return(
                  
                  quoteResults.map((singleQuote)=>{
                    if(singleQuote.quote_id <= '9' && singleQuote.quote_id >= '7') {
                      return(
                        <>
                        <h2>{singleQuote.quote}</h2>
                        <div className="quizChoices">
                          <label><input type="radio"/>Saul Goodman</label>
                          <label><input type="radio" />Jesse Pinkman</label>
                          <label><input type="radio" />Walter White</label>
                        </div>
                        <h3 className={ this.state.isAnswerShowing ? "" : 'displayNone'}>Answer: {singleQuote.author}</h3>
                        </>
                      )
                    }
                  })
                  )
                })}
                <button onClick={() => {
                  this.setState({
                    isAnswerShowing: !this.state.isAnswerShowing
                  }

                  )}}>Click here to find out</button>
            </div>
            </span>


            {/* deaths endpoint */}
            <div className={this.state.endpoint2 ? "" : "endpoint2"}>
            {this.state.deathArray.map((deathStuff) => {
              const deathResults = deathStuff.data
              // console.log(deathResults)
              return (
                deathResults.map((singleDeath) => {
                  return (
                    <>
                      <h1>Who Died: {singleDeath.death}</h1>
                      <h2>Cause of Death: {singleDeath.cause} </h2>
                      <h2> Responsible: { singleDeath.responsible } </h2>
                      <h3>Last words: {singleDeath.last_words}</h3>
                      <h2> Cause of Death: { singleDeath.cause } </h2>
                      <p>What episode: Season {singleDeath.season}, Episode {singleDeath.episode}</p>
                    </>
                  )
                })
              )
            })}
            </div>


            {/* Seasons Endpoint */}
            <div className={this.state.endpoint3 ? "" : "endpoint3"}>

            <h1>Season Breakdown</h1>
            <div>
            <button onClick={()=> this.setState({isBadThere : !this.state.isBadThere, isSaulThere: false})}>Breaking Bad</button>
            <button onClick={() => this.setState({ isSaulThere: !this.state.isSaulThere, isBadThere: false })}>Better Call Saul</button>

            </div>
            {this.state.epArray.map((tvStuff)=>{
              let tvResults = tvStuff.data
              return(
                tvResults.map((singleEp)=>{
                  if (singleEp.series === 'Breaking Bad'){
                    return(
                      <>
                        <div className={this.state.isBadThere ? "" : 'breakingBadDiv'}>
                          <h1>Season: {singleEp.season}</h1>
                          <h2>Episode #{singleEp.episode}</h2>
                          <h2>Title: {singleEp.title}</h2>
                          <h2>{singleEp.air_date}</h2>
                          <p>Characters Involved: {singleEp.characters}</p>
                        </div>
                      </>
                    )
                  } else if (singleEp.series === 'Better Call Saul') {
                    return(
                      <>
                        <div className={this.state.isSaulThere ? "" : "betterCallSaulDiv"}>
                          <h1>Season: {singleEp.season}</h1>
                          <h2>Episode #{singleEp.episode}</h2>
                          <h2>Title: {singleEp.title}</h2>
                          <h2>{singleEp.air_date}</h2>
                          <p>Characters Involved: {singleEp.characters}</p>
                        </div>
                      </>
                    )
                  }
                })
              )
            })}
            </div>
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