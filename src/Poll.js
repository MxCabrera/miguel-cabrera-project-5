import React, { Component } from 'react';
import './App.css';

class Poll extends Component {
   render() {
      return (
         <section>
            <div>
               <form action="">
                  <h1>Which Character is your favorite?</h1>
                  <label htmlFor=""><input type="radio"/>Heisenburg</label>
                  <label htmlFor=""><input type="radio"/>Cap N Cook</label>
                  <label htmlFor=""><input type="radio"/>Mike</label>
                  <label htmlFor=""><input type="radio"/>Gus</label>
               </form>
            </div>
         </section>
      )
   }
}

export default Poll;