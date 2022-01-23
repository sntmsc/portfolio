import React from 'react'
import './App.css'
import Menu from './components/layout/header/Menu';
import Home from './components/home/Home';
import AboutMe from './components/AboutMe';
import Footer from './components/layout/Footer';
import { AnimatePresence } from 'framer-motion';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div>
            <Menu/>
            <AnimatePresence exitBeforeEnter>
              <Routes location={location} key={location.key}>
                <Route path="/" element={<Home/>}/>
                <Route path="about" element={<AboutMe/>}/>
              </Routes>
            </AnimatePresence>
            <Footer/>
    </div>
  );
}

export default App;
