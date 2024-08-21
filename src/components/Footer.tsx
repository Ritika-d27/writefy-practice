import React from 'react';
import '../styles/components/Footer.css';
import Button from './Button';
import footerLogo from "../assets/logo/LightLogo.png"
import instaLogo from "../assets/hompageassests/instagram.svg"
import linkedInLogo from "../assets/hompageassests/linkedin.svg"


const Footer: React.FC = () => {
  return (
    <div className="footer">

   <div className='footer1'>
    <img className='footerlogo' src={footerLogo} />
      <span className='footertext'>Empowering students with expert writing and creative services across India.
        Join Writeyfy and elevate your academic game!
      </span>

      <div className='footericon'>
      <img
        src={instaLogo} alt="" />
      <img 
       src={linkedInLogo} alt="" />
      </div>

        </div>

        <div className='footer2'>
        <span className='text_for_writers'>For Writers</span>
        <span>Register</span>
        <span>Login</span>
        </div>

        <div className='footer3'>
        <span className='text_for_writers'>Navigate</span>
        <span>About Us</span>
        <span>Contact Us</span>
        <span>Privacy Policy</span>
        <span>Terms and Conditions</span>
        <span>Payment Policy</span>
        <span>Refund Policy</span>
        </div>

        <div className='footer4'>
        <span className='text_for_writers'>Contact Us</span>
        <span className='numfooter'>9004185304 / 9619305482</span>
        <span>writeyfy@gmail.com</span>
        <span className='footertext'>4008/9, Pannalal Compound, LBS Marg, Bhandup West, Mumbai</span>
        </div>

    </div>
  );
};

export default Footer;