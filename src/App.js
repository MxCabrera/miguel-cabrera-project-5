import React, { Component } from 'react';
import './App.css';
import './MediaQueries.css';
import { Howl, Howler } from 'howler';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside'
import './Setup.css';
import axios from 'axios';
import audioClips from './audioClips';
import ReviewBox from './ReviewBox';
import gunshot from './assets/salamanca.mp3';
import shows from './assets/shows.mp3';
import soundboard from './assets/soundboard.mp3';

class App extends Component {
  // the birthing of the lifecycle, creation of state
  constructor() {
    super();
    // state containing necessary property for app to work
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
      soundStorage: undefined
    };
  };


  // calling getApiData immediately when the component mounts on DOM
  componentDidMount() {
    this.getApiData();
  };


  // function that uses axios to grab information from selected API
  getApiData = () => {
    // storing the API url endpoints into separate variables
    let characters =`https://www.breakingbadapi.com/api/characters?limit=16`;
    let quotes = `https://www.breakingbadapi.com/api/quotes/`;
    let death = `https://www.breakingbadapi.com/api/deaths/`;
    let episodes = `https://www.breakingbadapi.com/api/episodes/`;
    // using axios.get with each url variable and storing it
    const requestOne = axios.get(characters);
    const requestTwo = axios.get(quotes);
    const requestThree = axios.get(death);
    const requestFour = axios.get(episodes);
    // using axios.all to grab all requests in an array, and then spreading it into individual objects.
    axios.all([requestOne, requestTwo, requestThree, requestFour]).then(axios.spread((...responses) => {
      // taking the spread array, and storing the individual items into variable
      const infoOne = responses[0];
      const infoTwo = responses[1];
      const infoThree = responses[2];
      const infoFour = responses[3];
      // setting the state, pushing each variable into a property, enclosing it in an array.
      this.setState({
        breakBadArray: responses,
        charArray: [infoOne],
        quoteArray: [infoTwo],
        deathArray: [infoThree],
        epArray: [infoFour]
      });
    })).catch(errors => {
      // check to see if the axios call failed
      console.log(errors, 'it didnt work!');
    });
  };



  // function that takes info passed from onClick and randomly chooses a mp3 file from array of audio
  CreateSounds = (src) => {
    // storing parameter into variable
    const characterSounds = src;
    // grabbing a random mp3 file from array and storing it
    const random = characterSounds[Math.floor(Math.random() * characterSounds.length)];
    // calling function with randomly chosen mp3 file
    this.BadSounds(random);
  };

  // function that takes the audio file that's randomly chosen, store it in state, and play it
  BadSounds = (src) => {
    // if statement that checks state to see if its undefined, if its not then stop the content
    if (this.state.soundStorage) {
      this.state.soundStorage.stop();
    };
    // sound variable containing howler.js library that create an object with parameter passed from onClick
    const sound = new Howl({
      src
    });
    // changing state property - pushing sound variable into soundStorage (intially undefined)
    this.setState({
      soundStorage: sound
    });
    // playing the audio file in DOM.
    sound.play();
  };
  
  // when called plays audio file and changes state to show selected sections
  playSection = (src) => {
    this.audio = new Audio(src);
    // play audio 
    this.audio.volume = 0.2;
    this.audio.play();
    // is src === the import file, then change state to show section.
    if (src === shows) {
      this.setState({
        //state values to be opposite of current value
        // set state of the related property value to false
        // user will see clicked section only
        endpoint3: !this.state.endpoint3, 
        endpoint1: false, 
        endpoint2: false,
      });
    } else if ( src === soundboard) {
      this.setState({
        endpoint1 : !this.state.endpoint1, 
        endpoint2: false, 
        endpoint3: false
      });
    } else if (src === gunshot) {
      this.setState({
        endpoint2: !this.state.endpoint2, 
        endpoint1: false, 
        endpoint3: false
      });
    };
  };


  // function when clicked scrolls web page to the top
  scrollUp = () => {
    window.scrollTo(0,800);
  };
  // function when clicked scrolls webpage to the bottom
  scrollDown = () => {
    window.scrollTo(0,99999);
  };


  render(){
    Howler.volume(0.5);
    return (
      <>

      <Header />

      <main>
        <section>
          {/* main title  */}
          <h1 className="intro">Albuquerques Most Wanted</h1>
          <h3 className="hover">If you've seen them, call DEA</h3>
          <h3 className="hover instructions"> click to hear your favourite characters 3 randomly selected quotes! </h3>
          {/* main buttons*/}
          <div>
            <button 
            className="topicButtons" 
            // onClick to call playSection function with imported file as parameter
            onClick={() => this.playSection(shows)}
            >Shows</button>
            <button 
            className="topicButtons" 
            onClick={()=> this.playSection(soundboard)}
            >SoundBoard</button>
            <button 
            className="topicButtons" 
            onClick={() => this.playSection(gunshot)}
            >Deaths</button>
          </div>

          <div className="sticky">
            <div className="arrows">
              <div className="arrow1" onClick={this.scrollUp}></div>
              <a href="#revi"><div className="arrow2" onClick={this.scrollDown}></div></a>
            </div>
          <div className="wrapper flex space">

            {/* sound board section  */}

            {/* className that contains ternary operator that changes between two classes */}
            <span className={this.state.endpoint1 ? "flex" : "displayNone"}>
              <div className="badSounds">
                <h2 className="mainTitle">Bad Sounds</h2>
                <h3 className="remix">Remix</h3>
              </div>
              <div className="flex">
            {/* mapping charArray from state and display the data*/}
            {this.state.charArray.map((allBadInfo)=>{
              // containing map parameter in variable
              const results = allBadInfo.data
              return(
                // mapping results variable to get into another level 
                results.map((deeper, index)=>{
                  return(
                    // sound board character cards begin here
                    // div contains onClick that calls function to start audio functions. This connected my audioClips.js array to the mapped information from the API
                    <div className="actorSound" key={index} onClick={() => this.CreateSounds(audioClips[deeper.name].sound)}>
                      <li className="characterBox" key={index}>
                        <div>
                          <img src={deeper.img} alt={deeper.name} />
                        </div>
                        <div className="infoBox">
                          <h2>{deeper.name}</h2>
                          <div className="infoP">
                            <h3 className="characterInfo"><span className="infoStats">Nickname:</span> {deeper.nickname}</h3>
                            <p className="characterInfo"><span className="infoStats">Birthday:</span> {deeper.birthday}</p>
                            <p className="characterInfo"><span className="infoStats">Actor:</span><a href={audioClips[deeper.name].link}> {deeper.portrayed}</a> </p>
                            <p className="characterInfo"><span className="infoStats">Occupation:</span></p>
                            {deeper.occupation.map((occupation, i)=>{
                              return(
                                <p key={i} className="characterInfo"> {occupation} </p>
                              )
                            })}
                            <p className="characterInfo"><span className="infoStats">Health Statue:</span> {deeper.status}</p>
                            <p className="characterInfo"><span className="infoStats">Appearances:</span> {deeper.category}</p>
                            <p className="characterInfo"><span className="infoStats">Quote:</span> "{audioClips[deeper.name].quote}"</p>
                          </div>
                        </div>
                        {/* added "pins" to the DOM for asthetic purposes */}
                        <span className="pin">O</span>
                      </li>
                    </div>
                  );
                })
              );
            })};



            {/* Quote endpoint section */}
            <aside className="quoteBox">
              <h2 className="quoteTop">Guess who said it?!</h2>    
              {/* mapping quoteArray from state and displaying data     */}
              {this.state.quoteArray.map((quoteStuff)=>{
                // storing mapped parameter into variable
                const quoteResults = quoteStuff.data
                return(
                  // mapping another level further to get access to info
                  quoteResults.map((singleQuote, i)=>{
                    // if statement that request the specific quotes to show to DOM
                    if(singleQuote.quote_id <= '9' && singleQuote.quote_id >= '7') {
                      return(
                        // small quiz section on DOM
                        <div key={i} className="quoteQuestions">
                        <h2>"{singleQuote.quote}"</h2>
                        <div className={ this.state.isAnswerShowing ? "displayNone" : "quizChoices"}>
                          <label htmlFor="quotes1"><input type="radio" id="quotez1" name="quiz1"/> Saul Goodman</label>
                          <label htmlFor="quotes2"><input type="radio" id="quotez2" name="quiz2" /> Jesse Pinkman</label>
                          <label htmlFor="quotes3"><input type="radio" id="quotez3" name="quiz3" /> Walter White</label>
                        </div>
                        {/* ternary operator to determine when user want to see the answers revealed (currently display: none)  */}
                        <h3 className={ this.state.isAnswerShowing ? "quoteAnswers" : "displayNone"}>Answer: {singleQuote.author}</h3>
                        </div>
                      );
                    };
                  })
                  );
                })}
                {/* button when clicked, changes the state so that it is the opposite of original value to display answers */}
                <button 
                className="quoteButton"
                onClick={() => {
                  // setting state to opposite of current value to reveal answers to DOM when user clicks
                  this.setState({
                    isAnswerShowing: !this.state.isAnswerShowing
                  })}}>Click here to find out</button>
              </aside>
              </div>
            </span>



            {/* deaths endpoint section */}
            {/* ternary operator to determine if user wants to see this section if not, display none */}
            <div className={this.state.endpoint2 ? "logo" : "displayNone"}>
              <div className="titleDiv">
                <h2 className="mainTitle">List of Deceased:</h2>
              </div>
              <h3 className="spoilers">*Warning: SPOILERS*</h3>
                <div className="flex">
                {/* map method on deathArray from state and display data */}
                {this.state.deathArray.map((deathStuff) => {
                  // storing mapped parameter into variable
                  const deathResults = deathStuff.data
                  return (
                    // mapped variable to get to next level of info
                    deathResults.map((singleDeath, i) => {
                      return (
                        // death section displayed on DOM
                        <div key={i} className="BscDiv">
                          <h3 className="deathInfoT"> <span className="whoDied">{singleDeath.death}</span></h3>
                          <p className="deathInfo">Cause of Death:</p>
                          <p className="showTitle">{singleDeath.cause}</p>
                          <p className="deathInfo">Responsible:</p>
                          <p className="showTitle">{singleDeath.responsible}</p>
                          <p className="deathInfo">Last words:</p>
                          <p className="showTitle">"{singleDeath.last_words}"</p>
                          <p className="deathInfo">What episode:</p>
                          <p className="showTitle"> Season {singleDeath.season}, Episode {singleDeath.episode}</p>
                        </div>
                      )
                    })
                  )
                })}
              </div>
            </div>



            {/* seasons endpoint section */}
            {/* ternary operator to determine if user want to see this section */}
            <div className={this.state.endpoint3 ? "" : "displayNone"}>
              <div className="titleDiv">
                <h2 className="mainTitle">Season Breakdown</h2>
              </div>
              <div>
                <button 
                  className="showButtons"
                  // on click that changes state property to opposite value which display breaking bad seasons
                  onClick={()=> this.setState({isBadThere : !this.state.isBadThere, isSaulThere: false})}
                  >Breaking Bad
                </button>
                <button 
                  className="showButtons"
                  // on click that changes state property to opposite value to display better call saul seasons
                  onClick={() => this.setState({ isSaulThere: !this.state.isSaulThere, isBadThere: false })}
                  >Better Call Saul
                </button>
              </div>
              <div className="flex">
                {/* mapped epArray from state to display data */}
                {this.state.epArray.map((tvStuff)=>{
                  // storing mapped parameter into variable
                  let tvResults = tvStuff.data
                  return(
                    // mapped variable to get to next level on info
                    tvResults.map((singleEp, i)=>{
                      // if statement to check if the series is breaking bad, return these values.
                      if (singleEp.series === 'Breaking Bad'){
                        return(
                          <>
                            {/* ternary operator to change between classes if user request it. */}
                            <div key={i} className={this.state.isBadThere ? "BBDiv" : 'displayNone'}>
                              <h2 className="infoEp">Season: {singleEp.season}, Episode #{singleEp.episode}</h2>
                              <p className="showTitle">Title: {singleEp.title}</p>
                              <p className="infoShow">Release Date: </p>
                              <p className="showTitle">{singleEp.air_date}</p>
                              <p className="infoShow"> Characters Involved:</p>
                              {singleEp.characters.map((characters, i) => {
                                return (
                                  <p key={i} className="showTitle">- {characters}</p>
                                )
                              })}
                            </div>
                          </>
                        )
                        // if statement to check if the series is better call saul, return these values.
                      } else if (singleEp.series === 'Better Call Saul') {
                        return(
                          <>
                            <div className={this.state.isSaulThere ? "BBDiv2" : "displayNone"}>
                              <h2 className="infoEp">Season: {singleEp.season}, Episode #{singleEp.episode}</h2>
                              <p className="showTitle">Title: {singleEp.title}</p>
                              <p className="infoShow">Release Date: </p>
                              <p className="showTitle">{singleEp.air_date}</p>
                              <p className="infoShow"> Characters Involved:</p>
                              {singleEp.characters.map((characters, i)=>{
                                return(
                                  <p key={i} className="showTitle">- {characters}</p>
                                );
                              })};
                            </div>
                          </>
                        );
                      };
                    })
                  );
                })};
              </div>
            </div>
            {/* onclick that calls scroll up function to guide users webpage to top of page */}
          </div>
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