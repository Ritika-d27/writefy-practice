import React from 'react';
import '../styles/components/Button.css'; // Ensure you have this CSS file

interface ButtonProps {
  text: string;
  onClick?: () => void;
  clrs: string;
}

const Button: React.FC<ButtonProps> = ({ text, clrs, onClick }) => {
  return (
    <button className="custom-button-1 custom-button clrs" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
