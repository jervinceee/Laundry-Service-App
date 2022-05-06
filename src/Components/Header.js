import React from 'react';
import {} from '@mui/material';
import { 
    BarChart,
     SearchRounded,
      ShoppingCartRounded,
     } from '@mui/icons-material';

import Logo from '../ICONS/icons8-washing-machine-96.png';
import profileImage from '../ICONS/icons8-customer-96.png';




function Header() {
  return (
    <header>
      <img src={Logo}
      alt=""
      className="logo"
      />
      <div className="inputBox">
        <SearchRounded className="searchIcon"/>
        <input type="text" placeholder="Search"/>
      </div>

      <div className="shoppingCart">
        <ShoppingCartRounded className="cart"/>
        <div className="cart_content">
          <p>2</p>
        </div>
      </div>

      <div className="profileContainer">
        <div className="imageBox">
          <a href="/Login.js">
            <img src={profileImage} alt="" className='profilePic'/>
          </a>
        </div>
        <h2 className="userName">Juan Dela Cruz</h2>    
      </div>

      <div className="toggleMenu">
        <BarChart className="toggleIcon"/>
      </div>
    </header>
  );
}

export default Header;
