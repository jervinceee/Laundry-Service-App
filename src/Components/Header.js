import React from 'react';
import {} from '@mui/material';
import Logo from '../ICONS/icons8-washing-machine-96.png';
import profileImage from '../ICONS/icons8-customer-96.png';




function Header() {
  return (
  <header>
      <img src={Logo}
      alt=""
      className="logo"
      />
        <div className="profileContainer">
         <div className="imageBox">
             <img src={profileImage} 
             alt=""
             className='profilePic'
             />
            </div>
         <h2 className="userName">Juan Dela Cruz</h2>
         
        </div>
    </header>
  );
}

export default Header;
