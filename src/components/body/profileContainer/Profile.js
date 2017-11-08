import React from 'react';

import BaseInfo from './dashboard/profileInfo/profile/BaseInfo.js'
import About from './dashboard/profileInfo/About.js'

import Prices from './profileConfig/Prices.js';
import Public from './profileConfig/Public.js';


const Profile = () => (
  <div>
    <BaseInfo />
    <About />
    <Public />
    <Prices />
  </div>
)

export default Profile;