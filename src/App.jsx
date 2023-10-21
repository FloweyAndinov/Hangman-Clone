import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx';
import Figure from './components/Figure.jsx';
import WrongLetters from './components/WrongLetters';

function App() {
  return (
  <>
  <Header/>
  <div className='game-container'>
    <Figure/>
    <WrongLetters/>
  </div>
  </>
  )
}

export default App
