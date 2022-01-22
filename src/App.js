import React from 'react'
import './App.css'
import Menu from './components/layout/header/Menu';
import Tittle from './components/layout/header/Tittle';
import Home from './components/home/Home';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div>
      <Menu/>
      <Tittle/>
      <Home/>
      <Footer position='absolute' bottom='100%'/>
    </div>
  );
}

export default App;
