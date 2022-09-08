import React, { useState } from 'react';
import bars from '../Assests/Images/menu1.svg';
import logo from '../Assests/Images/logo.png';
import '../Styles/Header.css';


const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
  

    return (
      <nav className='navigation'>
        <div className='logo-container'>
        <img src={logo} className="logo" alt='yellow background heartshaped h and s' />
        </div>

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
        <img src={bars} className="hamburger" alt='three vertical black lines'/>        
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
              <a href='/#About'>About</a>
            </li>
            <li onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}>
              <a href="/#Contributors">Contributors</a>
            </li>
            <li onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}>
              <a href="/#Socials">Follow us</a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
  
    );
}
export default Header;