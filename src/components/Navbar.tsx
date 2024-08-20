import React from 'react';
import '../styles/components/Navbar.css';
import Button from './Button';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Writeyfy</div>
      <div className="navbar-links">
        <Button text="For Writers" />
        <Button text="Register" />
        <Button text="Login" />
      </div>
    </nav>
  );
};

export default Navbar;
