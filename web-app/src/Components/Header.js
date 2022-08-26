import React, { useState } from 'react';
import bars from '../images/menu1.svg';
import logo from '../images/logo.png';

import '../Styles/Header.css';


const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
  

    return (
      <nav className='navigation'>
        {/*  --- Logo  --- */}
        <div className='logo-container'>
        <img src={logo} className="logo" />
        </div>

        {/* --- inbetween space --- */}


        <div className='brand-name-logo'>
          <a href='/' className='brand-name' > HotSoup </a>
        </div>
        
        <div className='menu-container'>
        <button 
          className='hamburger'
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        > 
        <img src={bars} className="hamburger" />        
        </button>
  
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}>
              <a href='/'>About</a>
            </li>
            <li onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}>
              <a href="/Menu">Contributors</a>
            </li>
            <li onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}>
              <a href="/socials">Follow us</a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
  
    );
}
export default Header;