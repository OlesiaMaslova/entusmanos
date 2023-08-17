import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
        <div className='header__logo'></div>
        <div className='header__menu'>
            <button className='header__menu_btn'>SignUP</button>
            <button className='header__menu_btn'>SignIN</button>
        </div>


      
    </div>
  );
}

export default Header;
