import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Choosy from './components/Choosy';
import FAQ from './components/FAQ';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Categories />
      <Choosy />
      <FAQ/>
      <Footer />
    </div>
  );
}

export default App;
