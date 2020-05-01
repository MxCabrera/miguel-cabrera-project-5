import React from 'react';
import './App.css';
import firebase from './firebase'
import ReviewBox from './ReviewBox'
// import Moment from 'moment'

function Review(props) {
   // const moment = require('moment');
   // const today = moment();
   // const date = today.format('lll');
   // let datetime = new Date()
   // console.log(datetime);
console.log(ReviewBox)
   const deleteReview = () => {
      const itemRef = firebase.database().ref(props.badId)
      itemRef.remove()
      // console.log(props.badId)
   }

   return (
   <li className="singleReview" onClick={deleteReview}><span>Anonymous User:</span><span>"{props.badTitle}"</span></li>
   )
}

export default Review;