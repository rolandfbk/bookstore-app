import React from 'react';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Header = () => (
  <header className="headerStyle">
    <div className="headerLeft">
      <h1>Bookstore CMS</h1>
      <Navbar />
    </div>
    <div className="Oval"><FontAwesomeIcon icon={faUser} /></div>
  </header>
);

export default Header;
