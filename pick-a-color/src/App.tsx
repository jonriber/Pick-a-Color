import { useEffect, useState } from 'react'
import colors from './data/colors'
import './App.css'

function App() {
  const 
    [color, setColor] = useState<string>(""),
    [awnser, setAwnser] = useState<string[]>([]),
    [correctAwnser, setCorrectAwnser] = useState<boolean>(false),
    [wrongAwnser, setWrongAwnser] = useState<boolean>(false),
    getRandomColor = () => colors[Math.floor(Math.random()* colors.length)],
    pickColor = () => {
      let actualColor = getRandomColor();
      setColor(actualColor);
      setAwnser([actualColor,getRandomColor(),getRandomColor()].sort(() => 0.5 - Math.random()));
      setCorrectAwnser(false);
    };
    // defaultColors = [color,getRandomColor(),getRandomColor()].sort(() => 0.5 - Math.random());

  useEffect(() => {
    // setColor(getRandomColor())
    pickColor()
  },[]);

  const checkAnwser = (colorValue: string) => {
    if(colorValue === color){
      setWrongAwnser(false);
      setCorrectAwnser(true);
      setTimeout(() => pickColor(),2000);
      
    }else{
      setWrongAwnser(true);
    }
  }

  return (
    <div className="App">
      <div className='title'>
        <h1>Pick a Color Game</h1>
      </div>
      <div className='colorBox' style={{background: color}}>
      </div>
      <div className='colorOptions'>
        {awnser.map((colorValue) => {
          return <button disabled={correctAwnser} id={colorValue} onClick={() => checkAnwser(colorValue)}>{colorValue}</button>
        })}
      </div>
      <div className='Awnser'>
        {correctAwnser && <h3> Correct Awnser!</h3>}
        {wrongAwnser && <h3> Wrong Awnser!</h3>}
      </div>
      <footer className='footer'>
        <h4>By Jonatas Ribeiro. 2023.</h4>
      </footer>
    </div>
  )
}

export default App
