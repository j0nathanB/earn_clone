import React from 'react';
import Notifications from './dashboard/Notifications.js'

import BaseInfo from './dashboard/profileInfo/profile/BaseInfo.js'
import About from './dashboard/profileInfo/About.js'

import Details from './profileConfig/Details.js';
import Donations from './profileConfig/Donations.js';
import Linked from './profileConfig/Linked.js';
import Lists from './profileConfig/Lists.js';
import Prices from './profileConfig/Prices.js';
import Public from './profileConfig/Public.js';
import Security from './profileConfig/Security.js';


const Profile = () => (
  <div>
    <Notifications />
    <BaseInfo />
    <About />
    <Public />
    <Prices />
    <Donations />
    <Lists />
    <Details />
    <Security />
    <Linked />
  </div>
)

export default Profile;