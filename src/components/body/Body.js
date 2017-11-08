import React from 'react';
import Navbar from './navbar/Navbar.js';
import Panel from './profileContainer/Panel.js'
import Profile from './profileContainer/Profile.js';

const Body = () => (
  <div>
    <div><Navbar /></div>
    <div className="profile-container">
      <div className="profile">
        <div><Panel /></div>
        <div><Profile /></div> 
      </div>
    </div>
  </div>
)

export default Body;