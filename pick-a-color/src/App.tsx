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
      setCorrectAwnser(false);
    },
    defaultColors = [color,getRandomColor(),getRandomColor()].sort(() => 0.5 - Math.random());

  useEffect(() => {
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
      <div className='colorBox' style={{background: color}}>
      </div>
      <div className='colorOptions'>
        {defaultColors.map((colorValue) => {
          return <button disabled={correctAwnser} id={colorValue} onClick={() => checkAnwser(colorValue)}>{colorValue}</button>
        })}
      </div>
      <div className='Awnser'>
        {correctAwnser && <h3> Correct Awnser!</h3>}
        {wrongAwnser && <h3> Wrong Awnser!</h3>}
      </div>
    </div>
  )
}

export default App
