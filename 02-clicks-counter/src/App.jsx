import { useState } from 'react'
import './App.css'
import clickImage from './assets/images/click.png'
import calculatorImage from './assets/images/calculator.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='title'>Click´s Counter</h1>
      <div className='App'>
        <img className='click-counter-image' src={clickImage} alt="Click Counter image" />
        <img className='calculator-image' src={calculatorImage} alt="Calculator image" />
      </div>
    </>
  );
}

export default App
