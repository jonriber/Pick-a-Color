import { useEffect, useState } from 'react'
import colors from './data/colors'
import './App.css'

function App() {
  const [color, setColor] = useState<string>("blue")
 
  useEffect(() => {
    let randomColor = colors[Math.floor(Math.random()* colors.length)];
    setColor(randomColor.color);

  },[])

  const checkAnwser = () => {
    
  }

  return (
    <div className="App">
      <div className='colorBox' style={{background: color}}>

      </div>
      <div className='colorOptions'>
        <button>option 1</button>
        <button>option 2</button>
        <button>option 3</button>
      </div>
    </div>
  )
}

export default App
