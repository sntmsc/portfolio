import React from 'react'
import './App.css'
import Menu from './components/header/Menu';
import Tittle from './components/header/Tittle';
import Home from './components/home/Home';

function App() {
  return (
    <div>
      <Menu/>
      <Tittle/>
      <Home/>
    </div>
  );
}

export default App;
