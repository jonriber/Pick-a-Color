import { useEffect, useState } from 'react'
import colors from './data/colors'
import './App.css'

function App() {
  const 
    [color, setColor] = useState<string>("blue"),
    [awnser, setAwnser] = useState<string[]>([]),
    defaultColors = ["Black","Blue","Yellow"];
 
  useEffect(() => {
    let actualColor = colors[Math.floor(Math.random()* colors.length)];
    setColor(actualColor.color);

  },[])

  const checkAnwser = () => {

  }

  return (
    <div className="App">
      <div className='colorBox' style={{background: color}}>

      </div>
      <div className='colorOptions'>
        {defaultColors.map((color) => {
          return <button id={color}>{color}</button>
        })}
      </div>
    </div>
  )
}

export default App
