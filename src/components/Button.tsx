import React from 'react';
import '../styles/components/Button.css';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="navbar-button">
      {text}
    </button>
  );
};

export default Button;
