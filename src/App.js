import React from 'react'
import './App.css'
import Menu from './components/layout/header/Menu';
import Home from './components/home/Home';
import AboutMe from './components/AboutMe';
import Footer from './components/layout/Footer';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <div>
            <Menu/>
            <AnimatePresence exitBeforeEnter>
              <Home/>
              <AboutMe/>
            </AnimatePresence>
            <Footer/>
    </div>
  );
}

export default App;
