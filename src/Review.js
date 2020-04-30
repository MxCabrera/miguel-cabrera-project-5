import React from 'react';
import './App.css';
import firebase from './firebase'

function Review(props) {


   const deleteItem = () => {
      const itemRef = firebase.database().ref(props.badId)
      itemRef.remove()
      console.log(props.badId)
   }

   return (
      <li onClick={deleteItem}>{props.badTitle}</li>
   )
}

export default Review;