import React from 'react';
import Navbar from './navbar/Navbar.js';
import Panel from './profileContainer/Panel.js'
import Profile from './profileContainer/Profile.js';

const Body = () => (
  <div>
    <div><Navbar /></div>
    <div className="profile-container">
      <div className="profile">
        <Panel />
        <div className="profile-info"> 
          <div><Profile /></div> 
        </div>
      </div>
    </div>
  </div>
)

export default Body;