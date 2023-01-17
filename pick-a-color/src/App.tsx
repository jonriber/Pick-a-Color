import { useEffect, useState } from 'react'
import colors from './data/colors'
import './App.css'

function App() {
  const 
    [color, setColor] = useState<string>("blue"),
    [awnser, setAwnser] = useState<string[]>([]),
    [correctAwnser, setCorrectAwnser] = useState<boolean>(false),
    defaultColors = ["Black","Blue","Yellow"],
    getRandomColor = () => {
      return colors[Math.floor(Math.random()* colors.length)];
    }
 
  useEffect(() => {
    let actualColor = getRandomColor()
    setColor(actualColor.color);

  },[])

  const checkAnwser = (colorValue: string) => {
    console.log("checkAnwser:",color);
    if(colorValue === color){
      console.log("Correta!")
      console.log("gerar nova cor!");
      let newColor = getRandomColor();
      setColor(newColor.color);
    }

  }

  return (
    <div className="App">
      <div className='colorBox' style={{background: color}}>

      </div>
      <div className='colorOptions'>
        {defaultColors.map((colorValue) => {
          return <button id={colorValue} onClick={() => checkAnwser(colorValue)}>{colorValue}</button>
        })}
      </div>
      <div className='Awnser'>
        {!correctAwnser ? <h3>Wrong Awnser!</h3> :<h3> Correct Awnser!</h3>}
      </div>
    </div>
  )
}

export default App
