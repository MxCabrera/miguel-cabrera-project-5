import React, { Component } from 'react';
import './App.css';
import firebase from './firebase';

class Footer extends Component {
  render() {
    return (
        <footer>
            <div className="copyright">
          <p>© Code and Design - Miguel Cabrera 2020</p>
            </div>
        </footer>
    )
  }
}

export default Footer;