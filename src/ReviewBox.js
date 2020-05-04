import React, { Component } from 'react';
import './App.css';
import './MediaQueries.css';
import './Setup.css';
import firebase from './firebase';
import Review from './Review';

class ReviewBox extends Component {
   // birthing of this life cycle, state
   constructor(){
      super();
      // setting state with properties necessary for app to work
      this.state = {
         review: [],
         userInput: '',
      };
   };
   // componentDidMount to initialize firebase, storing it in a variable
   // pushing firebase variable into state property
   componentDidMount() {
      // storing firebase
      const dbRef = firebase.database().ref();
      // when firebase value changes, call function
      dbRef.on('value', (results) => {
         // saving parameter in variable
         const data = results.val();
         //turn data from object into an array. 
         //creating a empty bad array and pushing the data[key] from firebase into the array we have. 
         const badArray = [];
         for (let key in data) {
            const myStuff = data[key];
            // pushing object into the empty badArray.
            badArray.push({ badName: myStuff, badId: key });
            // setting state with the badArray as the review property value.
            this.setState({
               review: badArray
            });
         };
      });
   };

   // function that when user submits, pushes the user input value into firebase
   handleSubmit = (event) => {
      event.preventDefault();
      // if statement that checks if userInput is not an empty string, continue statement.
      if (this.state.userInput !== '') {
         // storing firebase
         const dbRef = firebase.database().ref();
         // pushing this.state.userInput value into firebase
         dbRef.push(this.state.userInput);
         // setting state to make userInput on DOM clear when submitted
         this.setState({
            userInput: '',
            userNumber: this.state.userNumber + 1
         });
      };
   };

   // function that determines what the user has typed out and stores it in state.
   handleUserInput = (event) => {
      // take event.target.value, or what the user is typing
      // put it into this.state.userInput property
      this.setState({
         userInput: event.target.value
      });
   };


   render() {
      return (
         <div className="wrapper">
            <div className="reviewBox">
               <h1 className="reviewTitle">Write Your Bad Reviews</h1>
               <ul className="reviewComp">
                  {/* mapped review property fron state to display data */}
                  {this.state.review.map((singleReview, i) => {
                     return (
                        // review class component imported from Review.js
                        <Review key={i} badId={singleReview.badId} badTitle={singleReview.badName} />
                     )
                  })}
               </ul>
               {/* take the input from the user and add to this.state.review */}
               <form className="form" action="" onSubmit={this.handleSubmit}>
                  <textarea 
                  type="text" 
                  className="reviewInput" 
                  // value of input is the userInput from state
                  value={this.state.userInput} 
                  // when input changes, call handleUserInput function
                  onChange={this.handleUserInput} 
                  placeholder="Tell us what you love/hate about Breaking Bad!"
                  />
                  <button className="reviewSubmit" type="submit">Add Review</button>
               </form>
            </div>
         </div>
      );
   };
};

export default ReviewBox;