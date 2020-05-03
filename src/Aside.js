import React from 'react';
import './App.css';
import './MediaQueries.css';

function Aside() {
   return (
      <aside className="wrapper">
         <div className="nav">
            <nav>
               <ul className="flex">
                  {/* navigation for links to related websites for project */}
                  <li><a href="https://breakingbadapi.com/documentation">Breaking Bad API</a></li>
                  <li><a href="http://www.mcabrera.ca">My Portfolio</a></li>
                  <li><a href="https://breakingbad.fandom.com/wiki/Breaking_Bad_Wiki">Official Website</a></li>
               </ul>
            </nav>
            </div>
         <h3 className="credits">Breaking Bad is owned by Vince Gilligan & AMC Networks. Data from the Breaking Bad API was used to create this App. Photos and audio files are owned by there respective creators. Project 5 submission for Juno College.</h3>
      </aside>
   )
}

export default Aside;