import React from 'react';
import '../styles/components/Navbar.css';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">Writeyfy</div>
      <div className="navbar-links">
        <Button text="For Writers" />
        <Button text="Register" />
        <Button text="Login" />
      </div>
    </div>
  );
};

export default Footer;