import React from 'react'
import './App.css'
import Menu from './components/layout/header/Menu';
import Tittle from './components/layout/header/Tittle';
import Home from './components/home/Home';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div>
      <Menu/>
      <Tittle/>
      <Home/>
      <AboutMe/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
