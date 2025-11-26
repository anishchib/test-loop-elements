import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './Input'
import Output from './Output'

function App() {
  const [count, setCount] = useState(0)
  const [displayOutput,setDisplayOutput]=useState(true);

  return (
    <>
      <div className='container'>
        <Input />
       {displayOutput && <Output />} 


        
        
      </div>
      
          </>
  )
}

export default App
