import React from 'react';
import './App.css';
import './MediaQueries.css';
import './Setup.css';
import firebase from './firebase';
// import Moment from 'moment'

function Review(props) {

   // deletes the selected list item that was previous submitted from firebase/DOM 
   const deleteReview = () => {
      // ***TURNED THIS OFF***
      // const itemRef = firebase.database().ref(props.badId)
      // itemRef.remove()

   }

   return (
      // li that will be submitted into firebase and calls deleteReview function when clicked
      <li className="singleReview" onClick={deleteReview}><span>Anonymous User:</span><span>"{props.badTitle}"</span></li>
   )
}

export default Review;