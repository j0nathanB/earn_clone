import React from 'react';
import Navbar from './navbar/Navbar.js';
import Panel from './profileContainer/Panel.js'
import ProfileContainer from './profileContainer/Profile.js';

const Body = () => (
  <div className="container">
    <div className="row"><Navbar /></div>
    <div className="row">
      <div className="col-4"><Panel /></div>
      <div className="col-8"><ProfileContainer /></div> 
    </div>
    
  </div>
)

export default Body;