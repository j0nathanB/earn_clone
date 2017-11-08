import React from 'react';
import MenuCenter from './menu_center/MenuCenter.js'
import MenuRight from './menu_right/MenuRight.js'

const Navbar = () => (
  <div class='menu-container'>
    <div class="menu">
      <div class="col"><pre>img</pre></div>
      <div class="col6"><MenuCenter /></div>
      <div class="col"><MenuRight /></div>
    </div>
  </div>
)

export default Navbar;