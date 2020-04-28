import React from 'react';
import './App.css';

function Aside() {
   return (
      <aside>
         {/* <div class="nav">
            <nav>
                  <ul class="flex">
                     <li><a href="">Breaking Bad API</a></li>
                     <li><a href="">My Portfolio</a></li>
                     <li><a href="">Official Website</a></li>
                  </ul>
            </nav>
            </div> */}
         <h3 className="credits">Breaking Bad API was used to create this App. Photos and audio files are not mine, and are owned by there respective creators</h3>
      </aside>
   )
}

export default Aside;