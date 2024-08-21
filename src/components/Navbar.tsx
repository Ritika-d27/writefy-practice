import React, { useState } from 'react';
import '../styles/components/Navbar.css';
import Button from './Button';
import wrtLogo from '../assets/wrtLogo.webp';
import mobileLogo from '../assets/logo/writeyfyPhonelogo.webp';  // Add your mobile logo

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img className="logo-desktop" src={wrtLogo} alt="Writeyfy" />
                <img className="logo-mobile" src={mobileLogo} alt="Writeyfy" />
            </div>
            <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                <button className="for-writer custom-button clrs">
      for writers
    </button>
               <button className="signin custom-button clrs">
      sign in
    </button>
            </div>
        </nav>
    );
};

export default Navbar;
