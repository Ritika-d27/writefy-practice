import React from 'react'
import { Check } from 'lucide-react'
import person from '../assets/peoples.svg'
import '../styles/components/Hero.css'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Escape the all Nighter-Trap!</h1>
        <div className="hero-subtitle">
        <p>
          Post your assignments and find writers.<br/>Academic success, just a step away!
              </p>
              </div>
        <button className="hero-button">post your assignment</button>
        <div className="hero-features">
          <span className="feature-item"><Check size={18} color="green" /> Easy</span>
          <span className="feature-item"><Check size={18} color="green" />Effective</span>
          <span className="feature-item"><Check size={18} color="green" />Efficient</span>
        </div>
          </div>
          <div className="hero-tags">
        <span className="tag-item">IoT/Embedded</span>
        <span className="tag-item">Management</span>
        <span className="tag-item">Sociology</span>
        <span className="tag-item">Cloud Computing</span>
        <span className="tag-item">Medicine</span>
      </div>
      <div className="hero-illustration">
        <img src={person} alt="Illustration of people" />
      </div>
      
    </section>
  )
}

export default Hero