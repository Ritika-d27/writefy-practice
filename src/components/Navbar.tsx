import React from 'react';
import '../styles/components/Navbar.css';
import Button from './Button';
import writefyLogo from '../assets/writefyLogo.svg'
import wrtLogo from '../assets/wrtLogo.webp';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
          <div className="navbar-logo"><img src={wrtLogo} alt="hello" /></div>

      <div className="navbar-links">
        <Button text="For Writers" />
        <Button text="Register" />
        <Button text="Login" />
          </div>
    </nav>
  );
};

export default Navbar;
