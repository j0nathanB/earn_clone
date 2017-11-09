import React from 'react';
import MenuCenter from './menu_center/MenuCenter.js'
import MenuRight from './menu_right/MenuRight.js'

const Navbar = () => (
  <div class='menu-container'>
    <div class="menu">
      <img class="logo" src="wordmark-square-gold.svg" />
      <div><MenuCenter /></div>
      <div><MenuRight /></div>
    </div>
  </div>
)

export default Navbar;