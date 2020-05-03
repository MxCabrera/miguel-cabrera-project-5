import React, { Component } from 'react';
import './App.css';
import './MediaQueries.css';
class Footer extends Component {
  render() {
    // contains the copyright footer
    return (
        <footer>
            <div className="copyright">
          <p>Copyright © 2020 by Miguel Cabrera</p>
            </div>
        </footer>
    )
  }
}

export default Footer;