import React from 'react'
import './App.css'
import Menu from './components/header/Menu';
import Tittle from './components/header/Tittle';
import Projects from './components/home/Projects';
import ModalProjects from './components/home/ModalProjects';

function App() {
  return (
    <div>
      <Menu/>
      <Tittle/>
      <Projects/>
      <ModalProjects/>
    </div>
  );
}

export default App;
