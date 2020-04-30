import React, { Component } from 'react';
import './App.css';
import firebase from './firebase';
import Review from './Review'

class Poll extends Component {
   constructor(){
      super()
      this.state = {
         review: [],
         userInput: '',
      }
   }
   componentDidMount() {
      const dbRef = firebase.database().ref();
      dbRef.on('value', (results) => {
         const data = results.val()
         //turn data from object into an array. 
         //for in loop would do that
         //creating a empty bad array and pushing the data[key] from firebase into the array we have. 
         const badArray = []
         for (let key in data) {
            const myStuff = data[key];
            // instead of pushing a string, now we are pushing an object into the empty badArray.
            badArray.push({ badName: myStuff, badId: key })
            this.setState({
               review: badArray
            })
         }
      })
   }

   handleSubmit = (event) => {
      event.preventDefault()
      // take the input from the user and add to this.state.review
      // console.log(this.state.userInput)
      // make a copy of this.state.review using SPREAD
      // push the userInput into the new array, the code below uses below!
      if (this.state.userInput !== '') {
         const dbRef = firebase.database().ref()
         dbRef.push(this.state.userInput)
         this.setState({
            userInput: ''
         })
      }
   }


   handleUserInput = (event) => {
      // take event.target.value, or what the user is typing
      // put it into this.state.userInput property
      this.setState({
         userInput: event.target.value
      })
   }


   render() {
      return (
         <div>
            <h1>Write Your Reviews</h1>
            {/* take the input from the user and add to this.state.review */}
            <form action="" onSubmit={this.handleSubmit}>
               <input type="text" id='userBad' value={this.state.userInput} onChange={this.handleUserInput} />
               <button type="submit">Add Review</button>
            </form>
            <ul>
               {/* your calling this state to access the bad array which is mapped out and put into a review parameter, we call the Review/> and add an attribute badtitle which is used inthe review/> component */}
               {this.state.review.map((singleReview) => {
                  // console.log(singleReview.badId)
                  return (
                     <Review badId={singleReview.badId} badTitle={singleReview.badName} />
                  )
               })}
            </ul>
         </div>
      )
   }
}

export default Poll;