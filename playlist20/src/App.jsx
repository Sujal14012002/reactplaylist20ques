import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './user'
import Clock from './clock'

function App() {
  

  const[color,setcolor]=useState()
  
 
  return (
    <>


    <select onChange={(e)=>setcolor(e.target.value)}>
      <option value={"green"}>green</option>
      <option value={"white"}>white</option>
      <option value={"blue"}>blue</option>
      

    </select>
    <h1>{color}</h1>

    


    <Clock color={color} />
  
  







   </>
  )
}

export default App;
