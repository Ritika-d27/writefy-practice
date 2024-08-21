import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Choosy from './components/Choosy';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import HowItWorks from './components/HowItWorks'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Categories />
      <Choosy />
      <FAQ/>
      <HowItWorks/>
      <Footer />
    </div>
  );
}

export default App;
